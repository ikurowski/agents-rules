# Evidence Quality Rubric

When to load: Use when assessing source quality and setting `Evidence Quality` and `Confidence`.

Use reporting dimensions and labels from `references/assessment-profile.md`.

## Source Quality Checks

Review these checks before assigning an `Evidence Quality` label:

1. Authority: Is the source authoritative for this domain?
2. Recency: Is it current enough for the decision?
3. Applicability: Does it match the exact use case?
4. Verifiability: Can the claim be traced and checked?
5. Risk sensitivity: Does it handle failure or security implications?

## Evidence Quality

Use the `Evidence Quality` labels defined in `references/assessment-profile.md`.

Apply them with this local decision rule:

- use `strong` only when most checks are clearly satisfied and no major unresolved conflict remains,
- use `limited` when one or more core checks materially fail or unresolved conflict still dominates the claim,
- otherwise default to `adequate`.

Do not average the source-quality checks into a numeric total.

## Confidence

Use the `Confidence` labels defined in `references/assessment-profile.md`.

Set `Confidence` separately from `Evidence Quality`:

- start from the `Confidence` definitions,
- lower confidence when core claims remain materially contested, indirect, or fragile,
- do not raise confidence just because source quality checks look strong.

Strong `Evidence Quality` does not automatically require high `Confidence`, and limited `Evidence Quality` does not automatically forbid a conditional recommendation.

## Reporting

Use the reporting template from `references/assessment-profile.md`.

At minimum for this rubric-driven output report:

- `Evidence Quality`
- `Confidence`

## Integrity Mini-Gate

Run this gate before final synthesis on substantial research tasks:

| Check | PASS | REVISE | DISCLOSE |
|---|---|---|---|
| Source existence | Material sources can be opened or otherwise verified | A key source is missing, broken, or only recalled from memory | Source cannot be verified, but claim is non-critical |
| Claim support | Key claims map to cited evidence | A key claim is unsupported, overstated, or source-mismatched | Support is partial and clearly labeled |
| Conflict handling | Major conflicts are identified and weighed | Conflicting evidence is ignored or flattened | Conflict remains unresolved after reasonable checking |
| Recency fit | Sources are current enough for the decision | Time-sensitive claims rely on stale material | Current source is unavailable; confidence is lowered |
| Scope discipline | Evidence matches the user's exact question | Evidence answers a broader or different question | Applicability limits are explicit |

Gate outcome:

- `PASS`: proceed to reviewer pass.
- `REVISE`: do one targeted retry or source correction before finalizing.
- `DISCLOSE`: proceed only if the limitation is clearly stated and confidence is lowered.

Retry limits are owned by `references/pipeline.md`.

## Conflict Handling

When evidence conflicts:

1. identify the exact conflicting claims,
2. compare source authority, recency, and applicability,
3. prefer the source with better fit to the question,
4. state residual uncertainty explicitly.
