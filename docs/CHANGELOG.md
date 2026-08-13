# StyloDyna Storefront Changelog

All notable changes to the StyloDyna storefront codebase will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]
### Added (HOME-004 Design-Reference Integration)
- Implemented **Why Choose StyloDyna** homepage section (`sections/stylodyna-why-choose.liquid` and `assets/section-stylodyna-why-choose.css`) using the approved asymmetrical design reference (`docs/design-references/homepage/HOME-004/why-choose-layout-reference-01.png`).
- Left Editorial Column: Eyebrow (`WHY CHOOSE STYLODYNA`), Heading (`Why Choose StyloDyna?`), Supporting copy, optional CTA, and merchant-configurable lifestyle visual (`image_picker`).
- Right Column: 2 × 2 Trust-Card Grid (`Timeless Design`, `Premium Craftsmanship`, `Reliable Delivery`, `Dedicated Support`) with soft ivory card containers (`#F7F5F0`), 2px stroke monochrome SVG line icons (`aria-hidden="true"`), and hover lift interaction.
- Established Design References Governance Framework under `docs/design-references/`.

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
