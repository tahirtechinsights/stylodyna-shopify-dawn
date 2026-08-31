# FOOTER-001 — Global Footer Refinement Specification

## Objective
Refine the global StyloDyna storefront footer across all desktop, tablet, and mobile viewports to align with StyloDyna's quiet-luxury brand aesthetic, Charcoal (`#1F1F1F`) visual system, updated contact identity, official social channels (including LinkedIn support), governed newsletter subscription messaging, and Shopify-native data contracts.

- **Task Key**: `FOOTER-001`
- **Scope**: Global Theme Footer (Mounted via [`sections/footer-group.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/footer-group.json) in [`layout/theme.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/layout/theme.liquid))
- **Status**: **COMPLETE**
- **Human Acceptance**: **APPROVED**

---

## Audited Baseline

- **Base Branch**: `develop`
- **Base Commit**: `ccf6ad7`
- **Architecture**: Shopify OS 2.0 Global Section Group (`sections/footer-group.json`) rendering section [`sections/footer.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/footer.liquid) with custom stylesheet [`assets/section-footer.css`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/section-footer.css).

---

## Approved Requirements & Final Implementation

1. **Charcoal Design System Treatment**:
   - Surface background: Solid Charcoal `#1F1F1F`
   - Headings: Soft Ivory `#FAF9F5` (`font-family: var(--font-heading-family)`, 18px bold)
   - Body & contact details text: Warm Muted Gray `#CCCCCC` (`1.5rem` / `1.6rem`)
   - Links: `rgba(255, 255, 255, 0.75)` (Hover: `#FFFFFF`, underline)
   - Subtle borders & dividers: `rgba(255, 255, 255, 0.12)`

2. **Contact Identity**:
   - Address: `First Floor, Jasmine Mall Sector C, Bahria Town Lahore`
   - Phone: `+92 327 1777879` (Formatted `<a href="tel:+923271777879">`)
   - General Email: `contact@stylodyna.com` (`<a href="mailto:contact@stylodyna.com">`)
   - Sales Email: `sale@stylodyna.com` (`<a href="mailto:sale@stylodyna.com">`)

3. **Logo & Brand Mark Architecture**:
   - Primary Path: `section.settings.logo` (Theme Editor image picker).
   - Fallback Path: Approved gold mark derivative asset [`assets/stylodyna-logo-mark-gold-footer.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-logo-mark-gold-footer.png) rendered at 38px width alongside `<h2 class="stylodyna-footer__store-name">StyloDyna</h2>` with `transform: translateY(-0.1rem)` optical adjustment.
   - **Derivative Provenance**: Created `assets/stylodyna-logo-mark-gold-footer.png` from master asset `assets/stylodyna-logo-mark-gold.png` via crop-only transformation (cropped asymmetrical transparent padding from 1254x1254 to 1222x1208), ensuring perfect optical baseline alignment with the wordmark without recoloring or redraw.

4. **Social Channel Architecture & LinkedIn Integration**:
   - Display Order: Instagram, TikTok, YouTube, LinkedIn, Facebook.
   - Reusable LinkedIn support added to global theme settings (`social_linkedin_link`), [`snippets/social-icons.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/snippets/social-icons.liquid), [`assets/icon-linkedin.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/icon-linkedin.svg), and [`locales/en.default.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/locales/en.default.json).
   - Removed X/Twitter link. Removed fake `href="#"` fallback icons. On mobile, the 5 social controls share primary left alignment with the contact details block.

5. **Company Navigation**:
   - Fallback links: `About Us`, `Our Stores`, `Contact Us`. Removed `Size Guide` & `My Account`.
   - Shopify Navigation (`section.settings.company_menu`) remains source of truth.

6. **Customer Service Navigation**:
   - Fallback links: `Privacy Policy`, `Refund Policy`, `Shipping & Return`, `Terms & Conditions`, `FAQs`, `Store Locations`. Updated `Theme FAQs` to `FAQs`.
   - Shopify Navigation (`section.settings.service_menu`) remains source of truth.

7. **Newsletter Refinement**:
   - Heading: `Subscribe to StyloDyna`
   - Description: `Discover new arrivals, curated collections, styling inspiration and selected offers.`
   - Placeholder: `Email address`
   - Clean vertical desktop composition (Heading → Description → Input → Subscribe button) with full mobile responsiveness.
   - Preserves Shopify form semantics `{% form 'customer', id: 'ContactFooter' %}`.

8. **Payment Rendering Contract**:
   - Primary Source: `shop.enabled_payment_types` when store payment gateways are active.
   - Merchant Fallback: When store payment gateways are unconfigured, fallback toggle (`payment_fallback_enable`) renders governed 7-method fallback list (`visa, master, discover, western_union, american_express, cirrus, paypal`) using Shopify's native `payment_type_svg_tag`.

9. **Lower Footer & Bottom Bar**:
   - True 3-Zone Desktop Grid (`grid-template-columns: 1fr auto 1fr;`): Localization left, copyright string mathematically centered in middle, 7 payment method SVGs anchored right.

---

## Preservation Boundary

- **MUST NOT ALTER**:
  1. [`layout/theme.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/layout/theme.liquid)
  2. [`sections/footer-group.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/footer-group.json)
  3. Shopify customer form submission logic (`{% form 'customer', id: 'ContactFooter' %}`)
  4. Dynamic payment SVG generation
  5. Localization selector components
  6. Any collection, product, or category landing templates

---

## Affected Files

- [`sections/footer.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/sections/footer.liquid) (Modified)
- [`assets/section-footer.css`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/section-footer.css) (Modified)
- [`config/settings_schema.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/config/settings_schema.json) (Modified)
- [`snippets/social-icons.liquid`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/snippets/social-icons.liquid) (Modified)
- [`locales/en.default.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/locales/en.default.json) (Modified)
- [`assets/icon-linkedin.svg`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/icon-linkedin.svg) (New File)
- [`assets/stylodyna-logo-mark-gold-footer.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-logo-mark-gold-footer.png) (New Derivative File)
- [`assets/stylodyna-logo-mark-gold.png`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/assets/stylodyna-logo-mark-gold.png) (Master Gold Asset)

---

## Operational Shopify Admin Dependencies

1. **Theme Editor Settings**: Assign social destination URLs (`Instagram`, `TikTok`, `YouTube`, `LinkedIn`, `Facebook`), contact details (`address`, `phone`, `email`, `sales_email`), and footer background `#1F1F1F`.
2. **Shopify Navigation**: Assign governed `Company` and `Customer Service` menus under **Shopify Admin > Navigation > Menus**.
