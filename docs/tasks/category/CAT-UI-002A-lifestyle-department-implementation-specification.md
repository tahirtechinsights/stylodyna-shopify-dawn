# TASK CAT-UI-002A — Lifestyle Department Landing Implementation Specification & Reference Governance

## Task Metadata
- **Task ID**: `CAT-UI-002A`
- **Parent Task**: `CAT-UI-002` — Lifestyle Department Landing Page
- **Domain**: `category landing / page specification / component audit / reference governance / type-A architecture`
- **Base Branch**: `develop` @ `37f6321`
- **Feature Branch**: `feature/cat-ui-002-lifestyle-department`
- **Canonical Architecture Standard**: [`docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md)
- **Approved Visual Reference**: `CAT-UI-002-LIFESTYLE-DEPARTMENT-UI` ([`docs/design-references/category/CAT-UI-002/ui/cat-ui-002-lifestyle-department-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/category/CAT-UI-002/ui/cat-ui-002-lifestyle-department-reference.png), SHA-256: `21ef105f7aa833eee9c5e4b20c1c8ae7b798ab8941a2bf1e9c12948c13609646`).
- **Reference Image Status**: `REFERENCE_IMAGE: REGISTERED`
- **Implementation Validation**: `PASS` (Architecture & Specification Complete)
- **Storefront Code Implementation**: `HOLD` (Task CAT-UI-002A is specification and governance only)

---

## 1. Executive Implementation Contract

Task `CAT-UI-002A` defines the complete implementation specification, component reuse audit, collection metafield mapping, responsive layout contracts, and recovery map for `CAT-UI-002B/C/D`.

### Reusable Type-A Department Landing Architecture
Lifestyle is the **first data instance** of StyloDyna's reusable **Type A — Department Landing** page architecture (`templates/collection.category-landing.json`). The exact same section architecture will later power `Sports & Outdoors`, `Smart Home`, and other Level 1 department hubs.

---

## 2. Locked Page Composition & Flow

```text
GLOBAL HEADER (HEADER-001)
↓
BREADCRUMB (Home / Lifestyle)
↓
LIFESTYLE HERO
↓
SHOP BY AUDIENCE (Women / Men)
↓
EXPLORE OUR CATEGORIES (Level 3 Category Rail)
↓
FEATURED LIFESTYLE (New & Noteworthy Product Grid)
↓
WHY CHOOSE OUR LIFESTYLE COLLECTION (Value Proposition Cards)
↓
OUR CLIENTS REVIEW (Testimonial Carousel)
↓
GLOBAL TRUST / SERVICE STRIP
↓
GLOBAL FOOTER
```

---

## 3. Component Reuse Audit & Classification

| UI Region | Classification | Reused Component / Source | Implementation Strategy |
| :--- | :--- | :--- | :--- |
| **Global Header** | `REUSE_EXISTING` | `HEADER-001` global header | Reused from layout theme. Zero code changes or forks. |
| **Global Footer** | `REUSE_EXISTING` | Standard Dawn global footer | Reused from layout theme. Zero code changes or forks. |
| **Trust / Service Strip** | `REUSE_EXISTING` / `EXTEND_EXISTING` | StyloDyna trust/service bar | Reused or extended section from existing homepage pattern. |
| **Lifestyle Hero** | `CREATE_NEW` | `sections/stylodyna-category-hero.liquid` | Reusable department hero section with eyebrow, H1, description, CTA, and image. |
| **Shop by Audience** | `CREATE_NEW` | `sections/stylodyna-category-children.liquid` | Reusable child navigation cards (Women / Men) powered by `custom.category_menu`. |
| **Explore Our Categories** | `EXTEND_EXISTING` | HOME-005 carousel architecture | Reuses proven interaction patterns (scroll rail, lateral side arrows, dynamic dots, swipe). |
| **Featured Lifestyle** | `REUSE_EXISTING` | `sections/stylodyna-featured-collection.liquid` | Reuses Dawn/StyloDyna product card snippet powered by `custom.category_featured_collection`. |
| **Why Choose** | `EXTEND_EXISTING` | HOME-004 benefit cards | Reuses Quiet Luxury card styling with Lifestyle-specific copy blocks. |
| **Client Reviews** | `CREATE_NEW` | `sections/stylodyna-category-reviews.liquid` | Reusable testimonial carousel component with rating, review text, avatar, descriptor, and product image. |

---

## 4. Collection Metafield Mapping (`custom.*`)

| Metafield Key | Lifestyle Value | Target Section / Purpose |
| :--- | :--- | :--- |
| `custom.category_level` | `"department"` | Identifies collection as Level 1 Department Hub. |
| `custom.category_eyebrow` | `"LIFESTYLE"` | Eyebrow subtitle above Hero heading. |
| `custom.category_heading` | `"Style for Every Part of Life"` | Main H1 heading in Lifestyle Hero. |
| `custom.category_description` | `"Curated fashion, accessories, and everyday essentials..."` | Hero description copy. |
| `custom.category_hero_image` | `lifestyle-hero.webp` | Hero background banner image. |
| `custom.category_menu` | `linklist` (`lifestyle-audience-menu`) | Powers Shop by Audience (Women / Men) cards. |
| `custom.category_featured_collection` | Collection: `new-noteworthy-lifestyle` | Powers Featured Lifestyle product grid. |
| `custom.parent_collection` | `null` | Level 1 Department root (no parent). |
| `custom.category_seo_copy` | Editorial text block | Footer SEO text block. |

