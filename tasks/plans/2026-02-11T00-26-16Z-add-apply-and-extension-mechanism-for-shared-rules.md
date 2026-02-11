# Add `Apply ...` and extension mechanism for shared rules

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Introduce a clear, reusable mechanism for using and extending shared rules without reintroducing duplication drift. The user-visible outcome is a documented project standard for `Apply <shared-ref> for ...` usage plus aligned wording in active skill workflow steps (especially evidence policy and step-level guidance).

## Progress

- [x] (2026-02-11T00:26:16Z) Initialized task and reviewed active skill docs and standards.
- [x] (2026-02-11T00:27:20Z) Defined canonical reuse/extension protocol in `skills/REFERENCE-STANDARD.md`.
- [x] (2026-02-11T00:27:50Z) Applied protocol wording in active skill docs where shared rules are consumed.
- [x] (2026-02-11T00:28:10Z) Re-scanned for drift-prone duplication patterns and finalized tracker updates.

## Surprises & Discoveries

The previous deduplication pass removed thresholds, but there was still no explicit "how to extend without copy-paste drift" protocol. A formal pattern was needed in standards, not just in individual fixes.

## Decision Log

Decision: Implement mechanism centrally in `skills/REFERENCE-STANDARD.md` and then align high-signal call sites in `SKILL.md` files.
Rationale: Keeps rule authority in one place and reduces future wording drift across skills.
Timestamp/Author: 2026-02-11T00:26:16Z / Codex

Decision: Add local-extension constraints both in global standard and in `source-evidence-policy.md`.
Rationale: Evidence policy is the most reused shared module and needed explicit extension boundaries closest to usage.
Timestamp/Author: 2026-02-11T00:27:35Z / Codex

## Outcomes & Retrospective

Completed. Added a reusable mechanism for shared rule consumption and extension:

- global protocol in `skills/REFERENCE-STANDARD.md` (`Apply ... for`, `Local Extension`, promotion-to-shared rule),
- local extension protocol in `skills/shared/references/source-evidence-policy.md`,
- aligned wording across active skill docs to use `Apply ... for` consistently.

This directly supports your intended direction: extend rules safely, but keep canonical logic in shared references.

## Context and Orientation

Shared policy modules are under `skills/shared/references/*.md`. Skill-level behavior contracts are in `skills/*/SKILL.md`. The architecture already encourages shared modules, but lacks a strict textual protocol for how to reference and locally extend them without copying base policy blocks.

## Terminology and Decomposition

- Primary Question: How should skills consume shared policies so they can extend behavior safely without duplicating canonical rules?
- Sub-question: What exact textual pattern should be mandatory for shared-policy usage?
- Sub-question: How should local extensions be declared and constrained?
- Sub-question: Which current skill sections should be updated first to reflect the pattern?
- Question-to-Evidence Matrix: Evidence from `skills/REFERENCE-STANDARD.md` and current policy usage in `skills/*/SKILL.md`.
- Entry Criteria: Add a new Sub-question only if a distinct shared-policy family needs different extension semantics.
- Impediment: None currently.

## Plan of Work

Add a new section to `skills/REFERENCE-STANDARD.md` defining:
1) canonical `Apply <path> for:` pattern,
2) optional `Local Extension` block constraints,
3) promotion rule for moving repeated extensions into shared references.

Then update active skill sections to use this pattern explicitly for source/evidence and risk gating, while keeping changes surgical and preserving existing behavior.

## Concrete Steps

1. Edit `skills/REFERENCE-STANDARD.md` to add shared-rule reuse protocol and extension lifecycle.
Expected result: one authoritative mechanism documented.

2. Edit skill docs (`skills/skill-creator/SKILL.md`, `skills/deep-researcher/SKILL.md`, `skills/project-auditor-improver/SKILL.md`) to align shared-policy wording with the protocol.
Expected result: sections use `Apply ... for ...` phrasing and avoid duplicated rule blocks.

3. Validate with targeted scans for threshold/source-order drift.
Expected result: no new drift-prone duplicate blocks in active skill docs.

## Validation and Acceptance

Acceptance criteria:
- Shared-rule protocol exists in `skills/REFERENCE-STANDARD.md`.
- Skill docs use consistent `Apply ... for ...` phrasing where shared policy is consumed.
- No contradictory threshold/source-order duplicates are introduced.
- `tasks/todo.md` and this plan capture completion and evidence.

Verification commands:
- `rg -n "Apply `.*shared/references|Local Extension|promotion rule|shared policy" skills`
- `rg -n "risk_score >= 3.8|Current-year primary sources|date not published; verified on YYYY-MM-DD" skills`
- `git diff -- skills/REFERENCE-STANDARD.md skills/*/SKILL.md`

## Idempotence and Recovery

Edits are documentation-only and idempotent. If wording causes ambiguity, restore only the affected paragraph and reapply the protocol wording. Re-running verification scans is safe and side-effect free.

## Artifacts and Notes

Execution evidence:
- `skills/REFERENCE-STANDARD.md` now contains `## Shared Rule Consumption Pattern` with explicit formatting and constraints.
- `skills/shared/references/source-evidence-policy.md` now contains `## Local Extension Protocol`.
- `skills/skill-creator/SKILL.md` Evidence/Security sections now use `Apply ... for` + `Local Extension (skill-specific)`.
- `skills/deep-researcher/SKILL.md` Step 3 now uses `Apply ... for` + `Local Extension (step-specific)`.
- `skills/project-auditor-improver/SKILL.md` shared module section now uses consistent `Apply ... for`.
- `skills/skill-creator/references/research-evidence.md` and `skills/skill-creator/references/maintenance-security.md` aligned to the same pattern.

Validation snippets:
- `rg -n "risk_score\\s*>=\\s*3\\.8" skills` returned no matches.
- `rg -n "date not published; verified on YYYY-MM-DD" skills` returned only `skills/shared/references/source-evidence-policy.md`.
- `rg -n "Apply `.*shared/references.*for:|Local Extension \\(skill-specific\\)|Local Extension \\(step-specific\\)" skills` confirms pattern presence in active docs.

## Interfaces and Dependencies

N/A - this task changes documentation/policy text only; no runtime interfaces or dependency changes.

Change note: 2026-02-11T00:26:16Z - Created ExecPlan for introducing shared-rule apply/extension mechanism and aligning active skills.
Change note: 2026-02-11T00:28:10Z - Marked execution complete with protocol rollout and verification evidence.
