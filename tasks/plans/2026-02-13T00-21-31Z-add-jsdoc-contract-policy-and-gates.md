# Add canonical JSDoc contract policy and implement workflow v2 gates

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Deliver two linked outcomes in one execution stream:

1. establish one canonical JSDoc contract source of truth (`docs/jsdoc-contract.md`) with operational delegation in `AGENTS.md`,
2. implement the minimal deterministic workflow runtime (`intake -> plan -> execute -> verify -> report`) with evidence artifacts, scorecard, governance threshold, trace events, CLI, tests, and diagrams.

User-visible result: repository policy now defines contract-first JSDoc behavior, and runtime code now exposes a testable workflow harness with machine-readable evidence and escalation semantics.

## Progress

- [x] (2026-02-13T00:21:31Z) Initial task entry.
- [x] (2026-02-13T00:23:00Z) Added canonical JSDoc contract specification in `docs/jsdoc-contract.md`.
- [x] (2026-02-13T00:23:15Z) Added pointer-only JSDoc enforcement in `AGENTS.md`.
- [x] (2026-02-13T00:23:40Z) Added baseline `ProblemDetails` interface with contract JSDoc.
- [x] (2026-02-13T00:28:00Z) Expanded scope per user request to include `Delta Plan v2` workflow implementation.
- [x] (2026-02-13T00:33:20Z) Implemented workflow runtime, CLI, tests, scripts, and architecture diagrams.
- [x] (2026-02-13T00:34:40Z) Completed validation commands (`typecheck`, `lint`, `test`, `agent:workflow:smoke`, `ci`).
- [x] (2026-02-13T00:34:43Z) Updated tracking docs and captured reusable lesson.

## Surprises & Discoveries

1. The run was interrupted mid-implementation (`turn_aborted`), so state verification was required before continuing.
2. User explicitly requested merging two approved plans; initial scope covered only JSDoc policy and needed expansion to include full workflow runtime.
3. Sonar cognitive-complexity gates required refactoring workflow and CLI orchestration into smaller helpers before lint passed.

## Decision Log

Decision: Keep full JSDoc contract standard in `docs/jsdoc-contract.md` and keep `AGENTS.md` as pointer + enforcement only.  
Rationale: preserves Single Source of Truth while keeping `AGENTS.md` operational.  
Timestamp/Author: 2026-02-13T00:21:31Z / Codex

Decision: Enforce JSDoc policy using review gates/checklists, not new ESLint plugin.  
Rationale: user-selected tradeoff: lower toolchain complexity, explicit review discipline.  
Timestamp/Author: 2026-02-13T00:21:31Z / Codex

Decision: Scope JSDoc contract obligation to new/modified exported APIs only.  
Rationale: user-selected incremental rollout with minimal retrofit overhead.  
Timestamp/Author: 2026-02-13T00:21:31Z / Codex

Decision: Merge JSDoc policy implementation with `Delta Plan v2` workflow runtime in one execution stage.  
Rationale: explicit user directive (`3`) to avoid deferring workflow implementation.  
Timestamp/Author: 2026-02-13T00:28:00Z / Codex

Decision: Keep workflow error/report `artifacts` field as `Record<string, unknown>` in public report contract, while populating it with strongly typed `AgentWorkflowArtifactsModel`.  
Rationale: preserves planned public surface and still provides strong internal evidence model.  
Timestamp/Author: 2026-02-13T00:31:30Z / Codex

## Outcomes & Retrospective

Completed.

What was achieved:

1. Added canonical JSDoc contract policy (`docs/jsdoc-contract.md`) with normative language, templates, forbidden content rules, and review gates.
2. Added operational JSDoc contract delegation in `AGENTS.md` without duplicating detailed policy text.
3. Added `ProblemDetails` public type and integrated machine-readable error semantics in workflow contracts.
4. Implemented workflow runtime with deterministic stage order, retry/fallback policy, governance threshold, evidence scorecard, trace events, and required user escalation.
5. Added CLI (`read/parse/validate/run/generate`), tests (16 passing), smoke script, and architecture diagrams.

What remains:

N/A for requested scope.

## Context and Orientation

Primary touched areas:

- Policy/SoT: `AGENTS.md`, `docs/jsdoc-contract.md`
- Runtime: `src/agent-workflow/*`, `src/cli/run-agent-workflow-cli.ts`, `src/types/problem-details.ts`, `src/index.ts`
- Tests: `tests/agent-workflow.test.ts`, `tests/agent-workflow-cli.test.ts`
- Docs: `docs/architecture/agent-workflow.md`
- Tooling: `package.json`
- Tracking: `tasks/todo.md`, `tasks/lessons.md`, this ExecPlan

