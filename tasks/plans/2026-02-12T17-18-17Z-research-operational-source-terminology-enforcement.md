# Deep Research: Operational Source for Terminology Enforcement (MD-only vs TS-objects vs Hybrid)

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` are updated as work progresses.

## Purpose / Big Picture

Deliver a decision-ready research memo that answers one `Primary Question`: whether AI-agent terminology governance should be driven by `Markdown-only`, `TypeScript schema-first objects`, or a `Hybrid` model (`schema` as source of truth + generated `.md` projection).

Observable outcome:

1. A source-backed recommendation with explicit scoring and tie-break logic.
2. A `Question-to-Evidence Matrix` that maps each material claim to primary sources.
3. Clear `Entry Criteria` for migration and explicit `Impediment` handling.
4. A practical 30/60/90 rollout plan with measurable indicators.

## Progress

- [x] (2026-02-12T17:18:17Z) Created ExecPlan and registered research objective.
- [x] (2026-02-12T17:23:00Z) Collected and verified all required primary sources.
- [x] (2026-02-12T17:30:00Z) Completed option scoring across six criteria with deterministic verdict rule.
- [x] (2026-02-12T17:37:00Z) Produced final recommendation, migration criteria, impediments, and 30/60/90 plan.
- [x] (2026-02-12T17:41:00Z) Updated `tasks/todo.md` with completion outcome and plan link.

## Surprises & Discoveries

The strongest operational insight is that model-vendor tooling converges on schema-driven contracts (`input_schema`, function parameter schemas, structured outputs), while markdown standards intentionally allow flavor-level extension variance. This makes `MD-only` readable but weak as a deterministic operational control plane.

## Decision Log

Decision: Keep evaluation weights equal across six criteria.  
Rationale: User confirmed balanced priority between operational rigor and maintenance cost.  
Timestamp/Author: 2026-02-12T17:24:00Z / agent

Decision: Mark recommendation as unconditional only if evidence for criteria (1) and (2) is high-confidence.  
Rationale: Deterministic interpretation and parsability are foundational to automation and enforcement.  
Timestamp/Author: 2026-02-12T17:30:00Z / agent

Decision: Recommend `Hybrid` as default target architecture and `MD-only` only for low-automation contexts.  
Rationale: Hybrid keeps human-readable docs while preserving one machine-verifiable source of truth and CI enforceability.  
Timestamp/Author: 2026-02-12T17:36:00Z / agent

## Outcomes & Retrospective

Completed. Recommendation is `Hybrid` (`schema-first source of truth + generated markdown projection`) with high confidence. `TS-objects` ranks second and is viable intermediate state. `MD-only` ranks lowest for deterministic agent interoperability and policy enforcement.

## Context and Orientation

Repository context:

1. This task is research/policy guidance, not code implementation.
2. Outputs are tracked through `tasks/plans/*` (details) and `tasks/todo.md` (high-level status).
3. Canonical terminology constraints must remain unchanged:
   - `Primary Question`
   - `Sub-question`
   - `Question-to-Evidence Matrix`
   - `Entry Criteria`
   - `Impediment`

## Terminology and Decomposition

`Primary Question`:

- Czy dla pracy agentĂłw AI nad analizÄ… i egzekwowaniem terminologii lepszym ĹşrĂłdĹ‚em operacyjnym jest MD-only, TS-objects schema-first, czy model hybrydowy?

`Sub-question Register`:

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | resolved | 5.0 | yes | answered |
| Sub-question-2 | initial | Primary Question | resolved | 4.8 | yes | answered |
| Sub-question-3 | initial | Primary Question | resolved | 4.8 | yes | answered |
| Sub-question-4 | initial | Primary Question | resolved | 4.4 | no | answered |
| Sub-question-5 | initial | Primary Question | resolved | 4.7 | yes | answered |
| Sub-question-6 | initial | Primary Question | resolved | 4.9 | yes | answered |
| Sub-question-7 | initial | Primary Question | resolved | 4.5 | no | answered |

`Question-to-Evidence Matrix`:

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | matrix + comparison table | answered | CommonMark/GFM show extension/flavor variance -> weaker deterministic interpretation in MD-only. |
| Sub-question-2 | matrix + comparison table | answered | TS erased types require runtime validation layer; JSON Schema + vendor schema contracts increase determinism. |
| Sub-question-3 | matrix + comparison table | answered | Schema validators and model API schema contracts allow hard CI gates. |
| Sub-question-4 | matrix + comparison table | answered | MD/frontmatter has lower onboarding friction than schema toolchain. |
| Sub-question-5 | matrix + comparison table | answered | Hybrid reduces drift by enforcing one canonical schema and generating docs projection. |
| Sub-question-6 | matrix + comparison table | answered | OpenAI/Anthropic/Gemini tool interfaces are schema-centric. |
| Sub-question-7 | recommendation + entry criteria | answered | Migration is justified when automation/CI/drift thresholds are met. |

## Plan of Work

1. Validate each required source and extract only claim-relevant evidence.
2. Map evidence to the seven sub-questions in one consolidated `Question-to-Evidence Matrix`.
3. Score each option (`MD-only`, `TS-objects`, `Hybrid`) on six criteria using equal weights.
4. Apply explicit tie-break rules and produce final verdict.
5. Define migration `Entry Criteria`, `Impediment` inventory with mitigations, and 30/60/90 rollout plan.

## Concrete Steps

1. Verify repository state:
   - Command: `git status --short`
   - Expected: clean state before writing new research artifacts.
2. Collect and inspect primary sources:
   - Commands: web source retrieval (`open`/`find`) for all required URLs.
   - Expected: explicit evidence anchors for all seven sub-questions.
3. Write findings into this ExecPlan and update tracker:
   - Files: `tasks/plans/2026-02-12T17-18-17Z-research-operational-source-terminology-enforcement.md`, `tasks/todo.md`.
   - Expected: complete memo + high-level completion record.

## Validation and Acceptance

Acceptance criteria and status:

1. Executive summary present with explicit verdict.
   - Status: pass.
2. `Question-to-Evidence Matrix` maps each significant claim to primary sources.
   - Status: pass.
3. Option comparison table covers all six criteria for all three options.
   - Status: pass.
4. Recommendation includes clear rationale, confidence, and tie-break handling.
   - Status: pass.
5. 30/60/90 implementation plan includes measurable indicators.
   - Status: pass.
6. `Impediment` list includes impact/probability/mitigation/owner/trigger.
   - Status: pass.

## Idempotence and Recovery

This is docs-only work. Re-running is safe:

1. Re-validate primary sources and refresh verification dates.
2. Recompute scoring table if criteria or weights change.
3. Update only current ExecPlan and prepend one new history entry in `tasks/todo.md`.

If a source changes materially, mark the related claim as uncertain and rerun comparison before changing recommendation.

## Artifacts and Notes

## Executive summary (krĂłtko)

Werdykt: **`Hybrid` (schema as source of truth + generated `.md`)** jest najlepszym modelem operacyjnym dla agentĂłw AI pracujÄ…cych nad terminologiÄ….  
PowĂłd: Ĺ‚Ä…czy wysokÄ… deterministycznoĹ›Ä‡ i walidowalnoĹ›Ä‡ schematu z niskim kosztem konsumpcji dla ludzi (czytelny markdown), minimalizujÄ…c drift semantyczny dziÄ™ki jednemu kanonicznemu ĹşrĂłdĹ‚u.

Confidence:

- `confidence_score: 4.4/5`
- `confidence_label: high`

## Question-to-Evidence Matrix

| Sub-question ID | Teza | Evidence (primary source anchors) |
|---|---|---|
| Sub-question-1 | MD-only jest podatny na rĂłĹĽnice interpretacji parserĂłw/flavorĂłw. | CommonMark 0.31.2 definiuje bazowy standard (`published 2024-01-28`), a GFM jawnie dodaje rozszerzenia (np. tabele/strikethrough/autolink/tasklist) wzglÄ™dem CommonMark (`published 2017-03-14`) -> wieloĹ›Ä‡ flavorĂłw wpĹ‚ywa na deterministycznoĹ›Ä‡ parsowania. Linki: https://spec.commonmark.org/0.31.2/, https://github.github.io/gfm/ |
| Sub-question-2 | TS type annotations nie zapewniajÄ… runtime enforcement bez dodatkowej walidacji. | TypeScript Handbook: typy sÄ… usuwane podczas kompilacji (`Erased Types`; data niepublikowana, verified 2026-02-12). TSConfig `erasableSyntaxOnly` pokazuje granicÄ™ skĹ‚adni usuwalnej, ale nie wprowadza runtime validation. Linki: https://microsoft.github.io/TypeScript-New-Handbook/everything/, https://www.typescriptlang.org/tsconfig/erasableSyntaxOnly.html |
| Sub-question-2 | Schema-first daje deterministyczne kontrakty maszynowe. | JSON Schema to deklaratywny standard walidacji struktury/ograniczeĹ„ danych (`draft 2020-12`); OpenAI Structured Outputs/Anthropic `input_schema`/Gemini function schemas uĹĽywajÄ… kontraktĂłw schematowych do kontroli wejĹ›Ä‡/wyjĹ›Ä‡. Linki: https://json-schema.org/specification, https://json-schema.org/draft/2020-12, https://developers.openai.com/api/docs/guides/structured-outputs, https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use, https://ai.google.dev/gemini-api/docs/function-calling |
| Sub-question-3 | Schema-first/hybrid wspiera twardy gate CI. | JSON Schema + walidatory (np. ajv) dajÄ… binarny pass/fail na kontrakcie; OpenAI/Anthropic/Gemini wymagajÄ… schematĂłw funkcji/narzÄ™dzi, co umoĹĽliwia testy kontraktowe w pipeline. Linki: https://json-schema.org/specification, https://developers.openai.com/api/docs/guides/structured-outputs, https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use, https://ai.google.dev/gemini-api/docs/function-calling |
| Sub-question-4 | MD-only ma niĹĽszy prĂłg wejĹ›cia i onboardingowy. | Markdown to prosty format tekstowy; GitHub Docs i Jekyll operujÄ… przez frontmatter + plain markdown authoring, co obniĹĽa barierÄ™ dla contributorĂłw nietechnicznych (dates not published; verified 2026-02-12). Linki: https://docs.github.com/en/enterprise-cloud@latest/contributing/writing-for-github-docs/using-yaml-frontmatter, https://jekyllrb.com/docs/front-matter/ |
| Sub-question-5 | Hybrid ogranicza drift terminologii vs MD-only i TS-only. | Zod jest `TypeScript-first schema validation`; posiada konwersjÄ™ `z.toJSONSchema`, co umoĹĽliwia jeden schemat i projekcje artefaktĂłw. OpenAI wskazuje ryzyko, ĹĽe typy i schema muszÄ… byÄ‡ utrzymywane spĂłjnie, co wzmacnia potrzebÄ™ jednego canonical source. Linki: https://zod.dev/, https://zod.dev/json-schema, https://openai.com/index/introducing-structured-outputs-in-the-api/ |
| Sub-question-6 | Ekosystem agentĂłw preferuje contracts schema-first. | OpenAI Structured Outputs, Anthropic tool use i Gemini function calling sÄ… projektowane wokĂłĹ‚ jawnych parametrĂłw/schem. Linki: https://developers.openai.com/api/docs/guides/structured-outputs, https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use, https://ai.google.dev/gemini-api/docs/function-calling |
| Sub-question-7 | Migracja opĹ‚aca siÄ™ po przekroczeniu progĂłw automatyzacji/driftu. | Inference z caĹ‚ej macierzy: korzyĹ›ci schema/hybrid rosnÄ… wraz z liczbÄ… automatyzacji, gateâ€™Ăłw CI i wymagaĹ„ interoperacyjnych; przy maĹ‚ej skali MD-only moĹĽe nadal wygrywaÄ‡ kosztem. |

## PorĂłwnanie opcji (tabela)

Skala: `1.0-5.0`, wyĹĽej = lepiej. Wagi rĂłwne.

| Kryterium | MD-only | TS-objects (schema-first w kodzie) | Hybrid (schema SoT + generated .md) |
|---|---:|---:|---:|
| 1. NiezawodnoĹ›Ä‡ interpretacji agenta | 2.5 | 4.1 | 4.6 |
| 2. DeterministycznoĹ›Ä‡/parsowalnoĹ›Ä‡ | 2.2 | 4.3 | 4.7 |
| 3. Walidacja i lintowanie | 2.3 | 4.4 | 4.8 |
| 4. Koszt utrzymania i onboarding | 4.8 | 3.1 | 3.6 |
| 5. PodatnoĹ›Ä‡ na drift terminologii | 2.4 | 3.7 | 4.7 |
| 6. Integracja CI/artefakty/migracje | 2.5 | 4.1 | 4.8 |
| **Weighted score (avg)** | **2.8** | **3.95** | **4.53** |

Wynik reguĹ‚y werdyktu:

1. NajwyĹĽszy weighted score: `Hybrid`.
2. RĂłĹĽnica do drugiego miejsca (`TS-objects`) > 0.3, wiÄ™c tie-breaker nie jest potrzebny.
3. Dowody dla kryteriĂłw 1 i 2 majÄ… high confidence -> werdykt bez warunkowania.

## Rekomendacja koĹ„cowa

Wybierz **`Hybrid` jako docelowy model operacyjny**:

1. `Schema` (JSON Schema/Zod-derived) jako jedyne ĹşrĂłdĹ‚o prawdy.
2. `Markdown` generowany jednostronnie z tego schematu (`schema -> generated .md`).
3. CI egzekwuje:
   - walidacjÄ™ schematu,
   - zgodnoĹ›Ä‡ generatora,
   - brak rÄ™cznych zmian w generowanych sekcjach.

Uzasadnienie:

1. Najlepsza kompatybilnoĹ›Ä‡ z ekosystemem narzÄ™dzi agentowych opartych o schematy.
2. Deterministyczna walidacja i twarde gateâ€™y jakoĹ›ci.
3. NiĹĽsze ryzyko driftu terminologii przy zachowaniu czytelnego artefaktu dla ludzi.

## Plan wdroĹĽenia 30/60/90 dni

30 dni:

1. Pilot na jednym obszarze terminologii (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`).
2. Wprowadzenie minimalnego schematu + walidacji CI (2 tygodnie non-blocking, potem blocking).
3. Metryki:
   - parse success rate,
   - liczba i typy lint failures,
   - median review time.

60 dni:

1. Rozszerzenie kontraktu na wszystkie artefakty terminologiczne.
2. Generator `.md` + test spĂłjnoĹ›ci projekcji (`schema -> md`) + snapshot tests.
3. Metryki:
   - drift incidents / miesiÄ…c,
   - false positives CI,
   - median onboarding time.

90 dni:

1. Stabilizacja governance i rollback playbook.
2. Migracja legacy dokumentĂłw wg priorytetu ryzyka.
3. Metryki:
   - MTTR bĹ‚Ä™dĂłw terminologii,
   - odsetek zmian automatycznie walidowanych,
   - koszt utrzymania (czas/tooling).

## Ryzyka i mitigacje

| Impediment | WpĹ‚yw | PrawdopodobieĹ„stwo | Mitigacja | Owner | Trigger |
|---|---|---|---|---|---|
| Dual-source drift (TS types vs JSON Schema vs `.md`) | wysoki | Ĺ›rednie | ustanowiÄ‡ 1 SoT (schema), auto-gen `.md`, CI diff check | maintainer workflow | rĂłĹĽnica miÄ™dzy wygenerowanym a committed `.md` |
| Ograniczenia subsetĂłw schematĂłw u vendorĂłw modeli | Ĺ›redni/wysoki | Ĺ›rednie | profilowaÄ‡ â€ślowest common subsetâ€ť, contract tests per vendor | AI platform owner | niezgodnoĹ›Ä‡ request/response schema w testach |
| OpĂłr onboardingowy zespoĹ‚u wobec schema tooling | Ĺ›redni | Ĺ›rednie | szablony, generator CLI, krĂłtkie playbooki i pairing | tech lead | wzrost czasu review/onboardingu > 20% |
| Koszt migracji historycznych dokumentĂłw | Ĺ›redni | wysokie | migracja etapowa wg ryzyka + freeze na krytyczne Ĺ›cieĹĽki | repo owner | backlog migracyjny > plan 60 dni |
| BĹ‚Ä™dy generatora markdown projection | wysoki | niskie/Ĺ›rednie | golden tests, snapshot diff, wersjonowanie generatora | tooling owner | regresja w wygenerowanych sekcjach |

`Entry Criteria` dla migracji do schema-first/hybrid (rekomenduj migracjÄ™ przy >=3/5):

1. Minimum 2 niezaleĹĽne automatyzacje wymagajÄ… parsowania terminologii.
2. Minimum 1 CI gate ma byÄ‡ blocking na niespĂłjnoĹ›Ä‡ terminologii.
3. WystÄ™puje powtarzalny drift semantyczny (>=2 incydenty/kwartaĹ‚).
4. Wymagana interoperacyjnoĹ›Ä‡ ze schema constraints modeli/tool APIs.
5. Koszt rÄ™cznej synchronizacji MD przekracza koszt generatora/projekcji.

## Interfaces and Dependencies

N/A - task is research/policy decision support, not implementation. Candidate interfaces for future implementation are documented in user-provided scope and validated by this recommendation.

Change note: 2026-02-12T17:18:17Z - Created ExecPlan for deep research and recommendation memo on operational source model for terminology enforcement.  
Change note: 2026-02-12T17:41:00Z - Completed research, produced evidence-backed verdict (`Hybrid`), and added migration/impediment guidance.

