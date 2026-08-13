# Storefront QA & Verification Standard

## Overview
Every storefront feature, section implementation, and bug fix must complete a structured Quality Assurance (QA) protocol prior to merging into production.

## The 8-Level QA Verification Framework

```
[ LEVEL 1 ] Static Code & Syntax Validation
    │
[ LEVEL 2 ] Liquid Engine & Schema JSON Validation
    │
[ LEVEL 3 ] Desktop Visual QA (>= 1200px / 1520px Container)
    │
[ LEVEL 4 ] Tablet Visual QA (750px – 1199px Viewports)
    │
[ LEVEL 5 ] Mobile Visual QA (< 750px Single-Column Viewports)
    │
[ LEVEL 6 ] Accessibility Sanity (WCAG 2.1 AA, Focus, Contrast)
    │
[ LEVEL 7 ] Shopify Theme Editor Integration (Customize Live Preview)
    │
[ LEVEL 8 ] End-to-End Live Storefront Preview Verification
```

---

## Detailed Gate Specifications

### LEVEL 1: Static Code Validation
- Clean file formatting, proper indentation, BEM CSS naming scoping.
- No obsolete code blocks, unused scripts, or debug console statements.

### LEVEL 2: Liquid / Schema / JSON Validation
- Valid Liquid tag syntax, closed conditional loops, valid section `{% schema %}` JSON block.
- JSON template files (`templates/*.json`) parse without syntax errors.

### LEVEL 3: Desktop Visual QA (>= 1200px)
- Desktop layout matches approved editorial specifications (e.g., 4-column grid, 56%/44% split).
- Max container width (`1520px`) and margins visually balanced without awkward whitespace.

### LEVEL 4: Tablet Visual QA (750px – 1199px)
- Responsive grid adapts seamlessly to 2-column or fluid tablet layouts.
- Typography scales fluidly via `clamp()` without overlapping text.

### LEVEL 5: Mobile Visual QA (< 750px)
- Single-column stacked layouts, no horizontal scrollbar or element overflow.
- Minimum 44px touch targets on buttons, swatches, and links.

### LEVEL 6: Accessibility Sanity
- Keyboard tab order logical, visible focus outlines present.
- Image alt text provided, decorative SVGs set to `aria-hidden="true"`.
- Contrast ratio >= 4.5:1 for body text against backgrounds.

### LEVEL 7: Shopify Theme Editor Compatibility
- All settings, text fields, image pickers, dropdowns, and presets operate smoothly inside Theme Editor preview.
- Theme Editor section additions/deletions trigger no schema errors.

### LEVEL 8: Live Preview Verification
- Feature tested on active Shopify development server / preview URL.
- Zero 404 image errors, zero JavaScript console errors, zero layout shifts.
