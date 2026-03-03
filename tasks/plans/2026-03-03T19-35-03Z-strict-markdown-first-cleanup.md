# Enforce strict markdown-first repository state

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The repository already claims to be a markdown-first workspace, but the tracked tree still contains root Node/TypeScript tooling files and policy text that points to deleted runtime/contracts paths. After this cleanup, the repo should present one consistent operating model: governance docs, skill markdown/YAML content, and task history only. A contributor should be able to inspect the root tree and find no package manager manifest, no TS/ESLint/Prettier toolchain files, and no active docs that refer to deleted runtime layers.

## Progress

- [x] (2026-03-03T19:35:03Z) Initial task entry.
- [x] (2026-03-03T19:36:00Z) Updated task tracker with the active plan and explicit assumptions.
- [x] (2026-03-03T19:38:00Z) Removed root toolchain artifacts and simplified leftover ignore rules.
- [x] (2026-03-03T19:39:00Z) Removed dead runtime/contracts references from active policy and skill docs.
- [x] (2026-03-03T19:41:00Z) Validated final tree and tracker consistency, then recorded outcome.

## Surprises & Discoveries

Initial audit found that `package.json`, `tsconfig.json`, `eslint.config.mjs`, and `.prettierrc.json` were still tracked even though the immediately preceding cleanup plan and `tasks/todo.md` claimed they were removed. `tasks/todo.md` also pointed to a deleted historical plan file from 2026-02-17, so the high-level tracker contained a broken path. The leftover empty directory `skills/deep-researcher/agents` was not tracked and required direct filesystem removal rather than a patch.

## Decision Log

Decision: interpret the user's `strict markdown-first` choice as confirmation that root Node/TypeScript tooling should be removed, not repaired.  
Rationale: the user chose the strict option after an audit that identified the current toolchain as leftover noise rather than a maintained pipeline.  
Timestamp/Author: 2026-03-03T19:35:03Z / agent

Decision: keep declarative skill YAML files such as `skills/deep-researcher/workflow/flow.yaml` unless they are clearly broken or empty.  
Rationale: the repo purpose still includes reusable skill content, and declarative workflow files fit that scope even without a local parser/runtime.  
Timestamp/Author: 2026-03-03T19:35:03Z / agent

Decision: preserve historical task entries but repair broken tracker references and stale factual claims where they conflict with the current tracked tree.  
Rationale: task history remains useful, but `tasks/todo.md` is also an operational starting point and cannot keep broken links or false statements.  
Timestamp/Author: 2026-03-03T19:35:03Z / agent

## Outcomes & Retrospective

Completed. The repository now matches the strict markdown-first direction: root Node/TypeScript/ESLint/Prettier toolchain files are gone, `.gitignore` no longer describes old build outputs, and active policy docs no longer point to deleted JSDoc contract docs, schemas, engines, or npm gates. `tasks/todo.md` was repaired so it no longer points to a missing historical plan and no longer claims the previous cleanup already removed tooling that was still present. The only remaining references to removed architecture are intentionally archival inside historical ExecPlans.

## Context and Orientation

Active repository content lives at the root plus `skills/` and `tasks/`. `AGENTS.md`, `PLANS.md`, and `README.md` define operating rules and repo purpose. `skills/REFERENCE-STANDARD.md` defines shared conventions for skill docs and currently contains stale references to removed runtime/contracts paths. `tasks/todo.md` is the task tracker and must stay accurate because agents read it at startup. The current cleanup removes toolchain files at repo root and aligns the remaining policy docs with the repo's reduced markdown-first scope.

## Terminology and Decomposition

N/A - this is a repository cleanup task, not a research campaign.

## Plan of Work

First, add this plan to `tasks/todo.md` as the active task so the tracker reflects ongoing work. Next, delete root files that only supported the removed Node/TypeScript runtime (`package.json`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`) and simplify `.gitignore` so it no longer carries build-output noise from the old stack. Then edit `AGENTS.md` and `skills/REFERENCE-STANDARD.md` to remove dead references to deleted docs, schemas, engines, and npm gates. Repair `tasks/todo.md` so historical entries do not claim deleted tooling still exists or point at missing plan files. Finally, remove any empty leftover directories and verify the final tracked tree plus active-file reference scan.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Update `tasks/todo.md` with an `## Active Task` section pointing to this plan.
2. Delete root toolchain files with patch edits rather than shell deletion so the diff is explicit.
3. Patch `.gitignore`, `AGENTS.md`, `README.md` if needed, `skills/REFERENCE-STANDARD.md`, and `tasks/todo.md` to match the strict markdown-first model.
4. Validate with `git ls-files`, `Test-Path`, `Get-ChildItem`, and `rg` searches for removed paths such as `src/contracts`, `src/skills-engine`, `docs/jsdoc-contract.md`, `skills:declarative:check`, and `npm run ci`.

Expected results:

- no root package/tooling files remain,
- active docs no longer describe deleted runtime/contracts paths,
- `tasks/todo.md` contains one accurate active task during execution and no broken historical plan path afterward,
- tracked tree contains only repo-purpose files for markdown governance, skills, and task history.

## Validation and Acceptance

Acceptance is satisfied when:

1. `git ls-files` no longer lists `package.json`, `tsconfig.json`, `eslint.config.mjs`, or `.prettierrc.json`.
2. `Test-Path` returns `False` for those removed files and for the empty leftover `skills/deep-researcher/agents` directory if removed.
3. `rg` scans across active files no longer show `docs/jsdoc-contract.md`, `src/contracts/skills/research-campaign-summary.schema.ts`, `src/skills-engine`, `skills:declarative:check`, or `npm run ci`, except where intentionally preserved in archival plan prose.
4. `tasks/todo.md` has accurate status/outcome text and no `ExecPlan` path to a missing file.

## Idempotence and Recovery

This cleanup is idempotent: rerunning the file deletions or doc patches should leave the same reduced tree. Recovery from a partial failure should use `git diff` and targeted file restoration if needed; do not use destructive reset commands because the repo may receive new user edits during the session.

## Artifacts and Notes

Validation evidence to capture:

- `git ls-files`
- `Test-Path` checks for removed files
- `rg` scans for dead references
- final `tasks/todo.md` snapshot

Captured evidence:

- `Test-Path` returned `False` for `package.json`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`, and `skills/deep-researcher/agents`.
- Root `Get-ChildItem -Force` now shows only `.gitignore`, `AGENTS.md`, `PLANS.md`, `README.md`, `skills/`, and `tasks/` as tracked-relevant workspace content.
- `rg -n "docs/jsdoc-contract.md|src/contracts/skills/research-campaign-summary.schema.ts|src/skills-engine|skills:declarative:check|npm run ci" AGENTS.md README.md PLANS.md skills tasks/todo.md` returned no matches.

## Interfaces and Dependencies

N/A - the task removes repo-local tooling dependencies rather than adding or changing runtime interfaces.

Change note: 2026-03-03T19:35:03Z - Created plan for strict markdown-first cleanup after audit and explicit user direction.
Change note: 2026-03-03T19:41:00Z - Recorded validation evidence and final outcome after removing toolchain leftovers and dead references.
