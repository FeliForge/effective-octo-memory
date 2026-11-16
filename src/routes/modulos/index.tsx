import { createFileRoute, Link } from "@tanstack/react-router";
import { modules, SUBJECTS } from "@/lib/caderno";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/modulos/")({
  component: Modulos,
  head: () => ({ meta: [{ title: "Módulos · StudySphere" }] }),
});

function Modulos() {
  const read = useProgress((s) => s.read);
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold">Módulos</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((m) => (
          <Link key={m.slug} to="/modulos/$slug" params={{ slug: m.slug }} className="cover">
            <p className="chip">{SUBJECTS[m.subject]?.label ?? m.subject}</p>
            <h2 className="mt-2 text-xl font-bold">{m.title}</h2>
            <p className="text-sm text-muted">{read[m.slug] ? "Lido" : "Não lido"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
