import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — Poppy" },
      { name: "description", content: "A digital folio of Poppy's garments, campaigns and process work." },
      { property: "og:title", content: "Archive — Poppy" },
      { property: "og:image", content: images.p3 },
    ],
  }),
  component: Archive,
});

const items = [
  { src: images.p2, title: "Cloak No. 01", year: "2025", note: "Cotton, tulle, branch" },
  { src: images.p1, title: "Drape Study", year: "2025", note: "Hand-painted cotton" },
  { src: images.p3, title: "Apron, long", year: "2024", note: "Black cotton, floral lining" },
  { src: images.p4, title: "Resting Form", year: "2024", note: "Mixed media" },
  { src: images.p5, title: "Hem detail", year: "2024", note: "Painted cotton, tulle" },
];

function Archive() {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
      <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
        <div className="md:col-span-6">
          <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground mb-6">Archive</p>
          <h1 className="serif text-4xl md:text-6xl leading-tight">A folio of work,<br/><span className="italic text-accent">2023 — present.</span></h1>
        </div>
        <div className="md:col-span-5 md:col-start-8 text-muted-foreground leading-relaxed">
          A growing record of garments, sculptural studies and campaign imagery. Each entry holds
          its own materials, season and quiet idea. Click through for the full piece.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
        {items.map((it, i) => (
          <figure key={i} className={i % 2 === 1 ? "md:mt-24" : ""}>
            <img src={it.src} alt={it.title} className="w-full aspect-[4/5] object-cover" />
            <figcaption className="mt-5 flex justify-between text-sm">
              <span className="serif text-lg">{it.title}</span>
              <span className="text-muted-foreground">{it.year} · {it.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
