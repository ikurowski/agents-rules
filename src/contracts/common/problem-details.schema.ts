import {z} from 'zod';

/**
 * Machine-readable error payload used by runtime and harness boundaries.
 *
 * Constraints:
 * - `type` is a stable identifier for the error class.
 * - `status` is a numeric status for deterministic caller branching.
 * - `title` and `detail` are caller-facing and must not expose stack traces.
 */
export const ProblemDetailsSchema = z.object({
  type: z.string().trim().min(1),
  status: z.number().int().min(100).max(599),
  title: z.string().trim().min(1),
  detail: z.string().trim().min(1),
  instance: z.string().trim().min(1).optional(),
  code: z.string().trim().min(1).optional(),
});

export type ProblemDetails = z.infer<typeof ProblemDetailsSchema>;
