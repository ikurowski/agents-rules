import {readFile} from 'node:fs/promises';

import {SkillDocumentSchema} from '../../contracts/index.js';

import {extractApplyDirectives} from './extract-apply-directives.js';

import type {SkillDocument} from '../../contracts/index.js';

const HEADING_PATTERN = /^#{1,6}\s+(.+?)\s*$/u;

const readHeadings = (markdownText: string): string[] => {
  return markdownText
    .split(/\r?\n/u)
    .map((line) => {
      const match = HEADING_PATTERN.exec(line);
      return match?.[1]?.trim() ?? '';
    })
    .filter((heading) => heading.length > 0);
};

/**
 * Parses skill markdown into deterministic validation document.
 */
export const parseSkillMarkdown = async (path: string): Promise<SkillDocument> => {
  const markdownText = await readFile(path, 'utf8');
  return SkillDocumentSchema.parse({
    path,
    headings: readHeadings(markdownText),
    applyDirectives: extractApplyDirectives(markdownText),
  });
};