Repo context remains policy-first with TypeScript + ESLint + Prettier + Vitest quality stack.

## Terminology and Decomposition

N/A - this task is implementation/policy execution, not a research campaign requiring `Primary Question` decomposition.

## Plan of Work

1. Implement JSDoc contract SoT and pointer-only operational enforcement.
2. Add workflow runtime modules and contracts for deterministic execution, retries, scorecards, and escalation.
3. Add CLI orchestration and smoke command.
4. Add tests for happy path, retries, hard failures, governance threshold, safety trigger, and CLI.
5. Add architecture diagrams documenting happy/failure/governance paths.
6. Run quality gates and update trackers/lessons.

## Concrete Steps

1. Added/updated policy files:
   - `docs/jsdoc-contract.md`
   - `AGENTS.md`
2. Added workflow runtime files:
   - `src/agent-workflow/types.ts`
   - `src/agent-workflow/source-of-truth-paths.ts`
   - `src/agent-workflow/run-agent-workflow-stages.ts`
   - `src/agent-workflow/run-agent-workflow.ts`
   - `src/agent-workflow/generate-agent-workflow-report.ts`
3. Added CLI + exports:
   - `src/cli/run-agent-workflow-cli.ts`
   - `src/index.ts`
4. Added tests and diagrams:
   - `tests/agent-workflow.test.ts`
   - `tests/agent-workflow-cli.test.ts`
   - `docs/architecture/agent-workflow.md`
5. Updated scripts:
   - `package.json` with `agent:workflow:run` and `agent:workflow:smoke`
6. Executed validations:
   - `npm run lint:fix`
   - `npm run typecheck`
   - `npm run lint`
   - `npm run test`
   - `npm run agent:workflow:smoke`
   - `npm run ci`

## Validation and Acceptance

Acceptance criteria and result:

1. JSDoc contract SoT exists and is canonical: pass.
2. `AGENTS.md` delegates to JSDoc SoT without duplicating full policy text: pass.
3. `ProblemDetails` interface exists and is used by error semantics: pass.
4. Workflow runtime includes evidence scorecard + governance gate + trace events + escalation: pass.
5. Diagram set (happy/failure/governance) exists and aligns with implementation: pass.
6. All quality gates pass (`typecheck`, `lint`, `test`, `smoke`, `ci`): pass.

## Idempotence and Recovery

1. Re-running lint/typecheck/test/smoke is safe and deterministic.
2. Re-running CLI with same prompt/paths yields same stage flow and report shape (run IDs/timestamps differ by design).
3. If a gate fails, use output to fix root cause and rerun only failing gate, then rerun `npm run ci`.

## Artifacts and Notes

Validation evidence:

1. `npm run format:check`: pass.
2. `npm run typecheck`: pass.
3. `npm run lint`: pass.
4. `npm run test`: pass (`2` files, `16` tests).
5. `npm run agent:workflow:smoke`: pass, printed completed report with artifacts and scorecard.
6. `npm run ci`: pass.

Runtime smoke output included:

- `status: completed`
- stage observations for all five stages,
- artifacts (`sourceOfTruthReadResults`, `stageTransitions`, `retrySummary`, `verificationChecks`, `evaluationScorecard`, `traceEvents`).

## Interfaces and Dependencies

Public interfaces added/updated:

```ts
export interface ProblemDetails {
  type: string;
  status: number;
  title: string;
  detail: string;
  instance?: string;
  code?: string;
}
```

```ts
export type AgentWorkflowStage = 'intake' | 'plan' | 'execute' | 'verify' | 'report';
export interface AgentWorkflowInput { prompt: string; sourceOfTruthPaths: SourceOfTruthPaths; }
export interface AgentWorkflowReport { /* includes observations, artifacts, optional escalation */ }
export const runAgentWorkflow: (input: AgentWorkflowInput) => Promise<AgentWorkflowReport>;
export const runAgentWorkflowCli: (argv: string[]) => Promise<number>;
```

Dependencies:

- No new libraries were added.
- Existing stack remains: TypeScript, ESLint, Prettier, Vitest, TSX.

Change note: 2026-02-13T00:21:31Z - Created initial JSDoc contract plan.  
Change note: 2026-02-13T00:28:00Z - Expanded scope to include workflow `Delta Plan v2` per user request.  
Change note: 2026-02-13T00:34:43Z - Completed implementation, validation, and tracking updates.
