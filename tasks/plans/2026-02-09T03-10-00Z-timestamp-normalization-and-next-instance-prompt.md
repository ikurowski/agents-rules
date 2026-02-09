# Normalize Timestamps and Prepare Next-Instance Review Prompt

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be updated as work proceeds.

This plan follows `PLANS.md` and focuses on documentation/process consistency only.

## Purpose / Big Picture

After this change, all date markers in repository documentation use one timestamp format (`YYYY-MM-DDTHH:MM:SSZ`), which removes ambiguity and keeps historical records machine-readable. In addition, a reusable prompt will be prepared for a new chat instance to re-audit the repository and propose logical improvements plus removals of unnecessary process overhead.

## Progress

- [x] (2026-02-09T03:10:00Z) Scanned repository for date-like fields and templates.
- [x] (2026-02-09T03:12:00Z) Updated planning standards and templates to timestamp conventions.
- [x] (2026-02-09T03:14:00Z) Converted historical task and lesson entries from legacy date labels to `Timestamp`.
- [x] (2026-02-09T03:20:00Z) Finalized verification sweep and recorded outcomes.

## Surprises & Discoveries

Observation: date-only values appeared both in content fields and naming conventions.  
Evidence: `AGENTS.md` and `PLANS.md` previously described date-only plan filenames; multiple docs used legacy date labels.

## Decision Log

Decision: Standardize on UTC ISO 8601 timestamps with seconds.  
Rationale: Human readability plus deterministic sorting/parsing.  
Timestamp/Author: 2026-02-09T03:11:00Z / agent

Decision: Use Windows-safe timestamp filenames (`HH-mm-ss` in file names) while keeping full ISO format in content.  
Rationale: Windows disallows `:` in file names.  
Timestamp/Author: 2026-02-09T03:12:00Z / agent

## Outcomes & Retrospective

Completed. The repository now uses timestamp labels in planning/lesson logs, timestamp placeholders in templates, and timestamp-aware filename conventions in process docs. Both existing ExecPlan files in `tasks/plans/` now use timestamp-based names.

## Context and Orientation

Relevant files:

- `AGENTS.md`
- `PLANS.md`
- `README.md`
- `tasks/todo.md`
- `tasks/lessons.md`
- `tasks/plans/_template.md`
- `tasks/plans/2026-02-09T02-20-00Z-execplan-style-alignment.md`

## Plan of Work

Update all date labels/placeholders to timestamp variants, convert historical entries to timestamp values, align filename conventions in standards, and ensure plan file references point to timestamp-based names. Then run ripgrep checks for leftover date-only patterns and confirm repository status.

## Concrete Steps

From repository root (`c:\Users\igork\Desktop\agent`):

1. Edit affected markdown files and convert date fields to timestamps.
2. Rename date-based plan file names to timestamp-based names when needed.
3. Run:
   - `rg -n "Timestamp:|Timestamp/Author|YYYY-MM-DDTHH:MM:SSZ" AGENTS.md README.md PLANS.md tasks`
   - `rg -n -P "YYYY-MM-DD(?!T)" AGENTS.md README.md PLANS.md tasks --glob "!tasks/todo.md" --glob "!tasks/plans/2026-02-09T03-10-00Z-timestamp-normalization-and-next-instance-prompt.md"`
   - `git status --short --branch`

## Validation and Acceptance

Accept if:

1. No legacy date label fields remain in project markdown.
2. Timestamp placeholders are consistent (`YYYY-MM-DDTHH:MM:SSZ`).
3. Historical task/lesson records retain meaning after conversion.
4. A next-instance prompt is provided to the user for independent project re-audit.

## Idempotence and Recovery

Changes are documentation-only and safe to repeat. If a timestamp value is incorrect, edit in place and rerun ripgrep checks.

## Artifacts and Notes

Verification output summary:

    rg -n "Timestamp:|Timestamp/Author|YYYY-MM-DDTHH:MM:SSZ" AGENTS.md README.md PLANS.md tasks
    -> expected timestamp markers present

    rg -n -P "YYYY-MM-DD(?!T)" AGENTS.md README.md PLANS.md tasks --glob "!tasks/todo.md" --glob "!tasks/plans/2026-02-09T03-10-00Z-timestamp-normalization-and-next-instance-prompt.md"
    -> no matches

    git status --short --branch
    -> documentation-only changes in tracked files

## Interfaces and Dependencies

No runtime dependency changes.

Change note: 2026-02-09T03:10:00Z - Created to execute timestamp normalization and prepare a reusable review prompt for a fresh chat instance.
Change note: 2026-02-09T03:20:00Z - Marked verification complete and recorded evidence after repository-wide timestamp normalization.
