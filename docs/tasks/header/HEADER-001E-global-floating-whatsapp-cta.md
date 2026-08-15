# TASK HEADER-001E / HEADER-001F — Global Floating WhatsApp CTA & Cart Trolley Remediation

## Task Metadata
- **Task ID**: `HEADER-001E` / `HEADER-001F`
- **Parent Task**: `HEADER-001` — StyloDyna Utility Bar & Dynamic Announcement System
- **Domain**: `header / cart / whatsapp / global storefront`
- **Base Branch**: `develop`
- **Feature Branch**: `feature/header-001-announcement-system`
- **Production Cart Icon Asset**: [`assets/icon-stylodyna-cart.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/icon-stylodyna-cart.svg) & [`snippets/icon-stylodyna-cart.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/snippets/icon-stylodyna-cart.liquid)
- **Authoritative WhatsApp Brand Icon Reference**: [`icon-stylodyna-whatsapp-reference.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/brand/icons/icon-stylodyna-whatsapp-reference.svg) (`sha256: 9df0625774ba63e9ae64d972454127bb9ae64f7eb4d0095a92dd745f0c359345`)
- **Authoritative Floating CTA Visual Target**: [`floating-whatsapp-cta-ui-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/whatsapp/floating-whatsapp-cta-ui-reference.png) (`sha256: 13156d8b153be25686b1b3dd0eb0b57293fcb7a1f4184858c9052def709487c2`)
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**PASS**).
- **Status**: REMEDIATION COMPLETE & VERIFIED
- **Human Visual Acceptance**: PENDING REVIEW

---

## 1. Cart Trolley Icon & Count Badge Remediation

1. **Shopping Cart Trolley Icon**:
   - Replaced generic Dawn bag/cart SVG with dedicated vector trolley asset [`assets/icon-stylodyna-cart.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/icon-stylodyna-cart.svg) and snippet [`snippets/icon-stylodyna-cart.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/snippets/icon-stylodyna-cart.liquid).
   - Target metrics: `24px × 24px`, `stroke-width="2"`, rounded line caps/joins, `currentColor` fill/stroke, visually aligned with Search and Account icons.

2. **20px Cart Count Badge Geometry**:
   - **Single Digit (`0`, `1`, `9`)**: Exact `20px × 20px` circular badge (`width: 20px`, `height: 20px`, `border-radius: 50%`, `padding: 0`, zero inherited margins).
   - **Multi Digit (`10`, `99`, `100+`)**: `20px` height horizontal pill (`min-width: 20px`, `height: 20px`, `padding-inline: 5px`, `border-radius: 999px`).
   - Surface & Text: `#B83A32` background with `#FFFFFF` text, `font-weight: 700`, `line-height: 1`, `display: grid; place-items: center;`, optically centered with `transform: translateY(0.25px)`.
   - Upper-right position: `top: -4px; right: -4px;` relative to upper-right corner of cart trolley icon.
