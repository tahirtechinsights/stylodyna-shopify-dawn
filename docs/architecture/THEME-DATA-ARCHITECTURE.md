# Theme Data Architecture

## Overview
This document outlines the data model, object bindings, theme settings, and schema representations across the StyloDyna Shopify storefront.

## Data Binding & Object Hierarchy

```
Shopify Admin Engine
    ├── Global Objects (`shop`, `routes`, `canonical_url`, `request`, `theme`)
    ├── Catalog Objects (`product`, `collection`, `variant`, `metafields`)
    ├── Storefront Objects (`cart`, `customer`, `search`, `recommendations`)
    └── Content Objects (`page`, `article`, `blog`, `linklists`)
            │
            ▼
Online Store 2.0 Theme Layer
    ├── Settings Schema (`config/settings_schema.json`) — Global Theme Settings
    ├── Layout Wrappers (`layout/theme.liquid`) — Document Shell & Assets
    ├── JSON Templates (`templates/*.json`) — Section Sequence & Block Settings
    ├── Liquid Sections (`sections/*.liquid`) — Modular Component Markup & Schemas
    └── Liquid Snippets (`snippets/*.liquid`) — Reusable Render Fragments
```

## Schema & Settings Governance
- **Merchant Controls**: All configurable layout options, text labels, image assets, color overrides, and alignment settings are defined inside section `{% schema %}` JSON blocks.
- **Dynamic Metafields**: Product and collection specifications leverage native Shopify Metafields (`product.metafields.custom.*`) bound dynamically in Liquid templates.
- **Sanitization & Escaping**: All merchant-entered strings are escaped (`{{ text | escape }}` or `{{ text | newline_to_br }}`) to prevent HTML injection and rendering anomalies.
