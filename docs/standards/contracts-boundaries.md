# Contracts and Boundaries Standard

All runtime boundaries are parsed with Zod schemas under `src/contracts`.

## Required Boundaries

1. CLI input parsing.
2. Runtime stage input/output report payload.
3. Harness protocol request/event/response envelopes.
4. Skill workflow specification files.

## Rules

- Exported runtime types are derived from schema inference.
- Boundary checks must fail fast on schema mismatch.
- Generated artifacts are validated before write/check.
