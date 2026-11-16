import { useMemo, useState } from "react";
import { questions } from "@/lib/caderno";
import { useProgress } from "@/lib/store";

export function Quiz() {
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const list = useMemo(() => questions.slice(0, 10), []);
  const q = list[idx];

  if (!q) return <p>Sem perguntas.</p>;

  const done = chosen !== null;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">Desafio</h1>
      <p className="text-sm text-muted">{idx + 1} / {list.length}</p>
      <p className="text-xl font-semibold">{q.prompt}</p>
      <div className="space-y-2">
        {q.choices.map((c, i) => (
          <button
            key={i}
            disabled={done}
            className={`block w-full rounded-xl border px-4 py-3 text-left ${done ? (i === q.answer ? "border-green-500 bg-green-50" : i === chosen ? "border-red-400" : "") : "hover:bg-surface-2"}`}
            onClick={() => {
              setChosen(i);
              recordAnswer(i === q.answer);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      {done && (
        <div className="card space-y-2">
          <p>{q.explain}</p>
          <button
            className="btn-primary"
            onClick={() => {
              setChosen(null);
              setIdx((v) => (v + 1) % list.length);
            }}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
