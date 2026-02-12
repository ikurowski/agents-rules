# Remove markdown projection and focus contract pipeline on AI conversation quality

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Re-align the repository with the user goal: improve AI agent conversation quality through structured contracts and validation, without maintaining generated markdown projections. Observable outcome:

1. CI and local pipeline run only schema/semantic/compatibility/parity checks.
2. Projection commands and generated markdown artifacts are removed.
3. Documentation explains why `AGENTS.md` remains operational while projection is optional and now removed.

## Progress

- [x] (2026-02-12T18:55:57Z) Created task and confirmed current pipeline shape.
- [x] (2026-02-12T18:58:10Z) Removed projection scripts, workflow steps, projection modules, and generated markdown files.
- [x] (2026-02-12T18:59:40Z) Updated architecture docs and ignore rules to match projection-less pipeline.
- [x] (2026-02-12T19:00:48Z) Reinstalled deps, ran `npx tsc --noEmit` and `npm run contracts:ci`, both passing.

## Surprises & Discoveries

1. Projection references were concentrated in pipeline code/docs, so removal was straightforward and did not require schema changes.
2. `contracts:ci` remained stable after projection removal because gate aggregation was already modular.

## Decision Log

Decision: Remove markdown projection entirely from the operational pipeline instead of moving it to optional CI artifacts.  
Rationale: User clarified that repository purpose is AI-agent behavior quality, not documentation projection maintenance.  
Timestamp/Author: 2026-02-12T18:57:00Z / agent

Decision: Keep `AGENTS.md` untouched as the operational runtime policy file.  
Rationale: `AGENTS.md` drives agent behavior directly and is not a generated documentation artifact.  
Timestamp/Author: 2026-02-12T18:57:35Z / agent

Decision: Keep JSON Schema + Zod parity gates as the quality core.  
Rationale: They directly support structured, auditable conversation contracts and runtime safety.  
Timestamp/Author: 2026-02-12T18:58:20Z / agent

## Outcomes & Retrospective

Completed. Pipeline now targets contract correctness only (`schema`, `semantic`, `compatibility`, `zod_parity`). Generated markdown projection is removed, reducing complexity and keeping focus on conversation-structure reliability.

## Context and Orientation

Files updated for this change:

1. `package.json` scripts and dependencies trimmed to projection-less scope.
2. `.github/workflows/contracts-ci.yml` projection steps removed.
3. `src/cli/contracts.ts` projection commands and drift gate removed.
4. `src/types/contracts.ts` projection artifact types removed.
5. `src/projection/render-markdown.ts` deleted.
6. `src/projection/verify-projection.ts` deleted.
7. `generated/contracts/*` deleted and ignored via `.gitignore`.
8. `docs/architecture/contract-pipeline.md` rewritten for contract-only pipeline.

## Terminology and Decomposition

N/A - this is an implementation cleanup task, not a research/decision campaign.

## Plan of Work

1. Remove projection feature from command surface and CI.
2. Remove dead code/files and update documentation.
3. Re-run compile and pipeline checks to verify no regression.
4. Record outcome in tracker.

## Concrete Steps

Commands executed from repo root:

1. `npm install`
2. `npx tsc --noEmit`
3. `npm run contracts:ci`

Expected success for this task:

1. TypeScript compile passes.
2. Contract pipeline passes without projection stages.

## Validation and Acceptance

Acceptance criteria and status:

1. No `contracts:project` or `contracts:project:check` commands remain.
   - Status: pass.
2. CI workflow no longer runs projection steps.
   - Status: pass.
3. Projection modules/files removed.
   - Status: pass.
4. `npx tsc --noEmit` passes.
   - Status: pass.
5. `npm run contracts:ci` passes.
   - Status: pass.

## Idempotence and Recovery

1. Re-running `npm install` and `npm run contracts:ci` is safe and deterministic for this change.
2. If projection is needed later, it can be reintroduced as a separate optional feature without impacting current schema contracts.

## Artifacts and Notes

Verification evidence:

1. `npx tsc --noEmit` exit code `0`.
2. `npm run contracts:ci` output includes `Full pipeline completed successfully.`

## Interfaces and Dependencies

Interface impact:

1. CLI command surface reduced to: `validate | semantic | zod:build | zod:parity | ci`.
2. `ContractsPipelineReport` no longer includes projection artifacts.

Dependency impact:

1. Removed unused runtime dependencies related to projection helpers (`gray-matter`, `yaml`).
2. Kept `ajv`, `ajv-formats`, and `zod` for contract quality pipeline.

Change note: 2026-02-12T18:55:57Z - Created cleanup plan for projection removal and goal realignment.  
Change note: 2026-02-12T19:00:48Z - Completed projection removal with passing compile and pipeline checks.
