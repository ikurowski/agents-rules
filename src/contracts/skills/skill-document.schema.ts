import {z} from 'zod';

import {ApplyDirectiveSchema} from './apply-directive.schema.js';

/**
 * Parsed skill markdown document used for anti-drift validation.
 */
export const SkillDocumentSchema = z.object({
  path: z.string().trim().min(1),
  headings: z.array(z.string().trim().min(1)),
  applyDirectives: z.array(ApplyDirectiveSchema),
});

export type SkillDocument = z.infer<typeof SkillDocumentSchema>;
