# Cleanup more and prepare single-SoT session prompt

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User requested additional cleanup and a large prompt for a new session. The prompt must enforce single source of truth and explicitly integrate `AGENTS.md`, skills, and shared references. Outcome should be a cleaner workspace plus a ready-to-paste prompt.

## Progress

- [x] (2026-02-12T22:45:28Z) Initial task entry.
- [x] (2026-02-12T22:46:10Z) Removed additional implementation artifacts (`src/agent-flow`, CLI flow runtime, flow tests, flow architecture doc).
- [x] (2026-02-12T22:48:40Z) Normalized remaining tooling files and produced final session prompt.

## Surprises & Discoveries

- Root `.github/workflows` no longer exists in the working tree; cleanup focused on runtime files and scripts.

## Decision Log

Decision: keep stack-level tooling (`tsconfig`, Prettier, ESLint, TypeScript) while removing session-specific runtime implementation.  
Rationale: matches user request to clean more but keep stack.  
Timestamp/Author: 2026-02-12T22:45:28Z / Codex

Decision: deliver prompt as both persisted file and final message for immediate reuse.  
Rationale: gives copy-paste convenience and repository traceability.  
Timestamp/Author: 2026-02-12T22:45:28Z / Codex

## Outcomes & Retrospective

Completed. Workspace was reduced further by removing temporary runtime artifacts and keeping only baseline tooling plus governance assets. A large reusable prompt was added under `tasks/prompts/new-session-single-sot-rebuild.md` and is ready to paste into a new session.

## Context and Orientation

Current repo primarily stores governance (`AGENTS.md`, `PLANS.md`, `tasks/*`, `skills/*`). This task removes additional throwaway implementation artifacts and delivers a robust execution prompt for rebuilding from a clean baseline in a fresh session.

## Plan of Work

1. Remove extra runtime files added during recent implementation cycles.
2. Update `package.json` scripts so no deleted entrypoints remain.
3. Keep minimal TypeScript entrypoint to preserve typecheck ergonomics.
4. Write large new-session prompt with explicit single-SoT policy and integration with `AGENTS` + `skills/shared`.
5. Run validation commands and update trackers.

## Concrete Steps

1. Delete stale runtime files under `src/`, `tests/`, and docs architecture flow file.
2. Patch `package.json` scripts.
3. Add minimal `src/index.ts`.
4. Add prompt file under `tasks/prompts/`.
5. Run `npm run format`, `npm run lint`, `npm run typecheck`, `npm test`.

## Validation and Acceptance

Acceptance:
- no stale runtime entrypoints remain in scripts;
- stack commands pass;
- prompt is large, explicit, and emphasizes single SoT with `AGENTS` + `skills`.

## Idempotence and Recovery

Cleanup is idempotent; rerunning deletions has no effect. If script references missing files, fix by re-running `npm run lint` and `npm run typecheck` and removing stale entries.

## Artifacts and Notes

Validation evidence:
- `npm run format` (pass)
- `npm run lint` (pass)
- `npm run typecheck` (pass)
- `npm test` (pass, `--passWithNoTests`)

Delivered prompt:
- `tasks/prompts/new-session-single-sot-rebuild.md`

Core cleanup results:
- removed `src/agent-flow/*`
- removed `src/cli/main.ts`
- removed `tests/*` (runtime-specific tests)
- removed `docs/architecture/agent-flow.md`
- kept `tsconfig.json` and `.prettierrc.json`
- adjusted `package.json` scripts to baseline quality commands only

## Interfaces and Dependencies

N/A - no persistent runtime interface is introduced; task is cleanup + prompt authoring.

Change note: 2026-02-12T22:45:28Z - Created cleanup + prompt plan.
Change note: 2026-02-12T22:48:40Z - Completed cleanup, validation, and prompt delivery artifact.
