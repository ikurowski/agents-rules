import {describe, expect, test} from 'vitest';

import {runHarnessLoop} from '../../src/harness/loop/run-agent-loop.js';
import {
  HarnessEventEnvelopeSchema,
  HarnessRequestEnvelopeSchema,
  HarnessResponseEnvelopeSchema,
} from '../../src/harness/protocol/envelopes.js';
import {readDefaultSourceOfTruthPaths} from '../../src/runtime/io/source-of-truth-paths.js';

describe('harness loop', () => {
  test('returns request/events/response envelopes', async () => {
    const defaultSourceOfTruthPaths = readDefaultSourceOfTruthPaths();
    const loopResult = await runHarnessLoop(
      {
        prompt: 'harness test',
        sourceOfTruthPaths: defaultSourceOfTruthPaths,
      },
      {maxInstructionLayers: 3},
    );

    const request = HarnessRequestEnvelopeSchema.parse(loopResult.request);
    const response = HarnessResponseEnvelopeSchema.parse(loopResult.response);
    loopResult.events.forEach((event) => {
      HarnessEventEnvelopeSchema.parse(event);
    });

    expect(request.requestId).toBe(response.requestId);
    expect(loopResult.instructionLayers).toHaveLength(3);
    expect(loopResult.events.length).toBeGreaterThan(0);
    expect(loopResult.events.some((event) => event.event === 'stage_started')).toBe(true);
    expect(loopResult.events.some((event) => event.event === 'stage_finished')).toBe(true);
    expect(response.payload.input.sourceOfTruthPaths.sharedReferencePaths.length).toBeLessThan(
      defaultSourceOfTruthPaths.sharedReferencePaths.length,
    );
  });
});
