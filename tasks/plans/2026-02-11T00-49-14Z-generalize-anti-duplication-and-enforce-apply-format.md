# Generalize anti-duplication policy and enforce `Apply ... for:` in Progressive Disclosure

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Implement two user-approved policy changes: (1) make the anti-duplication rule in `AGENTS.md` general (not skill-specific), and (2) enforce the exact `Apply <path> for:` wording inside `Progressive Disclosure` sections in active skill files. The observable outcome is that project-level rules describe a single-source-of-truth approach in generic terms, and active skill progressive-disclosure lists use a consistent actionable reference format.

## Progress

- [x] (2026-02-11T00:49:14Z) Task initialized and required policy/context files reviewed.
- [x] (2026-02-11T00:50:48Z) Edited policy docs (`AGENTS.md`, `skills/REFERENCE-STANDARD.md`) to reflect generalized anti-duplication and explicit Progressive Disclosure enforcement.
- [x] (2026-02-11T00:50:48Z) Aligned active skill Progressive Disclosure sections to `Apply <path> for:`.
- [x] (2026-02-11T00:50:48Z) Ran verification scans and updated tracker artifacts.

## Surprises & Discoveries

No blockers occurred. Existing `Progressive Disclosure` sections used mixed styles (`path-only` bullets and `Apply` variants), so enforcement required normalizing all three active skill files to the same bullet structure.

## Decision Log

Decision: Scope enforcement to `Progressive Disclosure` sections in active skill `SKILL.md` files, matching the user's explicit follow-up.
Rationale: User explicitly accepted forcing that format for `Progressive Disclosure`; broader normalization is out of scope unless requested.
Timestamp/Author: 2026-02-11T00:49:14Z / Codex

Decision: Keep anti-duplication policy generic in `AGENTS.md` without skill-specific paths.
Rationale: User requested principle-level wording focused on consistency and non-repetition spirit.
Timestamp/Author: 2026-02-11T00:49:14Z / Codex

## Outcomes & Retrospective

Completed. `AGENTS.md` now defines a generic single-source-of-truth anti-duplication rule without skill-specific coupling. `skills/REFERENCE-STANDARD.md` now explicitly enforces `Apply <relative-path> for:` within `Progressive Disclosure` entries, and active skills (`deep-researcher`, `skill-creator`, `project-auditor-improver`) now follow that format consistently in their `Progressive Disclosure` sections. No runtime behavior changed.

## Context and Orientation

`AGENTS.md` defines repository-wide operational behavior. `skills/REFERENCE-STANDARD.md` defines reference authoring conventions for skills. Active skills are in `skills/deep-researcher/SKILL.md`, `skills/skill-creator/SKILL.md`, and `skills/project-auditor-improver/SKILL.md`; each has a `Progressive Disclosure` section listing what to load and why.

## Terminology and Decomposition

N/A - this is a policy/text consistency task, not a research decomposition task.

## Plan of Work

First, replace the narrow `Shared Rule Centralization` section in `AGENTS.md` with a generalized single-source-of-truth anti-duplication policy. Second, add an explicit enforcement line in `skills/REFERENCE-STANDARD.md` that `Progressive Disclosure` entries must use `Apply <relative-path> for:`. Third, update all active skill `Progressive Disclosure` bullets to conform exactly. Finally, run targeted `rg` checks for `Progressive Disclosure` sections and `Apply` wording, then record outcomes in `tasks/todo.md` and this plan.

## Concrete Steps

1. Edit `AGENTS.md` section text to general anti-duplication wording.
Expected result: no skill-specific path assumptions in top-level anti-duplication policy.

2. Edit `skills/REFERENCE-STANDARD.md` to enforce the `Apply <relative-path> for:` format in Progressive Disclosure.
Expected result: one explicit normative rule for Progressive Disclosure formatting.

3. Edit three active skill files (`skills/deep-researcher/SKILL.md`, `skills/skill-creator/SKILL.md`, `skills/project-auditor-improver/SKILL.md`) in `Progressive Disclosure` sections.
Expected result: each shared/local reference bullet follows `Apply <path> for:` wording.

4. Run scans:
- `rg -n "## Progressive Disclosure|Apply `" skills/*/SKILL.md`
- `rg -n -P "Apply `[^`]+` for(?!:)" skills/*/SKILL.md`
Expected result: no non-colon `Apply ... for` instances in active Progressive Disclosure sections.

## Validation and Acceptance

Acceptance criteria:
- `AGENTS.md` contains a generic anti-duplication policy oriented around single source of truth.
- `skills/REFERENCE-STANDARD.md` explicitly mandates `Apply <relative-path> for:` in Progressive Disclosure.
- Active skill Progressive Disclosure sections use `Apply <path> for:` consistently.
- Tracker artifacts are updated with plan link and short outcome.

Verification commands:
- `rg -n "Single Source|duplication|canonical|authoritative" AGENTS.md`
- `rg -n "Progressive Disclosure|Apply <relative-path> for:" skills/REFERENCE-STANDARD.md`
- `rg -n "## Progressive Disclosure|Apply `" skills/deep-researcher/SKILL.md skills/skill-creator/SKILL.md skills/project-auditor-improver/SKILL.md`

## Idempotence and Recovery

Edits are documentation-only and idempotent. If wording creates ambiguity, revert only the affected paragraph in the touched file and reapply the intended sentence. Verification scans are read-only and safe to rerun.

## Artifacts and Notes

Verification evidence:
- `rg -n "Single Source of Truth|canonical source|context-specific deltas" AGENTS.md` matched the new generalized anti-duplication section.
- `rg -n "Progressive Disclosure|Apply <relative-path> for:|canonical source for scale definition" skills/REFERENCE-STANDARD.md` matched the new enforcement line and canonical U5 pointer.
- Manual line checks confirmed all entries under `## Progressive Disclosure` in:
  - `skills/deep-researcher/SKILL.md`
  - `skills/skill-creator/SKILL.md`
  - `skills/project-auditor-improver/SKILL.md`
  now use `Apply <path> for:` plus scoped bullet details.
- `tasks/lessons.md` updated with a reusable prevention rule: keep `AGENTS.md` policies domain-agnostic unless explicitly scoped by user.

## Interfaces and Dependencies

N/A - docs/policy-only changes; no runtime interface or dependency changes.

Change note: 2026-02-11T00:49:14Z - Created ExecPlan for generalized anti-duplication policy and Progressive Disclosure formatting enforcement.
Change note: 2026-02-11T00:50:48Z - Completed policy/doc edits, validated Progressive Disclosure formatting enforcement, and recorded evidence.
