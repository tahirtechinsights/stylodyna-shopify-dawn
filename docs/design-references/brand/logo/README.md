# Brand Logo Reference — HEADER LOGO LOCKUP

## Asset Metadata
- **Domain**: `brand/logo`
- **Authoritative Reference Image**: [`stylodyna-header-logo-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/brand/logo/stylodyna-header-logo-reference.png)
- **Production Asset**: [`assets/stylodyna-logo-header.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-logo-header.png)
- **Approval Status**: APPROVED — HEADER BRAND LOCKUP REFERENCE

---

## 1. Asset Purpose & Description
This directory stores the authoritative visual reference for the **StyloDyna Header Brand Lockup**.
The approved header logo is a horizontal lockup featuring:
- **Left**: Circular enclosed "SD" monogram mark in warm metallic gold / soft ivory.
- **Right**: Clean uppercase "STYLODYNA" wordmark.
- **Background**: Transparent surrounding canvas designed to float over dark or light header backgrounds.

---

## 2. Distinction from Full Master Brand Seal
- **Header Logo**: Horizontal lockup (`stylodyna-header-logo-reference.png`) optimized specifically for navigation bar display at heights between 32px and 48px.
- **Master Brand Seal**: Full circular seal containing tagline ("STYLE THAT MOVES WITH YOU"). Reserved for master branding, packaging, and footer placements; must **NOT** be scaled down for header navigation use.

---

## 3. Governance & Prohibited Modifications
- The reference image in `docs/design-references/brand/logo/stylodyna-header-logo-reference.png` must **NEVER** be automatically optimized, cropped, recolored, or modified.
- Production theme Liquid code must consume `assets/stylodyna-logo-header.png` via Shopify's `asset_url` engine.
- Theme CSS must maintain intrinsic aspect ratio using `object-fit: contain` and responsive height constraints without hardcoding static square boxes.
