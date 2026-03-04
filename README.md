# Agent Rules Repository

Markdown-first repository for agent operating rules, reusable skills, and selected task history.

## Current Shape

- `AGENTS.md` - repo-wide agent contract.
- `PLANS.md` - when ExecPlans are required and how light or heavy they should be.
- `skills/*` - reusable skills plus skill-local references.
- `tasks/todo.md` - high-level tracker.
- `tasks/plans/*` - retained plans for research, architecture changes, and other work worth preserving.
- `tasks/lessons.md` - reusable prevention rules from significant corrections.

## Operating Model

- Root docs stay short and stable.
- Skills own domain workflow and detailed reference material.
- Plans are used only for work that benefits from durable execution memory.
- The repository is markdown-first today.
- Dormant Node/TypeScript tooling is intentionally parked for future code, but it is not part of the current operating model.

## Intentionally Absent

- No active runtime layer or maintained source tree beyond future-facing placeholders.
- No shared skill-policy layer until more than one real skill needs it.
- No separate standards layer until live code or multi-skill reuse justifies it.
