# Audit Skill References and Unify Scoring

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Assess whether `skills/deep-researcher/references/usecase-skill-lessons-logs.md` is necessary, audit structure consistency across reference files in all local skills, research best-practice reference architecture for agent skills, and propose a single unified scoring system that removes current inconsistency between numeric (`1-5`) and categorical (`low|medium|high`) scales. The user-visible outcome is a concrete, source-backed unification proposal and corresponding repository updates so future skill maintenance is consistent and easier to audit.

## Progress

- [x] (2026-02-10T19:51:43Z) Initial task entry and repository policy/context read (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`).
- [x] (2026-02-10T19:52:20Z) Created active task tracking entry in `tasks/todo.md`.
- [x] (2026-02-10T19:54:10Z) Audited all skill reference files for section structure and scoring inconsistency points.
- [x] (2026-02-10T19:57:10Z) Completed external primary-source research on skill-structure and evaluation scoring.
- [x] (2026-02-10T19:58:20Z) Added unified structure/scoring updates across skill docs and references.
- [x] (2026-02-10T19:59:20Z) Validated consistency (`quick_validate.py`, grep checks, BOM fix) and prepared tracker closure.

## Surprises & Discoveries

- `skills/skill-creator/SKILL.md` had UTF-8 BOM (`EF BB BF`), causing `quick_validate.py` to fail frontmatter detection because validator expects the file to start exactly with `---`.
- All reference files already shared baseline structure (`When to load` + `Table of Contents`), so unification effort could focus on scoring semantics instead of major structural rewrites.
- `usecase-skill-lessons-logs.md` is uniquely referenced from `skills/deep-researcher/SKILL.md` and contains option-threshold logic not duplicated in other references, so removing it would reduce capability coverage for that use case.

## Decision Log

Decision: Treat this request as non-trivial and create an ExecPlan before making content changes.
Rationale: The task has multiple workstreams (audit, external research, proposal, repo updates) and directly changes governance docs.
Timestamp/Author: 2026-02-10T19:51:43Z / Codex

Decision: Proceed using local `skills/deep-researcher` artifacts even though session-level skill registry shown in system context lists only system skills.
Rationale: User explicitly invoked `$deep-researcher`, local repository contains that skill, and this task is explicitly about its files.
Timestamp/Author: 2026-02-10T19:51:43Z / Codex

Decision: Keep `skills/deep-researcher/references/usecase-skill-lessons-logs.md` and normalize it to the unified score system.
Rationale: The file contains unique governance option mapping and reusable templates; retaining it as optional module avoids bloating core research references while preserving coverage.
Timestamp/Author: 2026-02-10T19:57:55Z / Codex

Decision: Adopt a single five-point score (`1-5`) numeric scale with deterministic label mapping (`low|medium|high`) as the repository-wide scoring convention for skill references.
Rationale: It resolves numeric-vs-categorical inconsistency while preserving readability and enabling deterministic thresholds.
Timestamp/Author: 2026-02-10T19:58:00Z / Codex

Decision: Add `skills/REFERENCE-STANDARD.md` as central documentation for reference structure and scoring policy.
Rationale: A shared standard prevents divergence between skills and makes future audits simpler.
Timestamp/Author: 2026-02-10T19:58:15Z / Codex

## Outcomes & Retrospective

Completed. The repository now has:

- a cross-skill reference standard (`skills/REFERENCE-STANDARD.md`),
- normalized five-point scoring in `deep-researcher` evidence/confidence/governance references,
- normalized five-point score risk scoring in `skill-creator` security references and policy text,
- validated skill structure after removing BOM from `skills/skill-creator/SKILL.md`.

`usecase-skill-lessons-logs.md` was assessed as needed and retained, but converted to the same scoring convention as the rest of the system.

## Context and Orientation

Repository contains two local skills:

- `skills/deep-researcher`
- `skills/skill-creator`

Each skill has:

- `SKILL.md` behavior contract,
- `agents/openai.yaml` metadata,
- `references/*.md` topical guidance.

Tracking and policy files used during this task:

- `AGENTS.md` (operational constraints),
- `PLANS.md` (ExecPlan format/lifecycle),
- `tasks/todo.md` (high-level task status),
- `tasks/lessons.md` (reusable prevention rules).

Primary decision artifacts to evaluate:

- `skills/deep-researcher/references/usecase-skill-lessons-logs.md` (necessity and scope overlap),
- score systems spread across:
  - `skills/deep-researcher/references/evidence-quality-rubric.md`,
  - `skills/deep-researcher/references/usecase-skill-lessons-logs.md`,
  - `skills/deep-researcher/SKILL.md`,
  - `skills/deep-researcher/references/doubt-resolution.md`.

## Plan of Work

Perform a four-part flow:

1. Track task activation in `tasks/todo.md`.
2. Build an audit matrix for all reference files (structure sections, intent, scoring dimensions/scales, duplicated guidance).
3. Research current primary sources for agent-skill documentation structure and evaluation-scoring best practices.
4. Produce and apply a minimal, unified structure proposal (including one scoring system with deterministic mapping to confidence labels), then validate consistency with repository-wide checks.

## Concrete Steps

1. Create `tasks/plans/2026-02-10T19-51-43Z-audit-skill-references-and-unify-scoring.md` from template and keep it updated after each milestone.
2. Edit `tasks/todo.md` to add one `## Active Task` entry with status `in_progress` and this ExecPlan link.
3. Enumerate all skill reference files using shell listing commands and inspect file contents.
4. Run targeted web research with primary sources (OpenAI docs/blog/changelog and standards/security references when relevant) for structure/scoring guidance.
5. Apply doc updates in affected `skills/*` files with minimal/surgical edits.
6. Validate via:
   - markdown/content checks (presence and consistency of scoring system references),
   - repository grep checks for deprecated inconsistent scale usage.
7. Mark plan progress, record decisions/discoveries, and write final outcome in `tasks/todo.md`.

## Validation and Acceptance

Acceptance criteria:

1. A clear answer exists on whether `usecase-skill-lessons-logs.md` is needed, with rationale tied to overlap/uniqueness.
2. Structural audit covers all `skills/*/references/*.md` files and identifies consistency gaps.
3. Proposal defines one unified reference-structure standard reusable across skills.
4. Proposal defines one unified scoring system and resolves `1-5` vs `low|medium|high` inconsistency.
5. If repository files are updated, all relevant files consistently reflect the new scoring model.
6. `tasks/todo.md` includes final outcome and this plan includes evidence/retrospective.

Validation commands (from repo root):

- `Get-ChildItem skills -Recurse -File`
- `Get-ChildItem skills -Recurse -File -Filter *.md | Select-String -Pattern "low|medium|high|1 to 5|1-5|score"`
- `git diff -- tasks/todo.md tasks/plans/2026-02-10T19-51-43Z-audit-skill-references-and-unify-scoring.md skills`

Expected validation result: changed files show consistent terminology and explicit scoring mapping without contradictory scales.

## Idempotence and Recovery

Steps are idempotent because edits are markdown-only and can be re-run by reapplying patches. If a partial edit fails, re-open target file, compare against intended section content, and reapply only missing lines. Recovery from mistaken edits is via manual correction using `git diff` to isolate unintended changes; do not reset unrelated files.

## Artifacts and Notes

Audit and validation evidence:

- Structural inventory command:
  - `Get-ChildItem skills -Recurse -File -Filter *.md | Where-Object { $_.FullName -match '\\references\\' } ...`
  - Result: all seven reference files include `When to load` + `## Table of Contents`; section counts are in the 5-7 range.
- Consistency checks:
  - `Get-ChildItem skills -Recurse -File -Filter *.md | Select-String -Pattern "classify risk: `low`, `medium`, `high`|<high\|medium\|low>|confidence level \(`high`, `medium`, `low`\)|total score"`
  - Result: no remaining matches after normalization.
- Skill validation:
  - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher` -> `Skill is valid!`
  - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/skill-creator` -> initially failed (`No YAML frontmatter found`), then passed after BOM removal.
- BOM diagnostic and fix:
  - `Format-Hex -Path skills/skill-creator/SKILL.md | Select-Object -First 4` showed `EF BB BF`.
  - Rewrote file as UTF-8 without BOM via `[System.IO.File]::WriteAllText(..., New-Object System.Text.UTF8Encoding($false))`.

Primary-source research inputs used for recommendations:

- OpenAI Codex Skills docs (date not published; verified 2026-02-10): `https://developers.openai.com/codex/skills`
- OpenAI evaluation best practices (date not published; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/evaluation-best-practices`
- OpenAI `eval-skills` blog (2026-01-22): `https://developers.openai.com/blog/eval-skills`
- Agent Skills specification (date not published; verified 2026-02-10): `https://agentskills.io/`
- NIST AI RMF 1.0 (2023-01-26) and NIST AI RMF GenAI Profile (2024-07-26):
  - `https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf`
  - `https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence`
- Psychometric scale-point study used to support 5-point scale choice:
  - Leung S.-O. (2011), DOI: `https://doi.org/10.1177/0013164410377032`

## Interfaces and Dependencies

N/A - This is documentation/policy harmonization within skill markdown files and does not add runtime interfaces or external code dependencies.

Change note: 2026-02-10T19:51:43Z - Created initial ExecPlan for cross-skill reference audit and scoring unification work.
Change note: 2026-02-10T19:59:20Z - Recorded completed audit, research findings, implementation decisions, and validation evidence.

