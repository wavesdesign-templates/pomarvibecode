import { Eyebrow } from "@/components/ui/Primitives";

export function Newsletter() {
  return (
    <section className="bg-cream py-[120px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[40px]">
          <img
            src="/images/beach-sunset.png"
            alt="A joyful beach portrait at sunset on the Algarve coast"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/65" />

          <div className="relative z-10 mx-auto max-w-[52ch] px-6 py-20 text-center text-cream md:py-28">
            <div className="flex justify-center">
              <Eyebrow onForest>A época, na sua caixa · The season, in your inbox</Eyebrow>
            </div>
            <h2 className="display mt-6 text-cream text-[clamp(2.25rem,4.5vw,3.5rem)]">
              What&apos;s ripe this week?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              A short letter each week — what&apos;s in season, who grew it, and
              what we&apos;re cooking. No noise, just the harvest.
            </p>

            <form className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-[8px] border border-cream/30 bg-morning-haze px-4 py-3.5 text-forest placeholder:text-forest/50 backdrop-blur-sm outline-none focus:border-cream"
              />
              <button
                type="submit"
                className="rounded-[8px] bg-cream px-6 py-3.5 text-sm font-medium text-forest transition-colors duration-200 hover:bg-cream/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
