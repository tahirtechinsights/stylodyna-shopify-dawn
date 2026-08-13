# StyloDyna Design System Standard

## Brand Vision & Aesthetic Identity
StyloDyna represents modern British, Scandinavian, and Japandi quiet luxury home décor and furniture design. The storefront interface must feel calm, spacious, editorial, refined, and trustworthy.

### Forbidden Design Tropes
- **No Loud or Neon Colors**: Avoid bright promotional banners, loud callouts, or saturated accents.
- **No Heavy Drop Shadows**: Avoid drop-shadow heavy cards or cartoon UI components.
- **No Marketplace Clutter**: Avoid dense, cluttered badge overlays, flashing timers, or chaotic layouts.
- **No Rounded Pill Overuse**: Avoid generic, over-rounded dropshipping buttons or rounded cards containing nested cards.

---

## Color Palette Tokens

```css
:root {
  /* Core Brand Colors */
  --stylo-primary-bg: #FCFBF8;      /* Primary Editorial Background (Stone White) */
  --stylo-primary-text: #2E2E2E;    /* Primary Headings & Dark Text (Charcoal) */
  --stylo-accent: #8A6A43;          /* Accent / Eyebrow / Icon Stroke (Warm Gold / Brass) */
  --stylo-secondary-body: #666666;  /* Body Paragraphs & Subtitles (Warm Gray) */
  --stylo-soft-ivory: #F7F5F0;      /* Soft Container & Icon Circle Background */
  --stylo-sand-beige: #EFE8DD;      /* Subtle Secondary Accent & Borders */
  --stylo-subtle-divider: rgba(0, 0, 0, 0.08); /* Column Dividers & Borders */

  /* Button Tokens */
  --stylo-btn-bg: #1F1F1F;          /* Primary Button Background */
  --stylo-btn-hover: #000000;       /* Primary Button Hover */
  --stylo-btn-text: #FFFFFF;        /* Button Text Color */
  --stylo-btn-radius: 0.3rem;       /* 3px Refined Corner Radius */
}
```

---

## Editorial Typography System
- **Headings**: Editorial serif typography (`font-family: var(--font-heading-family)`), large, refined, and responsive using CSS `clamp()`.
- **Eyebrows**: Small uppercase text (`font-size: 1.3rem`, `font-weight: 700`, `letter-spacing: 0.18em`, `color: var(--stylo-accent)`).
- **Body Text**: Readable sans-serif (`font-family: var(--font-body-family)`), comfortable line-height (`1.6` – `1.8`), max paragraph width `540px` – `760px`.
- **No External Font Loading**: Use theme-configured font settings exclusively. Do not import third-party Google Fonts inside individual sections.

---

## Composition & Whitespace Rules
- **Generous Section Padding**: Desktop section padding defaults to `96px` – `120px` top and bottom.
- **Micro-Interactions**: Subtle, non-dramatic hover transitions (`300ms ease`), such as 1.03 image scaling, 2px title lift, or 4px rightward arrow shifts.
- **Card Aspect Ratios**: Standardized `4:5` or `4:3` aspect ratios for images with `object-fit: cover`.
