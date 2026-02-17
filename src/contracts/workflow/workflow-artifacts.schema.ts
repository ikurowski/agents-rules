import {z} from 'zod';

import {ProblemDetailsSchema} from '../common/problem-details.schema.js';

export const FIVE_POINT_SCORE_THRESHOLDS = {
  low: [1.0, 2.4],
  medium: [2.5, 3.7],
  high: [3.8, 5.0],
} as const;

export const AgentWorkflowStageSchema = z.enum(['intake', 'plan', 'execute', 'verify', 'report']);
export const AgentWorkflowStatusSchema = z.enum(['completed', 'failed']);
export const FivePointScoreLabelSchema = z.enum(['low', 'medium', 'high']);

export const AgentWorkflowObservationSchema = z.object({
  stage: AgentWorkflowStageSchema,
  attemptNumber: z.number().int().min(1),
  startedAt: z.string().trim().min(1),
  finishedAt: z.string().trim().min(1),
  isSuccessful: z.boolean(),
  note: z.string().trim().min(1),
  errorMessage: z.string().trim().min(1).optional(),
});

export const AgentWorkflowEscalationSchema = z.object({
  stage: z.enum(['intake', 'plan', 'execute', 'verify']),
  reason: z.string().trim().min(1),
  requiredUserDecision: z.string().trim().min(1),
  problem: ProblemDetailsSchema,
});

export const AgentWorkflowEvaluationEntrySchema = z.object({
  stage: z.enum(['intake', 'plan', 'execute', 'verify', 'overall']),
  score: z.number().min(1).max(5),
  label: FivePointScoreLabelSchema,
  isSuccessful: z.boolean(),
  reason: z.string().trim().min(1),
});

export const AgentWorkflowTraceEventSchema = z.object({
  stage: AgentWorkflowStageSchema,
  attemptNumber: z.number().int().min(1),
  timestamp: z.string().trim().min(1),
  eventType: z.enum(['started', 'succeeded', 'failed', 'retried', 'escalated']),
  message: z.string().trim().min(1),
  idempotencyKey: z.string().trim().min(1).optional(),
});

export const SourceOfTruthReadResultSchema = z.object({
  path: z.string().trim().min(1),
  isReadable: z.boolean(),
  byteLength: z.number().int().nonnegative().optional(),
});

export const AgentWorkflowVerificationCheckSchema = z.object({
  checkName: z.string().trim().min(1),
  isSuccessful: z.boolean(),
  detail: z.string().trim().min(1),
});

export const AgentWorkflowArtifactsSchema = z.object({
  sourceOfTruthReadResults: z.array(SourceOfTruthReadResultSchema),
  stageTransitions: z.array(z.string().trim().min(1)),
  retrySummary: z.object({
    executeRetryCount: z.number().int().nonnegative(),
    verifyRetryCount: z.number().int().nonnegative(),
  }),
  verificationChecks: z.array(AgentWorkflowVerificationCheckSchema),
  evaluationScorecard: z.array(AgentWorkflowEvaluationEntrySchema),
  traceEvents: z.array(AgentWorkflowTraceEventSchema),
});

export type AgentWorkflowStage = z.infer<typeof AgentWorkflowStageSchema>;
export type AgentWorkflowStatus = z.infer<typeof AgentWorkflowStatusSchema>;
export type FivePointScoreLabel = z.infer<typeof FivePointScoreLabelSchema>;
export type AgentWorkflowObservation = z.infer<typeof AgentWorkflowObservationSchema>;
export type AgentWorkflowEscalation = z.infer<typeof AgentWorkflowEscalationSchema>;
export type AgentWorkflowEvaluationEntry = z.infer<typeof AgentWorkflowEvaluationEntrySchema>;
export type AgentWorkflowTraceEvent = z.infer<typeof AgentWorkflowTraceEventSchema>;
export type SourceOfTruthReadResult = z.infer<typeof SourceOfTruthReadResultSchema>;
export type AgentWorkflowVerificationCheck = z.infer<typeof AgentWorkflowVerificationCheckSchema>;
export type AgentWorkflowArtifactsModel = z.infer<typeof AgentWorkflowArtifactsSchema>;
