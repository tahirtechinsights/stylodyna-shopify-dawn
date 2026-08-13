# Accessibility Engineering Standard (WCAG 2.1 AA)

## Overview
The StyloDyna storefront must comply with WCAG 2.1 Level AA standards to ensure an inclusive shopping experience for all customers.

## Key Compliance Requirements

### 1. Semantic Hierarchy & Landmarking
- Every page must feature exactly one `<h1>` element.
- Section headings must follow logical sequence (`<h2>` for section title, `<h3>` for cards).
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`) must frame all key page regions.

### 2. Keyboard Navigation & Focus Visibility
- Every interactive element (links, buttons, collection cards, swatches, form inputs) must be keyboard accessible via `Tab` and `Enter`/`Space`.
- Interactive elements must display a distinct, visible focus indicator (e.g. `outline: 2px solid #1F1F1F; outline-offset: 4px;`).
- No interactive state or content reveal may depend solely on mouse hover.

### 3. Color Contrast & Typography
- Text content against background colors must meet minimum WCAG contrast ratios:
  - Normal text (< 24px): Minimum **4.5:1** contrast ratio.
  - Large text (>= 24px or bold 19px): Minimum **3.0:1** contrast ratio.
- Primary text `#2E2E2E` on Stone White `#FCFBF8` background achieves a contrast ratio of **12.6:1** (Exceeds AAA).

### 4. Non-Text Content & Screen Reader Support
- All images rendered via `image_tag` or `<img>` must supply descriptive, meaningful `alt` text.
- Decorative SVG icons must include `aria-hidden="true"`.
- Buttons containing icons only must include visually hidden text (`.visually-hidden`) or `aria-label`.

### 5. Reduced Motion
- CSS animations and JS transitions must respect OS preferences via `@media (prefers-reduced-motion: reduce)`.
