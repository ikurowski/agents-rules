# Rollback contracts and rebuild agent flow

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The repository should return to a simpler baseline by removing the contracts pipeline layer and rebuilding one focused runtime capability: a minimal, deterministic agent flow harness (`intake -> plan -> execute -> verify -> report`) with clear CLI entrypoint and diagrams. The quality stack remains: TypeScript, ESLint (with Prettier as ESLint errors), Prettier, tests, and CI gates.

## Progress

- [x] (2026-02-12T22:29:16Z) Initial task entry.
- [x] (2026-02-12T22:30:40Z) Discovery and architecture snapshot.
- [x] (2026-02-12T22:31:45Z) Rolled back contracts layer while preserving stack tooling.
- [x] (2026-02-12T22:32:25Z) Rebuilt minimal agent flow runtime, CLI, tests, CI.
- [x] (2026-02-12T22:33:05Z) Added Mermaid diagrams and completed final verification.

## Surprises & Discoveries

- Current `src/` is almost entirely contracts-oriented, so rollback is broad but mechanically straightforward.
- Existing lint config intentionally ignores `.github/**`, `tasks/**`, and `*.md`; architecture docs are human-facing and not linted by TS/ESLint, which is acceptable for this task.

## Decision Log

Decision: Keep `tsconfig.json` and `.prettierrc.json` unchanged exactly as requested.  
Rationale: explicit user constraint and minimizes unrelated churn.  
Timestamp/Author: 2026-02-12T22:29:16Z / Codex

Decision: Remove `contracts/`, contracts CLI commands, and all contracts-specific scripts; introduce one canonical agent-flow command family.  
Rationale: user asked for full rollback of contracts layer and naming consistency.  
Timestamp/Author: 2026-02-12T22:29:16Z / Codex

Decision: Apply harness-engineering inspirations as operational design constraints (legibility, deterministic stages, gate-style validation, explicit reporting).  
Rationale: aligns requested article inspiration with implementation behavior rather than abstract text only.  
Timestamp/Author: 2026-02-12T22:29:16Z / Codex

Decision: Keep a single canonical CLI command interface (`run`) and one command script family (`agent:flow:*`) without aliases.  
Rationale: user explicitly asked to avoid naming ambiguity like build/create/generate overlap.  
Timestamp/Author: 2026-02-12T22:31:55Z / Codex

## Outcomes & Retrospective

Completed. Contracts pipeline was removed and replaced with a simpler harness-style runtime flow for agent execution. Tooling constraints were preserved (`tsconfig.json` and `.prettierrc.json` unchanged), quality gates remained active, and flow diagrams were added. The resulting architecture is smaller and easier to reason about.

## Context and Orientation

Current repo has docs/skills governance roots plus a recently added contracts toolchain:
- `.github/workflows/contracts-ci.yml` runs contracts gates.
- `contracts/` stores schemas/instances.
- `src/contracts/*` + `src/adapters/zod/*` + `src/cli/*` implement contracts validation pipeline.
- `tests/contracts-*.test.ts` test contracts-specific behavior.

Target orientation after completion:
- no contracts pipeline files remain active;
- `src/agent-flow/*` provides minimal runtime harness;
- `src/cli/main.ts` exposes canonical CLI interface for agent flow;
- tests validate runtime flow and CLI behavior;
- docs include architecture + Mermaid flow diagrams.

## Plan of Work

1. Capture architecture snapshot and integration points directly in this plan.
2. Roll back contracts layer by deleting contracts-specific modules/tests/docs and removing scripts/dependencies/workflow steps tied to contracts.
3. Build minimal agent flow runtime with explicit public types (`AgentStage`, `AgentRequest`, `AgentStageResult`, `AgentRunReport`) and deterministic stage processing.
4. Rebuild CLI around a single naming convention and single command family without aliases.
5. Add CI workflow for quality + smoke execution.
6. Add architecture document with three Mermaid diagrams (happy path, failure/retry path, governance/escalation path) and concise textual interpretation.
7. Run full validation and update trackers.

## Concrete Steps

