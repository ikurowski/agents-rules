# Implement hybrid contract pipeline (`JSON Schema SoT + Zod adapter + one-way markdown projection`)

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Implement a production-usable contract pipeline for this repository so that machine-validated JSON contracts become canonical, while human-facing markdown remains generated projection only. Observable behavior after implementation:

1. `contracts/*.json` are validated in CI with hard fail on schema and semantic violations.
2. Zod compatibility checks run without replacing AJV as runtime authority.
3. Markdown files under `generated/contracts/` are regenerated and checked for drift.
4. A full run writes `artifacts/contracts-report.json` with gate status.

## Progress

- [x] (2026-02-12T18:33:47Z) Created implementation task entry and confirmed repository baseline.
- [x] (2026-02-12T18:36:10Z) Added Node/TypeScript toolchain, schemas, instances, and CI workflow.
- [x] (2026-02-12T18:39:20Z) Implemented validation, semantic lint, compatibility gate, Zod build/parity, markdown projection, and CLI orchestration.
- [x] (2026-02-12T18:41:12Z) Generated markdown projections, executed full contract pipeline commands, and verified passing gates.
- [x] (2026-02-12T18:44:18Z) Resolved strict TypeScript typing issues for AJV imports and verified `npx tsc --noEmit`.

## Surprises & Discoveries

1. `git show HEAD:<new-file>` in compatibility checks emits fatal stderr for brand-new schemas even when caught in code; this required explicit stderr suppression to keep CI output clean.
2. `project` and `project:check` run concurrently can produce a transient drift failure due to race conditions; sequential execution confirms deterministic outputs.
3. AJV ESM typing under `NodeNext` needed explicit constructor casts for strict typecheck even though runtime execution worked without them.

## Decision Log

Decision: Keep `JSON Schema` as the only runtime authority and keep `z.fromJSONSchema()` in build/parity steps only.  
Rationale: Preserves interoperability and reduces risk from experimental API behavior while still enabling adapter ergonomics.  
Timestamp/Author: 2026-02-12T18:37:15Z / agent

Decision: Use deterministic generated timestamps derived from contract checksums rather than wall-clock time.  
Rationale: Prevents false drift failures while still recording reproducible generation metadata.  
Timestamp/Author: 2026-02-12T18:40:12Z / agent

Decision: Implement compatibility gate v1 against `HEAD` revision with required-field removal detection and major-version enforcement.  
Rationale: Minimal enforceable breaking-change protection that works without external baseline infrastructure.  
Timestamp/Author: 2026-02-12T18:39:55Z / agent

## Outcomes & Retrospective

Completed end-to-end implementation of the requested architecture with passing local pipeline commands and CI workflow ready. The repository now has a concrete contract platform (`contracts/`, `src/`, `.github/workflows/contracts-ci.yml`) and generated markdown outputs. Remaining future work is optional hardening (OTel, richer compatibility diffs, broader contract coverage), not required for requested scope.

## Context and Orientation

Key repository paths introduced in this task:

1. `contracts/schemas/*.json` defines canonical contract schemas.
2. `contracts/instances/**/*.json` stores contract instances migrated from existing markdown sources.
3. `src/contracts/*` implements loading, AJV validation, semantic lint, and compatibility checks.
4. `src/adapters/zod/*` implements build-time adapter conversion and AJV-vs-Zod parity testing.
5. `src/projection/*` renders and verifies one-way markdown projection files.
6. `src/cli/contracts.ts` orchestrates all commands and writes `artifacts/contracts-report.json`.
7. `generated/contracts/*` contains generated markdown outputs.
8. `.github/workflows/contracts-ci.yml` executes all gates on push/pull_request.
9. `docs/architecture/contract-pipeline.md` documents operational policy and lifecycle.

## Terminology and Decomposition

N/A - this task is implementation-oriented, not a research campaign; canonical terminology itself is represented in `contracts/instances/canonical-terms.json`.

## Plan of Work

Implementation followed the approved spec in seven phases:

