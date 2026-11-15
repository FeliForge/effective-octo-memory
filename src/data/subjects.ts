import type { SubjectId } from "./types";

export const subjectOrder: SubjectId[] = [
  "geografia",
  "historia",
  "portugues",
  "ciencias",
  "matematica",
];

export const subjects: Record<
  SubjectId,
  { label: string; blurb: string }
> = {
  geografia: {
    label: "Geografia",
    blurb: "Território, poder e ambiente",
  },
  historia: {
    label: "História",
    blurb: "República, ditadura e cultura",
  },
  portugues: {
    label: "Português",
    blurb: "Gramática, sentido e leitura",
  },
  ciencias: {
    label: "Ciências",
    blurb: "Biologia, Física e Química",
  },
  matematica: {
    label: "Matemática",
    blurb: "Funções, álgebra, geometria e probabilidade",
  },
};

export const difficultyLabel = {
  basica: "Básica",
  intermediaria: "Intermediária",
  avancada: "Avançada",
} as const;
