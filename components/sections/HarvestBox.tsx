import { Eyebrow, Button } from "@/components/ui/Primitives";
import { harvestBox } from "@/lib/content";

export function HarvestBox() {
  return (
    <section id="harvest-box" className="scroll-mt-24 bg-linen py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto max-w-[48ch] text-center">
          <div className="flex justify-center">
            <Eyebrow>A caixa semanal · The Harvest Box</Eyebrow>
          </div>
          <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
            A week of the harvest, on your table.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest/70">
            Just-picked produce and a few prepared things, sized by household.
            Pause anytime, skip anytime. The season decides the rest.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {harvestBox.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col rounded-[16px] p-8 md:p-10 ${
                tier.featured
                  ? "bg-forest text-cream shadow-[var(--shadow-card-soft)]"
                  : "border border-moss-veil bg-cream text-forest"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="serif text-3xl">{tier.name}</h3>
                <span
                  className={`eyebrow ${
                    tier.featured ? "text-cream/60" : "text-forest/50"
                  }`}
                >
                  {tier.forWho}
                </span>
              </div>

              <p
                className={`mt-4 text-base leading-relaxed ${
                  tier.featured ? "text-cream/75" : "text-forest/70"
                }`}
              >
                {tier.blurb}
              </p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="serif text-5xl">€{tier.price}</span>
                <span
                  className={`text-sm ${
                    tier.featured ? "text-cream/60" : "text-forest/50"
                  }`}
                >
                  {tier.cadence}
                </span>
              </div>

              <div
                className={`my-8 h-px ${
                  tier.featured ? "bg-fog-line" : "bg-moss-veil"
                }`}
              />

              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm ${
                      tier.featured ? "text-cream/80" : "text-forest/75"
                    }`}
                  >
                    <span aria-hidden className="mt-[2px] serif leading-none">
                      ✦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  href="#harvest-box"
                  variant={tier.featured ? "outline-light" : "solid"}
                  className="w-full"
                >
                  Choose {tier.name}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-forest/55">
          Delivered across the western Algarve — Aljezur, Carrapateira, Sagres,
          Vila do Bispo &amp; Lagos.
        </p>
      </div>
    </section>
  );
}
