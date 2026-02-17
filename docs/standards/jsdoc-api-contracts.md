# JSDoc API Contract Standard

## Scope

This file is the canonical rule set for JSDoc on exported APIs.

It applies to all newly added or modified exports:

1. functions and methods,
2. classes,
3. interfaces and exported type aliases.

## Required Fields

### Functions and Methods

JSDoc MUST include:

1. caller-facing purpose,
2. input constraints,
3. preconditions,
4. postconditions,
5. side effects,
6. machine-readable error semantics.

### Classes

JSDoc MUST include:

1. responsibility boundary,
2. invariants,
3. constructor expectations,
4. side effects and error semantics of public methods.

### Interfaces and Types

JSDoc MUST include:

1. intended usage,
2. field constraints,
3. required vs optional semantics.

## Error Semantics

Error contracts SHOULD align with the repository `ProblemDetails` contract from:

- `src/contracts/common/problem-details.schema.ts`

Rules:

1. specify exact conditions for each error,
2. keep semantics machine-actionable (`type`, `status`, optional `code`),
3. keep `title`/`detail` caller-facing and never leak stack traces or internal identifiers.
4. external compatibility with RFC 9457 is desirable, but repository schema is the operational SSOT.

## Forbidden Content

JSDoc MUST NOT include:

1. internal implementation details,
2. debug traces or stack traces,
3. sensitive internal topology details,
4. bug-dependent behavior presented as contract.

## Review Checklist

1. Every changed export has required JSDoc contract fields.
2. Input constraints and error conditions are explicit.
3. Contract text is caller-facing and security-safe.
4. If behavior changed, JSDoc changed in the same diff.

## Change Policy

1. Keep normative rules in this file only (SSOT).
2. `AGENTS.md` and other docs should point here, not duplicate full rules.
3. Operational execution flow (audit/fix workflow) lives in `skills/jsdoc-reviewer`.
