import {readFile} from 'node:fs/promises';

import {z} from 'zod';

import {runHarnessLoop} from '../harness/loop/run-agent-loop.js';
import {readDefaultSourceOfTruthPaths} from '../runtime/io/source-of-truth-paths.js';

const EvalScenarioSchema = z.object({
  id: z.string().trim().min(1),
  prompt: z.string().trim().min(1),
  expectedStatus: z.enum(['completed', 'failed']),
  expectRetry: z.boolean(),
  expectEscalation: z.boolean(),
});

const EvalScenarioFileSchema = z.object({
  scenarios: z.array(EvalScenarioSchema).min(1),
});

type EvalScenario = z.infer<typeof EvalScenarioSchema>;
type EvalScenarioFile = z.infer<typeof EvalScenarioFileSchema>;

const readScenarioFile = async (): Promise<EvalScenarioFile> => {
  const scenarioFile = await readFile('evals/scenarios/workflow-scenarios.json', 'utf8');
  const rawScenarioFile = JSON.parse(scenarioFile) as unknown;
  return EvalScenarioFileSchema.parse(rawScenarioFile);
};

const runScenario = async (scenario: EvalScenario): Promise<void> => {
  const loopResult = await runHarnessLoop({
    prompt: scenario.prompt,
    sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
  });
  const report = loopResult.response.payload;
  const retrySummary = report.artifacts.retrySummary;
  const hadRetry = retrySummary.executeRetryCount > 0 || retrySummary.verifyRetryCount > 0;
  const escalated = report.escalation !== undefined;

  if (report.status !== scenario.expectedStatus) {
    throw new Error(`Scenario ${scenario.id} expected status ${scenario.expectedStatus} but got ${report.status}.`);
  }

  if (hadRetry !== scenario.expectRetry) {
    throw new Error(`Scenario ${scenario.id} retry mismatch. expected=${scenario.expectRetry} got=${hadRetry}`);
  }

  if (escalated !== scenario.expectEscalation) {
    throw new Error(
      `Scenario ${scenario.id} escalation mismatch. expected=${scenario.expectEscalation} got=${escalated}`,
    );
  }
};

const runEvals = async (): Promise<void> => {
  const scenarioFile = await readScenarioFile();
  for (const scenario of scenarioFile.scenarios) {
    await runScenario(scenario);
  }

  console.log(`evals:run passed (${scenarioFile.scenarios.length} scenarios)`);
};

try {
  await runEvals();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown eval error.';
  console.error(`evals:run failed: ${message}`);
  process.exitCode = 1;
}
