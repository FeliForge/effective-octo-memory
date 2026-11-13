import { createFileRoute, Link } from "@tanstack/react-router";
import { getModule } from "@/data";
import { ModuleView } from "@/components/module-view";

export const Route = createFileRoute("/modulos_/$slug")({
  component: ModulePage,
  head: ({ params }) => ({
    meta: [{ title: `${getModule(params.slug)?.title ?? "Módulo"} · StudySphere` }],
  }),
});

function ModulePage() {
  const { slug } = Route.useParams();
  const module = getModule(slug);
  if (!module) {
    return (
      <div className="space-y-3">
        <h1 className="font-display text-3xl font-semibold">Módulo não encontrado</h1>
        <Link to="/modulos" className="font-semibold text-primary">
          Voltar à lista
        </Link>
      </div>
    );
  }
  return <ModuleView module={module} />;
}
