import {pathToFileURL} from 'node:url';

import {generateAgentWorkflowReport} from '../agent-workflow/generate-agent-workflow-report.js';
import {readProblemDetailsFromUnknown, runAgentWorkflow} from '../agent-workflow/run-agent-workflow.js';
import {readDefaultSourceOfTruthPaths} from '../agent-workflow/source-of-truth-paths.js';

import type {AgentWorkflowInput, SourceOfTruthPaths} from '../agent-workflow/types.js';

const readOptionValue = (argv: string[], optionIndex: number, optionName: string): string => {
  const optionValue = argv[optionIndex + 1];
  if (optionValue === undefined || optionValue.startsWith('--')) {
    throw new Error(`Missing value for ${optionName}.`);
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
 *
 * Preconditions:
 * - `argv` is the argument list without node/script entries.
 *
 * Postconditions:
 * - Returns AgentWorkflowInput with resolved defaults and user overrides.
 *
 * Side effects:
 * - None.
 *
 * Error semantics:
 * - Throws on missing `--prompt`, unknown options, or missing option values.
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

    throw new Error(`Unknown option: ${argument}`);
  }

  if (prompt === undefined) {
    throw new Error('Missing required --prompt option.');
  }

  return {prompt, sourceOfTruthPaths};
};

/**
 * Reads CLI input by delegating to parser with deterministic defaults.
 *
 * Preconditions:
 * - `argv` contains raw CLI tokens.
 *
 * Postconditions:
 * - Returns parsed workflow input contract.
 *
 * Side effects:
 * - None.
 */
export const readAgentWorkflowCliInput = (argv: string[]): AgentWorkflowInput => {
  return parseAgentWorkflowCliInput(argv);
};

/**
 * Runs workflow CLI orchestration and returns process exit code.
 *
 * Preconditions:
 * - `argv` is valid CLI token array.
 *
 * Postconditions:
 * - Prints machine-readable report JSON and returns `0` on completion, `1` on failure.
 *
 * Side effects:
 * - Reads source-of-truth files through workflow execution and writes output to stdout/stderr.
 *
 * Error semantics:
 * - Emits machine-readable ProblemDetails JSON to stderr for unexpected errors.
 */
export const runAgentWorkflowCli = async (argv: string[]): Promise<number> => {
  try {
    const workflowInput = readAgentWorkflowCliInput(argv);
    const workflowReport = await runAgentWorkflow(workflowInput);
    const reportOutput = generateAgentWorkflowReport(workflowReport);
    console.log(reportOutput);
    return workflowReport.status === 'completed' ? 0 : 1;
  } catch (error: unknown) {
    const problemDetails = readProblemDetailsFromUnknown(error);
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
