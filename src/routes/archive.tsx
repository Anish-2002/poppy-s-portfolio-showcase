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

// Layout types let us mix full-bleed pieces with paired images on a single row.
// When this content moves to Lovable Cloud, mirror this shape on the table:
//   { src, title, year, note, layout: 'full' | 'pair' }
// Two consecutive 'pair' entries render side by side on desktop.
type Item = {
  src: string;
  title: string;
  year: string;
  note: string;
  layout: "full" | "pair";
};

const items: Item[] = [
  { src: images.p2, title: "Cloak No. 01", year: "2025", note: "Cotton, tulle, branch — campaign opener.", layout: "full" },
  { src: images.p1, title: "Drape Study", year: "2025", note: "Hand-painted cotton, studio light.", layout: "pair" },
  { src: images.p4, title: "Resting Form", year: "2024", note: "Mixed media, soft tailoring.", layout: "pair" },
  { src: images.p3, title: "Apron, long", year: "2024", note: "Black cotton with floral lining — full piece.", layout: "full" },
  { src: images.p5, title: "Hem detail", year: "2024", note: "Painted cotton, tulle gather.", layout: "pair" },
  { src: images.p2, title: "Cloak, back", year: "2025", note: "Reverse silhouette.", layout: "pair" },
];

// Group consecutive 'pair' items into rows of 2; 'full' items become their own row.
function groupRows(list: Item[]): Item[][] {
  const rows: Item[][] = [];
  let buffer: Item[] = [];
  const flush = () => {
    if (buffer.length) {
      rows.push(buffer);
      buffer = [];
    }
  };
  for (const it of list) {
    if (it.layout === "full") {
      flush();
      rows.push([it]);
    } else {
      buffer.push(it);
      if (buffer.length === 2) flush();
    }
  }
  flush();
  return rows;
}

function Archive() {
  const rows = groupRows(items);

  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
      <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
        <div className="md:col-span-6">
          <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground mb-6">Archive</p>
          <h1 className="serif text-4xl md:text-6xl leading-tight">
            A folio of work,
            <br />
            <span className="italic text-accent">2023 — present.</span>
          </h1>
        </div>
        <div className="md:col-span-5 md:col-start-8 text-muted-foreground leading-relaxed">
          A growing record of garments, sculptural studies and campaign imagery. Each entry holds
          its own materials, season and quiet idea.
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {rows.map((row, ri) => {
          if (row.length === 1) {
            const it = row[0];
            return (
              <figure key={ri} className="w-full">
                <img
                  src={it.src}
                  alt={it.title}
                  className="w-full h-auto max-h-[85vh] object-cover"
                />
                <figcaption className="mt-5 flex flex-col md:flex-row md:justify-between gap-1 text-sm max-w-3xl">
                  <span className="serif text-xl">{it.title}</span>
                  <span className="text-muted-foreground">
                    {it.year} · {it.note}
                  </span>
                </figcaption>
              </figure>
            );
          }
          return (
            <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {row.map((it, i) => (
                <figure key={i}>
                  <img
                    src={it.src}
                    alt={it.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <figcaption className="mt-4 flex flex-col gap-1 text-sm">
                    <span className="serif text-lg">{it.title}</span>
                    <span className="text-muted-foreground">
                      {it.year} · {it.note}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
