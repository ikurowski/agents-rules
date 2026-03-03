# Simplify repository by removing heavy runtime layers

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The repository should be simplified into a markdown-first workspace. The user has now expanded the removal scope from selected runtime layers to all of `src/`, all of `docs/`, and all of `evals/`. After this change, the repository should contain only the operational markdown files and declarative skill content that still make sense without a local runtime or TypeScript toolchain. A contributor should be able to inspect the tree and see no runtime/eval directories and no dead package/tooling files that imply code still exists here.

## Progress

- [x] (2026-03-03T18:00:00Z) Initial task entry.
- [x] (2026-03-03T18:09:00Z) Removed all tracked files under `src/`, `docs/`, and `evals/`, plus dependent runtime/eval files.
- [x] (2026-03-03T18:09:00Z) Removed dependent tooling and skill content that no longer fits a markdown-first workspace.
- [x] (2026-03-03T18:09:00Z) Validated the final reduced tree with repository scans and top-level inventory.

## Surprises & Discoveries

The working tree already contains many user-made deletions in `tasks/plans/*` and `.github/workflows/ci.yml`. Those changes are treated as intentional and must not be reverted. After the first cleanup pass, `src`, `docs`, and `evals` were already absent as directories, but several top-level files (`AGENTS.md`, `README.md`, `package.json`, tooling configs) and one skill (`skills/jsdoc-reviewer`) still described the deleted architecture. The simplification therefore needs a second pass focused on source-of-truth cleanup rather than directory deletion alone.

## Decision Log

Decision: keep the repo as a lightweight policy/skills workspace and remove dependent runtime/eval checks instead of replacing them with stubs.  
Rationale: the user explicitly wants the heavy runtime architecture removed, so preserving its command surface with placeholder code would keep maintenance cost without user value.  
Timestamp/Author: 2026-03-03T18:00:00Z / agent

Decision: preserve only checks that still make sense without the removed runtime layers (`lint`, `typecheck`, `test`, `jsdoc:check`, `skills:declarative:check`, `security:agent`) unless a remaining dependency forces further reduction.  
Rationale: this keeps a useful quality baseline while aligning with the user's simplification goal.  
Timestamp/Author: 2026-03-03T18:00:00Z / agent

Decision: after the user expanded scope to all of `src/`, `docs/`, and `evals/`, remove `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, and Prettier config files instead of trying to preserve CLI gates without source code.  
Rationale: keeping the toolchain after removing all code would leave a misleading and non-runnable contract. The simpler and more honest repository is markdown-only.  
Timestamp/Author: 2026-03-03T18:09:00Z / agent

Decision: remove `skills/jsdoc-reviewer` because it depends on deleted code/docs standards and no longer has a valid workspace target.  
Rationale: a skill that audits exported APIs is out of place once the repository intentionally contains no source tree.  
Timestamp/Author: 2026-03-03T18:09:00Z / agent

## Outcomes & Retrospective

Completed. The repository is now reduced to a markdown-first workspace with root governance files plus `skills/` and `tasks/`. All tracked files under `src/`, `docs/`, and `evals/` are gone, the Node/TypeScript toolchain files are gone, and the `jsdoc-reviewer` skill was removed because it no longer matched repository scope. Residual noise remains only in historical tracker/plan entries and in local untracked runtime state such as `node_modules`, which was left untouched because it is not part of the tracked repository contract.

## Context and Orientation

The intended end state now contains only:

- operational root files such as `AGENTS.md`, `PLANS.md`, and `README.md`,
- declarative skills under `skills/`,
- execution tracking under `tasks/`.

The removed areas were previously referenced by:

- top-level source-of-truth docs (`AGENTS.md`, `README.md`),
- package/toolchain files (`package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`),
- skill content tied to API/doc tooling (`skills/jsdoc-reviewer`).

## Terminology and Decomposition

N/A - this is a repository simplification task, not a research campaign.

## Plan of Work

First, ensure all tracked files under `src/`, `docs/`, and `evals/` are deleted. Next, rewrite the remaining root source-of-truth files so they no longer describe deleted directories or deleted validation commands. Then remove the now-pointless Node/TypeScript tooling files and the `skills/jsdoc-reviewer` skill. Finally, verify the reduced tree and scan for stale references in active files.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Create this ExecPlan and add an `Active Task` entry in `tasks/todo.md`.
2. Inspect references with `rg` for `evals/`, `src/contracts`, `src/harness`, `src/runtime`, `src/skills-engine`, runtime CLI names, and `zod`.
3. Remove the requested directories plus dependent tests, CLI files, and runtime/eval skills.
4. Update `AGENTS.md`, `README.md`, `skills/REFERENCE-STANDARD.md`, and tracker docs to describe the markdown-first workspace.
5. Delete package/toolchain files that no longer have a valid source tree.
6. Verify tree shape with `Test-Path`/`Get-ChildItem` and scan active files for stale references.

Expected outcomes:

- removed directories no longer exist,
- no active source-of-truth file claims that `src`, `docs`, or `evals` still exist,
- no Node/TypeScript toolchain files remain if there is no source tree to operate on,
- remaining skills are still declarative and internally coherent.

## Validation and Acceptance

Acceptance is satisfied when:

1. `Get-ChildItem src,evals` no longer shows the removed architecture directories.
2. `rg` scans for removed directory names and deleted commands return only historical tracker context or intentionally preserved archival text.
3. Active-file `rg` scans no longer show stale references in `AGENTS.md`, `README.md`, or active skills for deleted directories and dead commands, except where preserved in historical tracker/plan records.

## Idempotence and Recovery

This cleanup is idempotent at the file level: rerunning deletion commands or patches should leave the repo in the same reduced state. Recovery from partial failure should use `git diff` and selective file restoration from version control, but no destructive reset commands should be used because the worktree already contains user changes unrelated to this task.

## Artifacts and Notes

Evidence to capture during execution:

- `git status --short`
- `rg` results before/after cleanup
- validation command outputs

## Interfaces and Dependencies

This task removes interfaces and dependencies rather than adding new ones. The expected end state is that there are no runtime package/tooling dependencies at repo root because the repository no longer contains a codebase to lint, compile, or execute locally.

Change note: 2026-03-03T18:00:00Z - Created plan for removing runtime/eval architecture and simplifying the repository baseline.
Change note: 2026-03-03T18:09:00Z - Expanded scope to remove all of `src/`, `docs/`, and `evals/` plus dependent tooling and API-doc skill content.
