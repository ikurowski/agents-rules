# Evaluation Gates Standard

Mandatory gates for harness architecture quality:

1. `npm run jsdoc:check`
2. `npm run skills:declarative:check`
3. `npm run contracts:check`
4. `npm run skills:validate`
5. `npm run docs:map:check`
6. `npm run harness:protocol:check`
7. `npm run evals:run`
8. `npm run idempotency:check`
9. `npm run security:agent`
10. `npm run ci`

A change is not accepted when any gate fails.
