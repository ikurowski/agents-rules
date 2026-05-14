# Build Codex VS Code agent profile template

## Purpose

Create a clean `agent-profile-template/` starter repository inside this workspace. Done means the template is usable with Codex in VS Code, has repo-scoped skills under `.agents/skills`, includes a source catalog for validation, and passes its own structural checks.

## Progress

- [x] 2026-05-14T15:52:53Z - Confirmed `agent-profile-template/` does not already exist.
- [x] 2026-05-14T15:52:53Z - Reviewed root `AGENTS.md`, `PLANS.md`, current tracker, and prior source research.
- [x] 2026-05-14T15:52:53Z - Created the template files, source catalog, starter skill, and validator.
- [x] 2026-05-14T15:52:53Z - Ran validation and recorded the result.
- [x] 2026-05-14T15:52:53Z - Spot-checked Codex docs URLs and corrected source catalog links.

## Decision Log

Decision: Build a fresh template instead of adapting the current repo in place.  
Rationale: The user explicitly wants a new folder that is not overfit to the existing model.  
Timestamp/Author: 2026-05-14T15:52:53Z / Codex

Decision: Use `.agents/skills` for repo-scoped skills.  
Rationale: Current Codex docs say repository skills are discovered from `.agents/skills` from the current working directory up to the repository root.  
Timestamp/Author: 2026-05-14T15:52:53Z / Codex

Decision: Do not add a `skill-maintainer` skill.  
Rationale: Current Codex docs point to the built-in `$skill-creator`; `skill-maintainer` was an unsupported inference.  
Timestamp/Author: 2026-05-14T15:52:53Z / Codex

Decision: Add a source catalog and decision matrix rather than local full-page snapshots.  
Rationale: The user wants validation against sources, while local mirrors of live docs would become stale and add noise.  
Timestamp/Author: 2026-05-14T15:52:53Z / Codex

## Validation

Command:

```powershell
npm run validate
```

Result:

- Passed inside `agent-profile-template/`.
- Confirmed required files, skill frontmatter, VS Code extension recommendation, absence of active `skill-maintainer`, and source IDs in decision rows.
- Re-ran after source URL corrections; still passed.

## Outcome

Created `agent-profile-template/` as a clean Codex + VS Code starter with:

- root `AGENTS.md` and `PLANS.md`,
- repo-scoped `.agents/skills/source-researcher`,
- VS Code extension recommendation for `openai.chatgpt`,
- `sources/` catalog plus decision matrix,
- lightweight Node validator.

Remaining risk: source URLs should be refreshed during future substantive profile changes because Codex docs and feature maturity can change.

Superseded: 2026-05-14T16:20:00Z - The user chose to withdraw from the separate folder direction. The template folder was removed and the useful ideas were integrated into the current repo in `tasks/plans/2026-05-14T16-20-00Z-integrate-codex-profile-into-current-repo.md`.
