# Agent Rules Repository

Markdown-first repository for agent operating rules, reusable skills, and selected task history.

## Current Shape

- `AGENTS.md` - repo-wide agent contract.
- `PLANS.md` - when ExecPlans are required and how light or heavy they should be.
- `.agents/skills/*` - Codex-discoverable skills plus skill-local references.
- `docs/skill-authoring.md` - local skill authoring conventions.
- `tasks/todo.md` - high-level tracker.
- `tasks/plans/*` - retained plans for research, architecture changes, and other work worth preserving.
- `tasks/lessons.md` - reusable prevention rules from significant corrections.
- `scripts/validate-profile.mjs` - structural validation for this markdown-first profile.

## Operating Model

- Root docs stay short and stable.
- Skills under `.agents/skills` own domain workflow and detailed reference material.
- Plans are used only for work that benefits from durable execution memory.
- The repository is markdown-first today, with a small validation script for profile structure.
- Dormant Node/TypeScript tooling is intentionally parked for future code, but it is not part of the current operating model.

## Intentionally Absent

- No active runtime layer or maintained source tree beyond future-facing placeholders.
- No shared skill-reference layer until more than one real skill needs it.
- No separate standards layer until live code or multi-skill reuse justifies it.
- No active Codex hooks, rules, or custom agents until a repeated local need justifies them.
