# Shopify Data Binding Standard

## Overview
This standard governs how Shopify Liquid objects, storefront schema settings, metafield bindings, and canonical commerce data are processed within the theme layer.

## Binding Principles

### 1. Canonical Shopify Objects
- Custom sections must bind directly to standard Shopify Liquid objects:
  - Catalog: `product`, `collection`, `variant`
  - Navigation: `linklists`, `link`
  - Commerce: `cart`, `customer`, `routes`
  - Global: `shop`, `request`, `canonical_url`

### 2. Schema Settings Data Pipeline
Section markup consumes settings defined in section `{% schema %}` JSON:
- Text: `{{ section.settings.heading | escape }}`
- Rich Text: `{{ section.settings.description }}` (sanitized HTML)
- Images: `{{ section.settings.image | image_url: width: 1200 | image_tag: ... }}`
- Collections: `{% assign collection = section.settings.collection %}`
- Links: `<a href="{{ section.settings.button_link | default: '/collections/all' }}">`

### 3. Metafields Integration
- Custom specifications, material care notes, dimension charts, and supplementary product details must be bound via native Shopify Metafields (`product.metafields.custom.[key]`).
- Always include liquid defensive checks before rendering metafield values (`{% if product.metafields.custom.material != blank %}`).

### 4. Zero Hardcoded Identifiers
- Hardcoded Shopify numeric IDs (`123456789`), GIDs (`gid://shopify/Product/123456`), or hardcoded product URLs inside section source code are strictly prohibited.
