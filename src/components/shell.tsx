import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/modulos", label: "Módulos" },
  { to: "/desafio", label: "Desafio" },
  { to: "/ligas", label: "Ligas" },
  { to: "/perfil", label: "Perfil" },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-extrabold tracking-tight">StudySphere</Link>
          <nav className="flex gap-1 overflow-x-auto text-sm">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-3 py-1.5 font-semibold ${pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to)) ? "bg-primary text-white" : "text-muted hover:bg-surface-2"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
    </div>
  );
}
