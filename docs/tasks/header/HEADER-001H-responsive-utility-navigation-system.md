# TASK HEADER-001H — StyloDyna Utility Bar Responsive Navigation & Disclosure System

## Task Metadata
- **Task ID**: `HEADER-001H`
- **Parent Task**: `HEADER-001` — StyloDyna Utility Bar & Dynamic Announcement System
- **Domain**: `header / utility bar / responsive menu / mobile disclosure panel`
- **Base Branch**: `develop`
- **Feature Branch**: `feature/header-001-announcement-system`
- **Authoritative Reference Asset**: [`docs/design-references/header/HEADER-001/utility-bar/header-001h-responsive-utility-menu-reference.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/utility-bar/header-001h-responsive-utility-menu-reference.png) (`sha256: 7e1e3d0d39ebff0104bc821e3da16c15003b269c7161a841296b08a52ad8062d`)
- **Design Reference Integrity**: Verified via [`scripts/verify_design_references.ps1`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/scripts/verify_design_references.ps1) (**PASS**).
- **Status**: IMPLEMENTATION COMPLETE & RESPONSIVELY VERIFIED
- **Human Visual Acceptance**: PENDING REVIEW

---

## 1. Executive Architecture & Information Priority

### Progressive Disclosure Model
- **Level 1 (Always Accessible)**: Phone, WhatsApp, Email, Expand Control (`»`).
- **Level 2**: Central rotating live status (`● Coming Soon to DHA & Bahria Town, Lahore.`).
- **Level 3**: Right-aligned desktop social links (`Instagram`, `Facebook`).
- **Level 4**: Secondary utilities (`Visit Our Showrooms`, `Mon–Sun: 10AM–9PM`, `New Arrivals`, `Track Your Order`, `Help & Support`).

### Desktop Collapsed & Expanded System (`34–36px`)
- **Collapsed Structure**: `Phone · WhatsApp · Email (when space permits) · »` | `[Live Rotator Message]` | `[Social Icons]`
- **Alignment Guarantee**: Pinned items (`Phone`, `WhatsApp`, `Email`, `»`) and expanded items (`Visit Our Showrooms`, `Mon–Sun: 10AM–9PM`, `New Arrivals`, `Track Your Order`, `Help & Support`, `Close ×`) share the **EXACT SAME VERTICAL ALIGNMENT SYSTEM** (baseline, font weight, icon scale, separator height, vertical centering).
- **Expand Control (`»`)**: Sits immediately after contacts. Inherits contact typography (`color: #F7F5F0`, opacity `0.85`, hover/focus/open `color: #C7A24A`, `opacity: 1`).
- **Interaction Contract**:
  - `hover -> expand`
  - `click -> lock/open` (click-opened menu does **not** close simply because pointer leaves!).
  - `close via Close x, Escape, outside click, or mouse leave (ONLY when opened via hover)`.

### Mobile Strategy & Vertical Disclosure Panel (`< 990px`)
- **Collapsed Mobile Utility Bar**: `34–36px` (`min-height: 34px`). Actions: `☎ 0327 1777879 · WhatsApp · »`.
- **Dedicated Mobile Vertical Utility Disclosure Panel (`.stylodyna-mobile-utility-drawer`)**:
  - Tapping `»` opens a dedicated StyloDyna `#1F1F1F` charcoal vertical disclosure panel.
  - Structure:
    ```text
    ┌─────────────────────────────────┐
    │ Utility                         ×│
    ├─────────────────────────────────┤
    │ ✉  sales@stylodyna.com           │
    ├─────────────────────────────────┤
    │ Visit Our Showrooms             ›│
    ├─────────────────────────────────┤
    │ Mon–Sun: 10AM–9PM                │
    ├─────────────────────────────────┤
    │ New Arrivals                    ›│
    ├─────────────────────────────────┤
    │ Track Your Order                ›│
    ├─────────────────────────────────┤
    │ Help & Support                  ›│
    ├─────────────────────────────────┤
    │ Instagram   Facebook   YouTube   │
    └─────────────────────────────────┘
    ```
  - Touch targets: Minimum `48px` height per item for fast, error-free tapping.
  - Mobile interaction: `tap » -> open`, `tap × -> close`, `outside tap -> close`, `Escape -> close`.

---

## 2. Tested Viewport Matrix (100% Zoom)

| Viewport (px) | Utility Bar Height | Ticker Height | Main Header Height | Document Overflow | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1920 × 1080** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1728 × 900** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1600 × 900** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1536 × 864** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1440 × 900** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1366 × 768** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1280 × 800** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1200 × 800** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **1024 × 768** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **990 × 768** | 35 px | 30 px | 66 px | `scrollWidth === clientWidth` | **PASS** |
| **768 × 1024** | 35 px | 30 px | 60 px | `scrollWidth === clientWidth` | **PASS** |
| **430 × 932** | 35 px | 30 px | 58 px | `scrollWidth === clientWidth` | **PASS** |
| **390 × 844** | 35 px | 30 px | 58 px | `scrollWidth === clientWidth` | **PASS** |
| **375 × 812** | 35 px | 30 px | 58 px | `scrollWidth === clientWidth` | **PASS** |
