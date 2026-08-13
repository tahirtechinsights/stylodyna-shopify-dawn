# Performance Engineering Standard

## Overview
This standard specifies front-end performance, asset optimization, and rendering efficiency practices for the StyloDyna theme.

## Performance Requirements

### 1. Image Optimization & Lazy Loading
- **Native Liquid Tags**: Always use Shopify's native Liquid `image_tag` filter or `<picture>` element with WebP/AVIF formats.
- **Explicit Widths & Srcsets**: Define explicit `widths` arrays (e.g. `widths: '375, 550, 750, 990, 1200, 1600'`).
- **Lazy Loading**: Images below the fold must set `loading: 'lazy'`. Hero images above the fold set `loading: 'eager'` or default load.
- **No Background-Image CSS**: Never use CSS `background-image: url(...)` for editorial media images; use standard `<img>` or `<picture>` with `object-fit: cover`.

### 2. JavaScript & Dependency Minimization
- **Vanilla JS**: Write clean, vanilla JavaScript for interactive UI (e.g. hero carousel, mobile menu).
- **No Heavy Third-Party Libraries**: jQuery, Slick Carousel, Swiper JS, and utility libraries are strictly prohibited for basic section components.
- **Defer Non-Critical Scripts**: All theme JavaScript files must be loaded with `defer` or `async` attributes.

### 3. Layout Shift Prevention (CLS)
- Enforce explicit container aspect ratios (`aspect-ratio: 4 / 5`, `aspect-ratio: 4 / 3`) and image dimensions (`width` and `height` attributes) to prevent Cumulative Layout Shift (CLS).

### 4. Vector & SVG Line Icon Strategy
- Inline SVG vectors are preferred for line icons (`stroke="currentColor"`, `stroke-width="2"`). PNG icon images and icon font libraries are forbidden.
