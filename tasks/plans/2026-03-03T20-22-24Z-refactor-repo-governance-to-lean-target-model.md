# Refactor repository governance to the lean target model from the 2026-03-03 research

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Refactor the repository so its structure and policy density match the lean target model identified in the 2026-03-03 research assessment. After this work, the repository should keep its good high-level split (`README.md`, `AGENTS.md`, `PLANS.md`, `skills/`, `tasks/`, `docs/standards/`) while reducing governance weight, unused shared policy modules, and boundary ambiguity between repo-wide rules, plan rules, skill-local workflow, and task history. Observable outcome: a smaller and clearer instruction surface where each file has one obvious job and self-validation can detect policy drift without adding another heavy process layer.

## Progress

- [x] (2026-03-03T20:22:24Z) Initial planning task created from the completed research findings.
- [x] (2026-03-03T20:28:25Z) Phase 1 completed: shortened `AGENTS.md`, made `PLANS.md` the explicit owner of ExecPlan trigger/lifecycle, and expanded `README.md` with relationship/validation sections.
- [x] (2026-03-03T20:28:25Z) Phase 2 completed: simplified `skills/REFERENCE-GUIDE.md`, removed dead shared policy, and demoted single-skill principle review guidance into `skills/deep-researcher/references/`.
- [x] (2026-03-03T20:28:25Z) Phase 3 completed: documented a lightweight self-validation routine in `README.md` and captured supporting verification evidence.

## Surprises & Discoveries

The immediately preceding research found that the repository is directionally strong but heavier than its current scale requires. The most concrete local signal is that `skills/shared/references/confirm-required-gate.md` appears to be a dead shared module: it is listed in `skills/REFERENCE-GUIDE.md` but does not have live imports elsewhere. Another important discovery is that the main source of excess weight is not top-level structure but policy layering: `AGENTS.md`, `PLANS.md`, `skills/REFERENCE-GUIDE.md`, shared references, skill-local references, `tasks/todo.md`, and ExecPlans together create more procedural surface area than the current repository size strictly justifies.

Execution confirmed that the overgrowth was concentrated in a few places, not everywhere. The most productive cuts were:

- shrinking `AGENTS.md` from a broad process manual into a repo-wide contract,
- removing shared modules that did not have two real consumers,
- moving the principle-effectiveness review back into the only skill that currently uses it,
- placing self-validation in `README.md` instead of creating another standards/policy layer.

The Git working tree was already dirty before this task. Existing unrelated changes were left untouched.

## Decision Log

Decision: plan the refactor as a repository-governance cleanup rather than a structural rewrite.  
Rationale: the research concluded that the top-level model is fundamentally good; the main problem is over-formalization and blurred responsibility boundaries, not the existence of the top-level directories themselves.  
Timestamp/Author: 2026-03-03T20:22:24Z / Codex

Decision: keep `README.md`, `AGENTS.md`, `PLANS.md`, `skills/`, `tasks/`, and `docs/standards/` in the target model unless execution uncovers stronger evidence to remove one.  
Rationale: the research recommended simplification inside the existing frame, not expansion or collapse for its own sake.  
Timestamp/Author: 2026-03-03T20:22:24Z / Codex

Decision: treat unused shared reference modules as suspect by default and require at least two live consumers before a rule remains in `skills/shared/references/`.  
Rationale: this directly implements the anti-sprawl recommendation from the research.  
Timestamp/Author: 2026-03-03T20:22:24Z / Codex

Decision: keep `docs/standards/jsdoc-api-contracts.md` in place for now.  
Rationale: it already has a narrow, canonical role and does not materially contribute to policy sprawl after `AGENTS.md` was shortened around it.  
Timestamp/Author: 2026-03-03T20:28:25Z / Codex

Decision: document self-validation in `README.md` instead of adding a new standalone policy file or script.  
Rationale: this keeps the validation routine visible and repeatable without adding another governance layer or runtime surface.  
Timestamp/Author: 2026-03-03T20:28:25Z / Codex

## Outcomes & Retrospective

