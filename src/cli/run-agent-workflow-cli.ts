import {pathToFileURL} from 'node:url';

import {ZodError} from 'zod';

import {AgentWorkflowInputSchema} from '../contracts/index.js';
import {runHarnessLoop} from '../harness/loop/run-agent-loop.js';
import {readDefaultSourceOfTruthPaths} from '../runtime/io/source-of-truth-paths.js';
import {readProblemDetailsFromUnknown} from '../runtime/orchestrator/run-agent-workflow.js';
import {generateAgentWorkflowReport} from '../runtime/reporting/generate-agent-workflow-report.js';

import type {AgentWorkflowInput, ProblemDetails, SourceOfTruthPaths} from '../contracts/index.js';

class AgentWorkflowCliInputError extends Error {}

const readCliInputProblemDetails = (detail: string): ProblemDetails => {
  return {
    type: 'https://agent-workflow/errors/input-invalid',
    status: 400,
    title: 'Invalid workflow input',
    detail,
    code: 'input_invalid_cli',
    instance: new Date().toISOString(),
  };
};

const readOptionValue = (argv: string[], optionIndex: number, optionName: string): string => {
  const optionValue = argv[optionIndex + 1];
  if (optionValue === undefined || optionValue.startsWith('--')) {
    throw new AgentWorkflowCliInputError(`Missing value for ${optionName}.`);
  }

  return optionValue;
};

const SOURCE_OF_TRUTH_OPTION_MAP: Record<string, Exclude<keyof SourceOfTruthPaths, 'sharedReferencePaths'>> = {
  '--operationalRulesPath': 'operationalRulesPath',
  '--planStandardPath': 'planStandardPath',
  '--taskStatusPath': 'taskStatusPath',
  '--lessonsPath': 'lessonsPath',
  '--skillStandardPath': 'skillStandardPath',
};

const readSourceOfTruthOptionKey = (
  argument: string,
): Exclude<keyof SourceOfTruthPaths, 'sharedReferencePaths'> | undefined => {
  return SOURCE_OF_TRUTH_OPTION_MAP[argument];
};

/**
 * Parses CLI arguments into workflow input contract with optional path overrides.
 */
export const parseAgentWorkflowCliInput = (argv: string[]): AgentWorkflowInput => {
  let prompt: string | undefined;
  const sourceOfTruthPaths: SourceOfTruthPaths = readDefaultSourceOfTruthPaths();
  let hasCustomSharedReferencePath = false;

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--prompt') {
      prompt = readOptionValue(argv, index, '--prompt');
      index += 1;
      continue;
    }

    const sourceOfTruthOptionKey = readSourceOfTruthOptionKey(argument);
    if (sourceOfTruthOptionKey !== undefined) {
      sourceOfTruthPaths[sourceOfTruthOptionKey] = readOptionValue(argv, index, argument);
      index += 1;
      continue;
    }

    if (argument === '--sharedReferencePath') {
      const sharedReferencePath = readOptionValue(argv, index, '--sharedReferencePath');
      if (!hasCustomSharedReferencePath) {
        sourceOfTruthPaths.sharedReferencePaths = [];
        hasCustomSharedReferencePath = true;
      }
      sourceOfTruthPaths.sharedReferencePaths.push(sharedReferencePath);
      index += 1;
      continue;
    }

    throw new AgentWorkflowCliInputError(`Unknown option: ${argument}`);
  }

  if (prompt === undefined) {
    throw new AgentWorkflowCliInputError('Missing required --prompt option.');
  }

  return AgentWorkflowInputSchema.parse({prompt, sourceOfTruthPaths});
};

/**
 * Reads CLI input by delegating to parser with deterministic defaults.
 */
export const readAgentWorkflowCliInput = (argv: string[]): AgentWorkflowInput => {
  return parseAgentWorkflowCliInput(argv);
};

/**
 * Runs workflow CLI orchestration and returns process exit code.
 */
export const runAgentWorkflowCli = async (argv: string[]): Promise<number> => {
  try {
    const workflowInput = readAgentWorkflowCliInput(argv);
    const harnessResult = await runHarnessLoop(workflowInput);
    const reportOutput = generateAgentWorkflowReport(harnessResult.response.payload);
    console.log(reportOutput);
    return harnessResult.response.payload.status === 'completed' ? 0 : 1;
  } catch (error: unknown) {
    const problemDetails =
      error instanceof AgentWorkflowCliInputError
        ? readCliInputProblemDetails(error.message)
        : error instanceof ZodError
          ? readCliInputProblemDetails(error.issues.map((issue) => issue.message).join('; '))
          : readProblemDetailsFromUnknown(error);
    console.error(JSON.stringify(problemDetails, null, 2));
    return 1;
  }
};

const isCliEntrypoint = (): boolean => {
  const entryPath = process.argv[1];
  if (entryPath === undefined) {
    return false;
  }

  return import.meta.url === pathToFileURL(entryPath).href;
};

if (isCliEntrypoint()) {
  const exitCode = await runAgentWorkflowCli(process.argv.slice(2));
  process.exitCode = exitCode;
}
