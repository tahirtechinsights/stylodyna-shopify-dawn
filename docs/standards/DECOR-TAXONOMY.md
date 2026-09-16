# STYLODYNA DECOR DEPARTMENT DOWNSTREAM TAXONOMY SPECIFICATION

- **STATUS**: DOWNSTREAM PRESENTATION SPECIFICATION (PIM RECONCILED)
- **GOVERNANCE SCOPE**: StyloDyna Decor Department Storefront Taxonomy Presentation
- **CANONICAL AUTHORITY**: **PIM Checkpoint `987b8f8`** (`feat(shopify): reconcile APV canonical collections`). PIM is the sole canonical taxonomy authority.
- **AUTHORITY FLOW**:
  - `AIFPIS` → May propose taxonomy structures based on discovery/product-intelligence.
  - `PIM` → Reviews, approves, and owns canonical taxonomy definitions.
  - `Shopify` → Receives synchronized commerce representation.
  - `Storefront` → Consumes and presents that representation downstream to customers.

> [!IMPORTANT]
> **Canonical PIM Authority vs. Downstream Storefront Exposure**: PIM owns the canonical source of truth for the Decor department taxonomy. Storefront presents this hierarchy according to active product availability, exposure status (`COMMERCE_READY`), and template configuration. Unexposed provisioned nodes remain hidden from active customer navigation until launch requirements are met.

---

## 1. CANONICAL HIERARCHY TREE (PIM CHECKPOINT 987b8f8)

```text
Decor (L1) [PROVISIONED / EXPOSED] (handle: decor)
├── Decorative Models (L2) [PROVISIONED / PARTIAL BRANCH EXPOSED] (handle: decorative-models)
│   ├── Maritime Models (L3) [PROVISIONED / EXPOSED] (handle: maritime-models)
│   │   └── Ship Models (L4) [PROVISIONED / EXPOSED] (handle: ship-models)
│   │
│   ├── Aviation Models (L3) [UNPROVISIONED] (handle: aviation-models)
│   │   └── Aircraft Models (L4) [UNPROVISIONED] (handle: aircraft-models)
│   │
│   ├── Automotive Models (L3) [UNPROVISIONED] (handle: automotive-models)
│   │   ├── Car Models (L4) [UNPROVISIONED] (handle: car-models)
│   │   └── Motorcycle Models (L4) [UNPROVISIONED] (handle: motorcycle-models)
│   │
│   └── Spaceflight Models (L3) [UNPROVISIONED] (handle: spaceflight-models)
│       ├── Rocket Models (L4) [UNPROVISIONED] (handle: rocket-models)
│       └── Spacecraft Models (L4) [UNPROVISIONED] (handle: spacecraft-models)
│
├── Decorative Objects (L2) [UNPROVISIONED] (handle: decorative-objects)
│   ├── Sculptures (L3) [UNPROVISIONED] (handle: sculptures)
│   ├── Figurines (L3) [UNPROVISIONED] (handle: figurines)
│   ├── Decorative Bowls (L3) [UNPROVISIONED] (handle: decorative-bowls)
│   ├── Decorative Trays (L3) [UNPROVISIONED] (handle: decorative-trays)
│   └── Ornaments (L3) [UNPROVISIONED] (handle: ornaments)
│
├── Artificial Plants & Vases (L2) [PROVISIONED / EXPOSED] (handle: artificial-plants-vases, GID: 317902684243)
│   ├── Artificial Plants (L3) [PROVISIONED / EXPOSED] (handle: artificial-plants, GID: 317902717011 - Active: SD-PROD-000033)
│   ├── Planters (L3) [PROVISIONED / COMING SOON] (handle: planters, GID: 317960126547 - 0 products)
│   ├── Vases (L3) [PROVISIONED / COMING SOON] (handle: vases, GID: 317960159315 - 0 products)
│   └── Decorative Pots (L3) [PROVISIONED / COMING SOON] (handle: decorative-pots, GID: 317960192083 - 0 products)
│
├── Wall Decor (L2) [UNPROVISIONED] (handle: wall-decor)
│   ├── Wall Art (L3) [UNPROVISIONED] (handle: wall-art)
│   ├── Wall Sculptures (L3) [UNPROVISIONED] (handle: wall-sculptures)
│   ├── Mirrors (L3) [UNPROVISIONED] (handle: mirrors)
│   └── Wall Clocks (L3) [UNPROVISIONED] (handle: wall-clocks)
│
├── Tabletop Decor (L2) [UNPROVISIONED] (handle: tabletop-decor)
│   ├── Centerpieces (L3) [UNPROVISIONED] (handle: centerpieces)
│   ├── Candle Holders (L3) [UNPROVISIONED] (handle: candle-holders)
│   ├── Bookends (L3) [UNPROVISIONED] (handle: bookends)
│   ├── Decorative Boxes (L3) [UNPROVISIONED] (handle: decorative-boxes)
│   └── Desk Decor (L3) [UNPROVISIONED] (handle: desk-decor)
│
├── Lighting Decor (L2) [UNPROVISIONED] (handle: lighting-decor)
│   ├── Decorative Lamps (L3) [UNPROVISIONED] (handle: decorative-lamps)
│   ├── Lanterns (L3) [UNPROVISIONED] (handle: lanterns)
│   └── Ambient Lights (L3) [UNPROVISIONED] (handle: ambient-lights)
│
├── Textiles & Soft Decor (L2) [UNPROVISIONED] (handle: textiles-soft-decor)
│   ├── Cushions (L3) [UNPROVISIONED] (handle: cushions)
│   ├── Throws (L3) [UNPROVISIONED] (handle: throws)
│   └── Decorative Fabrics (L3) [UNPROVISIONED] (handle: decorative-fabrics)
│
└── Seasonal & Occasion Decor (L2) [UNPROVISIONED] (handle: seasonal-occasion-decor)
    ├── Festive Decor (L3) [UNPROVISIONED] (handle: festive-decor)
    ├── Giftable Decor (L3) [UNPROVISIONED] (handle: giftable-decor)
    └── Event Decor (L3) [UNPROVISIONED] (handle: event-decor)
```

