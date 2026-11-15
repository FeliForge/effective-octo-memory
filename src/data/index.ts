import type { ModuleMeta, Question, StudyContent, SubjectId } from "./types";
import { subjectOrder } from "./subjects";
import legacyModulesJson from "./legacy-modules.json";
import legacyContentJson from "./legacy-content.json";
import legacyQuizJson from "./legacy-quiz.json";
import { extras } from "./extra-content";
import { extraQuiz } from "./extra-quiz";
import { mathExtras, mathQuiz } from "./matematica";

type LegacyModule = {
  slug: string;
  subject: SubjectId;
  number: number;
  title: string;
  notebook: string;
};

type LegacyContent = {
  intro: string;
  sections: { title: string; points: string[] }[];
  glossary?: string[][];
  faq?: string[][];
  videos?: { title: string; url: string; source: string; note: string }[];
  sources?: { title: string; url: string; source: string; note: string }[];
  syllabus?: string[];
};

type RawQuestion = {
  id: string;
  subject: SubjectId;
  module: string;
  difficulty: Question["difficulty"];
  type: Question["type"];
  prompt: string;
  context?: string;
  options: string[];
  answer: number | number[];
  explanation: string;
};

const legacyModules = legacyModulesJson as LegacyModule[];
const legacyContent = legacyContentJson as unknown as Record<string, LegacyContent>;
const legacyQuiz = legacyQuizJson as unknown as RawQuestion[];

function normalizeContent(raw: LegacyContent): StudyContent {
  return {
    intro: raw.intro,
    sections: raw.sections,
    glossary: (raw.glossary ?? [])
      .filter((pair) => pair.length >= 2)
      .map((pair) => [pair[0], pair[1]] as [string, string]),
    faq: (raw.faq ?? [])
      .filter((pair) => pair.length >= 2)
      .map((pair) => [pair[0], pair[1]] as [string, string]),
    videos: (raw.videos ?? []).map((video) => ({
      title: video.title,
      url: video.url,
      source: video.source,
      note: video.note,
    })),
    sources: raw.sources ?? [],
    syllabus: raw.syllabus,
  };
}

export const modules: ModuleMeta[] = [
  ...legacyModules.map((module) => ({
    slug: module.slug,
    subject: module.subject,
    number: module.number,
    title: module.title,
    notebook: module.notebook,
    kicker: `Módulo ${module.number}`,
  })),
  ...extras.map(({ content: _content, ...meta }) => meta),
  ...mathExtras.map(({ content: _content, ...meta }) => meta),
].sort((a, b) => {
  const subjectDelta = subjectOrder.indexOf(a.subject) - subjectOrder.indexOf(b.subject);
  if (subjectDelta !== 0) return subjectDelta;
  const an = typeof a.number === "number" ? a.number : a.number.charCodeAt(0) + 100;
  const bn = typeof b.number === "number" ? b.number : b.number.charCodeAt(0) + 100;
  return an - bn;
});

export const contentBySlug: Record<string, StudyContent> = {
  ...Object.fromEntries(
    Object.entries(legacyContent).map(([slug, content]) => [slug, normalizeContent(content)]),
  ),
  ...Object.fromEntries(extras.map((item) => [item.slug, item.content])),
  ...Object.fromEntries(mathExtras.map((item) => [item.slug, item.content])),
};

export const questions: Question[] = [...legacyQuiz, ...extraQuiz, ...mathQuiz];

export function getModule(slug: string) {
  return modules.find((module) => module.slug === slug) ?? null;
}

export function questionsFor(slug: string) {
  return questions.filter((question) => question.module === slug);
}

export function modulesBySubject(subject: SubjectId) {
  return modules.filter((module) => module.subject === subject);
}
