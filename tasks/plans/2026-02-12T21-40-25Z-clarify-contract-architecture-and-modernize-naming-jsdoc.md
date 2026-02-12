# Clarify contract architecture and modernize naming/jsdoc

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User-visible result: the contract toolchain becomes easier to understand and safer to operate. Placeholder checksums in `contracts/instances/*.json` are replaced with deterministic values, naming across command/adapter modules is normalized, and more JSDoc is added to public modules. This matters because the repo is used to steer AI-agent behavior, so maintainability and auditability are critical. Success is observable when CLI/tests still pass and docs explain what each folder and workflow file does.

## Progress

- [x] (2026-02-12T21:40:25Z) Initial task entry.
- [x] (2026-02-12T21:42:10Z) Inspected contracts, workflows, and source naming inconsistencies.
- [x] (2026-02-12T21:47:30Z) Implemented checksum generation/verification and normalized naming.
- [x] (2026-02-12T21:49:15Z) Added JSDoc and updated architecture documentation.
- [x] (2026-02-12T21:50:53Z) Ran validation suite and prepared user-facing explanation.

## Surprises & Discoveries

- `contracts/instances/*.json` currently contain obvious placeholder checksums (`000..`, `111..`, `222..`, `333..`), which can mislead users into assuming integrity is enforced when it is not.
- Renaming CLI command from `zod:build` to `zod:generate` is clearer, but existing local habits/scripts may still call old name, so backward alias is needed.

## Decision Log

Decision: Keep JSON Schema + AJV as runtime authority and treat checksum as deterministic metadata derived from entity payload.  
Rationale: aligns with current architecture (schema-first) and avoids introducing parallel sources of truth.  
Timestamp/Author: 2026-02-12T21:40:25Z / Codex

Decision: Normalize naming around verbs by intent (`create` for constructors/helpers, `generate` for produced artifacts, `run` for orchestration).  
Rationale: removes ambiguity (`build` vs `create`) and improves discoverability in CLI/adapters modules.  
Timestamp/Author: 2026-02-12T21:40:25Z / Codex

Decision: Keep `zod:build` as backward-compatible alias while promoting `zod:generate` as canonical command.  
Rationale: avoids breaking existing scripts while still converging on consistent naming convention.  
Timestamp/Author: 2026-02-12T21:47:30Z / Codex

## Outcomes & Retrospective

Implemented planned scope end-to-end:
- deterministic checksum utility + semantic gate enforcement (`checksum_mismatch`);
- replaced placeholder checksums in all current contract instances;
- naming normalization (`build*` -> `generate*`/`create*`) with compatibility alias;
- expanded JSDoc coverage on public interfaces/functions across contracts/cli/shared/adapters;
- architecture doc now includes folder responsibilities and agent flow walkthrough.

All requested verification commands passed, so no unresolved technical gaps remain for this scope.

## Context and Orientation

`contracts/` stores schema and instance artifacts for AI-skill governance (`schemas/` for JSON Schema, `instances/` for concrete entities).  
`src/contracts/` contains loading, AJV validation, semantic/compatibility checks, and domain types.  
`src/adapters/zod/` contains optional developer-facing Zod adapters and parity checks against AJV.  
`src/cli/` is command orchestration for pipeline gates.  
`.github/workflows/contracts-ci.yml` is the CI entrypoint enforcing type/lint/contracts checks on push/PR.

## Terminology and Decomposition

N/A - this is a code quality and architecture clarification task, not a research decision campaign.

## Plan of Work

First, implement deterministic checksum handling in contract instances by adding a shared checksum helper and updating semantic validation to detect malformed placeholder values. Next, normalize naming in CLI and Zod adapter modules where `build` and `create` are mixed inconsistently, while keeping behavior unchanged. Then add JSDoc across exported APIs in `src/contracts`, `src/cli`, and `src/adapters` to improve internal discoverability. Finally, update architecture docs so user questions about folder responsibilities and workflow flow are answered by repository docs, then run full validation.

## Concrete Steps

1. Inspect current names/usages with `rg` and identify rename-safe targets.
2. Edit source files and imports using focused patches.
3. Replace checksum placeholders in `contracts/instances/*.json` with deterministic hashes.
4. Run:
   - `npm run format`
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`
   - `npm run contracts:ci`
5. Update `tasks/todo.md` and this plan with outcomes/evidence.

## Validation and Acceptance

Acceptance checks:
- `checksum` values in all contract instances are valid 64-char lowercase hex and no longer placeholders.
- CLI command behavior and exit codes remain unchanged.
- All quality gates pass (`format`, `lint`, `typecheck`, `test`, `contracts:ci`).
- Docs explain architecture flow and role of core folders/workflow files.

## Idempotence and Recovery

All scripts are re-runnable. If a rename breaks imports, rerun `npm run typecheck` to surface unresolved references and fix them before continuing. If checksum regeneration is wrong, rerun checksum helper against canonical JSON content and overwrite instance fields deterministically.

## Artifacts and Notes

Validation evidence:
- `npm run contracts:checksum:sync` (pass; updated 0/4 when already in sync)
- `npm run format` (pass)
- `npm run lint` (pass)
- `npm run typecheck` (pass)
- `npm test` (pass; semantic tests now include checksum mismatch case)
- `npm run contracts:ci` (pass; all gates passed)

Key changed paths:
- `src/contracts/registry/compute-contract-checksum.ts`
- `src/contracts/registry/sync-instance-checksums.ts`
- `src/contracts/semantic/rules/checksum.rule.ts`
- `src/contracts/semantic/run-semantic-lint.ts`
- `src/adapters/zod/generate-adapters.ts`
- `src/cli/main.ts`
- `src/cli/commands/helpers.ts`
- `src/cli/commands/zod-generate.ts`
- `contracts/instances/canonical-terms.json`
- `contracts/instances/skills/deep-researcher.manifest.json`
- `contracts/instances/skills/skill-creator.manifest.json`
- `contracts/instances/references/canonical-terminology.module.json`
- `docs/architecture/contract-pipeline.md`
- `package.json`

## Interfaces and Dependencies

Potential interface touchpoints:
- `src/cli/commands/helpers.ts` helper names used by all command handlers.
- `src/adapters/zod/index.ts` export names consumed by CLI.
- `src/contracts/semantic/*` result shapes must stay compatible with current CLI report writer.
- `node:crypto` for checksum generation utility.

Change note: 2026-02-12T21:40:25Z - Created plan for checksum clarification, naming normalization, and JSDoc/doc improvements requested by user.
Change note: 2026-02-12T21:50:53Z - Marked execution complete with validation evidence, final decisions, and concrete artifact paths.
