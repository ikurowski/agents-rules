import {readFile} from 'node:fs/promises';

import type {AgentWorkflowInput, SourceOfTruthReadResult} from '../../contracts/index.js';

const readSourceOfTruthPathList = (input: AgentWorkflowInput): string[] => {
  return [
    input.sourceOfTruthPaths.operationalRulesPath,
    input.sourceOfTruthPaths.planStandardPath,
    input.sourceOfTruthPaths.taskStatusPath,
    input.sourceOfTruthPaths.lessonsPath,
    input.sourceOfTruthPaths.skillStandardPath,
    ...input.sourceOfTruthPaths.sharedReferencePaths,
  ];
};

/**
 * Reads readability status for each declared source-of-truth file path.
 */
export const readSourceOfTruthReadResults = async (input: AgentWorkflowInput): Promise<SourceOfTruthReadResult[]> => {
  const sourceOfTruthPaths = readSourceOfTruthPathList(input);
  const readResults = sourceOfTruthPaths.map(async (path): Promise<SourceOfTruthReadResult> => {
    try {
      const fileBuffer = await readFile(path);
      return {path, isReadable: true, byteLength: fileBuffer.byteLength};
    } catch {
      return {path, isReadable: false};
    }
  });

  return Promise.all(readResults);
};
