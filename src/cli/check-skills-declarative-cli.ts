import {readdir} from 'node:fs/promises';
import path from 'node:path';

const SKILLS_ROOT = 'skills';
const FORBIDDEN_EXTENSIONS = new Set(['.ts', '.js', '.tsx', '.jsx', '.mjs', '.cjs']);

const readForbiddenFiles = async (rootPath: string): Promise<string[]> => {
  const entries = await readdir(rootPath, {withFileTypes: true});
  const forbiddenFiles: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      forbiddenFiles.push(...(await readForbiddenFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && FORBIDDEN_EXTENSIONS.has(path.extname(entry.name))) {
      forbiddenFiles.push(fullPath);
    }
  }

  return forbiddenFiles;
};

const runDeclarativeSkillsCheck = async (): Promise<void> => {
  const forbiddenFiles = await readForbiddenFiles(SKILLS_ROOT);
  if (forbiddenFiles.length > 0) {
    for (const filePath of forbiddenFiles) {
      console.error(`Forbidden executable file in declarative skills area: ${filePath}`);
    }
    throw new Error(`skills:declarative:check failed with ${forbiddenFiles.length} issue(s).`);
  }

  console.log('skills:declarative:check passed');
};

try {
  await runDeclarativeSkillsCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown skills declarative check error.';
  console.error(message);
  process.exitCode = 1;
}
