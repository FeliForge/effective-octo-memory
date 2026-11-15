import { createFileRoute, Link } from "@tanstack/react-router";
import { modules, questions } from "@/data";
import { subjectOrder, subjects } from "@/data/subjects";
import { dateKey, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const name = useProgress((state) => state.name);
  const read = useProgress((state) => state.read);
  const attempts = useProgress((state) => state.attempts);
  const dailySeconds = useProgress((state) => state.dailySeconds);
  const lastSlug = useProgress((state) => state.lastSlug);
  const fresh = modules.filter((module) => module.fresh);
  const continueModule =
    modules.find((module) => module.slug === lastSlug) ??
    fresh.find((module) => !read[module.slug]) ??
    modules.find((module) => !read[module.slug]) ??
    modules[0];

  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    const key = dateKey(date);
    const minutes = Math.round((dailySeconds[key] ?? 0) / 60);
    return {
      key,
      label: date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
      minutes,
    };
  });
  const maxMinutes = Math.max(8, ...days.map((day) => day.minutes));
  const weekMinutes = days.reduce((sum, day) => sum + day.minutes, 0);
  const accuracy = attempts.length
    ? Math.round((attempts.filter((item) => item.correct).length / attempts.length) * 100)
    : null;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="max-w-3xl text-5xl leading-[0.95] font-extrabold sm:text-6xl">
          {name ? `Olá, ${name}. Vamos estudar?` : "Estude o caderno inteiro"}
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Prova bimestral de Geografia, História, Português, Ciências e Matemática. Cada matéria tem a sua cor de marca-texto.
        </p>
      </header>

      {continueModule ? (
        <section
          data-subject={continueModule.subject}
          className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-[var(--s-soft)] p-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ boxShadow: "4px 4px 0 var(--s)" }}
        >
          <div className="flex items-center gap-5">
            <span className="cover-num text-7xl" aria-hidden="true">
              {continueModule.number}
            </span>
            <div>
              <p className="chip">{subjects[continueModule.subject].label}</p>
              <h2 className="mt-2 text-2xl leading-tight font-extrabold">{continueModule.title}</h2>
              <p className="text-sm text-muted">Continue de onde parou</p>
            </div>
          </div>
          <Link to="/modulos/$slug" params={{ slug: continueModule.slug }} className="btn-primary shrink-0">
            Abrir módulo
          </Link>
        </section>
      ) : null}

      <section className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-4 lg:divide-y-0">
        <Stat label="Módulos lidos" value={`${Object.keys(read).length}/${modules.length}`} />
        <Stat label="Acertos" value={accuracy === null ? "—" : `${accuracy}%`} />
        <Stat label="Minutos na semana" value={String(weekMinutes)} />
        <Stat label="Perguntas feitas" value={String(attempts.length)} />
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold">Por matéria</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {subjectOrder.map((subject) => {
            const list = modules.filter((module) => module.subject === subject);
            const done = list.filter((module) => read[module.slug]).length;
            return (
              <Link key={subject} to="/modulos" data-subject={subject} className="cover">
                <h3 className="text-2xl font-extrabold">{subjects[subject].label}</h3>
                <p className="text-sm text-muted">{subjects[subject].blurb}</p>
                <p className="mt-4 text-sm font-bold">
                  {done} de {list.length} lidos
                </p>
                <div className="subject-bar mt-2">
                  <span style={{ width: `${list.length ? (done / list.length) * 100 : 0}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold">Novos neste caderno</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {fresh.map((module) => (
            <Link key={module.slug} to="/modulos/$slug" params={{ slug: module.slug }} data-subject={module.subject} className="cover">
              <div className="flex items-center justify-between gap-3">
                <span className="cover-num text-4xl" aria-label={module.kicker}>
                  {module.number}
                </span>
                <span className="chip">{subjects[module.subject].label}</span>
              </div>
              <h3 className="mt-2 text-lg leading-snug font-bold">{module.title}</h3>
              <p className="text-sm text-muted">{read[module.slug] ? "Lido" : "Ainda não lido"}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-extrabold">Minutos de estudo nos últimos 7 dias</h2>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div key={day.key} className="flex flex-col items-center gap-1.5">
              <div className="flex h-28 w-full items-end rounded-lg bg-surface-2">
                <div
                  className="w-full rounded-lg bg-primary"
                  style={{ height: day.minutes === 0 ? "0%" : `${Math.max(12, (day.minutes / maxMinutes) * 100)}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-muted">{day.label}</span>
              <span className="text-xs font-bold">{day.minutes}</span>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted">{questions.length} perguntas no desafio, sem repetir dentro da mesma sessão.</p>
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
