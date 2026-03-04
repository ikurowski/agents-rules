# Replace five-point scoring with a shared assessment profile

This ExecPlan is a living document. Keep it only as detailed as the task requires.

## Purpose

Replace the shared `1-5` scoring primitive with a lightweight shared assessment profile, then update `deep-researcher` references so they no longer depend on scalar averaging or numeric confidence scores. The task is done when the new shared file exists, direct consumers point to it, and the old file is removed so the repo has one active assessment SSOT.

## Progress

- [x] (2026-03-04T19:01:06Z) Started.
- [x] (2026-03-04T19:01:06Z) Replaced the shared model and updated direct `deep-researcher` consumers.
- [x] (2026-03-04T19:01:06Z) Validation and close-out completed.

## Decision Log

Decision: make `confidence` the only required shared dimension and keep all other assessment dimensions optional.  
Rationale: this preserves a repo-wide shared primitive without forcing a heavy template on every skill or output.  
Timestamp/Author: 2026-03-04T19:01:06Z / Codex

Decision: remove `five-point-scoring-bands.md` instead of keeping a compatibility shim.  
Rationale: once active consumers moved to `assessment-profile.md`, keeping the old shared file created a second visible source for assessment semantics and weakened SSOT.  
Timestamp/Author: 2026-03-04T19:06:00Z / Codex

## Validation

- `rg -n "assessment-profile|five-point-scoring-bands|confidence_score|evidence_score|X/5|1-5" skills`
  Expected: active docs point to `assessment-profile.md`; old scalar artifacts are removed from active guidance.
- Result: passed. Active `deep-researcher` docs point to `assessment-profile.md`; `five-point-scoring-bands.md` is removed from active skill docs.
- Read the updated shared and `deep-researcher` reference files.
  Expected: no document still instructs users to average unlike dimensions into a single score.
- Result: passed. The shared model now reports separate dimensions and the evidence rubric no longer computes a scalar average.

## Outcome

Completed. Added `skills/shared/references/assessment-profile.md`, removed `skills/shared/references/five-point-scoring-bands.md`, and updated the direct `deep-researcher` consumers to report labeled assessment dimensions instead of numeric scores. No runtime code changed.

Change note: 2026-03-04T19:01:06Z - Created the plan for replacing the shared scalar scoring model with a lightweight assessment profile.
Change note: 2026-03-04T19:01:06Z - Recorded validation results and task completion.
Change note: 2026-03-04T19:06:00Z - Removed the deprecated compatibility shim to keep a single active shared assessment source of truth.
