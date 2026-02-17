# Skills Engine Architecture

The skills engine in `src/skills-engine` validates markdown-first skills without embedding executable skill runtime code in `skills/*`.

## Components

1. `parser/parse-skill-markdown.ts`
   - extracts headings and `Apply ... for` directives.
2. `resolver/resolve-reference-headings.ts`
   - resolves markdown headings in referenced files.
3. `validators/validate-skill-documents.ts`
   - checks path/heading integrity for `Apply ... for` imports.
4. `validators/validate-workflow-specs.ts`
   - validates `skills/<skill>/workflow/*.yaml` against schema.

## SSOT Boundary

- `skills/*` remains declarative (`SKILL.md`, references, workflow specs).
- Executable validation/parsing logic stays in `src/skills-engine`.
