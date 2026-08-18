# TASK CAT-UI-001 — Category Hierarchy, Routing & Reusable Page Architecture Standard

## Task Metadata
- **Task ID**: `CAT-UI-001`
- **Parent Task**: `Category & Department Landing Page System`
- **Domain**: `architecture / taxonomy / routing / collection metadata / theme architecture`
- **Base Branch**: `develop` @ `c61becd`
- **Feature Branch**: `feature/cat-ui-001-category-architecture`
- **Canonical Architecture Standard**: [`docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md)
- **Architecture Decision Record**: [`docs/decisions/ADR-006-category-taxonomy-and-page-architecture.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/decisions/ADR-006-category-taxonomy-and-page-architecture.md)
- **Closure Record**: [`docs/tasks/category/CAT-UI-001-CLOSURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/tasks/category/CAT-UI-001-CLOSURE.md)
- **Implementation Validation**: `PASS` (Architecture & Specification Complete)
- **Human Visual Acceptance**: `PASS`

---

## 1. Executive Summary

Task `CAT-UI-001` establishes the authoritative storefront category taxonomy, routing standard, Shopify object mapping, complete 9-field metafield contract, and reusable OS 2.0 theme section architecture for StyloDyna.

### Key Architectural Specifications
1. **Taxonomy Depth**: Maximum 3 levels (Department → Audience/Major Category → Product Category). Attributes (material, color, size, price) default to Storefront Filtering unless a curated collection is approved.
2. **Authoritative Lifestyle Hierarchy**:
   - `Lifestyle` (Level 1 Department)
     - `Women` (Level 2 Audience) → `Handbags`, `Accessories`, `Undergarments` (Level 3 Categories)
     - `Men` (Level 2 Audience) → `Bags`, `Wallets`, `Belts`, `Accessories`, `Undergarments` (Level 3 Categories)
3. **Shopify Object Mapping & Metafield Contract**:
   - Native Shopify Collections (`/collections/<handle>`)
   - 9 Baseline Collection Metafields (`custom.category_level`, `custom.parent_collection`, `custom.category_eyebrow`, `custom.category_heading`, `custom.category_description`, `custom.category_hero_image`, `custom.category_menu`, `custom.category_featured_collection`, `custom.category_seo_copy`)
   - Metaobjects (Multi-field structured promo cards / buying guides)
4. **Presentation Modes**:
   - Type A: Department Landing (`templates/collection.category-landing.json`)
   - Type B: Subcategory Landing (`templates/collection.category-sublanding.json`)
   - Type C: Product Listing Collection (`templates/collection.category-listing.json`)
5. **HOME-005 Integration**: HOME-005 carousel cards (`Lifestyle`) link directly to Level 1 Department Landing pages (`/collections/lifestyle`).

---

## 2. Updated File Manifest

- **Canonical Architecture Document**: [`docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md)
- **Architecture Decision Record**: [`docs/decisions/ADR-006-category-taxonomy-and-page-architecture.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/decisions/ADR-006-category-taxonomy-and-page-architecture.md)
- **Task Record**: [`docs/tasks/category/CAT-UI-001-category-hierarchy-routing-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/tasks/category/CAT-UI-001-category-hierarchy-routing-standard.md)
- **Closure Record**: [`docs/tasks/category/CAT-UI-001-CLOSURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/tasks/category/CAT-UI-001-CLOSURE.md)
- **Master Index**: [`docs/00_MASTER_INDEX.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/00_MASTER_INDEX.md)
