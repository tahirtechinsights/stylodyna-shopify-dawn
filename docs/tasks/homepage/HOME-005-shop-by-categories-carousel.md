# TASK HOME-005 — Shop by Categories Carousel & Rail Experience

## Task Metadata
- **Task ID**: `HOME-005`
- **Sub-Tasks**:
  - `HOME-005A`: Category Asset Governance & Production Preparation (**COMPLETE**)
  - `HOME-005A1`: Production Category Asset Canvas Normalization (**COMPLETE**)
  - `HOME-005B`: Section Architecture & Component Implementation (**COMPLETE**)
  - `HOME-005C`: Visual Conformance & Responsive Refinement (**COMPLETE**)
  - `HOME-005D`: Carousel UX & Approved Visual Reference Conformance (**COMPLETE**)
  - `HOME-005E`: 9-Category Expansion & Final Carousel Activation (**COMPLETE**)
  - `HOME-005F`: Final Visual QA & Carousel Polish (**COMPLETE**)
  - `HOME-005G`: Mobile Visual Conformance & Final Acceptance (**COMPLETE**)
  - `HOME-005H`: Final Closure, Documentation, Commit & Develop Merge (**COMPLETE**)
- **Domain**: `homepage / category carousel / shopify section / responsive rail`
- **Base Branch**: `develop` @ `a7ec7ef`
- **Feature Branch**: `feature/home-005-shop-by-categories`
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**100% PASS** across all 21 registered assets).
- **Implementation Validation**: `PASS`
- **Human Visual Acceptance**: `PASS`

---

## 1. Human Operator Intent & Technical Requirements

1. **Homepage Position**:
   Section must be positioned immediately after the complete Hero section (`HERO` -> `SHOP BY CATEGORIES` -> `NEXT SECTION`).

2. **Visual & Aesthetic Contract**:
   - High-end, premium "Shop by Categories" experience reflecting StyloDyna's luxury furniture positioning.
   - Initial 6 Product Categories: `Sofa`, `Chair`, `Bed`, `Dining Table`, `Table`, `Lamp`.
   - Transparent product imagery displaying luxury furniture silhouettes over clean card backgrounds.
   - Zero compromise on visual standards, safe zones, lighting, or material realism.

3. **Merchant-Configurable Architecture**:
   - Fully dynamic Shopify section (`sections/stylodyna-shop-by-categories.liquid`) with block settings (`category_title`, `collection`, `custom_image`, `accessible_label`).
   - Architecture must remain extensible to support any number of categories (not hardcoded to 6).

4. **Responsive UX Contract (Native CSS Rail)**:
   - **Desktop (`>= 1200px`)**: `~5–6` visible category cards.
   - **Tablet (`768px – 1199px`)**: `~3–4` visible category cards.
   - **Mobile (`< 768px`)**: `~1.8–2.3` visible category cards with peak preview of adjacent card.
   - Built with native CSS horizontal scrolling, `scroll-snap-type: x mandatory`, touch swipe, keyboard navigation, and desktop arrow controls. No third-party heavy JavaScript packages.

---

## 2. Master & Production Asset Pipeline (HOME-005A1 Normalized)

| Category | Master Source Asset (PNG) | Optimized Storefront Asset (WebP) | Master Canvas | WebP Canvas | WebP File Size |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sofa** | `source-assets/sd-category-sofa.png` | [`assets/sd-category-sofa.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-sofa.webp) | `1254 × 1254` | `1254 × 1254` | `125,648` bytes |
| **Chair** | `source-assets/sd-category-chair.png` | [`assets/sd-category-chair.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-chair.webp) | `1254 × 1254` | `1254 × 1254` | `169,126` bytes |
| **Bed** | `source-assets/sd-category-bed.png` | [`assets/sd-category-bed.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-bed.webp) | `1536 × 1024` | `1254 × 1254` | `125,032` bytes |
| **Dining Table** | `source-assets/sd-category-dining-table.png` | [`assets/sd-category-dining-table.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-dining-table.webp) | `1536 × 1024` | `1254 × 1254` | `132,480` bytes |
| **Table** | `source-assets/sd-category-table.png` | [`assets/sd-category-table.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-table.webp) | `1536 × 1024` | `1254 × 1254` | `94,258` bytes |
| **Lamp** | `source-assets/sd-category-lamp.png` | [`assets/sd-category-lamp.webp`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/sd-category-lamp.webp) | `1285 × 1224` | `1254 × 1254` | `122,610` bytes |

---

## 3. Planned Storefront Architecture (Document Only)

- Section File: `sections/stylodyna-shop-by-categories.liquid`
- Stylesheet: `assets/component-stylodyna-shop-by-categories.css`
- JavaScript: `assets/stylodyna-shop-by-categories.js` (Optional native scroll controller for accessibility arrows)
