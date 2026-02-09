# Refine Policy Coherence Across Workflow Docs

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md` and is limited to documentation updates that remove rule ambiguity and policy drift.

## Purpose / Big Picture

After this change, workflow policy documents use one consistent model for: where assumptions are recorded, when to ask the user versus act autonomously, and how task status values are represented. The user-visible outcome is clearer agent behavior and lower chance of process mismatch during future tasks.

## Progress

- [x] (2026-02-09T04:10:00Z) Reviewed `AGENTS.md`, `README.md`, `PLANS.md`, and `tasks/todo.md` for policy conflicts.
- [x] (2026-02-09T04:13:00Z) Updated `AGENTS.md` to remove conflicting guidance and tighten decision rules.
- [x] (2026-02-09T04:15:00Z) Updated `README.md` and `PLANS.md` to align onboarding and tracker status vocabulary.
- [x] (2026-02-09T04:17:00Z) Ran grep-based verification and updated `tasks/todo.md` with outcome.

## Surprises & Discoveries

Observation: The main contradiction was a single sentence in `AGENTS.md` that routed assumptions to `tasks/todo.md` despite the newer high-level-only policy.
Evidence: `AGENTS.md` previously said "log the assumption in `tasks/todo.md`", while `PLANS.md` and `tasks/todo.md` define tracker-only scope.

## Decision Log

Decision: Keep edits limited to policy docs only and avoid changing historical plan files.
Rationale: Historical plans are immutable records; standards should be fixed at policy and onboarding layers.
Timestamp/Author: 2026-02-09T04:12:00Z / agent

Decision: Standardize tracker statuses at the policy level as `in_progress|completed|blocked`.
Rationale: Removes naming drift (`done` vs `completed`) for active workflow artifacts.
Timestamp/Author: 2026-02-09T04:14:00Z / agent

Decision: Clarify uncertainty handling with a two-step rule (resolve from repo context first, ask user when material and non-inferable).
Rationale: Resolves tension between "ask questions" and "proceed autonomously".
Timestamp/Author: 2026-02-09T04:15:00Z / agent

## Outcomes & Retrospective

Completed. Policy text is now internally consistent across `AGENTS.md`, `README.md`, and `PLANS.md` for the targeted ambiguity points. No code/runtime behavior changed. Remaining risk is legacy wording inside historical plan examples, which is acceptable as archival context.

## Context and Orientation

`AGENTS.md` is the authoritative operating policy for agents. `README.md` is the quick-start view of the same process. `PLANS.md` defines ExecPlan standards. `tasks/todo.md` is intentionally compact and should not contain detailed assumptions or execution logs.

## Plan of Work

Review the current policy and onboarding wording, identify contradictions, and apply minimal edits to unify terminology and behavioral expectations. Then validate key phrases with targeted grep commands and record the final outcome in `tasks/todo.md`.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Read `AGENTS.md`, `README.md`, `PLANS.md`, and `tasks/todo.md`.
2. Edit `AGENTS.md` to:
   - move assumption logging to ExecPlan `Decision Log`,
   - merge duplicated non-trivial planning rules,
   - clarify autonomous-vs-question escalation,
   - constrain elegance guidance to avoid scope creep,
   - define status vocabulary.
3. Edit `README.md` and `PLANS.md` to align status wording and assumption location.
4. Run grep checks listed in Validation and Acceptance.
5. Update `tasks/todo.md` with a short completed outcome.

## Validation and Acceptance

Accept if all checks pass:

1. `AGENTS.md` no longer instructs logging assumptions in `tasks/todo.md`.
2. `AGENTS.md` contains only one non-trivial planning rule anchored to `tasks/plans/<timestamp>-<slug>.md`.
3. `AGENTS.md`, `README.md`, and `PLANS.md` agree on tracker statuses `in_progress|completed|blocked`.
4. `tasks/todo.md` remains high-level only.

Validation commands:

- `rg -n "log the assumption in `tasks/todo.md`|Decision Log|When uncertain, resolve from repository context first|Status Vocabulary|in_progress|completed|blocked" AGENTS.md README.md PLANS.md`
- `rg -n "high-level tracker" tasks/todo.md`
- `git status --short --branch`

## Idempotence and Recovery

These are documentation-only edits and are safe to re-run. If phrasing is unsatisfactory, revise in place and rerun the same grep checks. If `tasks/todo.md` structure drifts, restore the compact format and keep implementation detail in ExecPlans only.

## Artifacts and Notes

Expected evidence snippets:

    rg -n "log the assumption in `tasks/todo.md`|Decision Log|When uncertain, resolve from repository context first|Status Vocabulary|in_progress|completed|blocked" AGENTS.md README.md PLANS.md
    rg -n "high-level tracker" tasks/todo.md
    git status --short --branch

## Interfaces and Dependencies

No runtime interfaces or dependencies were changed.

Example TypeScript interface:

    export interface TaskStatusPolicy {
      status: "in_progress" | "completed" | "blocked";
    }

Change note: 2026-02-09T04:10:00Z - Created to implement targeted policy coherence improvements requested by the user.
Change note: 2026-02-09T04:17:00Z - Completed edits and validation for AGENTS/README/PLANS consistency.
