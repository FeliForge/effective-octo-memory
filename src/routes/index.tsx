import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  WEEKDAYS,
  dailyPicks,
  modules,
  questions,
  subjects,
  ymd,
  type DailyPick,
  type SubjectId,
} from "@/lib/caderno";
import { SUBJECTS } from "@/lib/caderno";
import { subjectRead } from "@/lib/achievements";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [{ title: "StudySphere" }] }),
});

function Home() {
  const read = useProgress((s) => s.read);
  const hits = useProgress((s) => s.hits);
  const asked = useProgress((s) => s.asked);
  const dailySeconds = useProgress((s) => s.dailySeconds);
  const lastSlug = useProgress((s) => s.lastSlug);
  const streak = useProgress((s) => s.streak);
  const [picks, setPicks] = useState<DailyPick[] | null>(null);
  const [days, setDays] = useState<{ label: string; minutes: number }[] | null>(null);

  useEffect(() => {
    setPicks(dailyPicks());
    const out: { label: string; minutes: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setHours(12, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key = ymd(d);
      out.push({
        label: WEEKDAYS[d.getDay()],
        minutes: Math.round((dailySeconds[key] ?? 0) / 60),
      });
    }
    setDays(out);
  }, [dailySeconds]);

  const continueModule = modules.find((m) => m.slug === lastSlug) ?? modules.find((m) => !read[m.slug]) ?? modules[0];
  const maxMin = Math.max(8, ...(days ?? []).map((d) => d.minutes));
  const weekMin = (days ?? []).reduce((s, d) => s + d.minutes, 0);
  const accuracy = asked ? Math.round((hits / asked) * 100) : null;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="max-w-3xl text-5xl leading-[0.95] font-extrabold sm:text-6xl">
          StudySphere
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Caderno de estudos com módulos, desafio e ligas.
        </p>
      </header>

      {continueModule ? (
        <section className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="chip">{SUBJECTS[continueModule.subject as SubjectId]?.label ?? continueModule.subject}</p>
            <h2 className="mt-2 text-2xl leading-tight font-extrabold">{continueModule.title}</h2>
            <p className="text-sm text-muted">Continue de onde parou</p>
          </div>
          <Link to="/modulos/$slug" params={{ slug: continueModule.slug }} className="btn-primary shrink-0">
            Abrir módulo
          </Link>
        </section>
      ) : null}

      <section className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-4 lg:divide-y-0">
        <Stat label="Módulos lidos" value={`${Object.keys(read).length}/${modules.length}`} />
        <Stat label="Acertos" value={accuracy === null ? "—" : `${accuracy}%`} />
        <Stat label="Minutos na semana" value={String(weekMin)} />
        <Stat label="Streak" value={String(streak)} />
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold">Picks do dia</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {(picks ?? []).map((p) => (
            <Link key={p.slug} to="/modulos/$slug" params={{ slug: p.slug }} className="cover">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-muted">{p.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-extrabold">Minutos de estudo (7 dias)</h2>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {(days ?? []).map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="flex h-28 w-full items-end rounded-lg bg-surface-2">
                <div
                  className="w-full rounded-lg bg-primary"
                  style={{
                    height: day.minutes === 0 ? "0%" : `${Math.max(12, (day.minutes / maxMin) * 100)}%`,
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-muted">{day.label}</span>
              <span className="text-xs font-bold">{day.minutes}</span>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted">{questions.length} perguntas no desafio.</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5">
      <p className="font-display text-4xl font-extrabold tracking-tight">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
