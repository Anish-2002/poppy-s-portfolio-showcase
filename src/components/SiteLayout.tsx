import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "shop" },
  { to: "/archive", label: "collections" },
  { to: "/press", label: "press" },
  { to: "/contact", label: "info" },
] as const;

export function SiteLayout({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="px-6 md:px-12 pt-8 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border">
        <Link to="/" className="serif text-3xl md:text-4xl tracking-tight">
          Poppy<span className="text-accent">.</span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.18em]">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={
                  "transition-colors hover:text-accent " +
                  (active ? "text-accent" : "text-muted-foreground")
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="flex-1">{children ?? <Outlet />}</main>
      <footer className="px-6 md:px-12 py-10 border-t border-border mt-24 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} Poppy — Studio of wearable form.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="mailto:studio@poppy.example" className="hover:text-accent">studio@poppy.example</a>
        </div>
      </footer>
    </div>
  );
}
