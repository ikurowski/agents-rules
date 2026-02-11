# Evidence Quality Rubric

When to load: Use when scoring source quality and mapping scores to confidence.

## Table of Contents

1. Shared U5 scoring reference
2. Scoring dimensions
3. Aggregate score interpretation
4. Confidence mapping
5. Conflict handling

## Shared U5 Scoring Reference

Apply `../../shared/references/u5-scoring-bands.md` for:

- `Scale Definition`,
- `Derived Label Thresholds`,
- `Reporting Format`.

## Scoring Dimensions

Score each dimension from 1 to 5:

1. Authority: Is the source authoritative for this domain?
2. Recency: Is it current enough for the decision?
3. Applicability: Does it match the exact use case?
4. Verifiability: Can the claim be traced and checked?
5. Risk sensitivity: Does it handle failure/security implications?

Compute:

- `evidence_score = average(all dimension scores)` (range `1.0-5.0`)
- `evidence_label` from U5 bands above

## Aggregate Score Interpretation

- `4.2-5.0`: high-quality evidence
- `3.4-4.1`: acceptable evidence
- `2.5-3.3`: weak evidence
- `1.0-2.4`: insufficient evidence

## Confidence Mapping

Report both:

- `confidence_score` (`1.0-5.0`)
- `confidence_label` (`low|medium|high`)

Recommended mapping rule:

- start from `evidence_score`,
- subtract `0.5` if major source contradiction remains unresolved,
- subtract `0.5` if critical evidence is indirect for core claims,
- clamp to `1.0-5.0`.

Then map to label using U5 bands.

## Conflict Handling

When evidence conflicts:

1. identify the exact conflicting claims,
2. compare source authority and applicability,
3. prefer the source with better domain fit and recency,
4. state residual uncertainty explicitly.
