# Restore tsconfig, trim ESLint ignores, and recreate the JSDoc standard

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The repository has dormant tooling files again, but one core piece is still missing: `eslint.config.mjs` is type-aware and therefore incomplete without `tsconfig.json`. The user also wants the ESLint ignore list reduced to only entries that still make sense and wants the old JSDoc policy restored in a sensible location. After this change, the root dormant tooling set should be internally coherent, the ESLint config should be leaner, and the JSDoc standard should exist again as an explicit source of truth without reviving deleted runtime contracts or CI commands.

## Progress

- [x] (2026-03-03T19:50:32Z) Initial task entry.
- [x] (2026-03-03T19:51:00Z) Reopened the tracker with a new active task linked to this plan.
- [x] (2026-03-03T19:52:00Z) Restored `tsconfig.json` so the dormant ESLint setup is internally coherent.
- [x] (2026-03-03T19:52:00Z) Trimmed `eslint.config.mjs` ignores to the smallest set that still makes sense.
- [x] (2026-03-03T19:53:00Z) Recreated the JSDoc standard in a sensible current path and pointed `AGENTS.md` at it.
- [x] (2026-03-03T19:54:00Z) Validated final file presence and wording, then recorded the outcome.

## Surprises & Discoveries

The previous reply already established that the current `eslint.config.mjs` is incomplete without `tsconfig.json` because it uses `parserOptions.project: true`. The historical JSDoc standard existed as `docs/standards/jsdoc-api-contracts.md`, but its old content referenced deleted runtime contracts, `skills/jsdoc-reviewer`, and `npm run jsdoc:check`, so restoration must be selective rather than verbatim.

## Decision Log

Decision: restore `tsconfig.json` using the last simple root version rather than inventing a new config shape.  
Rationale: the previous file was already minimal and matched the dormant TypeScript/ESLint setup.  
Timestamp/Author: 2026-03-03T19:50:32Z / agent

Decision: trim ESLint ignores to `node_modules/**`, `dist/**`, `eslint.config.mjs`, and `src/**/*.d.ts`.  
Rationale: these are the only entries that remain defensible as default future-facing exclusions without suppressing real repository content such as `tasks`, `.github`, or markdown files.  
Timestamp/Author: 2026-03-03T19:50:32Z / agent

Decision: recreate the JSDoc standard at `docs/standards/jsdoc-api-contracts.md` and reference it from `AGENTS.md`.  
Rationale: the historical path is still sensible for a policy document, and `AGENTS.md` is the right operational pointer when the rule exists again.  
Timestamp/Author: 2026-03-03T19:50:32Z / agent

## Outcomes & Retrospective

Completed. The dormant toolchain set is now internally coherent again because `tsconfig.json` exists and matches the type-aware ESLint setup. `eslint.config.mjs` now carries only four future-facing ignores: `node_modules/**`, `dist/**`, `eslint.config.mjs`, and `src/**/*.d.ts`. The JSDoc standard was recreated at `docs/standards/jsdoc-api-contracts.md` with stale references removed, and `AGENTS.md` now points to it instead of leaving the rule absent. This restores a single source of truth for JSDoc without reviving the old contracts/runtime/CI architecture.

## Context and Orientation

Root tooling now includes `package.json`, `eslint.config.mjs`, and `.prettierrc.json`, but `tsconfig.json` is currently missing. `AGENTS.md` is the operational entry point for repo rules. `docs/` no longer exists in the current working tree, so restoring the JSDoc standard will reintroduce only the specific policy path needed for that source of truth, not the broader removed docs architecture.

## Terminology and Decomposition

N/A - this is a repository configuration/policy task, not a research campaign.

## Plan of Work

First, add this plan as the active task in `tasks/todo.md`. Next, recreate `tsconfig.json` with the last minimal root settings. Then reduce `eslint.config.mjs` ignores to the lean set that still makes sense. After that, recreate `docs/standards/jsdoc-api-contracts.md` using the old standard as a base but remove stale references to deleted contracts, deleted skills, and removed npm gates. Finally, add a short pointer in `AGENTS.md`, validate the resulting file set and wording, and record the outcome.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Update `tasks/todo.md` with an `## Active Task` entry for this plan.
2. Recreate `tsconfig.json` via `apply_patch`.
3. Patch `eslint.config.mjs`, `AGENTS.md`, and the new `docs/standards/jsdoc-api-contracts.md`.
4. Validate with `Test-Path`, `Get-Content`, and `rg` scans for the removed ignore entries and stale JSDoc references.

Expected results:

- `tsconfig.json` exists again,
- ESLint ignores no longer hide `tasks/**`, `.github/**`, or `*.md`,
- `docs/standards/jsdoc-api-contracts.md` exists with current, non-stale policy text,
- `AGENTS.md` points to the restored JSDoc standard.

## Validation and Acceptance

Acceptance is satisfied when:

1. `Test-Path` returns `True` for `tsconfig.json` and `docs/standards/jsdoc-api-contracts.md`.
2. `eslint.config.mjs` contains only the trimmed ignore set.
3. `rg` does not find `tasks/**`, `.github/**`, or `*.md` in `eslint.config.mjs`.
4. `docs/standards/jsdoc-api-contracts.md` does not reference `src/contracts/common/problem-details.schema.ts`, `skills/jsdoc-reviewer`, or `npm run jsdoc:check`.
5. `AGENTS.md` contains a pointer to the restored JSDoc standard.

## Idempotence and Recovery

These file recreations and edits are idempotent at the content level. If a future task wants to activate real JSDoc enforcement again, it should extend from this restored policy file instead of embedding duplicate rules directly in `AGENTS.md` or skill docs.

## Artifacts and Notes

Validation evidence to capture:

- `Test-Path` for `tsconfig.json` and `docs/standards/jsdoc-api-contracts.md`
- `rg` output for trimmed ignores
- `rg` output for stale JSDoc references

Captured evidence:

- `Test-Path` returned `True` for `tsconfig.json` and `docs/standards/jsdoc-api-contracts.md`.
- `rg -n "tasks/\\*\\*|\\.github/\\*\\*|\\*\\.md" eslint.config.mjs` returned no matches.
- `rg -n "src/contracts/common/problem-details.schema.ts|skills/jsdoc-reviewer|npm run jsdoc:check" docs/standards/jsdoc-api-contracts.md` returned no matches.
- `AGENTS.md` now contains `docs/standards/jsdoc-api-contracts.md` as the pointer for JSDoc contract rules.

## Interfaces and Dependencies

N/A - this task restores configuration and policy files but does not add or validate a runtime interface.

Change note: 2026-03-03T19:50:32Z - Created plan to restore `tsconfig.json`, trim ESLint ignores, and recreate the JSDoc standard.
Change note: 2026-03-03T19:54:00Z - Recorded validation evidence and final outcome after restoring `tsconfig.json`, trimming ESLint ignores, and recreating the JSDoc standard.
