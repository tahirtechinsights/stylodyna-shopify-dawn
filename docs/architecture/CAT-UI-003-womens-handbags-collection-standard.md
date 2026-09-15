# CAT-UI-003 — Women's Handbags Collection Experience Standard (Type-C Product Listing Architecture)

## Document Metadata
- **Specification ID**: `CAT-UI-003`
- **Parent Standard**: `CAT-UI-001` — Category Hierarchy, Routing & Reusable Page Architecture Standard
- **Prerequisite Implementations**: `CAT-UI-002` — Lifestyle Department Landing Page (Completed)
- **Domain**: `Category Architecture / Product Listing Collection (Type C) / Women's Handbags UX / Shopify Data Contract`
- **Governance Branch**: `feature/cat-ui-003-womens-handbags`
- **Status**: `ARCHITECTURE_LOCKED / IMPLEMENTATION_HOLD`

---

## 1. Canonical Taxonomy & Navigation Boundary

The Women's Handbags collection belongs strictly to Level 3 of the governed 3-tier StyloDyna commercial taxonomy established via PCS/PIM audit and ADR-006:

```text
StyloDyna Taxonomy Architecture:
Level 1: Lifestyle (Department Landing — Type A)
 └── Level 2: Women (Audience Landing — Type B)
      └── Level 3: Handbags (Product Listing Collection — Type C)
           └── Attribute / Filter: Tote (Product / Bag Type)
```

### Governance Rules:
1. **Canonical Category Name**: `Handbags` (Display Title: `Women's Handbags`).
2. **Forbidden Renaming**: The canonical Level 3 category MUST NOT be renamed to "Women's Bags" or "Bags" in data schemas or backend routing.
3. **Bag Type Classification**: "Tote" is a bag type attribute / product type facet, NOT a fourth navigation taxonomy level node.

---

## 2. Page Type Classification & Purpose

According to the CAT-UI-001 Page Architecture Matrix:

- **PAGE_LEVEL**: `Level 3`
- **PAGE_TYPE**: `Type C — Product Listing Collection`
- **PRIMARY PURPOSE**: Direct commercial product discovery, attribute filtering, sorting, and high-density purchase conversion.

Unlike Level 1 Department Landings (`Type A`, editorial & broad navigation focus) or Level 2 Audience Landings (`Type B`, audience-curated showcase focus), a Level 3 Listing Collection (`Type C`) prioritizes **commerce density**, **filter efficiency**, and **fast path to PDP/Cart**.

---

## 3. Real Commercial Product Context

The primary validation product for the Women's Handbags collection is the first live commercial SKU in the StyloDyna catalog:

- **PIM ID**: `SD-PROD-000031`
- **PCS Code**: `HB-01`
- **Canonical PIM Name**: `Structured Everyday Tote`
- **Shopify Product Title**: `Mokobara The Easy Going Tote — Coconut Cream`
- **Shopify Handle**: `structured-everyday-tote`
- **Commercial Price**: `PKR 36,400` (Compare at `PKR 52,000`)
- **Stock Status**: `AVAILABLE / IN_STOCK`
- **PIM Category Mapping**: `Lifestyle` → `Women` → `Handbags`

---

## 4. Shopify Resource Gap & Provisioning Requirement

Current backend state in Shopify:

| Collection Name | Conceptual Handle | Current Backend Status | Action Required |
| :--- | :--- | :--- | :--- |
| **Lifestyle** | `lifestyle` | `EXISTS` | Baseline department parent |
| **Women** | `women` | `NOT YET PROVISIONED` | `TARGET_RESOURCE_REQUIRED` (Provision before CAT-UI-003 Liquid deployment) |
| **Women's Handbags** | `womens-handbags` | `NOT YET PROVISIONED` | `TARGET_RESOURCE_REQUIRED` (Provision before CAT-UI-003 Liquid deployment) |

---

## 5. User Journey & Routing Architecture

### End-to-End User Journey:
```text
Home (/)
 └── Lifestyle Department (/collections/lifestyle)
      └── Women Audience (/collections/women)
           └── Women's Handbags Listing (/collections/womens-handbags)
                └── Product Type Filter: Tote (?filter.p.m.custom.bag_type=Tote)
                     └── Product Detail Page (/products/structured-everyday-tote)
                          └── Cart / Direct Checkout
```

### Routing Rules (Preserving CAT-UI-001 Flat Routing):
- **Approved Flat Routes**:
  - `/collections/lifestyle` (`EXISTS`)
  - `/collections/women` (`TARGET_RESOURCE_REQUIRED`)
  - `/collections/womens-handbags` (`TARGET_RESOURCE_REQUIRED`)
  - `/products/structured-everyday-tote` (`EXISTS`)
- **Forbidden Nested Routes**: DO NOT create pseudo nested paths such as `/collections/lifestyle/women/handbags`.

---

## 6. Information Architecture (IA) & Page Rhythm

