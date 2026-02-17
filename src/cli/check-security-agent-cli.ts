import {spawnSync} from 'node:child_process';
import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

const SECRET_PATTERNS: RegExp[] = [/sk-[A-Za-z0-9]{20,}/u, /ghp_[A-Za-z0-9]{20,}/u, /AIza[0-9A-Za-z-_]{35}/u];

const SOURCE_ROOTS = ['src', 'skills', 'docs', 'evals'];

const readAllFiles = async (rootPath: string): Promise<string[]> => {
  const entries = await readdir(rootPath, {withFileTypes: true});
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      const nestedFiles = await readAllFiles(fullPath);
      files.push(...nestedFiles);
      continue;
    }

    if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
};

const runSecretScan = async (): Promise<void> => {
  for (const root of SOURCE_ROOTS) {
    const files = await readAllFiles(root);
    for (const filePath of files) {
      const fileContents = await readFile(filePath, 'utf8');
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.test(fileContents)) {
          throw new Error(`Potential secret detected in ${filePath}.`);
        }
      }
    }
  }
};

const runDependencyAudit = (): void => {
  const result = spawnSync('npm', ['audit', '--omit=dev', '--audit-level=high', '--json'], {
    encoding: 'utf8',
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(`Dependency audit failed. ${result.stdout || result.stderr}`.trim());
  }
};

const runSecurityChecks = async (): Promise<void> => {
  runDependencyAudit();
  await runSecretScan();
  console.log('security:agent passed');
};

try {
  await runSecurityChecks();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown security check error.';
  console.error(`security:agent failed: ${message}`);
  process.exitCode = 1;
}
