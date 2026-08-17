# TASK HEADER-001G — Responsive Utility Bar with Inline Expand Menu & Mobile UX Remediation

## Task Metadata
- **Task ID**: `HEADER-001G`
- **Parent Task**: `HEADER-001` — StyloDyna Utility Bar & Dynamic Announcement System
- **Domain**: `header / utility bar / responsive menu / mobile UX`
- **Base Branch**: `develop`
- **Feature Branch**: `feature/header-001-announcement-system`
- **Authoritative Reference Asset**: [`docs/design-references/header/HEADER-001/utility-bar/header-001g-responsive-utility-expand-menu-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/utility-bar/header-001g-responsive-utility-expand-menu-reference.png) (`sha256: de851e60d0563456877f59977a30db5a806392dfa805c49258bf7fa6aeadae99`)
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**PASS**).
- **Status**: REMEDIATION COMPLETE & VERIFIED
- **Human Visual Acceptance**: PENDING REVIEW

---

## 1. Information Priority & Architecture Model

- **Level 1 (Always Accessible)**: Phone, WhatsApp, Email, Expand Control (`>>`)
- **Level 2**: Live message / green indicator
- **Level 3**: Social links (Instagram, Facebook)
- **Level 4**: Showrooms, Mon–Sun hours, New Arrivals, Track Order, Help & Support

### Email Fallback Architecture
1. **Large Desktop (`>= 1440px`)**: Full `[Email Icon] sales@stylodyna.com` inline.
2. **Small Desktop / Laptop (`990px - 1439px`)**: Compact `[Email Icon]` in first column with rich micro popover (`Email Us`, `sales@stylodyna.com`, response window subtext, `Compose Email →`).
3. **Mobile / Compact (`< 990px`)**: Compact `[Email Icon]` in base bar + Email address item (`sales@stylodyna.com` -> `mailto:sales@stylodyna.com`) inside expanded `>>` menu as the FIRST item.

---

## 2. Visual Style & Geometry Contract

1. **Expand Control (`>>`)**:
   - Idle state: `#F7F5F0` (opacity `0.85`), `14px` visual height, `26px × 26px` touch wrapper, vertically aligned on centerline with contact icons.
   - Hover / Focus / Expanded state: `#C7A24A` (opacity `1`), transition `180ms ease`.

2. **Mobile Heights Rhythm (`< 990px`)**:
   - Collapsed Utility Bar: `34px` (`min-height: 34px`).
   - Mobile Ticker: `30px` (`min-height: 30px`, font size `11.5px`).
   - Mobile Main Header: `56–60px` (`padding-block: 0.5rem`).

3. **Center Live Message Smart Popover**:
   - Text container uses `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`.
   - JS checks `scrollWidth > clientWidth`: Hover/focus on truncated text exposes the complete message in a quiet `#1F1F1F` micro popover. Untruncated text does NOT show a popover.

---

## 3. Mandatory Functional QA Scorecard

```
EMAIL_VISIBLE_OR_ACCESSIBLE: PASS
EMAIL_MENU_LINK: PASS (mailto:sales@stylodyna.com in expanded menu)
EXPAND_ARROW_ALIGNMENT: PASS (Vertically aligned with Phone, WhatsApp & Email icons)
EXPAND_ARROW_IDLE_COLOR: PASS (#F7F5F0, opacity 0.85)
EXPAND_ARROW_HOVER_COLOR: PASS (#C7A24A, opacity 1)
EXPAND_HORIZONTAL: PASS (Expands left-to-right over center region)
EXPAND_CLOSE: PASS (Close x button, Escape key, outside click)
MOBILE_EXPAND: PASS (Tap >> opens full-width horizontal tray)
CENTER_MESSAGE_POPOVER: PASS (Shown on hover/focus when scrollWidth > clientWidth)
SOCIAL_RESPONSIVE_FALLBACK: PASS (Moves into expanded menu on mobile/compact viewports)
UTILITY_HEIGHT_MOBILE: 34px
TICKER_HEIGHT_MOBILE: 30px
MAIN_HEADER_HEIGHT_MOBILE: 58px
HORIZONTAL_OVERFLOW: PASS (scrollWidth === clientWidth)
REFERENCE_INTEGRITY: PASS (9/9 registered reference assets verified via SHA-256)
```
