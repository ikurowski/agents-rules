# Align Workflow Responsibilities and Remove Process Duplication

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be updated as work proceeds.

This plan follows `PLANS.md` and focuses on minimal documentation/process edits only.

## Purpose / Big Picture

After this change, the repository workflow is internally consistent: `tasks/todo.md` stays high-level, while full planning and validation evidence lives in `tasks/plans/*`. This removes duplicated work and ambiguity without adding new tooling.

## Progress

- [x] (2026-02-09T03:40:00Z) Reviewed current policy docs and identified direct contradiction points.
- [x] (2026-02-09T03:44:00Z) Updated `AGENTS.md`, `PLANS.md`, and `README.md` to align responsibilities.
- [x] (2026-02-09T03:47:00Z) Updated `tasks/lessons.md` significance rule and `tasks/plans/_template.md` `N/A` guidance.
- [x] (2026-02-09T03:52:00Z) Simplified `tasks/todo.md` to high-level tracking format.
- [x] (2026-02-09T03:56:00Z) Ran validation checks and recorded outcomes.

## Surprises & Discoveries

Observation: `tasks/todo.md` contained extensive execution detail even though policy already described it as high-level only.  
Evidence: multiple historical entries repeated assumptions, full success criteria, step-by-step plans, and verification checklists that were also represented in ExecPlan files.

## Decision Log

Decision: Keep the strict ExecPlan standard and reduce duplication by simplifying only `tasks/todo.md`.  
Rationale: This preserves auditability while reducing process overhead where it is least useful.  
Timestamp/Author: 2026-02-09T03:43:00Z / agent

Decision: Keep all required ExecPlan sections but allow explicit `N/A` with rationale.  
Rationale: Maintains structure and comparability while avoiding boilerplate filler text.  
Timestamp/Author: 2026-02-09T03:45:00Z / agent

Decision: Treat lessons as significant-corrections-only, not every minor correction.  
Rationale: Improves signal-to-noise and keeps `tasks/lessons.md` actionable.  
Timestamp/Author: 2026-02-09T03:47:00Z / agent

## Outcomes & Retrospective

Completed. Workflow docs now consistently define `tasks/todo.md` as high-level metadata/status, with implementation detail in ExecPlans. Remaining risk is historical entries that were intentionally compacted; detailed history is still available in past commit history and plan files.

## Context and Orientation

`AGENTS.md` defines operational policy for agents. `PLANS.md` defines ExecPlan structure and requirements. `README.md` gives onboarding workflow summary. `tasks/todo.md` is the quick status tracker. `tasks/plans/_template.md` is the starter for future plans. `tasks/lessons.md` stores reusable lessons from significant corrections.

## Plan of Work

Edit policy wording to remove contradictory instructions about where planning detail should live. Update onboarding language to mirror policy. Add explicit handling for non-applicable ExecPlan sections. Simplify `tasks/todo.md` to a compact tracker format and preserve historical tasks as short records.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Edit `AGENTS.md` sections: `Continuous Learning`, planning workflow header, and task-management bullets.
2. Edit `PLANS.md` scope wording and add `N/A` handling rule.
3. Edit `README.md` quick workflow to remove detailed-plan expectations from `tasks/todo.md`.
4. Edit `tasks/plans/_template.md` and `tasks/lessons.md` for consistency.
5. Rewrite `tasks/todo.md` into high-level format and keep short history.
6. Run validation commands and review results.

## Validation and Acceptance

Accept if:

1. No policy document instructs detailed planning checklists in `tasks/todo.md`.
2. `README.md` quick workflow matches policy split (`todo` high-level, ExecPlan detailed).
3. ExecPlan rules and template explicitly support `N/A` sections with rationale.
4. `tasks/todo.md` uses compact high-level task records.

Validation commands:

- `rg -n "Plan First|Keep TODO High-Level|Track Progress in ExecPlan|significant correction" AGENTS.md`
- `rg -n "high-level tracker only|optional owner|N/A" PLANS.md tasks/plans/_template.md`
- `rg -n "high-level task tracker|Quick Workflow|significant correction" README.md`
- `git status --short --branch`

## Idempotence and Recovery

Documentation-only changes are safe to re-run. If wording is incorrect, edit in place and rerun the same grep checks. If `tasks/todo.md` history needs more detail, restore specific entries from git history without changing the high-level format.

## Artifacts and Notes

Expected evidence snippets:

    rg -n "Plan First|Keep TODO High-Level|Track Progress in ExecPlan|significant correction" AGENTS.md
    rg -n "high-level tracker only|optional owner|N/A" PLANS.md tasks/plans/_template.md
    rg -n "high-level task tracker|Quick Workflow|significant correction" README.md
    git status --short --branch

## Interfaces and Dependencies

No runtime interfaces or dependencies were changed.

Example TypeScript interface:

    export interface TaskTrackerEntry {
      status: "in_progress" | "done" | "blocked";
      goal: string;
      execPlanPath?: string;
      outcome?: string;
    }

Change note: 2026-02-09T03:40:00Z - Created to implement workflow simplification and resolve documentation contradictions.
Change note: 2026-02-09T03:56:00Z - Completed document alignment and validation checks.
