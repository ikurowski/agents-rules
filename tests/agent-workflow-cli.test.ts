import {afterEach, describe, expect, test, vi} from 'vitest';

import {readDefaultSourceOfTruthPaths} from '../src/agent-workflow/source-of-truth-paths.js';
import {
  parseAgentWorkflowCliInput,
  readAgentWorkflowCliInput,
  runAgentWorkflowCli,
} from '../src/cli/run-agent-workflow-cli.js';

describe('parseAgentWorkflowCliInput', () => {
  test('reads prompt with default source-of-truth paths', () => {
    const parsed = parseAgentWorkflowCliInput(['--prompt', 'cli prompt']);

    expect(parsed.prompt).toBe('cli prompt');
    expect(parsed.sourceOfTruthPaths).toEqual(readDefaultSourceOfTruthPaths());
  });

  test('reads explicit source-of-truth overrides', () => {
    const parsed = parseAgentWorkflowCliInput([
      '--prompt',
      'cli prompt',
      '--operationalRulesPath',
      'custom/agents.md',
      '--planStandardPath',
      'custom/plans.md',
      '--taskStatusPath',
      'custom/todo.md',
      '--lessonsPath',
      'custom/lessons.md',
      '--skillStandardPath',
      'custom/reference-standard.md',
      '--sharedReferencePath',
      'custom/shared-1.md',
      '--sharedReferencePath',
      'custom/shared-2.md',
    ]);

    expect(parsed.sourceOfTruthPaths.operationalRulesPath).toBe('custom/agents.md');
    expect(parsed.sourceOfTruthPaths.planStandardPath).toBe('custom/plans.md');
    expect(parsed.sourceOfTruthPaths.taskStatusPath).toBe('custom/todo.md');
    expect(parsed.sourceOfTruthPaths.lessonsPath).toBe('custom/lessons.md');
    expect(parsed.sourceOfTruthPaths.skillStandardPath).toBe('custom/reference-standard.md');
    expect(parsed.sourceOfTruthPaths.sharedReferencePaths).toEqual(['custom/shared-1.md', 'custom/shared-2.md']);
  });

  test('throws for unknown option', () => {
    expect(() => parseAgentWorkflowCliInput(['--prompt', 'x', '--unknown', 'value'])).toThrowError();
  });
});

describe('readAgentWorkflowCliInput', () => {
  test('delegates to parser and returns parsed input', () => {
    const parsed = readAgentWorkflowCliInput(['--prompt', 'from read']);
    expect(parsed.prompt).toBe('from read');
  });
});

describe('runAgentWorkflowCli', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('returns 0 and prints report for successful run', async () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const exitCode = await runAgentWorkflowCli(['--prompt', 'cli happy run']);

    expect(exitCode).toBe(0);
    expect(logSpy).toHaveBeenCalledOnce();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  test('returns 1 for invalid args and prints problem details', async () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const exitCode = await runAgentWorkflowCli(['--planStandardPath', 'x']);

    expect(exitCode).toBe(1);
    expect(logSpy).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledOnce();
  });
});
