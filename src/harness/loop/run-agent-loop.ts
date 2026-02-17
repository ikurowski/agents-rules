import {AgentWorkflowInputSchema} from '../../contracts/index.js';
import {runAgentWorkflow} from '../../runtime/orchestrator/run-agent-workflow.js';
import {
  compactInstructionLayers,
  readCompactedSourceOfTruthPaths,
  readInstructionLayers,
} from '../context/instruction-layers.js';
import {readIdempotencyKey, readRunId} from '../observability/idempotency.js';
import {
  HarnessEventEnvelopeSchema,
  HarnessRequestEnvelopeSchema,
  HarnessResponseEnvelopeSchema,
} from '../protocol/envelopes.js';

import type {AgentWorkflowInput, AgentWorkflowReport} from '../../contracts/index.js';
import type {InstructionLayer} from '../context/instruction-layers.js';
import type {HarnessEventEnvelope, HarnessRequestEnvelope, HarnessResponseEnvelope} from '../protocol/envelopes.js';

export interface HarnessLoopResult {
  request: HarnessRequestEnvelope;
  events: HarnessEventEnvelope[];
  response: HarnessResponseEnvelope;
  idempotencyKey: string;
  instructionLayers: InstructionLayer[];
}

export interface HarnessLoopOptions {
  maxInstructionLayers?: number;
}

const readTimestamp = (): string => {
  return new Date().toISOString();
};

const readLoopEvent = (
  requestId: string,
  event: HarnessEventEnvelope['event'],
  detail: string,
): HarnessEventEnvelope => {
  return HarnessEventEnvelopeSchema.parse({
    requestId,
    timestamp: readTimestamp(),
    event,
    detail,
  });
};

/**
 * Runs harness loop orchestration with explicit context layering and protocol envelopes.
 */
export const runHarnessLoop = async (
  input: AgentWorkflowInput,
  options: HarnessLoopOptions = {},
): Promise<HarnessLoopResult> => {
  const allLayers = await readInstructionLayers(input.sourceOfTruthPaths);
  const maxLayers = options.maxInstructionLayers ?? allLayers.length;
  const instructionLayers = compactInstructionLayers(allLayers, maxLayers);
  const compactedSourceOfTruthPaths = readCompactedSourceOfTruthPaths(input.sourceOfTruthPaths, instructionLayers);
  const effectiveInput = AgentWorkflowInputSchema.parse({
    ...input,
    sourceOfTruthPaths: compactedSourceOfTruthPaths,
  });

  const requestId = readRunId();
  const request = HarnessRequestEnvelopeSchema.parse({
    requestId,
    timestamp: readTimestamp(),
    payload: effectiveInput,
  });
  const idempotencyKey = readIdempotencyKey(effectiveInput);

  const events: HarnessEventEnvelope[] = [readLoopEvent(requestId, 'loop_started', 'Harness loop started.')];
  if (instructionLayers.length < allLayers.length) {
    events.push(
      readLoopEvent(
        requestId,
        'loop_compacted',
        `Instruction layers compacted from ${allLayers.length} to ${instructionLayers.length}.`,
      ),
    );
  }

  const report: AgentWorkflowReport = await runAgentWorkflow(effectiveInput, {idempotencyKey});
  report.artifacts.traceEvents.forEach((traceEvent) => {
    const eventKind = traceEvent.eventType === 'started' ? 'stage_started' : 'stage_finished';
    events.push(
      readLoopEvent(
        requestId,
        eventKind,
        `${traceEvent.stage} attempt ${traceEvent.attemptNumber}: ${traceEvent.eventType}`,
      ),
    );
  });
  events.push(readLoopEvent(requestId, 'loop_finished', `Harness loop finished with status ${report.status}.`));

  const response = HarnessResponseEnvelopeSchema.parse({
    requestId,
    timestamp: readTimestamp(),
    payload: report,
  });

  return {request, events, response, idempotencyKey, instructionLayers};
};
