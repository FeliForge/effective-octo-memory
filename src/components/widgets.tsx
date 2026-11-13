import { useMemo, useState } from "react";

const GENOTYPES = ["FF", "Ff", "ff"] as const;
type Genotype = (typeof GENOTYPES)[number];

const genotypeLabel: Record<Genotype, string> = {
  FF: "Sem o alelo",
  Ff: "Portador",
  ff: "Afetado",
};

function childPhenotype(a: string, b: string) {
  const alleles = [a, b].sort().join("");
  const genotype = (alleles === "Ff" ? "Ff" : alleles) as Genotype;
  return { genotype, label: genotypeLabel[genotype] };
}

export function PunnettWidget() {
  const [mother, setMother] = useState<Genotype>("Ff");
  const [father, setFather] = useState<Genotype>("Ff");
  const grid = useMemo(() => {
    const rows = [mother[0], mother[1]];
    const cols = [father[0], father[1]];
    return rows.map((row) => cols.map((col) => childPhenotype(row, col)));
  }, [mother, father]);
  const flat = grid.flat();
  const affected = flat.filter((cell) => cell.genotype === "ff").length;
  const carriers = flat.filter((cell) => cell.genotype === "Ff").length;
  const clear = flat.filter((cell) => cell.genotype === "FF").length;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,280px)_1fr]">
      <div className="space-y-4">
        <ParentSelect label="Progenitor A" value={mother} onChange={setMother} />
        <ParentSelect label="Progenitor B" value={father} onChange={setFather} />
        <p className="text-sm text-muted">
          F representa o alelo sem fibrose e f, o alelo recessivo. Cada célula do quadro é um filho possível, com a mesma chance.
        </p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-72 border-separate border-spacing-2 text-center">
            <caption className="sr-only">Quadro de Punnett para fibrose cística</caption>
            <thead>
              <tr>
                <th className="w-16" />
                { [father[0], father[1]].map((allele, index) => (
                  <th key={`${allele}-${index}`} className="pb-1 text-sm font-semibold text-muted">
                    {allele}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <th className="pr-1 text-sm font-semibold text-muted">{mother[rowIndex]}</th>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={
                        cell.genotype === "ff"
                          ? "rounded-xl bg-danger-soft px-3 py-4 text-danger"
                          : cell.genotype === "Ff"
                            ? "rounded-xl bg-primary-soft px-3 py-4 text-primary"
                            : "rounded-xl bg-accent-soft px-3 py-4 text-accent"
                      }
                    >
                      <span className="block font-display text-xl font-semibold">{cell.genotype}</span>
                      <span className="text-xs font-semibold">{cell.label}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-xl bg-surface-2 px-2 py-3">
            <dt className="text-muted">Afetado</dt>
            <dd className="font-display text-2xl font-semibold">{affected * 25}%</dd>
          </div>
          <div className="rounded-xl bg-surface-2 px-2 py-3">
            <dt className="text-muted">Portador</dt>
            <dd className="font-display text-2xl font-semibold">{carriers * 25}%</dd>
          </div>
          <div className="rounded-xl bg-surface-2 px-2 py-3">
            <dt className="text-muted">Sem o alelo</dt>
            <dd className="font-display text-2xl font-semibold">{clear * 25}%</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function ParentSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Genotype;
  onChange: (value: Genotype) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold">{label}</legend>
      <div className="grid grid-cols-3 gap-2">
        {GENOTYPES.map((genotype) => (
          <button
            key={genotype}
            type="button"
            aria-pressed={value === genotype}
            onClick={() => onChange(genotype)}
            className={
              value === genotype
                ? "min-h-11 rounded-xl bg-primary px-2 py-2 text-on-primary"
                : "min-h-11 rounded-xl bg-surface-2 px-2 py-2 text-fg"
            }
          >
            <span className="block text-sm font-bold">{genotype}</span>
            <span className="block text-xs">{genotypeLabel[genotype]}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export const LIGHT_SPEED = 300_000;

export const SOLAR_BODIES = [
  { name: "Mercúrio", km: 58_000_000 },
  { name: "Vênus", km: 108_000_000 },
  { name: "Terra", km: 150_000_000 },
  { name: "Marte", km: 228_000_000 },
  { name: "Júpiter", km: 778_000_000 },
  { name: "Saturno", km: 1_400_000_000 },
  { name: "Urano", km: 2_900_000_000 },
  { name: "Netuno", km: 4_500_000_000 },
];

export function formatDuration(seconds: number) {
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const parts = [];
  if (hours) parts.push(`${hours} h`);
  if (minutes || hours) parts.push(`${minutes} min`);
  parts.push(`${secs} s`);
  return parts.join(" ");
}

export function LightWidget() {
  const [name, setName] = useState("Terra");
  const [custom, setCustom] = useState("");
  const body = SOLAR_BODIES.find((item) => item.name === name) ?? SOLAR_BODIES[2];
  const customKm = Number(custom.replace(/\./g, "").replace(",", "."));
  const usingCustom = custom.trim().length > 0 && Number.isFinite(customKm) && customKm > 0;
  const km = usingCustom ? customKm : body.km;
  const seconds = km / LIGHT_SPEED;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {SOLAR_BODIES.map((item) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={!usingCustom && name === item.name}
            onClick={() => {
              setName(item.name);
              setCustom("");
            }}
            className={
              !usingCustom && name === item.name
                ? "min-h-11 rounded-full bg-primary px-3 text-sm font-semibold text-on-primary"
                : "min-h-11 rounded-full bg-surface-2 px-3 text-sm font-semibold"
            }
          >
            {item.name}
          </button>
        ))}
      </div>
      <label className="block text-sm">
        <span className="font-semibold">Ou informe outra distância em km</span>
        <input
          inputMode="decimal"
          value={custom}
          onChange={(event) => setCustom(event.target.value)}
          placeholder="150000000"
          className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-3"
        />
      </label>
      <div className="rounded-2xl bg-surface-2 p-4">
        <p className="font-display text-3xl font-semibold tracking-tight">{formatDuration(seconds)}</p>
        <p className="mt-2 text-sm text-muted">
          Δt = {km.toLocaleString("pt-BR")} km ÷ {LIGHT_SPEED.toLocaleString("pt-BR")} km/s ={" "}
          {seconds.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} s
        </p>
      </div>
    </div>
  );
}

const PH_MARKS = [
  { label: "Suco gástrico", value: 1.5 },
  { label: "Vinagre", value: 3 },
  { label: "Chuva ácida", value: 4.2 },
  { label: "Chuva comum", value: 5.6 },
  { label: "Água pura", value: 7 },
  { label: "Sangue", value: 7.4 },
  { label: "Sabão", value: 10 },
  { label: "Soda cáustica", value: 13.5 },
];

function describePh(value: number) {
  if (value < 3) return "Ácido forte. É a faixa de ácidos concentrados e do suco gástrico.";
  if (value < 5.6) return "Ácido. Abaixo de 5,6 está a faixa em que a chuva já é chamada de chuva ácida.";
  if (value < 6.5) return "Perto de 5,6 a chuva comum já é levemente ácida, por causa do CO2 dissolvido. Isso não é o problema da chuva ácida.";
  if (value < 7) return "Ainda levemente ácido, já perto do neutro.";
  if (value < 7.5) return "Neutro ou praticamente neutro. A água pura fica em 7.";
  if (value < 10) return "Básico. O sangue fica um pouco acima de 7; sabões sobem mais.";
  return "Base forte. Hidróxido de sódio concentrado chega perto do fim da escala.";
}

export function PhWidget() {
  const [value, setValue] = useState(5.6);
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-end justify-between gap-3">
          <p className="font-display text-4xl font-semibold tracking-tight">{value.toFixed(1)}</p>
          <p className="max-w-sm text-right text-sm text-muted">{describePh(value)}</p>
        </div>
        <input
          type="range"
          min={0}
          max={14}
          step={0.1}
          value={value}
          aria-label="Valor de pH"
          onChange={(event) => setValue(Number(event.target.value))}
          className="mt-4 h-11 w-full accent-primary"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>0 ácido</span>
          <span>7 neutro</span>
          <span>14 básico</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {PH_MARKS.map((mark) => (
          <button
            key={mark.label}
            type="button"
            onClick={() => setValue(mark.value)}
            className="min-h-11 rounded-full bg-surface-2 px-3 text-sm font-semibold"
          >
            {mark.label}
          </button>
        ))}
      </div>
    </div>
  );
}
