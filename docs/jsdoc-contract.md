# JSDoc API Contract Specification

## Purpose and Scope

This document is the authoritative specification for JSDoc contracts on exported code in this repository.

Scope:

1. Applies to all newly added or modified exported APIs.
2. Applies to functions, methods, classes, interfaces, and exported type aliases.
3. Defines interface contracts only, not implementation details.

## Normative Language

The keywords `MUST`, `MUST NOT`, `SHOULD`, and `MAY` are interpreted as described in RFC 2119.

## Golden Rule

Treat every JSDoc comment as a normative contract for an exported API surface.
JSDoc MUST specify what callers can rely on (purpose, inputs, constraints, guarantees, side effects, and error semantics).
JSDoc MUST NOT leak implementation details, stack traces, or internal debugging context.

## Required Contract Elements

### Functions and Methods

For each exported function/method, JSDoc MUST define:

1. Purpose (what the API does from the caller perspective).
2. Inputs with explicit type semantics and valid ranges/constraints.
3. Preconditions (what callers must satisfy before invocation).
4. Postconditions (guarantees after successful completion).
5. Side effects (I/O, mutation, external calls, persistent writes).
6. Machine-readable error semantics (when and how failures are represented).

### Classes

For each exported class, JSDoc MUST define:

1. Class purpose and responsibility boundary.
2. Invariants that hold before/after public operations.
3. Constructor preconditions and postconditions.
4. Side effects and error semantics of public methods.

### Interfaces and Types

For each exported interface/type, JSDoc MUST define:

1. Intended usage.
2. Field constraints and allowed value ranges/states.
3. Required vs optional semantics.

## Error Semantics Profile

Machine-readable error semantics SHOULD use a Problem Details profile aligned with RFC 9457:

```ts
interface ProblemDetails {
  type: string;
  status: number;
  title: string;
  detail: string;
  instance?: string;
  code?: string;
}
```

Rules:

1. JSDoc MUST describe the conditions that produce each error class.
2. Error descriptions MUST be specific enough for non-human clients (including agents) to branch safely.
3. JSDoc MUST NOT expose stack traces, internal class names, SQL snippets, or secret values.

## Forbidden Content

JSDoc MUST NOT include:

1. Internal implementation details that callers do not need.
2. Stack traces or debug traces.
3. Internal topology details that increase attack surface.
4. Bug-dependent behavior descriptions presented as contractual guarantees.

## Templates

### Function Template

```ts
/**
 * <Purpose from caller perspective>.
 *
 * Preconditions:
 * - <required condition 1>
 * - <required condition 2>
 *
 * Postconditions:
 * - <guarantee 1>
 * - <guarantee 2>
 *
 * Side effects:
 * - <I/O or state effect, or "none">
 *
 * Error semantics:
 * - Returns/throws ProblemDetails when <condition>.
 * - type: <stable identifier>, status: <numeric status>, title/detail: <caller-facing semantics>.
 */
```

### Class Template

```ts
/**
 * <Class purpose and boundary>.
 *
 * Invariants:
 * - <invariant 1>
 * - <invariant 2>
 *
 * Side effects:
 * - <effect summary or "none">
 *
 * Error semantics:
 * - Public methods return/throw ProblemDetails when <condition>.
 */
```

### Interface or Type Template

```ts
/**
 * <Interface/type purpose>.
 *
 * Constraints:
 * - <field>: <range/allowed values/invariants>
 * - <field>: <required/optional semantics>
 */
```

## Review Gates

Use this checklist during review and acceptance:

1. Documentation SoT gate:
   - JSDoc contract details are maintained in this file only.
   - `AGENTS.md` references this file and does not duplicate detailed rules.
2. API contract gate:
   - Every new/modified export has JSDoc contract fields (preconditions, postconditions, side effects, error semantics).
   - Input ranges/constraints are explicit and testable.
3. Safety gate:
   - JSDoc does not leak stack traces or internal implementation details.
   - Error conditions are precise and machine-readable.
4. Regression gate:
   - Implementation changes that affect contract behavior update JSDoc in the same change.

## Trade-offs and Limits

1. Documentation overhead increases with contract depth.
2. Contract drift is possible if docs are not updated with code changes.
3. Some invariants are hard to express concisely.
4. Strict contracts can slow API evolution and may require versioning/deprecation discipline.