---

## 5. Section Contracts & Specifications

### A. Lifestyle Hero Contract
- **Desktop Height**: `560px – 620px`.
- **Source Image Asset**: Target `2400 × 1000` px transparent/high-res WebP.
- **Content Fields**: Eyebrow, H1, description, CTA button text (`"Explore Collection"`), CTA link, image asset, focal point alignment.
- **Mobile**: Stacked text above image with controlled padding (`padding-inline: 1.6rem`).

### B. Shop by Audience (Women / Men) Contract
- **Desktop**: 2 equal-width cards (`50%` flex width).
- **Tablet**: 2 columns (`50%`).
- **Mobile**: Stacked (`100%`).
- **Interactive**: Fully clickable surface linking to `/collections/women` and `/collections/men`.

### C. Explore Our Categories (Level 3 Carousel) Contract
- **Target Items**: 8 Level 3 categories (Handbags, Accessories, Undergarments, Bags, Wallets, Belts).
- **Desktop Viewport**: `4–5` visible cards.
- **Tablet**: `3` visible cards.
- **Mobile**: `1.5–1.8` visible cards with peak preview.
- **Controls**: Lateral side arrows, dynamic pagination dots (`● ○`), native touch swipe, scroll snap, reduced-motion support.

### D. Featured Lifestyle (New & Noteworthy) Contract
- **Product Source**: Dynamic collection `custom.category_featured_collection`.
- **Product Cards**: Reuses real Shopify product cards with live titles, images, pricing, variants, and collection links. Zero hardcoded products.

### E. Why Choose Our Lifestyle Collection Contract
- **Cards (4)**: Premium Craftsmanship, Elegant & Functional Design, Eco-friendly Materials, Tailored for Every Space.
- **Content Rule**: Content must use Lifestyle-specific copy rather than furniture-only descriptions.

### F. Client Reviews Contract
- **Desktop Viewport**: 3 cards visible.
- **Fields per Card**: Star rating, review text, customer avatar, customer name, customer descriptor, contextual lifestyle product image, See All CTA link, side navigation arrows, pagination dots.

---

## 6. Typography & Styling System Reuse
- **Eyebrow**: `var(--font-body-family)`, 700 weight, `0.2rem` tracking, uppercase.
- **Heading**: `var(--font-heading-family)`, 400 weight, 1.15 line-height, `-0.01rem` tracking.
- **Body**: `var(--font-body-family)`, 1.7rem, 1.6 line-height.
- **Buttons**: StyloDyna primary/secondary button system (`4.4rem` hit area).

---

## 7. Disaster Recovery Component Map

```text
UI REGION                           → FUTURE TEMPLATE                              → FUTURE SECTION                              → DATA SOURCE                        → REFERENCE
Header                              → templates/layout/theme.liquid               → sections/header.liquid                      → Store Settings                     → HEADER-001
Breadcrumb                          → templates/collection.category-landing.json   → sections/stylodyna-category-breadcrumbs     → custom.parent_collection           → CAT-UI-001
Lifestyle Hero                      → templates/collection.category-landing.json   → sections/stylodyna-category-hero            → collection metafields              → CAT-UI-002-LIFESTYLE-DEPARTMENT-UI
Shop by Audience                    → templates/collection.category-landing.json   → sections/stylodyna-category-children        → custom.category_menu               → CAT-UI-002-LIFESTYLE-DEPARTMENT-UI
Explore Our Categories              → templates/collection.category-landing.json   → sections/stylodyna-category-carousel        → Level 3 collections / HOME-005     → HOME-005 & CAT-UI-002-UI
Featured Lifestyle (New & Noteworthy) → templates/collection.category-landing.json → sections/stylodyna-featured-collection     → custom.category_featured_collection → CAT-UI-002-LIFESTYLE-DEPARTMENT-UI
Why Choose                          → templates/collection.category-landing.json   → sections/stylodyna-category-benefits        → section blocks (Lifestyle text)    → HOME-004 & CAT-UI-002-UI
Our Clients Review                  → templates/collection.category-landing.json   → sections/stylodyna-category-reviews         → section blocks / metaobjects       → CAT-UI-002-LIFESTYLE-DEPARTMENT-UI
Trust / Service Strip               → templates/collection.category-landing.json   → sections/stylodyna-trust-strip              → section settings                   → CAT-UI-002-LIFESTYLE-DEPARTMENT-UI
Footer                              → templates/layout/theme.liquid               → sections/footer.liquid                      → Store Settings                     → Global Footer
```
