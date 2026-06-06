import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Poppy" },
      { name: "description", content: "Write to Poppy — commissions, press and visits." },
      { property: "og:title", content: "Contact — Poppy" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-32 pb-32 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-6">
        <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.05]">
          Write to the <span className="italic text-accent">studio.</span>
        </h1>
      </div>
      <div className="md:col-span-5 md:col-start-8 space-y-10 text-lg">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-2">General & commissions</p>
          <a href="mailto:studio@poppy.example" className="text-accent">studio@poppy.example</a>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-2">Press</p>
          <a href="mailto:press@poppy.example" className="text-accent">press@poppy.example</a>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-2">Studio</p>
          <p>By appointment<br/>Naarm / Melbourne</p>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-2">Elsewhere</p>
          <a href="#" className="hover:text-accent">Instagram ↗</a>
        </div>
      </div>
    </div>
  );
}
