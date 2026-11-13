import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Attempt = {
  id: string;
  correct: boolean;
  at: string;
  subject: string;
  module: string;
};

type ProgressState = {
  name: string;
  theme: "light" | "dark";
  read: Record<string, string>;
  checks: Record<string, string[]>;
  dailySeconds: Record<string, number>;
  attempts: Attempt[];
  lastSlug: string | null;
  setName: (name: string) => void;
  setTheme: (theme: "light" | "dark") => void;
  toggleRead: (slug: string) => void;
  toggleCheck: (slug: string, item: string) => void;
  addSeconds: (seconds: number) => void;
  setLastSlug: (slug: string) => void;
  recordAttempts: (items: Attempt[]) => void;
  reset: () => void;
};

function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const empty = {
  name: "",
  theme: "light" as const,
  read: {} as Record<string, string>,
  checks: {} as Record<string, string[]>,
  dailySeconds: {} as Record<string, number>,
  attempts: [] as Attempt[],
  lastSlug: null as string | null,
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      setName: (name) => set({ name: name.slice(0, 40) }),
      setTheme: (theme) => set({ theme }),
      toggleRead: (slug) => {
        const read = { ...get().read };
        if (read[slug]) delete read[slug];
        else read[slug] = new Date().toISOString();
        set({ read });
      },
      toggleCheck: (slug, item) => {
        const current = get().checks[slug] ?? [];
        const next = current.includes(item)
          ? current.filter((x) => x !== item)
          : [...current, item];
        set({ checks: { ...get().checks, [slug]: next } });
      },
      addSeconds: (seconds) => {
        if (seconds <= 0) return;
        const key = todayKey();
        const dailySeconds = { ...get().dailySeconds };
        dailySeconds[key] = (dailySeconds[key] ?? 0) + seconds;
        set({ dailySeconds });
      },
      setLastSlug: (slug) => set({ lastSlug: slug }),
      recordAttempts: (items) => {
        const attempts = [...get().attempts, ...items].slice(-500);
        set({ attempts });
      },
      reset: () => set({ ...empty, theme: get().theme }),
    }),
    {
      name: "studysphere-progress-v2",
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export function dateKey(d: Date) {
  return todayKey(d);
}
