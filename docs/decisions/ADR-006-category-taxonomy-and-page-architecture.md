# ADR-006: Category Taxonomy, Canonical Routing & Reusable Page Architecture Standard

## Status
**ACCEPTED**

## Context
StyloDyna is expanding storefront catalog navigation beyond homepage sections into structured department hubs (e.g. `Lifestyle`), audience landing hubs (e.g. `Women`, `Men`), and product category collections. Without a unified architectural standard, storefront categories risk fragmented Liquid templates, unmaintainable nested URLs, inconsistent breadcrumbs, and confusing filter structures.

## Decisions

1. **Canonical 3-Level Taxonomy Depth**:
   - Level 1: Department (`Lifestyle`, `Furniture / Home`, `Sports & Outdoors`, `Smart Home`)
   - Level 2: Audience / Major Category (`Women`, `Men`)
   - Level 3: Product Category (`Handbags`, `Wallets`, `Belts`)

2. **Refined Filter vs. Taxonomy Governance**:
   - Product attributes (material, color, size, price, brand, style, availability) **DEFAULT** to Shopify storefront filtering.
   - Product attributes **MUST NOT** create deeper taxonomy levels unless a separately reviewed and approved merchandising/SEO use case justifies a curated collection (e.g. *Leather Handbags*). Such merchandising collections do not silently become Level 4 taxonomy.

3. **Native Canonical Shopify URLs**:
   - Collection handles remain simple flat paths: `/collections/<handle>` (e.g. `/collections/lifestyle`, `/collections/womens-handbags`).
   - Hierarchical context is conveyed via navigation menus, dynamic breadcrumbs, and parent collection metafield references.

4. **Separation of Concerns & Reusable OS 2.0 JSON Templates**:
   - Decouple taxonomy, Shopify collection resources, navigation menus, and presentation templates.
   - Establish 3 reusable OS 2.0 collection presentation modes:
     - `templates/collection.category-landing.json` (Type A: Department)
     - `templates/collection.category-sublanding.json` (Type B: Audience Hub)
     - `templates/collection.category-listing.json` (Type C: Product Listing)

5. **Dynamic Metadata via Complete 9-Field Collection Metafield Contract**:
   - Use `custom.category_level`, `custom.parent_collection`, `custom.category_eyebrow`, `custom.category_heading`, `custom.category_description`, `custom.category_hero_image`, `custom.category_menu`, `custom.category_featured_collection`, and `custom.category_seo_copy` to power dynamic section content without template duplication.

## Consequences
- Clean, maintainable codebase without single-use Liquid files (`lifestyle.liquid`, `women.liquid`).
- Consistent SEO structure with single canonical collection handles.
- Merchants can configure department & category hubs via Theme Editor and metafields without developer intervention.
