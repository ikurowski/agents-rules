import type {AgentWorkflowReport} from './types.js';

/**
 * Generates stable JSON text representation of workflow report artifacts and outcomes.
 *
 * Preconditions:
 * - `report` must satisfy AgentWorkflowReport structural contract.
 *
 * Postconditions:
 * - Returns formatted JSON string safe for logs, files, or CLI output.
 *
 * Side effects:
 * - None.
 *
 * Error semantics:
 * - Throws standard serialization errors if report contains unsupported values.
 */
export const generateAgentWorkflowReport = (report: AgentWorkflowReport): string => {
  return JSON.stringify(report, null, 2);
};
