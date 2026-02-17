# Evaluation Gates Standard

Mandatory gates for harness architecture quality:

1. `npm run contracts:check`
2. `npm run skills:validate`
3. `npm run docs:map:check`
4. `npm run harness:protocol:check`
5. `npm run evals:run`
6. `npm run idempotency:check`
7. `npm run security:agent`
8. `npm run ci`

A change is not accepted when any gate fails.
