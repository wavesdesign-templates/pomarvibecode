"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-moss-veil bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" aria-label="Pomar — home">
          <Logo
            className={`h-5 w-auto transition-colors duration-300 ${
              scrolled ? "text-forest" : "text-cream"
            }`}
          />
        </Link>

        <div
          className={`hidden items-center gap-8 md:flex ${
            scrolled ? "text-forest" : "text-cream"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#harvest-box"
          className={`rounded-[8px] px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
            scrolled
              ? "bg-forest text-cream hover:bg-forest/90"
              : "border border-cream/40 text-cream hover:bg-cream hover:text-forest"
          }`}
        >
          Order a box
        </Link>
      </nav>
    </header>
  );
}
