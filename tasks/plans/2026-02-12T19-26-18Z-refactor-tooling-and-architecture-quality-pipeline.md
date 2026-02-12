# Refactor tooling and architecture quality pipeline (ESLint + Prettier + modular TS)

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Align the repository with strict code-quality and architecture standards so contract tooling is maintainable and modern. Observable outcomes:

1. `Prettier` errors are enforced as `ESLint` errors.
2. `src/` is modularized into `cli`, `contracts`, `adapters`, and `shared` components.
3. CLI provides stable interface `runContractsCli(argv): Promise<number>`.
4. CI blocks on typecheck + lint before contract checks.

## Progress

- [x] (2026-02-12T19:26:18Z) Audited current source layout and quality gaps.
- [x] (2026-02-12T19:31:42Z) Added ESLint flat config + Prettier config + strict scripts.
- [x] (2026-02-12T19:44:59Z) Re-architected `src/` into modular command/rule/type layers with arrow-function style.
- [x] (2026-02-12T19:54:11Z) Added regression tests for semantic lint and CLI exit behavior.
- [x] (2026-02-12T20:26:18Z) Completed lint/typecheck/test/contracts validation with passing results.

## Surprises & Discoveries

1. `typescript-eslint` strict typed rules initially linted `eslint.config.mjs`; fix required scoping typed lint rules to TS files only.
2. `ajv/dist/2020.js` constructor typing required explicit module declaration with constructor signature for strict typecheck.
3. Very strict lint profile uncovered hidden complexity and unsafe patterns, forcing decomposition of semantic rules and typed AJV gateway.

## Decision Log

Decision: Keep very strict lint profile and resolve violations through refactor instead of downgrading rules.  
Rationale: User explicitly requested architecture-level rigor and modern standards.  
Timestamp/Author: 2026-02-12T19:34:00Z / agent

Decision: Introduce typed AJV gateway abstraction rather than direct scattered AJV calls.  
Rationale: Eliminates unsafe-call lint violations and centralizes validator behavior.  
Timestamp/Author: 2026-02-12T19:47:00Z / agent

Decision: Keep `z.fromJSONSchema()` usage constrained to adapter build/parity modules only.  
Rationale: Preserves runtime authority on JSON Schema while keeping adapter ergonomics and parity checks.  
Timestamp/Author: 2026-02-12T19:50:00Z / agent

## Outcomes & Retrospective

Completed full refactor of tooling and source architecture per requested plan. The pipeline is now strict, modular, and validated by lint/typecheck/tests/contracts commands. The new structure is behavior-preserving for contract gates while significantly improving maintainability.

## Context and Orientation

High-level file map after refactor:

1. `src/cli/main.ts` - stable CLI entry with `runContractsCli`.
2. `src/cli/commands/*` - isolated command handlers (`validate`, `semantic`, `zod-build`, `zod-parity`, `ci`).
3. `src/contracts/registry/*` - file discovery and contract snapshot loading.
4. `src/contracts/validation/*` - AJV bootstrap and schema validation logic.
5. `src/contracts/semantic/rules/*` - isolated semantic lint rules.
6. `src/contracts/compatibility/*` - compatibility gate logic and helpers.
7. `src/shared/*` - cross-cutting utility functions and gate result types.
8. `tests/*` - regression tests for CLI and semantic lint behavior.

## Terminology and Decomposition

N/A - implementation refactor task; no research campaign decomposition required.

## Plan of Work

1. Add strict lint/format tooling and scripts.
2. Reorganize source tree into modular architecture.
3. Enforce arrow-function style and modern TypeScript patterns.
4. Add tests and wire full quality gates in CI.
5. Verify all commands pass and document result.

## Concrete Steps

Commands executed from repository root:

1. `npm install`
2. `npm run format`
3. `npm run lint:fix`
4. `npm run lint`
5. `npm run typecheck`
6. `npm test`
7. `npm run contracts:validate`
8. `npm run contracts:semantic`
9. `npm run contracts:zod:build`
10. `npm run contracts:zod:parity`
11. `npm run contracts:ci`

## Validation and Acceptance

Acceptance checks:

1. ESLint + Prettier integrated and enforced: pass.
2. Arrow-first style in `src/` and strict linting with zero warnings: pass.
3. Typecheck passes under strict mode: pass.
4. CLI split into command modules and exposes `runContractsCli`: pass.
5. Regression tests pass (`vitest`): pass.
6. Contract pipeline gates remain green: pass.

## Idempotence and Recovery

1. Running `npm run format`, `npm run lint`, and `npm run typecheck` repeatedly is safe.
2. Running `npm run contracts:ci` repeatedly is safe and deterministic for current contracts.
3. If strict lint failures appear in future edits, run `npm run lint:fix` first, then resolve non-fixable violations manually.

## Artifacts and Notes

Evidence commands and outcomes:

1. `npm run lint` -> exit `0`.
2. `npm run typecheck` -> exit `0`.
3. `npm test` -> 2 files / 4 tests passed.
4. `npm run contracts:ci` -> all gates passed.

Generated artifacts preserved:

1. `artifacts/contracts-report.json`
2. `artifacts/zod-adapters.json`
3. `artifacts/zod-parity-report.json`

## Interfaces and Dependencies

Public interfaces added/changed:

1. `runContractsCli(argv: string[]): Promise<number>` in `src/cli/main.ts`.
2. `GateExecutionResult` in `src/shared/types/gate.ts`.
3. Typed contract domain exports in `src/contracts/types/index.ts`.

Dependencies/tooling added:

1. `eslint`, `@eslint/js`, `typescript-eslint`.
2. `eslint-plugin-prettier`, `eslint-config-prettier`, `eslint-plugin-import`, `eslint-plugin-unicorn`, `eslint-plugin-sonarjs`.
3. `prettier`, `globals`.

Change note: 2026-02-12T19:26:18Z - Created implementation plan for strict tooling + architecture refactor.  
Change note: 2026-02-12T20:26:18Z - Completed implementation and verified all quality and pipeline gates.
