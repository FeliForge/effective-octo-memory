import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Search } from "lucide-react";
import { modules, questionsFor } from "@/data";
import { subjectOrder, subjects } from "@/data/subjects";
import type { SubjectId } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/modulos")({
  component: ModulesPage,
});

function ModulesPage() {
  const read = useProgress((state) => state.read);
  const [filter, setFilter] = useState<SubjectId | "todas">("todas");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("pt-BR");
    return modules.filter((module) => {
      if (filter !== "todas" && module.subject !== filter) return false;
      if (!needle) return true;
      return `${module.title} ${module.kicker} ${module.notebook}`.toLocaleLowerCase("pt-BR").includes(needle);
    });
  }, [filter, query]);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-5xl font-extrabold leading-none">Módulos</h1>
        <p className="max-w-xl text-lg text-muted">
          {modules.length} módulos em quatro matérias. Marque cada um como lido para acompanhar o caderno.
        </p>
      </header>
      <div className="flex flex-col gap-3">
        <label className="relative block max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por título"
            aria-label="Buscar módulo"
            className="min-h-11 w-full rounded-lg border border-border bg-surface pr-3 pl-9"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={filter === "todas"} onClick={() => setFilter("todas")}>
            Todas
          </FilterChip>
          {subjectOrder.map((subject) => (
            <FilterChip key={subject} subject={subject} active={filter === subject} onClick={() => setFilter(subject)}>
              {subjects[subject].label}
            </FilterChip>
          ))}
        </div>
      </div>
      {subjectOrder.map((subject) => {
        const list = visible.filter((module) => module.subject === subject);
        if (!list.length) return null;
        const done = modules.filter((module) => module.subject === subject && read[module.slug]).length;
        const total = modules.filter((module) => module.subject === subject).length;
        return (
          <section key={subject} data-subject={subject} className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1 border-b-2 border-[var(--s)] pb-2">
              <h2 className="text-3xl font-extrabold">{subjects[subject].label}</h2>
              <p className="text-sm font-semibold text-muted">
                {done} de {total} lidos · {subjects[subject].blurb}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {list.map((module) => (
                <Link key={module.slug} to="/modulos/$slug" params={{ slug: module.slug }} className="cover">
                  <div className="flex items-start justify-between gap-3">
                    <span className="cover-num text-5xl" aria-label={module.kicker}>
                      {module.number}
                    </span>
                    {read[module.slug] ? (
                      <span className="chip">
                        <Check className="mr-1 size-3" aria-hidden="true" />
                        Lido
                      </span>
                    ) : (
                      <span className="chip-plain">{module.notebook}</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg leading-snug font-bold">{module.title}</h3>
                  <p className="mt-1 text-sm text-muted">{questionsFor(module.slug).length} perguntas</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      {visible.length === 0 ? <p className="text-muted">Nenhum módulo com esse nome.</p> : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  subject,
  children,
}: {
  active: boolean;
  onClick: () => void;
  subject?: SubjectId;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      data-subject={subject}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border px-4 text-sm font-bold",
        active ? "border-transparent bg-fg text-bg" : "border-border bg-surface",
      )}
    >
      {subject ? <span aria-hidden="true" className="size-2.5 rounded-full bg-[var(--s)]" /> : null}
      {children}
    </button>
  );
}
