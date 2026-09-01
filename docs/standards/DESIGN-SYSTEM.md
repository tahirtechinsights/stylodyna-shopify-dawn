# StyloDyna Design System v2 Specification

## 1. Authority & Governance Hierarchy

This document is the supreme visual, architectural, and UI authority for the StyloDyna storefront. All design decisions, code modifications, component implementations, and documentation must adhere strictly to the governance hierarchy below:

```text
                  BRAND IDENTITY & STRATEGIC POSITIONING
                                    │
                                    ▼
                         STYLODYNA DESIGN SYSTEM V2
                  (Canonical Visual & UI Surface Authority)
                                    │
                                    ▼
                          ENGINEERING STANDARDS
       (RESPONSIVE-STANDARD, CSS-STANDARD, ACCESSIBILITY-STANDARD, etc.)
                                    │
                                    ▼
                         COMPONENT SPECIFICATIONS
                 (CAT-UI-003, FOOTER-001, PDP Architecture)
                                    │
                                    ▼
                          TASK IMPLEMENTATION
```

- **Supreme Visual Authority**: `DESIGN-SYSTEM.md` governs all visual aesthetics, token contracts, UI components, surface behaviors, and brand expression.
- **Specialist Engineering Standards**: `RESPONSIVE-STANDARD.md`, `CSS-STANDARD.md`, and `ACCESSIBILITY-STANDARD.md` govern technical implementation mechanics. They must align with this document and must not silently override visual doctrine.
- **Component & Task Specifications**: May specialize Design System rules for specific feature requirements but must not silently contradict global visual doctrine.
- **Design System Exceptions**: Any intentional deviation requires an explicit, documented [`DESIGN SYSTEM EXCEPTION`](#11-design-system-compliance-gate) approved by human governance.

---

## 2. Brand Foundation & Strategic Positioning

### 2.1 Strategic Positioning
StyloDyna is a contemporary, design-led lifestyle commerce brand positioned in the **accessible-premium** space.

- **Core Strategic Principle**: **Curation over quantity.**
- **Brand Personality**: Refined · Contemporary · Warm · Confident · Sophisticated · Trustworthy · Intentional · Understated.
- **Prohibited Experience Tropes**: The storefront interface must never become cheap, loud, cluttered, gimmicky, pushy, marketplace-like, excessively promotional, or artificially luxurious.
- **Origin & Regional Positioning**: Contemporary British-inspired lifestyle positioning is permitted. However, documentation and storefront copy must **not** state or imply that StyloDyna is legally incorporated or headquartered in the UK unless formally verified.

### 2.2 Brand Voice & Tagline Status
- **Verbal Identity Core**: Refined · Clear · Warm · Confident · Restrained.
- **Provisional Brand Tagline**:
  > `STYLE THAT MOVES WITH YOU`
  > **STATUS**: PROVISIONAL BRAND TAGLINE / HUMAN CONFIRMATION REQUIRED
  > *Note*: This tagline is provisional and must not be treated as locked brand doctrine without explicit human confirmation.
- **Campaign Slogan**:
  > `PRIVATE. PERSONAL. YOURS.`
  > **STATUS**: CAMPAIGN-SPECIFIC SLOGAN (Not a global brand tagline).

---

## 3. Visual Philosophy & Design Language

### 3.1 Canonical Visual Direction
Contemporary editorial minimalism characterized by warmth, material richness, restrained metallic accents, and structural charcoal anchors.

- **Design Influences**: Contemporary British, Scandinavian, Japandi, and editorial commerce.
- **Preferred Visual Patterns**:
  - Generous negative space and breathable vertical rhythm
  - Clear visual hierarchy and intentional alignment
  - Warm neutral surface environments
  - Solid Charcoal `#1F1F1F` structural anchors for CTAs, header utilities, and global footers
  - Restrained metallic gold detailing (`#8A6A43`)
  - High-fidelity editorial imagery and realistic tactile materials
  - Controlled information density and quiet, functional interaction states
- **Prohibited Visual Tropes**:
  - Loud or neon promotional callouts
  - Heavy, cartoonish drop shadows or gratuitous card elevation
  - Marketplace visual clutter (dense badge overlays, flashing timers, chaotic grids)
  - Excessive or indiscriminate pill-shaped UI components
  - Oversaturated background colors or aggressive decorative gradients
  - Attention-seeking or non-functional animations

---

## 4. Color System & Surface Contracts

### 4.1 Foundations & Digital UI Palette
The StyloDyna color system balances warm editorial backgrounds with high-contrast structural dark surfaces:

```css
:root {
  /* Light Surface System (Editorial & Commerce) */
  --sd-color-bg-primary: #FCFBF8;       /* Primary Editorial Background (Stone White) */
  --sd-color-bg-soft: #F7F5F0;          /* Soft Container & Surface Background (Soft Ivory) */
  --sd-color-bg-warm: #EFE8DD;          /* Warm Surface & Border Accent (Sand Beige) */

  /* Text & Typography System */
  --sd-color-text-primary: #2E2E2E;     /* Primary Text & Dark Headings (Charcoal) */
  --sd-color-text-secondary: #666666;   /* Subtitles, Meta & Body Copy (Warm Gray) */
  --sd-color-text-inverse: #FFFFFF;     /* Inverse Text on Dark Surfaces */

  /* Dark Surface System (Anchors, Utility & Footer) */
  --sd-color-surface-dark: #1F1F1F;     /* Primary Dark Surface & CTA Background */
  --sd-color-surface-dark-hover: #000000; /* Primary Dark Surface Hover State */
  --sd-color-heading-dark: #FAF9F5;     /* High-Contrast Heading on Dark Surface (Soft Ivory) */
  --sd-color-text-dark: #CCCCCC;        /* High-Contrast Body Text on Dark Surface */

  /* Action & Accent Tokens */
  --sd-color-action-primary: #1F1F1F;   /* Primary Button & Key Action Background */
  --sd-color-action-primary-hover: #000000;
  --sd-color-accent-brand: #8A6A43;     /* Digital Brand Accent Gold (Eyebrows & Strokes) */

  /* Structural Border Tokens */
  --sd-color-border-subtle: rgba(0, 0, 0, 0.08); /* Subtle Light Border */
  --sd-color-border-standard: rgba(0, 0, 0, 0.14); /* Standard Light Border */
  --sd-color-border-strong: rgba(0, 0, 0, 0.22);   /* Strong Light Border */
  --sd-color-border-inverse-subtle: rgba(255, 255, 255, 0.12); /* Subtle Dark Border */
  --sd-color-border-inverse-standard: rgba(255, 255, 255, 0.20); /* Standard Dark Border */
}
```

### 4.2 Gold & Metallic Governance
To prevent color fragmentation, gold usage is governed by strict functional boundaries:

1. **Digital UI Accent (`#8A6A43`)**: The single canonical HEX token for text eyebrows, subtle icon strokes, and digital UI highlights.
2. **Approved Metallic Raster Artwork**: Production raster logos and approved gold mark assets (e.g., `stylodyna-logo-mark-gold-footer.png`) contain natural metallic gradients. CSS HEX colors must **not** be sampled or derived from raster artwork.
3. **Legacy / Component-Specific Values (`#B5965A`, `#C7A24A`)**: Preserved as component-local candidates for future review during component tasks (such as `HEADER-001`). They must **not** be promoted to global foundation tokens.
4. **Gold Subordination**: Gold is a restrained accent and must remain subordinate to primary Charcoal `#1F1F1F` / Black `#000000` commerce actions.
5. **Creative / Environmental Palette**: Sage, dark olive (`#4E5B46`), walnut, and greenery belong to photography and lifestyle styling. They do not constitute primary UI/CTA tokens.

---

## 5. Typography System & Semantic Roles

### 5.1 Semantic Two-Family Architecture
StyloDyna enforces a dual-family typography model based on semantic role rather than arbitrary element tags:

- **Editorial & Display Role (`Cormorant Garamond`)**: Used for hero statements, campaign titles, brand-story headings, and high-level storytelling features.
- **Commerce & UI Role (`Inter`)**: Used for body copy, navigation, buttons, form inputs, filter controls, product titles, prices, utility text, search, account, cart, and functional headings.

```css
:root {
  --sd-font-display: var(--font-heading-family); /* Cormorant Garamond (via Shopify Font Picker) */
  --sd-font-ui: var(--font-body-family);         /* Inter (via Shopify Font Picker) */
}
```

> **Implementation Note**: Merchant font configuration remains fully editable in Shopify Theme Editor (`type_header_font` and `type_body_font`). Current `Assistant` settings in legacy configuration represent baseline data to be updated during deliberate typography implementation tasks.

### 5.2 Semantic Role Mapping & Implementation Evidence
- **Hero Display XL**: Editorial Cormorant Garamond display title for top-level brand statements.
- **Section Heading H1**: Editorial Cormorant Garamond for major section headers.
- **Sub-Section Heading H2**: Cormorant Garamond or Inter for secondary titles.
- **Component Heading H3**: Inter for structural card and component headings.
- **Body Large**: Inter for introductory body paragraphs.
- **Body Standard**: Inter for standard copy and links.
- **Body Small / Meta**: Inter for captions, copyright, and metadata.
- **Button Text**: Inter 600 for action buttons and interactive controls.
- **Implementation Evidence**: Existing component-specific eyebrow treatments (such as `13px`, `tracking 0.18em`, `uppercase`, `#8A6A43` in hero or header sections) represent valid component-level evidence, **not** a canonical global typography contract. Detailed eyebrow/label metrics remain a **PENDING SPECIFICATION**.

---

## 6. Spacing, Rhythm & Container Systems

### 6.1 Base Unit & Spacing Scale
StyloDyna spacing is built on a **4px base grid**:

`0` · `4px` · `8px` · `12px` · `16px` · `20px` · `24px` · `32px` · `40px` · `48px` · `56px` · `64px` · `80px` · `96px` · `120px`

### 6.2 Responsive Section Vertical Rhythm
Sections must apply proportional vertical padding based on content density:

| Density Tier | Desktop (`>= 1200px`) | Tablet (`750px – 1199px`) | Mobile (`< 750px`) |
| :--- | :--- | :--- | :--- |
| **Editorial Density** | `96px` (`9.6rem`) | `80px` (`8.0rem`) | `64px` (`6.4rem`) |
| **Standard Density** | `80px` (`8.0rem`) | `64px` (`6.4rem`) | `48px` (`4.8rem`) |
| **Compact Density** | `56px` (`5.6rem`) | `48px` (`4.8rem`) | `40px` (`4.0rem`) |

*Component Exception Rule*: Existing human-approved component-specific vertical rhythms (such as the accepted `68px` / `54px` / `40px` category landing rhythm) represent valid, documented component exceptions and must not be altered arbitrarily.

### 6.3 Container System & Grid Breakpoints
Storefront layouts must utilize standardized container widths and responsive breakpoints:

```text
FULL BLEED CONTAINER  ─── No max-width limit (100% viewport background surfaces)
WIDE CONTAINER        ─── max-width: 1520px (Primary storefront layout wrapper)
STANDARD CONTAINER    ─── max-width: 1320px (Standard section container)
COMPACT CONTAINER     ─── max-width: 1200px (Accepted FOOTER-001 & compact section width)
READING CONTAINER     ─── max-width: 760px  (Editorial copy & article blocks)
```

- **Responsive Breakpoint Matrix**:
  - **Desktop (`>= 1200px`)**: 12-Column Grid · Minimum Gutters: `32px`
  - **Tablet (`750px – 1199px`)**: 8-Column Grid · Minimum Gutters: `24px`
  - **Mobile (`< 750px`)**: 4-Column Grid · Minimum Gutters: `16px` – `20px`

---

## 7. Shape Language, Radius, Borders & Elevation

### 7.1 Radius System
Corner radius must remain subtle and structured. Large rounded floating cards and excessive pill shapes are prohibited:

- `0`: Sharp, architectural containers and structural dividers
- `3px` (`0.3rem`): **Canonical Component Radius** (Buttons, form inputs, subtle cards, badge tags)
- `6px` (`0.6rem`): Medium containers, dialog overlays, dropdown popovers
- `10px` (`1.0rem`): Large modal containers
- `9999px`: Full pill radius (Strictly reserved for functional interactive toggles or circular social buttons; **not** the default card shape)

### 7.2 Borders & Dividers
- **Default Structural Border**: `1px` solid (`rgba(0,0,0,0.08)` on light surfaces; `rgba(255,255,255,0.12)` on dark surfaces).
- **Active / Focused Border**: `2px` solid (`#1F1F1F` or `#FAF9F5`).

### 7.3 Elevation & Shadows
StyloDyna prefers **border-first visual separation**. Elevation must remain restrained:
- **Level 0 (Flat)**: Standard containers with subtle borders.
- **Level 1 (Raised)**: Subtle hover elevation (`box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.06)`).
- **Level 2 (Overlay)**: Modals, drawers, and popovers (`box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.15)`).

---

## 8. Button & Action System

### 8.1 Hierarchy & Styling

```text
PRIMARY ACTION      ─── Solid Charcoal #1F1F1F BG | Text #FFFFFF | 3px Radius | Inter 600
                       Hover: Solid Black #000000
SECONDARY ACTION    ─── Transparent BG | Border 1px #1F1F1F | Text #1F1F1F | 3px Radius | Inter 600
                       Hover: Background rgba(0, 0, 0, 0.05)
TERTIARY / TEXT     ─── Text-led minimal action | Underline transition | Inter 600
INVERSE ACTION      ─── Solid Soft Ivory #FAF9F5 BG | Text #1F1F1F | 3px Radius | Inter 600
                       Hover: Solid White #FFFFFF
```

- **Gold CTA Restriction**: Gold (`#8A6A43`) is **not** a primary CTA background color. All primary commerce actions use Charcoal `#1F1F1F`.
- **Casing**: Button labels use sentence case or title case by default. Uppercase is selective for editorial CTAs.
- **Touch Target Requirement**: All mobile interactive buttons and controls must maintain a usable touch target height of **`>= 44px`** (52px preferred for primary mobile CTAs).

---

## 9. Logo, Brand Mark & Asset Governance

### 9.1 Approved Lockups
StyloDyna brand representation is governed by three canonical master lockups:
1. **Primary Horizontal Lockup**: Brand Monogram + `StyloDyna` Wordmark
2. **SD Monogram Mark**: Circular gold SD icon mark
3. **Wordmark**: Textual `StyloDyna` brand logotype

### 9.2 Strict Asset Protection Rules
- **No AI Recreation**: Never use AI image generation to recreate exact logo geometry, wordmarks, or monograms.
- **No Retyping or Tracing**: Never approximate the wordmark using standard fonts or manual vector tracing.
- **No Geometric Distortion**: Never stretch, condense, skew, rotate, or alter monogram relationships.
- **No Unapproved Styling**: Never apply drop shadows, glows, decorative gradients, or unapproved color overlays to logo assets.
- **Monogram Semantics**: The SD Monogram is a protected brand mark and must **not** be used as a substitute for functional UI icons (e.g., home icons or user account avatars).

### 9.3 Creative Asset Lifecycle
All production assets must follow a strict, deterministic lifecycle:
```text
SPECIFICATION ──> CANDIDATE ──> QA ──> HUMAN APPROVAL ──> APPROVED MASTER ──> PROVENANCE ──> ASSET LOCK ──> DERIVED ASSETS
```

*Status*: Exact clear-space geometry and minimum digital render sizes remain a **PENDING SPECIFICATION**.

---

## 10. Iconography, Motion & Interaction

### 10.1 Iconography
- **Visual Style**: Clean, linear outline, contemporary, optically balanced (~1.5px – 2.0px stroke character).
- **Standard Sizes**: XS (`14–16px`), SM (`18px`), MD (`20–24px`), LG (`28–32px`).
- **Interactive Targets**: Visual icon dimension and touch target dimension are distinct. Interactive icon buttons must provide **`>= 44px`** touch targets.

### 10.2 Motion & Easing
- **Duration Roles**:
  - **Fast (`120ms`)**: Subtle hover feedback, micro-toggle states
  - **Standard (`180ms`)**: Button states, link transitions, border transitions (Accepted FOOTER-001 duration)
  - **Slow (`280ms`)**: Dropdown reveals, accordions, popovers
  - **Editorial (`400ms`)**: Full-screen drawers or hero reveals (Exceptional use only)
- **Easing Curve**: `cubic-bezier(0.2, 0, 0, 1)` (Quiet, functional, responsive).
- **Motion Guardrails**: Image scale transform `<= 1.03`; Translation lift `<= 4px`. Bouncy, pulsating, or decorative parallax animations are prohibited.
- **Reduced Motion**: Mandatory `@media (prefers-reduced-motion: reduce)` overrides disabling transforms and transitions across all custom stylesheets.

---

## 11. Design System Compliance Gate & Exception Record

### 11.1 Mandatory Pre-Commit Compliance Checklist
Before declaring any storefront UI task complete, the implementation must pass the 20-point compliance gate:

- [ ] **1. Brand Foundation**: Aligns with accessible-premium quiet luxury positioning; zero cheap/marketplace tropes.
- [ ] **2. Semantic Colors**: Uses approved CSS tokens (`--sd-color-*`); zero arbitrary hex colors.
- [ ] **3. Gold Governance**: Gold used strictly as accent (`#8A6A43`); primary CTAs use Charcoal `#1F1F1F`.
- [ ] **4. Typography Roles**: Display headings use Cormorant Garamond; Body/UI/Buttons use Inter.
- [ ] **5. Vertical Rhythm**: Section spacing follows Editorial (`96/80/64`), Standard (`80/64/48`), or Compact (`56/48/40`) scale.
- [ ] **6. Grid & Container**: Fits 1520px, 1320px, 1200px, or 760px container widths; zero arbitrary page widths.
- [ ] **7. Shape Language**: Radius adheres to 0, 3px, 6px, 10px, or 9999px; zero rounded card overuse.
- [ ] **8. Borders**: Structural borders use 1px subtle/standard opacity; zero heavy outlines.
- [ ] **9. Elevation**: Flat or border-first separation; shadows soft and functional.
- [ ] **10. Buttons & Actions**: Primary CTAs use `#1F1F1F`; touch targets `>= 44px`.
- [ ] **11. Logo Governance**: Master assets preserved; zero AI recreation or retyping.
- [ ] **12. Iconography**: Linear stroke, consistent sizing, separated target size (`>= 44px`).
- [ ] **13. Motion**: Duration 120ms–280ms, cubic-bezier curve, scale `<= 1.03`, translation `<= 4px`.
- [ ] **14. Reduced Motion**: `@media (prefers-reduced-motion: reduce)` overrides present in CSS.
- [ ] **15. Responsive Standard**: `RESPONSIVE-STANDARD.md` compliant; zero horizontal overflow (`0px`).
- [ ] **16. Accessibility**: `ACCESSIBILITY-STANDARD.md` compliant; WCAG 2.1 AA contrast > 4.5:1, focus rings visible.
- [ ] **17. Technical Standards**: `CSS-STANDARD.md` & `LIQUID-SECTION-STANDARD.md` compliant; BEM scoped.
- [ ] **18. Data Binding**: `SHOPIFY-DATA-BINDING-STANDARD.md` compliant; PIM data authority preserved.
- [ ] **19. Multi-Viewport QA**: Validated across Desktop (1440/1280), Tablet (768), and Mobile (430/390/375).
- [ ] **20. Human Visual Approval**: Explicit human visual sign-off obtained.

### 11.2 Design System Exception Record Template
Any intentional deviation from this master specification requires a formal exception record:

```markdown
### DESIGN SYSTEM EXCEPTION
- **Exception ID**: DSE-YYYYMMDD-XX
- **Feature / Task**: [e.g., FOOTER-001]
- **Target Component**: [e.g., Global Footer Bottom Bar]
- **Deviating Value**: [e.g., 1200px Compact Container Width]
- **Justification**: [Architectural or design requirement rationale]
- **Approval Status**: APPROVED BY HUMAN GOVERNANCE
```

---

## 12. Pending Specifications Register

The following subordinate specifications are formally recognized as unresolved and marked as **PENDING SPECIFICATION**. They require explicit human governance approval before implementation:

1. **Exact Typography Scale Metrics**: Complete line-height and fluid `clamp()` formulas for intermediate heading levels.
2. **Exact Font Weight Assignments**: Specific numeric weights (`400`, `500`, `600`, `700`) where not semantically locked.
3. **Exact Tracking & Letter-Spacing System**: Global letter-spacing scale and tracking rules across device sizes.
4. **Exact Line-Height Metrics**: Comprehensive line-height scale for body, headings, and UI controls.
5. **Detailed Eyebrow & Label Typography Specification**: Global specification for section eyebrows, badge labels, and captions.
6. **Logo Clear-Space Geometry**: Exact pixel/ratio clear-space boundaries surrounding primary logo lockups.
7. **Logo Minimum Digital Render Sizes**: Minimum width thresholds for digital screens to prevent degradation.
8. **Form Field Interactive States**: Detailed visual state specifications for invalid, focus-inset, and disabled text inputs.
9. **Destructive & Alert Action Colors**: Specific HEX tokens for error states, destructive actions, and success notifications.
10. **Component Elevation Shadow Recipes**: Exact CSS `box-shadow` property recipes for Level 1 and Level 2 overlays.
11. **Navigation Component Library Specification**: Detailed mega-menu, drawer disclosure, and submenu interaction patterns.
12. **Header Component Specification**: Comprehensive specification for the global header (currently **PAUSED** under `HEADER-001`).
13. **Verbal Identity & Editorial Copy Standard**: Formal guidelines for storefront brand messaging, microcopy, and customer communications.

> **Governance Directive**: Items in the Pending Specifications Register do **not** grant permission for developers or AI agents to invent arbitrary values. They remain locked pending formal human governance sign-off.
