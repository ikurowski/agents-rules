# Split current changes into atomic commits and align project-auditor-improver skill with rules

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Create clear, separated commits from the current documentation/policy changes, then ensure `skills/project-auditor-improver/SKILL.md` conforms to the active repository rule style (especially `Apply <relative-path> for:` usage with scope bullets where modules are imported). The observable outcome is a clean commit history plus rule-consistent `project-auditor-improver` skill documentation.

## Progress

- [x] (2026-02-11T01:02:04Z) Task initialized and current change set reviewed.
- [x] (2026-02-11T01:02:04Z) Defined commit boundaries and staged files by concern.
- [x] (2026-02-11T01:02:04Z) Committed shared policy/reference architecture updates (`69942cc`).
- [x] (2026-02-11T01:02:04Z) Committed skill-level alignment updates (`08d3bc3`).
- [x] (2026-02-11T01:05:15Z) Committed tracker/ExecPlan documentation updates (`cd1d451`).
- [x] (2026-02-11T01:04:03Z) Audited and fixed `skills/project-auditor-improver/SKILL.md` against applied rules; committed (`c736cb2`).

## Surprises & Discoveries

A transient `.git/index.lock` conflict occurred when two git commands were run in parallel; the lock file was not persistent (`Test-Path .git/index.lock` returned `False`) and sequential execution resolved it.

## Decision Log

Decision: Keep commits concern-based in this order: policy standardization, skill content alignment, tracking artifacts, then targeted `project-auditor-improver` compliance fix.
Rationale: Preserves atomicity and keeps review/rollback straightforward.
Timestamp/Author: 2026-02-11T01:02:04Z / Codex

Decision: Treat the user's "pod względem stosowanych zasad" as conformance to active style/consumption rules, not scope expansion into unrelated skills.
Rationale: The user explicitly pointed to `skills/project-auditor-improver/SKILL.md`.
Timestamp/Author: 2026-02-11T01:02:04Z / Codex

## Outcomes & Retrospective

Completed. Four atomic commits were created for policy updates, skill alignment, focused `project-auditor-improver` conformance, and tracker/ExecPlan documentation updates.

## Context and Orientation

Current workspace contains modified policy files (`AGENTS.md`, shared references, `skills/REFERENCE-STANDARD.md`), active skill docs (`skills/*/SKILL.md`), and tracker docs (`tasks/todo.md`, `tasks/lessons.md`) plus untracked ExecPlans in `tasks/plans/`. `project-auditor-improver` skill currently references shared modules but has sections that may not fully match the strict `Apply ... for:` + scoped bullet pattern.

## Terminology and Decomposition

N/A - this task is implementation/cleanup and commit orchestration, not research decomposition.

## Plan of Work

Inspect full diff and assign files to atomic commit buckets. Stage and commit each bucket with Conventional Commit messages. Then re-audit `skills/project-auditor-improver/SKILL.md` against current rules in `AGENTS.md` and `skills/REFERENCE-STANDARD.md`; apply minimal edits only in that file (or its immediate linked rule context if strictly required), run text-based validation scans, and create a final focused commit.

## Concrete Steps

1. Use `git diff --name-only` and per-file diffs to establish commit buckets.
2. Stage first bucket and run `git commit -m "docs(agents): ..."`.
3. Stage second bucket and run `git commit -m "docs(skills): ..."`.
4. Stage tracking artifacts (`tasks/todo.md`, `tasks/lessons.md`, `tasks/plans/*`) and commit.
5. Edit `skills/project-auditor-improver/SKILL.md` for strict rule conformance; validate with `rg` checks; commit.

## Validation and Acceptance

Acceptance criteria:
- Commits are atomic and concern-separated.
- `skills/project-auditor-improver/SKILL.md` follows the active import-style rules.
- Working tree after final commit contains no unintended unstaged changes introduced by this task.

Verification commands:
- `git log --oneline -n <N>`
- `git show --name-only <sha>` for each new commit
- `rg -n "Apply `|Local Extension|## Shared Policy Modules|## Progressive Disclosure" skills/project-auditor-improver/SKILL.md`

## Idempotence and Recovery

If a file is staged in the wrong commit, use `git reset HEAD <file>` before committing to reassign it. If a commit message/scope is wrong, create a follow-up commit instead of amending unless explicitly requested.

## Artifacts and Notes

Created commits:
- `69942cc` `docs(policy): enforce single-source rule consumption`
- `08d3bc3` `docs(skills): align shared-rule usage across active skills`
- `c736cb2` `docs(project-auditor): normalize shared module apply format`

Validation evidence:
- `rg -n -P 'Apply `[^`]+` for(?!:)' skills/project-auditor-improver/SKILL.md` returned no matches (exit code `1`), confirming no non-colon `Apply ... for` usage.
- `rg -n '## Shared Policy Modules|## Progressive Disclosure|^- Apply `' skills/project-auditor-improver/SKILL.md` confirmed expected `Apply ... for:` blocks in both sections.

## Interfaces and Dependencies

N/A - documentation/policy-only changes.

Change note: 2026-02-11T01:02:04Z - Created ExecPlan for split-commit orchestration and `project-auditor-improver` rule-conformance update.
Change note: 2026-02-11T01:04:03Z - Recorded three completed commits and conformance validation for `project-auditor-improver`; tracker commit still pending.
Change note: 2026-02-11T01:05:15Z - Marked tracker/ExecPlan commit completion and finalized outcomes.
