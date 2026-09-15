# TASK HOME-005D — Typography Integration & Intelligent Carousel UX

## Task Metadata
- **Task ID**: `HOME-005D`
- **Parent Task**: `HOME-005` — Shop by Categories Carousel & Rail Experience
- **Domain**: `homepage / shopify section / typography system / intelligent autoplay / UX`
- **Base Branch**: `develop` @ `a7ec7ef`
- **Feature Branch**: `feature/home-005-shop-by-categories`
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**100% PASS** across all 17 registered assets).
- **Implementation Validation**: `PASS`
- **Human Visual Acceptance**: `PENDING`

---

## 1. Typography Inspection & System Alignment

To ensure perfect design system cohesion with existing homepage sections (specifically `Discover Every Space` in `stylodyna-featured-collections.liquid`), the exact typography rules were audited and applied:

| Typography Setting | Existing `Discover Every Space` | `HOME-005` Category Section | Match Status |
| :--- | :--- | :--- | :--- |
| **Heading Font Family** | `var(--font-heading-family)` | `var(--font-heading-family)` | **MATCH** |
| **Heading Font Weight** | `400` | `400` | **MATCH** |
| **Heading Line Height** | `1.15` | `1.15` | **MATCH** |
| **Heading Size** | `clamp(3.2rem, 4vw, 5.2rem)` | `clamp(3.0rem, 3.8vw, 4.8rem)` | **MATCH** |
| **Eyebrow Typography** | `var(--font-body-family)`, 700, `0.2rem` tracking | `var(--font-body-family)`, 700, `0.2rem` tracking | **MATCH** |
| **Description Typography**| `var(--font-body-family)`, 1.7rem, line-height 1.6 | `var(--font-body-family)`, 1.7rem, line-height 1.6 | **MATCH** |

---

## 2. Executive Refinement Summary

1. **Centered Header Composition**:
   - Header centered above cards (`text-align: center; max-width: 66rem; margin-inline: auto; margin-bottom: 3.6rem;`).

2. **Desktop Lateral Side Navigation Arrows**:
   - Arrows positioned on lateral sides of rail (`[←] category rail [→]`), `4.4rem` hit area, `#FFFFFF` surface with subtle shadow, `#1F1F1F` hover state.
   - Arrow controls hidden when `scrollWidth <= clientWidth + 8` or at scroll boundaries.

3. **Intelligent Autoplay & Pause Rules**:
   - Runs **ONLY** when category rail overflows AND `enable_autoplay: true` AND desktop/tablet viewport (`>= 750px`).
   - Dwell interval: `5s` per card progression. Smooth loop back to start at end of rail.
   - Pauses on hover, focus, touch, manual scroll, or hidden browser tab. Resumes after `8s` inactivity delay.
   - Disabled on mobile (`< 750px`) and reduced-motion (`prefers-reduced-motion`).

---

## 3. Updated File Artifacts

- **Liquid Section**: [`sections/stylodyna-shop-by-categories.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/stylodyna-shop-by-categories.liquid)
- **Stylesheet**: [`assets/component-stylodyna-shop-by-categories.css`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/component-stylodyna-shop-by-categories.css)
- **JavaScript Controller**: [`assets/stylodyna-shop-by-categories.js`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-shop-by-categories.js)
- **Homepage Template**: [`templates/index.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/templates/index.json)
