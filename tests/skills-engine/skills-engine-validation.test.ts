import {describe, expect, test} from 'vitest';

import {parseSkillMarkdown} from '../../src/skills-engine/parser/parse-skill-markdown.js';
import {validateSkillDocuments} from '../../src/skills-engine/validators/validate-skill-documents.js';
import {validateWorkflowSpecs} from '../../src/skills-engine/validators/validate-workflow-specs.js';

describe('skills-engine validators', () => {
  test('parses skill markdown with apply directives', async () => {
    const parsed = await parseSkillMarkdown('skills/deep-researcher/SKILL.md');

    expect(parsed.headings.length).toBeGreaterThan(0);
    expect(parsed.applyDirectives.length).toBeGreaterThan(0);
  });

  test('validates skill docs and workflow specs', async () => {
    const skillValidation = await validateSkillDocuments('skills');
    const workflowValidation = await validateWorkflowSpecs('skills');

    expect(skillValidation.isSuccessful).toBe(true);
    expect(skillValidation.errors).toHaveLength(0);
    expect(workflowValidation.isSuccessful).toBe(true);
    expect(workflowValidation.errors).toHaveLength(0);
  });
});
