import {ZodError} from 'zod';

import {
  AgentWorkflowInputSchema,
  AgentWorkflowReportSchema,
  FIVE_POINT_SCORE_THRESHOLDS,
} from '../../contracts/index.js';
import {readRunId, withIdempotencyKey} from '../../harness/observability/idempotency.js';

import {runExecuteStage, runIntakeStage, runPlanStage, runVerifyStage} from './run-agent-workflow-stages.js';

import type {
  AgentWorkflowArtifactsModel,
  AgentWorkflowEscalation,
  AgentWorkflowEvaluationEntry,
  AgentWorkflowInput,
  AgentWorkflowObservation,
  AgentWorkflowReport,
  AgentWorkflowStage,
  AgentWorkflowTraceEvent,
  AgentWorkflowVerificationCheck,
  FivePointScoreLabel,
  ProblemDetails,
  SourceOfTruthReadResult,
} from '../../contracts/index.js';

const STAGE_SCORE_ORDER = ['intake', 'plan', 'execute', 'verify'] as const;
const WORKFLOW_STAGES: AgentWorkflowStage[] = ['intake', 'plan', 'execute', 'verify', 'report'];

class AgentWorkflowProblemError extends Error {
  public readonly problem: ProblemDetails;

  public constructor(problem: ProblemDetails) {
    super(problem.title);
    this.problem = problem;
  }
}

interface AgentWorkflowRunState {
  observations: AgentWorkflowObservation[];
  traceEvents: AgentWorkflowTraceEvent[];
  stageTransitions: string[];
  retrySummary: {executeRetryCount: number; verifyRetryCount: number};
  sourceOfTruthReadResults: SourceOfTruthReadResult[];
  verificationChecks: AgentWorkflowVerificationCheck[];
  escalation?: AgentWorkflowEscalation;
}

interface AgentWorkflowStageOutcome {
  isSuccessful: boolean;
  note: string;
  problem?: ProblemDetails;
}

interface RunAgentWorkflowOptions {
  idempotencyKey?: string;
}

