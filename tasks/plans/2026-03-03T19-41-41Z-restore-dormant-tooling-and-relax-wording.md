# Restore dormant tooling files and relax strict markdown-first wording

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The user wants to keep root tooling files available for possible future use while avoiding over-committing the repository to a permanent markdown-only state. After this change, the repo should still read as markdown-first today, but the dormant files `package.json`, `eslint.config.mjs`, and `.prettierrc.json` should exist again as lightweight future-facing scaffolding. Policy text should stop forbidding script-based skill internals or claiming that no runtime/toolchain will ever exist.

## Progress

- [x] (2026-03-03T19:41:41Z) Initial task entry.
- [x] (2026-03-03T19:42:00Z) Reopened tracker with a new active task that supersedes the immediately prior strict cleanup.
- [x] (2026-03-03T19:43:00Z) Restored dormant tooling files with only the requested cleanup to ESLint ignore entries.
- [x] (2026-03-03T19:44:00Z) Relaxed markdown-first and skill-structure wording in active docs and tracker text.
- [x] (2026-03-03T19:45:00Z) Validated restored files and final wording, then recorded the outcome.

## Surprises & Discoveries

The previous cleanup is still only in the working tree, so restoring the requested files can be done surgically from `HEAD` content without reconstructing them from scratch. `eslint.config.mjs` originally contained several ignore entries for deleted generated outputs; the user explicitly asked to remove `artifacts/**`, `generated/**`, and `contracts/**` rather than restoring the file verbatim.

## Decision Log

Decision: restore only `package.json`, `eslint.config.mjs`, and `.prettierrc.json`, not the full previously removed root stack.  
Rationale: the user explicitly named those files and asked to keep them for the future; restoring additional files would widen scope.  
Timestamp/Author: 2026-03-03T19:41:41Z / agent

Decision: keep the repo described as markdown-first "for now" rather than permanently runtime-free.  
Rationale: the user wants current state reflected without foreclosing a future runtime/tooling layer.  
Timestamp/Author: 2026-03-03T19:41:41Z / agent

Decision: remove the skill-directory prohibition on `.ts`/`.js` files from the shared skill standard.  
Rationale: the user explicitly rejected that rule as unnecessary policy.  
Timestamp/Author: 2026-03-03T19:41:41Z / agent

## Outcomes & Retrospective

Completed. `package.json`, `eslint.config.mjs`, and `.prettierrc.json` were restored as dormant root scaffolding. `eslint.config.mjs` no longer ignores `artifacts/**`, `generated/**`, or `contracts/**`. `README.md` now describes the repo as markdown-first for the moment rather than permanently runtime-free, and `skills/REFERENCE-STANDARD.md` no longer forbids future `.ts`/`.js` files inside skill directories. This intentionally softens the immediately previous strict cleanup without reintroducing the removed runtime architecture.

## Context and Orientation

Root repo guidance lives in `README.md` and `AGENTS.md`. Shared skill policy lives in `skills/REFERENCE-STANDARD.md`. Task state lives in `tasks/todo.md`, which currently records the immediately previous strict cleanup as completed. This follow-up task reintroduces a minimal dormant toolchain surface while keeping the repository primarily centered on markdown governance, skills, and task history.

## Terminology and Decomposition

N/A - this is a repository cleanup/rollback task, not a research campaign.

## Plan of Work

First, reopen `tasks/todo.md` with a new active task entry so the tracker matches the new user instruction. Next, re-add `package.json`, `eslint.config.mjs`, and `.prettierrc.json` using their recent root versions as a baseline, but remove the requested obsolete ESLint ignore entries. Then edit `README.md` so it says the repository is markdown-first at the moment rather than permanently runtime-free, and edit `skills/REFERENCE-STANDARD.md` to remove the rejected no-`.ts`/`.js` skill-directory rule. Finally, update `tasks/todo.md` and this plan with validation evidence and outcomes.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Add this plan to `tasks/todo.md` as the active task.
2. Recreate `package.json`, `eslint.config.mjs`, and `.prettierrc.json` with `apply_patch`.
3. Edit the README and skill reference standard wording to match the user's requested posture.
4. Validate with `Test-Path`, `Get-Content`, and `rg` searches for the removed ESLint ignore entries and the rejected wording.

Expected results:

- the three named root tooling files exist again,
- `eslint.config.mjs` no longer contains `artifacts/**`, `generated/**`, or `contracts/**`,
- active docs describe the repo as markdown-first currently, not permanently runtime-free,
- shared skill policy no longer forbids `.ts`/`.js` files inside `skills/*`.

## Validation and Acceptance

Acceptance is satisfied when:

1. `Test-Path` returns `True` for `package.json`, `eslint.config.mjs`, and `.prettierrc.json`.
2. `rg` does not find `artifacts/**`, `generated/**`, or `contracts/**` in `eslint.config.mjs`.
3. `README.md` no longer says that no root runtime/toolchain is maintained here.
4. `skills/REFERENCE-STANDARD.md` no longer contains the removed `.ts`/`.js` prohibition.
5. `tasks/todo.md` accurately records this follow-up task and its outcome.

## Idempotence and Recovery

This task is idempotent at the file-content level: rerunning the restore patch should keep the same file contents. If a future change wants to fully remove or fully activate the toolchain, that should happen in a separate task with updated tracker entries rather than by partially editing these files again without documentation.

## Artifacts and Notes

Validation evidence to capture:

- `Test-Path` for the restored files
- `rg` scan for removed ESLint ignore entries
- final `tasks/todo.md`

Captured evidence:

- `Test-Path` returned `True` for `package.json`, `eslint.config.mjs`, and `.prettierrc.json`.
- `rg -n "artifacts/\\*\\*|generated/\\*\\*|contracts/\\*\\*|declarative-only|Do not add \`\\.ts\` or \`\\.js\` runtime scripts|no root Node/TypeScript runtime or validation toolchain is maintained here" README.md skills/REFERENCE-STANDARD.md eslint.config.mjs` returned no matches.
- `README.md` now says the workspace is markdown-first "at the moment" and `skills/REFERENCE-STANDARD.md` keeps only workflow-specific guidance.

## Interfaces and Dependencies

N/A - the task restores dormant config/manifests but does not add or verify a working runtime interface.

Change note: 2026-03-03T19:41:41Z - Created plan to restore selected tooling files and relax wording after user reversed part of the strict cleanup.
Change note: 2026-03-03T19:45:00Z - Recorded validation evidence and outcome after restoring the requested dormant tooling files and adjusting wording.
