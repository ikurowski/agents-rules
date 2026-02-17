import {z} from 'zod';

/**
 * Canonical repository paths that provide governance and skill source-of-truth files.
 */
export const SourceOfTruthPathsSchema = z.object({
  operationalRulesPath: z.string().trim().min(1),
  planStandardPath: z.string().trim().min(1),
  taskStatusPath: z.string().trim().min(1),
  lessonsPath: z.string().trim().min(1),
  skillStandardPath: z.string().trim().min(1),
  sharedReferencePaths: z.array(z.string().trim().min(1)).min(1),
});

/**
 * Input contract for running the agent workflow.
 */
export const AgentWorkflowInputSchema = z.object({
  prompt: z.string().trim().min(1),
  sourceOfTruthPaths: SourceOfTruthPathsSchema,
});

export type SourceOfTruthPaths = z.infer<typeof SourceOfTruthPathsSchema>;
export type AgentWorkflowInput = z.infer<typeof AgentWorkflowInputSchema>;
