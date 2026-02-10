# Modularize Shared Skill References for Atomic Reuse

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Skill reference guidance currently duplicates the same rules in multiple files (U5 scoring, source priority, conflict handling, and risk confirmation gates). After this change, both `skills/deep-researcher` and `skills/skill-creator` will load shared atomic references from one location, while keeping only skill-specific content inside each skill. Observable outcome: each skill `SKILL.md` points to shared references, duplicated sections are removed from per-skill files, and both skills remain understandable and valid.

## Progress

- [x] (2026-02-10T23:39:40Z) Initial task entry.
- [x] (2026-02-10T23:40:00Z) Designed shared reference split and mapping from existing files.
- [x] (2026-02-10T23:41:30Z) Applied surgical doc edits to shared and skill-specific references.
- [x] (2026-02-10T23:42:20Z) Validated links/consistency and prepared tracker closure.

## Surprises & Discoveries

Current discovery: duplicated logic appears across at least four files: `skills/deep-researcher/references/evidence-quality-rubric.md`, `skills/deep-researcher/references/research-method.md`, `skills/skill-creator/references/research-evidence.md`, and `skills/skill-creator/references/maintenance-security.md`. Duplication includes U5 bands and source-priority ordering.

Additional discovery: threshold strings still appear in `skills/deep-researcher/references/evidence-quality-rubric.md`, but only for rubric-specific interpretation bands (`insufficient`, `weak`, `acceptable`, `high-quality`), which is domain-specific and not the shared `low|medium|high` labeling policy.

## Decision Log

Decision: Treat this as a non-trivial documentation architecture task and use ExecPlan + tracker updates before editing skill docs.
Rationale: The user request affects cross-skill structure and reuse policy; this is broader than a one-file tweak.
Timestamp/Author: 2026-02-10T23:39:40Z / agent

Decision: Create shared references under `skills/shared/references/` and keep `skills/REFERENCE-STANDARD.md` as the top-level policy index.
Rationale: A shared location enables atomic modules reused by multiple skills without cross-linking between skill folders.
Timestamp/Author: 2026-02-10T23:40:10Z / agent

Decision: Keep only skill-specific procedures inside each skill's local `references/` files and link to shared modules for common rules.
Rationale: Minimizes duplication while preserving each skill's discoverability and context.
Timestamp/Author: 2026-02-10T23:40:20Z / agent

Assumption: User wants practical repository refactor (not only verbal recommendation) because the request asks whether combining/reusing reference files across places is possible and desirable.
Rationale: Instruction phrasing asks for review with focus on reusable atomic design; implementing a minimal pattern best answers this.
Timestamp/Author: 2026-02-10T23:40:30Z / agent

Decision: Keep skill-local references as thin adapters where needed instead of deleting them.
Rationale: Maintains discoverability and existing skill file structure while still centralizing common policy text.
Timestamp/Author: 2026-02-10T23:41:40Z / agent

## Outcomes & Retrospective

Completed. Added reusable atomic shared reference modules and wired both skills to consume them. Removed duplicated policy text in local reference files for U5 thresholds, source/evidence policy, and confirm-required gate, while preserving skill-specific procedures and examples. Remaining numeric thresholds in one rubric file are intentional, because they represent rubric-category cutoffs rather than shared label mapping.

## Context and Orientation

Relevant files:

- `skills/REFERENCE-STANDARD.md`: current cross-skill standard for terminology and U5 scoring.
- `skills/deep-researcher/SKILL.md`: workflow contract and progressive-disclosure list.
- `skills/deep-researcher/references/*.md`: deep-research protocol references.
- `skills/skill-creator/SKILL.md`: skill design workflow and progressive-disclosure list.
- `skills/skill-creator/references/*.md`: evidence, quality, maintenance references.
- `tasks/todo.md`: high-level task status.

These files are documentation-only and do not require runtime code changes.

## Plan of Work

First, create shared atomic reference files for duplicated policies: U5 scoring labels, evidence/source policy, and risk-confirmation gates. Second, update both skills to point to shared files in progressive-disclosure sections. Third, remove duplicated text from local references where it overlaps with shared files and replace with concise links or narrow skill-specific deltas. Finally, validate by searching for stale duplicated fragments and checking that all referenced file paths exist.

## Concrete Steps

1. Create directory and shared files in `skills/shared/references/` with concise reusable policy content.
Expected result: new files exist and include clear "When to load" plus deterministic thresholds.

2. Edit `skills/deep-researcher/SKILL.md` and `skills/skill-creator/SKILL.md` progressive-disclosure lists to include shared modules.
Expected result: both skills reference shared docs using correct relative paths.

3. Edit duplicated local references to remove repeated policies and keep local specifics.
Expected result: less duplication, no broken context, deterministic behavior preserved.

4. Run repository grep checks for key duplicated phrases and broken links.
Expected result: targeted duplicates reduced and every listed shared path resolves.

## Validation and Acceptance

Acceptance checks:

- Both skills reference shared modules in `Progressive Disclosure` sections.
- Shared files exist and include reusable rules for U5/source policy/risk-confirmation.
- Local reference files still contain skill-specific content and no longer duplicate full shared sections.
- `tasks/todo.md` updated to `completed` with short outcome.

Validation commands (workspace root):

- `Get-ChildItem -Recurse -File skills/shared/references`
- `Select-String -Path skills/*/SKILL.md -Pattern "shared/references"`
- `Select-String -Path skills/**/* -Pattern "1.0-2.4|2.5-3.7|3.8-5.0"`

## Idempotence and Recovery

This task is docs-only. Re-running edits is safe: overwrite shared files and re-apply link updates. If a path is wrong, fix relative links and re-run grep validation. If refactor removes too much local context, restore minimal local summary plus shared link without reintroducing full duplication.

## Artifacts and Notes

Validation evidence summary:

- `Get-ChildItem -Recurse -File skills/shared/references` returned:
  - `confirm-required-gate.md`
  - `source-evidence-policy.md`
  - `u5-scoring-bands.md`
- `Select-String -Path skills/*/SKILL.md -Pattern "shared/references"` confirmed both skills now reference shared modules.
- `Select-String -Path skills/deep-researcher/references/*.md,skills/skill-creator/references/*.md -Pattern "../../shared/references"` confirmed local references now import shared policy modules.
- Threshold grep shows only rubric-specific cutoffs left outside shared policy.

## Interfaces and Dependencies

N/A - docs-only structural refactor of skill guidance files; no runtime interfaces or external dependencies change.

Change note: 2026-02-10T23:40:40Z - Created initial plan with assumptions, duplication findings, and stepwise validation.
Change note: 2026-02-10T23:42:29Z - Executed shared-module refactor, validated references, and documented completion evidence.
