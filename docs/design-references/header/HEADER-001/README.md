# Design Reference README — HEADER-001 (Global Header, Utility Bar & Dynamic Announcement System)

## Reference Metadata
- **Task ID**: `HEADER-001` / `HEADER-001A` / `HEADER-001B` / `HEADER-001C` / `HEADER-001D`
- **Domain**: `header`
- **Authoritative Reference Image**: [`header-001-final-authoritative-ui-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/header-001-final-authoritative-ui-reference.png)
- **Brand Logo Reference Image**: [`../../brand/logo/stylodyna-header-logo-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/brand/logo/stylodyna-header-logo-reference.png)
- **REFERENCE STATUS**: AUTHORITATIVE — FINAL HEADER-001 VISUAL TARGET

---

## 1. Reference Purpose
This document records the human-approved visual target and architectural specifications for the **StyloDyna Global Header, Utility Bar, and Dynamic Announcement System** (`sections/announcement-bar.liquid`, `sections/header.liquid`, `assets/component-stylodyna-header.css`).

---

## 2. Approved Global Visual Architecture

```
┌────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: UTILITY / CONTACT, LIVE STATUS & SOCIAL BAR (Height: 48px)        │
│ Background: Solid Charcoal (#1F1F1F) | Text: Soft Ivory (#F7F5F0)               │
│ [☎] 0327 1777879 · [💬] WHATSAPP · [✉] sales@stylodyna.com                │
│ [● Live] Welcome to StyloDyna — Designed for Homes, Crafted for Living.    │
│ [IG] [FB] [YT]                                                             │
├────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: CONTINUOUS ANNOUNCEMENT TICKER (Height: 36px)                      │
│ Background: Soft Ivory (#F7F5F0) | Text: Charcoal (#2E2E2E) · Gold Dots    │
│ Fast & Reliable Delivery Across Pakistan · Free Delivery on Selected...   │
├────────────────────────────────────────────────────────────────────────────┤
│ MAIN HEADER OVER HERO (Top Height: 86px / Scrolled Height: 74px)          │
│ Top: rgba(46, 46, 46, 0.40) over Hero Image                                │
│ Scrolled: rgba(46, 46, 46, 0.78) with 6px backdrop blur                    │
│ [STYODUNA PRODUCTION LOGO] | Home Catalog Collections About Us Contact      │
│ [Search] [Account] [Cart 0]                                               │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Approved Authoritative Specifications

### 1. Utility Bar (Tier 1)
- **Target Height**: `48px` (`--stylodyna-utility-height: 48px`).
- **Background**: Solid Charcoal (`#1F1F1F`), **Foreground**: Soft Ivory (`#F7F5F0`).
- **Three-Region Grid Layout**:
  - **LEFT**: Phone `0327 1777879` · WhatsApp `WHATSAPP` · Email `sales@stylodyna.com` (13.5px font, weight 600, no wrap).
  - **CENTER**: `#3FAE5A` live green pulse dot + 5 approved rotating utility messages (7s dwell time, subtle crossfade).
  - **RIGHT**: Social icons (Instagram, Facebook, YouTube) in `#F7F5F0` with restrained gold hover (`#C7A24A`).

### 2. Announcement Bar Ticker (Tier 2)
- **Target Height**: `36px` (`--stylodyna-announcement-height: 36px`).
- **Background**: Soft Ivory (`#F7F5F0`), **Text**: Charcoal (`#2E2E2E`), **Font**: 13.5px weight 600.
- **Continuous Motion**: 30-second continuous horizontal keyframe scroll with warm gold separators (`#C7A24A`), hover/focus pause, and static reduced motion fallback.

### 3. Main Header (Top & Scrolled States)
- **Top State**: `rgba(46, 46, 46, 0.40)` background over homepage hero slider (Height: `86px`).
- **Scrolled Sticky State**: `rgba(46, 46, 46, 0.78)` background with `backdrop-filter: blur(6px)` (Height: `74px`).
- **Logo Asset**: `assets/stylodyna-logo-header.png` (`2172 × 724`, aspect ratio `3.0:1`), height `50px` (desktop), `44px` (tablet), `36px` (mobile).
- **Cart Count Badge**: High-contrast 19px Soft Ivory (`#F7F5F0`) badge with bold Charcoal (`#2E2E2E`) count text, visibly displaying `"0"` when empty (`cart.item_count == 0`).
