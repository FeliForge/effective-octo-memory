export type League = {
  id: string;
  name: string;
  minXp: number;
  color: string;
};

export const LEAGUES: League[] = [
  { id: "bronze", name: "Bronze", minXp: 0, color: "#cd7f32" },
  { id: "prata", name: "Prata", minXp: 100, color: "#c0c0c0" },
  { id: "ouro", name: "Ouro", minXp: 300, color: "#ffd700" },
  { id: "platina", name: "Platina", minXp: 600, color: "#e5e4e2" },
  { id: "diamante", name: "Diamante", minXp: 1000, color: "#b9f2ff" },
];

export function leagueFor(xp: number) {
  let current = LEAGUES[0];
  for (const l of LEAGUES) {
    if (xp >= l.minXp) current = l;
  }
  return current;
}
