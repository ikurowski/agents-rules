# Run workflow-evaluator skill for agent workflow

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Produce a deterministic, evidence-backed evaluation of the repository workflow runtime by executing the `workflow-evaluator` skill flow end-to-end. The user-visible output is a scorecard report saved to `governance/eval/agent-workflow-ease-scorecard.md` with scenario outcomes (`happy`, `retry`, `governance/failure`), quality gates (`typecheck`, `lint`, `test`), and an overall ease score (`1-5` + `low|medium|high`).

## Progress

- [x] (2026-02-17T16:13:44Z) Initial task entry.
- [x] (2026-02-17T16:13:44Z) Read required governance sources (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`) and loaded `skills/workflow-evaluator/SKILL.md` + referenced modules.
- [x] (2026-02-17T16:15:08Z) Execute scenario suite (`happy/retry/governance`) and capture evidence.
- [x] (2026-02-17T16:15:08Z) Execute validation gates (`npm run typecheck`, `npm run lint`, `npm run test`) and capture evidence.
- [x] (2026-02-17T16:15:08Z) Write final scorecard artifact and close tracker entries.

## Surprises & Discoveries

- `src/workflow` does not exist; runtime modules are under `src/agent-workflow`.
- `Get-Date -AsUTC` is unavailable in this shell; UTC timestamp must be derived with `(Get-Date).ToUniversalTime()`.
- Deterministic scenario tokens are implemented in `src/agent-workflow/run-agent-workflow-stages.ts` and governance threshold trigger is implemented in `src/agent-workflow/run-agent-workflow.ts`.

## Decision Log

Decision: Interpret user request "użyj `skills/workflow-evaluator/SKILL.md`" as "execute this skill now against current repository workflow."  
Rationale: The request directly names a runnable skill, and skill contract defines concrete deliverables; default autonomous behavior is to run it unless user narrows scope.  
Timestamp/Author: 2026-02-17T16:13:44Z / agent

Decision: Use canonical `npm run agent:workflow:run -- --prompt "<...>"` rather than direct `tsx` invocation.  
Rationale: `package.json` defines this as canonical script and `validation-gates.md` requires this command family.  
Timestamp/Author: 2026-02-17T16:13:44Z / agent

## Outcomes & Retrospective

Completed full `workflow-evaluator` run with required three-scenario suite and default quality gates. The workflow is operationally strong (`overall_ease_score: 4.9/5`, `high`) with deterministic retry and governance escalation behaviors validated. Main residual improvement is operator ergonomics for simulation prompt tokens.

## Context and Orientation

Relevant files:

- `skills/workflow-evaluator/SKILL.md`: operational contract for this evaluation.
- `skills/workflow-evaluator/references/eval-method.md`: scenario suite and report assembly template.
- `skills/workflow-evaluator/references/validation-gates.md`: required command set and acceptance gates.
- `src/cli/run-agent-workflow-cli.ts`: CLI entrypoint used by `npm run agent:workflow:run`.
- `src/agent-workflow/run-agent-workflow-stages.ts`: deterministic simulation triggers for stage failures/retries.
- `src/agent-workflow/run-agent-workflow.ts`: orchestration, retries, governance threshold, escalation.
- `docs/architecture/agent-workflow.md`: architecture and threshold behavior documentation.
- `package.json`: command inventory for scenario runs and quality gates.

## Terminology and Decomposition

Primary Question: Does the current repository workflow provide a reproducible, observable, and governance-safe operator experience when evaluated with the `workflow-evaluator` method?

Sub-question Register:

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | resolved | 4.6 | yes | answered |

Question-to-Evidence Matrix:

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | scenario runs + quality gates + scorecard artifact | answered | Closed via three workflow runs (`happy`, `retry`, `governance`) + passing `typecheck/lint/test`; report saved at `governance/eval/agent-workflow-ease-scorecard.md`. |

## Plan of Work

Run the skill contract in exact order:

1. Discovery lock: confirm workflow command inventory and simulation triggers from source files and `package.json`.
2. Scenario execution: run one happy path, one transient retry path, and one governance-threshold failure path using deterministic prompt tokens.
3. Validation pass: execute `npm run typecheck`, `npm run lint`, and `npm run test`.
4. Scorecard assembly: derive five ease metrics (`discoverability`, `operability`, `error recoverability`, `observability`, `governance clarity`) and compute average score + label.
5. Artifact write and closure: save report at `governance/eval/agent-workflow-ease-scorecard.md`, then update this plan and `tasks/todo.md`.

## Concrete Steps

Working directory: repository root `c:\Users\igork\Desktop\agent`.

1. Scenario commands:
   - `npm run agent:workflow:run -- --prompt "workflow evaluation happy path"`
   - `npm run agent:workflow:run -- --prompt "workflow evaluation retry [simulate-execute-transient-failure]"`
   - `npm run agent:workflow:run -- --prompt "workflow evaluation governance [simulate-governance-threshold-low]"`
   Expected: first and second should demonstrate completed run (second with retry evidence); third should fail with governance escalation.
2. Quality gates:
   - `npm run typecheck`
   - `npm run lint`
   - `npm run test`
   Expected: exit code `0` per gate for clean run; otherwise mark non-clean.
3. Report authoring:
   - Write/overwrite `governance/eval/agent-workflow-ease-scorecard.md`.
   Expected: include command list, scenario outcomes, gate outcomes, metric table, overall score/label, and <=5 recommendations.

## Validation and Acceptance

Acceptance is met when all below are true:

1. Scenario evidence includes one happy-path completion, one retry-path completion with retry signal, and one governance/failure path with escalation.
2. Quality gate outcomes for `typecheck`, `lint`, `test` are recorded with exit status and short evidence lines.
3. Final artifact at `governance/eval/agent-workflow-ease-scorecard.md` contains all required sections from `validation-gates.md`.
4. `Question-to-Evidence Matrix` closes all tracked `Sub-question-*` rows as `answered` or explicit deferred state with rationale.

## Idempotence and Recovery

Scenario and quality commands are safe to rerun and should produce deterministic outcomes for the selected simulation tokens. If any command fails unexpectedly, rerun once to rule out transient shell/tooling issues, then capture both outputs and mark unresolved impediment before continuing scoring. Report generation is idempotent by overwriting the same artifact path with latest verified evidence.

## Artifacts and Notes

- Scenario evidence:
  - Happy path exit `0`, `status=completed`, `retrySummary.executeRetryCount=0`, `overall score=5.0`.
  - Retry path exit `0`, `status=completed`, `retrySummary.executeRetryCount=1`, `traceEvents` includes `retried`, `overall score=4.8`.
  - Governance path exit `1`, `status=failed`, `isGovernanceThresholdMet=false`, escalation code `governance_threshold_not_met`, `overall score=3.5`.
- Quality gates:
  - `npm run typecheck` exit `0`.
  - `npm run lint` exit `0`.
  - `npm run test` exit `0` with `2 passed` files and `16 passed` tests.
- Final artifact: `governance/eval/agent-workflow-ease-scorecard.md`.

## Interfaces and Dependencies

N/A - This task evaluates existing runtime behavior and writes documentation artifact; it does not add or modify public interfaces/dependencies.

Change note: 2026-02-17T16:13:44Z - Created initial ExecPlan for running `workflow-evaluator` skill end-to-end.
Change note: 2026-02-17T16:15:08Z - Marked scenario/gate/report steps complete and added evidence-backed outcomes.
