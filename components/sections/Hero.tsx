import { Button } from "@/components/ui/Primitives";
import { brand } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Full-bleed golden-hour photograph */}
      <img
        src="/images/figs-golden-hour.png"
        alt="A grower cradling fresh figs in the last light of the day"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Soft gradient so cream type stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/30 to-forest/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="eyebrow mb-6 text-cream/80">
          Seasonal provisions · {brand.location} · est. {brand.founded}
        </p>

        <h1 className="display max-w-[14ch] text-cream text-[clamp(3.25rem,9vw,7.5rem)]">
          Your farming supply
        </h1>

        <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-cream/85 md:text-xl">
          A seasonal farm-to-table brand from Portugal&apos;s southwest coast —
          a market, a small kitchen, and a weekly harvest box, all sourced from
          growers down the road.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#harvest-box" variant="solid-light">
            Start a Harvest Box
          </Button>
          <Button href="#story" variant="outline-light">
            Our story
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[
              "/images/team/pro-1.png",
              "/images/team/pro-2.png",
              "/images/team/pro-0.png",
              "/images/team/elegant.png",
              "/images/team/pro-3.png",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden
                className="h-11 w-11 rounded-full border-2 border-cream/80 object-cover"
              />
            ))}
          </div>
          <p className="text-sm leading-snug text-cream/80">
            <span className="font-medium text-cream">Trusted by 10,000+</span>
            <br className="hidden sm:block" /> customers across the Algarve
          </p>
        </div>
      </div>
    </section>
  );
}
