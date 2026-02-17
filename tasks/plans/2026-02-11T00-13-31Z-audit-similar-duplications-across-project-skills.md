# Audit project for similar duplication patterns across skills

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Analyze the project for duplication patterns similar to the previously fixed `Confirm-Required Risk Gate` issue (where canonical policy should be sourced from shared references instead of repeated locally). The user-visible outcome is a concrete report of remaining problematic duplications and, where safe, minimal fixes to remove duplication.

## Progress

- [x] (2026-02-11T00:13:31Z) Task initialized with policy review and scope definition.
- [x] (2026-02-11T00:14:20Z) Built duplication candidate list using repository-wide text scans.
- [x] (2026-02-11T00:15:10Z) Manually classified findings into intentional reuse vs problematic duplication.
- [x] (2026-02-11T00:16:00Z) Applied minimal fixes, re-validated scans, and updated tracker entries.

## Surprises & Discoveries

After updating `confirm-required-gate` to label-driven logic, several skill-local docs still used old threshold literals (`risk_score >= 3.8`). This created immediate policy drift risk and confirmed the duplication pattern was not isolated.

## Decision Log

Decision: Interpret "podobnych duplikacji" as primarily policy duplication around shared skill references (`five-point-scoring-bands`, `source-evidence-policy`, `confirm-required-gate`), then broaden to adjacent skill docs.
Rationale: User asked this directly after reviewing `confirm-required-gate`, so this is the highest-signal interpretation with lowest risk of overreach.
Timestamp/Author: 2026-02-11T00:13:31Z / Codex

Decision: Treat historical plans in `tasks/plans/` as archival and exclude them from duplication-remediation scope unless user asks otherwise.
Rationale: Historical documents intentionally preserve prior state and naturally contain repeated patterns.
Timestamp/Author: 2026-02-11T00:13:31Z / Codex

Decision: Keep `skills/REFERENCE-STANDARD.md` five-point score section unchanged in this pass.
Rationale: It acts as governance-level standard text; this audit focused on removing drift-prone duplication in executable skill guidance.
Timestamp/Author: 2026-02-11T00:15:50Z / Codex

## Outcomes & Retrospective

Completed. Harmful duplication patterns were found and remediated in four files:
- `skills/skill-creator/SKILL.md`
- `skills/skill-creator/references/quality-gates.md`
- `skills/project-auditor-improver/references/audit-method.md`
- `skills/deep-researcher/SKILL.md`

Key result: threshold-based policy copies were replaced with canonical shared-reference usage, and high-risk gating now consistently uses `risk_label == high` with `confirm-required-gate` as source of truth.

Residual accepted duplication:
- `skills/REFERENCE-STANDARD.md` still contains five-point score threshold definitions as governance baseline.
- `skills/deep-researcher/references/evidence-quality-rubric.md` contains domain-specific interpretation bands (not a copy of shared policy mechanics).

## Context and Orientation

Skill definitions are in `skills/*/SKILL.md` and topic references in `skills/*/references/*.md`. Shared canonical policy modules live in `skills/shared/references/*.md` and should be referenced rather than copy-pasted when the rule applies across multiple skills. The central policy for this architecture is documented in `skills/REFERENCE-STANDARD.md`.

## Terminology and Decomposition

- Primary Question: Are there remaining non-canonical policy duplications similar to the just-fixed risk gate duplication?
- Sub-question: Which files repeat shared policy thresholds or rule text directly instead of referencing canonical shared modules?
- Sub-question: Which repeated content is intentional (examples, local adaptation) versus harmful duplication?
- Sub-question: What minimal edits remove harmful duplication without reducing clarity?
- Question-to-Evidence Matrix: Candidate matches from `rg` pattern scans, validated by manual file inspection.
- Entry Criteria: Add a new Sub-question only if initial scans reveal a distinct duplication pattern not covered by five-point-score/source/confirm policy families.
- Impediment: None currently.

## Plan of Work

Scan skill and policy markdown for text patterns associated with canonical shared modules. Build a list of candidate duplications, then inspect each candidate in context to classify as intentional reference, acceptable local summary, or true duplication that should be replaced with canonical linking. If true duplications are found, apply minimal text edits only in affected files and re-run a targeted scan to confirm cleanup.

## Concrete Steps

1. Candidate collection:
Run `rg -n` across `skills/` for threshold literals and policy phrases (five-point score bands, risk confirmation thresholds, source-priority/tie-breaker wording).
Expected result: finite list of candidate lines.

2. Manual classification:
Open candidate files and inspect surrounding sections.
Expected result: each candidate tagged as `intentional`, `acceptable`, or `needs fix`.

3. Remediation (conditional):
For each `needs fix`, replace duplicated rule blocks with concise references to `skills/shared/references/*.md`.
Expected result: no harmful duplications remain.

4. Validation:
Re-run `rg -n` patterns and ensure only canonical sources or intentional references remain.
Expected result: scan output aligns with architecture rule in `skills/REFERENCE-STANDARD.md`.

## Validation and Acceptance

Acceptance criteria:
- A complete finding list is produced for duplication patterns relevant to shared references.
- Every finding is classified with rationale.
- Any confirmed problematic duplication is fixed minimally and re-verified.
- Tracker docs are updated with final outcome and evidence.

Verification commands:
- `rg -n "1\\.0-2\\.4|2\\.5-3\\.7|3\\.8-5\\.0|risk_score|risk_label|source priority|conflict tie-breakers" skills`
- `rg -n "shared/references/five-point-scoring-bands|shared/references/source-evidence-policy|shared/references/confirm-required-gate" skills`
- `git diff -- skills`

## Idempotence and Recovery

Scans are read-only and idempotent. Any applied edits are text-only and can be safely rerun by reapplying patches. If a remediation introduces ambiguity, revert only the affected file section and keep evidence in this plan before reattempting.

## Artifacts and Notes

Evidence snapshots:
- Pre-fix scan surfaced duplicates in active skill docs:
  - `skills/skill-creator/SKILL.md` had full threshold table and direct source-priority rules.
  - `skills/skill-creator/references/quality-gates.md` used `risk_score >= 3.8`.
  - `skills/project-auditor-improver/references/audit-method.md` used `risk_score >= 3.8`.
  - `skills/deep-researcher/SKILL.md` duplicated source-priority ordering and date fallback wording.
- Post-fix scan results:
  - No remaining `risk_score >= 3.8` matches in active skill docs.
  - Shared policy references are consistently present where needed.
  - Remaining threshold literals are in `skills/shared/references/five-point-scoring-bands.md`, `skills/REFERENCE-STANDARD.md`, and domain-specific interpretation sections.
- Verification diff confirms only targeted files changed:
  - `skills/skill-creator/SKILL.md`
  - `skills/skill-creator/references/quality-gates.md`
  - `skills/project-auditor-improver/references/audit-method.md`
  - `skills/deep-researcher/SKILL.md`

## Interfaces and Dependencies

N/A - this is a docs/skill-content audit and cleanup task only; no runtime interfaces or dependency graph changes are introduced.

Change note: 2026-02-11T00:13:31Z - Created ExecPlan for duplication-pattern audit across skills and shared policy modules.
Change note: 2026-02-11T00:16:00Z - Recorded findings classification, applied focused deduplication edits, and captured post-fix verification evidence.

