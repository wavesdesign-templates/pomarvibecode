import { Eyebrow } from "@/components/ui/Primitives";
import { offerings } from "@/lib/content";

export function Offerings() {
  return (
    <section className="bg-linen py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[40ch]">
            <Eyebrow>O que fazemos · What we do</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
              Three ways to eat with the season.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <article
              key={o.no}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-cream shadow-[var(--shadow-card-soft)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={o.image}
                  alt={o.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="eyebrow absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-forest">
                  {o.no}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="serif text-2xl">{o.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-forest/70">
                  {o.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
