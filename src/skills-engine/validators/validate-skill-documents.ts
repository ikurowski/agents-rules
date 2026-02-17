import {access, readdir} from 'node:fs/promises';
import path from 'node:path';

import {parseSkillMarkdown} from '../parser/parse-skill-markdown.js';
import {resolveReferenceHeadings} from '../resolver/resolve-reference-headings.js';

export interface SkillValidationError {
  skillPath: string;
  message: string;
}

export interface SkillValidationResult {
  isSuccessful: boolean;
  errors: SkillValidationError[];
}

const MISSING_SECTIONS_SENTINEL = '<missing-section-bullets>';

const readSkillDocumentPaths = async (skillsRootPath: string): Promise<string[]> => {
  const directoryEntries = await readdir(skillsRootPath, {withFileTypes: true});
  const skillDocumentPaths: string[] = [];

  for (const entry of directoryEntries) {
    if (!entry.isDirectory() || entry.name === 'shared') {
      continue;
    }

    const skillPath = path.join(skillsRootPath, entry.name, 'SKILL.md');
    try {
      await access(skillPath);
      skillDocumentPaths.push(skillPath);
    } catch {
      // Skip non-skill directories.
    }
  }

  return skillDocumentPaths;
};

const readMissingReferenceError = (skillPath: string, lineNumber: number, sourcePath: string): SkillValidationError => {
  return {
    skillPath,
    message: `Missing reference file for Apply directive at line ${lineNumber}: ${sourcePath}`,
  };
};

const readMissingSectionsError = (skillPath: string, lineNumber: number): SkillValidationError => {
  return {
    skillPath,
    message: `Apply directive at line ${lineNumber} has no imported section bullets.`,
  };
};

const readMissingHeadingError = (
  skillPath: string,
  sectionName: string,
  sourcePath: string,
  lineNumber: number,
): SkillValidationError => {
  return {
    skillPath,
    message: `Section '${sectionName}' not found in ${sourcePath} (line ${lineNumber}).`,
  };
};

const readHeadingErrors = (
  skillPath: string,
  lineNumber: number,
  sourcePath: string,
  sectionNames: string[],
  headings: Set<string>,
): SkillValidationError[] => {
  const errors: SkillValidationError[] = [];

  for (const sectionName of sectionNames) {
    if (sectionName === MISSING_SECTIONS_SENTINEL) {
      errors.push(readMissingSectionsError(skillPath, lineNumber));
      continue;
    }

    if (!headings.has(sectionName)) {
      errors.push(readMissingHeadingError(skillPath, sectionName, sourcePath, lineNumber));
    }
  }

  return errors;
};

const readDirectiveErrors = async (
  skillPath: string,
  skillDirectory: string,
  sourcePath: string,
  lineNumber: number,
  sectionNames: string[],
): Promise<SkillValidationError[]> => {
  const referencePath = path.resolve(skillDirectory, sourcePath);
  let headings: Set<string>;
  try {
    headings = await resolveReferenceHeadings(referencePath);
  } catch {
    return [readMissingReferenceError(skillPath, lineNumber, sourcePath)];
  }

  return readHeadingErrors(skillPath, lineNumber, sourcePath, sectionNames, headings);
};

/**
 * Validates skill markdown `Apply ... for` directives against referenced files and headings.
 */
export const validateSkillDocuments = async (skillsRootPath = 'skills'): Promise<SkillValidationResult> => {
  const skillPaths = await readSkillDocumentPaths(skillsRootPath);
  const errors: SkillValidationError[] = [];

  for (const skillPath of skillPaths) {
    const parsedSkillDocument = await parseSkillMarkdown(skillPath);
    const skillDirectory = path.dirname(skillPath);

    for (const directive of parsedSkillDocument.applyDirectives) {
      const directiveErrors = await readDirectiveErrors(
        skillPath,
        skillDirectory,
        directive.sourcePath,
        directive.lineNumber,
        directive.sections,
      );
      errors.push(...directiveErrors);
    }
  }

  return {
    isSuccessful: errors.length === 0,
    errors,
  };
};
