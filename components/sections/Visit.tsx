import { Eyebrow, Button } from "@/components/ui/Primitives";
import { contact } from "@/lib/content";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 bg-forest py-[120px] text-cream">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div className="overflow-hidden rounded-[16px] md:order-2">
          <img
            src="/images/counter-payment.png"
            alt="Contactless payment at the minimalist Pomar counter"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="md:order-1">
          <Eyebrow onForest>Visite-nos · Visit the shop</Eyebrow>
          <h2 className="display mt-6 text-cream text-[clamp(2.25rem,4.5vw,3.75rem)]">
            The market &amp; café, in Aljezur.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-cream/55">Where</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                {contact.address}
              </p>
            </div>

            <div>
              <p className="eyebrow text-cream/55">Hours</p>
              <ul className="mt-3 space-y-1.5">
                {contact.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-6 text-cream/85"
                  >
                    <span>{h.day}</span>
                    <span className="text-cream/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-cream/55">Say hello</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                {contact.email}
                <br />
                {contact.phone}
              </p>
            </div>

            <div>
              <p className="eyebrow text-cream/55">We deliver to</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                {contact.delivery}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button href="#harvest-box" variant="solid-light">
              Plan a visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
