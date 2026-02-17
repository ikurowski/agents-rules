# Harness Architecture

The harness layer is implemented in `src/harness` and orchestrates deterministic request/response envelopes around runtime execution.

## Components

1. `src/harness/loop`:
   - Builds protocol envelopes,
   - applies instruction-layer compaction,
   - executes runtime and emits loop events.
2. `src/harness/context`:
   - maps source-of-truth paths to ordered instruction layers,
   - supports deterministic compaction.
3. `src/harness/protocol`:
   - request/event/response envelope schemas.
4. `src/harness/observability`:
   - idempotency key generation,
   - trace deduplication helpers.

## Reliability Properties

- Runtime entry is always validated by schema.
- Loop execution emits auditable envelopes.
- Idempotency checks can detect duplicate trace application in retry scenarios.
