# JSDoc Contract Standard

## Scope

This file is the canonical repository-wide standard for JSDoc on exported APIs when the repository contains source code that exposes exports.

It defines the policy itself, not a skill workflow or execution procedure.

It applies to newly added or modified exports such as:

1. functions and methods,
2. classes,
3. interfaces and exported type aliases.

## Required Fields

### Functions and Methods

JSDoc should include:

1. caller-facing purpose,
2. input constraints,
3. preconditions,
4. postconditions,
5. side effects,
6. error semantics.

### Classes

JSDoc should include:

1. responsibility boundary,
2. invariants,
3. constructor expectations,
4. side effects and error semantics of public methods.

### Interfaces and Types

JSDoc should include:

1. intended usage,
2. field constraints,
3. required vs optional semantics.

## Error Semantics

When an export can fail, document:

1. the exact condition that causes the error,
2. what the caller can rely on after the error,
3. whether the error is expected/operational or indicates a programmer mistake.

Keep error descriptions caller-facing and avoid implementation leakage.

## Forbidden Content

JSDoc must not include:

1. internal implementation details,
2. debug traces or stack traces,
3. sensitive topology or secret-bearing details,
4. bug-dependent behavior presented as contract.

## Review Checklist

1. Every changed export has JSDoc when the surrounding codebase expects it.
2. Input constraints and error conditions are explicit.
3. Contract text is caller-facing and security-safe.
4. If behavior changed materially, the JSDoc changed in the same diff.

## Change Policy

1. Keep normative JSDoc rules in this file only.
2. `AGENTS.md` and other docs should point here instead of duplicating the full rule set.
3. If future automation validates JSDoc, that automation should consume this file rather than redefining the policy elsewhere.
