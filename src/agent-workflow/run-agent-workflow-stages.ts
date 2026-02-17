import {readFile} from 'node:fs/promises';

import type {AgentWorkflowInput, AgentWorkflowVerificationCheck, SourceOfTruthReadResult} from './types.js';
import type {ProblemDetails} from '../types/problem-details.js';

interface AgentWorkflowStageOutcome {
  isSuccessful: boolean;
  note: string;
  problem?: ProblemDetails;
}

interface IntakeStageOutcome extends AgentWorkflowStageOutcome {
  sourceOfTruthReadResults: SourceOfTruthReadResult[];
  verificationChecks: AgentWorkflowVerificationCheck[];
}

const SAFETY_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /bypass|override\s+(agents|rules|policy)/i,
  /exfiltrate|leak|reveal\s+secret/i,
];

const readCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

const readSourceOfTruthPathList = (input: AgentWorkflowInput): string[] => {
  return [
    input.sourceOfTruthPaths.operationalRulesPath,
    input.sourceOfTruthPaths.planStandardPath,
    input.sourceOfTruthPaths.taskStatusPath,
    input.sourceOfTruthPaths.lessonsPath,
    input.sourceOfTruthPaths.skillStandardPath,
    ...input.sourceOfTruthPaths.sharedReferencePaths,
  ];
};

const readProblemDetails = (
  type: string,
  status: number,
  title: string,
  detail: string,
  code: string,
): ProblemDetails => {
  return {
    type,
    status,
    title,
    detail,
    code,
    instance: readCurrentTimestamp(),
  };
};

/**
 * Reads readability status for each declared source-of-truth file path.
 *
 * Preconditions:
 * - `input.sourceOfTruthPaths` contains normalized repo-relative paths.
 *
 * Postconditions:
 * - Returns one result per path with deterministic readability fields.
 *
 * Side effects:
 * - Reads files from the local filesystem.
 *
 * Error semantics:
 * - Returns non-readable results instead of throwing for missing/unreadable files.
 */
export const readSourceOfTruthReadResults = async (input: AgentWorkflowInput): Promise<SourceOfTruthReadResult[]> => {
  const sourceOfTruthPaths = readSourceOfTruthPathList(input);
  const readResults = sourceOfTruthPaths.map(async (path): Promise<SourceOfTruthReadResult> => {
    try {
      const fileBuffer = await readFile(path);
      return {path, isReadable: true, byteLength: fileBuffer.byteLength};
    } catch {
      return {path, isReadable: false};
    }
  });

  return Promise.all(readResults);
};

/**
 * Runs the intake stage by validating prompt safety and source-of-truth readability.
 *
 * Preconditions:
 * - `input.prompt` and `input.sourceOfTruthPaths` were syntactically validated.
 *
 * Postconditions:
 * - Returns source-of-truth read evidence and intake verification checks.
 *
 * Side effects:
 * - Reads all source-of-truth files.
 *
 * Error semantics:
 * - Returns ProblemDetails for safety trigger or unreadable source-of-truth conditions.
 */
export const runIntakeStage = async (input: AgentWorkflowInput): Promise<IntakeStageOutcome> => {
  const isSafetyTriggered = SAFETY_PATTERNS.some((pattern) => pattern.test(input.prompt));
  if (isSafetyTriggered) {
    return {
      isSuccessful: false,
      note: 'Prompt safety trigger detected.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/prompt-safety-trigger',
        400,
        'Prompt safety trigger',
        'Input prompt triggered safety heuristics and requires user confirmation.',
        'prompt_safety_trigger',
      ),
      sourceOfTruthReadResults: [],
      verificationChecks: [
        {
          checkName: 'isPromptSafe',
          isSuccessful: false,
          detail: 'Prompt contains disallowed safety trigger pattern.',
        },
      ],
    };
  }

  const sourceOfTruthReadResults = await readSourceOfTruthReadResults(input);
  const hasUnreadablePath = sourceOfTruthReadResults.some((result) => !result.isReadable);
  if (hasUnreadablePath) {
    return {
      isSuccessful: false,
      note: 'Source-of-truth readability check failed.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/source-of-truth-unreadable',
        422,
        'Source-of-truth unreadable',
        'One or more source-of-truth files are unreadable and must be fixed before continuing.',
        'source_of_truth_unreadable',
      ),
      sourceOfTruthReadResults,
      verificationChecks: [
        {
          checkName: 'isPromptSafe',
          isSuccessful: true,
          detail: 'Prompt passed intake safety trigger checks.',
        },
        {
          checkName: 'isSourceOfTruthReachable',
          isSuccessful: false,
          detail: 'At least one source-of-truth path could not be read.',
        },
      ],
    };
  }

  return {
    isSuccessful: true,
    note: 'Intake completed with readable source-of-truth inputs.',
    sourceOfTruthReadResults,
    verificationChecks: [
      {
        checkName: 'isPromptSafe',
        isSuccessful: true,
        detail: 'Prompt passed intake safety trigger checks.',
      },
      {
        checkName: 'isSourceOfTruthReachable',
        isSuccessful: true,
        detail: 'All source-of-truth files were readable.',
      },
    ],
  };
};

