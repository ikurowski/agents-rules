# Integrate Codex profile changes into current repo

## Purpose

Supersede the temporary `agent-profile-template/` direction and fold the useful Codex profile ideas into the current repository. Done means the separate template folder is gone, root docs describe the new source-backed operating model, and validation passes.

## Progress

- [x] 2026-05-14T16:20:00Z - Reviewed current root docs, existing skills, task tracker, and git state.
- [x] 2026-05-14T16:20:00Z - Removed `agent-profile-template/` from the git index and workspace.
- [x] 2026-05-14T16:20:00Z - Added root `sources/` catalog and decision matrix.
- [x] 2026-05-14T16:20:00Z - Strengthened root `AGENTS.md` without turning it into a template copy.
- [x] 2026-05-14T16:20:00Z - Added lightweight profile validation and ran it.
- [x] 2026-05-14T16:20:00Z - Updated tracker and recorded outcome.

## Decision Log

Decision: Keep the current repository as the canonical profile rather than a nested starter repo.  
Rationale: The user wants to withdraw from the new-folder direction and evolve the existing repo.  
Timestamp/Author: 2026-05-14T16:20:00Z / Codex

Decision: Add `sources/*` to the current repo as an auditable source catalog.  
Rationale: The user wants later validation against the sources that justify architecture decisions.  
Timestamp/Author: 2026-05-14T16:20:00Z / Codex

Decision: Keep existing `skills/*` as this repo's canonical skill source, while documenting `.agents/skills` as the Codex auto-discovery adapter target.  
Rationale: The current repo already owns skill source under `skills/*`; moving it now would be a larger migration than the user asked for.  
Timestamp/Author: 2026-05-14T16:20:00Z / Codex

## Validation

Command:

```powershell
npm run validate
```

Result:

- Passed.
- Confirmed `agent-profile-template/` is removed.
- `git status --short` shows current repo changes plus the previously added research plans.

## Outcome

Integrated the Codex profile direction into the current repo:

- removed the separate `agent-profile-template/` folder,
- added `sources/*`,
- updated root `AGENTS.md` and `README.md`,
- added `scripts/validate-profile.mjs` and `npm run validate`,
- connected `deep-researcher` to the source decision matrix.

Remaining risk: `.agents/skills` is documented as a future Codex adapter target, but not implemented in this change.

Superseded in part: 2026-05-14T17:04:28Z - The user rejected the persistent `sources/*` and decision-matrix layer. That layer was removed in `tasks/plans/2026-05-14T17-04-28Z-remove-sources-align-skills.md`; the remaining profile validation and skill-format alignment stayed.
