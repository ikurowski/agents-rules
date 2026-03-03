# TODO

`tasks/todo.md` is a high-level tracker. Keep detailed assumptions, execution steps, and validation evidence in the linked ExecPlan.
Keep `## Active Task` only when exactly one task is `in_progress`; move completed or blocked items to `## Task History`.

## Task History

### 2026-03-03T20:43:09Z

- Status: completed
- Goal: Test whether a separate `codex exec` process can be used as a clean-context child agent for small delegated tasks.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T20-43-09Z-test-clean-context-child-codex-exec.md`
- Outcome: Completed. A separate `codex exec` run worked as a clean-context child report task in read-only mode, but it still inherited local execution policies and repo state, so it is best used for narrow review/research subtasks rather than concurrent write work.

### 2026-03-03T20:22:24Z

- Status: completed
- Goal: Refactor repository governance and documentation so the repo matches the lean target model from the 2026-03-03 research.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T20-22-24Z-refactor-repo-governance-to-lean-target-model.md`
- Outcome: Completed. Shortened `AGENTS.md` into a repo-wide contract, made `PLANS.md` the explicit owner of ExecPlan trigger/lifecycle, simplified `skills/REFERENCE-GUIDE.md`, removed dead shared references, demoted single-skill review guidance into `skills/deep-researcher/references/`, and documented lightweight self-validation in `README.md`.

### 2026-03-03T20:11:43Z

- Status: completed
- Goal: Assess whether the current markdown-first agent repository organization and governance model is well aligned with current practical patterns, with a critical recommendation for what to keep versus simplify.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T20-11-43Z-assess-markdown-first-repo-organization.md`
- Outcome: Completed. Compared the current repository layout against current official OpenAI, Anthropic, and GitHub guidance and concluded that the overall direction is good, but the governance layer is still heavier than the present repository scale justifies.

### 2026-03-03T20:06:45Z

- Status: completed
- Goal: Restore `tsconfig.json` to valid JSON and add a minimal `src` placeholder so TypeScript has a real input file.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T20-06-45Z-restore-valid-tsconfig-and-add-src-placeholder.md`
- Outcome: Completed. Restored `tsconfig.json` to valid JSON and added `src/tsconfig-placeholder.ts` so the dormant TypeScript project has one real input file.

### 2026-03-03T19:57:51Z

- Status: completed
- Goal: Rename the shared skill reference policy file to a better name and simplify its opening so it emphasizes reference conventions rather than scoring.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T19-57-51Z-rename-skill-reference-standard-and-simplify-opening.md`
- Outcome: Completed. Renamed `skills/REFERENCE-STANDARD.md` to `skills/REFERENCE-GUIDE.md`, updated the active import path in `skills/deep-researcher/SKILL.md`, and simplified the opening so it frames the file as a guide for shared reference conventions rather than as a scoring-focused standard.

### 2026-03-03T19:50:32Z

- Status: completed
- Goal: Restore `tsconfig.json`, trim ESLint ignores to a lean future-facing set, and recreate the JSDoc standard in a current, non-stale location.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T19-50-32Z-restore-tsconfig-trim-eslint-and-recreate-jsdoc-standard.md`
- Outcome: Completed. Restored `tsconfig.json`, reduced ESLint ignores to a lean future-facing set, recreated the JSDoc standard at `docs/standards/jsdoc-api-contracts.md`, and added the corresponding pointer in `AGENTS.md`.

### 2026-03-03T19:41:41Z

- Status: completed
- Goal: Restore dormant root tooling files and relax wording that overstates the repository as permanently runtime-free or forbids future script-based skill internals.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T19-41-41Z-restore-dormant-tooling-and-relax-wording.md`
- Outcome: Completed. Restored `package.json`, `eslint.config.mjs`, and `.prettierrc.json`, removed the requested stale ESLint ignore entries, rewrote the README to describe the repo as markdown-first for now, and removed the unnecessary `.ts`/`.js` prohibition from the shared skill standard.

### 2026-03-03T19:35:03Z

- Status: completed
- Goal: Enforce a strict markdown-first repository state by removing leftover root toolchain artifacts and dead runtime/contracts references from active docs.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T19-35-03Z-strict-markdown-first-cleanup.md`
- Outcome: Completed at the time, then partially superseded by the follow-up task started at `2026-03-03T19:41:41Z`, which restored selected dormant tooling files and relaxed wording about future runtime/tooling evolution.

### 2026-03-03T18:09:00Z

- Status: completed
- Goal: Simplify the repository into a markdown-first workspace by removing all of `src/`, `docs/`, and `evals/` plus dependent tooling and stale skill/docs references.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T18-00-00Z-simplify-repository-by-removing-heavy-runtime-layers.md`
- Outcome: Completed. Removed all tracked files under `src/`, `docs/`, and `evals/`, removed obsolete skills, and updated root guidance docs to describe the reduced markdown-first workspace. Remaining root toolchain leftovers were cleaned in the follow-up task started at `2026-03-03T19:35:03Z`.

### 2026-02-17T23:49:51Z

- Status: completed
- Goal: Execute approved cleanup stages 1+2+3 with anti-drift enforcement and typed campaign summary contract.
- Owner: agent
- ExecPlan: historical plan removed during the 2026-03-03 repository reset; no tracked file remains.
- Outcome: Completed under the pre-reset repository architecture. Historical implementation details were intentionally not preserved after the 2026-03-03 workspace reset.
