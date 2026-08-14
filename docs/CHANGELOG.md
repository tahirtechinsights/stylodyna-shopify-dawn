# StyloDyna Storefront Changelog

All notable changes to the StyloDyna storefront codebase will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]
### Added (HEADER-001 Two-Tier Communication System)
- Replaced previous single announcement container with a professional **Two-Tier Global Communication System** (`sections/announcement-bar.liquid` and `assets/component-stylodyna-header.css`).
- **Tier 1 (Utility Bar)**: Dark Charcoal (`#1F1F1F`) contact bar rendering persistent support details (`tel:`, `mailto:`, WhatsApp URL).
- **Tier 2 (Dynamic Announcement Bar)**: Soft Ivory (`#F7F5F0`) carousel rendering customer-facing trust and delivery announcements with controlled 6-second rotation interval.
- Configured 4 default approved messages (`Fast & Reliable Delivery Across Pakistan`, `Free Delivery on Selected Products`, `Confident in Our Quality · Easy Returns If You’re Not Satisfied`, `WhatsApp Support Available 24/7 · 0327 1777879`).
- Maintained sticky-header calculation compatibility and full Theme Editor merchant configuration controls.

---

## [1.0.0] - 2026-08-13
### Added (WEB-001 Governance Baseline)
> **Note**: WEB-001 marks the official baseline where formal technical documentation, architectural decision tracking, and Git governance began.

- Established permanent documentation architecture under `docs/` (`00_MASTER_INDEX.md`, `architecture/`, `standards/`, `decisions/`, `templates/`, `tasks/`, `releases/`).
- Authored **ADR-001**: Independent Theme Evolution Baseline, formally establishing StyloDyna as an independent custom theme derived from Shopify Dawn 15.5.0 at commit `ec19a48` and discontinuing upstream Dawn merges.
- Defined core engineering standards:
  - `DESIGN-SYSTEM.md`: Color palette tokens (`#FCFBF8`, `#2E2E2E`, `#8A6A43`, `#666666`, `#F7F5F0`), editorial typography, quiet luxury aesthetic.
  - `LIQUID-SECTION-STANDARD.md`: OS 2.0 section schemas, 3-tier image fallback pipeline, zero hardcoded IDs.
  - `CSS-STANDARD.md`: Section BEM scoping, custom properties, zero layout shift, reduced motion.
  - `RESPONSIVE-STANDARD.md`: Fluid breakpoint matrix (Desktop >=1200px / 1520px container, Tablet, Mobile), 44px touch targets.
  - `ACCESSIBILITY-STANDARD.md`: WCAG 2.1 AA compliance, focus states, keyboard tab navigation.
  - `PERFORMANCE-STANDARD.md`: Responsive images (`image_tag`, `srcset`), lazy loading, minimal vanilla JS.
  - `SHOPIFY-DATA-BINDING-STANDARD.md`: Liquid object bindings, metafields, schema properties.
  - `STOREFRONT-QA-STANDARD.md`: 8-level QA verification framework.
- Established Git branching model (`main`, `develop`, `feature/*`, `docs/*`, `fix/*`) and Conventional-Commit standards.
