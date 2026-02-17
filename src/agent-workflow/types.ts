import type {ProblemDetails} from '../types/problem-details.js';

/**
 * Fixed execution stages for deterministic workflow orchestration.
 *
 * Constraints:
 * - Stages MUST run in this order: intake -> plan -> execute -> verify -> report.
 * - Stage names are stable identifiers used by traces and scorecards.
 */
export type AgentWorkflowStage = 'intake' | 'plan' | 'execute' | 'verify' | 'report';

/**
 * Final run status visible to callers.
 *
 * Constraints:
 * - `completed` means all required gates passed without escalation.
 * - `failed` means at least one gate failed or governance escalation was required.
 */
export type AgentWorkflowStatus = 'completed' | 'failed';

/**
 * Numeric-to-label mapping used by workflow scorecards.
 *
 * Constraints:
 * - Labels follow five-point score thresholds: low (1.0-2.4), medium (2.5-3.7), high (3.8-5.0).
 */
export const FIVE_POINT_SCORE_THRESHOLDS = {
  low: [1.0, 2.4],
  medium: [2.5, 3.7],
  high: [3.8, 5.0],
} as const;

export type FivePointScoreLabel = keyof typeof FIVE_POINT_SCORE_THRESHOLDS;

/**
 * Canonical repository paths that provide governance and skill source-of-truth files.
 *
 * Constraints:
 * - Every path must be a non-empty repo-relative string.
 * - `sharedReferencePaths` must contain at least one canonical shared reference.
 */
export interface SourceOfTruthPaths {
  operationalRulesPath: string;
  planStandardPath: string;
  taskStatusPath: string;
  lessonsPath: string;
  skillStandardPath: string;
  sharedReferencePaths: string[];
}

/**
 * Input contract for running the agent workflow.
 *
 * Constraints:
 * - `prompt` must be non-empty after trim.
 * - `sourceOfTruthPaths` must satisfy canonical path constraints.
 */
export interface AgentWorkflowInput {
  prompt: string;
  sourceOfTruthPaths: SourceOfTruthPaths;
}

/**
 * One observable attempt record for a stage execution.
 *
 * Constraints:
 * - `attemptNumber` starts at 1 and increments only for retries.
 * - `errorMessage` is caller-facing and must not include stack traces.
 */
export interface AgentWorkflowObservation {
  stage: AgentWorkflowStage;
  attemptNumber: number;
  startedAt: string;
  finishedAt: string;
  isSuccessful: boolean;
  note: string;
  errorMessage?: string;
}

/**
 * User-facing escalation contract for blocked or governed workflow runs.
 *
 * Constraints:
 * - `requiredUserDecision` must clearly state what choice is required to continue.
 * - `problem` must be machine-readable and safe for non-human clients.
 */
export interface AgentWorkflowEscalation {
  stage: 'intake' | 'plan' | 'execute' | 'verify';
  reason: string;
  requiredUserDecision: string;
  problem: ProblemDetails;
}

/**
 * Machine-readable score entry for one stage or overall workflow quality.
 *
 * Constraints:
 * - `score` is clamped to 1.0-5.0.
 * - `label` must be derived from score using five-point score thresholds.
 */
export interface AgentWorkflowEvaluationEntry {
  stage: 'intake' | 'plan' | 'execute' | 'verify' | 'overall';
  score: number;
  label: FivePointScoreLabel;
  isSuccessful: boolean;
  reason: string;
}

/**
 * Trace-like event used for run-to-run diagnostics and sequence audits.
 *
 * Constraints:
 * - Events are append-only and ordered by creation time.
 * - Messages are operationally useful but must not leak implementation internals.
 */
export interface AgentWorkflowTraceEvent {
  stage: AgentWorkflowStage;
  attemptNumber: number;
  timestamp: string;
  eventType: 'started' | 'succeeded' | 'failed' | 'retried' | 'escalated';
  message: string;
}

/**
 * Readability check result for one source-of-truth file path.
 *
 * Constraints:
 * - `byteLength` is present only when file read succeeded.
 */
export interface SourceOfTruthReadResult {
  path: string;
  isReadable: boolean;
  byteLength?: number;
}

/**
 * Verification result captured into artifacts for explicit acceptance checks.
 *
 * Constraints:
 * - Each check has deterministic name and binary success outcome.
 */
export interface AgentWorkflowVerificationCheck {
  checkName: string;
  isSuccessful: boolean;
  detail: string;
}

/**
 * Required artifacts model for workflow evidence and observability.
 *
 * Constraints:
 * - All fields are required in completed report artifacts.
 * - `evaluationScorecard` must include stage entries and one `overall` entry.
 */
export interface AgentWorkflowArtifactsModel {
  sourceOfTruthReadResults: SourceOfTruthReadResult[];
  stageTransitions: string[];
  retrySummary: {executeRetryCount: number; verifyRetryCount: number};
  verificationChecks: AgentWorkflowVerificationCheck[];
  evaluationScorecard: AgentWorkflowEvaluationEntry[];
  traceEvents: AgentWorkflowTraceEvent[];
}

/**
 * Final workflow report contract returned to callers.
 *
 * Postconditions:
 * - Includes deterministic observations and optional escalation details.
 * - `artifacts` contains machine-readable evidence for review gates.
 *
 * Side effects:
 * - None at report object level; side effects happen during stage execution.
 */
export interface AgentWorkflowReport {
  runId: string;
  status: AgentWorkflowStatus;
  startedAt: string;
  finishedAt: string;
  input: AgentWorkflowInput;
  observations: AgentWorkflowObservation[];
  artifacts?: Record<string, unknown>;
  escalation?: AgentWorkflowEscalation;
}
