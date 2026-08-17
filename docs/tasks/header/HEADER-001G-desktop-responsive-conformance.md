# TASK HEADER-001G — Desktop Responsiveness & Utility Bar UX Refinement

## Task Metadata
- **Task ID**: `HEADER-001G`
- **Parent Task**: `HEADER-001` — StyloDyna Utility Bar & Dynamic Announcement System
- **Domain**: `header / responsiveness / utility bar UX`
- **Base Branch**: `develop`
- **Feature Branch**: `feature/header-001-announcement-system`
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**PASS**).
- **Status**: UX REFINEMENT COMPLETE & VERIFIED
- **Human Visual Acceptance**: PENDING REVIEW

---

## 1. Executive UX Refinement Summary

1. **Icon Scale Consistency**:
   - Contact icon wrappers normalized to `18px × 18px` with `line-height: 1`.
   - Rendered optical dimensions:
     - Phone: `16px × 16px`
     - WhatsApp: `17px × 17px` (optical weight parity match)
     - Email: `16px × 16px`
   - All three contact icons align on the same visual centerline.

2. **Responsive Email Access Strategy**:
   - **Large Desktop (`>= 1440px`)**: Full `Phone · WhatsApp · sales@stylodyna.com` inline.
   - **Small Desktop / Laptop (`990px - 1439px`)**: Email address text condenses to a compact `18px × 18px` envelope icon wrapper (`Phone · WhatsApp · [Envelope]`).
   - **Email Micro Popover**: Hovering or keyboard focusing `[Envelope]` opens a quiet `#1F1F1F` micro popover displaying `Email StyloDyna` and clickable `sales@stylodyna.com`.

3. **Center Live Message Smart Popover**:
   - Truncated center messages (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`) trigger a JS `scrollWidth > clientWidth` check.
   - Hovering or keyboard focusing a truncated message reveals a quiet `#1F1F1F` micro popover displaying the full text. Untruncated messages show no popover.

4. **Social Links Vertical Alignment & Rhythm**:
   - Social link wrappers normalized to `28px × 28px` (`display: inline-flex; align-items: center; justify-content: center;`).
   - Rendered SVG size: `16px × 16px`.
   - Equal vertical padding rhythm (`min-height: 44px`, zero asymmetric top/bottom margin offsets).
