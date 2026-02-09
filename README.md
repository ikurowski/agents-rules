# Agent Rules Repository

Repository for managing agent operating rules and work history.

## What is in this repository

- `AGENTS.md` - hard rules for agents.
- `PLANS.md` - strict self-contained ExecPlan standard for non-trivial tasks.
- `tasks/todo.md` - high-level task tracker (status/goal/plan link/outcome).
- `tasks/plans/*` - executable plans for complex tasks.
- `tasks/lessons.md` - lessons captured for significant corrections with reusable prevention rules.

## Quick Workflow

1. Before work, add a high-level task entry in `tasks/todo.md` (status, goal, optional owner, ExecPlan link).
2. For non-trivial work, create an ExecPlan from `tasks/plans/_template.md` and keep assumptions, success criteria, execution detail, and verification there.
3. Execute in a loop: plan -> execute -> verify -> reflect -> update docs.
4. Update `Progress` in the active ExecPlan at every stop point.
5. After completion, add a short outcome in `tasks/todo.md`; keep detailed verification evidence in the ExecPlan.
6. If there was a significant correction, add an entry to `tasks/lessons.md`.

## Commit Style

Use Conventional Commits with atomic scope, for example:

- `docs(agents): add reflective loop policy`
- `fix(workflow): align todo and plans sync`

## Start (local)

```powershell
git init
git add .
git commit -m "Initial commit: agent rules and task tracking"
```

## Publish to GitHub

Option with GitHub CLI (`gh`):

```powershell
gh repo create <REPO_NAME> --public --source=. --remote=origin --push
```

Option without `gh`:

1. Create an empty repository on GitHub.
2. Add remote and push:

```powershell
git remote add origin https://github.com/<USER>/<REPO_NAME>.git
git branch -M main
git push -u origin main
```
