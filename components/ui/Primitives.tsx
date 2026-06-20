import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  onForest = false,
}: {
  children: ReactNode;
  className?: string;
  onForest?: boolean;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 ${
        onForest ? "text-cream/70" : "text-forest/60"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-px w-6 ${onForest ? "bg-cream/40" : "bg-forest/30"}`}
      />
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "solid-light" | "outline" | "outline-light";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[8px] px-6 py-3.5 text-sm font-medium transition-colors duration-200";
  const styles = {
    solid: "bg-forest text-cream hover:bg-forest/90",
    "solid-light": "bg-cream text-forest hover:bg-cream/90",
    outline: "border border-forest/30 text-forest hover:bg-forest hover:text-cream",
    "outline-light":
      "border border-cream/40 text-cream hover:bg-cream hover:text-forest",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
