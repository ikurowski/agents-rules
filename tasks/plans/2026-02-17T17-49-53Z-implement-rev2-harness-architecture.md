# Implement Rev2 Harness Architecture (Balanced-Lite, single runtime)

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` are updated as work proceeds.

## Purpose / Big Picture

Implement the approved Rev2 architecture in this repository: explicit harness layer, contract-first runtime validation with Zod, declarative skills workflow specs, anti-drift validators, evaluation harness scaffolding, and CI gates that enforce source-of-truth integrity.

Observable outcomes:

1. Source tree follows Rev2 structure (`src/contracts`, `src/harness`, `src/runtime`, `src/skills-engine`, `evals`, `generated`).
2. Runtime boundaries parse with Zod.
3. Skills docs are validated for `Apply ... for` path and heading integrity.
4. CI includes contracts, skills, docs map, harness protocol, evals, idempotency, and security checks.

## Progress

- [x] (2026-02-17T17:50:30Z) Created ExecPlan and marked task as in progress.
- [x] (2026-02-17T18:57:10Z) Implemented structural refactor and Zod contract layer.
- [x] (2026-02-17T19:03:34Z) Implemented harness layer and skills-engine validators.
- [x] (2026-02-17T19:05:31Z) Added docs/evals/generated scaffolding and CI scripts.
- [x] (2026-02-17T19:09:20Z) Ran full validation, captured evidence, and finalized tracker/docs.

## Surprises & Discoveries

1. Initial `skills:validate` produced false negatives because `Apply ... for` section parsing kept trailing punctuation/backticks from bullet lines.
   Evidence: failing sections like `Escalation Handling`.` despite valid headings.
2. Windows line-ending normalization created large `prettier` failures after targeted patch edits.
   Evidence: lint output repeatedly reported `Insert \r` on patched files until `npm run lint:fix` was rerun.

## Decision Log

Decision: Keep single runtime process while adding explicit `src/harness` abstraction and `src/skills-engine` validators.  
Rationale: Approved user direction and lower operational complexity than dual-runtime split.  
Timestamp/Author: 2026-02-17T17:50:30Z / agent

Decision: Preserve `skills/*` as declarative-only and add `workflow/*.yaml` specs.  
Rationale: Aligns with SSOT anti-drift requirement and avoids embedding executable logic in skills.  
Timestamp/Author: 2026-02-17T17:50:30Z / agent

Decision: Normalize `skills-manifest` paths to POSIX separators.  
Rationale: Avoid host-dependent drift between Windows and Linux runners for manifest parity checks.  
Timestamp/Author: 2026-02-17T19:08:21Z / agent

## Outcomes & Retrospective

Completed. The repository now follows Rev2 architecture with explicit harness/runtime/contracts separation, declarative skills workflow specs, anti-drift validators, evaluation scenarios, and a CI pipeline that enforces boundary contracts and documentation pointers.

Main gaps closed:

1. Replaced hand-maintained runtime interfaces with Zod schemas and inferred types.
2. Added protocol envelope contracts and idempotency trace checks.
3. Added parser/validator for skill `Apply ... for` references and workflow YAML specs.
4. Added deterministic `generated/skills-manifest.json` and drift check gate.

Residual risk:

- `security:agent` currently uses dependency audit + regex secret scanning. It is useful but lighter than full CodeQL/SAST integration.

## Context and Orientation

Original runtime modules were under `src/agent-workflow/*`; tests were in `tests/agent-workflow*.test.ts`. Skills were markdown-first under `skills/*` with shared references.

After implementation:

1. Runtime lives in `src/runtime/*`.
2. Harness orchestration abstractions live in `src/harness/*`.
3. Contracts live in `src/contracts/*`.
4. Skills parsing/validation lives in `src/skills-engine/*`.
5. Tests are split into `tests/contracts`, `tests/harness`, `tests/runtime`, `tests/skills-engine`.

## Terminology and Decomposition

- Primary Question: How to implement Rev2 harness architecture in this repo while preserving SSOT and runtime stability?

Sub-question Register:

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | resolved | 4.9 | yes | answered |
| Sub-question-2 | initial | Primary Question | resolved | 4.6 | yes | answered |
| Sub-question-3 | initial | Primary Question | resolved | 4.4 | yes | answered |

Question-to-Evidence Matrix:

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | code refactor + tests | answered | `src/contracts/*`, `src/runtime/*`, `tests/runtime/*`, `tests/contracts/*` |
| Sub-question-2 | validators + scripts | answered | `src/skills-engine/*`, `src/cli/validate-skills-cli.ts`, `src/cli/check-docs-map-cli.ts` |
| Sub-question-3 | ci + docs updates | answered | `package.json` scripts, `docs/index.md`, `docs/standards/*`, `evals/scenarios/workflow-scenarios.json` |

## Plan of Work

1. Create Rev2 folder structure and migrate runtime code into `src/runtime` and `src/contracts` using Zod contracts.
2. Introduce `src/harness` modules for loop/protocol/context/observability and wire runtime to protocol event contracts.
3. Add `src/skills-engine` parsers/validators for skill docs and `Apply ... for` integrity.
4. Add declarative workflow specs under skills, generated manifest scaffold, eval scaffolding, and docs SoR pages.
5. Update scripts/tests/CI gates and verify with full command suite.

## Concrete Steps

1. Created new source modules in `src/contracts`, `src/harness`, `src/runtime`, `src/skills-engine`.
2. Replaced legacy runtime exports/imports and rewrote tests under new folder split.
3. Added CLI validation/check commands and wired scripts in `package.json`.
4. Added docs map/architecture/standards pages and workflow specs under skills.
5. Generated and validated `generated/skills-manifest.json`.

## Validation and Acceptance

Executed and passing:

1. `npm run contracts:check`
2. `npm run skills:validate`
3. `npm run docs:map:check`
4. `npm run harness:protocol:check`
5. `npm run evals:run`
6. `npm run idempotency:check`
7. `npm run security:agent`
8. `npm run ci`

## Idempotence and Recovery

1. `skills:manifest:generate` is deterministic and safe to rerun; drift is enforced by `skills:manifest:check`.
2. All check commands are verification-oriented and can be rerun after partial fixes.
3. If docs-pointer checks fail after doc edits, update references in `AGENTS.md` and `docs/index.md` together.

## Artifacts and Notes

Validation evidence excerpts:

1. `npm run test` -> `5 passed`, `24 passed` tests.
2. `npm run evals:run` -> `passed (3 scenarios)`.
3. `npm run security:agent` -> `passed`.
4. `npm run ci` -> full pipeline passed including new Rev2 gates.

## Interfaces and Dependencies

Implemented interface/dependency changes:

1. Runtime contracts moved to Zod schemas (`src/contracts/*`) with inferred types.
2. CLI parser now returns Zod-validated input contract.
3. Added harness request/event/response envelope schemas (`src/harness/protocol/envelopes.ts`).
4. Added validator interfaces for skills/docs/workflow specs (`src/skills-engine/validators/*`).

Dependency changes:

1. Added `zod`.
2. Added `yaml`.

Change note: 2026-02-17T17:50:30Z - Initialized execution plan for approved Rev2 implementation.  
Change note: 2026-02-17T19:09:20Z - Completed implementation, validation, and evidence capture.
