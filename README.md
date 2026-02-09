# Agent Rules Repository

Repository for managing agent operating rules and work history.

## What is in this repository

- `AGENTS.md` - hard rules for agents.
- `PLANS.md` - strict self-contained ExecPlan standard for non-trivial tasks.
- `tasks/todo.md` - high-level task tracker (status/goal/plan link/outcome).
- `tasks/plans/*` - executable plans for complex tasks.
- `tasks/lessons.md` - lessons captured for significant corrections with reusable prevention rules.

## Workflow Source of Truth

- `README.md` is an onboarding summary, not the authoritative execution policy.
- Execution policy and responsibilities: `AGENTS.md`
- ExecPlan structure and required sections: `PLANS.md`
- Active/high-level task tracking: `tasks/todo.md`

## Reuse in another project

Copy these files to the root of your target repository:

- `AGENTS.md`
- `PLANS.md`
- `tasks/` (including `todo.md`, `lessons.md`, `plans/`)

PowerShell quick start from the target repo root:

```powershell
Copy-Item C:\Users\igork\Desktop\agent\AGENTS.md .
Copy-Item C:\Users\igork\Desktop\agent\PLANS.md .
Copy-Item C:\Users\igork\Desktop\agent\tasks . -Recurse
```

After copying, commit these files in the target repo and the agent will follow these rules there.

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
