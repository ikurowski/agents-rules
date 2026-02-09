# Agent Rules Repository

Repository for managing agent operating rules and work history.

## What is in this repository

- `AGENTS.md` - hard rules for agents.
- `tasks/todo.md` - active work plan and task status.
- `tasks/lessons.md` - lessons captured after corrections and mistakes.

## Quick Workflow

1. Before work, add the plan and success criteria to `tasks/todo.md`.
2. After each step, update checklist status.
3. After completion, add test/verification results.
4. If there was a correction or mistake, add an entry to `tasks/lessons.md`.

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
