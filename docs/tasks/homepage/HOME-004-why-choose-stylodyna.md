# TASK HOME-004 — WHY CHOOSE STYLODYNA (DESIGN-REFERENCE INTEGRATION)

## Task Metadata
- **Task ID**: `HOME-004`
- **Title**: Why Choose StyloDyna Section (Design-Reference Integration & Implementation)
- **Domain**: `homepage`
- **Design References**: [`docs/design-references/homepage/HOME-004/`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/homepage/HOME-004/)
- **Status**: COMPLETE
- **Git Branch**: `feature/home-004-why-choose`
- **Git Commit**: `feat(homepage): add editorial Why Choose StyloDyna section`
- **Git Commit Hash**: `8269b5f`
- **Git Push Status**: PUSHED

---

## 1. Purpose & Objective
Redesign and implement the **Why Choose StyloDyna** homepage section (`sections/stylodyna-why-choose.liquid` and `assets/section-stylodyna-why-choose.css`) based on the newly approved UI design reference (`docs/design-references/homepage/HOME-004/why-choose-layout-reference-01.png`), replacing the previous centered 4-column layout with an asymmetrical editorial layout (Left side content + merchant-configurable lifestyle visual, Right side 2x2 trust card grid).

## 2. Current State
Prior to HOME-004 redesign, `stylodyna-why-choose.liquid` implemented a simple centered section header with a 4-column horizontal line layout without image integration.

## 3. Target State
An asymmetrical editorial trust section featuring:
- **Left Column**: Eyebrow (`WHY CHOOSE STYLODYNA`), Heading (`Why Choose StyloDyna?`), Supporting copy, Optional CTA button (`Discover Collections`), and a Merchant-configurable lifestyle visual (`image_picker` with fallback).
- **Right Column**: 2 × 2 Trust-Card Grid (4 cards: Timeless Design, Premium Craftsmanship, Reliable Delivery, Dedicated Support) with soft ivory containers (`#F7F5F0`), 2px stroke monochrome SVG line icons (`aria-hidden="true"`), and hover lift animations.

## 4. Dependencies
WEB-001 documentation baseline & design reference [`docs/design-references/homepage/HOME-004/README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/homepage/HOME-004/README.md).

---

## 5. Technical Requirements

### Design Requirements
- Follow [`docs/standards/DESIGN-SYSTEM.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/DESIGN-SYSTEM.md): `#FCFBF8` background, `#2E2E2E` Charcoal heading, `#8A6A43` Warm Gold eyebrow & icon stroke, `#666666` body text, `#F7F5F0` soft ivory card background.

### Data Requirements
- Section settings: `eyebrow`, `heading`, `supporting_text`, `image` (image_picker), `image_alt`, `show_button`, `button_label`, `button_link`, `padding_top`, `padding_bottom`.
- Block schema (`trust_card`, max 4): `number`, `icon` (select), `title`, `description`.

### Liquid Requirements
- 3-tier image priority rendering for the left visual:
  1. `section.settings.image` (Theme Editor upload via `image_url`/`image_tag`).
  2. Configured asset fallback.
  3. Graceful layout handling when no image is assigned.

### CSS Requirements
- Scoped stylesheet in `assets/section-stylodyna-why-choose.css`.
- Desktop (>= 1200px): Asymmetrical split layout (`grid-template-columns: 1fr 1fr; gap: 6.4rem;`).
- Right column: 2x2 grid (`grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.4rem;`).
- Touch target >= 44px, zero layout shift, zero custom JavaScript required.

### Responsive Requirements
- Desktop (>= 1200px): Asymmetrical split.
- Tablet (750px–1199px): Full-width content header, balanced visual & card layout.
- Mobile (< 750px): Single-column stack (Heading -> Copy -> CTA -> Image -> Cards 01-04).

### Accessibility Requirements
- Semantic heading hierarchy (`<h2>` section heading, `<h3>` card title).
- SVG icons set to `aria-hidden="true"`.
- Keyboard accessible CTA button with visible focus indicator.

### Performance Requirements
- Native Liquid `image_tag` with `loading="lazy"` and `widths`.
- Zero custom JavaScript dependencies.

---

## 6. Scope & File Architecture

### Files Created / Modified
- `docs/design-references/homepage/HOME-004/why-choose-layout-reference-01.png`
- `docs/design-references/homepage/HOME-004/README.md`
- `docs/tasks/homepage/HOME-004-why-choose-stylodyna.md`
- `sections/stylodyna-why-choose.liquid`
- `assets/section-stylodyna-why-choose.css`
- `templates/index.json`
- `docs/00_MASTER_INDEX.md`
- `docs/architecture/STOREFRONT-ARCHITECTURE.md`
- `docs/architecture/HOMEPAGE-ARCHITECTURE.md`
- `docs/templates/TASK-TEMPLATE.md`
- `docs/CHANGELOG.md`

---

## 7. Implementation Steps
1. Create design reference directory `docs/design-references/homepage/HOME-004/` and `README.md`.
2. Update governance documentation (`00_MASTER_INDEX.md`, `STOREFRONT-ARCHITECTURE.md`, `TASK-TEMPLATE.md`, `HOMEPAGE-ARCHITECTURE.md`).
3. Rebuild `assets/section-stylodyna-why-choose.css` for the 2x2 desktop grid + left visual split layout.
4. Rebuild `sections/stylodyna-why-choose.liquid` with left column content/visual and right column 2x2 trust grid loop.
5. Update `templates/index.json` section settings and 4 default blocks.
6. Verify layout across Desktop (>=1200px), Tablet (750-1199px), and Mobile (<750px).
7. Commit changes to `feature/home-004-why-choose` and push to `origin`.

---

## 8. Verification Plan & QA Matrix
- [x] **Level 1: Static Code Validation** — Valid Liquid, schema, & BEM CSS scoping.
- [x] **Level 2: Liquid & Schema JSON Validation** — Valid index.json section settings & presets.
- [x] **Level 3: Desktop Visual QA (>= 1200px)** — 2x2 trust grid + left visual split layout.
- [x] **Level 4: Tablet Visual QA (750px - 1199px)** — Responsive split and fluid typography.
- [x] **Level 5: Mobile Visual QA (< 750px)** — Single column stack readability.
- [x] **Level 6: Accessibility Sanity** — WCAG contrast, aria-hidden SVGs, focus indicators.
- [x] **Level 7: Shopify Theme Editor Compatibility** — Merchant configurable settings.
- [x] **Level 8: Live Preview Verification** — Zero 404 image errors, zero layout shifts.

---

## 9. Rollback Plan
Revert commit on `feature/home-004-why-choose` branch.

## 10. Documentation Updates
- [x] Master Index (`docs/00_MASTER_INDEX.md`) updated
- [x] Changelog (`docs/CHANGELOG.md`) updated
