# pomarvibecode

Marketing site for **Pomar** — a seasonal farm-to-table provisions brand from Portugal's southwest coast (*Do pomar à mesa* — from the orchard to the table).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Design system: **Franco** (BYQ Supply) — parchment cream + forest green, Instrument Serif / Inter / DM Mono

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — App Router pages, layout, global styles (design tokens in `globals.css`)
- `components/sections/` — homepage sections (Hero, Story, Principles, Growers, Harvest Box, Menu, Visit, Team, Testimonials, Newsletter)
- `components/site/` — Nav, Footer
- `components/ui/` — shared primitives (Logo, buttons, eyebrow labels)
- `lib/content.ts` — all site copy and imagery references
- `design/` — design-system reference (`DESIGN.md`, `theme.css`)
- `public/images/` — photography and team portraits