Completed. The repository now matches the lean target model more closely without changing its top-level shape. `AGENTS.md` is now a short repo-wide contract, `PLANS.md` explicitly owns ExecPlan trigger/lifecycle, `README.md` explains top-level relationships and lightweight self-validation, `skills/REFERENCE-GUIDE.md` focuses on promotion/consumption rules only, and unused or single-consumer shared modules were removed or demoted. The remaining governance density is now concentrated in the one active skill rather than spread across the whole repository.

## Context and Orientation

Current root source-of-truth files:

- `README.md`: human-facing repository map.
- `AGENTS.md`: repository-wide operational policy for agents.
- `PLANS.md`: canonical ExecPlan format and lifecycle policy.

Current governance-heavy areas:

- `skills/REFERENCE-GUIDE.md`: shared conventions for skill references and shared module usage.
- `skills/shared/references/*`: reusable policy modules that can be imported by multiple skills.
- `skills/deep-researcher/*`: the one currently active executable skill, with local references and workflow spec.
- `tasks/todo.md`: task tracker and current/historical outcomes.
- `tasks/plans/*`: detailed execution records.

Current standards area:

- `docs/standards/jsdoc-api-contracts.md`: a repo-wide canonical policy file that is valid only if the repository still wants to preserve a JSDoc contract standard during its markdown-first phase.

The target model from the research is:

1. `README.md` = concise repo map and relationship explainer.
2. `AGENTS.md` = short repo-wide contract only.
3. `PLANS.md` = the only place that defines ExecPlan rigor and lifecycle.
4. `skills/<skill>/` = skill-local workflow and references.
5. `skills/shared/` = only genuinely shared modules with at least two live consumers.
6. `docs/standards/` = only durable, active repo-wide standards.
7. `tasks/` = state, plans, evidence, and lessons; not another policy layer.

## Plan of Work

Execute the refactor in three phases.

Phase 1 rewrites the root source-of-truth boundaries without changing the high-level repository shape. Shorten `AGENTS.md` so it contains only stable repo-wide rules, instruction hierarchy, and pointers to canonical docs. Narrow `PLANS.md` so it solely owns plan structure/lifecycle and does not rely on duplication in `AGENTS.md`. Expand `README.md` slightly so it explains the relationship between root docs and subdirectories in one concise section.

Phase 2 simplifies the skill and reference layer. Audit `skills/REFERENCE-GUIDE.md`, `skills/shared/references/*`, and `skills/deep-researcher/*` to remove dead or premature sharing. Collapse or delete shared modules that do not have at least two live consumers. Keep skill-local guidance inside `skills/deep-researcher/` unless there is present-day evidence of true reuse. Ensure the remaining guide text describes promotion rules clearly and minimally.

Phase 3 installs lightweight self-validation. Add a small documented validation routine that checks link/path integrity, finds unused shared modules, verifies `tasks/todo.md` active-task semantics, and scans for duplicated normative rules outside canonical files. Keep this routine intentionally small; it should validate the lean model rather than become a new layer of governance machinery.

## Concrete Steps

From `c:\Users\igork\Desktop\agent`:

1. Review the research plan at `tasks/plans/2026-03-03T20-11-43Z-assess-markdown-first-repo-organization.md` and extract the accepted target model, risks, and simplification recommendations.
2. Edit `AGENTS.md`, `PLANS.md`, and `README.md` to make the root contract shorter and sharper:
   - move plan-format detail fully into `PLANS.md`,
   - remove repeated lifecycle/process details from `AGENTS.md`,
   - add one concise relationship section to `README.md`.
3. Audit `skills/REFERENCE-GUIDE.md` and every file in `skills/shared/references/`:
   - record consumer count for each shared module,
   - delete or merge modules with fewer than two live consumers,
   - rewrite the guide so it describes promotion/demotion rules in a short form.
4. Audit `skills/deep-researcher/SKILL.md`, `skills/deep-researcher/references/*`, and `skills/deep-researcher/workflow/flow.yaml`:
   - keep domain workflow locally,
   - trim boilerplate that merely restates shared guidance,
   - preserve only reusable imports that still have clear value.
5. Decide whether `docs/standards/jsdoc-api-contracts.md` remains an active standard:
   - keep it if the repo still wants a dormant but real canonical standard for future code,
   - otherwise archive or remove it and delete the pointer from `AGENTS.md`.
