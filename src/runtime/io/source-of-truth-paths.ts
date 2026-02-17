import type {SourceOfTruthPaths} from '../../contracts/index.js';

/**
 * Canonical default source-of-truth paths used by CLI and runtime orchestration.
 */
export const DEFAULT_SOURCE_OF_TRUTH_PATHS: SourceOfTruthPaths = {
  operationalRulesPath: 'AGENTS.md',
  planStandardPath: 'PLANS.md',
  taskStatusPath: 'tasks/todo.md',
  lessonsPath: 'tasks/lessons.md',
  skillStandardPath: 'skills/REFERENCE-STANDARD.md',
  sharedReferencePaths: [
    'skills/shared/references/canonical-terminology.md',
    'skills/shared/references/research-campaign-model.md',
    'skills/shared/references/five-point-scoring-bands.md',
    'skills/shared/references/source-evidence-policy.md',
    'skills/shared/references/confirm-required-gate.md',
    'skills/shared/references/principle-effectiveness-review.md',
  ],
};

/**
 * Reads default source-of-truth paths as a fresh object for safe caller mutation.
 */
export const readDefaultSourceOfTruthPaths = (): SourceOfTruthPaths => {
  return {
    ...DEFAULT_SOURCE_OF_TRUTH_PATHS,
    sharedReferencePaths: [...DEFAULT_SOURCE_OF_TRUTH_PATHS.sharedReferencePaths],
  };
};
