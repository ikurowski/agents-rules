# Close terminology and campaign-consistency audit gaps

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Implement the approved audit-close plan for terminology and research-campaign consistency. User-visible outcome: repository docs are consistent on mandatory campaign-model loading, the 2026-02-12 shorthand-removal plan is auditable with exact validation commands, and operational guidance prevents dangling references from untracked files.

## Progress

- [x] (2026-02-12T15:47:32Z) Created ExecPlan and captured approved implementation scope.
- [x] (2026-02-12T15:47:32Z) Added active high-level task entry in `tasks/todo.md`.
- [x] (2026-02-12T15:50:59Z) Applied documentation and policy edits.
- [x] (2026-02-12T15:50:59Z) Ran validation checks and captured outcomes.
- [x] (2026-02-12T15:50:59Z) Closed tracker entry as completed with outcome.

## Surprises & Discoveries

Initial path-integrity check over backtick snippets flagged one stale historical backtick path (`skills/skill-governance-researcher`) in `tasks/todo.md`. Resolution was to keep historical wording but remove backtick path formatting for the non-existing legacy folder.

## Decision Log

Decision: implement the operational anti-dangling-reference control in repository policy (`AGENTS.md`) rather than only in one task-specific plan.
Rationale: the issue is cross-task and recurring, so policy-level guardrails are the stable fix.
Timestamp/Author: 2026-02-12T15:47:32Z / agent

## Outcomes & Retrospective

Completed. Audit-close scope is fully implemented:

1. campaign-model loading semantics are now explicitly mandatory and aligned between shared model and reference standard for research/decision tasks,
2. shorthand-removal ExecPlan now contains category-based wording and exact deterministic scan command evidence,
3. commit-style policy now includes explicit-path staging guidance to prevent dangling references from untracked files,
4. validation criteria passed (naming, shorthand scan, path integrity, and skill validators).

## Context and Orientation

Planned touchpoints:

- `skills/shared/references/research-campaign-model.md`
- `skills/REFERENCE-STANDARD.md`
- `tasks/plans/2026-02-12T15-28-02Z-remove-canonical-term-shorthand-project-wide.md`
- `AGENTS.md`
- `tasks/todo.md`

Validation targets:

- section-name consistency (`Canonical Terms`)
- no legacy shorthand tokens in markdown docs
- no dangling referenced paths in `tasks/todo.md` and `skills/REFERENCE-STANDARD.md`
- skill-structure validity for active standalone skills.

## Terminology and Decomposition

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

For this task, apply `skills/shared/references/research-campaign-model.md` semantics as mandatory for research/decision tasks.

## Plan of Work

1. Align campaign-model load semantics between shared model and standard.
2. Improve auditability of shorthand-removal ExecPlan with explicit validation commands/results and remove misleading legacy-token wording.
3. Add operational commit/staging rule to prevent dangling references from untracked files.
4. Execute full validation suite for terminology, naming, references, and skill validators.
5. Update this plan and `tasks/todo.md` with completion evidence.

## Concrete Steps

1. Edit `skills/shared/references/research-campaign-model.md` (`When to load`) and `skills/REFERENCE-STANDARD.md` (`Mandatory invocation rule`) for semantic parity.
2. Edit `tasks/plans/2026-02-12T15-28-02Z-remove-canonical-term-shorthand-project-wide.md` to:
   - replace vague legacy-token section with category-based wording,
   - add exact repository scan commands and observed results.
3. Edit `AGENTS.md` commit-style section to require explicit path staging when referenced untracked files are introduced.
4. Run validation commands:
   - terminology/name scans (`rg`),
   - dangling-reference existence check (`Test-Path` over extracted backtick paths),
   - `quick_validate.py` for `deep-researcher`, `skill-creator`, `project-auditor-improver`.
5. Update `Progress`, `Surprises & Discoveries`, `Outcomes & Retrospective`, and finalize `tasks/todo.md`.

## Validation and Acceptance

Acceptance criteria:

1. `skills/shared/references/research-campaign-model.md` and `skills/REFERENCE-STANDARD.md` express identical mandatory loading semantics for research/decision tasks.
2. No legacy variant of the canonical-terms section name remains.
3. No legacy shorthand tokens remain in markdown docs.
4. All backtick-referenced paths in `tasks/todo.md` and `skills/REFERENCE-STANDARD.md` resolve to existing files.
5. `quick_validate.py` passes for three active standalone skills.

## Idempotence and Recovery

Docs/policy only. Reapplying edits is safe. If wording drifts, restore from git diff and reapply only target sections listed in this plan. Validation commands are read-only and can be rerun without side effects.

## Artifacts and Notes

Validation evidence:

- `rg -n "When to load:|Mandatory invocation rule:|semantically identical|does not allow conditional" skills/shared/references/research-campaign-model.md skills/REFERENCE-STANDARD.md`
  - result: required mandatory-loading statements present in both files.
- `rg -n "\\x43\\x61\\x6E\\x6F\\x6E\\x69\\x63\\x61\\x6C\\x20\\x54\\x65\\x72\\x6D\\x73\\x20\\x61\\x6E\\x64\\x20\\x49\\x64\\x65\\x6E\\x74\\x69\\x66\\x69\\x65\\x72\\x73" --glob "*.md" .`
  - result: no matches.
- `rg -n "\\b\\x50\\x51\\b|\\b\\x53\\x51\\b|\\b\\x44\\x54\\b|\\b\\x53\\x75\\x62\\x51\\b|\\b\\x51\\x45\\x4D\\b|\\b\\x45\\x43\\b|\\b\\x49\\x4D\\x50\\b|\\x53\\x51/\\x44\\x54|\\x53\\x51->\\x44\\x54|\\x44\\x54->\\x44\\x54" --glob "*.md" .`
  - result: no matches.
- path-integrity check command:
  - `$files = @('tasks/todo.md','skills/REFERENCE-STANDARD.md'); $paths = foreach ($f in $files) { $content = Get-Content -Raw $f; [regex]::Matches($content,'\`([^`]+)\`') | ForEach-Object { $_.Groups[1].Value } }; $targets = $paths | Where-Object { $_ -match '^(tasks|skills)/[^\\s]+$' } | Sort-Object -Unique; $missing = @(); foreach ($p in $targets) { if (-not (Test-Path $p)) { $missing += $p } }; "checked=$($targets.Count)"; if ($missing.Count -eq 0) { "missing=0" } else { "missing=$($missing.Count)"; $missing }`
  - result: `checked=56`, `missing=0`.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`
  - result: `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/skill-creator`
  - result: `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/project-auditor-improver`
  - result: `Skill is valid!`

## Interfaces and Dependencies

N/A - documentation/process updates only.

Change note: 2026-02-12T15:47:32Z - Created plan to implement approved audit-closure changes.
Change note: 2026-02-12T15:50:59Z - Implemented doc/policy changes, validated criteria, and closed task.
