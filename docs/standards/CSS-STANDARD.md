# CSS & Styling Engineering Standard

## Overview
This document defines CSS architecture, naming conventions, design token usage, and performance guidelines for the StyloDyna theme.

## Core Rules

### 1. Section Modularization & Scoping
- CSS for custom sections must be placed in `assets/section-stylodyna-[name].css` rather than bloated global stylesheets like `base.css`.
- Classes must be explicitly scoped using the section namespace to prevent global leakage (e.g. `.stylodyna-why-choose__grid`, `.stylodyna-brand-story__media-col`).

### 2. Design Tokens & Custom Properties
- All color values, font families, and header height offsets must reference centralized design tokens (`var(--stylo-primary-bg)`, `var(--stylo-primary-text)`, `var(--stylo-accent)`, `var(--stylodyna-header-height)`).
- Avoid hardcoding arbitrary hex colors directly inside section stylesheets when a token exists.

### 3. Responsive Breakpoints & Fluid Layouts
- Use CSS Grid and Flexbox for page layouts.
- Breakpoints:
  - **Mobile**: `< 750px`
  - **Tablet**: `750px` – `1199px`
  - **Desktop**: `>= 1200px` (Page width container max-width: `1520px`)
- Responsive font sizes must leverage CSS `clamp()` for fluid typography without layout jumps.

### 4. Code Quality & Performance
- **No Unnecessary `!important`**: Do not use `!important` flags unless overriding third-party inline styles or critical theme-wrapper transparency states.
- **No Layout Shift (CLS)**: Always set explicit aspect ratios (`aspect-ratio: 4 / 5`, `aspect-ratio: 4 / 3`) or intrinsic dimensions on media wrappers to prevent layout shifts.
- **Accessibility & Motion**: All CSS hover animations (`transform`, `opacity`) must include `@media (prefers-reduced-motion: reduce)` overrides to disable motion for sensitive users.
