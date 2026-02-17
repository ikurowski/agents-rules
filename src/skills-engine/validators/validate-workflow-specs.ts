import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';

import {parse as parseYaml} from 'yaml';

import {WorkflowSpecSchema} from '../../contracts/index.js';

export interface WorkflowSpecValidationError {
  specPath: string;
  message: string;
}

export interface WorkflowSpecValidationResult {
  isSuccessful: boolean;
  errors: WorkflowSpecValidationError[];
}

const readWorkflowSpecPaths = async (skillsRootPath: string): Promise<string[]> => {
  const skillEntries = await readdir(skillsRootPath, {withFileTypes: true});
  const specPaths: string[] = [];

  for (const skillEntry of skillEntries) {
    if (!skillEntry.isDirectory() || skillEntry.name === 'shared') {
      continue;
    }

    const workflowDirectory = path.join(skillsRootPath, skillEntry.name, 'workflow');
    let workflowEntries;
    try {
      workflowEntries = await readdir(workflowDirectory, {withFileTypes: true});
    } catch {
      continue;
    }

    for (const workflowEntry of workflowEntries) {
      if (!workflowEntry.isFile()) {
        continue;
      }

      if (workflowEntry.name.endsWith('.yaml') || workflowEntry.name.endsWith('.yml')) {
        specPaths.push(path.join(workflowDirectory, workflowEntry.name));
      }
    }
  }

  return specPaths;
};

/**
 * Validates declarative workflow specs under `skills/<skill>/workflow/*`.
 */
export const validateWorkflowSpecs = async (skillsRootPath = 'skills'): Promise<WorkflowSpecValidationResult> => {
  const specPaths = await readWorkflowSpecPaths(skillsRootPath);
  const errors: WorkflowSpecValidationError[] = [];

  for (const specPath of specPaths) {
    const rawSpec = await readFile(specPath, 'utf8');
    let parsedSpec: unknown;
    try {
      parsedSpec = parseYaml(rawSpec);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown YAML parse error.';
      errors.push({specPath, message: `Invalid YAML: ${message}`});
      continue;
    }

    const validationResult = WorkflowSpecSchema.safeParse(parsedSpec);
    if (!validationResult.success) {
      const issueMessage = validationResult.error.issues.map((issue) => issue.message).join('; ');
      errors.push({specPath, message: issueMessage});
    }
  }

  return {
    isSuccessful: errors.length === 0,
    errors,
  };
};
