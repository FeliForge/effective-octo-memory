import { createFileRoute } from "@tanstack/react-router";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
  head: () => ({ meta: [{ title: "Perfil · StudySphere" }] }),
});

function Perfil() {
  const { hits, asked, streak, read } = useProgress();
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold">Perfil</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card"><p className="text-3xl font-bold">{Object.keys(read).length}</p><p className="text-muted">Módulos lidos</p></div>
        <div className="card"><p className="text-3xl font-bold">{hits}/{asked}</p><p className="text-muted">Acertos</p></div>
        <div className="card"><p className="text-3xl font-bold">{streak}</p><p className="text-muted">Streak</p></div>
      </div>
    </div>
  );
}
