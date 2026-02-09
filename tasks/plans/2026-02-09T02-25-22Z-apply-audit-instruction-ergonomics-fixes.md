# Apply Audit Recommendations To Instruction Ergonomics

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md` and is limited to documentation/policy edits requested by the user after an independent audit.

## Purpose / Big Picture

After this change, instruction documents will be easier for a new agent instance to execute without ambiguity: source-of-truth ownership will be explicit, `tasks/todo.md` will have deterministic `Active Task` behavior, assumptions for trivial tasks will have a fallback location, and ExecPlan interface guidance will stop encouraging boilerplate in docs-only work.

## Progress

- [x] (2026-02-09T02:25:22Z) Created ExecPlan and captured scope from the audit findings.
- [x] (2026-02-09T02:27:10Z) Applied focused edits to policy and template files.
- [x] (2026-02-09T02:27:40Z) Updated `tasks/todo.md` to reflect active task semantics during execution.
- [x] (2026-02-09T02:28:20Z) Ran validation checks and recorded evidence.

## Surprises & Discoveries

Observation: The working tree already contained unrelated staged/modified files from prior work.  
Evidence: `git status --short --branch` showed pre-existing `M`/`A` entries before this task-specific edit pass.

## Decision Log

Decision: Implement all approved recommendations in one pass instead of splitting into separate tasks.  
Rationale: The changes are tightly coupled policy edits and easier to validate together for consistency.  
Timestamp/Author: 2026-02-09T02:25:22Z / agent

Decision: Keep historical plan files unchanged and update only policy/template documents plus tracker state.  
Rationale: Historical plans are audit records; current policy should be corrected at source documents.  
Timestamp/Author: 2026-02-09T02:27:20Z / agent

## Outcomes & Retrospective

Completed. Applied all user-approved audit recommendations across policy docs. `AGENTS.md` now resolves source-of-truth ambiguity, defines fallback assumption handling for trivial tasks, and formalizes `Active Task` behavior. `PLANS.md` and `_template.md` now explicitly permit `N/A` for docs-only `Interfaces and Dependencies`. `README.md` now states onboarding-only scope. `tasks/lessons.md` now has an operational threshold for significant corrections. Residual risk: historical archives may still contain older terminology, but policy sources are now explicit.

## Context and Orientation

`AGENTS.md` is the main operating policy for autonomous agents. `PLANS.md` defines required ExecPlan structure. `README.md` is repository orientation for humans. `tasks/plans/_template.md` is the plan scaffold used by future instances. `tasks/lessons.md` defines when to capture reusable corrections. `tasks/todo.md` is the high-level task tracker and must stay compact.

## Plan of Work

Edit `AGENTS.md` to clarify authority boundaries, reduce repeated planning rules, add a fallback rule for assumptions on trivial no-plan tasks, define an operational threshold for recurring patterns/significant corrections, and formalize `Active Task` behavior in `tasks/todo.md`. Edit `PLANS.md` and `tasks/plans/_template.md` so docs-only tasks can mark `Interfaces and Dependencies` as `N/A` without synthetic interfaces. Edit `README.md` to explicitly frame itself as onboarding summary and preserve `AGENTS.md`/`PLANS.md` as policy authority. Update `tasks/lessons.md` with the same significance threshold.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Create this ExecPlan and set task scope.
2. Update `tasks/todo.md` with a new `Active Task` entry linked to this plan.
3. Edit `AGENTS.md`, `PLANS.md`, `README.md`, `tasks/plans/_template.md`, and `tasks/lessons.md`.
4. Run grep checks for the new phrases and status conventions.
5. Finalize this ExecPlan progress and outcomes.

## Validation and Acceptance

Accept if all checks pass:

1. `AGENTS.md` states policy authority as `AGENTS.md`/`PLANS.md` and no longer treats `README.md` as authoritative policy.
2. `AGENTS.md` includes explicit fallback for assumptions in trivial no-ExecPlan tasks.
3. `AGENTS.md` defines `Active Task` behavior and preserves status vocabulary.
4. `PLANS.md` and `tasks/plans/_template.md` allow `Interfaces and Dependencies` to be `N/A` for docs-only work.
5. `tasks/todo.md` has exactly one `Active Task` with `Status: in_progress` during execution.
6. `README.md` explicitly states it is onboarding summary and points to policy docs.

Validation commands:

- `rg -n "authoritative|onboarding summary|Assumptions|Active Task|in_progress|completed|blocked|recurring pattern|significant correction|Interfaces and Dependencies|N/A" AGENTS.md README.md PLANS.md tasks/lessons.md tasks/plans/_template.md tasks/todo.md`
- `git status --short --branch`

## Idempotence and Recovery

All edits are documentation-only and safe to re-run. If wording regresses, reapply the same phrase-level checks with `rg` and adjust in place. If `tasks/todo.md` accidentally contains multiple active entries, move all completed entries to history and keep only one `in_progress` entry in `Active Task`.

## Artifacts and Notes

Evidence snippets:

    rg -n "authoritative|onboarding summary|Assumptions|Active Task|in_progress|completed|blocked|recurring pattern|significant correction|Interfaces and Dependencies|N/A" AGENTS.md README.md PLANS.md tasks/lessons.md tasks/plans/_template.md tasks/todo.md
    git status --short --branch

## Interfaces and Dependencies

N/A. This task changes documentation policy only and introduces no runtime interfaces or external dependencies.

Change note: 2026-02-09T02:25:22Z - Created to implement user-approved audit recommendations across workflow docs.
Change note: 2026-02-09T02:28:20Z - Completed policy/template/tracker updates and validation.
