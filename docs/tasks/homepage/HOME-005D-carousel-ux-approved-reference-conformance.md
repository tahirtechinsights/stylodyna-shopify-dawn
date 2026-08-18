# TASK HOME-005D — Carousel UX, Approved Visual Reference & Scalable Category System

## Task Metadata
- **Task ID**: `HOME-005D`
- **Parent Task**: `HOME-005` — Shop by Categories Carousel & Rail Experience
- **Domain**: `homepage / shopify section / visual reference / carousel UX / pagination`
- **Base Branch**: `develop` @ `a7ec7ef`
- **Feature Branch**: `feature/home-005-shop-by-categories`
- **Approved Visual Reference**: [`HOME-005-CAROUSEL-APPROVED`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-carousel-approved.png) (SHA-256: `df728b741e350cdec992dfa7da5284f1e5865798b299f11c23dfeaf62cfad925`).
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**100% PASS** across all 18 registered assets).
- **Implementation Validation**: `PASS`
- **Human Visual Acceptance**: `PENDING`

---

## 1. Executive Implementation Summary

1. **Approved Reference Integration**:
   - Registered new human-approved visual reference [`ui/home-005-shop-by-categories-carousel-approved.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-carousel-approved.png) in [`docs/design-references/reference-manifest.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/reference-manifest.json) and [`docs/design-references/REFERENCE-MANIFEST.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/REFERENCE-MANIFEST.md).

2. **Typography System Conformance**:
   - Section header centered above cards (`text-align: center; max-width: 66rem; margin-inline: auto; margin-bottom: 3.6rem;`).
   - Reused exact typography tokens from `Discover Every Space` (`stylodyna-featured-collections.liquid`):
     - Eyebrow: `var(--font-body-family)`, 700 weight, `0.2rem` tracking, `#6B6B6B`.
     - Heading: `var(--font-heading-family)`, 400 weight, 1.15 line-height, `-0.01rem` tracking, `#2E2E2E`.
     - Description: `var(--font-body-family)`, 1.7rem, line-height 1.6, `#6B6B6B`.

3. **Desktop 6-Card Presentation & Lateral Side Controls**:
   - Large Desktop (`>= 1280px`): Displays 6 category cards comfortably.
   - Side Navigation Arrows (`[LEFT ARROW] [CARDS 1..6] [RIGHT ARROW]`): Positioned on lateral sides of rail (`left: -2.2rem` / `right: -2.2rem`), circular `4.4rem` hit area, `#FFFFFF` surface with subtle shadow, `#1F1F1F` hover state.

4. **Dynamic Pagination / Progress Indicator**:
   - Renders centered dot indicators below category rail (`.stylodyna-categories__pagination`).
   - Calculates page count dynamically based on `rail.scrollWidth` and `rail.clientWidth`.
   - Active dot: StyloDyna gold (`#C7A24A`), elongated pill (`width: 2.4rem`, `border-radius: 1rem`).
   - Inactive dot: Neutral gray (`rgba(31,31,31,0.2)`), circular (`width: 0.8rem`).
   - Interactive: Clicking dot `i` smoothly scrolls rail to page `i`.

5. **Intelligent Autoplay & Pause Rules**:
   - Autoplay interval: `5.5s` per page progression.
   - Active **ONLY** when `scrollWidth > clientWidth + 8` AND desktop/tablet (`>= 750px`).
   - Pauses on `mouseenter`, `focusin`, manual arrow click, `touchstart`, `mousedown`, `scroll`, or hidden tab. Resumes after `8s` delay of inactivity.
   - Autoplay disabled on mobile (`< 750px`) and reduced motion (`prefers-reduced-motion`).

6. **Shopify Block Scalability**:
   - Extensible up to 12 category blocks without Liquid/JS modifications.

---

## 2. Updated File Artifacts

- **Approved Reference Image**: [`docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-carousel-approved.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-carousel-approved.png)
- **Reference Manifests**: [`docs/design-references/reference-manifest.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/reference-manifest.json), [`docs/design-references/REFERENCE-MANIFEST.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/REFERENCE-MANIFEST.md), [`docs/design-references/home/HOME-005/README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/README.md)
- **Liquid Section**: [`sections/stylodyna-shop-by-categories.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/stylodyna-shop-by-categories.liquid)
- **Stylesheet**: [`assets/component-stylodyna-shop-by-categories.css`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/component-stylodyna-shop-by-categories.css)
- **JavaScript Controller**: [`assets/stylodyna-shop-by-categories.js`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-shop-by-categories.js)
