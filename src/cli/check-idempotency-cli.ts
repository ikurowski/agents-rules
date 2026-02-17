import {isDuplicateTraceEvent} from '../harness/observability/idempotency.js';
import {readDefaultSourceOfTruthPaths} from '../runtime/io/source-of-truth-paths.js';
import {runAgentWorkflow} from '../runtime/orchestrator/run-agent-workflow.js';

const runIdempotencyCheck = async (): Promise<void> => {
  const report = await runAgentWorkflow({
    prompt: 'idempotency [simulate-execute-transient-failure]',
    sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
  });

  const seenKeys = new Set<string>();
  for (const traceEvent of report.artifacts.traceEvents) {
    if (isDuplicateTraceEvent(traceEvent, seenKeys)) {
      throw new Error(`Duplicate trace event detected: ${traceEvent.stage}:${traceEvent.eventType}`);
    }
  }

  const executeTransitions = report.artifacts.stageTransitions.filter((transition) =>
    transition.startsWith('execute:'),
  );
  if (executeTransitions.length !== 2) {
    throw new Error(`Expected exactly 2 execute transitions for retry scenario, got ${executeTransitions.length}.`);
  }

  console.log('idempotency:check passed');
};

try {
  await runIdempotencyCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown idempotency check error.';
  console.error(`idempotency:check failed: ${message}`);
  process.exitCode = 1;
}
