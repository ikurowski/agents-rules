import {z} from 'zod';

/**
 * Declarative workflow specification stored under `skills/<skill>/workflow/*.yaml`.
 */
export const WorkflowSpecStepSchema = z.object({
  id: z.string().trim().min(1),
  description: z.string().trim().min(1),
  gate: z.string().trim().min(1),
});

export const WorkflowSpecSchema = z.object({
  name: z.string().trim().min(1),
  version: z.string().trim().min(1),
  goal: z.string().trim().min(1),
  steps: z.array(WorkflowSpecStepSchema).min(1),
});

export type WorkflowSpecStep = z.infer<typeof WorkflowSpecStepSchema>;
export type WorkflowSpec = z.infer<typeof WorkflowSpecSchema>;
