# Align ExecPlan Style With Strict Self-Contained Standard

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be updated as work proceeds.

This plan follows `PLANS.md` and defines documentation-only changes that make future plans self-sufficient for a novice contributor.

## Purpose / Big Picture

After this change, every new execution plan in this repository will be understandable and executable by a contributor who only has the working tree plus one plan file. The visible outcome is a stricter `PLANS.md`, a richer template in `tasks/plans/_template.md`, and a clearer split between high-level tracking (`tasks/todo.md`) and implementation detail (`tasks/plans/*`).

## Progress

- [x] (2026-02-09T02:20:00Z) Read current `PLANS.md`, template, and guidance files.
- [x] (2026-02-09T02:25:00Z) Updated `PLANS.md` to strict ExecPlan requirements and formatting rules.
- [x] (2026-02-09T02:27:00Z) Replaced `tasks/plans/_template.md` with required sections and a TypeScript interface example.
- [x] (2026-02-09T02:29:00Z) Aligned `AGENTS.md` and `README.md` with the `todo` vs `plans` split.
- [x] (2026-02-09T02:30:00Z) Recorded this user correction in `tasks/lessons.md`.
- [x] (2026-02-09T02:35:00Z) Ran verification commands and synchronized `tasks/todo.md`.

## Surprises & Discoveries

Observation: Responsibility overlap was mostly guidance wording, not process mechanics.  
Evidence: Existing files already had different intent, but wording did not explicitly enforce separation.

## Decision Log

Decision: Keep `tasks/todo.md` as high-level tracker instead of removing it.  
Rationale: It provides fast status visibility while `tasks/plans/*` stores execution detail and evidence.  
Timestamp/Author: 2026-02-09T02:29:00Z / agent

Decision: Use TypeScript when adding interface-style examples in planning docs.  
Rationale: User preference and better readability for this repository context.  
Timestamp/Author: 2026-02-09T02:30:00Z / agent

Decision: Restrict checklist usage in template to `Progress` only.  
Rationale: Aligns with prose-first ExecPlan style while preserving granular status tracking.  
Timestamp/Author: 2026-02-09T02:31:00Z / agent

## Outcomes & Retrospective

Completed. The repository now enforces a stricter ExecPlan standard and clearer role boundaries between tracking and execution artifacts. Historical plans may still use older structure and can be upgraded incrementally when touched.

## Context and Orientation

`PLANS.md` defines ExecPlan requirements. `tasks/plans/_template.md` is the starter template used for new plans. `AGENTS.md` controls agent behavior and now specifies that `tasks/todo.md` is for high-level status only. `README.md` mirrors the same workflow split for quick onboarding. `tasks/lessons.md` stores corrections and prevention rules.

## Plan of Work

Update `PLANS.md` to stricter requirements, replace the template with mandatory living-document sections, align guidance in `AGENTS.md` and `README.md` with clear file responsibilities, then capture the correction in `tasks/lessons.md` and verify with targeted repository checks.

## Concrete Steps

From repository root (`c:\Users\igork\Desktop\agent`), edit:

1. `PLANS.md`
2. `tasks/plans/_template.md`
3. `AGENTS.md`
4. `README.md`
5. `tasks/lessons.md`
6. `tasks/todo.md`

Run:

1. `rg -n "Progress|Surprises & Discoveries|Decision Log|Outcomes & Retrospective" PLANS.md tasks/plans/_template.md`
2. `rg -n "todo|plans" AGENTS.md README.md`
3. `rg -n "^- \\[" tasks/plans/_template.md`
4. `git status --short --branch`

## Validation and Acceptance

Accept if:

1. `PLANS.md` explicitly requires self-contained living ExecPlans and mandatory sections.
2. `tasks/plans/_template.md` contains those sections and uses checklist markers only in `Progress`.
3. `AGENTS.md` and `README.md` clearly split `todo` tracking from plan execution detail.
4. `tasks/lessons.md` contains a correction entry for this change.

## Idempotence and Recovery

These are documentation-only edits and are safe to re-run. If wording must change, edit in place and re-run the same verification commands.

## Artifacts and Notes

Command evidence:

    rg -n "Progress|Surprises & Discoveries|Decision Log|Outcomes & Retrospective" PLANS.md tasks/plans/_template.md
    rg -n "todo|plans" AGENTS.md README.md
    rg -n "^- \\[" tasks/plans/_template.md
    git status --short --branch

## Interfaces and Dependencies

No runtime dependency changes.

Example TypeScript interface:

    export interface ExecPlanTracker {
      updateProgress(stepId: string, status: "todo" | "doing" | "done"): void;
      appendDecision(entry: { decision: string; rationale: string; at: string }): void;
    }

Change note: 2026-02-09T02:35:00Z - Created and finalized this ExecPlan while migrating repository planning docs to a stricter self-contained format.
