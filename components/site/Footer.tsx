import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { brand, nav, contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-6 w-auto text-cream" />
            <p className="mt-6 max-w-[34ch] text-cream/70">
              {brand.taglineEn}. A seasonal farm-to-table brand from {brand.location},
              Portugal.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cream/55">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="serif text-xl text-cream/85 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/55">Get in touch</p>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li>{contact.email}</li>
              <li>{contact.orders}</li>
              <li>{contact.phone}</li>
              <li className="pt-2">{contact.instagram} · {contact.tiktok}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-fog-line pt-8 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {brand.founded}–2026 {brand.name}. {brand.tagline}.
          </p>
          <p>{contact.address}</p>
        </div>
      </div>
    </footer>
  );
}
