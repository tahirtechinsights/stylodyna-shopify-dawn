# HOME-005 — Authoritative Category Design References & Asset Governance

## Overview
This directory contains the human-approved, authoritative design reference assets for **HOME-005: Shop by Categories Carousel**.

> [!IMPORTANT]
> **CRITICAL GOVERNANCE RULE**:
> **`SOURCE MASTER != STOREFRONT DERIVATIVE`**
> Files in `source-assets/` and `ui/` are human-approved, read-only reference artifacts. Antigravity must never modify, recompress, crop, resize, or overwrite source masters. Optimized production derivatives (e.g. WebP) created under `assets/` are separate storefront assets derived from these masters.

---

## 1. Registered Reference Asset Directory

| Reference ID | Asset Path | Format | Master Dimensions | SHA-256 Hash | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `HOME-005-UI` | [`ui/home-005-shop-by-categories-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-reference.png) | PNG | `1536 × 1024` | `a2649d2f5b6c8732f869d500ea9960e271aa1ba9ad602af60d9906c598003cd6` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-SOFA` | [`source-assets/sd-category-sofa.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-sofa.png) | PNG | `1254 × 1254` | `28367f10e2ccfd401c16d3a2f8968eed84a7b9dfaa27b9ca4e80c78f48b1751a` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-CHAIR` | [`source-assets/sd-category-chair.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-chair.png) | PNG | `1254 × 1254` | `662ffeb7583be2997215800788b0fd5bbc378c097145bef53fd04e8184477adc` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-BED` | [`source-assets/sd-category-bed.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-bed.png) | PNG | `1536 × 1024` | `7c0ec2748f8db2e2fcadddc2b4ace8831e9a47a735d8d9299945b839b3960cad` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-DINING-TABLE` | [`source-assets/sd-category-dining-table.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-dining-table.png) | PNG | `1536 × 1024` | `c143d2ca4527482439ef56e6eb6be3d22baac9c0314045c1f0b3c720c89aee8c` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-TABLE` | [`source-assets/sd-category-table.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-table.png) | PNG | `1536 × 1024` | `b10acaa9a347d0369769053e494fc9cccfb3a4fcc2c9d8eccc71a8de871fad97` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-LAMP` | [`source-assets/sd-category-lamp.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-lamp.png) | PNG | `1285 × 1224` | `25db9533b1a5c9531ef2acb3ce15c95786c3e8d303b54928b3b1fbf2a5d73401` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CAROUSEL-APPROVED` | [`ui/home-005-shop-by-categories-carousel-approved.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/ui/home-005-shop-by-categories-carousel-approved.png) | PNG | `1615 × 974` | `df728b741e350cdec992dfa7da5284f1e5865798b299f11c23dfeaf62cfad925` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-LIFESTYLE` | [`source-assets/sd-category-lifestyle.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-lifestyle.png) | PNG | `1536 × 1024` | `2f4a2e01411ca1df1b043e0e36fe0f650fbdea8c699c9002fcaea3e9c0801859` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-SPORTS-OUTDOORS` | [`source-assets/sd-category-sports-outdoors.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-sports-outdoors.png) | PNG | `1384 × 1136` | `b79c4f79c3d1caa0bbe23e963d9c58980eac8a6e8354610a04b116f39e77acde` | `human_approved` / **IMMUTABLE** |
| `HOME-005-CATEGORY-SMART-HOME` | [`source-assets/sd-category-smart-home.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/home/HOME-005/source-assets/sd-category-smart-home.png) | PNG | `1536 × 1024` | `25908cd04d84b99ddde1830df0f8570eaa89be34c591255a3bd2304787183f18` | `human_approved` / **IMMUTABLE** |

---

## 2. Asset Standards & Governance Rules

1. **Transparency Requirement**:
   All 6 product category master assets must feature transparent RGBA alpha channels (`alpha=True`). Product silhouettes must be isolated with zero background contamination.

2. **Safe-Zone & Optical Scale Rules**:
   Products must be optically centered within their canvas without edge clipping or artificial scaling distortions.

3. **Visual Consistency Set Contract**:
   Camera perspective, lighting temperature, material realism, and shadow softness across the 6 product categories must maintain a unified high-end luxury furniture brand visual language.

4. **Immutability Policy**:
   No AI agent or developer may modify or recompress these master source files. All files are cryptographic reference targets validated by [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1).

---

## 3. Production Asset Canvas Normalization Contract (HOME-005A1)

- **Source Masters**: Native dimensions preserved in `source-assets/` (`1254x1254`, `1536x1024`, `1285x1224`).
- **Storefront Production Contract**: All 6 WebP storefront assets under `assets/` (`sd-category-*.webp`) normalized to a strictly uniform **`1254 × 1254` square canvas** with centered product silhouettes, preserved transparent RGBA alpha channels, grounding shadows, and optical safe zones (`~68–78%` visual occupancy).
