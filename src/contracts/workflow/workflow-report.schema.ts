import {z} from 'zod';

import {
  AgentWorkflowArtifactsSchema,
  AgentWorkflowEscalationSchema,
  AgentWorkflowObservationSchema,
  AgentWorkflowStatusSchema,
} from './workflow-artifacts.schema.js';
import {AgentWorkflowInputSchema} from './workflow-input.schema.js';

/**
 * Final workflow report contract returned to callers.
 */
export const AgentWorkflowReportSchema = z.object({
  runId: z.string().trim().min(1),
  status: AgentWorkflowStatusSchema,
  startedAt: z.string().trim().min(1),
  finishedAt: z.string().trim().min(1),
  input: AgentWorkflowInputSchema,
  observations: z.array(AgentWorkflowObservationSchema),
  artifacts: AgentWorkflowArtifactsSchema,
  escalation: AgentWorkflowEscalationSchema.optional(),
});

export type AgentWorkflowReport = z.infer<typeof AgentWorkflowReportSchema>;
