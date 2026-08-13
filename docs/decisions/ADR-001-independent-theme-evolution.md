# ADR-001: Independent Theme Evolution Baseline

## Status
**ACCEPTED** (Date: 2026-08-13)

## Context
The StyloDyna Storefront codebase was originally established using Shopify Dawn version 15.5.0 as an initial development scaffold. As custom sections, proprietary design tokens, tailored Online Store 2.0 schemas, and specialized commerce workflows were introduced to achieve StyloDyna's modern British, Scandinavian, and Japandi quiet luxury aesthetic, the codebase diverged significantly from stock Dawn.

On commit `ec19a48` (*StyloDyna official Release!*), StyloDyna reached a complete, self-sustaining architectural and aesthetic baseline. Attempting to continuously merge upstream releases of Shopify Dawn into this codebase introduces severe risk of regressions, conflicting styling rules, broken schema structures, and layout degradation.

## Decision
1. **Independent Theme Baseline**: StyloDyna is formally designated as an **independent, custom-built Shopify theme**.
2. **Upstream Dawn Discontinuation**: Shopify Dawn is no longer an active upstream merge source for this repository. No automated, scheduled, or routine upstream Dawn merges will take place.
3. **StyloDyna Governance & Standards**: All future feature development, architectural enhancements, accessibility improvements, performance optimizations, and bug fixes will be governed exclusively by internal StyloDyna engineering standards and documentation (`docs/standards/`).
4. **Shopify Platform & OS 2.0 Compliance**: The theme will maintain strict compliance with Shopify Online Store 2.0 standards, Liquid API updates, and native theme requirements directly from official Shopify platform specifications, independently of Dawn version cycles.

## Consequences
### Positive
- Full autonomy over design system tokens, Liquid section architecture, CSS modularization, and UX decisions.
- Elimination of merge conflicts and breaking changes introduced by external theme updates.
- Guaranteed stability for bespoke StyloDyna sections (`stylodyna-hero`, `stylodyna-featured-collections`, `stylodyna-brand-story`, `stylodyna-why-choose`, `stylodyna-about`).
- Clear engineering ownership and deterministic release cycles.

### Negative / Mitigations
- Future feature enhancements added to stock Dawn will not automatically flow into StyloDyna.
- *Mitigation*: Core platform feature updates (e.g. new Liquid filters, native web components, checkout extensions) will be selectively ported or developed natively following StyloDyna standards when business requirements dictate.
