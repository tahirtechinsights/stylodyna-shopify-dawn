# Product Page Architecture (PDP)

## Overview
The Product Detail Page (PDP) architecture governs the presentation and purchase workflow of individual items within the StyloDyna catalog.

## Architectural Component Breakdown

```
Product Page Template (`templates/product.json`)
    │
    ├── Main Product Section (`sections/main-product.liquid`)
    │   ├── Media Gallery Component (`snippets/product-media-gallery.liquid`)
    │   │   ├── Primary 3:4 / 1:1 Product Photography Aspect Ratio
    │   │   ├── Desktop Media Grid / Thumbnail Carousel
    │   │   └── Touch-enabled Mobile Swipe & Zoom Modal
    │   │
    │   └── Product Info Component (`snippets/product-variant-picker.liquid`)
    │       ├── Brand Eyebrow & Editorial Product Title
    │       ├── Dynamic Price & Currency Formatting (`snippets/price.liquid`)
    │       ├── Variant Selection Controls (Swatches, Pills, Dropdowns)
    │       ├── Real-time Inventory & Stock Availability Badge
    │       ├── Quantity Selector & Add to Cart CTA Form
    │       └── Collapsible Accordion Blocks (Materials, Care, Shipping)
    │
    ├── Related Products Section (`sections/related-products.liquid`)
    └── Product Reviews & Specifications Sections
```

## Data Binding & Variant Logic
- **Form Interactivity**: Product variants update price, SKU, media gallery focal index, and inventory status dynamically via `product-info.js` and `global.js` standard Shopify theme events.
- **Image Aspect Ratio**: Product media galleries maintain clean editorial proportions (`object-fit: cover`), avoiding stretched product images across viewports.
- **Accessibility & ARIA**: Variant pickers use semantic `<fieldset>` and `<legend>` tags, with screen reader notifications for variant availability changes.
