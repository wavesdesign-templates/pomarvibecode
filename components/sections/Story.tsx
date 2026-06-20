import { Eyebrow } from "@/components/ui/Primitives";

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream py-[120px]">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="order-2 md:order-1">
          <Eyebrow>A nossa história · Our story</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
            An orchard doesn&apos;t rush. Neither do we.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-forest/75 md:text-lg">
            <p>
              Pomar started in 2021 when Inês Tavares, a chef who&apos;d spent a
              decade cooking in Lisbon and San Sebastián, moved home to the
              Algarve — and found she couldn&apos;t easily buy the produce she
              grew up with. The figs, apricots and peppers were leaving the
              region on trucks before locals ever saw them.
            </p>
            <p>
              So she started buying directly from a handful of farmers she knew,
              opened a tiny shop in Aljezur, and cooked a short daily menu from
              whatever came in that morning. The name came from her
              co-founder&apos;s family land — an apricot orchard near Silves that
              had fed three generations.
            </p>
            <p>
              Today Pomar works with eleven growers across the western Algarve,
              quietly becoming the region&apos;s reference point for eating with
              the season.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-[16px]">
            <img
              src="/images/apricots.png"
              alt="A hand harvesting ripe apricots in golden orchard light"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
