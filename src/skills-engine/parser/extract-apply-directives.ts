import {ApplyDirectiveSchema} from '../../contracts/index.js';

import type {ApplyDirective} from '../../contracts/index.js';

const APPLY_DIRECTIVE_PATTERN = /^\s*-\s*Apply\s+`?(.+?)`?\s+for:\s*$/u;

const readIndentSize = (line: string): number => {
  const leadingWhitespace = line.match(/^\s*/u);
  return leadingWhitespace === null ? 0 : leadingWhitespace[0].length;
};

const readSectionName = (line: string): string | undefined => {
  const trimmedLine = line.trim();
  if (!trimmedLine.startsWith('-')) {
    return undefined;
  }

  let sectionName = trimmedLine
    .slice(1)
    .trim()
    .replace(/[.,]\s*$/u, '');
  sectionName = sectionName.replace(/^`/u, '').replace(/`$/u, '').trim();
  if (sectionName.length === 0) {
    return undefined;
  }

  return sectionName;
};

const readDirectiveSections = (lines: string[], lineIndex: number, directiveIndent: number): string[] => {
  const sections: string[] = [];

  for (let sectionIndex = lineIndex + 1; sectionIndex < lines.length; sectionIndex += 1) {
    const sectionLine = lines[sectionIndex] ?? '';
    if (sectionLine.trim().length === 0) {
      continue;
    }

    const sectionIndent = readIndentSize(sectionLine);
    if (sectionIndent <= directiveIndent) {
      break;
    }

    const sectionName = readSectionName(sectionLine);
    if (sectionName === undefined) {
      break;
    }

    sections.push(sectionName);
  }

  return sections;
};

/**
 * Extracts `Apply ... for` directives and their section bullets from markdown lines.
 */
export const extractApplyDirectives = (markdownText: string): ApplyDirective[] => {
  const lines = markdownText.split(/\r?\n/u);
  const directives: ApplyDirective[] = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex] ?? '';
    const applyMatch = APPLY_DIRECTIVE_PATTERN.exec(line);
    if (applyMatch === null) {
      continue;
    }

    const sourcePath = applyMatch[1]?.trim() ?? '';
    const directiveIndent = readIndentSize(line);
    const sections = readDirectiveSections(lines, lineIndex, directiveIndent);

    directives.push(
      ApplyDirectiveSchema.parse({
        sourcePath,
        sections: sections.length > 0 ? sections : ['<missing-section-bullets>'],
        lineNumber: lineIndex + 1,
      }),
    );
  }

  return directives;
};
