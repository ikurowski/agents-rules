# Source and Evidence Policy

When to load: Use when collecting sources, citing evidence, or resolving conflicts between sources.

## Table of Contents

1. Source priority
2. Citation block format
3. Date handling
4. Conflict resolution and tie-breakers
5. Local extension protocol
6. Escalation rule

## Source Priority

Use this source order:

1. Current-year primary sources where available.
2. Older but still authoritative primary sources.
3. Secondary sources only as gap fillers.

Primary sources include official product docs, official changelogs, official blogs, and standards body publications.

## Citation Block Format

For each material recommendation, include:

- `Link`: source URL
- `Date`: publication date or verification date note
- `Why`: one-sentence relevance to the exact question

## Date Handling

If publication date is unavailable, write:

- `date not published; verified on YYYY-MM-DD`

## Conflict Resolution and Tie-Breakers

When sources conflict:

1. State the conflicting claims in concise paraphrase.
2. Compare authority, recency, and direct applicability.
3. Choose the direction with stronger fit to current scope.

Tie-breakers (in order):

1. Product-specific source over generic guidance.
2. Newer source over older source.
3. Operationally testable recommendation over vague recommendation.

## Local Extension Protocol

When a skill needs extra evidence constraints, use:

- `Apply <path-to-this-file> for:` plus imported capabilities,
- `Local Extension (skill-specific):` only for domain deltas.

Constraints:

1. Do not copy or restate Source Priority, Date Handling, or Tie-Breakers blocks in skill-local docs.
2. Keep local extension to additional checks/outputs only.
3. If the same extension is repeated across 2+ skills, promote it into this shared file.

## Escalation Rule

If evidence remains contradictory on a critical claim, mark uncertainty explicitly and propose the fastest additional verification step.
