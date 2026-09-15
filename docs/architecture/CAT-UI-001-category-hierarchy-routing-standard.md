# CAT-UI-001 — CATEGORY HIERARCHY, ROUTING & REUSABLE PAGE ARCHITECTURE STANDARD

## 1. Executive Summary & Purpose
This document establishes the authoritative StyloDyna Storefront Category Architecture, Taxonomy Depth, Shopify Object Mapping, Canonical Routing, and Reusable Theme Section System. It governs all department landing pages (e.g., `Lifestyle`), audience hubs (e.g., `Women`, `Men`), and product category collection listings across the StyloDyna storefront.

---

## 2. Locked 3-Level Taxonomy Depth

To maintain clear visual hierarchy, simple URL structures, and high conversion, StyloDyna enforces a **canonical 3-level navigational taxonomy**.

```text
LEVEL 1 — Department (High-level discovery hub)
  └── LEVEL 2 — Audience / Major Category (Demographic or major segment)
        └── LEVEL 3 — Product Category (Specific merchandise collection)
```

### Level Definitions
- **LEVEL 1 — Department**: Top-tier brand departments (`Lifestyle`, `Furniture / Home`, `Sports & Outdoors`, `Smart Home`).
- **LEVEL 2 — Audience / Major Category**: Core demographic or segment groupings (`Women`, `Men`).
- **LEVEL 3 — Product Category**: Merchandised product groupings (`Women's Handbags`, `Men's Wallets`, `Men's Belts`).

### Refined Filter vs. Taxonomy Governance Rule
- **Default Storefront Filtering**: Product attributes such as `material`, `color`, `size`, `price`, `brand`, `style`, and `availability` **DEFAULT** to Shopify storefront filtering (Search & Discovery facets) on Level 3 Collection Listing pages and **MUST NOT** create deeper taxonomy levels unless a separately reviewed and approved merchandising/SEO use case justifies a curated collection.
- **Curated Merchandising Collections**: Commercially significant curated collections (e.g. *Leather Handbags*) may be created when justified by merchandising or search demand, but they do **NOT** silently become a Level 4 taxonomy. The canonical taxonomy remains strictly `Lifestyle` → `Women` → `Handbags`.

---

## 3. Authoritative Lifestyle Taxonomy

```text
Lifestyle (Department / Level 1)
├── Women (Audience / Level 2)
│   ├── Handbags (Product Category / Level 3)
│   ├── Accessories (Product Category / Level 3)
│   └── Undergarments (Product Category / Level 3)
└── Men (Audience / Level 2)
    ├── Bags (Product Category / Level 3)
    ├── Wallets (Product Category / Level 3)
    ├── Belts (Product Category / Level 3)
    ├── Accessories (Product Category / Level 3)
    └── Undergarments (Product Category / Level 3)
```

### Extensibility Contract
The 3-level taxonomy is extensible. Future Lifestyle additions (e.g., `Beauty & Personal Care`, `Travel`, `Unisex Accessories`) must fit cleanly into Level 2 or Level 3 without altering the core section architecture.

---

## 4. Separation of Concerns Architecture

StyloDyna decouples storefront categories into four independent concerns:

1. **Taxonomy**: Organizational parent/child relationship definitions.
2. **Shopify Collections**: Native commerce resources defining product membership and merchandising rules.
3. **Navigation**: Menus, breadcrumbs, and discovery links (`linklists`).
4. **Presentation**: Reusable Shopify OS 2.0 JSON templates and Liquid sections.

*No category or department is hardcoded to a dedicated single-purpose Liquid file (e.g. no `lifestyle.liquid` or `women.liquid`).*

---

## 5. Complete Collection Metafield Contract (`custom.*`)

To drive dynamic, reusable page rendering across templates without code edits, the following 9 baseline collection metafields are established:

