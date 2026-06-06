import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Poppy" },
      { name: "description", content: "Poppy in print and online — features, editorials and conversations." },
      { property: "og:title", content: "Press — Poppy" },
    ],
  }),
  component: Press,
});

const features = [
  { img: images.p2, outlet: "Soft Issue Magazine", title: "On garments that remember the body", date: "March 2025" },
  { img: images.p3, outlet: "Naarm Quarterly", title: "Inside a quiet Melbourne studio", date: "January 2025" },
  { img: images.p1, outlet: "Of The Cloth", title: "Sculpture you can wear", date: "October 2024" },
  { img: images.p4, outlet: "Field Notes Journal", title: "Branch, tulle and a long hem", date: "August 2024" },
];

function Press() {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-24 pb-24">
      <div className="max-w-3xl mb-20 md:mb-28">
        <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground mb-6">Press</p>
        <h1 className="serif text-4xl md:text-6xl leading-tight">
          A small shelf of <span className="italic text-accent">words & pictures.</span>
        </h1>
        <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
          Selected features and conversations from the past few seasons. For interviews or
          imagery requests, write to <a href="mailto:press@poppy.example" className="text-accent underline-offset-4 hover:underline">press@poppy.example</a>.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {features.map((f, i) => (
          <article key={i} className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className={"md:col-span-6 " + (i % 2 === 1 ? "md:order-2" : "")}>
              <img src={f.img} alt={f.title} className="w-full aspect-[5/6] object-cover" />
            </div>
            <div className="md:col-span-5 md:col-start-8 space-y-4">
              <p className="uppercase text-xs tracking-[0.25em] text-muted-foreground">{f.outlet} · {f.date}</p>
              <h2 className="serif text-3xl md:text-4xl leading-tight">{f.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                A short feature on the studio's process and the seasonal collection — covering
                materials, the slow rhythm of the workshop, and the people behind each piece.
              </p>
              <a href="#" className="inline-block text-sm uppercase tracking-[0.18em] border-b border-accent text-accent pb-1">
                Read the piece
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
