import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { contentBySlug, questionsFor } from "@/data";
import type { ModuleMeta } from "@/data/types";
import { subjects } from "@/data/subjects";
import { useProgress } from "@/lib/progress";
import { LightWidget, PhWidget, PunnettWidget } from "./widgets";
import { cn } from "@/lib/cn";

type Module = ModuleMeta;

function formatSession(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function ModuleView({ module }: { module: Module }) {
  const content = contentBySlug[module.slug];
  const read = useProgress((state) => state.read[module.slug]);
  const checks = useProgress((state) => state.checks[module.slug]) ?? [];
  const toggleRead = useProgress((state) => state.toggleRead);
  const toggleCheck = useProgress((state) => state.toggleCheck);
  const addSeconds = useProgress((state) => state.addSeconds);
  const setLastSlug = useProgress((state) => state.setLastSlug);
  const [elapsed, setElapsed] = useState(0);
  const questionCount = questionsFor(module.slug).length;

  useEffect(() => {
    setLastSlug(module.slug);
    let pending = 0;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      pending += 1;
      setElapsed((value) => value + 1);
      if (pending >= 20) {
        addSeconds(pending);
        pending = 0;
      }
    }, 1000);
    return () => {
      window.clearInterval(id);
      if (pending) addSeconds(pending);
    };
  }, [module.slug, addSeconds, setLastSlug]);

  if (!content) return null;
  const subject = subjects[module.subject];

  return (
    <article data-subject={module.subject} className="space-y-6">
      <Link to="/modulos" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Módulos
      </Link>
      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="chip">{subject.label}</span>
          <span className="chip-plain">{module.kicker}</span>
          <span className="chip-plain">{module.notebook}</span>
          {read ? <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-bold text-accent">Lido</span> : null}
        </div>
        <h1 className="text-4xl leading-none font-extrabold sm:text-5xl">{module.title}</h1>
        <p className="max-w-3xl rounded-xl border-l-8 border-[var(--s)] bg-[var(--s-soft)] px-4 py-3 text-lg">{content.intro}</p>
        <p className="text-sm text-muted">Nesta aba: {formatSession(elapsed)}. O tempo só conta com a página visível.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        <button type="button" className={read ? "btn-ghost" : "btn-primary"} onClick={() => toggleRead(module.slug)}>
          <Check className="size-4" aria-hidden="true" />
          {read ? "Desmarcar leitura" : "Marcar módulo como lido"}
        </button>
        {questionCount > 0 ? (
          <Link to="/desafio" search={{ modulo: module.slug }} className="btn-ghost">
            Praticar {questionCount} perguntas
          </Link>
        ) : null}
      </div>

      {content.formula ? (
        <section className="card">
          <h2 className="text-2xl font-extrabold">{content.formula.label}</h2>
          <p className="mt-3 font-display text-3xl tracking-tight">{content.formula.expr}</p>
          <p className="mt-2 text-sm text-muted">{content.formula.note}</p>
        </section>
      ) : null}

      {content.widget ? (
        <section className="card space-y-3">
          <h2 className="text-2xl font-extrabold">
            {content.widget === "punnett" ? "Monte o quadro" : content.widget === "luz" ? "Calcule o tempo da luz" : "Leia a escala de pH"}
          </h2>
          {content.widget === "punnett" ? <PunnettWidget /> : null}
          {content.widget === "luz" ? <LightWidget /> : null}
          {content.widget === "ph" ? <PhWidget /> : null}
        </section>
      ) : null}

      {content.wordBank ? (
        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold">Banco de palavras</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.wordBank.map(([term, meaning]) => (
              <div key={term} className="card">
                <h3 className="font-semibold">{term}</h3>
                <p className="text-sm text-muted">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="space-y-4">
        {content.sections.map((section) => (
          <section key={section.title} className="card">
            <h2 className="text-2xl font-extrabold">{section.title}</h2>
            <ul className="mt-3 space-y-2">
              {section.points.map((point) => (
                <li key={point} className="border-l-4 border-[var(--s)] pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {content.contrasts ? (
        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold">Fala e norma-padrão</h2>
          <div className="space-y-3">
            {content.contrasts.map((row) => (
              <div key={row.norma} className="card grid gap-3 md:grid-cols-2">
                <p>
                  <span className="block text-xs font-bold text-muted">Na fala</span>
                  {row.fala}
                </p>
                <p>
                  <span className="block text-xs font-bold text-accent">Na norma-padrão</span>
                  {row.norma}
                </p>
                <p className="text-sm text-muted md:col-span-2">{row.nota}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {content.table ? (
        <section className="card space-y-3">
          <h2 className="text-2xl font-extrabold">{content.table.caption}</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-xl text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  {content.table.headers.map((header) => (
                    <th key={header} className="px-2 py-2 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.table.rows.map((row) => (
                  <tr key={row.join("|")} className="border-b border-border">
                    {row.map((cell, index) => (
                      <td key={`${cell}-${index}`} className="px-2 py-2 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {content.syllabus && content.syllabus.length > 0 ? (
        <section className="card">
          <h2 className="text-2xl font-extrabold">Roteiro do caderno</h2>
          <ul className="mt-3 space-y-2">
            {content.syllabus.map((item) => {
              const checked = checks.includes(item);
              return (
                <li key={item}>
                  <button
                    type="button"
                    aria-pressed={checked}
                    onClick={() => toggleCheck(module.slug, item)}
                    className="flex min-h-11 w-full items-start gap-3 rounded-xl px-1 text-left"
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid size-5 shrink-0 place-items-center rounded border",
                        checked ? "border-accent bg-accent text-surface" : "border-border",
                      )}
                      aria-hidden="true"
                    >
                      {checked ? <Check className="size-3" /> : null}
                    </span>
                    <span className={checked ? "text-muted line-through" : ""}>{item}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {content.glossary.length > 0 ? (
        <section className="card">
          <h2 className="text-2xl font-extrabold">Glossário</h2>
          <dl className="mt-3 space-y-3">
            {content.glossary.map(([term, meaning]) => (
              <div key={term}>
                <dt className="font-semibold">{term}</dt>
                <dd className="text-muted">{meaning}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {content.faq.length > 0 ? (
        <section className="space-y-2">
          <h2 className="text-2xl font-extrabold">Perguntas curtas</h2>
          {content.faq.map(([question, answer]) => (
            <details key={question} className="card">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-2 text-muted">{answer}</p>
            </details>
          ))}
        </section>
      ) : null}

      {content.sources.length > 0 || content.videos.length > 0 ? (
        <section className="card">
          <h2 className="text-2xl font-extrabold">Para conferir</h2>
          <ul className="mt-3 space-y-3">
            {[...content.videos, ...content.sources].map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer" className="font-semibold text-primary">
                  {link.title}
                  <ExternalLink className="ml-1 inline size-3.5" aria-hidden="true" />
                </a>
                <p className="text-sm text-muted">
                  {link.source}. {link.note}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