| Metafield Key | Type | Purpose | Example |
| :--- | :--- | :--- | :--- |
| `custom.category_level` | `single_line_text_field` (Enum) | Defines semantic level (`department`, `audience`, `product_category`) | `"department"` |
| `custom.parent_collection` | `collection_reference` | Parent collection link for breadcrumbs & hierarchy traversal | Collection: `Lifestyle` |
| `custom.category_eyebrow` | `single_line_text_field` | Eyebrow subtitle text above heading | `"CURATED LIFESTYLE"` |
| `custom.category_heading` | `single_line_text_field` | Heading override for collection landing sections | `"Explore Women's Collection"` |
| `custom.category_description` | `multi_line_text_field` / `richtext` | Rich intro copy for collection hero | Rich text block |
| `custom.category_hero_image` | `file_reference` (Image) | Custom hero banner image asset | `lifestyle-hero.webp` |
| `custom.category_menu` | `link_list` | Shopify navigation menu reference for child subcategory links | Menu: `Women Categories` |
| `custom.category_featured_collection` | `collection_reference` | Featured sub-collection highlight block | Collection: `Women's Handbags` |
| `custom.category_seo_copy` | `multi_line_text_field` / `richtext` | Editorial SEO content block for collection footer | Editorial copy block |

### Metaobject Strategy
Metaobjects are reserved **ONLY** for multi-field structured records, such as `category_promo_card`, `editorial_content_module`, or `buying_guide`. Single values must use Collection Metafields to avoid unnecessary schema complexity.

---

## 6. Canonical Routing & Breadcrumb Standard

### Simple Native Shopify URLs
Canonical Shopify collection handles remain simple and flat:
- Department: `/collections/lifestyle`
- Audience: `/collections/women`, `/collections/men`
- Product Category: `/collections/womens-handbags`, `/collections/mens-wallets`

*Pseudo-nested paths (e.g. `/collections/lifestyle/women/handbags`) are strictly prohibited.*

### Dynamic Breadcrumb Hierarchy
Breadcrumbs derive dynamically from `custom.parent_collection` references:
- **Department**: `Home / Lifestyle`
- **Audience**: `Home / Lifestyle / Women`
- **Product Category**: `Home / Lifestyle / Women / Handbags`

---

## 7. Reusable OS 2.0 Theme Presentation Architecture

StyloDyna establishes **THREE** reusable page presentation modes powered by modular JSON templates:

### TYPE A — Department Landing (`templates/collection.category-landing.json`)
- **Target**: Level 1 Departments (e.g. `Lifestyle`).
- **Layout Flow**:
  1. `stylodyna-category-hero` (Department banner & eyebrow)
  2. `stylodyna-category-children` (Audience Hub cards: Women / Men)
  3. `stylodyna-category-featured-products` (New Arrivals / Bestsellers grid)
  4. `stylodyna-category-editorial` (Lifestyle brand story & imagery)
  5. `stylodyna-category-benefits` (Why Choose StyloDyna value propositions)
  6. `stylodyna-category-social-proof` (Customer reviews & social highlights)

### TYPE B — Subcategory Landing (`templates/collection.category-sublanding.json`)
- **Target**: Level 2 Audience Hubs (e.g. `Women`, `Men`).
- **Layout Flow**:
  1. `stylodyna-category-hero`
  2. `stylodyna-category-children` (Child category cards: Handbags, Accessories, Undergarments)
  3. `stylodyna-category-featured-products`
  4. `stylodyna-category-editorial`

### TYPE C — Product Listing Collection (`templates/collection.category-listing.json`)
- **Target**: Level 3 Product Categories (e.g. `Women's Handbags`).
- **Layout Flow**:
  1. `stylodyna-category-breadcrumbs`
  2. `stylodyna-category-header` (Heading, count, description)
  3. `stylodyna-category-product-grid` (Storefront filtering + sorting + product cards)
  4. `stylodyna-category-seo-footer` (Bottom SEO content block)

---

## 8. Integration with HOME-005
Category cards in the **HOME-005 Shop by Categories** carousel (e.g. `Lifestyle`, `Sports & Outdoors`, `Smart Home`) serve as direct entry links to **TYPE A Department Landing** pages (`/collections/lifestyle`).
