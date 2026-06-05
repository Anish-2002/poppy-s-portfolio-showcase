import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "collections — poppy" },
      { name: "description", content: "'of soft architecture', 2025 — a collection by poppy." },
      { property: "og:title", content: "collections — poppy" },
      { property: "og:image", content: images.p2 },
    ],
  }),
  component: Archive,
});

// Layout: 'full' = one image full-width, 'pair' = two images side-by-side on desktop.
// When this content moves to Lovable Cloud, mirror this shape on the table:
//   { src, alt, layout: 'full' | 'pair' }
type Item = { src: string; alt: string; layout: "full" | "pair" };

const items: Item[] = [
  { src: images.p1, alt: "look 01", layout: "full" },
  { src: images.p4, alt: "look 02", layout: "pair" },
  { src: images.p3, alt: "look 03", layout: "pair" },
  { src: images.p5, alt: "look 04", layout: "full" },
  { src: images.p2, alt: "look 05", layout: "pair" },
  { src: images.p1, alt: "look 06", layout: "pair" },
  { src: images.p3, alt: "look 07", layout: "full" },
];

function groupRows(list: Item[]): Item[][] {
  const rows: Item[][] = [];
  let buf: Item[] = [];
  const flush = () => { if (buf.length) { rows.push(buf); buf = []; } };
  for (const it of list) {
    if (it.layout === "full") { flush(); rows.push([it]); }
    else { buf.push(it); if (buf.length === 2) flush(); }
  }
  flush();
  return rows;
}

function Archive() {
  const rows = groupRows(items);
  const hero = images.p2;

  return (
    <article className="-mt-px">
      {/* Hero — full viewport with overlaid statement, like the reference */}
      <section className="relative w-full h-[calc(100vh-7rem)] min-h-[620px] overflow-hidden">
        <img
          src={hero}
          alt="of soft architecture — opening look"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/15 to-transparent" />
        <div className="relative z-10 h-full flex items-start">
          <div className="max-w-md md:max-w-lg px-6 md:px-12 pt-16 md:pt-24 text-foreground">
            <h1 className="text-xl md:text-2xl lowercase tracking-tight mb-6">
              'of soft architecture', 2025
            </h1>
            <div className="space-y-4 text-[13px] md:text-sm leading-relaxed lowercase text-foreground/85">
              <p>
                this collection is a quiet study in wearable sculpture — a meditation on
                cloth as shelter, on the body as architecture, on slowness as a form of
                care. drawn from hand-painted cotton, salvaged tulle, and the brittle
                geometry of fallen branches, each piece is built by hand in a small
                naarm / melbourne studio.
              </p>
              <p>
                it began with a single question: what does it mean to dress softly in a
                hard season? the answer arrived in editions of one. garments that hold
                their own weather. silhouettes that lean toward the floor. a palette
                drawn from dust, ash and warm afternoon light. a way to move through
                the world a little quieter than before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery — full bleed, generous spacing, mix of full + pair rows */}
      <section className="flex flex-col gap-2 md:gap-3 mt-2 md:mt-3">
        {rows.map((row, ri) => {
          if (row.length === 1) {
            const it = row[0];
            return (
              <figure key={ri} className="w-full">
                <img
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-auto max-h-[100vh] object-cover"
                  loading="lazy"
                />
              </figure>
            );
          }
          return (
            <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {row.map((it, i) => (
                <figure key={i}>
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          );
        })}
      </section>

      <div className="px-6 md:px-12 py-20 text-center">
        <p className="text-xs lowercase tracking-[0.3em] text-muted-foreground">
          end — for enquiries, write to studio@poppy.example
        </p>
      </div>
    </article>
  );
}
