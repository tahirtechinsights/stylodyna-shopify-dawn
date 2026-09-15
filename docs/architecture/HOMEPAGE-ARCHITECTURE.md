# Homepage Architecture & Section Pipeline

## Overview
The StyloDyna homepage is designed as an editorial, quiet luxury furniture catalog experience. It is defined in [`templates/index.json`](file:///e:/StyloDyna/Store%20Website/Project/stylodyna-shopify-dawn/templates/index.json) as a sequence of Online Store 2.0 dynamic sections.

## Canonical Section Sequence

```
Top-of-Page System:
├── Announcement Bar (`sections/announcement-bar.liquid`) — Scoped z-index: 50, #1F1F1F background, #F7F5F0 text
└── Header Overlay (`sections/header.liquid`) — Scoped z-index: 40, transparent overlay transitioning to #FCFBF8 on scroll

Homepage Main Sequence (`templates/index.json` order):
1. `stylodyna_hero` (`sections/stylodyna-hero.liquid`)
   ├── 3-Slide WebP Carousel Engine (6s auto-advance, touch swipe, reduced motion check)
   └── Bottom Trust Strip (4 equal desktop columns)
2. `stylodyna_featured_collections` (`sections/stylodyna-featured-collections.liquid`)
   ├── 4-Column Desktop Grid (2 rows of 4 cards), 2-column tablet, 1-column mobile stack
   └── 4:5 aspect ratio cards with subtle hover scale (1.03) and 3-tier image fallbacks
3. `stylodyna_brand_story` (`sections/stylodyna-brand-story.liquid`)
   ├── 56% / 44% split editorial layout (Storefront artwork asset `sd-brand-story-storefront.webp`)
   └── Editorial typography, #8A6A43 eyebrow, #1F1F1F CTA button
4. `stylodyna_why_choose` (`sections/stylodyna-why-choose.liquid`)
   ├── Asymmetrical Editorial Split Layout (Left: Eyebrow, Heading, Copy, CTA, Lifestyle visual; Right: 2x2 Trust Grid)
   └── 4 Trust Cards (Timeless Design, Premium Craftsmanship, Reliable Delivery, Dedicated Support) with 2px stroke SVG line icons
5. `stylodyna_about` (`sections/stylodyna-about.liquid`)
   ├── 2-Column editorial about layout with card gallery & review rating badge
   └── Exploration CTA button
```

## Structural & Design Principles
- **No Heavy Overlays or Cartoon UI**: Cards utilize subtle bottom text gradients or light borders (`rgba(0,0,0,0.06)`), 4-6px corner radii, and generous editorial whitespace.
- **Color Palette Alignment**: Section backgrounds default to `#FCFBF8` (Stone White), primary text to `#2E2E2E` (Charcoal), secondary body text to `#666666`, eyebrow accents to `#8A6A43`, and primary CTAs to `#1F1F1F` (hover `#000000`).
- **Performance & Asset Loading**: All image components support native Shopify image tags with lazy loading, responsive srcset generation, and asset fallback fall-through logic.
