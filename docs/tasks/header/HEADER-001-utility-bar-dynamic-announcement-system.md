# TASK HEADER-001 — StyloDyna Utility Bar, Dynamic Announcement & Canonical WhatsApp System

## Task Metadata
- **Task ID**: `HEADER-001` (Sub-tasks: `HEADER-001A`, `HEADER-001B`, `HEADER-001C`, `HEADER-001D`, `HEADER-001E`, `HEADER-001F`, `HEADER-001G`)
- **Domain**: `header / whatsapp / responsiveness`
- **Base Branch**: `develop`
- **Feature Branch**: `feature/header-001-announcement-system`
- **Authoritative Header UI Reference**: [`docs/design-references/header/HEADER-001/header-001a-transparent-header-reference-01.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/header-001a-transparent-header-reference-01.png) (`sha256: 06a12abbe0bb6a342cb576fab28236a7f708624a485124c221c2112cb920f151`)
- **Authoritative WhatsApp Brand Icon Reference**: [`docs/design-references/brand/icons/icon-stylodyna-whatsapp-reference.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/brand/icons/icon-stylodyna-whatsapp-reference.svg) (`sha256: 9df0625774ba63e9ae64d972454127bb9ae64f7eb4d0095a92dd745f0c359345`)
- **Desktop Responsive Conformance**: [`docs/tasks/header/HEADER-001G-desktop-responsive-conformance.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/tasks/header/HEADER-001G-desktop-responsive-conformance.md)
- **Design Reference Governance Manifest**: [`docs/design-references/REFERENCE-MANIFEST.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/REFERENCE-MANIFEST.md)
- **Status**: CANONICAL IMPLEMENTATION COMPLETE & RESPONSIVELY VERIFIED
- **Human Visual Acceptance**: PENDING REVIEW

---

## 1. Desktop Responsiveness Contract (HEADER-001G)

- **Grid Architecture**: Replaced unconstrained `auto` center column with `grid-template-columns: minmax(0, 1fr) minmax(260px, auto) minmax(0, 1fr);` and `gap: clamp(8px, 1.5vw, 24px);`.
- **Center Message Boundary**: Capped center text container at `max-width: clamp(260px, 35vw, 520px);` with `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`.
- **Zero Region Overlap**: Guaranteed `UTILITY_COLLISIONS = 0` across all standard desktop viewports (1920px, 1728px, 1600px, 1536px, 1440px, 1366px, 1280px, 1200px, 1024px) at 100% zoom.
- **WhatsApp Popover Exemption**: Root Utility Bar and WhatsApp wrapper maintain `overflow: visible !important` so popover cards pop up without vertical clipping.
