import {readFile} from 'node:fs/promises';

import type {SourceOfTruthPaths} from '../../contracts/index.js';

export interface InstructionLayer {
  id: string;
  sourcePath: string;
  content: string;
  precedence: number;
}

const readLayer = async (id: string, sourcePath: string, precedence: number): Promise<InstructionLayer> => {
  let content = '';
  try {
    content = await readFile(sourcePath, 'utf8');
  } catch {
    // Keep the layer with empty content so compaction and diagnostics stay deterministic.
  }

  return {
    id,
    sourcePath,
    content,
    precedence,
  };
};

const SHARED_REFERENCE_LAYER_PREFIX = 'shared-reference-';

/**
 * Reads deterministic instruction-layer descriptors for harness loop context assembly.
 */
export const readInstructionLayers = async (paths: SourceOfTruthPaths): Promise<InstructionLayer[]> => {
  const layerReads = [
    readLayer('operational-rules', paths.operationalRulesPath, 100),
    readLayer('plan-standard', paths.planStandardPath, 90),
    readLayer('task-status', paths.taskStatusPath, 80),
    readLayer('lessons', paths.lessonsPath, 70),
    readLayer('skill-standard', paths.skillStandardPath, 60),
    ...paths.sharedReferencePaths.map((path, index) => {
      return readLayer(`shared-reference-${index + 1}`, path, 50 - index);
    }),
  ];
  return Promise.all(layerReads);
};

/**
 * Compacts instruction layers when caller requests lower context footprint.
 */
export const compactInstructionLayers = (layers: InstructionLayer[], maxLayers: number): InstructionLayer[] => {
  if (maxLayers >= layers.length) {
    return layers;
  }

  return [...layers].sort((a, b) => b.precedence - a.precedence).slice(0, maxLayers);
};

/**
 * Reads effective source-of-truth paths after instruction-layer compaction.
 * Core paths remain fixed while shared references can be reduced.
 */
export const readCompactedSourceOfTruthPaths = (
  originalPaths: SourceOfTruthPaths,
  compactedLayers: InstructionLayer[],
): SourceOfTruthPaths => {
  const selectedSharedSourcePaths = new Set(
    compactedLayers
      .filter((layer) => layer.id.startsWith(SHARED_REFERENCE_LAYER_PREFIX))
      .map((layer) => layer.sourcePath),
  );
  const compactedSharedReferencePaths = originalPaths.sharedReferencePaths.filter((path) => {
    return selectedSharedSourcePaths.has(path);
  });

  if (compactedSharedReferencePaths.length === 0) {
    compactedSharedReferencePaths.push(originalPaths.sharedReferencePaths[0]);
  }

  return {
    ...originalPaths,
    sharedReferencePaths: compactedSharedReferencePaths,
  };
};