6. Add a lightweight validation document or command entry that checks:
   - broken local doc links/paths,
   - unused shared modules,
   - duplicate normative rules in multiple files,
   - `tasks/todo.md` tracker shape.
7. Update `tasks/todo.md` and this ExecPlan with evidence and final outcomes.

## Validation and Acceptance

The refactor is accepted when all of the following are true:

1. `AGENTS.md` is materially shorter and reads as a repo-wide contract rather than a full process manual.
2. `PLANS.md` is the only canonical source for ExecPlan structure and lifecycle detail.
3. `README.md` explains the relationship between the top-level docs/directories in one concise section.
4. Every file under `skills/shared/references/` has at least two live consumers, or the file was intentionally removed/merged during the refactor.
5. `skills/REFERENCE-GUIDE.md` is shorter and focused on promotion rules and reference structure, not broad meta-governance.
6. `skills/deep-researcher/` keeps only the level of modularity justified by present-day reuse.
7. `docs/standards/jsdoc-api-contracts.md` is either explicitly retained as an active canonical standard with a clear rationale or removed as dead governance.
8. A lightweight validation routine exists and can be run repeatably.
9. `tasks/todo.md` remains accurate and retains only high-level task metadata.

## Idempotence and Recovery

This refactor is safe to execute iteratively because it is primarily documentation and repository-organization work. If a simplification step removes too much guidance, recover by restoring only the minimal text needed to preserve a clear owner for that rule; do not re-add broad surrounding prose. If a shared module is removed and later a second live consumer appears, re-promote the common rule into `skills/shared/references/` at that time rather than preemptively. If the validation routine proves too heavy, scale it back to the smallest useful set of checks instead of expanding documentation to justify it.

## Artifacts and Notes

Research basis for this plan:

- `tasks/plans/2026-03-03T20-11-43Z-assess-markdown-first-repo-organization.md`
- conclusion: keep top-level shape, reduce meta-governance density, shorten `AGENTS.md`, narrow `PLANS.md`, simplify `skills/shared/*`, and add only lightweight self-validation

Known likely edit targets:

- `AGENTS.md`
- `PLANS.md`
- `README.md`
- `skills/REFERENCE-GUIDE.md`
- `skills/shared/references/confirm-required-gate.md`
- `skills/shared/references/*` (consumer audit)
- `skills/deep-researcher/SKILL.md`
- `skills/deep-researcher/references/*`
- `skills/deep-researcher/workflow/flow.yaml`
- `docs/standards/jsdoc-api-contracts.md`
- `tasks/todo.md`

Known likely verification commands:

- `rg -n "confirm-required-gate|research-campaign-model|source-evidence-policy|five-point-scoring-bands|principle-effectiveness-review" skills`
- `rg -n "Planning by Default for Non-Trivial Work|Keep TODO High-Level|Active Task Semantics" AGENTS.md PLANS.md README.md skills docs tasks`
- `Get-Content -Raw tasks/todo.md`
- additional local path/link checks to be defined during execution

Execution evidence:

- line counts after refactor:
  - `AGENTS.md`: 48
  - `PLANS.md`: 85
  - `README.md`: 34
  - `skills/REFERENCE-GUIDE.md`: 52
  - `skills/deep-researcher/SKILL.md`: 271
- shared-reference reuse after cleanup:
  - `five-point-scoring-bands.md`: 5 consumers
  - `research-campaign-model.md`: 2 consumers
  - `source-evidence-policy.md`: 2 consumers
- removed shared modules:
  - `skills/shared/references/confirm-required-gate.md`
  - `skills/shared/references/principle-effectiveness-review.md`
- demoted to skill-local reference:
  - `skills/deep-researcher/references/principle-effectiveness-review.md`
- `git diff --stat` for this refactor reported 85 insertions and 319 deletions in tracked files, confirming net simplification.

## Interfaces and Dependencies

N/A. This is a repository-governance and documentation refactor, not an interface or runtime dependency change.

Change note: 2026-03-03T20:22:24Z - Created the execution plan for the full governance refactor that aligns the repository with the lean target model from the completed research.
Change note: 2026-03-03T20:28:25Z - Recorded completed execution, kept the JSDoc standard, removed dead shared modules, and documented lightweight self-validation in `README.md`.
