import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { bookSchema, type BookFrontmatter } from './book-schema';

const languages = ['en', 'zh-cn', 'zh-tw', 'ja'] as const;
const subjects = [
  'anthropology',
  'biology',
  'biomedical-engineering',
  'business',
  'chemistry',
  'computer-science',
  'economics',
  'education',
  'engineering',
  'geography',
  'history',
  'law',
  'linguistics',
  'literature',
  'mathematics',
  'medicine',
  'philosophy',
  'physics',
  'political-science',
  'psychology',
  'sociology',
] as const;

export type Language = (typeof languages)[number];
export type Subject = (typeof subjects)[number];

export interface BookEntry {
  id: string;
  slug: string;
  bookSlug: string;
  collection: `${Subject}-${Language}`;
  lang: Language;
  subject: Subject;
  data: BookFrontmatter;
  body: string;
}

// Export arrays for use in pages
export { languages, subjects };

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');
let cachedEntries: BookEntry[] | null = null;

async function readMarkdownFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const dirent of dirents) {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...(await readMarkdownFiles(fullPath)));
    } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseSubjectAndLanguage(segment: string): { subject: Subject; lang: Language } {
  for (const lang of languages) {
    if (segment.endsWith(`-${lang}`)) {
      const subjectCandidate = segment.slice(0, -(lang.length + 1));
      if (subjects.includes(subjectCandidate as Subject)) {
        return { subject: subjectCandidate as Subject, lang };
      }
    }
  }

  throw new Error(`Unable to determine subject/language from segment: ${segment}`);
}

async function loadAllEntries(): Promise<BookEntry[]> {
  if (cachedEntries) {
    return cachedEntries;
  }

  const files = await readMarkdownFiles(CONTENT_ROOT);
  const entries: BookEntry[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(CONTENT_ROOT, filePath).replace(/\\/g, '/');
    const [subjectLangSegment, ...rest] = relativePath.split('/');
    const { subject, lang } = parseSubjectAndLanguage(subjectLangSegment);
    const bookSlug = rest.join('/').replace(/\.md$/, '');

    const rawContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    const parsedData = bookSchema.parse(data);

    if (parsedData.category !== subject) {
      console.warn(
        `Category mismatch for ${relativePath}: frontmatter category "${parsedData.category}" does not match directory subject "${subject}".`
      );
    }

    entries.push({
      id: relativePath,
      slug: `${subject}/${bookSlug}`,
      bookSlug,
      collection: `${subject}-${lang}` as const,
      lang,
      subject,
      data: parsedData,
      body: content,
    });
  }

  entries.sort((a, b) => a.slug.localeCompare(b.slug));
  cachedEntries = entries;
  return entries;
}

export async function getAllContentByLanguage(lang: Language): Promise<BookEntry[]> {
  const entries = await loadAllEntries();
  return entries.filter(entry => entry.lang === lang);
}

export async function getContentBySubject(lang: Language, subject: Subject): Promise<BookEntry[]> {
  const entries = await loadAllEntries();
  return entries.filter(entry => entry.lang === lang && entry.subject === subject);
}

export async function getAllLanguagesBySubject(
  subject: Subject
): Promise<Record<Language, BookEntry[]>> {
  const entries = await loadAllEntries();
  return languages.reduce(
    (acc, lang) => {
      acc[lang] = entries.filter(entry => entry.lang === lang && entry.subject === subject);
      return acc;
    },
    {} as Record<Language, BookEntry[]>
  );
}

export async function getAllContent(): Promise<Record<Language, BookEntry[]>> {
  const entries = await loadAllEntries();
  return languages.reduce(
    (acc, lang) => {
      acc[lang] = entries.filter(entry => entry.lang === lang);
      return acc;
    },
    {} as Record<Language, BookEntry[]>
  );
}

export async function getAvailableSubjects(lang: Language): Promise<Subject[]> {
  const entries = await loadAllEntries();
  const subjectsWithContent = new Set<Subject>();

  for (const entry of entries) {
    if (entry.lang === lang) {
      subjectsWithContent.add(entry.subject);
    }
  }

  return Array.from(subjectsWithContent);
}

export async function findBookEntry(
  lang: Language,
  subject: Subject,
  slug: string
): Promise<BookEntry | undefined> {
  const entries = await loadAllEntries();
  return entries.find(
    entry => entry.lang === lang && entry.subject === subject && entry.bookSlug === slug
  );
}

export function clearContentCache(): void {
  cachedEntries = null;
}
