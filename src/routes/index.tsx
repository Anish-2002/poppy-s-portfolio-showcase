import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poppy — Studio of wearable form" },
      { name: "description", content: "Poppy is a Melbourne-based studio exploring sculptural garments, soft tailoring and quiet campaign work." },
      { property: "og:title", content: "Poppy — Studio of wearable form" },
      { property: "og:description", content: "Sculptural garments and campaign work from Melbourne." },
      { property: "og:image", content: images.p2 },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-10 md:gap-16 items-end">
        <div className="md:col-span-6 space-y-8">
          <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground">Campaign 01 — Of soft architecture</p>
          <h1 className="serif text-5xl md:text-7xl leading-[1.05]">
            Garments that hold<br />
            <span className="italic text-accent">a quiet weight.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Poppy is a studio practice from Naarm/Melbourne. We work between sculpture and dress —
            building pieces that drape, fold and remember the body.
          </p>
          <div className="flex gap-6 pt-2 text-sm uppercase tracking-[0.18em]">
            <Link to="/archive" className="border-b border-accent pb-1 text-accent hover:opacity-70">View Collection</Link>
            <Link to="/about" className="border-b border-border pb-1 hover:text-accent">The Story</Link>
          </div>
        </div>
        <div className="md:col-span-6">
          <img src={images.p2} alt="Poppy campaign — sculptural white garment in garden setting" className="w-full h-[60vh] md:h-[80vh] object-cover" />
        </div>
      </section>

      {/* Featured pair */}
      <section className="px-6 md:px-12 grid md:grid-cols-2 gap-10 md:gap-20 pb-24 md:pb-40">
        <figure className="space-y-4">
          <img src={images.p1} alt="Side profile, draped piece with branch detailing" className="w-full aspect-[4/5] object-cover" />
          <figcaption className="text-sm text-muted-foreground italic">No. 01 — The Cloak, hand-painted cotton & tulle.</figcaption>
        </figure>
        <figure className="space-y-4 md:mt-32">
          <img src={images.p4} alt="Reclining on grass with sculptural drape" className="w-full aspect-[4/5] object-cover" />
          <figcaption className="text-sm text-muted-foreground italic">No. 02 — Resting form, with branch armature.</figcaption>
        </figure>
      </section>

      {/* Story strip */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-y border-border bg-muted/40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground">A note</p>
          </div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="serif text-2xl md:text-4xl leading-snug">
              Each piece begins as a question about the body — what does it want to carry,
              and what does it want to let fall? Poppy is the slow answer.
            </p>
            <Link to="/about" className="inline-block mt-10 text-sm uppercase tracking-[0.18em] border-b border-accent pb-1 text-accent">
              Read the story
            </Link>
          </div>
        </div>
      </section>

      {/* Full bleed */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <img src={images.p3} alt="Full-length apron-style garment with painted train" className="w-full h-[70vh] md:h-[90vh] object-cover" />
        <div className="grid md:grid-cols-12 mt-8">
          <div className="md:col-span-6 md:col-start-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground italic">
              Campaign imagery, Autumn — photographed in the studio garden.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pt-12 pb-8 text-center">
        <h2 className="serif text-3xl md:text-5xl">Explore the full archive</h2>
        <Link to="/archive" className="inline-block mt-8 text-sm uppercase tracking-[0.18em] border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition">
          Enter Archive
        </Link>
      </section>
    </div>
  );
}
