import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getModule, questions } from "@/data";
import { subjectOrder, subjects } from "@/data/subjects";
import type { SubjectId } from "@/data/types";
import { QuizRunner } from "@/components/quiz-runner";
import { cn } from "@/lib/cn";

type Search = { modulo?: string; materia?: SubjectId };

export const Route = createFileRoute("/desafio")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const modulo = typeof search.modulo === "string" ? search.modulo : undefined;
    const raw = typeof search.materia === "string" ? search.materia : undefined;
    const materia = subjectOrder.find((subject) => subject === raw);
    return { modulo, materia };
  },
  component: DesafioPage,
});

function DesafioPage() {
  const search = Route.useSearch();
  const module = search.modulo ? getModule(search.modulo) : null;
  const pool = useMemo(() => {
    return questions.filter((question) => {
      if (module) return question.module === module.slug;
      if (search.materia) return question.subject === search.materia;
      return true;
    });
  }, [module, search.materia]);

  const title = module
    ? module.title
    : search.materia
      ? subjects[search.materia].label
      : "Todas as matérias";

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-5xl font-extrabold leading-none">Desafio</h1>
        <p className="max-w-2xl text-muted">
          Até dez perguntas sorteadas, sem repetição na sessão. A explicação aparece logo depois da resposta.
        </p>
      </header>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <Link
          to="/desafio"
          className={cn("min-h-11 shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-bold", !module && !search.materia ? "border-transparent bg-fg text-bg" : "bg-surface")}
        >
          Tudo
        </Link>
        {subjectOrder.map((subject) => (
          <Link
            key={subject}
            to="/desafio"
            search={{ materia: subject }}
            className={cn(
              "min-h-11 shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-bold",
              !module && search.materia === subject ? "border-transparent bg-fg text-bg" : "bg-surface",
            )}
          >
            {subjects[subject].label}
          </Link>
        ))}
      </div>
      <QuizRunner
        key={`${module?.slug ?? "all"}-${search.materia ?? "all"}`}
        pool={pool}
        title={title}
        subtitle={
          module
            ? `${subjects[module.subject].label} · ${module.kicker}`
            : search.materia
              ? subjects[search.materia].blurb
              : "Geografia, História, Português e Ciências"
        }
      />
    </div>
  );
}
