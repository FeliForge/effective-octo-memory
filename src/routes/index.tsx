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
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-primary">Prova bimestral</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {name ? `Olá, ${name}` : "Estude o caderno inteiro"}
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Geografia e História continuam aqui. Entraram Português, do módulo 35 ao 41, e Ciências, com Biologia, Física e Química.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Módulos lidos" value={`${Object.keys(read).length}/${modules.length}`} />
        <Stat label="Acertos" value={accuracy === null ? "—" : `${accuracy}%`} />
        <Stat label="Minutos na semana" value={String(weekMinutes)} />
        <Stat label="Perguntas feitas" value={String(attempts.length)} />
      </section>

      <section className="card">
        <h2 className="font-display text-2xl font-semibold">Minutos de estudo · 7 dias</h2>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div key={day.key} className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-full items-end rounded-xl bg-surface-2">
                <div
                  className="w-full rounded-xl bg-primary"
                  style={{ height: day.minutes === 0 ? "0%" : `${Math.max(12, (day.minutes / maxMinutes) * 100)}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-muted">{day.label}</span>
              <span className="text-xs">{day.minutes}</span>
            </div>
          ))}
        </div>
      </section>

      {continueModule ? (
        <section className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Continuar</p>
            <h2 className="font-display text-2xl font-semibold">{continueModule.title}</h2>
            <p className="text-sm text-muted">
              {subjects[continueModule.subject].label} · {continueModule.kicker}
            </p>
          </div>
          <Link to="/modulos/$slug" params={{ slug: continueModule.slug }} className="btn-primary">
            Abrir módulo
          </Link>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-semibold">Novos neste caderno</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {fresh.map((module) => (
            <Link key={module.slug} to="/modulos/$slug" params={{ slug: module.slug }} className="card block">
              <p className="text-xs font-bold text-primary">
                {subjects[module.subject].label} · {module.kicker}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{module.title}</h3>
              <p className="text-sm text-muted">{read[module.slug] ? "Lido" : "Ainda não marcado"}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {subjectOrder.map((subject) => {
          const list = modules.filter((module) => module.subject === subject);
          const done = list.filter((module) => read[module.slug]).length;
          return (
            <Link key={subject} to="/modulos" className="card block">
              <h2 className="font-display text-2xl font-semibold">{subjects[subject].label}</h2>
              <p className="text-sm text-muted">{subjects[subject].blurb}</p>
              <p className="mt-3 text-sm font-semibold">
                {done} de {list.length} lidos
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full bg-accent" style={{ width: `${(done / list.length) * 100}%` }} />
              </div>
            </Link>
          );
        })}
      </section>

      <p className="text-sm text-muted">{questions.length} perguntas no desafio, sem repetir dentro da mesma sessão.</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <p className="text-sm text-muted">{label}</p>
      <p className="font-display text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
