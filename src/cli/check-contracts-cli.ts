import {AgentWorkflowInputSchema, AgentWorkflowReportSchema} from '../contracts/index.js';
import {readDefaultSourceOfTruthPaths} from '../runtime/io/source-of-truth-paths.js';
import {runAgentWorkflow} from '../runtime/orchestrator/run-agent-workflow.js';

const runContractsCheck = async (): Promise<void> => {
  const input = AgentWorkflowInputSchema.parse({
    prompt: 'contracts-check',
    sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
  });

  const report = await runAgentWorkflow(input);
  AgentWorkflowReportSchema.parse(report);
  console.log('contracts:check passed');
};

try {
  await runContractsCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown contracts check error.';
  console.error(`contracts:check failed: ${message}`);
  process.exitCode = 1;
}
