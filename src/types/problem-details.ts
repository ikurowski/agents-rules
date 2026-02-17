/**
 * Machine-readable error payload used by exported APIs for deterministic client handling.
 *
 * Constraints:
 * - `type` SHOULD be a stable URI or namespace-like identifier for the error class.
 * - `status` MUST map to the numeric status semantics used by the API context.
 * - `title` and `detail` MUST be caller-facing and MUST NOT include stack traces or internal diagnostics.
 */
export interface ProblemDetails {
  type: string;
  status: number;
  title: string;
  detail: string;
  instance?: string;
  code?: string;
}
