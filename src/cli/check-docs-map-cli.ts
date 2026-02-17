import {access, readFile} from 'node:fs/promises';

const REQUIRED_PATHS = [
  'AGENTS.md',
  'PLANS.md',
  'docs/index.md',
  'docs/architecture/harness.md',
  'docs/architecture/runtime.md',
  'docs/architecture/skills-engine.md',
  'docs/standards/instructions-layering.md',
  'docs/standards/contracts-boundaries.md',
  'docs/standards/jsdoc-api-contracts.md',
  'docs/standards/eval-gates.md',
  'skills/REFERENCE-STANDARD.md',
];

const REQUIRED_AGENT_POINTERS = [
  '`docs/index.md`',
  '`docs/architecture/harness.md`',
  '`docs/architecture/runtime.md`',
  '`docs/architecture/skills-engine.md`',
  '`docs/standards/instructions-layering.md`',
  '`docs/standards/contracts-boundaries.md`',
  '`docs/standards/jsdoc-api-contracts.md`',
  '`docs/standards/eval-gates.md`',
];

const assertPathExists = async (targetPath: string): Promise<void> => {
  await access(targetPath);
};

const runDocsMapCheck = async (): Promise<void> => {
  for (const requiredPath of REQUIRED_PATHS) {
    await assertPathExists(requiredPath);
  }

  const agentsMarkdown = await readFile('AGENTS.md', 'utf8');
  const missingPointers = REQUIRED_AGENT_POINTERS.filter((pointer) => !agentsMarkdown.includes(pointer));
  if (missingPointers.length > 0) {
    throw new Error(`AGENTS.md is missing required pointers: ${missingPointers.join(', ')}`);
  }

  const docsIndex = await readFile('docs/index.md', 'utf8');
  for (const requiredPath of REQUIRED_PATHS.filter((path) => path.startsWith('docs/') && path !== 'docs/index.md')) {
    if (!docsIndex.includes(requiredPath.replace('docs/', ''))) {
      throw new Error(`docs/index.md missing reference to ${requiredPath}`);
    }
  }

  console.log('docs:map:check passed');
};

try {
  await runDocsMapCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown docs map check error.';
  console.error(`docs:map:check failed: ${message}`);
  process.exitCode = 1;
}
