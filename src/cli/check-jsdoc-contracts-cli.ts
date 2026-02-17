import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

import ts from 'typescript';

const SOURCE_ROOT = 'src';
const FORBIDDEN_JSDOC_PATTERNS: RegExp[] = [
  /stack\s*trace/iu,
  /implementation\s+detail/iu,
  /internal\s+topology/iu,
  /bug-dependent/iu,
];

interface JSDocValidationError {
  filePath: string;
  line: number;
  message: string;
}

const readSourceFiles = async (rootPath: string): Promise<string[]> => {
  const entries = await readdir(rootPath, {withFileTypes: true});
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await readSourceFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }

  return files;
};

const isNodeExported = (node: ts.Node): boolean => {
  const modifiers = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined;
  return (modifiers ?? []).some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
};

const isFunctionLikeExport = (node: ts.Node): boolean => {
  if (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node)) {
    return true;
  }

  if (!ts.isVariableStatement(node)) {
    return false;
  }

  return node.declarationList.declarations.some((declaration) => {
    const initializer = declaration.initializer;
    return initializer !== undefined && (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer));
  });
};

const readJSDocText = (node: ts.Node, sourceFile: ts.SourceFile): string => {
  const withJSDoc = node as {jsDoc?: ts.JSDoc[]};
  const docs = withJSDoc.jsDoc ?? [];
  return docs.map((doc) => doc.getText(sourceFile)).join('\n');
};

const readValidationErrors = (filePath: string, sourceText: string): JSDocValidationError[] => {
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const errors: JSDocValidationError[] = [];

  for (const statement of sourceFile.statements) {
    if (!isNodeExported(statement) || !isFunctionLikeExport(statement)) {
      continue;
    }

    const {line} = sourceFile.getLineAndCharacterOfPosition(statement.getStart(sourceFile));
    const jsDocText = readJSDocText(statement, sourceFile);
    if (jsDocText.trim().length === 0) {
      errors.push({
        filePath,
        line: line + 1,
        message: 'Missing JSDoc on exported executable API.',
      });
      continue;
    }

    if (FORBIDDEN_JSDOC_PATTERNS.some((pattern) => pattern.test(jsDocText))) {
      errors.push({
        filePath,
        line: line + 1,
        message: 'JSDoc contains forbidden implementation-leaking content.',
      });
    }
  }

  return errors;
};

const runJSDocCheck = async (): Promise<void> => {
  const sourceFiles = await readSourceFiles(SOURCE_ROOT);
  const allErrors: JSDocValidationError[] = [];

  for (const filePath of sourceFiles) {
    const sourceText = await readFile(filePath, 'utf8');
    allErrors.push(...readValidationErrors(filePath, sourceText));
  }

  if (allErrors.length > 0) {
    for (const error of allErrors) {
      console.error(`${error.filePath}:${error.line} ${error.message}`);
    }
    throw new Error(`jsdoc:check failed with ${allErrors.length} issue(s).`);
  }

  console.log('jsdoc:check passed');
};

try {
  await runJSDocCheck();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Unknown jsdoc check error.';
  console.error(message);
  process.exitCode = 1;
}
