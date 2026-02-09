# Remove Responsibility Duplication From README

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md` and is intentionally documentation-only.

## Purpose / Big Picture

After this change, `README.md` will stop duplicating policy and responsibility rules already defined in `AGENTS.md`. The observable outcome is a cleaner separation: `README.md` for orientation/bootstrap, `AGENTS.md` and `PLANS.md` for execution policy.

## Progress

- [x] (2026-02-09T04:25:00Z) Reviewed `README.md` and `AGENTS.md` to identify overlapping responsibility sections.
- [x] (2026-02-09T04:28:00Z) Edited `README.md` to remove duplicated responsibility content.
- [x] (2026-02-09T04:31:00Z) Updated `tasks/todo.md` and ran validation checks.

## Surprises & Discoveries

Observation: Responsibility duplication is concentrated in two contiguous README sections, not scattered across the file.
Evidence: `## Quick Workflow` and `## Commit Style` directly restate policy from `AGENTS.md`.

## Decision Log

Decision: Remove duplicated sections from `README.md` instead of trying to keep a synchronized abbreviated copy.
Rationale: A single source of truth in `AGENTS.md` is less error-prone and avoids drift.
Timestamp/Author: 2026-02-09T04:27:00Z / agent

Decision: Keep repository bootstrap/publishing instructions in `README.md`.
Rationale: Those instructions are onboarding-oriented and not responsibility policy duplicates.
Timestamp/Author: 2026-02-09T04:28:00Z / agent

## Outcomes & Retrospective

Completed. README no longer duplicates responsibility rules; it now delegates workflow policy to `AGENTS.md` and plan structure to `PLANS.md`. Remaining risk is user expectation of seeing full workflow directly in README, mitigated by explicit pointers.

## Context and Orientation

`README.md` is the human-facing entry point. `AGENTS.md` is the authoritative operational policy. `PLANS.md` defines ExecPlan structure. `tasks/todo.md` tracks task metadata only.

## Plan of Work

Identify sections in README that duplicate responsibility policy from AGENTS, remove them, and replace with explicit references to AGENTS/PLANS. Then update task tracking records and verify by searching for removed section headers.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Inspect `README.md` and `AGENTS.md`.
2. Remove duplicated sections from `README.md`:
   - `Quick Workflow`
   - `Commit Style`
3. Add a short `Workflow Source of Truth` section pointing to policy docs.
4. Update `tasks/todo.md` active task and history.
5. Run verification commands listed below.

## Validation and Acceptance

Accept if:

1. `README.md` does not contain `## Quick Workflow`.
2. `README.md` does not contain `## Commit Style`.
3. `README.md` clearly references `AGENTS.md`/`PLANS.md` as workflow authority.

Validation commands:

- `rg -n "^## Quick Workflow|^## Commit Style|Workflow Source of Truth|AGENTS.md|PLANS.md" README.md`
- `git status --short --branch`

## Idempotence and Recovery

Safe to re-run because these are doc edits. If needed, restore removed README sections from git history and reapply only the pointer-based structure.

## Artifacts and Notes

Expected evidence snippets:

    rg -n "^## Quick Workflow|^## Commit Style|Workflow Source of Truth|AGENTS.md|PLANS.md" README.md
    git status --short --branch

## Interfaces and Dependencies

No runtime interfaces or external dependencies changed.

Example TypeScript interface:

    export interface WorkflowDocs {
      readme: "orientation";
      agents: "policy";
      plans: "execution_structure";
    }

Change note: 2026-02-09T04:25:00Z - Created to remove policy duplication from README per user request.
Change note: 2026-02-09T04:31:00Z - Completed README cleanup and validation.
