import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-display text-4xl font-semibold tracking-tight">Módulos</h1>
        <p className="max-w-2xl text-muted">
          O material antigo de Geografia e História permanece. Português e Ciências estão nos cadernos novos.
        </p>
      </header>
      <div className="flex flex-col gap-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por título"
          aria-label="Buscar módulo"
          className="min-h-11 rounded-xl border border-border bg-surface px-3"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={filter === "todas"} onClick={() => setFilter("todas")}>
            Todas
          </FilterChip>
          {subjectOrder.map((subject) => (
            <FilterChip key={subject} active={filter === subject} onClick={() => setFilter(subject)}>
              {subjects[subject].label}
            </FilterChip>
          ))}
        </div>
      </div>
      {subjectOrder.map((subject) => {
        const list = visible.filter((module) => module.subject === subject);
        if (!list.length) return null;
        return (
          <section key={subject} className="space-y-3">
            <h2 className="font-display text-2xl font-semibold">{subjects[subject].label}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {list.map((module) => (
                <Link key={module.slug} to="/modulos/$slug" params={{ slug: module.slug }} className="card block">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold">
                    <span className="text-primary">{module.kicker}</span>
                    {read[module.slug] ? <span className="text-accent">Lido</span> : <span className="text-muted">{module.notebook}</span>}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{module.title}</h3>
                  <p className="mt-2 text-sm text-muted">{questionsFor(module.slug).length} perguntas</p>
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
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
        active ? "bg-primary text-on-primary" : "bg-surface-2",
      )}
    >
      {children}
    </button>
  );
}
