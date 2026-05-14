# Research Method

When to load: Use when structuring intake, decomposition, source collection, evidence tables, and the final brief.

## Intake Setup

Before collecting sources, define:

- `Primary Question`
- in-scope and out-of-scope boundary
- key constraints (time, cost, risk, compliance)
- output format
- evaluation criteria

Optional but useful:

- decision owner and deadline
- options already being considered
- explicit doubts to resolve after phase 1

## Readiness Loop

1. List only the missing required fields.
2. Ask up to 3 targeted questions.
3. Wait for the user's reply.
4. Re-check readiness.
5. If the user cannot add more detail, proceed with explicit assumptions and lower confidence.

## Question Model

Use these canonical terms:

- `Primary Question`
- `Sub-Question`
- `Question-to-Evidence Matrix`
- `Impediment`

Rules:

1. Keep one `Primary Question`.
2. Add a `Sub-Question` only when it materially affects recommendation quality.
3. Allow only one decomposition layer: `Primary Question -> Sub-Question`.
4. Admit an emergent `Sub-Question` into the current run only if it is blocking or clearly high-priority.
5. Resolve or explicitly defer every tracked `Sub-Question`.
6. Record blockers as `Impediment` with next action.

## Source Collection

Use this source order:

1. Current-year primary sources where available.
2. Older but still authoritative primary sources.
3. Secondary sources only as gap fillers.

For each material claim record:

- `Link`
- `Date`
- `Why` it matters to the question
- limitations or contradiction notes

If a date is unavailable, write `date not published; verified on YYYY-MM-DD`.

When sources conflict:

1. State the conflicting claims briefly.
2. Compare authority, recency, and applicability.
3. Prefer the source with better fit to the exact question.
4. State residual uncertainty explicitly when the conflict remains.

## Evidence Table Template

Use this `Question-to-Evidence Matrix` table:

| Primary Question | Sub-Question | Claim | Source | Date | Why | Evidence Quality | Notes |
|---|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... | ... |

Use `Evidence Quality` labels from `references/assessment-profile.md`.

## Task Artifacts

Use only the artifacts that help the current task:

- `Research Plan`: question, boundaries, criteria, and planned evidence sources.
- `Evidence Notes`: material claims with links, dates, source quality, and caveats.
- `Integrity Notes`: gate failures, weak evidence, contradictions, and retry outcome.
- `Reviewer Notes`: strongest counterargument, missing evidence, and risk if wrong.
- `Final Brief`: recommendation, assessment profile, open risks, and next validation.

Do not maintain a permanent source catalog unless the user explicitly asks for one.

## Subagent Result Contract

When the user explicitly requests subagents, give each delegated task a bounded question and ask for this result shape:

1. `Question handled`
2. `Sources checked` with links, source dates or verified-on dates, and caveats
3. `Key findings` mapped to the sources that support them
4. `Evidence Quality`
5. `Contradictions or gaps`
6. `Recommendation impact`
7. `Confidence`
8. `What the parent agent should verify`

Keep delegated outputs short. The parent agent must integrate, challenge, and cite them before finalizing.

## Integration Gate

Before using delegated results in a final brief:

1. Identify agreement and disagreement across subagent results.
2. Check whether any result relies on weak, indirect, stale, or unverifiable evidence.
3. Resolve contradictions using authority, recency, and applicability.
4. Downgrade confidence when conflicts remain unresolved.
5. Keep the final recommendation owned by the parent agent.

## Decision Brief Template

1. Question and scope
2. Criteria
3. Key evidence summary
4. Option comparison
5. Recommendation
6. Assessment profile (`Confidence` required; add other fields when relevant) and open risks
7. Next validation step

## Source Discovery Heuristics

Prefer a search method over a fixed source list.

Start with the source type that is closest to the claim:

1. official product docs, standards, specs, release notes, changelogs, or maintainers' primary materials,
2. peer-reviewed papers, strong empirical studies, or high-quality technical reports when the question is scientific or measurement-heavy,
3. professional engineering or domain blog posts only when they add direct operational detail, case evidence, or implementation insight,
4. secondary summaries only as gap fillers or triangulation aids.

Search prompts should target:

- the exact product, standard, method, or system named in the question,
- date-sensitive terms such as version, release, changelog, policy, benchmark, incident, or RFC,
- evidence-bearing formats such as documentation, paper, report, postmortem, or maintainer write-up.

For each candidate source ask:

- Is this close enough to the original claim?
- Is it current enough for the decision?
- Does it actually match the use case instead of only the general topic?
- Does it contain observable evidence, or only opinion?

If no strong primary source exists, say so explicitly and downgrade confidence instead of inventing a stable source set.
