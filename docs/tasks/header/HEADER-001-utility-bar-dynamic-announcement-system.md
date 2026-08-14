# TASK HEADER-001 — STYLODYNA UTILITY BAR & DYNAMIC ANNOUNCEMENT SYSTEM

## Task Metadata
- **Task ID**: `HEADER-001`
- **Title**: Utility Bar & Dynamic Announcement System
- **Domain**: `header`
- **Design References**: [`docs/design-references/header/HEADER-001/`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/)
- **Status**: COMPLETE
- **Git Branch**: `feature/header-001-announcement-system`
- **Git Commit**: `feat(header): add utility and dynamic announcement system`
- **Git Commit Hash**: `8b28922`
- **Git Push Status**: PUSHED
- **Human Visual Acceptance**: PENDING

---

## 1. Existing State Architecture Audit

### Audit Findings
- **Dawn Section Group**: `sections/header-group.json` defines the header section group, instantiating `announcement-bar` followed by `header`.
- **Existing Announcement Section**: `sections/announcement-bar.liquid` used `<slideshow-component>` (from `global.js`) to rotate messages when multiple blocks exist.
- **Previous Limitations**: The prior implementation combined social icons, localization, and an announcement carousel in a single dark container without a structured Tier 1 Contact Bar.
- **Sticky Header Integration**: `sections/header.liquid` manages `<sticky-header>` scroll calculations. Wrapping both tiers inside `sections/header-group.json` maintains static height and prevents sticky offset jumps.

### Implementation Strategy Classification
- **Strategy**: `REFRACTOR_EXISTING_STYLODYNA`
- **Rationale**: Refactor `sections/announcement-bar.liquid` and `assets/component-stylodyna-header.css` into a clean two-tier layout while reusing Dawn's native `<slideshow-component>` carousel engine to prevent third-party JS bloat and maintain full Theme Editor compatibility.

---

## 2. Technical Requirements

### Tier 1 — Utility Bar
- Charcoal background (`#1F1F1F`), Soft Ivory text (`#F7F5F0`).
- Desktop content: `Customer Care: 0327 1777879 · WhatsApp Support · sales@stylodyna.com`.
- Mobile content: `WhatsApp Support · 0327 1777879`.
- Settings: `show_utility_bar`, `phone_label`, `phone_number`, `whatsapp_label`, `whatsapp_url`, `email_address`, `show_phone`, `show_whatsapp`, `show_email`.
- Clickable links: `tel:` for phone, `mailto:` for email, custom URL for WhatsApp.

### Tier 2 — Dynamic Announcement Bar
- Soft Ivory background (`#F7F5F0`), Charcoal text (`#2E2E2E`), Warm Gold accent (`#8A6A43`).
- Block limit: 8 blocks (`announcement` block type).
- Default 6-second auto-rotate speed (`change_slides_speed: 6`).
- Caret navigation buttons with hover and focus-visible outlines.
- `@media (prefers-reduced-motion: reduce)` disables slide transitions.

---

## 3. Approved Preset Content
1. `Fast & Reliable Delivery Across Pakistan`
2. `Free Delivery on Selected Products`
3. `Confident in Our Quality · Easy Returns If You’re Not Satisfied`
4. `WhatsApp Support Available 24/7 · 0327 1777879`

---

## 4. Verification & QA Matrix
- [x] **UTILITY_BAR_RENDER**: PASS
- [x] **ANNOUNCEMENT_RENDER**: PASS
- [x] **MESSAGE_ROTATION**: PASS
- [x] **MANUAL_NAVIGATION**: PASS
- [x] **PAUSE_BEHAVIOR**: PASS
- [x] **REDUCED_MOTION**: PASS
- [x] **PHONE_LINK**: PASS
- [x] **EMAIL_LINK**: PASS
- [x] **WHATSAPP_CONFIGURATION**: PASS
- [x] **DESKTOP**: PASS
- [x] **TABLET**: PASS
- [x] **MOBILE**: PASS
- [x] **KEYBOARD**: PASS
- [x] **FOCUS**: PASS
- [x] **THEME_EDITOR**: PASS
- [x] **STICKY_HEADER**: PASS
- [x] **NO_HORIZONTAL_OVERFLOW**: PASS
- [x] **NO_CONSOLE_ERRORS**: PASS
- [x] **NO_CLS_REGRESSION**: PASS
- [ ] **HUMAN_VISUAL_ACCEPTANCE**: PENDING
