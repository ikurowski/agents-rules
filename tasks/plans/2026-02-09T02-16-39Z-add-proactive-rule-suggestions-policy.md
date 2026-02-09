# Add Proactive Rule Suggestions Policy

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md` and is limited to documentation updates.

## Purpose / Big Picture

Add a generic policy that requires the agent to proactively suggest new rules when repeated patterns indicate likely improvements. The outcome is predictable proposal quality without auto-enforcing policy changes.

## Progress

- [x] (2026-02-09T02:16:39Z) Reviewed `AGENTS.md` and confirmed insertion point under foundational principles.
- [x] (2026-02-09T02:18:00Z) Added `Proactive Rule Suggestions` section to `AGENTS.md`.
- [x] (2026-02-09T02:20:00Z) Updated `tasks/todo.md` and ran validation commands.

## Surprises & Discoveries

Observation: The requested wording fit directly into existing policy style without further restructuring.
Evidence: New section could be inserted after `Continuous Learning` with no cross-reference breakage.

## Decision Log

Decision: Preserve user-provided wording almost verbatim.
Rationale: User explicitly approved this phrasing.
Timestamp/Author: 2026-02-09T02:17:30Z / agent

Decision: Keep this as a proposal-only rule, not automatic policy mutation.
Rationale: Prevents uncontrolled drift of repository policy.
Timestamp/Author: 2026-02-09T02:18:10Z / agent

## Outcomes & Retrospective

Completed. `AGENTS.md` now includes a generic meta-rule for proposing policy improvements with a strict proposal template and explicit approval gate.

## Context and Orientation

`AGENTS.md` is the operational policy source. `tasks/todo.md` tracks completion at high level. This change does not modify execution templates or runtime code.

## Plan of Work

Insert the new policy subsection in `AGENTS.md`, then document completion in `tasks/todo.md` with an ExecPlan link and outcome.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Edit `AGENTS.md` to add `### Proactive Rule Suggestions` and required numbered proposal fields.
2. Add this ExecPlan file under `tasks/plans/`.
3. Update `tasks/todo.md` active task and move previous active task to history.
4. Verify with grep and `git status`.

## Validation and Acceptance

Accept if:

1. `AGENTS.md` contains `### Proactive Rule Suggestions`.
2. `AGENTS.md` contains all 5 mandatory proposal fields.
3. `AGENTS.md` contains approval gate language ("not enforce ... unless the user approves").

Validation commands:

- `rg -n "Proactive Rule Suggestions|Observation|Draft rule|Expected benefit|Trade-off or risk|Target location|unless the user approves" AGENTS.md`
- `git status --short --branch`

## Idempotence and Recovery

Safe to re-run because this is documentation-only. If wording needs revision, edit the section in place and rerun grep checks.

## Artifacts and Notes

Expected evidence snippets:

    rg -n "Proactive Rule Suggestions|Observation|Draft rule|Expected benefit|Trade-off or risk|Target location|unless the user approves" AGENTS.md
    git status --short --branch

## Interfaces and Dependencies

No runtime interfaces or external dependencies were changed.

Example TypeScript interface:

    export interface RuleProposal {
      observation: string;
      draftRule: string;
      expectedBenefit: string;
      tradeoffOrRisk: string;
      targetLocation: "AGENTS.md" | "PLANS.md" | "README.md" | "tasks/lessons.md";
    }

Change note: 2026-02-09T02:16:39Z - Created to add user-approved proactive rule suggestion policy.
Change note: 2026-02-09T02:20:00Z - Completed edits and validation.
