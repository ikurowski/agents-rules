# Canonical Terminology

When to load: Use when defining or validating question decomposition terms in skill docs and research/audit workflows.

## Table of Contents

1. Inputs and usage scope
2. Canonical definitions
3. Minimum operating rules
4. Output template
5. Escalation handling

## Inputs and Usage Scope

Apply this module when a workflow needs explicit decomposition from a main question into tractable follow-up questions and evidence mapping.

Typical inputs:

- top-level decision/research problem statement,
- scope boundary,
- known blockers and constraints.

## Canonical Definitions

- `Primary Question`: main decision or research question.
- `Sub-question`: decomposed follow-up question needed to answer the primary question.
- `Question-to-Evidence Matrix`: mapping from each question/sub-question to supporting evidence.
- `Entry Criteria`: explicit rule that determines whether a new sub-question enters current scope.
- `Impediment`: blocker that prevents progress and requires explicit handling.

## Minimum Operating Rules

1. Keep one explicit `Primary Question` per workflow thread unless a split is explicitly justified.
2. Add a `Sub-question` only when it materially changes recommendation quality or execution outcome.
3. Record admitted questions in the `Question-to-Evidence Matrix`.
4. Treat unresolved blockers as `Impediment` and document owner + next action.

## Output Template

Use this compact template when reporting decomposition state:

- `primary_question`: `<text>`
- `sub_questions`: `<list>`
- `entry_criteria`: `<short rule>`
- `impediments`: `<list or none>`
- `question_to_evidence_matrix`: `<path/table/summary>`

## Escalation Handling

If terminology is mixed or ambiguous:

1. normalize terms to this module's canonical names,
2. preserve legacy wording only as historical context,
3. add one-line note that canonical terminology was enforced.
