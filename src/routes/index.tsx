import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/poppy-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poppy — Studio of wearable form" },
      { name: "description", content: "Poppy — a Naarm/Melbourne studio of sculptural garments and quiet campaign work." },
      { property: "og:title", content: "Poppy" },
      { property: "og:description", content: "Sculptural garments and campaign work from Melbourne." },
      { property: "og:image", content: images.p2 },
    ],
  }),
  component: Index,
});

const slides = [images.p2, images.p1, images.p3, images.p5, images.p4];

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-7rem)] min-h-[560px] w-full overflow-hidden bg-foreground">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={idx !== i}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out will-change-[opacity,transform]"
            style={{
              opacity: idx === i ? 1 : 0,
              transform: idx === i ? "scale(1.06)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1800ms, 7000ms",
            }}
          />
        ))}
        {/* subtle vignette so text remains legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* Overlay copy */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-14 text-center text-background md:pb-20">
        <p className="uppercase text-[10px] md:text-xs tracking-[0.4em] opacity-80 mb-5">
          Campaign 01 — Of soft architecture
        </p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.02] max-w-3xl">
          Poppy<span className="text-accent">.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm md:text-base opacity-85 leading-relaxed">
          A Naarm / Melbourne studio of wearable form — sculptural garments, hand-painted cloth,
          and quiet campaign work.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.28em]">
          <Link to="/archive" className="border-b border-accent pb-1 text-accent hover:opacity-80">
            View Campaign Shoot
          </Link>
          <Link to="/archive" className="border-b border-background/60 pb-1 hover:text-accent">
            View All
          </Link>
          <Link to="/about" className="border-b border-background/60 pb-1 hover:text-accent">
            The Story
          </Link>
        </div>

        {/* slide indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className="h-[2px] w-6 transition-opacity"
              style={{ background: idx === i ? "var(--accent)" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
