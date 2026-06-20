"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Primitives";
import { principles } from "@/lib/content";

export function Principles() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Staggered sticky offsets so each card pins a little lower than the last.
  const topOffsets = ["96px", "144px", "192px"];
  const bottomMargins = ["24px", "-40px", "-80px"];

  return (
    <section className="bg-forest py-[120px] text-cream md:py-[160px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Headline — fades in and unblurs on scroll */}
        <div
          ref={headlineRef}
          className={`mx-auto mb-20 max-w-[44ch] text-center transition-all duration-700 ease-out md:mb-28 ${
            visible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
          }`}
        >
          <div className="flex justify-center">
            <Eyebrow onForest>O que nos guia · What guides us</Eyebrow>
          </div>
          <h2 className="display mt-6 text-cream text-[clamp(2.25rem,4.5vw,3.75rem)]">
            Proximity, before anything else.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-cream/70">
            Food tastes better and means more when you know the few kilometres
            it travelled and the hands that grew it. Three principles guide
            everything.
          </p>
        </div>

        {/* Stacking cards */}
        <div className="relative mx-auto flex h-[240vh] max-w-[1144px] flex-col items-start justify-between max-[991px]:h-auto max-[991px]:gap-6">
          {principles.map((p, i) => (
            <article
              key={p.no}
              className="sticky flex w-full flex-col items-start justify-end overflow-hidden rounded-[16px] p-6 md:p-8 max-[991px]:static max-[991px]:h-[460px]"
              style={{
                top: topOffsets[i],
                height: "70vh",
                marginBottom: bottomMargins[i],
                backgroundImage: `url(${p.image})`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
              }}
            >
              {/* Legibility gradient */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/5"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(22,35,27,0.78), rgba(22,35,27,0))",
                }}
              />

              {/* Frosted text tile */}
              <div
                className="relative z-[2] flex max-w-[440px] flex-col gap-2 rounded-[12px] p-6 max-[767px]:p-5"
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  backgroundColor: "rgba(22,35,27,0.42)",
                  boxShadow:
                    "0 -1px 0 0 rgba(249,245,235,0.16), 0 1px 0 0 rgba(249,245,235,0.08)",
                }}
              >
                <span className="eyebrow text-cream/70">Princípio {p.no}</span>
                <h3 className="serif text-2xl text-cream md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/80 md:text-base">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
