# Enforce exact `Apply ... for:` section naming and restore Deep-Researcher campaign closure flow

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Apply two requested corrections:

1. `Apply <path> for:` bullets must reference exact section names from referenced modules (for example `Canonical Definitions`, not paraphrased wording).
2. Restore deep-research operation to campaign-style closure (close initial topic list plus emergent threads) and remove `canonical-terminology` dependency from active skill docs where it adds overhead without execution value.

User-visible result: import style becomes mechanically consistent and `deep-researcher` explicitly enforces thread closure before final recommendations.

## Progress

- [x] (2026-02-11T02:11:21Z) Created plan and captured scope from user request.
- [x] (2026-02-11T02:13:40Z) Updated standards and import blocks to exact section-name references.
- [x] (2026-02-11T02:14:20Z) Restored campaign closure protocol in deep-researcher and removed canonical-terminology imports from active skill docs.
- [x] (2026-02-11T02:15:30Z) Validated consistency and skill structure.
- [x] (2026-02-11T02:16:34Z) Updated tracker and prepared final commit set for this task.

## Surprises & Discoveries

Initial discovery: current repository has staged and unstaged documentation changes from earlier tasks. Commit grouping must avoid mixing unrelated concerns and preserve user worktree state.

## Decision Log

Decision: Keep `skills/shared/references/canonical-terminology.md` as a shared module but remove direct consumption from skill docs per user request.
Rationale: user asked specifically that this module is not needed in active skills, not to delete the module itself.
Timestamp/Author: 2026-02-11T02:11:21Z / agent

Decision: Add explicit campaign closure rules directly in `deep-researcher` docs instead of adding another module.
Rationale: restores requested behavior with minimal indirection and faster runtime readability.
Timestamp/Author: 2026-02-11T02:11:21Z / agent

## Outcomes & Retrospective

Implemented. `Apply ... for:` now points to exact source section names in touched files, and `deep-researcher` gained explicit campaign closure control with initial-topic and emergent-thread queues. `canonical-terminology` remains available as shared reference but is no longer imported by active skill docs (`deep-researcher`, `project-auditor-improver`), reducing runtime overhead while preserving a central definition file.

## Context and Orientation

Relevant files:

- `skills/REFERENCE-STANDARD.md`: import-style policy source.
- `skills/deep-researcher/SKILL.md`: runtime workflow contract for deep research.
- `skills/deep-researcher/references/research-method.md`: protocol details and traceability table.
- `skills/project-auditor-improver/SKILL.md`: secondary skill currently importing canonical terminology.
- `tasks/todo.md`: high-level history entry after completion.

## Terminology and Decomposition

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

Campaign behavior update will use plain operational language (`initial topics`, `emergent threads`, `closure gate`) while preserving canonical labels where already used in templates.

## Plan of Work

1. Tighten import-style rule in `skills/REFERENCE-STANDARD.md` to require exact section names.
2. Normalize `Apply ... for:` bullets in touched skill files to exact section names from referenced modules.
3. Remove `canonical-terminology` imports from `deep-researcher` and `project-auditor-improver` skill docs.
4. Add campaign closure mechanics in `deep-researcher` (`initial list register`, emergent-thread admission, and final closure gate).
5. Validate with grep and skill validator.
6. Update `tasks/todo.md` with completed outcome.
7. Create atomic commits for existing staged work and new fixes.

## Concrete Steps

1. Edit policy and skill markdown files with surgical patches.
Expected: import bullets and workflow sections are consistent with user request.

2. Run checks:
- `rg -n "Apply `.* for:" skills`
- `rg -n "canonical-terminology.md" skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`

3. Stage and commit using conventional commit messages in atomic groups.
Expected: commit history separates existing canonical-module set from new campaign/import corrections.

## Validation and Acceptance

Acceptance criteria:

1. Standard states exact section-name matching for `Apply ... for:` bullets.
2. Updated import bullets in touched files use exact source section names.
3. `deep-researcher` enforces campaign closure of initial topics + emergent threads before final recommendation.
4. `deep-researcher` and `project-auditor-improver` no longer import `canonical-terminology.md`.
5. Tracker is updated and commits are created.

## Idempotence and Recovery

Changes are docs-only. Reapplying patches is safe. If a wording regression appears, restore from `git show <commit>` for affected file and re-run validation grep.

## Artifacts and Notes

Validation artifacts:

- `rg -n "canonical-terminology\\.md" skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md` returned no matches.
- `rg -n "canonical term definitions|source priority,|citation format,|score-to-label mapping|risk confirmation and fallback behavior|detailed audit flow and finding template|protocol and evidence table structure" skills -g "*.md"` returned no matches for old paraphrased import descriptors.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher` -> `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/project-auditor-improver` -> `Skill is valid!`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/skill-creator` -> `Skill is valid!`

## Interfaces and Dependencies

N/A - documentation and workflow policy updates only; no runtime interfaces or external dependencies.

Change note: 2026-02-11T02:11:21Z - Created plan for exact section-name imports and campaign-closure restoration.
Change note: 2026-02-11T02:15:30Z - Applied exact-section import normalization, removed skill-level canonical-terminology imports, and validated updated skills.
