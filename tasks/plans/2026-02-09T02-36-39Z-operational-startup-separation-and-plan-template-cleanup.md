# Enforce Operational Responsibility Split for Startup Guidance

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md` and is limited to documentation/policy edits.

## Purpose / Big Picture

After this change, startup guidance for agent behavior will live in `AGENTS.md` (not `README.md`), and ExecPlan docs-only guidance will no longer encourage placeholder interfaces. The observable outcome is clearer policy boundaries with lower risk of future drift.

## Progress

- [x] (2026-02-09T02:36:39Z) Created ExecPlan and captured requested scope.
- [x] (2026-02-09T02:37:20Z) Applied policy edits to `AGENTS.md`, `PLANS.md`, and `tasks/plans/_template.md`.
- [x] (2026-02-09T02:37:54Z) Validated wording with grep checks and updated task tracking/outcome.

## Surprises & Discoveries

Observation: User explicitly rejected putting startup checklist into `README.md` as a responsibility-boundary violation.
Evidence: User message required moving operational startup guidance out of onboarding docs.

## Decision Log

Decision: Keep `README.md` free from operational startup checklists and place startup sequence in `AGENTS.md`.
Rationale: Preserves strict separation between onboarding summary and operational policy.
Timestamp/Author: 2026-02-09T02:36:39Z / agent

Decision: Avoid modifying `README.md` in this pass because it already frames itself as onboarding-only and links policy docs.
Rationale: Further README changes would add churn without improving boundary clarity.
Timestamp/Author: 2026-02-09T02:37:10Z / agent

## Outcomes & Retrospective

Completed. `AGENTS.md` now includes explicit precedence split and a `Session Start` checklist under operational policy. `PLANS.md` now explicitly forbids placeholder interface examples in docs-only tasks and warns that historical plans may contain legacy wording. `tasks/plans/_template.md` no longer contains optional TypeScript interface boilerplate that encouraged policy drift.

## Context and Orientation

`AGENTS.md` defines operational behavior and policy for autonomous instances. `PLANS.md` defines ExecPlan standards. `tasks/plans/_template.md` is the default scaffold that influences future plans and must align with `PLANS.md`. `tasks/todo.md` tracks high-level task state.

## Plan of Work

Edit `AGENTS.md` to resolve precedence ambiguity between `AGENTS.md` and `PLANS.md` and add a short `Session Start` sequence under operational policy. Edit `PLANS.md` to explicitly forbid placeholder interface examples in docs-only tasks and add guidance about legacy historical plans. Edit `tasks/plans/_template.md` to remove the optional TypeScript example from docs-only guidance. Keep edits surgical and docs-only.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Add/update policy text in `AGENTS.md`.
2. Update interface guidance and historical-plan note in `PLANS.md`.
3. Simplify `tasks/plans/_template.md` interface section.
4. Run grep checks listed below.
5. Update this plan and `tasks/todo.md` with completion outcome.

## Validation and Acceptance

Accept if all checks pass:

1. `AGENTS.md` includes explicit precedence split between operational policy and ExecPlan structure policy.
2. `AGENTS.md` contains startup checklist under operational policy (not in `README.md`).
3. `PLANS.md` explicitly forbids placeholder interfaces for docs-only tasks.
4. `tasks/plans/_template.md` no longer includes optional TypeScript interface block.
5. `README.md` does not include `Start in 60 Seconds`.

Validation commands:

- `rg -n "Instruction Hierarchy|Session Start|PLANS.md|README.md|authoritative" AGENTS.md`
- `rg -n "docs-only|placeholder interfaces|Historical Plans" PLANS.md`
- `rg -n "Optional example TypeScript interface|ExampleService" tasks/plans/_template.md`
- `rg -n "Start in 60 Seconds" README.md`
- `git status --short --branch`

## Idempotence and Recovery

This is docs-only and safe to re-run. If wording is unsatisfactory, edit in place and rerun validation commands. If a boundary line drifts into the wrong file, move operational steps back to `AGENTS.md` and keep `README.md` as onboarding-only.

## Artifacts and Notes

Validation evidence snippets:

    rg -n "Instruction Hierarchy|Session Start|PLANS.md|README.md|authoritative" AGENTS.md
    9:### Instruction Hierarchy
    26:### Session Start
    152:... `AGENTS.md` defines operational behavior policy, `PLANS.md` defines ExecPlan structure/lifecycle policy ...

    rg -n "docs-only|placeholder interfaces|Historical Plans" PLANS.md
    49:- In docs-only or policy-only tasks, set `Interfaces and Dependencies` to `N/A` with rationale; do not add placeholder interfaces or example signatures.
    66:## Historical Plans

    rg -n "Optional example TypeScript interface|ExampleService" tasks/plans/_template.md
    (no matches)

    rg -n "Start in 60 Seconds" README.md
    (no matches)

    git status --short --branch

## Interfaces and Dependencies

N/A. Policy documentation updates only.

Change note: 2026-02-09T02:36:39Z - Created for user-requested policy corrections with strict responsibility split.
Change note: 2026-02-09T02:37:54Z - Completed policy edits and validation; kept startup guidance in `AGENTS.md` only.
