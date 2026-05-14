# Migrate skills to Codex discovery

## Purpose

Make the active local skill discoverable by Codex and remove the unused shared-reference layer. Done means `deep-researcher` lives under `.agents/skills`, assessment-profile is local to that skill, root docs no longer describe `skills/*` as active skills, and validation passes.

## Progress

- [x] 2026-05-14T17:25:00Z - Audited references to `skills/*`, `skills/shared`, and `assessment-profile`.
- [x] 2026-05-14T17:25:00Z - Decided to use `.agents/skills` as the active Codex skill surface.
- [x] 2026-05-14T17:25:00Z - Moved `deep-researcher` and its references to `.agents/skills/deep-researcher`.
- [x] 2026-05-14T17:25:00Z - Removed `skills/shared` and replaced `skills/REFERENCE-GUIDE.md` with `docs/skill-authoring.md`.
- [x] 2026-05-14T17:25:00Z - Updated root docs, validator, and tracker.
- [x] 2026-05-14T17:25:00Z - Ran validation and recorded outcome.

## Decision Log

Decision: Make `.agents/skills` the active skill location.  
Rationale: The user uses Codex and asked me to decide; current Codex repo-scoped skill discovery expects `.agents/skills`.  
Timestamp/Author: 2026-05-14T17:25:00Z / Codex

Decision: Remove `skills/shared` and keep `assessment-profile.md` local to `deep-researcher`.  
Rationale: There is only one active skill consuming it, so a shared layer is premature.  
Timestamp/Author: 2026-05-14T17:25:00Z / Codex

Decision: Move authoring guidance to `docs/skill-authoring.md`.  
Rationale: Once active skills live under `.agents/skills`, a `skills/REFERENCE-GUIDE.md` file is a misleading pseudo-skill location.  
Timestamp/Author: 2026-05-14T17:25:00Z / Codex

## Validation

Command:

```powershell
npm run validate
```

Result:

- Passed.
- Confirmed old `skills/` directory is removed.
- Active root docs now point to `.agents/skills`.
- Follow-up review tightened validation to reject any recreated `skills/` directory and made `agents/openai.yaml` mandatory for repo skills.

## Outcome

Migrated the active skill surface to Codex discovery:

- moved `deep-researcher` to `.agents/skills/deep-researcher`,
- moved `assessment-profile.md` into that skill's local `references/`,
- removed the old `skills/` directory,
- replaced `skills/REFERENCE-GUIDE.md` with `docs/skill-authoring.md`,
- updated root docs and validator.

Remaining risk: historical plans and tracker entries still mention earlier `skills/*` states as history.
