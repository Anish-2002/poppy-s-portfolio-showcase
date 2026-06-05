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
      <header className="px-6 md:px-12 pt-6 pb-5 flex items-center justify-between gap-4 bg-background/85 backdrop-blur sticky top-0 z-50">
        <nav className="flex gap-x-6 md:gap-x-8 text-sm lowercase tracking-tight">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={
                  "transition-colors hover:text-accent " +
                  (active ? "text-foreground underline underline-offset-4 decoration-1" : "text-foreground/70")
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link to="/" className="serif italic text-2xl md:text-[28px] tracking-tight leading-none">
          poppy<span className="text-accent">.</span>
        </Link>
        <div className="w-[1px]" aria-hidden />
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
