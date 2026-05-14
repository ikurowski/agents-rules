# Remove source catalog and align skill format

## Purpose

Remove the recently added `sources/*` layer and make the current skill structure closer to the official `openai/skills` guidance. Done means no repo docs or validation refer to `sources/decision-matrix.md`, `deep-researcher` follows the leaner skill format, and validation passes.

## Progress

- [x] 2026-05-14T17:04:28Z - Reviewed current root docs, validator, `deep-researcher`, and `sources/*`.
- [x] 2026-05-14T17:04:28Z - Checked `openai/skills` and `skill-creator` guidance.
- [x] 2026-05-14T17:04:28Z - Removed `sources/*`.
- [x] 2026-05-14T17:04:28Z - Updated root docs, validator, skill docs, and tracker.
- [x] 2026-05-14T17:04:28Z - Ran validation and recorded outcome.

## Decision Log

Decision: Remove `sources/*` rather than keeping a decision matrix.  
Rationale: The user explicitly rejected the decision-matrix/source-catalog layer as too heavy.  
Timestamp/Author: 2026-05-14T17:04:28Z / Codex

Decision: Keep source-backed research inside `deep-researcher` outputs and retained plans instead of a persistent root matrix.  
Rationale: This preserves evidence discipline without adding a permanent governance layer.  
Timestamp/Author: 2026-05-14T17:04:28Z / Codex

Decision: Align `deep-researcher` toward `openai/skills` by moving trigger guidance into the description and adding `agents/openai.yaml`.  
Rationale: Official skill creator guidance says frontmatter description is the trigger surface and `agents/openai.yaml` is recommended UI metadata.  
Timestamp/Author: 2026-05-14T17:04:28Z / Codex

## Validation

Command:

```powershell
npm run validate
```

Result:

- Passed.
- Confirmed `sources/` is absent.
- `rg "sources/decision-matrix|sources/|decision-matrix"` finds only this plan's historical removal notes.

## Outcome

Removed the persistent `sources/*` layer and decision matrix from the active repo model.

Aligned `deep-researcher` closer to `openai/skills` by:

- keeping trigger guidance in the frontmatter `description`,
- removing the body `When to Use` section,
- adding `skills/deep-researcher/agents/openai.yaml`,
- updating `skills/REFERENCE-GUIDE.md` with Codex skill compatibility rules.

Superseded: 2026-05-14T17:25:00Z - The active skill surface was migrated to `.agents/skills` in `tasks/plans/2026-05-14T17-25-00Z-migrate-skills-to-codex-discovery.md`.
