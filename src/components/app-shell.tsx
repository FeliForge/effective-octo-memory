import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, House, Menu, Moon, Sun, Target, UserRound, X } from "lucide-react";
import { modules } from "@/data";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/cn";

const links = [
  { to: "/", label: "Início", icon: House, exact: true },
  { to: "/modulos", label: "Módulos", icon: BookOpen, exact: false },
  { to: "/desafio", label: "Desafio", icon: Target, exact: false },
  { to: "/perfil", label: "Perfil", icon: UserRound, exact: false },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const theme = useProgress((state) => state.theme);
  const setTheme = useProgress((state) => state.setTheme);
  const read = useProgress((state) => state.read);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void useProgress.persist.rehydrate();
    const unsub = useProgress.persist.onFinishHydration(() => setReady(true));
    if (useProgress.persist.hasHydrated()) setReady(true);
    return unsub;
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
  }, [ready, theme]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const readCount = Object.keys(read).length;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-surface px-4 lg:hidden">
        <button type="button" className="btn-icon" aria-label="Abrir menu" onClick={() => setOpen(true)}>
          <Menu className="size-5" />
        </button>
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          StudySphere
        </Link>
      </div>
      {open ? (
        <button type="button" aria-label="Fechar menu" className="fixed inset-0 z-40 bg-scrim lg:hidden" onClick={() => setOpen(false)} />
      ) : null}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface px-3 py-5 transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-on-primary">S</span>
            StudySphere
          </Link>
          <button type="button" className="btn-icon lg:hidden" aria-label="Fechar" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const active = link.exact ? pathname === link.to : pathname === link.to || pathname.startsWith(`${link.to}/`);
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-xl px-3 font-semibold",
                  active ? "bg-primary-soft text-primary" : "text-muted",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3 px-2">
          <p className="text-sm text-muted">
            {readCount} de {modules.length} módulos lidos
          </p>
          <button
            type="button"
            className="btn-ghost w-full justify-start"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            {theme === "dark" ? "Tema claro" : "Tema escuro"}
          </button>
        </div>
      </aside>
      <main className="mx-auto min-h-screen w-full max-w-5xl px-4 pt-20 pb-16 lg:pl-72 lg:pt-10">{children}</main>
    </div>
  );
}
