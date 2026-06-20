import { Eyebrow } from "@/components/ui/Primitives";
import { growers } from "@/lib/content";

export function Growers() {
  return (
    <section id="growers" className="scroll-mt-24 bg-cream py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[44ch]">
            <Eyebrow>Os produtores · The growers</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
              Eleven hands, a few kilometres of coast.
            </h2>
          </div>
          <p className="max-w-[34ch] text-base leading-relaxed text-forest/70">
            The land is the brand. Every grower is a partner, and every one of
            them is named — here, on the shelf, and on your box.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {growers.map((g) => (
            <article key={g.name} className="group">
              <div className="relative overflow-hidden rounded-[16px]">
                <img
                  src={g.image}
                  alt={`${g.name} — ${g.crop}, ${g.place}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="eyebrow text-cream/80">{g.place}</span>
                  <h3 className="serif mt-1 text-2xl text-cream">{g.name}</h3>
                </div>
              </div>
              <p className="eyebrow mt-4 text-forest/55">{g.crop}</p>
              <p className="mt-2 text-base leading-relaxed text-forest/70">
                {g.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