1. Bootstrap Node/TS toolchain and dependency graph.
2. Define three canonical JSON Schemas and corresponding initial instances.
3. Implement AJV schema validation and semantic lints.
4. Implement Zod adapter build/parity steps with explicit experimental API boundary.
5. Implement one-way markdown projection and drift verification.
6. Wire all commands into a single CLI and CI workflow.
7. Run full validation and projection checks to confirm acceptance criteria.

## Concrete Steps

Executed commands from repo root (`c:\Users\igork\Desktop\agent`):

1. `npm install`
   - Expected: create `package-lock.json` and install dependencies.
2. `npm run contracts:validate`
   - Expected: pass with no validation issues.
3. `npm run contracts:semantic`
   - Expected: pass with no semantic issues.
4. `npm run contracts:zod:build`
   - Expected: generate `artifacts/zod-adapters.json`.
5. `npm run contracts:zod:parity`
   - Expected: pass parity checks for all schema types.
6. `npm run contracts:project`
   - Expected: generate markdown files under `generated/contracts/`.
7. `npm run contracts:project:check`
   - Expected: projection matches generated output.
8. `npm run contracts:ci`
   - Expected: all gates pass and `artifacts/contracts-report.json` generated.

## Validation and Acceptance

Acceptance checks and outcomes:

1. Canonical terms represented in contracts: pass (`contracts/instances/canonical-terms.json` includes all five required terms).
2. `deep-researcher` and `skill-creator` manifests exist and validate: pass.
3. Full pipeline command executes successfully: pass (`npm run contracts:ci`).
4. Markdown projection deterministic and drift-gated: pass (`contracts:project` + `contracts:project:check`).
5. `z.fromJSONSchema()` isolated from runtime authority: pass (used only in `src/adapters/zod/*` build/parity paths; AJV handles runtime gate).
6. Parity test across each schema type: pass (`Parity check passed for 3 schema types`).

## Idempotence and Recovery

Idempotence:

1. Re-running `npm run contracts:ci` is safe and deterministic.
2. Re-running `contracts:project` updates only generated projection files.
3. Re-running `contracts:zod:build` updates only adapter manifest artifact.

Recovery:

1. If projection drift occurs, run `npm run contracts:project` and re-check.
2. If compatibility gate fails after schema changes, bump major in schema `$id` and rerun.
3. If parity fails due unsupported schema features, keep AJV authority and refine schema/profile before re-running parity.

## Artifacts and Notes

Evidence files:

1. `artifacts/contracts-report.json` (full gate report).
2. `artifacts/zod-adapters.json` (build-time adapter manifest).
3. `artifacts/zod-parity-report.json` (parity results).
4. `generated/contracts/canonical-terms.md`.
5. `generated/contracts/skills/deep-researcher.md`.
6. `generated/contracts/skills/skill-creator.md`.

Relevant command outcome snippets:

1. `npm run contracts:zod:parity` -> `Parity check passed for 3 schema types.`
2. `npm run contracts:project:check` -> `Projection matches generated output.`
3. `npm run contracts:ci` -> `Full pipeline completed successfully.`
4. `npx tsc --noEmit` -> exits `0` after AJV typing adjustments.

## Interfaces and Dependencies

Interfaces added:

1. `ContractEntity`, `ValidationResult`, `SemanticRuleResult`, `GateResult`, `ContractsPipelineReport` in `src/types/contracts.ts`.
2. CLI command surface: `validate | semantic | zod:build | zod:parity | project | project:check | ci` in `src/cli/contracts.ts`.

Dependencies added:

1. Runtime: `ajv`, `ajv-formats`, `yaml`, `gray-matter`.
2. Dev: `typescript`, `tsx`, `vitest`, `@types/node`, `zod`.
3. CI integration: `.github/workflows/contracts-ci.yml`.

Change note: 2026-02-12T18:33:47Z - Created plan for full implementation of hybrid contract architecture.  
Change note: 2026-02-12T18:41:12Z - Completed implementation and validated all pipeline gates locally.  
Change note: 2026-02-12T18:44:18Z - Added strict TypeScript typecheck evidence and AJV typing remediation details.
