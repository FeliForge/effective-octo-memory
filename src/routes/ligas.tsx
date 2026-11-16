import { createFileRoute } from "@tanstack/react-router";
import { LEAGUES, leagueFor } from "@/lib/leagues";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/ligas")({
  component: Ligas,
  head: () => ({ meta: [{ title: "Ligas · StudySphere" }] }),
});

function Ligas() {
  const hits = useProgress((s) => s.hits);
  const xp = hits * 10;
  const current = leagueFor(xp);
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold">Ligas</h1>
      <p className="text-muted">XP atual: {xp} · Liga: {current.name}</p>
      <ul className="space-y-3">
        {LEAGUES.map((l) => (
          <li key={l.id} className="card flex items-center justify-between" style={{ borderColor: l.color }}>
            <span className="font-bold">{l.name}</span>
            <span className="text-sm text-muted">{l.minXp}+ XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
