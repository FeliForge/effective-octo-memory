import rawJson from "@/data/caderno.json";

export type SubjectId =
  | "geografia"
  | "historia"
  | "portugues"
  | "ciencias"
  | "matematica";

export type Section = { title: string; points: string[] };

export type Content = {
  intro: string;
  sections: Section[];
  contrasts?: { fala: string; norma: string; nota: string }[];
  glossary?: [string, string][];
  faq?: [string, string][];
  videos?: { title: string; url: string; source: string; note?: string }[];
  sources?: { title: string; url?: string }[];
};

export type Module = {
  slug: string;
  subject: SubjectId;
  number: number;
  title: string;
  kicker: string;
  fresh?: boolean;
  content: Content;
};

export type Question = {
  id: string;
  subject: SubjectId;
  moduleSlug?: string;
  prompt: string;
  choices: string[];
  answer: number;
  explain: string;
};

export type DailyPick = {
  slug: string;
  title: string;
  reason: string;
  subject: SubjectId;
};

const data = rawJson as {
  modules: Module[];
  questions: Question[];
};

export const modules = data.modules;
export const questions = data.questions;

export const SUBJECTS: Record<
  SubjectId,
  { label: string; blurb: string; color: string }
> = {
  geografia: { label: "Geografia", blurb: "Espaço e sociedade", color: "#0ea5e9" },
  historia: { label: "História", blurb: "Processos e contextos", color: "#f59e0b" },
  portugues: { label: "Português", blurb: "Linguagem e texto", color: "#8b5cf6" },
  ciencias: { label: "Ciências", blurb: "Natureza e vida", color: "#22c55e" },
  matematica: { label: "Matemática", blurb: "Números e relações", color: "#ef4444" },
};

export const subjects = SUBJECTS;

export const WEEKDAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export function ymd(d: Date = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function dailyPicks(): DailyPick[] {
  const seed = ymd().split("-").join("");
  const n = parseInt(seed, 10);
  const picks: DailyPick[] = [];
  const used = new Set<string>();
  for (let i = 0; i < 4; i++) {
    const idx = (n + i * 17) % modules.length;
    const m = modules[idx];
    if (used.has(m.slug)) continue;
    used.add(m.slug);
    picks.push({
      slug: m.slug,
      title: m.title,
      reason: "Sugestão do dia",
      subject: m.subject,
    });
  }
  return picks;
}
