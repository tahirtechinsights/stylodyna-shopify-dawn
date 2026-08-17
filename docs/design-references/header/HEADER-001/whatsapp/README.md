# Design Reference — StyloDyna WhatsApp Canonical URL & Hover Panel Governance

## Reference Metadata
- **Task ID**: `HEADER-001`
- **Domain**: `header / whatsapp`
- **Authoritative Reference Image (PNG)**: [`whatsapp-hover-panel-ui-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/whatsapp/whatsapp-hover-panel-ui-reference.png)
- **Master Vector QR Asset**: [`stylodyna-whatsapp-qr-reference.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/whatsapp/stylodyna-whatsapp-qr-reference.svg)
- **Production Vector QR Asset**: [`assets/stylodyna-whatsapp-qr.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-whatsapp-qr.svg)
- **Reference ID**: `HEADER-001-WHATSAPP-UI`
- **SHA-256 Hash**: `05af11922228715fc3b3d784ec6ed47694db67cf97d538836d2e6b8dcf6d4a89`
- **REFERENCE STATUS**: AUTHORITATIVE — HUMAN APPROVED & IMMUTABLE

---

## 1. Verified Asset Metrics & Integrity

- **File Path**: `docs/design-references/header/HEADER-001/whatsapp/whatsapp-hover-panel-ui-reference.png`
- **Format**: `PNG` (True PNG magic bytes `0x89 0x50 0x4E 0x47`)
- **Pixel Dimensions**: `1536 × 1024` pixels
- **File Size**: `1,860,713` bytes
- **SHA-256 Digest**: `05af11922228715fc3b3d784ec6ed47694db67cf97d538836d2e6b8dcf6d4a89`
- **Integrity Script Verification**: `scripts/verify_design_references.ps1` -> **PASS**

---

## 2. Stacking Context & Overflow Remediation Architecture

- **Clipping Root Cause**: `.announcement-bar-section` and `.stylodyna-utility-bar` previously had `overflow: hidden !important;` to contain continuous ticker marquee, which clipped the downward-floating WhatsApp popover.
- **Stacking Solution**:
  1. Restricted `overflow: hidden !important;` strictly to `.stylodyna-ticker-bar` and `.stylodyna-ticker-bar__track-wrapper`.
  2. Set `overflow: visible !important; position: relative !important; z-index: 120 !important;` on `.announcement-bar-section` and `.stylodyna-utility-bar`.
  3. Set `position: relative !important; z-index: 125 !important;` on `.stylodyna-whatsapp-wrapper`.
  4. Set `position: absolute !important; top: calc(100% + 8px) !important; z-index: 150 !important;` on `.stylodyna-whatsapp-popover`.

---

## 3. Visual Hierarchy & Character

The WhatsApp customer assistance popover strictly reproduces the composition and visual language of the approved **WhatsApp Hover Panel UI Target**:

- **Visual Tone**: Premium, minimal, calm, trustworthy, editorial, and professional.
- **Card Proportions**: `275px` floating panel with generous internal breathing room (`18px` padding, `14px` border radius, `#FCFBF8` soft ivory surface, `0 16px 40px rgba(0, 0, 0, 0.18)` soft shadow).
- **Hierarchy**:
  1. Header: WhatsApp green mark (`#25D366`) + title `WhatsApp StyloDyna` (`#2E2E2E`)
  2. Supporting Text: *"Need help choosing a product? Our team is ready to assist."* (`#666666`)
  3. QR Surface: Clean white surface containing standard vector SVG QR code (`128px × 128px`)
  4. QR Caption: *"Scan to chat on WhatsApp"* (`#666666`)
  5. Action CTA: *"Continue on WhatsApp Web →"* (`#C7A24A` warm gold, hover `#25D366`)

---

## 4. Universal Destination Consistency Contract

All five HEADER-001 WhatsApp interaction points resolve to the **EXACT SAME NORMALIZED URL**:

1. `UTILITY_LINK`: `https://wa.me/923271777879?text=Hello%20StyloDyna!...`
2. `WEB_CTA`: `https://wa.me/923271777879?text=Hello%20StyloDyna!...`
3. `MOBILE_LINK`: `https://wa.me/923271777879?text=Hello%20StyloDyna!...`
4. `QR_DECODED_TARGET`: `https://wa.me/923271777879?text=Hello%20StyloDyna!...`

**WHATSAPP_TARGET_MATCH = PASS**
