export type SubjectId = "geografia" | "historia" | "portugues" | "ciencias";

export type Difficulty = "basica" | "intermediaria" | "avancada";

export type QuestionType =
  | "multipla"
  | "vf"
  | "causa"
  | "mapa"
  | "grafico"
  | "ordem"
  | "analise"
  | "relacao";

export type ModuleMeta = {
  slug: string;
  subject: SubjectId;
  number: number | string;
  title: string;
  notebook: string;
  kicker: string;
  fresh?: boolean;
};

export type Section = { title: string; points: string[] };

export type SourceLink = {
  title: string;
  url: string;
  source: string;
  note: string;
};

export type Contrast = { fala: string; norma: string; nota: string };

export type DataTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type StudyContent = {
  intro: string;
  sections: Section[];
  glossary: [string, string][];
  faq: [string, string][];
  videos: SourceLink[];
  sources: SourceLink[];
  syllabus?: string[];
  contrasts?: Contrast[];
  table?: DataTable;
  wordBank?: [string, string][];
  formula?: { label: string; expr: string; note: string };
  widget?: "punnett" | "luz" | "ph";
};

export type Question = {
  id: string;
  subject: SubjectId;
  module: string;
  difficulty: Difficulty;
  type: QuestionType;
  prompt: string;
  context?: string;
  options: string[];
  answer: number | number[];
  explanation: string;
};
