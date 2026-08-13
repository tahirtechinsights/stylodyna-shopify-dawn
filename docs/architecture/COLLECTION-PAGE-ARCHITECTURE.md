# Collection Page Architecture (PLP)

## Overview
The Collection Page (Product Listing Page / PLP) architecture governs catalog navigation, faceted filtering, product card rendering, and sorting interfaces across shopping categories.

## Architectural Component Breakdown

```
Collection Page Template (`templates/collection.json`)
    │
    ├── Collection Hero Section (`sections/main-collection-banner.liquid`)
    │   ├── Collection Title & Description Header
    │   └── Optional Editorial Banner Image Overlay
    │
    └── Main Collection Grid Section (`sections/main-collection-product-grid.liquid`)
        ├── Faceted Filter & Sort Drawer/Bar (`snippets/facets.liquid`)
        │   ├── Filter by Availability, Price Range, Color Swatch, Category
        │   └── Sort Dropdown (Featured, Best Selling, Price Low-High, Newest)
        │
        ├── Product Card Grid Layout (`snippets/card-product.liquid`)
        │   ├── 4-Column Desktop Grid / 2-Column Mobile Grid
        │   ├── Product Image Hover Secondary Flip / Fade
        │   ├── Title, Vendor, Price, Swatch Indicators
        │   └── Quick View / Quick Add Drawer Trigger
        │
        └── Pagination Controls (`snippets/pagination.liquid`)
```

## Standards & Grid Performance
- **Grid Layout**: Responsive grid enforcing 4 columns on desktop (>=1200px), 2 columns on tablet, and 2 columns on mobile for optimal product browsing.
- **Card Proportions**: Product image cards maintain standardized 4:5 or 3:4 aspect ratios (`object-fit: cover`).
- **AJAX Facet Filtering**: Facet updates fetch updated collection sub-trees asynchronously via standard Shopify `facets.js` without full page reloads.
