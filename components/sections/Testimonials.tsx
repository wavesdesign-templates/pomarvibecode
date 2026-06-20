import { Eyebrow } from "@/components/ui/Primitives";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-linen py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <Eyebrow>Em boa companhia · In good company</Eyebrow>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-[16px] bg-cream p-8 shadow-[var(--shadow-card-soft)] md:p-10"
            >
              <blockquote className="serif text-[clamp(1.5rem,2.6vw,2rem)] leading-snug text-forest">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-forest">{t.name}</p>
                  <p className="eyebrow text-forest/55">{t.place}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
