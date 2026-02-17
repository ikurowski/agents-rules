import {readFile} from 'node:fs/promises';

const HEADING_PATTERN = /^#{1,6}\s+(.+?)\s*$/u;

/**
 * Resolves heading names from a referenced markdown file.
 */
export const resolveReferenceHeadings = async (path: string): Promise<Set<string>> => {
  const content = await readFile(path, 'utf8');
  const headings = new Set<string>();

  for (const line of content.split(/\r?\n/u)) {
    const match = HEADING_PATTERN.exec(line);
    const heading = match?.[1]?.trim();
    if (heading !== undefined && heading.length > 0) {
      headings.add(heading);
    }
  }

  return headings;
};
