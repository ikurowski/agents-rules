import {describe, expect, test} from 'vitest';

import {
  AgentWorkflowInputSchema,
  AgentWorkflowReportSchema,
  ProblemDetailsSchema,
  WorkflowSpecSchema,
} from '../../src/contracts/index.js';
import {readDefaultSourceOfTruthPaths} from '../../src/runtime/io/source-of-truth-paths.js';
import {runAgentWorkflow} from '../../src/runtime/orchestrator/run-agent-workflow.js';

describe('contracts boundaries', () => {
  test('parses workflow input schema', () => {
    const parsed = AgentWorkflowInputSchema.parse({
      prompt: 'contracts test',
      sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
    });

    expect(parsed.prompt).toBe('contracts test');
  });

  test('parses workflow report schema', async () => {
    const report = await runAgentWorkflow({
      prompt: 'report schema test',
      sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
    });

    const parsed = AgentWorkflowReportSchema.parse(report);
    expect(parsed.status).toBe('completed');
  });

  test('parses problem details schema', () => {
    const parsed = ProblemDetailsSchema.parse({
      type: 'https://example/errors/test',
      status: 400,
      title: 'Example Error',
      detail: 'Example detail.',
      code: 'example_error',
    });

    expect(parsed.status).toBe(400);
  });

  test('parses workflow spec schema', () => {
    const parsed = WorkflowSpecSchema.parse({
      name: 'sample-workflow',
      version: '1.0.0',
      goal: 'Validate workflow spec contract.',
      steps: [
        {
          id: 'step-1',
          description: 'Sample step',
          gate: 'sample-gate',
        },
      ],
    });

    expect(parsed.steps).toHaveLength(1);
  });
});