> [!NOTE]
> **Legacy Node Deprecation Notice**: Legacy collection `Vases & Planters` (handle: `vases-planters`, GID: `317416112211`) is **SUPERSEDED / DEPRECATED** by PIM checkpoint `987b8f8`. It is preserved non-destructively in Shopify Admin but is excluded from active Storefront navigation, breadcrumbs, and merchandising rails.

---

## 2. SYSTEMATIC TAXONOMY NODE ARITHMETIC

- **L1 Department**: `1` node (`Decor`)
- **L2 Primary Decor Families**: `8` nodes
- **L3 Categories**: `31` nodes:
  - `Decorative Models` = 4 (`Maritime Models`, `Aviation Models`, `Automotive Models`, `Spaceflight Models`)
  - `Decorative Objects` = 5 (`Sculptures`, `Figurines`, `Decorative Bowls`, `Decorative Trays`, `Ornaments`)
  - `Artificial Plants & Vases` = 4 (`Artificial Plants`, `Planters`, `Vases`, `Decorative Pots`)
  - `Wall Decor` = 4 (`Wall Art`, `Wall Sculptures`, `Mirrors`, `Wall Clocks`)
  - `Tabletop Decor` = 5 (`Centerpieces`, `Candle Holders`, `Bookends`, `Decorative Boxes`, `Desk Decor`)
  - `Lighting Decor` = 3 (`Decorative Lamps`, `Lanterns`, `Ambient Lights`)
  - `Textiles & Soft Decor` = 3 (`Cushions`, `Throws`, `Decorative Fabrics`)
  - `Seasonal & Occasion Decor` = 3 (`Festive Decor`, `Giftable Decor`, `Event Decor`)
  - **L3 Total**: $4 + 5 + 4 + 4 + 5 + 3 + 3 + 3 = 31$
- **L4 Leaf Collections**: `6` nodes (`Ship Models`, `Aircraft Models`, `Car Models`, `Motorcycle Models`, `Rocket Models`, `Spacecraft Models`)
- **TOTAL CANONICAL NODES**: **`46`** nodes ($1 + 8 + 31 + 6 = 46$)

---

## 3. GOVERNANCE MATRIX (KEY ACTIVE & APV NODES)

| Level | Canonical Node Name | Parent Node | Taxonomy Status | Commerce Resource Status | Storefront Exposure | Canonical Handle |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **L1** | Decor | `null` | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `decor` |
| **L2** | Decorative Models | Decor | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `decorative-models` |
| **L3** | Maritime Models | Decorative Models | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `maritime-models` |
| **L4** | Ship Models | Maritime Models | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `ship-models` |
| **L2** | Artificial Plants & Vases | Decor | **CANONICAL** | **PROVISIONED** | **EXPOSED** | `artificial-plants-vases` |
| **L3** | Artificial Plants | Artificial Plants & Vases | **CANONICAL** | **PROVISIONED** | **EXPOSED (AVAILABLE NOW)** | `artificial-plants` |
| **L3** | Planters | Artificial Plants & Vases | **CANONICAL** | **PROVISIONED** | **EXPOSED (COMING SOON)** | `planters` |
| **L3** | Vases | Artificial Plants & Vases | **CANONICAL** | **PROVISIONED** | **EXPOSED (COMING SOON)** | `vases` |
| **L3** | Decorative Pots | Artificial Plants & Vases | **CANONICAL** | **PROVISIONED** | **EXPOSED (COMING SOON)** | `decorative-pots` |
| **L2 (Legacy)** | Vases & Planters | Decor | **DEPRECATED** | **PRESERVED** | **EXCLUDED** | `vases-planters` |

---

## 4. L2 FAMILY READINESS & PROVISIONING PHASE PLAN

| L2 Primary Family Name | Resource Status | Live Product Count | Storefront Exposure | Provisioning Status |
| :--- | :---: | :---: | :---: | :--- |
| **Decorative Models** | **PROVISIONED (SUB-TREE PROVISIONED)** | `1` (`Three-Masted Schooner`) | **EXPOSED** | **PROVISIONED (`PIM-DECOR-011D-B`)** |
| **Artificial Plants & Vases** | **PROVISIONED** | `1` (`SD-PROD-000033`) | **EXPOSED** | **PROVISIONED (`PIM-STOREFRONT-TAX-002`)** |
| **Decorative Objects** | **PROVISIONED** | `0` | HOLD / NOT EXPOSED | **PROVISIONED (`PIM-DECOR-011D-A`)** |
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
