# Mandate research campaign model on skill invocation across active skills

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User requested removal of the conditional phrasing (`For campaign-style research...`) and to make the campaign model run at invoke time, not only for deep-research scope. This task makes campaign scaffolding mandatory for active skills and aligns invocation contracts accordingly.

## Progress

- [x] (2026-02-11T02:46:02Z) Created plan and captured required policy shift.
- [x] (2026-02-11T02:48:10Z) Updated `skills/REFERENCE-STANDARD.md` to mandatory invoke-time campaign rule.
- [x] (2026-02-11T02:49:00Z) Aligned active skill invocation contracts (`deep-researcher`, `project-auditor-improver`, `skill-creator`).
- [x] (2026-02-11T02:50:05Z) Validated consistency and updated tracker.

## Surprises & Discoveries

Current policy is split: shared campaign model exists, but only deep-research explicitly invokes it. This creates drift risk and ambiguous expectations about when to initialize `Primary Question/Sub-question/Question-to-Evidence Matrix`.

## Decision Log

Decision: Keep campaign model as shared reference module, not standalone skill.
Rationale: it is a reusable procedure/policy component, not an independent end-to-end user intent.
Timestamp/Author: 2026-02-11T02:46:02Z / agent

Decision: Do not use skill-to-skill invocation; use shared references instead.
Rationale: inter-skill chaining increases coupling, hidden context transfer, and maintenance complexity.
Timestamp/Author: 2026-02-11T02:46:02Z / agent

## Outcomes & Retrospective

Completed. Campaign model is now mandatory at invocation level in standards and active skills. Conditional wording was removed, and all active skills explicitly initialize campaign scaffolding (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`) at invoke time.

## Context and Orientation

Target files:

- `skills/REFERENCE-STANDARD.md`
- `skills/deep-researcher/SKILL.md`
- `skills/project-auditor-improver/SKILL.md`
- `skills/skill-creator/SKILL.md`
- `tasks/todo.md`

## Terminology and Decomposition

- `Primary Question` (`Primary Question`)
- `Sub-question` (`Sub-question`)
- `Question-to-Evidence Matrix` (`Question-to-Evidence Matrix`)
- `Entry Criteria` (`Entry Criteria`)
- `Impediment` (`Impediment`)

## Plan of Work

1. Replace conditional wording in standard with mandatory invocation rule.
2. Add explicit invoke-time campaign initialization to all active skill contracts.
3. Ensure each active skill's progressive disclosure imports the shared campaign model.
4. Validate with grep + deep-research validator and close tracker entry.

## Concrete Steps

1. Patch standard + three skill files.
2. Validate commands:
- `rg -n "For campaign-style research decomposition|campaign model|invoke|research-campaign-model" skills/REFERENCE-STANDARD.md skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md skills/skill-creator/SKILL.md`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`

## Validation and Acceptance

Acceptance criteria:

1. Standard no longer frames campaign model as optional conditional.
2. All active skill invocation contracts explicitly initialize campaign model.
3. All active skills reference `research-campaign-model.md` in progressive disclosure.
4. Skill validation passes.

## Idempotence and Recovery

Docs-only. Reapply patches safely; recover by restoring prior wording from git if needed.

## Artifacts and Notes

Validation artifacts:

- `rg -n "For campaign-style research decomposition|On skill invocation, apply|Mandatory invocation rule" skills/REFERENCE-STANDARD.md`
  - confirms conditional wording removed and mandatory rule present.
- `rg -n "Campaign Initialization \\(Invoke-Time\\)|Initialize campaign model" skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md skills/skill-creator/SKILL.md`
  - confirms invoke-time initialization in all active skills.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher` -> `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/project-auditor-improver` -> `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/skill-creator` -> `Skill is valid!`

## Interfaces and Dependencies

N/A - policy/docs-only changes.

Change note: 2026-02-11T02:46:02Z - Created plan for mandatory invoke-time campaign usage across active skills.
Change note: 2026-02-11T02:50:05Z - Completed mandatory invoke-time campaign alignment and validation.
