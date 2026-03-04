# Evidence Quality Rubric

When to load: Use when assessing source quality and setting `Evidence Quality` and `Confidence`.

Use reporting dimensions and labels from `../../shared/references/assessment-profile.md`.

## Source Quality Checks

Review these checks before assigning an `Evidence Quality` label:

1. Authority: Is the source authoritative for this domain?
2. Recency: Is it current enough for the decision?
3. Applicability: Does it match the exact use case?
4. Verifiability: Can the claim be traced and checked?
5. Risk sensitivity: Does it handle failure or security implications?

## Evidence Quality

Use the `Evidence Quality` labels defined in `../../shared/references/assessment-profile.md`.

Apply them with this local decision rule:

- use `strong` only when most checks are clearly satisfied and no major unresolved conflict remains,
- use `limited` when one or more core checks materially fail or unresolved conflict still dominates the claim,
- otherwise default to `adequate`.

Do not average the source-quality checks into a numeric total.

## Confidence

Use the `Confidence` labels defined in `../../shared/references/assessment-profile.md`.

Set `Confidence` separately from `Evidence Quality`:

- start from the shared `Confidence` definitions,
- lower confidence when core claims remain materially contested, indirect, or fragile,
- do not raise confidence just because source quality checks look strong.

Strong `Evidence Quality` does not automatically require high `Confidence`, and limited `Evidence Quality` does not automatically forbid a conditional recommendation.

## Reporting

Use the shared reporting template from `../../shared/references/assessment-profile.md`.

At minimum for this rubric-driven output report:

- `Evidence Quality`
- `Confidence`

## Conflict Handling

When evidence conflicts:

1. identify the exact conflicting claims,
2. compare source authority, recency, and applicability,
3. prefer the source with better fit to the question,
4. state residual uncertainty explicitly.
