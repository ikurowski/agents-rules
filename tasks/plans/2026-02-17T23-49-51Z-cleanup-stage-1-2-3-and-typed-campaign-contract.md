# Cleanup Stage 1+2+3 with Enforcement and Typed Campaign Contract

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Apply approved repository cleanup stages 1+2+3 by removing low-value artifacts, consolidating duplicated skill/reference structures, and adding missing anti-drift enforcement (`workflow CI`, `JSDoc gate`, `skills declarative-only gate`). Also introduce typed contract support for campaign summary fields used in shared references.

## Progress

- [x] (2026-02-17T23:52:00Z) Initialized ExecPlan and confirmed clean working tree.
- [x] (2026-02-17T23:54:20Z) Implemented cleanup removals and consolidations.
- [x] (2026-02-17T23:55:05Z) Added enforcement gates and wired them into scripts/workflow.
- [x] (2026-02-17T23:55:10Z) Added typed campaign summary contract and test coverage.
- [x] (2026-02-17T23:55:31Z) Ran full validation (`npm run ci`) and captured outcomes.

## Surprises & Discoveries

- Repository currently has no `.github/workflows` CI definition.
- `agents/openai.yaml` files are not referenced by runtime/tests/scripts in this repository.

## Decision Log

Decision: Treat `agents/openai.yaml` as removable in this repository scope after local evidence search.
Rationale: No in-repo consumer was found; keeping them adds maintenance surface without executable value.
Timestamp/Author: 2026-02-17T23:52:00Z / agent

Decision: Implement JSDoc gate for exported executable API surfaces first (`function`, `class`, exported const function initializers).
Rationale: Provides immediate enforceable value without forcing bulk rewrite of schema/type export docs.
Timestamp/Author: 2026-02-17T23:52:00Z / agent

## Outcomes & Retrospective

Completed. Stage 1+2+3 cleanup was implemented with enforced automation:

- removed low-value repository artifacts (stale scorecard, unused skill metadata YAML files, optional deep-research use-case reference, redundant workflow YAML files),
- consolidated campaign terminology around one shared reference and added typed campaign summary schema,
- added automated anti-drift gates (`jsdoc:check`, `skills:declarative:check`) and remote CI workflow (`.github/workflows/ci.yml`),
- verified full quality pipeline passes (`npm run ci`).

Residual risk: external tooling outside this repository could theoretically depend on removed `skills/*/agents/openai.yaml` files; no in-repo consumer was found.

## Context and Orientation

Core runtime flow: `src/cli/run-agent-workflow-cli.ts` -> `src/harness/loop/run-agent-loop.ts` -> `src/runtime/orchestrator/run-agent-workflow.ts` with Zod boundaries in `src/contracts/*`. Skills are declarative assets under `skills/*` validated by `src/skills-engine/*` and `src/cli/validate-skills-cli.ts`.

## Terminology and Decomposition

Primary Question: How to reduce repository maintenance overhead while increasing automatic policy enforcement with minimal runtime risk?

Sub-question Register:

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | in_progress | 4.6 | yes | include-now |

Question-to-Evidence Matrix:

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | cleanup+enforcement changes | in_progress | package scripts, CLI gates, workflow files |

Entry Criteria: Include-now when change reduces maintenance cost and keeps `npm run ci` passing.
Impediment: None currently.

## Plan of Work

1. Remove low-value artifacts: editor-local file, stale report artifact, unused skill metadata YAMLs, and optional deep-research use-case reference.
2. Consolidate skill workflow YAML footprint by keeping only `flow.yaml` for each active skill.
3. Add missing enforcement gates:
   - `src/cli/check-skills-declarative-cli.ts`
   - `src/cli/check-jsdoc-contracts-cli.ts`
   - `.github/workflows/ci.yml`
   - script wiring in `package.json` and standards docs.
4. Add typed campaign summary contract schema under `src/contracts/skills` and export/test it.
5. Run full validation and capture result.

## Concrete Steps

1. Edit/delete files with `apply_patch` and file removal commands.
2. Run `npm run ci`.
3. Run focused grep checks to confirm removed references are not dangling.

## Validation and Acceptance

Acceptance requires:

1. `npm run ci` succeeds.
2. New gates run as part of `npm run ci`.
3. Removed files are not referenced by executable surfaces.
4. Typed campaign summary schema parses a representative object in tests.

## Idempotence and Recovery

Changes are file-based and deterministic. If a removal causes unexpected dependency breakage, restore only the removed file from git history and rerun `npm run ci` to confirm.

## Artifacts and Notes

- Validation logs captured from local command execution in terminal output.

## Interfaces and Dependencies

Added interfaces/dependencies:

- New CLI gate commands in `package.json`.
- New contract export in `src/contracts/index.ts`.
- New GitHub Actions workflow for remote CI enforcement.

Change note: 2026-02-17T23:52:00Z - Initial plan created for approved cleanup stages 1+2+3 plus typed campaign contract and enforcement gates.
