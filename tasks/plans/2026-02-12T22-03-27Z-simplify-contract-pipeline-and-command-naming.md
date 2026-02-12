# Simplify contract pipeline and command naming

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User asked for simplification: remove overly custom checksum machinery, avoid unnecessary custom helpers, and fix inconsistent naming around Zod commands. After this change, contract pipeline remains schema/semantic/compatibility/parity based, but without checksum-specific gates and sync command. Zod command surface becomes one canonical naming path.

## Progress

- [x] (2026-02-12T22:03:27Z) Initial task entry.
- [x] (2026-02-12T22:04:20Z) Removed checksum-specific code paths and tests.
- [x] (2026-02-12T22:05:00Z) Normalized Zod CLI command naming to one canonical form.
- [x] (2026-02-12T22:05:40Z) Updated docs/scripts/CI and ran full validation.

## Surprises & Discoveries

- `checksum` gate introduced extra maintenance flow (`contracts:checksum:sync`) and duplicated user burden without clear business value for this repo goal.

## Decision Log

Decision: remove checksum semantic gate and checksum sync command entirely.  
Rationale: maximize simplicity and keep only validations tied directly to project goals (schema/semantic references/compatibility/parity).  
Timestamp/Author: 2026-02-12T22:03:27Z / Codex

Decision: standardize one Zod command naming path (`zod:adapters`) without function alias pairs.  
Rationale: eliminates confusing `build/generate` dual naming and keeps CLI language consistent.  
Timestamp/Author: 2026-02-12T22:03:27Z / Codex

## Outcomes & Retrospective

Scope completed as requested:
- removed checksum custom machinery (`checksum.rule`, checksum compute/sync modules, dedicated script);
- removed checksum-specific semantic test and returned semantic gate to core rules only;
- normalized Zod command naming to one handler (`runZodAdaptersCommand`) and one command token (`zod:adapters`);
- aligned CI and docs with new command convention.

Validation fully green after cleanup.

## Context and Orientation

Relevant files are in `src/contracts/semantic/*`, `src/contracts/registry/*`, `src/cli/*`, `package.json`, `.github/workflows/contracts-ci.yml`, and `docs/architecture/contract-pipeline.md`. Tests affected: `tests/contracts-semantic.test.ts`.

## Terminology and Decomposition

N/A - this is a code simplification and naming cleanup task, not a research/decomposition campaign.

## Plan of Work

First remove checksum rule import/wiring and delete checksum-specific modules (`compute-contract-checksum`, `sync-instance-checksums`, `checksum.rule`) plus related test logic. Then rename Zod command handler to one canonical `runZodAdaptersCommand` and update command token and npm scripts to `zod:adapters`. Finally update docs/CI references and run format/lint/typecheck/test/contracts CI.

## Concrete Steps

1. Patch `src/` modules and delete unused files.
2. Patch `package.json`, workflow and docs to use canonical command naming.
3. Run:
   - `npm run format`
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`
   - `npm run contracts:ci`

## Validation and Acceptance

Acceptance:
- no checksum-specific command/gate/module remains in active pipeline;
- no dual alias function naming in Zod command handlers;
- scripts and CI use canonical Zod command name;
- all checks pass.

## Idempotence and Recovery

Edits are idempotent. If command rename breaks references, run `npm run typecheck` and `rg "zod:generate|zod:build|runZodBuildCommand"` to find leftovers and patch. If file deletions break imports, restore from git and remove imports first.

## Artifacts and Notes

Validation evidence:
- `npm run format` (pass)
- `npm run lint` (pass)
- `npm run typecheck` (pass)
- `npm test` (pass)
- `npm run contracts:ci` (pass)

Key file changes:
- `src/contracts/semantic/run-semantic-lint.ts`
- `src/contracts/semantic/rules/checksum.rule.ts` (deleted)
- `src/contracts/registry/compute-contract-checksum.ts` (deleted)
- `src/contracts/registry/sync-instance-checksums.ts` (deleted)
- `src/contracts/registry/index.ts`
- `src/cli/commands/zod-adapters.ts`
- `src/cli/commands/index.ts`
- `src/cli/main.ts`
- `tests/contracts-semantic.test.ts`
- `package.json`
- `.github/workflows/contracts-ci.yml`
- `docs/architecture/contract-pipeline.md`

## Interfaces and Dependencies

Command interface changes:
- CLI command token moves to `zod:adapters`.
- npm scripts expose `contracts:zod:adapters`.

No new dependencies introduced.

Change note: 2026-02-12T22:03:27Z - Created plan to simplify checksum flow and clean command naming.
Change note: 2026-02-12T22:05:40Z - Completed simplification and naming cleanup with full validation evidence.
