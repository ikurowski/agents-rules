# Skill Reference Guide

This file defines the minimal shared conventions for skill reference documents under `skills/*/references/`.

## Purpose

Keep skill references consistent without turning the shared layer into a policy dump.

## Shared Module Rule

Keep a rule in `skills/shared/references/` only when it has at least two live consumers and does not need skill-specific wording.

If a shared module drops below that threshold, move it back into the relevant skill or remove it.

## Consumption Pattern

When a skill uses shared policy, use this exact wording pattern:

1. `Apply <relative-path-to-shared-reference> for:`
2. list imported section names as bullets using exact heading text and case from the referenced file.
3. add `Local Extension (skill-specific):` only for delta behavior not covered by shared policy.

Rules:

1. Do not restate thresholds, tie-breakers, or base procedures already defined in shared references.
2. Keep local extension delta-only; never copy full shared sections.
3. Promote a local rule into `skills/shared/references/` only when the second live consumer actually exists.

## Required Reference Structure

Each `references/*.md` file should include:

1. `When to load:` one-line trigger for progressive disclosure.
2. `## Table of Contents` with section order.
3. Procedure sections in this order when applicable:
   - setup/inputs,
   - evaluation/scoring rules,
   - output template,
   - escalation or failure handling.
4. Explicit decision thresholds (not vague language).
5. At least one reusable template or checklist when the file drives user-facing output.

If a section is not relevant, write `N/A` and one sentence why.

## Skill Workflow Specs

Each executable skill directory may include declarative workflow specs under `workflow/*.yaml`.

Rules:

1. Workflow spec files are source-of-truth inputs when a skill chooses to use them.
2. Keep workflow meaning understandable from the YAML itself; do not depend on hidden repo-local runtime code to interpret the file.
