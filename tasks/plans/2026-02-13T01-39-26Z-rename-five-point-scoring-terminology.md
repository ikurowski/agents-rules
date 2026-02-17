# Rename Legacy Scoring Shorthand to Descriptive Five-Point Terms Across Project

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Replace legacy shorthand scoring names with descriptive five-point scoring terminology across code and policy/docs. The user-visible outcome is a clearer API/type naming model (including score threshold constants with `keyof typeof` labels) and consistent documentation references for the same concept.

## Progress

- [x] (2026-02-13T01:39:40Z) Initial task entry.
- [x] (2026-02-13T01:56:00Z) Implemented repo-wide rename and threshold/type refactor in runtime code and docs.
- [x] (2026-02-13T01:47:00Z) Validation checks passed and tracker updates finalized.

## Surprises & Discoveries

Initial scan showed legacy shorthand across runtime docs, skill standards, shared reference module paths, and historical task/plan records. Repository-wide replacement needed targeted cleanup for phrase quality (for example, accidental "score scores" wording) after automated text substitution.

## Decision Log

Decision: Replace legacy shorthand with descriptive five-point scoring terminology in code and docs, and rename the shared reference module path accordingly.
Rationale: Legacy shorthand is not descriptive enough; explicit five-point naming improves clarity and reduces onboarding ambiguity.
Timestamp/Author: 2026-02-13T01:39:40Z / agent

Decision: Implement score label type via `keyof typeof` on a canonical threshold constant.
Rationale: This removes duplicate label declarations and keeps labels coupled to threshold SoT in code.
Timestamp/Author: 2026-02-13T01:39:40Z / agent

Decision: Apply the rename to historical markdown records too.
Rationale: The user requested correction across the whole project, so archival wording is in scope.
Timestamp/Author: 2026-02-13T01:39:40Z / agent

## Outcomes & Retrospective

Completed. Runtime/public type names now use descriptive five-point terminology (`FIVE_POINT_SCORE_THRESHOLDS`, `FivePointScoreLabel`), the shared reference module path is `skills/shared/references/five-point-scoring-bands.md`, and downstream references were updated across active and historical project docs. Validation (`typecheck`, `lint`, `test`) passed after refactor. Main risk observed: broad search/replace can degrade phrasing quality; resolved with targeted manual cleanup in affected docs.

## Context and Orientation

Key files for this change:
- `src/agent-workflow/types.ts`: score threshold constant + derived label type.
- `src/agent-workflow/run-agent-workflow.ts`: score label derivation logic uses canonical thresholds.
- `src/agent-workflow/source-of-truth-paths.ts`: canonical shared reference path list.
- `skills/shared/references/five-point-scoring-bands.md`: shared scoring source consumed by skills.
- `skills/REFERENCE-STANDARD.md` and skill `SKILL.md` / `references/*.md`: references to shared score module and naming.
- `docs/architecture/agent-workflow.md`: workflow scorecard terminology.
- `tasks/todo.md`, `tasks/lessons.md`, and `tasks/plans/*.md`: historical references containing legacy shorthand.

## Terminology and Decomposition

N/A - this is a naming refactor and consistency task, not a research/decomposition campaign.

## Plan of Work

Update runtime score naming by introducing a descriptive threshold constant and deriving label type from it. Rename the shared scoring reference file path and update all imports/references. Then run project-wide textual replacement for remaining legacy shorthand in markdown docs, including historical plans and task records, preserving meaning. Finally, run lint/typecheck/tests.

## Concrete Steps

1. Use `rg -n` to locate legacy shorthand and old shared-reference path occurrences.
2. Edit `src/agent-workflow/*.ts` to adopt descriptive constant/type names.
3. Update all references to `skills/shared/references/five-point-scoring-bands.md`.
4. Replace remaining legacy shorthand text tokens in markdown docs where they represent the same scoring concept.
5. Run `npm run typecheck`, `npm run lint`, and `npm run test` from repo root.

Expected outputs:
- No unresolved references to old path names.
- Runtime/test suite passes with descriptive naming.

## Validation and Acceptance

Acceptance checks:
- Repository-wide legacy-shorthand scan returns no matches.
- `npm run typecheck` succeeds.
- `npm run lint` succeeds.
- `npm run test` succeeds.

## Idempotence and Recovery

The rename is idempotent: rerunning replacement commands should produce zero changes after first pass. If a path update is missed, `rg` scans and TypeScript compile errors will identify gaps. Recovery is straightforward by reapplying replacements and rerunning checks.

## Artifacts and Notes

- Legacy shorthand scan returned no matches.
- Validation command: `npm run typecheck` -> passed.
- Validation command: `npm run lint` -> passed.
- Validation command: `npm run test` -> passed (`16 passed`).

## Interfaces and Dependencies

No external dependencies change. Internal interfaces affected:
- score label type alias in `src/agent-workflow/types.ts`.
- shared reference path constant in `src/agent-workflow/source-of-truth-paths.ts`.

Change note: 2026-02-13T01:56:00Z - Rewrote plan after initial automated replacement to keep wording precise and aligned with actual scope/progress.
Change note: 2026-02-13T01:47:00Z - Recorded validation evidence and marked plan complete.
