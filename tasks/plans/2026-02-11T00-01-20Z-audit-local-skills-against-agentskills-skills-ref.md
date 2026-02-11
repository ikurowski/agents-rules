# Audit local skills against agentskills `skills-ref`

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Assess whether local skills in `skills/` conform to the `skills-ref` reference validator from `https://github.com/agentskills/agentskills/tree/main/skills-ref`. The user-visible outcome is a concrete pass/fail report per local skill, plus actionable gaps required to align with the reference specification.

## Progress

- [x] (2026-02-11T00:01:20Z) Initial task entry and startup policy review completed (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`).
- [x] (2026-02-11T00:01:32Z) Retrieved upstream `agentskills/agentskills` repository snapshot to `.tmp/agentskills-20260211000132`.
- [x] (2026-02-11T00:02:50Z) Set up isolated runtime for `skills-ref` CLI in `.tmp/skills-ref-venv-20260211000250`.
- [x] (2026-02-11T00:03:20Z) Ran `validate`, `read-properties`, and `to-prompt` for all standalone local skills.
- [x] (2026-02-11T00:03:37Z) Recorded findings and updated tracker docs.

## Surprises & Discoveries

`skills-ref` path from the user-provided URL is a Python package (`src`, `tests`) rather than a folder of ready-made skills, so the right comparison mode is validation of our skill metadata/frontmatter against its parser/validator rules.

Initial attempt to run CLI directly failed with `ModuleNotFoundError: No module named 'click'`, confirming dependencies must be installed before validation.

## Decision Log

Decision: Treat "sprawdzenie skilli" as conformance audit of local `skills/*/SKILL.md` against `skills-ref` validation and parsing behavior.
Rationale: Upstream `skills-ref` is a validator library; direct side-by-side content comparison is less useful than executable conformance checks.
Timestamp/Author: 2026-02-11T00:01:40Z / Codex

Decision: Exclude `skills/shared/` from per-skill validation because it is a shared references module without `SKILL.md`.
Rationale: `skills-ref validate` expects a skill directory containing `SKILL.md`; shared references are intentionally not standalone skills.
Timestamp/Author: 2026-02-11T00:01:45Z / Codex

Decision: Use a dedicated temporary virtual environment under `.tmp/` instead of global Python package installation.
Rationale: Isolates audit tooling, avoids polluting host environment, and keeps reruns deterministic.
Timestamp/Author: 2026-02-11T00:02:50Z / Codex

## Outcomes & Retrospective

Completed. All standalone local skills passed `skills-ref` validation:
- `skills/deep-researcher`
- `skills/skill-creator`
- `skills/project-auditor-improver`

`skills/shared` failed as expected with `Missing required file: SKILL.md`, confirming it should remain treated as a shared module, not a standalone skill package.

No conformance gaps were found for the three audited skill packages. No skill content changes were required.

## Context and Orientation

Local skills are in `skills/deep-researcher`, `skills/skill-creator`, and `skills/project-auditor-improver`, each with `SKILL.md` frontmatter and references. Shared modules live in `skills/shared/references/` and are consumed by skills but are not standalone skill packages. Upstream reference validator code is in `.tmp/agentskills-20260211000132/skills-ref/src/skills_ref/` with CLI entrypoints in `cli.py` and checks in `validator.py`.

## Terminology and Decomposition

- Primary Question: Do local skill packages conform to `agentskills/skills-ref` validator expectations?
- Sub-question: Which local directories should be treated as skills for this audit?
- Sub-question: What exact validator rules in `skills_ref/validator.py` are relevant to current frontmatter/schema?
- Sub-question: Which skills pass `validate`, and what failures or warnings appear under `read-properties`/`to-prompt`?
- Question-to-Evidence Matrix: Evidence comes from upstream validator source, CLI command outputs, and local `SKILL.md` files.
- Entry Criteria: Add a new Sub-question only if it changes validation commands or acceptance outcomes.
- Impediment: Resolved by isolated environment setup in `.tmp/skills-ref-venv-20260211000250`.

## Plan of Work

Create an isolated virtual environment under `.tmp/` and install `skills-ref` from the cloned upstream folder using editable mode. Execute `validate` and `read-properties` for each local skill directory with `SKILL.md`. Capture outputs and map them to validator rules. If there are failures, inspect specific frontmatter fields and report minimal changes needed; do not edit skill files unless explicitly requested. Update this ExecPlan and `tasks/todo.md` with a concise completion outcome.

## Concrete Steps

1. Create venv and install tooling:
Run `python -m venv .tmp/skills-ref-venv` then `.tmp/skills-ref-venv/Scripts/python -m pip install -e .tmp/agentskills-20260211000132/skills-ref`.
Expected result: `skills-ref` package is importable in the venv.

2. Run validator:
Run `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli validate skills/<skill-name>` for each local skill directory.
Expected result: explicit pass/fail per skill.

3. Extract parsed properties:
Run `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli read-properties skills/<skill-name>`.
Expected result: JSON properties confirming frontmatter parse.

4. Optional prompt assembly check:
Run `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli to-prompt skills/deep-researcher skills/skill-creator skills/project-auditor-improver`.
Expected result: XML block with three skills and correct locations.

## Validation and Acceptance

Acceptance criteria:
- Upstream `skills-ref` validator executes locally without import/runtime errors.
- Each local skill package with `SKILL.md` has a documented validation result.
- Any nonconformance is tied to specific validator rules and concrete remediation guidance.
- `tasks/todo.md` contains a completed task record with ExecPlan link and short outcome.

Verification commands:
- `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli validate skills/deep-researcher`
- `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli validate skills/skill-creator`
- `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli validate skills/project-auditor-improver`
- `.tmp/skills-ref-venv/Scripts/python -m skills_ref.cli read-properties skills/deep-researcher`

## Idempotence and Recovery

Re-running validation commands is safe and side-effect free. If environment setup fails, delete `.tmp/skills-ref-venv` and recreate it. If upstream clone path changes, update commands to the newest `.tmp/agentskills-*` folder and rerun checks. No production/runtime code paths are modified by this audit.

## Artifacts and Notes

Execution evidence:
- `.tmp/agentskills-20260211000132/skills-ref` contains `src/`, `tests/`, `README.md`, and `pyproject.toml`.
- `skills-ref/src/skills_ref/validator.py` defines required frontmatter fields `name` and `description` and enforces directory-name match.
- `.tmp/skills-ref-venv-20260211000250/Scripts/python -m skills_ref.cli validate skills/deep-researcher` returned `Valid skill: skills\deep-researcher`.
- `.tmp/skills-ref-venv-20260211000250/Scripts/python -m skills_ref.cli validate skills/skill-creator` returned `Valid skill: skills\skill-creator`.
- `.tmp/skills-ref-venv-20260211000250/Scripts/python -m skills_ref.cli validate skills/project-auditor-improver` returned `Valid skill: skills\project-auditor-improver`.
- `.tmp/skills-ref-venv-20260211000250/Scripts/python -m skills_ref.cli validate skills/shared` returned `Missing required file: SKILL.md`.
- `.tmp/skills-ref-venv-20260211000250/Scripts/python -m skills_ref.cli to-prompt ...` generated `<available_skills>` XML with 3 local skills and correct `SKILL.md` locations.

## Interfaces and Dependencies

N/A - this task performs external reference validation and documentation updates only; no project runtime interfaces or dependencies are changed.

Change note: 2026-02-11T00:01:20Z - Created ExecPlan for conformance audit against upstream `skills-ref` and recorded initial discovery/decisions.
Change note: 2026-02-11T00:03:37Z - Marked execution complete with validator outcomes and final evidence.
