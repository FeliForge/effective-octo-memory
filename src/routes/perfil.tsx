import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { modules } from "@/data";
import { subjectOrder, subjects } from "@/data/subjects";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/perfil")({
  component: ProfilePage,
});

function ProfilePage() {
  const name = useProgress((state) => state.name);
  const setName = useProgress((state) => state.setName);
  const theme = useProgress((state) => state.theme);
  const setTheme = useProgress((state) => state.setTheme);
  const read = useProgress((state) => state.read);
  const attempts = useProgress((state) => state.attempts);
  const reset = useProgress((state) => state.reset);
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-5xl font-extrabold leading-none">Perfil</h1>
        <p className="text-muted">Tudo fica neste navegador. Não há conta nem cópia na nuvem.</p>
      </header>
      <section className="card space-y-3">
        <label className="block">
          <span className="text-sm font-semibold">Seu nome</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={40}
            className="mt-2 w-full min-h-11 rounded-xl border border-border bg-surface px-3"
            placeholder="Como quer ser chamado"
          />
        </label>
        <button type="button" className="btn-ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Usar tema {theme === "dark" ? "claro" : "escuro"}
        </button>
      </section>
      <section className="grid gap-3 sm:grid-cols-2">
        {subjectOrder.map((subject) => {
          const list = modules.filter((module) => module.subject === subject);
          const done = list.filter((module) => read[module.slug]).length;
          const subjectAttempts = attempts.filter((item) => item.subject === subject);
          const accuracy = subjectAttempts.length
            ? Math.round((subjectAttempts.filter((item) => item.correct).length / subjectAttempts.length) * 100)
            : null;
          return (
            <article key={subject} className="card">
              <h2 className="text-2xl font-extrabold">{subjects[subject].label}</h2>
              <p className="text-sm text-muted">
                {done} de {list.length} módulos lidos
              </p>
              <p className="mt-2 text-sm">{accuracy === null ? "Sem respostas ainda" : `${accuracy}% de acerto`}</p>
            </article>
          );
        })}
      </section>
      <section className="card space-y-3">
        <h2 className="font-semibold">Apagar progresso</h2>
        <p className="text-sm text-muted">Remove nome, leituras, roteiro marcado, tempo e respostas deste navegador.</p>
        {confirming ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                reset();
                setConfirming(false);
              }}
            >
              Confirmar exclusão
            </button>
            <button type="button" className="btn-ghost" onClick={() => setConfirming(false)}>
              Cancelar
            </button>
          </div>
        ) : (
          <button type="button" className="btn-ghost" onClick={() => setConfirming(true)}>
            Apagar progresso
          </button>
        )}
      </section>
    </div>
  );
}
