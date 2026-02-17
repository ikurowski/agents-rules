import {validateSkillDocuments} from '../skills-engine/validators/validate-skill-documents.js';
import {validateWorkflowSpecs} from '../skills-engine/validators/validate-workflow-specs.js';

const runValidation = async (): Promise<void> => {
  const skillValidation = await validateSkillDocuments();
  const workflowValidation = await validateWorkflowSpecs();

  const errors = [
    ...skillValidation.errors.map((error) => `${error.skillPath}: ${error.message}`),
    ...workflowValidation.errors.map((error) => `${error.specPath}: ${error.message}`),
  ];

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(error);
    }
    throw new Error(`skills:validate failed with ${errors.length} issue(s).`);
  }

  console.log('skills:validate passed');
};

try {
  await runValidation();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown skills validation error.';
  console.error(message);
  process.exitCode = 1;
}
