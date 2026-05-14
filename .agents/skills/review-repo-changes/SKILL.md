---
name: review-repo-changes
description: Review current repository changes against this repo's agent rules, planning policy, skill authoring conventions, tracker discipline, and validation expectations. Use when the user asks to review, audit, check, or sanity-check uncommitted changes, staged changes, a recent diff, a proposed commit, or before attempting any commit for consistency with AGENTS.md, PLANS.md, docs/skill-authoring.md, and active skills.
---

# Review Repo Changes

Use this skill for a code-review style pass over repository changes. Prioritize bugs, stale references, policy drift, missing validation, and changes that make future agent work less reliable.

## Review Inputs

Read the active policy files before judging the diff:

1. `AGENTS.md`
2. `PLANS.md`
3. `README.md`
4. `docs/skill-authoring.md`
5. touched `SKILL.md` and `agents/openai.yaml` files
6. relevant `tasks/todo.md` and `tasks/plans/*` entries

Inspect both staged and unstaged changes when available:

- `git status --short`
- `git diff --cached --stat`
- `git diff --stat`
- targeted `git diff` for changed active files

## Review Checks

Check for:

1. Instruction hierarchy or ownership drift against `AGENTS.md`.
2. Plan-policy violations against `PLANS.md`.
3. Skill format drift from `docs/skill-authoring.md`.
4. Stale references to removed paths, especially old skill locations or abandoned source catalogs.
5. Tracker drift where `tasks/todo.md` presents superseded guidance as current.
6. Validator gaps that allow known bad states to pass.
7. Missing or misleading validation evidence.
8. Unrelated changes bundled into the same task.

## Output Contract

Return findings first, ordered by severity:

- `High`: likely breakage, wrong active policy, or false validation confidence.
- `Medium`: policy drift, stale guidance, missing check coverage, or likely future confusion.
- `Low`: minor inconsistency that can wait.

For each finding include:

- severity,
- file and line,
- problem,
- why it matters,
- concrete fix.

After findings, include:

- `Open Questions` only when a decision is genuinely needed,
- `Validation Reviewed` with commands or evidence checked,
- `Residual Risk` if validation passed but coverage is incomplete.

If there are no findings, say that clearly and name any remaining test or validation gaps.

## Guardrails

- Do not edit files while using this skill unless the user explicitly asks for fixes.
- Do not comment on style unless it affects behavior, discoverability, or maintainability.
- Treat historical plans as historical records; flag them only when active docs or tracker entries make stale guidance look current.
- Prefer precise local file references over broad commentary.
