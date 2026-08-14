# TASK HEADER-001 — STYLODYNA UTILITY BAR & DYNAMIC ANNOUNCEMENT SYSTEM

## Task Metadata
- **Task ID**: `HEADER-001`
- **Title**: Utility Bar & Dynamic Announcement System
- **Domain**: `header`
- **Design References**: [`docs/design-references/header/HEADER-001/`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/)
- **Status**: COMPLETE
- **Git Branch**: `feature/header-001-announcement-system`
- **Git Commit**: `feat(header): add utility and dynamic announcement system`
- **Git Commit Hash**: `51ee2f2`
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
- [x] **UTILITY_BAR_RENDER**: PASS — Solid Charcoal `#1F1F1F` contact bar rendered cleanly.
- [x] **ANNOUNCEMENT_RENDER**: PASS — Soft Ivory `#F7F5F0` announcement bar with centered text.
- [x] **MESSAGE_ROTATION**: PASS — Controlled 6-second auto-rotate speed using native `<slideshow-component>`.
- [x] **AUTO_ROTATION_LIVE_PREVIEW**: PASS — Verified 4 default messages cycle automatically in live preview.
- [x] **MANUAL_NAVIGATION**: PASS — Caret buttons hidden by default (`show_nav_buttons: false`).
- [x] **PAUSE_BEHAVIOR**: PASS — Auto-rotation pauses on hover and focus.
- [x] **REDUCED_MOTION**: PASS — Animation disabled for `prefers-reduced-motion: reduce`.
- [x] **PHONE_LINK**: PASS — `tel:` protocol.
- [x] **EMAIL_LINK**: PASS — `mailto:` protocol.
- [x] **WHATSAPP_CONFIGURATION**: PASS — Configurable destination URL.
- [x] **DESKTOP**: PASS — Single row utility + centered announcement + 40% Charcoal `#2E2E2E` transparent header overlay over hero.
- [x] **TABLET**: PASS — Responsive layout without horizontal overflow.
- [x] **MOBILE**: PASS — Streamlined contact info (`WhatsApp Support · 0327 1777879`) + centered announcement.
- [x] **KEYBOARD**: PASS — Keyboard focusable controls.
- [x] **FOCUS**: PASS — Visible focus rings.
- [x] **THEME_EDITOR**: PASS — Full merchant settings exposure.
- [x] **STICKY_HEADER**: PASS — Smooth transition to Stone White `#FCFBF8` background on scroll.
- [x] **NO_HORIZONTAL_OVERFLOW**: PASS — Zero horizontal scroll.
- [x] **NO_CONSOLE_ERRORS**: PASS — Clean JavaScript execution.
- [x] **NO_CLS_REGRESSION**: PASS — Zero cumulative layout shift.
- [ ] **HUMAN_VISUAL_ACCEPTANCE**: PENDING

---

## HEADER-001A — Visual Reference Integration Refinement
- **Authoritative Reference**: [`docs/design-references/header/HEADER-001/header-001a-transparent-header-reference-01.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/header-001a-transparent-header-reference-01.png)
- **Main Header Overlay**: StyloDyna Charcoal `#2E2E2E` with 40% alpha (`rgba(46, 46, 46, 0.40)`) over homepage hero image, clean CSS selector specificity without `!important` flags.
- **Full-Opacity Foreground**: Logo, navigation links, and icons retain 100% full opacity in Soft Ivory (`#F7F5F0`).
- **Announcement Navigation Arrows**: Set `show_nav_buttons` to `false` for clean, un-cluttered editorial appearance.
