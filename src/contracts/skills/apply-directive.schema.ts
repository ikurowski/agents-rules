import {z} from 'zod';

/**
 * Declarative `Apply ... for` directive extracted from skill markdown.
 */
export const ApplyDirectiveSchema = z.object({
  sourcePath: z.string().trim().min(1),
  sections: z.array(z.string().trim().min(1)).min(1),
  lineNumber: z.number().int().min(1),
});

export type ApplyDirective = z.infer<typeof ApplyDirectiveSchema>;
