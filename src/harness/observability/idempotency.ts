import {createHash, randomUUID} from 'node:crypto';

import type {AgentWorkflowInput, AgentWorkflowTraceEvent} from '../../contracts/index.js';

/**
 * Reads deterministic idempotency key for a workflow input.
 */
export const readIdempotencyKey = (input: AgentWorkflowInput): string => {
  const hash = createHash('sha256');
  hash.update(JSON.stringify(input));
  return hash.digest('hex');
};

/**
 * Reads stable event identifier used by deduplication checks.
 */
export const readTraceEventId = (event: AgentWorkflowTraceEvent): string => {
  const keyParts = [
    event.idempotencyKey ?? '<missing-idempotency-key>',
    event.stage,
    String(event.attemptNumber),
    event.eventType,
  ];
  return keyParts.join(':');
};

/**
 * Tags events with generated idempotency key.
 */
export const withIdempotencyKey = (
  event: Omit<AgentWorkflowTraceEvent, 'idempotencyKey'>,
  idempotencyKey: string,
): AgentWorkflowTraceEvent => {
  return {
    ...event,
    idempotencyKey,
  };
};

/**
 * Returns true when a trace event is a duplicate of a prior event key.
 */
export const isDuplicateTraceEvent = (event: AgentWorkflowTraceEvent, seenKeys: Set<string>): boolean => {
  const dedupeKey = readTraceEventId(event);
  if (seenKeys.has(dedupeKey)) {
    return true;
  }

  seenKeys.add(dedupeKey);
  return false;
};

/**
 * Creates run id for trace/report correlation.
 */
export const readRunId = (): string => {
  return randomUUID();
};
