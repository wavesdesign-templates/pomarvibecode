# Pomar — Design System (Franco / BYQ Supply)

> *Do pomar à mesa.* Sun-soaked, editorial, rooted. Photography leads; type stays quiet.

**Locked style:** Franco — *"nature's grace, raw minimalism."* Theme: light.

## Palette
| Role | Token | Hex |
|------|-------|-----|
| Primary canvas | `--color-parchment-cream` | `#f9f5eb` |
| Ink & deep canvas (dark panels, body text, button fills) | `--color-forest-ink` | `#16231b` |
| Lifted surface (cards, tinted blocks) | `--color-linen-mist` | `#ece7d9` |
| Hairline on cream | `--color-moss-veil` | `#16231b29` |
| Hairline on forest | `--color-fog-line` | `#ffffff29` |
| Frosted veil over imagery | `--color-morning-haze` | `#ffffff99` |
| Translucent ink (labels, gradient stops) | `--color-shaded-grove` | `#16231b99` |

**No third hue.** Cream + forest green + linen only. Earthy green-cream-stone story; photography supplies the rest of the color.

## Typography
- **Instrument Serif** — display/headings, 56–112px, `-0.02em`, line-height 0.9. Romantic, hand-set, slightly compressed. The signature. Headings only — never body.
- **Inter** — body & UI, 16px / 1.5, weights 400/500. Never above 500.
- **DM Mono** — eyebrow labels & metadata only. 12px UPPERCASE, `0.02em` tracking. Pairs above serif headings; never competes.

## Spacing & shape
- Section rhythm: **120px** top/bottom default; 144–160px for hero/marquee. Never below 80px desktop.
- Radii: buttons/inputs **8px**, cards **16px**, large mockup containers **32–40px**. Humble. Not pill-shaped (9999px reserved for icon circles).
- Container max-width 1800px, 32px gutters. Base unit 8px.
- Shadows: single soft lift `0 2px 30px rgba(119,119,119,0.06)`. No heavy elevation.

## Layout pattern
Vertical editorial scroll. Alternate **Parchment Cream** and **Forest Ink** panels for rhythm; Linen Mist for tinted feature blocks. Full-viewport heroes (100svh) with full-bleed photo/video + Shaded Grove gradient so cream type stays legible. Three-column card grids; half-and-half content+image splits; centered ~649px CTA copy blocks. Translucent nav that goes opaque cream on scroll, with vertical hairline dividers. Footer always Forest Ink with cream serif links at 20px.

## Imagery (we already have the mood board in `/images`)
Slow, sun-soaked nature + quiet portraits, natural light, shallow depth of field. Pomar's set fits exactly: growers at golden hour, the warm minimal counter, simple plates, the beach. Frame as 16px-radius rectangles with subtle 1.03× hover. Always overlay photos with a soft gradient for cream type. No stock composites, no hard product shots, no saturated lifestyle.

## Voice
Quiet editorial magazine — confident, unhurried, craft-grounded. Short sentences, terse uppercase labels. Lean into land/season/proximity. No hype, no tech-bro energy. Portuguese soul, internationally legible.

## Pomar mapping notes
- DM Mono eyebrows → grower credits, season tags ("EM ÉPOCA / IN SEASON"), surface labels.
- Forest Ink panels → grower stories, Harvest Box tiers, testimonials, footer.
- Cream panels → hero, story, daily menu, location & hours.
- Harvest Box tiers (Solo / Casa / Mesa Cheia) → three Parchment Cream cards, 16px radius, serif plan name, Moss Veil divider; highlight middle (Casa) in Forest Ink with cream type.

## Files
- `design/theme.css` — Tailwind v4 `@theme` token block. Import in global CSS.
- Fonts to load: Instrument Serif, Inter, DM Mono (Google Fonts).
