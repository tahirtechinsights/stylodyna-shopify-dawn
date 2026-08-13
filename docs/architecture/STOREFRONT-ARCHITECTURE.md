# StyloDyna Storefront Architecture

## High-Level Data & Rendering Flow

```
Product Information Management (PIM / ERP / Upstream System)
    │
    ▼ (Catalog Sync & API Management)
Shopify Backend (Platform Engine & Store Admin)
    │
    ▼ (Canonical Shopify Product / Collection / Metafield Data)
Liquid Theme Engine (Online Store 2.0 Dynamic Rendering)
    │
    ▼ (Modular Component Architecture)
Sections (`sections/stylodyna-*.liquid`)
    │
    ▼ (Reusable Sub-components & Helpers)
Snippets (`snippets/*.liquid`)
    │
    ▼ (Tokenized Styling System)
Design Tokens & Modular CSS (`assets/*.css`)
    │
    ▼ (Fluid Layout & Responsive Breakpoints)
Responsive Storefront (Desktop, Tablet, Mobile)
    │
    ▼
Customer Experience (Editorial Commerce Interface)
```

## Architectural Principles

### 1. Separation of Catalog Authority (PIM vs. Storefront)
- **Upstream PIM Authority**: Product Information Management (PIM), ERP, or inventory management systems remain the authoritative upstream system of record for product catalogs, SKU definitions, pricing, inventory levels, and core specifications.
- **Shopify Platform Data**: Shopify Admin acts as the operational commerce engine, hosting canonical product, collection, customer, order, and metafield objects.
- **Theme Standard**: The StyloDyna Liquid theme is strictly a **presentation and customer interaction layer**. The theme must **NOT** become the product information system of record. Hardcoded product details, manual spec sheets inside section settings, or non-canonical product data structures within section schemas are prohibited.

### 2. Shopify Online Store 2.0 Standards
- **JSON Templates**: All page templates (`templates/*.json`) utilize Online Store 2.0 JSON structures enabling merchants to dynamically reorder, add, and configure sections without code modifications.
- **Section Scoping**: Each section is self-contained with its dedicated Liquid template in `sections/` and a corresponding modular CSS file in `assets/`.
- **Merchant Editor Configuration**: Every visual component exposes structured settings, blocks, presets, and sensible defaults within the section `{% schema %}`.

### 4. Design References Framework
- Frontend design tasks may incorporate visual inspiration assets stored in `docs/design-references/<domain>/<TASK-ID>/`.
- Each reference directory contains visual image artifacts, a `README.md` adaptation matrix documenting elements to adopt, elements not to copy, and StyloDyna-specific design system mappings.
- Reference images are strictly development documentation and must **NEVER** be committed to Shopify production `/assets`.

### 5. Modular Styling & Performance Pipeline
- Design tokens (`--stylo-warm-ivory`, `--stylo-charcoal`, `--stylo-brass`, etc.) are centralized in root stylesheets and section tokens.
- Native Liquid filters (`image_tag`, `image_url`, `asset_url`) are leveraged to output optimized, responsive WebP image markup with `srcset` and lazy loading below the fold.
- JavaScript is strictly minimized to essential interactive features (e.g. hero carousel rotation, mobile menu toggles, drawer state management) without external dependencies.
