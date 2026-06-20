import { Eyebrow } from "@/components/ui/Primitives";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-cream py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-[44ch]">
          <Eyebrow>As pessoas · The people</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
            A small team, on a first-name basis.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person.name}>
              <div className="overflow-hidden rounded-[16px]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <h3 className="serif mt-5 text-xl">{person.name}</h3>
              <p className="eyebrow mt-1 text-forest/55">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-forest/70">
                {person.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