1. Update trackers (`tasks/todo.md`) for active execution.
2. Delete contracts-oriented files/directories:
   - `contracts/`
   - `src/contracts/`
   - `src/adapters/`
   - contracts-specific tests/docs/workflow artifacts
3. Create new implementation files:
   - `src/agent-flow/types.ts`
   - `src/agent-flow/run-agent-flow.ts`
   - `src/cli/main.ts`
   - `tests/agent-flow.test.ts`
   - `tests/cli-agent-flow.test.ts`
   - `docs/architecture/agent-flow.md`
4. Update tooling manifests (`package.json`, workflow).
5. Execute:
   - `npm run format`
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`
   - optional smoke command for flow CLI

## Validation and Acceptance

Acceptance criteria:
- contracts layer removed from active code path and scripts;
- stack remains and passes (`lint`, `typecheck`, `test`);
- runtime agent flow interface matches required shape;
- CLI naming is canonical (no semantic aliases);
- Mermaid diagrams present with explanatory text;
- CI checks align with rebuilt architecture.

## Idempotence and Recovery

Rollback and rebuild edits are deterministic. If imports fail after deletions, run `npm run typecheck` and remove orphan imports. If script names drift, run `npm run lint` and `npm test` to catch command references. Re-running format/lint/typecheck/test is safe and idempotent.

## Artifacts and Notes

### Architecture Snapshot

- **Entrypoints now**: `src/cli/main.ts` (contracts CLI), `.github/workflows/contracts-ci.yml`.
- **Data layer now**: `contracts/schemas`, `contracts/instances`.
- **Quality gates now**: `lint`, `typecheck`, `test`, plus contracts commands.

### Integration Points

- New agent flow should integrate with existing repository governance docs (`AGENTS.md`, `PLANS.md`, `tasks/*`) as contextual inputs.
- CLI should accept user prompt and context paths referencing local docs/skills files.
- CI should keep quality gates and include a lightweight smoke run for agent flow command.
- Harness design inspiration reviewed from OpenAI article: `https://openai.com/index/harness-engineering/`.

### Rollback Plan

- Remove only contracts-specific runtime, tests, and scripts.
- Keep generic toolchain configs and dependencies required for TS+lint+format+tests.

### Acceptance Gates

1. `npm run lint` passes.
2. `npm run typecheck` passes.
3. `npm test` passes.
4. New smoke command executes successfully.

### Validation Evidence

- `npm run format` (pass)
- `npm run lint` (pass)
- `npm run typecheck` (pass)
- `npm test` (pass)
- `npm run agent:flow:smoke` (pass)
- `npm run ci` (pass)

### Key File Results

- Deleted contracts stack:
  - `contracts/**/*`
  - `src/contracts/**/*`
  - `src/adapters/zod/**/*`
  - `tests/contracts-*.test.ts`
  - `.github/workflows/contracts-ci.yml`
  - `docs/architecture/contract-pipeline.md`
- Added rebuilt harness stack:
  - `src/agent-flow/types.ts`
  - `src/agent-flow/run-agent-flow.ts`
  - `src/cli/main.ts`
  - `tests/agent-flow.test.ts`
  - `tests/cli-agent-flow.test.ts`
  - `docs/architecture/agent-flow.md`
  - `.github/workflows/quality-ci.yml`

## Interfaces and Dependencies

Public interfaces introduced:

```ts
export type AgentStage = 'intake' | 'plan' | 'execute' | 'verify' | 'report';

export interface AgentRequest {
  prompt: string;
  contextPaths: string[];
}

export interface AgentStageResult {
  stage: AgentStage;
  ok: boolean;
  notes: string[];
}

export interface AgentRunReport {
  runId: string;
  startedAt: string;
  finishedAt: string;
  stages: AgentStageResult[];
}
```

Dependencies:
- Keep `typescript`, `eslint`, `prettier`, `vitest`, `tsx`.
- Removed `ajv` and `zod` after contracts rollback.

Change note: 2026-02-12T22:29:16Z - Created execution plan for contracts rollback and clean agent-flow rebuild.
Change note: 2026-02-12T22:33:05Z - Completed rollback + rebuild with validation evidence and updated outcomes.
