# Normalize shared-reference import style across all reference docs

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Apply one consistent import style in all reference documents: `Apply <relative-path> for:` followed by scope bullets. User-visible outcome: reference docs use a uniform, predictable pattern aligned with `skills/REFERENCE-STANDARD.md`.

## Progress

- [x] (2026-02-11T01:30:42Z) Initialized task and captured current inconsistencies in reference files.
- [x] (2026-02-11T01:30:42Z) Updated all inconsistent shared-reference import lines in `skills/*/references/*.md`.
- [x] (2026-02-11T01:30:42Z) Validated no remaining non-standard import lines and recorded outcome.

## Surprises & Discoveries

PowerShell path globbing in `rg` with `*.md` failed on this environment; validation was executed reliably via `Get-ChildItem` + regex matching instead.

## Decision Log

Decision: Scope edits strictly to reference files and only import-style lines pointing to `shared/references`.
Rationale: User requested reference audit + fixes; limiting scope keeps changes surgical.
Timestamp/Author: 2026-02-11T01:30:42Z / Codex

## Outcomes & Retrospective

Completed. All flagged shared-reference imports in reference docs were normalized to the canonical `Apply <relative-path> for:` format with scope bullets. The specific line raised by the user in `research-method.md` was corrected as part of this sweep.

## Context and Orientation

Reference files are under `skills/*/references/*.md`. Global rule is in `skills/REFERENCE-STANDARD.md` and requires `Apply <relative-path> for:` with bullet-scoped capabilities for module imports.

## Terminology and Decomposition

N/A - this is a docs normalization task.

## Plan of Work

Patch inconsistent lines (`Use ...`, inline `Apply ... for ...`, and `... follow/use ...`) into canonical `Apply <path> for:` blocks with concise bullets. Re-run regex checks to ensure no remaining deviations in reference files.

## Concrete Steps

1. Edit flagged references in:
- `skills/deep-researcher/references/*.md`
- `skills/project-auditor-improver/references/*.md`
- `skills/skill-creator/references/*.md`
2. Run verification scans:
- locate shared-reference mentions and confirm canonical style,
- confirm no `Apply ... for` lines without trailing `:`.

## Validation and Acceptance

Acceptance criteria:
- Each shared-reference import instruction in reference files uses `Apply <relative-path> for:`.
- Scope bullets are present where import is an instruction entry.
- No remaining non-colon `Apply ... for` patterns in reference files.

Verification commands:
- `Select-String`/`rg` over `skills/*/references/*.md` for `shared/references/` and `Apply` patterns.
- `rg -n -P "Apply `[^`]+` for(?!:)" skills/*/references/*.md`

## Idempotence and Recovery

Edits are docs-only and idempotent. If wording becomes unclear, restore the local sentence and reapply canonical form with a single import block and short bullets.

## Artifacts and Notes

Changed files:
- `skills/deep-researcher/references/doubt-resolution.md`
- `skills/deep-researcher/references/evidence-quality-rubric.md`
- `skills/deep-researcher/references/research-method.md`
- `skills/deep-researcher/references/usecase-skill-lessons-logs.md`
- `skills/project-auditor-improver/references/audit-method.md`
- `skills/project-auditor-improver/references/validation-gates.md`
- `skills/skill-creator/references/maintenance-security.md`
- `skills/skill-creator/references/quality-gates.md`

Validation evidence:
- Shared-reference scan for non-canonical lines returned no matches after patch.
- Regex scan for `Apply ... for` without trailing `:` across all reference docs returned no matches.

## Interfaces and Dependencies

N/A - docs-only normalization.

Change note: 2026-02-11T01:30:42Z - Created ExecPlan for reference import-style normalization.
Change note: 2026-02-11T01:30:42Z - Completed normalization and validation across reference docs.
