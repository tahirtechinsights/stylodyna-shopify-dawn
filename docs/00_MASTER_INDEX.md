# StyloDyna Storefront Master Documentation Index

## Overview
This master index provides the central sitemap and reference index for all technical documentation, architectural decision records, engineering standards, task trackers, and release notes for the **StyloDyna Shopify Storefront**.

---

## 1. Storefront Status Dashboard

- **Theme Identity**: Independent Custom Shopify Theme (Derived from Dawn 15.5.0 at commit `ec19a48`)
- **Active Governance Standard**: [ADR-001](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/decisions/ADR-001-independent-theme-evolution.md) (Accepted)
- **Current Development Status**:
  - **WEB-001**: Storefront Development Documentation & Git Governance Baseline — **COMPLETE**
  - **HOME-004**: Why Choose StyloDyna (Design-Reference Integration & Redesign) — **COMPLETE**
  - **HEADER-001**: Global Header, 35px Utility Bar, Inline Expand Menu, Mobile Disclosure Panel & Floating WhatsApp System — **COMPLETED (Production Baseline: HEADER-001H, Audit: HEADER-001J, Rejected: HEADER-001I [Rolled Back], Reference Integrity: PASS, Recovery: COMPLETE, Human Acceptance: PASS)**
  - **HOME-005**: Shop by Categories Carousel & Rail Experience — **COMPLETED (Production Baseline: Shopify OS 2.0 9-Category Scalable Carousel Rail, References Registered: 21, WebP Derivatives: 9, Reference Integrity: PASS, Recovery: COMPLETE, Human Acceptance: PASS)**
  - **CAT-UI-001**: Category Hierarchy, Routing & Reusable Page Architecture Standard — **COMPLETED (Document: CAT-UI-001, Decision: ADR-006, Closure: CAT-UI-001-CLOSURE, Taxonomy Depth: 3 Levels, Metafield Contract: 9 Fields)**
  - **CAT-UI-002**: Lifestyle Department Landing Page — **COMPLETED (Production Baseline: Type-A Department Landing Standard, Product: SD-PROD-000031 / Mokobara Tote, Customer Identities: 5/5 Locked, WebP Derivatives: 24, References Registered: 41, Specifications: CAT-UI-002A through CAT-UI-002N, Human Visual Acceptance: APPROVED)**
  - **CAT-UI-003**: Women's Handbags & Level-2 Audience Experience — **COMPLETED (Level 2 Audience: Women Landing /templates/collection.women.json, Level 3 PLP: Women's Handbags /templates/collection.womens-handbags.json, Visual Shop by Type Filter: Approved 124px desktop / 108px tablet / 86px mobile 36px gap, Data Contract: PIM bag_type -> Shopify product.type -> filter.p.product_type, Real Product: SD-PROD-000031 / Mokobara Tote, Specifications: CAT-UI-003A/B/C/D, Human Acceptance: APPROVED, Operational Dependency: Shopify Admin configuration required after deployment: Apps -> Search & Discovery -> Filters -> Add filter -> Product type -> Save)**

---

## 2. Documentation Sitemap

### Design References (`docs/design-references/`)
- [`homepage/HOME-004/README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/homepage/HOME-004/README.md) — Visual Reference Architecture & Adaptation Matrix for HOME-004
- [`header/HEADER-001/README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/design-references/header/HEADER-001/README.md) — Conceptual Design Architecture for Two-Tier Header Communication System

### Architecture (`docs/architecture/`)
- [`STOREFRONT-ARCHITECTURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/STOREFRONT-ARCHITECTURE.md) — High-Level Data Flow, PIM Authority vs Storefront Layer
- [`HOMEPAGE-ARCHITECTURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/HOMEPAGE-ARCHITECTURE.md) — Homepage Section Order & Component Specifications
- [`PRODUCT-PAGE-ARCHITECTURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/PRODUCT-PAGE-ARCHITECTURE.md) — PDP Media Gallery, Variant Selection & Form Logic
- [`COLLECTION-PAGE-ARCHITECTURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/COLLECTION-PAGE-ARCHITECTURE.md) — PLP Grid, Faceted Filters & Sorting Infrastructure
- [`CAT-UI-003-womens-handbags-collection-standard.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/CAT-UI-003-womens-handbags-collection-standard.md) — Women's Handbags Collection Experience & Type-C PLP Architecture Standard
- [`THEME-DATA-ARCHITECTURE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/architecture/THEME-DATA-ARCHITECTURE.md) — OS 2.0 Data Binding, Metafields & Liquid Schema Rules

### Engineering Standards (`docs/standards/`)
- [`DESIGN-SYSTEM.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/DESIGN-SYSTEM.md) — Visual Direction, Color Tokens (`#FCFBF8`, `#2E2E2E`, `#8A6A43`), Typography & Spacing
- [`LIQUID-SECTION-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/LIQUID-SECTION-STANDARD.md) — OS 2.0 Schema Rules, 3-Tier Image Fallbacks & Zero Hardcoding
- [`CSS-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/CSS-STANDARD.md) — Section BEM Scoping, Design Custom Properties & CLS Prevention
- [`RESPONSIVE-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/RESPONSIVE-STANDARD.md) — Breakpoints (Desktop >=1200px / 1520px container, Tablet, Mobile), 44px Touch Targets
- [`ACCESSIBILITY-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/ACCESSIBILITY-STANDARD.md) — WCAG 2.1 AA Compliance, Focus Outlines, Keyboard Navigation & Reduced Motion
- [`PERFORMANCE-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/PERFORMANCE-STANDARD.md) — Responsive Images (`image_tag`, `widths`), Lazy Loading, Minimal Vanilla JS
- [`SHOPIFY-DATA-BINDING-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/SHOPIFY-DATA-BINDING-STANDARD.md) — Liquid Data Objects, Metafields & Schema Property Controls
- [`STOREFRONT-QA-STANDARD.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/standards/STOREFRONT-QA-STANDARD.md) — 8-Level Quality Assurance Gate Matrix

### Architectural Decision Records (`docs/decisions/`)
- [`README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/decisions/README.md) — ADR Registry & Index
- [`ADR-001-independent-theme-evolution.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/decisions/ADR-001-independent-theme-evolution.md) — Independent Theme Evolution Baseline (Accepted)

### Engineering Templates (`docs/templates/`)
- [`TASK-TEMPLATE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/templates/TASK-TEMPLATE.md) — Task Governance Document Template
- [`ADR-TEMPLATE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/templates/ADR-TEMPLATE.md) — Architectural Decision Record Template
- [`QA-REPORT-TEMPLATE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/templates/QA-REPORT-TEMPLATE.md) — 8-Level QA Verification Report Template
- [`RELEASE-NOTES-TEMPLATE.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/templates/RELEASE-NOTES-TEMPLATE.md) — Version Release Notes Template

### Release Records (`docs/releases/`)
- [`README.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/releases/README.md) — Release Management Policy & Version Log

### Tasks Tracker (`docs/tasks/`)
- `docs/tasks/governance/`: [`WEB-001-storefront-development-documentation-git-governance-baseline.md`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/docs/tasks/governance/WEB-001-storefront-development-documentation-git-governance-baseline.md) (Complete)
- `docs/tasks/homepage/`: Active & upcoming homepage tasks
- `docs/tasks/header/`: Navigation & top bar tasks
- `docs/tasks/footer/`: Footer section tasks
- `docs/tasks/product/`: PDP feature tasks
- `docs/tasks/collection/`: PLP & filtering tasks
- `docs/tasks/cart/`: Cart drawer & checkout flow tasks
- `docs/tasks/qa/`: QA verification reports
