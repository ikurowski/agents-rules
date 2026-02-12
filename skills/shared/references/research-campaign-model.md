# Research Campaign Model

When to load: Load at invocation time for every research/decision task. For non-research/decision tasks, mark campaign decomposition as `N/A` with one-sentence rationale.

## Table of Contents

1. Canonical Terms
2. Primary question frame
3. Sub-question register
4. Question-to-evidence matrix
5. Entry criteria for emergent sub-questions
6. Depth cap
7. Completion definition

## Canonical Terms

Use canonical terms exactly as written below and do not introduce local acronyms:

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

## Primary Question Frame

Define one top-level `Primary Question`:

- `Primary Question`: `<single top-level question to resolve>`

If multiple top-level questions are provided, split into separate campaigns.

## Sub-question Register

Track all initial and emergent sub-questions in one register.

ID format:

- `Sub-question-1`, `Sub-question-2`, ...

Register template:

| ID | Type | Parent | Status | Priority (U5) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | resolved | 4.2 | yes | answered |
| Sub-question-2 | emergent | Primary Question | in_progress | 3.9 | yes | include-now |
| Sub-question-3 | emergent | Primary Question | deferred | 2.6 | no | next-task |

Status values:

- `open`
- `in_progress`
- `resolved`
- `deferred`

Decision values:

- `answered`
- `include-now`
- `next-task`
- `drop`

## Question-to-Evidence Matrix

Map each `Sub-question-*` to closure outcome:

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | analysis | answered | <anchor> |
| Sub-question-2 | analysis | deferred | <reason + next task> |

`Question-to-Evidence Matrix` must include every tracked `Sub-question-*`.

## Entry Criteria for Emergent Sub-questions

Admit emergent `Sub-question-*` into current scope only if:

- `Blocking = yes`, or
- `Priority (U5) >= 3.8`.

Otherwise set:

- `Status = deferred`
- `Decision = next-task`

## Depth Cap

Allow only one decomposition layer:

- `Primary Question -> Sub-question` is allowed.
- `Sub-question -> Sub-question` is not allowed.

## Completion Definition

Mark task `completed` only when:

1. every `Sub-question-*` is `resolved` or explicitly `deferred` with rationale,
2. every `Sub-question-*` has a decision (`answered`, `include-now`, `next-task`, or `drop`),
3. `Question-to-Evidence Matrix` has no unresolved gaps.
