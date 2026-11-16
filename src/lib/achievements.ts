import type { SubjectId } from "@/lib/caderno";
import { modules } from "@/lib/caderno";

export type ProgressSnap = {
  read: Record<string, number>;
  hits: number;
  asked: number;
  streak: number;
};

export function subjectRead(read: Record<string, number>, subject: SubjectId) {
  const list = modules.filter((m) => m.subject === subject);
  const done = list.filter((m) => read[m.slug]).length;
  return { done, total: list.length };
}

export function freshAchievements(snap: ProgressSnap) {
  return [];
}
