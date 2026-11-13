import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import type { Question } from "@/data/types";
import { difficultyLabel } from "@/data/subjects";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/cn";

function shuffle<T>(list: T[]) {
  const next = [...list];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [next[index], next[swap]] = [next[swap], next[index]];
  }
  return next;
}

function sameOrder(answer: number[], pick: number[]) {
  return answer.length === pick.length && answer.every((value, index) => value === pick[index]);
}

export function QuizRunner({
  pool,
  title,
  subtitle,
}: {
  pool: Question[];
  title: string;
  subtitle: string;
}) {
  const recordAttempts = useProgress((state) => state.recordAttempts);
  const [round, setRound] = useState(0);
  const questions = useMemo(() => {
    const size = pool.length <= 12 ? pool.length : 10;
    return shuffle(pool).slice(0, size);
  }, [pool, round]);
  const [index, setIndex] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [order, setOrder] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[index];
  if (!question || questions.length === 0) {
    return (
      <section className="card">
        <h1 className="font-display text-3xl font-semibold">Sem perguntas neste filtro</h1>
        <p className="text-muted">Escolha outra matéria ou volte para todos os módulos.</p>
      </section>
    );
  }

  const ordered = Array.isArray(question.answer);
  const ready = ordered ? order.length === question.options.length : pick !== null;
  const correct = revealed && (ordered ? sameOrder(question.answer as number[], order) : pick === question.answer);

  function resetQuestionState() {
    setPick(null);
    setOrder([]);
    setRevealed(false);
  }

  function grade() {
    if (!ready || revealed) return;
    const ok = ordered ? sameOrder(question.answer as number[], order) : pick === question.answer;
    setRevealed(true);
    if (ok) setCorrectCount((count) => count + 1);
    recordAttempts([
      {
        id: question.id,
        correct: ok,
        at: new Date().toISOString(),
        subject: question.subject,
        module: question.module,
      },
    ]);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    resetQuestionState();
  }

  function restart() {
    setRound((value) => value + 1);
    setIndex(0);
    setCorrectCount(0);
    setDone(false);
    resetQuestionState();
  }

  if (done) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <section className="card space-y-4">
        <p className="text-sm font-semibold text-primary">{title}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">{pct}% de acertos</h1>
        <p className="text-muted">
          {correctCount} de {questions.length} nesta sessão. A explicação de cada erro fica no histórico da próxima rodada — vale refazer só o que escapou.
        </p>
        <button type="button" onClick={restart} className="btn-primary">
          <RotateCcw className="size-4" aria-hidden="true" />
          Novo desafio
        </button>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <header>
        <p className="text-sm font-semibold text-primary">{title}</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Pergunta {index + 1} de {questions.length}</h1>
        <p className="text-muted">{subtitle}</p>
      </header>
      <article className="card space-y-4">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-surface-2 px-2 py-1">{difficultyLabel[question.difficulty]}</span>
          <span className="rounded-full bg-surface-2 px-2 py-1">{ordered ? "Ordem" : "Escolha"}</span>
        </div>
        <h2 className="text-xl font-semibold">{question.prompt}</h2>
        {question.context ? (
          <p className="rounded-xl bg-surface-2 px-3 py-3 text-sm">{question.context}</p>
        ) : null}
        {ordered ? (
          <OrderOptions
            options={question.options}
            order={order}
            revealed={revealed}
            answer={question.answer as number[]}
            onToggle={(optionIndex) => {
              if (revealed) return;
              setOrder((current) =>
                current.includes(optionIndex)
                  ? current.filter((value) => value !== optionIndex)
                  : [...current, optionIndex],
              );
            }}
          />
        ) : (
          <ul className="space-y-2">
            {question.options.map((option, optionIndex) => {
              const selected = pick === optionIndex;
              const isAnswer = question.answer === optionIndex;
              const showOk = revealed && isAnswer;
              const showBad = revealed && selected && !isAnswer;
              return (
                <li key={option}>
                  <button
                    type="button"
                    disabled={revealed}
                    aria-pressed={selected}
                    onClick={() => setPick(optionIndex)}
                    className={cn(
                      "flex min-h-11 w-full items-start gap-3 rounded-xl border px-3 py-3 text-left",
                      showOk && "border-accent bg-accent-soft",
                      showBad && "border-danger bg-danger-soft",
                      !revealed && selected && "border-primary bg-primary-soft",
                      !revealed && !selected && "border-border bg-surface",
                    )}
                  >
                    <span className="mt-0.5 font-semibold">{String.fromCharCode(65 + optionIndex)}</span>
                    <span>{option}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {revealed ? (
          <div className={cn("rounded-xl px-3 py-3", correct ? "bg-accent-soft text-accent" : "bg-danger-soft text-danger")}>
            <p className="flex items-center gap-2 font-semibold">
              {correct ? <Check className="size-4" aria-hidden="true" /> : <X className="size-4" aria-hidden="true" />}
              {correct ? "Resposta correta" : "Ainda não"}
            </p>
            {!correct && ordered ? (
              <p className="mt-1 text-sm text-fg">
                Ordem correta: {(question.answer as number[]).map((value) => question.options[value]).join(" → ")}
              </p>
            ) : null}
            <p className="mt-2 text-sm text-fg">{question.explanation}</p>
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {!revealed ? (
            <button type="button" disabled={!ready} onClick={grade} className="btn-primary">
              Responder
            </button>
          ) : (
            <button type="button" onClick={next} className="btn-primary">
              {index + 1 === questions.length ? "Ver resultado" : "Próxima"}
            </button>
          )}
          {ordered && !revealed && order.length > 0 ? (
            <button type="button" onClick={() => setOrder((current) => current.slice(0, -1))} className="btn-ghost">
              Desfazer último
            </button>
          ) : null}
        </div>
      </article>
    </section>
  );
}

function OrderOptions({
  options,
  order,
  revealed,
  answer,
  onToggle,
}: {
  options: string[];
  order: number[];
  revealed: boolean;
  answer: number[];
  onToggle: (index: number) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted">Toque na ordem, do primeiro ao último. Toque de novo para tirar.</p>
      <ul className="space-y-2">
        {options.map((option, optionIndex) => {
          const position = order.indexOf(optionIndex);
          const chosen = position >= 0;
          return (
            <li key={option}>
              <button
                type="button"
                disabled={revealed}
                aria-pressed={chosen}
                onClick={() => onToggle(optionIndex)}
                className={cn(
                  "flex min-h-11 w-full items-start gap-3 rounded-xl border px-3 py-3 text-left",
                  chosen ? "border-primary bg-primary-soft" : "border-border",
                )}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 text-sm font-bold">
                  {chosen ? position + 1 : ""}
                </span>
                <span>{option}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {revealed ? (
        <p className="text-sm text-muted">
          Sequência esperada: {answer.map((value) => options[value]).join(" → ")}
        </p>
      ) : null}
    </div>
  );
}
