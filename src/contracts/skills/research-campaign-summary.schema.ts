import {z} from 'zod';

/**
 * Structured campaign-summary payload used when a skill emits decomposition state.
 */
export const ResearchCampaignMatrixReferenceSchema = z.union([
  z.object({
    kind: z.literal('path'),
    value: z.string().trim().min(1),
  }),
  z.object({
    kind: z.literal('table'),
    value: z.string().trim().min(1),
  }),
  z.object({
    kind: z.literal('summary'),
    value: z.string().trim().min(1),
  }),
]);

/**
 * Typed contract for canonical campaign summary fields.
 */
export const ResearchCampaignSummarySchema = z.object({
  primary_question: z.string().trim().min(1),
  sub_questions: z.array(z.string().trim().min(1)).min(1),
  entry_criteria: z.string().trim().min(1),
  impediments: z.array(z.string().trim().min(1)),
  question_to_evidence_matrix: ResearchCampaignMatrixReferenceSchema,
});

export type ResearchCampaignMatrixReference = z.infer<typeof ResearchCampaignMatrixReferenceSchema>;
export type ResearchCampaignSummary = z.infer<typeof ResearchCampaignSummarySchema>;
