import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Poppy" },
      { name: "description", content: "The story behind Poppy — a Melbourne studio of wearable form." },
      { property: "og:title", content: "About — Poppy" },
      { property: "og:image", content: images.p5 },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <img src={images.p5} alt="Detail of hem and painted fabric" className="w-full aspect-[4/5] object-cover sticky top-8" />
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-10">
          <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground">The Story</p>
          <h1 className="serif text-4xl md:text-6xl leading-tight">
            Soft architecture for <span className="italic text-accent">a slower body.</span>
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Poppy began as a quiet practice in a small Naarm/Melbourne studio — a place to
              think about clothing as sculpture, and sculpture as something a body could carry.
            </p>
            <p>
              Every piece is made by hand, often in editions of one. Cotton is painted, dyed, or
              left raw. Branches, tulle and salvaged linings are stitched in where they want to
              be. Nothing here is in a hurry.
            </p>
            <p>
              The studio takes on a handful of commissions each year, alongside campaign work
              and exhibitions. If a piece speaks to you, please write — we like a long
              conversation.
            </p>
          </div>
          <div className="pt-6 border-t border-border grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="uppercase tracking-[0.2em] text-muted-foreground mb-2">Based</p>
              <p>Naarm / Melbourne, AU</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-muted-foreground mb-2">Founded</p>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
