# Agent Rules Repository

Repository for managing agent operating rules, reusable skills, and work history.

This workspace is markdown-first at the moment, with room to grow into a broader runtime/tooling setup later if the repository needs it.

## What is in this repository

- `AGENTS.md` - hard rules for agents.
- `PLANS.md` - strict self-contained ExecPlan standard for non-trivial tasks.
- `skills/*` - skill definitions, references, and workflow specs.
- `tasks/todo.md` - high-level task tracker (status/goal/plan link/outcome).
- `tasks/plans/*` - executable plans for complex tasks.
- `tasks/lessons.md` - lessons captured for significant corrections with reusable prevention rules.

## How the pieces fit together

- `README.md` is the human-facing map of the repository.
- `AGENTS.md` is the short repo-wide contract for autonomous agents.
- `PLANS.md` is the only source of truth for when ExecPlans are required and how they are structured.
- `skills/*` contains domain-specific workflows and references that should not live in repo-wide policy.
- `docs/standards/*` contains durable cross-cutting standards that are worth keeping separate from task or skill docs.
- `tasks/todo.md` tracks current status, while `tasks/plans/*` keeps detailed execution history and evidence.

## Lean self-validation

Run these checks after cleanup or when repo policy changes materially:

1. Confirm tracker shape: `Get-Content -Raw tasks/todo.md`
   Expected result: at most one `## Active Task` section with one `in_progress` item.
2. Check shared-reference reuse: `$files = Get-ChildItem skills/shared/references -File; foreach ($f in $files) { $name = [System.IO.Path]::GetFileNameWithoutExtension($f.Name); $count = (rg -l $name skills | Measure-Object).Count; "$count`t$($f.Name)" }`
   Expected result: each shared reference has at least two live consumers; otherwise demote it back to a skill-local reference or remove it.
3. Review shared-reference imports: `rg -n "Apply \\.\\./shared/references/|Apply \\.\\./\\.\\./shared/references/" skills`
   Expected result: imports should appear only in skills or skill-local references that actually need shared policy.
