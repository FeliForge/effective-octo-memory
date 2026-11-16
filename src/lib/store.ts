import { useEffect, useState } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { freshAchievements, type ProgressSnap } from "@/lib/achievements";
import { ymd } from "@/lib/caderno";

type State = {
  read: Record<string, number>;
  hits: number;
  asked: number;
  dailySeconds: Record<string, number>;
  lastSlug: string | null;
  streak: number;
  lastDay: string | null;
  markRead: (slug: string) => void;
  recordAnswer: (correct: boolean) => void;
  addSeconds: (sec: number) => void;
  setLastSlug: (slug: string) => void;
};

export const useProgress = create<
  State
>()(
  persist(
    (set, get) => ({
      read: {},
      hits: 0,
      asked: 0,
      dailySeconds: {},
      lastSlug: null,
      streak: 0,
      lastDay: null,
      markRead: (slug) =>
        set((s) => ({
          read: { ...s.read, [slug]: Date.now() },
        })),
      recordAnswer: (correct) =>
        set((s) => ({
          hits: s.hits + (correct ? 1 : 0),
          asked: s.asked + 1,
        })),
      addSeconds: (sec) => {
        const key = ymd();
        set((s) => ({
          dailySeconds: {
            ...s.dailySeconds,
            [key]: (s.dailySeconds[key] ?? 0) + sec,
          },
        }));
      },
      setLastSlug: (slug) => set({ lastSlug: slug }),
    }),
    {
      name: "studysphere-progress",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export function useStudyTimer(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      useProgress.getState().addSeconds(1);
    }, 1000);
    return () => clearInterval(id);
  }, [active]);
}
