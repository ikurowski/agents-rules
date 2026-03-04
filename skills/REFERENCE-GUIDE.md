# Skill Reference Guide

This file defines the lightweight conventions for skill-local references and truly shared reference files.

## Purpose

Keep detailed skill guidance close to the skill that uses it. Use a shared reference only when it is genuinely canonical across skills or repo-wide outputs. Avoid turning the repository into a global policy maze.

## Keep a Reference File Only When

1. it holds procedure detail that would bloat the main `SKILL.md`,
2. the detail is reused within that skill,
3. splitting it out reduces duplication or makes the main skill easier to scan.

## Writing Rules

1. Keep flow, trigger conditions, and output contract in `SKILL.md`.
2. Keep detailed checklists, rubrics, and templates in `references/*.md`.
3. Do not repeat the full skill flow across multiple local references.
4. Prefer local references over global sharing.
5. Promote a rule into `skills/shared/references/` only when:
   - a second real skill needs it, or
   - it defines a deliberately universal scoring or policy primitive that should stay canonical repo-wide.

## Minimal Structure

Use only the sections the file needs. Helpful defaults are:

- `When to load`
- short procedure or checklist
- template, rubric, or scoring rule when the file drives output

Do not add section scaffolding just to satisfy format.
