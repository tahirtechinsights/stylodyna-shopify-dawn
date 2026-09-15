# STYLODYNA DECOR DEPARTMENT CANONICAL TAXONOMY SPECIFICATION

- **STATUS**: CANONICAL / SOURCE OF TRUTH
- **GOVERNANCE SCOPE**: StyloDyna Decor Department Taxonomy
- **AUTHORITY**: This hierarchy governs PIM classification, Shopify collection hierarchy, storefront discovery architecture, breadcrumb routing, and navigation mapping.

> [!IMPORTANT]
> **Canonical Taxonomy vs. Runtime Provisioning**: This document defines the canonical source of truth for the entire Decor department taxonomy (**45 Total Nodes**). It does **NOT** imply that every taxonomy node is currently provisioned in Shopify, populated with products, or exposed on the storefront. Unprovisioned nodes remain non-exposed on storefront discovery surfaces until formally provisioned in `PIM-DECOR-011D-A+`.

---

## 1. CANONICAL HIERARCHY TREE

```text
Decor (L1) [PROVISIONED / EXPOSED]
├── Decorative Models (L2) [PROVISIONED / PARTIAL BRANCH EXPOSED]
│   ├── Maritime Models (L3) [PROVISIONED / EXPOSED]
│   │   └── Ship Models (L4) [PROVISIONED / EXPOSED]
│   │
│   ├── Aviation Models (L3) [UNPROVISIONED]
│   │   └── Aircraft Models (L4) [UNPROVISIONED]
│   │
│   ├── Automotive Models (L3) [UNPROVISIONED]
│   │   ├── Car Models (L4) [UNPROVISIONED]
│   │   └── Motorcycle Models (L4) [UNPROVISIONED]
│   │
│   └── Spaceflight Models (L3) [UNPROVISIONED]
│       ├── Rocket Models (L4) [UNPROVISIONED]
│       └── Spacecraft Models (L4) [UNPROVISIONED]
│
├── Decorative Objects (L2) [UNPROVISIONED]
│   ├── Sculptures (L3) [UNPROVISIONED]
│   ├── Figurines (L3) [UNPROVISIONED]
│   ├── Decorative Bowls (L3) [UNPROVISIONED]
│   ├── Decorative Trays (L3) [UNPROVISIONED]
│   └── Ornaments (L3) [UNPROVISIONED]
│
├── Vases & Planters (L2) [UNPROVISIONED]
│   ├── Vases (L3) [UNPROVISIONED]
│   ├── Planters (L3) [UNPROVISIONED]
│   └── Decorative Pots (L3) [UNPROVISIONED]
│
├── Wall Decor (L2) [UNPROVISIONED]
│   ├── Wall Art (L3) [UNPROVISIONED]
│   ├── Wall Sculptures (L3) [UNPROVISIONED]
│   ├── Mirrors (L3) [UNPROVISIONED]
│   └── Wall Clocks (L3) [UNPROVISIONED]
│
├── Tabletop Decor (L2) [UNPROVISIONED]
│   ├── Centerpieces (L3) [UNPROVISIONED]
│   ├── Candle Holders (L3) [UNPROVISIONED]
│   ├── Bookends (L3) [UNPROVISIONED]
│   ├── Decorative Boxes (L3) [UNPROVISIONED]
│   └── Desk Decor (L3) [UNPROVISIONED]
│
├── Lighting Decor (L2) [UNPROVISIONED]
│   ├── Decorative Lamps (L3) [UNPROVISIONED]
│   ├── Lanterns (L3) [UNPROVISIONED]
│   └── Ambient Lights (L3) [UNPROVISIONED]
│
├── Textiles & Soft Decor (L2) [UNPROVISIONED]
│   ├── Cushions (L3) [UNPROVISIONED]
│   ├── Throws (L3) [UNPROVISIONED]
│   └── Decorative Fabrics (L3) [UNPROVISIONED]
│
└── Seasonal & Occasion Decor (L2) [UNPROVISIONED]
    ├── Festive Decor (L3) [UNPROVISIONED]
    ├── Giftable Decor (L3) [UNPROVISIONED]
    └── Event Decor (L3) [UNPROVISIONED]
```

---

## 2. SYSTEMATIC TAXONOMY NODE ARITHMETIC

