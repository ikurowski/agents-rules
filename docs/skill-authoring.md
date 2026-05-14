# Skill Authoring

This repository uses Codex-discoverable skills under `.agents/skills`.

## Skill Shape

Follow the current `openai/skills` pattern:

1. Each skill is a folder named after the skill.
2. Each skill has `SKILL.md` with `name` and `description` frontmatter.
3. Put trigger guidance in `description`; keep the body for workflow instructions.
4. Add `agents/openai.yaml` for every repo skill.
5. Keep detailed procedure in skill-local `references/*`.

## Reference Rules

- Prefer skill-local references over shared references.
- Add a shared reference only after at least two real skills need the same rule.
- Do not create a shared skill-reference directory preemptively.
- Do not add scripts unless deterministic repeatability is worth the extra maintenance.

## Adding Skills

Use `$skill-creator` for substantial new skills. Provide concrete trigger examples, expected outputs, and any source material the skill should preserve.
