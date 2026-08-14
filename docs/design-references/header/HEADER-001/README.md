# Design Reference README — HEADER-001 (Utility Bar & Dynamic Announcement System)

## Reference Metadata
- **Task ID**: `HEADER-001`
- **Domain**: `header`
- **Status**: APPROVED CONCEPTUAL ARCHITECTURE

---

## 1. Reference Purpose
This document defines the conceptual design, layout hierarchy, motion strategy, and design system token mapping for the **StyloDyna Two-Tier Global Communication System** (`sections/announcement-bar.liquid`).

---

## 2. Visual Hierarchy & Conceptual Architecture

```
┌──────────────────────────────────────────────────────────────┐
│ TIER 1: UTILITY / CONTACT BAR                                │
│ Background: Charcoal (#1F1F1F) | Text: Soft Ivory (#F7F5F0)  │
│ Customer Care: 0327 1777879 · WhatsApp Support · Email       │
├──────────────────────────────────────────────────────────────┤
│ TIER 2: DYNAMIC ANNOUNCEMENT BAR                             │
│ Background: Soft Ivory (#F7F5F0) | Text: Charcoal (#2E2E2E)  │
│ ‹   Fast & Reliable Delivery Across Pakistan   ›            │
├──────────────────────────────────────────────────────────────┤
│ MAIN HEADER                                                  │
│ Logo       Navigation                   Search Account Cart  │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Tier Specifications

### Tier 1 — Utility / Contact Bar
- **Purpose**: Persistent customer support and direct communication channels.
- **Background**: `#1F1F1F` (Charcoal / near-black)
- **Text Color**: `#F7F5F0` (Soft Ivory)
- **Typography**: Compact sans-serif, `1.2rem`–`1.3rem`, `font-weight: 500`, letter-spacing `0.06em`.
- **Desktop Layout**: Single horizontal row displaying `Customer Care: 0327 1777879 · WhatsApp Support · sales@stylodyna.com`.
- **Mobile Layout**: Streamlined row displaying `WhatsApp Support · 0327 1777879`.
- **Link Behavior**: `tel:` for phone numbers, `mailto:` for email, configurable URL for WhatsApp.

### Tier 2 — Dynamic Announcement Bar
- **Purpose**: Customer-facing promotional, service, and trust announcements.
- **Background**: `#F7F5F0` (Soft Ivory / light neutral)
- **Text Color**: `#2E2E2E` (Charcoal), accent Warm Gold `#8A6A43`.
- **Typography**: `1.3rem`–`1.4rem`, `font-weight: 500`, letter-spacing `0.05em`.
- **Rotation Engine**: Controlled horizontal carousel (`slideshow-component`), default 6-second rotation interval.
- **Motion Controls**: Caret navigation arrows (`icon-caret.svg`), pause on hover and keyboard focus.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling slide transitions.

---

## 4. Approved Preset Messages
1. **Message 01**: `Fast & Reliable Delivery Across Pakistan`
2. **Message 02**: `Free Delivery on Selected Products`
3. **Message 03**: `Confident in Our Quality · Easy Returns If You’re Not Satisfied`
4. **Message 04**: `WhatsApp Support Available 24/7 · 0327 1777879`
