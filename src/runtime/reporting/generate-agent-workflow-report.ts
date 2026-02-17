import {AgentWorkflowReportSchema} from '../../contracts/index.js';

import type {AgentWorkflowReport} from '../../contracts/index.js';

/**
 * Generates stable JSON text representation of workflow report artifacts and outcomes.
 */
export const generateAgentWorkflowReport = (report: AgentWorkflowReport): string => {
  const parsedReport = AgentWorkflowReportSchema.parse(report);
  return JSON.stringify(parsedReport, null, 2);
};