/**
 * Runs the planning stage and produces deterministic planning readiness status.
 *
 * Preconditions:
 * - Intake stage completed successfully.
 *
 * Postconditions:
 * - Returns stage success flag and caller-facing note.
 *
 * Side effects:
 * - None.
 *
 * Error semantics:
 * - Returns ProblemDetails when prompt requests explicit plan failure simulation.
 */
export const runPlanStage = async (input: AgentWorkflowInput): Promise<AgentWorkflowStageOutcome> => {
  if (input.prompt.includes('[simulate-plan-hard-failure]')) {
    return {
      isSuccessful: false,
      note: 'Plan stage simulation requested hard failure.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/plan-stage-failed',
        409,
        'Plan stage failed',
        'Plan stage simulation requested failure and requires user decision.',
        'plan_stage_failed',
      ),
    };
  }

  return {
    isSuccessful: true,
    note: 'Plan stage completed.',
  };
};

/**
 * Runs the execute stage with deterministic simulation support for retry validation.
 *
 * Preconditions:
 * - Intake and plan stages completed successfully.
 * - `attemptNumber` starts at 1 and increments by 1 for retries.
 *
 * Postconditions:
 * - Returns execution success/failure outcome for the specific attempt.
 *
 * Side effects:
 * - None.
 *
 * Error semantics:
 * - Returns ProblemDetails for simulated transient or hard execution failures.
 */
export const runExecuteStage = async (
  input: AgentWorkflowInput,
  attemptNumber: number,
): Promise<AgentWorkflowStageOutcome> => {
  if (input.prompt.includes('[simulate-execute-hard-failure]')) {
    return {
      isSuccessful: false,
      note: 'Execute stage simulation requested hard failure.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/execute-stage-failed',
        502,
        'Execute stage failed',
        'Execute stage failed after simulation trigger and requires user decision.',
        'execute_stage_failed',
      ),
    };
  }

  if (input.prompt.includes('[simulate-execute-transient-failure]') && attemptNumber === 1) {
    return {
      isSuccessful: false,
      note: 'Execute stage simulation triggered transient failure on first attempt.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/execute-stage-transient-failure',
        503,
        'Execute stage transient failure',
        'Execute stage returned a transient failure and can be retried once.',
        'execute_stage_transient_failure',
      ),
    };
  }

  return {
    isSuccessful: true,
    note: 'Execute stage completed.',
  };
};

/**
 * Runs the verify stage with deterministic simulation support for governance tests.
 *
 * Preconditions:
 * - Execute stage completed successfully.
 * - `attemptNumber` starts at 1 and increments by 1 for retries.
 *
 * Postconditions:
 * - Returns verification success/failure outcome for the specific attempt.
 *
 * Side effects:
 * - None.
 *
 * Error semantics:
 * - Returns ProblemDetails for simulated hard verification failures.
 */
export const runVerifyStage = async (
  input: AgentWorkflowInput,
  attemptNumber: number,
): Promise<AgentWorkflowStageOutcome> => {
  if (input.prompt.includes('[simulate-verify-hard-failure]')) {
    return {
      isSuccessful: false,
      note: 'Verify stage simulation requested hard failure.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/verify-stage-failed',
        502,
        'Verify stage failed',
        'Verify stage failed after simulation trigger and requires user decision.',
        'verify_stage_failed',
      ),
    };
  }

  if (input.prompt.includes('[simulate-verify-transient-failure]') && attemptNumber === 1) {
    return {
      isSuccessful: false,
      note: 'Verify stage simulation triggered transient failure on first attempt.',
      problem: readProblemDetails(
        'https://agent-workflow/errors/verify-stage-transient-failure',
        503,
        'Verify stage transient failure',
        'Verify stage returned a transient failure and can be retried once.',
        'verify_stage_transient_failure',
      ),
    };
  }

  return {
    isSuccessful: true,
    note: 'Verify stage completed.',
  };
};
