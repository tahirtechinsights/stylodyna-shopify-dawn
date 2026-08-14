# Design Reference README — HEADER-001 / HEADER-001A (Utility Bar & Dynamic Announcement System)

## Reference Metadata
- **Task ID**: `HEADER-001` / `HEADER-001A`
- **Domain**: `header`
- **Authoritative Reference Image**: [`header-001a-transparent-header-reference-01.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/header-001a-transparent-header-reference-01.png)
- **Status**: APPROVED AUTHORITATIVE VISUAL DIRECTION

---

## 1. Reference Purpose
This document records the human-approved visual direction and technical architecture for the **StyloDyna Global Header, Utility Bar, and Dynamic Announcement System** (`sections/announcement-bar.liquid`, `sections/header.liquid`, `assets/component-stylodyna-header.css`).

---

## 2. Approved Visual Architecture

```
┌──────────────────────────────────────────────────────────────┐
│ TIER 1: UTILITY / CONTACT BAR                                │
│ Background: Solid Charcoal (#1F1F1F) | Text: Soft Ivory (#F7F5F0) │
│ Customer Care: 0327 1777879 · WhatsApp Support · Email       │
├──────────────────────────────────────────────────────────────┤
│ TIER 2: DYNAMIC ANNOUNCEMENT BAR                             │
│ Background: Soft Ivory (#F7F5F0) | Text: Charcoal (#2E2E2E)  │
│ Automatic rotation (6s interval) · Arrows removed by default │
├──────────────────────────────────────────────────────────────┤
│ MAIN HEADER (Transparent 40% Charcoal Overlay)              │
│ Background: rgba(46, 46, 46, 0.40) over Hero Image           │
│ Logo / Nav / Icons retain 100% full opacity in Soft Ivory    │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Approved Design Decisions (HEADER-001A)

### 1. Main Header Overlay Refinement
- **Background**: StyloDyna Charcoal Black (`#2E2E2E`) with 40% alpha transparency: `rgba(46, 46, 46, 0.40)`.
- **CSS Rule**: Specificity-based selector scoping (`.header-wrapper.header-wrapper--transparent` / `body .section-header .header-wrapper--transparent`) without unnecessary `!important` flags.
- **Opacity Control**: Applied strictly as RGBA background transparency. CSS `opacity` must **NOT** be applied to the parent header container.
- **Foreground Elements**: Logo, navigation items, and utility icons retain 100% full opacity in Soft Ivory (`#F7F5F0` / `#FFFFFF`).
- **Scrolled State**: When scrolled past the header, sticky navigation transitions smoothly to Stone White (`#FCFBF8`) background with Charcoal (`#2E2E2E`) text.

### 2. Tier 2 Dynamic Announcement Bar
- **Background**: Soft Ivory (`#F7F5F0`)
- **Text Color**: Charcoal (`#2E2E2E`), Warm Gold accent (`#8A6A43`)
- **Message Rotation**: Automatic 6-second rotation interval using native Dawn `<slideshow-component>`.
- **Navigation Arrows**: Removed by default (`show_nav_buttons: false`) for a clean, editorial look.
- **Preset Messages**:
  1. `Fast & Reliable Delivery Across Pakistan`
  2. `Free Delivery on Selected Products`
  3. `Confident in Our Quality · Easy Returns If You’re Not Satisfied`
  4. `WhatsApp Support Available 24/7 · 0327 1777879`

### 3. Tier 1 Utility Bar
- **Background**: Solid Charcoal (`#1F1F1F`)
- **Text Color**: Soft Ivory (`#F7F5F0`)
- **Desktop View**: `Customer Care: 0327 1777879 · WhatsApp Support · sales@stylodyna.com` (`tel:`, `mailto:`, WhatsApp destination).
- **Mobile View**: `WhatsApp Support · 0327 1777879`
