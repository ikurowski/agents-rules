import {AgentWorkflowInputSchema} from '../contracts/index.js';
import {runHarnessLoop} from '../harness/loop/run-agent-loop.js';
import {
  HarnessEventEnvelopeSchema,
  HarnessRequestEnvelopeSchema,
  HarnessResponseEnvelopeSchema,
} from '../harness/protocol/envelopes.js';
import {readDefaultSourceOfTruthPaths} from '../runtime/io/source-of-truth-paths.js';

const runProtocolCheck = async (): Promise<void> => {
  const input = AgentWorkflowInputSchema.parse({
    prompt: 'harness-protocol-check',
    sourceOfTruthPaths: readDefaultSourceOfTruthPaths(),
  });

  const loopResult = await runHarnessLoop(input, {maxInstructionLayers: 4});
  HarnessRequestEnvelopeSchema.parse(loopResult.request);
  loopResult.events.forEach((event) => HarnessEventEnvelopeSchema.parse(event));
  HarnessResponseEnvelopeSchema.parse(loopResult.response);

  if (loopResult.events.length === 0) {
    throw new Error('Harness loop produced no events.');
  }

  if (loopResult.events.some((event) => event.requestId !== loopResult.request.requestId)) {
    throw new Error('Harness events requestId mismatch.');
  }

  const sharedReferenceCountBefore = input.sourceOfTruthPaths.sharedReferencePaths.length;
  const sharedReferenceCountAfter = loopResult.response.payload.input.sourceOfTruthPaths.sharedReferencePaths.length;
  if (sharedReferenceCountAfter >= sharedReferenceCountBefore) {
    throw new Error('Harness compaction did not reduce shared reference footprint.');
  }

  const hasStageEvents = loopResult.events.some(
    (event) => event.event === 'stage_started' || event.event === 'stage_finished',
  );
  if (!hasStageEvents) {
    throw new Error('Harness loop produced no stage-level events.');
  }

  console.log('harness:protocol:check passed');
};

try {
  await runProtocolCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown harness protocol check error.';
  console.error(`harness:protocol:check failed: ${message}`);
  process.exitCode = 1;
}
