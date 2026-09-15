# TASK CAT-UI-002I — Real Commerce Data Integration Record

## Task Metadata
- **Task ID**: `CAT-UI-002I`
- **Parent Task**: `CAT-UI-002` — Lifestyle Department Landing Page
- **Domain**: `real commerce integration / Shopify product object rendering / Dawn card-product integration`
- **Base Branch**: `develop` @ `37f6321`
- **Feature Branch**: `feature/cat-ui-002-lifestyle-department`
- **Canonical Architecture Standard**: [`docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/CAT-UI-001-category-hierarchy-routing-standard.md)
- **Authoritative Commercial Product**:
  - **PCS Concept**: `HB-01`
  - **PIM Product ID**: `SD-PROD-000031`
  - **Canonical PIM Name**: `Structured Everyday Tote`
  - **Shopify Title**: `Mokobara The Easy Going Tote — Coconut Cream`
  - **Shopify Product GID**: `gid://shopify/Product/8063306563667`
  - **Shopify Handle**: `structured-everyday-tote`
  - **Public Product Route**: `/products/structured-everyday-tote`
  - **Status**: `ACTIVE / COMMERCE_READY: TRUE / Published`
  - **Vendor**: `MOKOBARA`
  - **Price**: `PKR 36,400`
  - **Compare-At Price**: `PKR 52,000`
  - **Inventory**: `6`
- **Authoritative Shopify Collection**: `Lifestyle` (`gid://shopify/Collection/315932082259`, handle: `lifestyle`)
- **Reference Integrity Baseline**: `36/36 PASS`
- **Human Visual Acceptance Gate**: `PENDING`

---

## 1. Executive Real Commerce Integration Summary

Task `CAT-UI-002I` transitions the `FEATURED LIFESTYLE / New & Noteworthy` section from mock/fallback data to real Shopify commerce data. The storefront section now natively consumes the `lifestyle` Shopify collection object (`collection.products` / `section.settings.collection`), rendering the authoritative `SD-PROD-000031` commercial product (*Mokobara The Easy Going Tote — Coconut Cream*) using Dawn's native `card-product` component.

### Real Commerce Product Visual Verification

| Product Attribute | Value / Source | Storefront Verification |
| :--- | :--- | :--- |
| **Product Title** | `Mokobara The Easy Going Tote — Coconut Cream` | Shopify native `product.title` |
| **Product URL** | `/products/structured-everyday-tote` | Shopify native `product.url` |
| **Vendor** | `MOKOBARA` | Shopify native `product.vendor` |
| **Primary Media** | `sd-prod-000031-primary-01.webp` | Shopify-hosted product image object |
| **Selling Price** | `PKR 36,400` | Native Shopify `price` snippet formatting |
| **Compare-At Price** | `PKR 52,000` | Native Shopify `price` compare-at formatting |
| **Sale Badge** | `Sale` | Native Dawn `card-product` sale badge |
| **Availability** | `Available / In Stock` (Inventory: 6) | `product.available` evaluates `true` |

---

## 2. Technical Findings & Audits

### 1. Sold Out Badge QA Audit
- **Investigation**: Evaluated why prior automated crawler logs noted "Sold out" string in DOM output.
- **Root Cause**: `snippets/card-product.liquid` and Dawn forms render accessibility DOM elements (`<span class="sold-out-message hidden">`) for JS dynamic state switching and screen readers.
- **Visual State**: `SD-PROD-000031` has inventory = 6 and `product.available = true`. The card visually displays **In Stock** with a prominent **Sale** badge (PKR 36,400 vs PKR 52,000).

### 2. Navigation Resource Gaps (`CAT_UI_002_NAVIGATION_RESOURCE_GAP`)
- **Audit**: Inspected collections for `Women`, `Handbags`, `Men`, etc.
- **Result**: Currently, only `Lifestyle` (`gid://shopify/Collection/315932082259`) exists as a provisioned Shopify backend collection.
- **Action**: Recorded `CAT_UI_002_NAVIGATION_RESOURCE_GAP`. Frontend visual cards preserve taxonomy navigation design without fabricating unverified backend collection endpoints.

### 3. Review Product Visual Audit (`TRANSPARENT_HB01_ASSET_REQUIRED`)
- **Audit**: Checked if transparent cutout asset exists for `HB-01`.
- **Result**: Currently no DAM-approved transparent cutout derivative of `HB-01` exists.
- **Action**: Recorded `TRANSPARENT_HB01_ASSET_REQUIRED: YES`. Preserved existing approved CAT-UI-002H review cards (`sd-lifestyle-womens-handbags.webp` category visual) to prevent unapproved product imagery generation outside DAM governance.

---

## 3. Technical Validation Summary

- **Theme Check**: `PASS`
- **Git Diff Check**: `PASS` (`git diff --check` = 0 errors)
- **Reference Integrity**: `36/36 PASS` (Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1))
- **Document Horizontal Overflow**: `0`
- **PCS / PIM Modifications**: `NONE`
- **Shopify Resource Creation**: `NONE`
- **Human Visual Acceptance**: `PENDING`

---

## 4. Remediation Note: CAT-UI-002I1 — Shopify Section Schema Validation Fix

- **Issue**: Theme upload error during preview: `sections/stylodyna-featured-collections.liquid: Invalid schema: name is too long (max 25 characters)`.
- **Original Schema Name**: `"Featured Collections & Grid"` (28 characters).
- **Corrected Schema Name**: `"Featured Lifestyle"` (18 characters).
- **Corrected Preset Name**: `"Featured Lifestyle"` (18 characters).
- **Section Filename / Type**: Preserved `sections/stylodyna-featured-collections.liquid` and `type: "stylodyna-featured-collections"` without renaming.
- **Audit of Other CAT-UI-002 Schemas**: Checked all 7 section schemas; all remain within Shopify's 25-character constraint.
- **Validation**: Upload error resolved; `shopify theme check` and `verify_design_references.ps1` (36/36 PASS) verified.

