import {z} from 'zod';

import {AgentWorkflowInputSchema, AgentWorkflowReportSchema} from '../../contracts/index.js';

export const HarnessEventKindSchema = z.enum([
  'loop_started',
  'loop_compacted',
  'stage_started',
  'stage_finished',
  'loop_finished',
]);

export const HarnessRequestEnvelopeSchema = z.object({
  requestId: z.string().trim().min(1),
  timestamp: z.string().trim().min(1),
  payload: AgentWorkflowInputSchema,
});

export const HarnessEventEnvelopeSchema = z.object({
  requestId: z.string().trim().min(1),
  timestamp: z.string().trim().min(1),
  event: HarnessEventKindSchema,
  detail: z.string().trim().min(1),
});

export const HarnessResponseEnvelopeSchema = z.object({
  requestId: z.string().trim().min(1),
  timestamp: z.string().trim().min(1),
  payload: AgentWorkflowReportSchema,
});

export type HarnessRequestEnvelope = z.infer<typeof HarnessRequestEnvelopeSchema>;
export type HarnessEventEnvelope = z.infer<typeof HarnessEventEnvelopeSchema>;
export type HarnessResponseEnvelope = z.infer<typeof HarnessResponseEnvelopeSchema>;