- **L1 Department**: `1` node (`Decor`)
- **L2 Primary Decor Families**: `8` nodes
- **L3 Categories**: `30` nodes:
  - `Decorative Models` = 4 (`Maritime Models`, `Aviation Models`, `Automotive Models`, `Spaceflight Models`)
  - `Decorative Objects` = 5 (`Sculptures`, `Figurines`, `Decorative Bowls`, `Decorative Trays`, `Ornaments`)
  - `Vases & Planters` = 3 (`Vases`, `Planters`, `Decorative Pots`)
  - `Wall Decor` = 4 (`Wall Art`, `Wall Sculptures`, `Mirrors`, `Wall Clocks`)
  - `Tabletop Decor` = 5 (`Centerpieces`, `Candle Holders`, `Bookends`, `Decorative Boxes`, `Desk Decor`)
  - `Lighting Decor` = 3 (`Decorative Lamps`, `Lanterns`, `Ambient Lights`)
  - `Textiles & Soft Decor` = 3 (`Cushions`, `Throws`, `Decorative Fabrics`)
  - `Seasonal & Occasion Decor` = 3 (`Festive Decor`, `Giftable Decor`, `Event Decor`)
  - **L3 Total**: $4 + 5 + 3 + 4 + 5 + 3 + 3 + 3 = 30$
- **L4 Leaf Collections**: `6` nodes (`Ship Models`, `Aircraft Models`, `Car Models`, `Motorcycle Models`, `Rocket Models`, `Spacecraft Models`)
- **TOTAL CANONICAL NODES**: **`45`** nodes ($1 + 8 + 30 + 6 = 45$)

### Provisioning Arithmetic:
- **Total Canonical Nodes**: `45`
- **Provisioned Nodes**: `4` (`Decor`, `Decorative Models`, `Maritime Models`, `Ship Models`)
- **Unprovisioned / Missing Nodes**: **`41`** ($45 - 4 = 41$)

---

## 3. THREE-STATE GOVERNANCE MATRIX (ALL 45 NODES)

| Level | Canonical Node Name | Parent Node | Taxonomy Status | Commerce Resource Status | Storefront Exposure | Proposed Handle |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **L1** | Decor | `null` | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `decor` |
| **L2** | Decorative Models | Decor | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `decorative-models` |
| **L3** | Maritime Models | Decorative Models | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `maritime-models` |
| **L4** | Ship Models | Maritime Models | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `ship-models` |
| **L3** | Aviation Models | Decorative Models | **CANONICAL** | MISSING | NOT EXPOSED | *aviation-models* |
| **L4** | Aircraft Models | Aviation Models | **CANONICAL** | MISSING | NOT EXPOSED | *aircraft-models* |
| **L3** | Automotive Models | Decorative Models | **CANONICAL** | MISSING | NOT EXPOSED | *automotive-models* |
| **L4** | Car Models | Automotive Models | **CANONICAL** | MISSING | NOT EXPOSED | *car-models* |
| **L4** | Motorcycle Models | Automotive Models | **CANONICAL** | MISSING | NOT EXPOSED | *motorcycle-models* |
| **L3** | Spaceflight Models | Decorative Models | **CANONICAL** | MISSING | NOT EXPOSED | *spaceflight-models* |
| **L4** | Rocket Models | Spaceflight Models | **CANONICAL** | MISSING | NOT EXPOSED | *rocket-models* |
| **L4** | Spacecraft Models | Spaceflight Models | **CANONICAL** | MISSING | NOT EXPOSED | *spacecraft-models* |
| **L2** | Decorative Objects | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-objects* |
| **L3** | Sculptures | Decorative Objects | **CANONICAL** | MISSING | NOT EXPOSED | *sculptures* |
| **L3** | Figurines | Decorative Objects | **CANONICAL** | MISSING | NOT EXPOSED | *figurines* |
| **L3** | Decorative Bowls | Decorative Objects | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-bowls* |
| **L3** | Decorative Trays | Decorative Objects | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-trays* |
| **L3** | Ornaments | Decorative Objects | **CANONICAL** | MISSING | NOT EXPOSED | *ornaments* |
| **L2** | Vases & Planters | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *vases-planters* |
| **L3** | Vases | Vases & Planters | **CANONICAL** | MISSING | NOT EXPOSED | *vases* |
| **L3** | Planters | Vases & Planters | **CANONICAL** | MISSING | NOT EXPOSED | *planters* |
| **L3** | Decorative Pots | Vases & Planters | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-pots* |
| **L2** | Wall Decor | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *wall-decor* |
| **L3** | Wall Art | Wall Decor | **CANONICAL** | MISSING | NOT EXPOSED | *wall-art* |
| **L3** | Wall Sculptures | Wall Decor | **CANONICAL** | MISSING | NOT EXPOSED | *wall-sculptures* |
| **L3** | Mirrors | Wall Decor | **CANONICAL** | MISSING | NOT EXPOSED | *mirrors* |
| **L3** | Wall Clocks | Wall Decor | **CANONICAL** | MISSING | NOT EXPOSED | *wall-clocks* |
| **L2** | Tabletop Decor | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *tabletop-decor* |
| **L3** | Centerpieces | Tabletop Decor | **CANONICAL** | MISSING | NOT EXPOSED | *centerpieces* |
| **L3** | Candle Holders | Tabletop Decor | **CANONICAL** | MISSING | NOT EXPOSED | *candle-holders* |
| **L3** | Bookends | Tabletop Decor | **CANONICAL** | MISSING | NOT EXPOSED | *bookends* |
| **L3** | Decorative Boxes | Tabletop Decor | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-boxes* |
| **L3** | Desk Decor | Tabletop Decor | **CANONICAL** | MISSING | NOT EXPOSED | *desk-decor* |
| **L2** | Lighting Decor | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *lighting-decor* |
| **L3** | Decorative Lamps | Lighting Decor | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-lamps* |
| **L3** | Lanterns | Lighting Decor | **CANONICAL** | MISSING | NOT EXPOSED | *lanterns* |
| **L3** | Ambient Lights | Lighting Decor | **CANONICAL** | MISSING | NOT EXPOSED | *ambient-lights* |
| **L2** | Textiles & Soft Decor | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *textiles-soft-decor* |
| **L3** | Cushions | Textiles & Soft Decor | **CANONICAL** | MISSING | NOT EXPOSED | *cushions* |
| **L3** | Throws | Textiles & Soft Decor | **CANONICAL** | MISSING | NOT EXPOSED | *throws* |
| **L3** | Decorative Fabrics | Textiles & Soft Decor | **CANONICAL** | MISSING | NOT EXPOSED | *decorative-fabrics* |
| **L2** | Seasonal & Occasion Decor | Decor | **CANONICAL** | MISSING | NOT EXPOSED | *seasonal-occasion-decor* |
| **L3** | Festive Decor | Seasonal & Occasion Decor | **CANONICAL** | MISSING | NOT EXPOSED | *festive-decor* |
| **L3** | Giftable Decor | Seasonal & Occasion Decor | **CANONICAL** | MISSING | NOT EXPOSED | *giftable-decor* |
| **L3** | Event Decor | Seasonal & Occasion Decor | **CANONICAL** | MISSING | NOT EXPOSED | *event-decor* |

