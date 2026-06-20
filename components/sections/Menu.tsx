import { Eyebrow } from "@/components/ui/Primitives";
import { menu } from "@/lib/content";

export function Menu() {
  return (
    <section id="menu" className="scroll-mt-24 bg-cream py-[120px]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-10">
        {/* Images — an even, aligned pair */}
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-[16px]">
            <img
              src="/images/ricotta-toast.png"
              alt="Sunlit ricotta toast with roasted cherry tomatoes"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[16px]">
            <img
              src="/images/chef-fish-dish.png"
              alt="A chef finishing a gourmet fish dish with microgreens"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        {/* Menu list */}
        <div className="flex flex-col justify-center">
          <Eyebrow>O menu do dia · Today&apos;s table</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
            A short menu, cooked from the morning&apos;s delivery.
          </h2>

          <div className="mt-10 space-y-10">
            {menu.map((group) => (
              <div key={group.course}>
                <p className="eyebrow text-forest/55">{group.course}</p>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-6 border-b border-moss-veil py-4"
                    >
                      <span className="serif text-lg leading-snug md:text-xl">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-sm text-forest/60">
                        €{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-forest/55">
            The menu changes daily with the harvest. This is a taste of a recent
            week.
          </p>
        </div>
      </div>
    </section>
  );
}