```text
┌────────────────────────────────────────────────────────┐
│ GLOBAL HEADER (HEADER-001)                             │
├────────────────────────────────────────────────────────┤
│ BREADCRUMBS: Home / Lifestyle / Women / Handbags      │
├────────────────────────────────────────────────────────┤
│ COMPACT COLLECTION HERO                                │
│   - Eyebrow: WOMEN'S LIFESTYLE                         │
│   - H1: Women's Handbags                               │
│   - Short Merchandising Description                    │
├────────────────────────────────────────────────────────┤
│ PRODUCT TYPE / SUBCATEGORY DISCOVERY CHIPS            │
│   [ All Handbags ]  [ Totes (1) ]  [ Crossbody ] ...   │
├────────────────────────────────────────────────────────┤
│ COLLECTION TOOLBAR                                     │
│   [ Filter Button (1) ]  1 Product  [ Sort: Featured ▾ ]│
├────────────────────────────────────────────────────────┤
│ PRODUCT GRID (Type-C Listing Density)                 │
│   - Desktop: 4 Columns | Tablet: 2-3 | Mobile: 1-2     │
│   - Real Product: Mokobara The Easy Going Tote         │
├────────────────────────────────────────────────────────┤
│ EDITORIAL MERCHANDISING BLOCK (Optional)              │
├────────────────────────────────────────────────────────┤
│ SEO & BUYING GUIDANCE SECTION                          │
├────────────────────────────────────────────────────────┤
│ TRUST & SERVICE TICKER (Continuous Loop Marquee)       │
├────────────────────────────────────────────────────────┤
│ GLOBAL FOOTER                                          │
└────────────────────────────────────────────────────────┘
```

---

## 7. Component Specifications

### 7.1 Compact Collection Hero
- **Height Target**: Max 180–220px desktop visual footprint (substantially more compact than CAT-UI-002 Department Hero).
- **Background**: Soft ivory `#FAF9F5` or dark charcoal `#1F1F1F` depending on section context, with subtle gold accent line (`#C7A24A`).
- **Content**:
  - Breadcrumb: `Home / Lifestyle / Women / Handbags`
  - Eyebrow: `WOMEN'S LIFESTYLE`
  - H1: `Women's Handbags`
  - Description: Max 2 lines of concise merchandising copy.

### 7.2 Subcategory / Product Type Discovery Layer
- **UI Format**: Horizontal scrolling pills/chips directly above toolbar.
- **Types Supported**: *Totes*, *Shoulder Bags*, *Crossbody Bags*, *Clutches*, *Satchels*.
- **Current Launch State**: *Totes* is the active product type (`SD-PROD-000031`).
- **Graceful Behavior**: Chips for unprovisioned bag types remain in neutral non-empty state or act as search facets rather than broken links.

### 7.3 Toolbar, Filter & Sort Architecture
- **Toolbar**: Flex layout containing Filter Trigger button (with active count badge), total product count announcement, and native sort dropdown.
- **Filter Engine**: Uses Shopify Search & Discovery native filter drawer/facets (`filter.v.option.*`, `filter.p.m.custom.*`).
  - *Availability*: In Stock / Out of Stock
  - *Price*: Min / Max range slider
  - *Material*: Leather, Canvas, Synthetic
  - *Bag Type*: Tote, Crossbody, etc.
- **Sort Engine**: Native Shopify collection sorting (`featured`, `best-selling`, `title-ascending`, `price-ascending`, `price-descending`, `created-descending`).

### 7.4 Product Grid & Card Density
- **Columns**:
  - Desktop (>=1280px): **4 Columns**
  - Medium Desktop / Tablet (990px-1279px): **3 Columns**
  - Tablet (750px-989px): **2 Columns**
  - Mobile (<750px): **2 Columns** (compact layout) or **1 Column**
- **Product Card Contract**: Uses standard [`snippets/card-product.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/snippets/card-product.liquid), displaying title, vendor, primary image, secondary hover crossfade image, price, compare-at price, and stock badge.

### 7.5 One-Product State Preservation
- When the collection contains only 1 product (`SD-PROD-000031`), the layout maintains the standard Type-C product listing grid without converting into an editorial single-product showcase.
- Grid handles 1 product elegantly aligned to the left of the 4-column desktop layout.

---

## 8. Collection Metafield Contract (`custom.*`)

| Metafield Key | Type | Requirement Level | Purpose |
| :--- | :--- | :--- | :--- |
| `custom.category_level` | `integer` | `REQUIRED` | Value `3` for listing collections |
| `custom.parent_collection` | `collection_reference` | `REQUIRED` | Points to `Women` collection (`women`) |
| `custom.category_eyebrow` | `single_line_text_field` | `OPTIONAL` | `WOMEN'S LIFESTYLE` |
| `custom.category_heading` | `single_line_text_field` | `OPTIONAL` | `Women's Handbags` |
| `custom.category_description` | `multi_line_text_field` | `OPTIONAL` | Short merchandising summary |
| `custom.category_hero_image` | `file_reference` | `OPTIONAL` | Banner image reference |
| `custom.category_seo_copy` | `richtext` | `OPTIONAL` | Bottom buying guide / SEO copy |

---

## 9. Performance & Accessibility Contracts

- **Performance**:
  - Native Liquid collection rendering (`{% paginate collection.products by 16 %}`).
  - Image srcset using Shopify `image_url` with explicit aspect ratio preservation.
  - Zero external carousel JS dependencies for grid.
- **Accessibility**:
  - Semantic `nav` element for breadcrumbs (`aria-label="Breadcrumb"`).
  - Screen reader announcements for filter apply/clear actions (`aria-live="polite"`).
  - Keyboard accessible filter drawer with focus trap.
  - Minimum touch target 44x44px for filters and sort dropdown.
