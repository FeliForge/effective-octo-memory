import { createFileRoute, Link } from "@tanstack/react-router";
import { modules } from "@/lib/caderno";
import { useProgress, useStudyTimer } from "@/lib/store";

export const Route = createFileRoute("/modulos/$slug")({
  component: ModulePage,
});

function ModulePage() {
  const { slug } = Route.useParams();
  const mod = modules.find((m) => m.slug === slug);
  const markRead = useProgress((s) => s.markRead);
  const setLastSlug = useProgress((s) => s.setLastSlug);
  useStudyTimer(!!mod);

  if (!mod) return <p>Módulo não encontrado.</p>;

  return (
    <div className="space-y-6">
      <Link to="/modulos" className="text-sm text-muted">← Módulos</Link>
      <h1 className="text-4xl font-extrabold">{mod.title}</h1>
      <p className="text-lg">{mod.content.intro}</p>
      {mod.content.sections.map((s) => (
        <section key={s.title} className="card space-y-2">
          <h2 className="text-xl font-bold">{s.title}</h2>
          <ul className="list-disc pl-5">
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}
      <button
        className="btn-primary"
        onClick={() => {
          markRead(mod.slug);
          setLastSlug(mod.slug);
        }}
      >
        Marcar como lido
      </button>
    </div>
  );
}
