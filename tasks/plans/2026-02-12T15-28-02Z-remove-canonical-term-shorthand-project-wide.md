# Remove canonical-term shorthand project-wide

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User explicitly requested removing canonical-term shorthand from the whole project. After this task, canonical terms are written only in full form (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`) across active and historical docs.

## Progress

- [x] (2026-02-12T15:28:02Z) Created plan and captured explicit user requirement.
- [x] (2026-02-12T15:29:00Z) Added high-level tracker entry and started execution.
- [x] (2026-02-12T15:31:10Z) Replaced shorthand tokens project-wide in markdown docs.
- [x] (2026-02-12T15:31:45Z) Validated no remaining shorthand and prepared tracker closure.

## Surprises & Discoveries

First replacement attempt used a nested PowerShell invocation and did not modify files as expected. Running direct in-session replacement resolved the issue deterministically.

## Decision Log

Decision: Apply the request to the full project documentation set, including historical plans and task logs.
Rationale: user requested removal "w calym projekcie" and this is higher-priority than archival-preservation default.
Timestamp/Author: 2026-02-12T15:28:02Z / agent

## Outcomes & Retrospective

Completed. Canonical-term shorthand was removed from project markdown files, and canonical terms now appear in full form everywhere.

## Context and Orientation

Target scope is markdown documentation under:

- `skills/**/*.md`
- `tasks/**/*.md`
- root workflow docs where applicable.

Removed shorthand categories:

- abbreviated uppercase aliases used instead of canonical terms,
- compact campaign-thread aliases used as terminology labels in narrative docs.

## Terminology and Decomposition

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

## Plan of Work

1. Record task in `tasks/todo.md` as one active high-level item.
2. Run project-wide shorthand scan.
3. Apply token replacements in markdown docs.
4. Re-scan to confirm zero remaining shorthand matches.
5. Update `tasks/todo.md` and this ExecPlan with outcomes.

## Concrete Steps

1. Add `in_progress` task entry in `tasks/todo.md`.
2. Use `rg` to list shorthand occurrences.
3. Apply replacements to all markdown files.
4. Validate with a deterministic repository scan command for removed shorthand categories.

## Validation and Acceptance

Acceptance criteria:

1. No remaining shorthand token hits across project docs.
2. Canonical terms remain understandable and consistent.
3. `tasks/todo.md` shows completed status with outcome.

## Idempotence and Recovery

Docs-only updates. Re-running replacements is safe. If an incorrect replacement occurs, fix affected lines manually and re-run validation grep.

## Artifacts and Notes

Validation artifacts:

- `rg -n "\\b\\x50\\x51\\b|\\b\\x53\\x51\\b|\\b\\x44\\x54\\b|\\b\\x53\\x75\\x62\\x51\\b|\\b\\x51\\x45\\x4D\\b|\\b\\x45\\x43\\b|\\b\\x49\\x4D\\x50\\b|\\x53\\x51/\\x44\\x54|\\x53\\x51->\\x44\\x54|\\x44\\x54->\\x44\\x54" --glob "*.md" .`
  - result: no matches.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`
  - result: `Skill is valid!`

## Interfaces and Dependencies

N/A - docs-only terminology cleanup.

Change note: 2026-02-12T15:28:02Z - Created plan for project-wide canonical-term shorthand removal.
Change note: 2026-02-12T15:31:45Z - Completed project-wide shorthand removal and validation.