---

## 4. L2 FAMILY READINESS & PROVISIONING PHASE PLAN

| L2 Primary Family Name | Resource Status | Live Product Count | Storefront Exposure | Provisioning Status |
| :--- | :---: | :---: | :---: | :--- |
| **Decorative Models** | **PROVISIONED (SUB-TREE PROVISIONED)** | `1` (`Three-Masted Schooner`) | **EXPOSED** | **PROVISIONED (`PIM-DECOR-011D-B`)** |
| **Decorative Objects** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Vases & Planters** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Wall Decor** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Tabletop Decor** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Lighting Decor** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Textiles & Soft Decor** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
| **Seasonal & Occasion Decor** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |

### Phased Exposure & Merchandising Governance:
1. **Shopify Admin Provisioning Baseline**: All 8 L2 Primary Families and complete 10-node `Decorative Models` sub-tree (`Maritime`, `Aviation`, `Automotive`, `Spaceflight` & 6 L4 leaf collections) are provisioned in Shopify Admin (`19 Total Provisioned Nodes`).
2. **Storefront Exposure Boundary**: Runtime storefront exposure is strictly governed by the `COMMERCE_READY` gate (`PIM-DECOR-011E` / `PIM-DECOR-011F`). Only nodes with active merchandising coverage, published routes, approved category images, and claim-safe copy are exposed to customers on storefront discovery surfaces.
3. **Subsequent Category Expansion**: Unexposed provisioned nodes remain on HOLD until product onboarding, ACS creative asset production, and copy approval are completed.

---

## 5. METAFIELD HIERARCHY & BREADCRUMB CONTRACT

- **Collection Metafields**:
  - `custom.parent_collection` (type `collection_reference`): Points to parent collection.
  - `custom.subcollections` (type `list.collection_reference`): List of child collections.
- **Product Metafield**:
  - `custom.primary_merchandising_collection` (type `collection_reference`): Primary canonical merchandising collection.
- **Breadcrumb Rule**: Dynamic 5-level breadcrumbs originate 100% from `product.metafields.custom.primary_merchandising_collection` and `collection.metafields.custom.parent_collection`. Breadcrumb hierarchy is independent of Shopify header navigation menu depth.

---

## 6. SHOPIFY HEADER NAVIGATION MAPPING

- `Decor` is a **Top-Level Navigation Item** in the main storefront menu.
- Deep leaf collections (L4) such as `Ship Models`, `Aircraft Models`, `Car Models`, `Rocket Models` are discovered through their parent collection landing pages (L3/L2) and breadcrumbs, preventing native Shopify navigation depth collisions.
