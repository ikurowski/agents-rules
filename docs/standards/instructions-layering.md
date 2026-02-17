# Instructions Layering Standard

Instruction context is assembled in precedence order using source-of-truth paths.

## Layer Order

1. `AGENTS.md`
2. `PLANS.md`
3. `tasks/todo.md`
4. `tasks/lessons.md`
5. `skills/REFERENCE-STANDARD.md`
6. shared skill references

## Compaction Policy

When context budget is constrained, keep higher-precedence layers first and drop lower-precedence shared references deterministically.

## Enforcement

- Runtime loop uses `src/harness/context/instruction-layers.ts`.
- Structural consistency is checked via `npm run docs:map:check`.