const readCurrentTimestamp = (): string => {
  return new Date().toISOString();
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
 * Validates workflow input contract before execution starts.
 */
export const validateAgentWorkflowInput = (input: AgentWorkflowInput): void => {
  const parseResult = AgentWorkflowInputSchema.safeParse(input);
  if (parseResult.success) {
    return;
  }

  throw new AgentWorkflowProblemError(
    readProblemDetails(
      'https://agent-workflow/errors/input-invalid',
      400,
      'Invalid workflow input',
      parseResult.error.issues.map((issue) => issue.message).join('; '),
      'input_invalid',
    ),
  );
};

const readScoreLabel = (score: number): FivePointScoreLabel => {
  if (score <= FIVE_POINT_SCORE_THRESHOLDS.low[1]) {
    return 'low';
  }

  if (score <= FIVE_POINT_SCORE_THRESHOLDS.medium[1]) {
    return 'medium';
  }

  return 'high';
};

const readClampedScore = (score: number): number => {
  return Math.max(1, Math.min(5, Number(score.toFixed(1))));
};

const readStageScoreEntry = (
  stage: (typeof STAGE_SCORE_ORDER)[number],
  observations: AgentWorkflowObservation[],
): AgentWorkflowEvaluationEntry => {
  const stageObservations = observations.filter((observation) => observation.stage === stage);
  if (stageObservations.length === 0) {
    const score = 1;
    return {
      stage,
      score,
      label: readScoreLabel(score),
      isSuccessful: false,
      reason: 'Stage was not executed due to a prior stage failure.',
    };
  }

  const hasSuccess = stageObservations.some((observation) => observation.isSuccessful);
  if (hasSuccess) {
    const score = stageObservations.length > 1 ? 4 : 5;
    return {
      stage,
      score,
      label: readScoreLabel(score),
      isSuccessful: true,
      reason: stageObservations.length > 1 ? 'Stage recovered after retry.' : 'Stage completed without retry.',
    };
  }

  const score = 1;
  return {
    stage,
    score,
    label: readScoreLabel(score),
    isSuccessful: false,
    reason: 'Stage failed.',
  };
};

const readGovernanceScoreAdjustment = (input: AgentWorkflowInput): number => {
  return input.prompt.includes('[simulate-governance-threshold-low]') ? -1.5 : 0;
};

const readEvaluationScorecard = (
  observations: AgentWorkflowObservation[],
  input: AgentWorkflowInput,
): AgentWorkflowEvaluationEntry[] => {
  const stageEntries = STAGE_SCORE_ORDER.map((stage) => readStageScoreEntry(stage, observations));
  const stageScoreAverage =
    stageEntries.reduce((accumulator, entry) => accumulator + entry.score, 0) / stageEntries.length;
  const adjustedScore = readClampedScore(stageScoreAverage + readGovernanceScoreAdjustment(input));
  const isOverallSuccessful = stageEntries.every((entry) => entry.isSuccessful) && adjustedScore >= 3.8;
  const overallEntry: AgentWorkflowEvaluationEntry = {
    stage: 'overall',
    score: adjustedScore,
    label: readScoreLabel(adjustedScore),
    isSuccessful: isOverallSuccessful,
    reason: isOverallSuccessful
      ? 'All stage gates passed with acceptable governance score.'
      : 'Workflow did not satisfy stage or governance acceptance thresholds.',
  };

  return [...stageEntries, overallEntry];
};

const readEscalation = (
  stage: 'intake' | 'plan' | 'execute' | 'verify',
  reason: string,
  requiredUserDecision: string,
  fallbackProblem: ProblemDetails,
  candidateProblem?: ProblemDetails,
): AgentWorkflowEscalation => {
  return {
    stage,
    reason,
    requiredUserDecision,
    problem: candidateProblem ?? fallbackProblem,
  };
};

const readEscalationTraceEvent = (
  escalation: AgentWorkflowEscalation,
  idempotencyKey: string,
): AgentWorkflowTraceEvent => {
  return withIdempotencyKey(
    {
      stage: escalation.stage,
      attemptNumber: 1,
      timestamp: readCurrentTimestamp(),
      eventType: 'escalated',
      message: escalation.reason,
    },
    idempotencyKey,
  );
};

const readSerializationVerificationCheck = (report: AgentWorkflowReport): AgentWorkflowVerificationCheck => {
  try {
    JSON.stringify(report);
    return {
      checkName: 'isReportSerializable',
      isSuccessful: true,
      detail: 'Final report is JSON serializable.',
    };
  } catch {
    return {
      checkName: 'isReportSerializable',
      isSuccessful: false,
      detail: 'Final report serialization failed.',
    };
  }
};

const readInitialRunState = (): AgentWorkflowRunState => {
  return {
    observations: [],
    traceEvents: [],
    stageTransitions: [],
    retrySummary: {executeRetryCount: 0, verifyRetryCount: 0},
    sourceOfTruthReadResults: [],
    verificationChecks: [
      {
        checkName: 'isPromptPresent',
        isSuccessful: true,
        detail: 'Prompt is present and non-empty.',
      },
    ],
  };
};

const readTraceEvent = (
  event: Omit<AgentWorkflowTraceEvent, 'idempotencyKey'>,
  idempotencyKey: string,
): AgentWorkflowTraceEvent => {
  return withIdempotencyKey(event, idempotencyKey);
};

const runStageWithObservation = async <T extends AgentWorkflowStageOutcome>(
  stage: AgentWorkflowStage,
  attemptNumber: number,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
  runner: () => Promise<T>,
): Promise<T> => {
  const startedAt = readCurrentTimestamp();
  state.traceEvents.push(
    readTraceEvent(
      {
        stage,
        attemptNumber,
        timestamp: startedAt,
        eventType: 'started',
        message: `${stage} stage attempt started.`,
      },
      idempotencyKey,
    ),
  );

  const outcome = await runner();
  const finishedAt = readCurrentTimestamp();
  state.observations.push({
    stage,
    attemptNumber,
    startedAt,
    finishedAt,
    isSuccessful: outcome.isSuccessful,
    note: outcome.note,
    errorMessage: outcome.problem?.detail,
  });
  state.stageTransitions.push(`${stage}:${attemptNumber}:${outcome.isSuccessful ? 'success' : 'failure'}`);
  state.traceEvents.push(
    readTraceEvent(
      {
        stage,
        attemptNumber,
        timestamp: finishedAt,
        eventType: outcome.isSuccessful ? 'succeeded' : 'failed',
        message: outcome.note,
      },
      idempotencyKey,
    ),
  );

  return outcome;
};

const runIntakeStep = async (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): Promise<void> => {
  const intakeOutcome = await runStageWithObservation('intake', 1, state, idempotencyKey, async () =>
    runIntakeStage(input),
  );
  state.sourceOfTruthReadResults = intakeOutcome.sourceOfTruthReadResults;
  state.verificationChecks.push(...intakeOutcome.verificationChecks);
  if (intakeOutcome.isSuccessful) {
    return;
  }

  state.escalation = readEscalation(
    'intake',
    'Intake stage failed.',
    'Resolve prompt safety or source-of-truth readability issues, then rerun.',
    readProblemDetails(
      'https://agent-workflow/errors/intake-stage-failed',
      422,
      'Intake stage failed',
      'Intake stage failed and requires user decision.',
      'intake_stage_failed',
    ),
    intakeOutcome.problem,
  );
  state.traceEvents.push(readEscalationTraceEvent(state.escalation, idempotencyKey));
};

const runPlanStep = async (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): Promise<void> => {
  const planOutcome = await runStageWithObservation('plan', 1, state, idempotencyKey, async () => runPlanStage(input));
  if (planOutcome.isSuccessful) {
    return;
  }

  state.escalation = readEscalation(
    'plan',
    'Plan stage failed.',
    'Revise planning constraints or prompt content, then rerun.',
    readProblemDetails(
      'https://agent-workflow/errors/plan-stage-failed',
      409,
      'Plan stage failed',
      'Plan stage failed and requires user decision.',
      'plan_stage_failed',
    ),
    planOutcome.problem,
  );
  state.traceEvents.push(readEscalationTraceEvent(state.escalation, idempotencyKey));
};

const runRetryableStage = async (
  stage: 'execute' | 'verify',
  state: AgentWorkflowRunState,
  idempotencyKey: string,
  runner: (attemptNumber: number) => Promise<AgentWorkflowStageOutcome>,
): Promise<AgentWorkflowStageOutcome> => {
  let stageOutcome = await runStageWithObservation(stage, 1, state, idempotencyKey, async () => runner(1));
  if (stageOutcome.isSuccessful) {
    return stageOutcome;
  }

  if (stage === 'execute') {
    state.retrySummary.executeRetryCount = 1;
  } else {
    state.retrySummary.verifyRetryCount = 1;
  }

  state.traceEvents.push(
    readTraceEvent(
      {
        stage,
        attemptNumber: 1,
        timestamp: readCurrentTimestamp(),
        eventType: 'retried',
        message: `${stage} stage retry scheduled after first failure.`,
      },
      idempotencyKey,
    ),
  );

  stageOutcome = await runStageWithObservation(stage, 2, state, idempotencyKey, async () => runner(2));
  return stageOutcome;
};

const runExecuteStep = async (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): Promise<void> => {
  const executeOutcome = await runRetryableStage('execute', state, idempotencyKey, (attemptNumber) => {
    return runExecuteStage(input, attemptNumber);
  });
  if (executeOutcome.isSuccessful) {
    return;
  }

  state.escalation = readEscalation(
    'execute',
    'Execute stage failed after one retry.',
    'Decide whether to adjust prompt/inputs and rerun or stop execution.',
    readProblemDetails(
      'https://agent-workflow/errors/execute-stage-failed',
      502,
      'Execute stage failed',
      'Execute stage failed after retry and requires user decision.',
      'execute_stage_failed',
    ),
    executeOutcome.problem,
  );
  state.traceEvents.push(readEscalationTraceEvent(state.escalation, idempotencyKey));
};

const runVerifyStep = async (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): Promise<void> => {
  const verifyOutcome = await runRetryableStage('verify', state, idempotencyKey, (attemptNumber) => {
    return runVerifyStage(input, attemptNumber);
  });
  if (verifyOutcome.isSuccessful) {
    return;
  }

  state.escalation = readEscalation(
    'verify',
    'Verify stage failed after one retry.',
    'Decide whether to accept risk, refine execution inputs, or rerun.',
    readProblemDetails(
      'https://agent-workflow/errors/verify-stage-failed',
      502,
      'Verify stage failed',
      'Verify stage failed after retry and requires user decision.',
      'verify_stage_failed',
    ),
    verifyOutcome.problem,
  );
  state.traceEvents.push(readEscalationTraceEvent(state.escalation, idempotencyKey));
};

const runCoreWorkflowStages = async (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): Promise<void> => {
  await runIntakeStep(input, state, idempotencyKey);
  if (state.escalation !== undefined) {
    return;
  }

  await runPlanStep(input, state, idempotencyKey);
  if (state.escalation !== undefined) {
    return;
  }

  await runExecuteStep(input, state, idempotencyKey);
  if (state.escalation !== undefined) {
    return;
  }

  await runVerifyStep(input, state, idempotencyKey);
};

const runGovernanceGate = (
  input: AgentWorkflowInput,
  state: AgentWorkflowRunState,
  idempotencyKey: string,
): AgentWorkflowEvaluationEntry[] => {
  const evaluationScorecard = readEvaluationScorecard(state.observations, input);
  const overallScoreEntry = evaluationScorecard.find((entry) => entry.stage === 'overall');
  const hasGovernanceFailure = overallScoreEntry !== undefined && overallScoreEntry.score < 3.8;
  state.verificationChecks.push({
    checkName: 'isGovernanceThresholdMet',
    isSuccessful: !hasGovernanceFailure,
    detail: hasGovernanceFailure
      ? 'Overall evaluation score is below governance threshold 3.8.'
      : 'Overall evaluation score meets governance threshold 3.8.',
  });

  if (hasGovernanceFailure && state.escalation === undefined) {
    state.escalation = readEscalation(
      'verify',
      'Governance threshold not met.',
      'Approve risk override or refine inputs and rerun workflow.',
      readProblemDetails(
        'https://agent-workflow/errors/governance-threshold-not-met',
        409,
        'Governance threshold not met',
        'Overall score is below required governance threshold.',
        'governance_threshold_not_met',
      ),
    );
    state.traceEvents.push(readEscalationTraceEvent(state.escalation, idempotencyKey));
  }

  return evaluationScorecard;
};

const runReportStep = (state: AgentWorkflowRunState, idempotencyKey: string): void => {
  const reportStageStartedAt = readCurrentTimestamp();
  state.traceEvents.push(
    readTraceEvent(
      {
        stage: 'report',
        attemptNumber: 1,
        timestamp: reportStageStartedAt,
        eventType: 'started',
        message: 'Report stage attempt started.',
      },
      idempotencyKey,
    ),
  );

  const reportStageFinishedAt = readCurrentTimestamp();
  state.observations.push({
    stage: 'report',
    attemptNumber: 1,
    startedAt: reportStageStartedAt,
    finishedAt: reportStageFinishedAt,
    isSuccessful: true,
    note: 'Report stage completed.',
  });
  state.stageTransitions.push('report:1:success');
  state.traceEvents.push(
    readTraceEvent(
      {
        stage: 'report',
        attemptNumber: 1,
        timestamp: reportStageFinishedAt,
        eventType: 'succeeded',
        message: 'Report stage completed.',
      },
      idempotencyKey,
    ),
  );
};

const readWorkflowArtifacts = (
  state: AgentWorkflowRunState,
  evaluationScorecard: AgentWorkflowEvaluationEntry[],
): AgentWorkflowArtifactsModel => {
  return {
    sourceOfTruthReadResults: state.sourceOfTruthReadResults,
    stageTransitions: state.stageTransitions,
    retrySummary: state.retrySummary,
    verificationChecks: [...state.verificationChecks],
    evaluationScorecard,
    traceEvents: state.traceEvents,
  };
};

/**
 * Runs deterministic agent workflow stages and returns evidence-rich execution report.
 */
export const runAgentWorkflow = async (
  input: AgentWorkflowInput,
  options: RunAgentWorkflowOptions = {},
): Promise<AgentWorkflowReport> => {
  validateAgentWorkflowInput(input);

  const runId = readRunId();
  const startedAt = readCurrentTimestamp();
  const state = readInitialRunState();
  const idempotencyKey = options.idempotencyKey ?? runId;

  await runCoreWorkflowStages(input, state, idempotencyKey);
  const evaluationScorecard = runGovernanceGate(input, state, idempotencyKey);
  runReportStep(state, idempotencyKey);

  const workflowArtifacts = readWorkflowArtifacts(state, evaluationScorecard);
  const provisionalReport: AgentWorkflowReport = {
    runId,
    status: state.escalation === undefined ? 'completed' : 'failed',
    startedAt,
    finishedAt: readCurrentTimestamp(),
    input,
    observations: state.observations,
    artifacts: workflowArtifacts,
    escalation: state.escalation,
  };

  const serializationCheck = readSerializationVerificationCheck(provisionalReport);
  workflowArtifacts.verificationChecks.push(serializationCheck);

  return AgentWorkflowReportSchema.parse({
    ...provisionalReport,
    status: state.escalation === undefined && serializationCheck.isSuccessful ? 'completed' : 'failed',
    artifacts: workflowArtifacts,
  });
};

/**
 * Reads ProblemDetails from unknown runtime errors for safe caller-facing reporting.
 */
export const readProblemDetailsFromUnknown = (error: unknown): ProblemDetails => {
  if (error instanceof AgentWorkflowProblemError) {
    return error.problem;
  }

  if (error instanceof ZodError) {
    return readProblemDetails(
      'https://agent-workflow/errors/input-invalid',
      400,
      'Invalid workflow input',
      error.issues.map((issue) => issue.message).join('; '),
      'input_invalid_schema',
    );
  }

  if (error instanceof Error) {
    return readProblemDetails(
      'https://agent-workflow/errors/runtime-failure',
      500,
      'Runtime workflow error',
      error.message,
      'runtime_error',
    );
  }

  return readProblemDetails(
    'https://agent-workflow/errors/unexpected-error',
    500,
    'Unexpected workflow error',
    'An unexpected error occurred while running the workflow.',
    'unexpected_error',
  );
};

export {WORKFLOW_STAGES};
