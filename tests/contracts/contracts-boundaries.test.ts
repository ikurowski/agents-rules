import {describe, expect, test} from 'vitest';

import {
  AgentWorkflowInputSchema,
  AgentWorkflowReportSchema,
  ProblemDetailsSchema,
  ResearchCampaignSummarySchema,
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

  test('parses research campaign summary schema', () => {
    const parsed = ResearchCampaignSummarySchema.parse({
      primary_question: 'Should we adopt this cleanup plan?',
      sub_questions: ['What is the rollback risk?', 'What is the CI impact?'],
      entry_criteria: 'Include when risk impact is material.',
      impediments: [],
      question_to_evidence_matrix: {
        kind: 'summary',
        value: 'All sub-questions mapped to command evidence.',
      },
    });

    expect(parsed.sub_questions).toHaveLength(2);
  });
});
