# Liquid Section Engineering Standard

## Overview
All custom sections in the StyloDyna storefront must follow Shopify Online Store 2.0 specifications and internal architectural rules.

## Core Rules & Requirements

### 1. File & Naming Architecture
- Section liquid templates must be created in `sections/` using the prefix `stylodyna-` (e.g. `sections/stylodyna-hero.liquid`, `sections/stylodyna-featured-collections.liquid`).
- Accompanying section stylesheets must be placed in `assets/` with matching names (e.g. `assets/section-stylodyna-hero.css`).
- Class names must use section BEM-style scoping (e.g. `.stylodyna-hero__content-box`, `.stylodyna-featured-collections__card`).

### 2. Schema Structure & Presets
- Every section MUST include a complete `{% schema %}` JSON declaration.
- Every section MUST define at least one default `preset` in its schema so merchants can immediately add it via the Theme Editor.
- Schema blocks MUST specify a unique `type`, `name`, `limit` (if applicable), `settings`, and sensible `default` values.
- Blocks inside presets MUST populate valid initial settings.

### 3. Merchant Configurability (Zero Hardcoding)
- **NO Hardcoded IDs or GIDs**: Never hardcode product IDs, variant IDs, collection IDs, or Shopify GIDs in Liquid logic or schemas.
- **Dynamic Bindings**: Use `type: "product"`, `type: "collection"`, `type: "image_picker"`, and `type: "url"` schema controls.
- **Text & Padding Controls**: Expose editable text settings, image radius, column counts, and responsive padding range controls.

### 4. Image Fallback Priority Pipeline
When rendering media, sections must strictly enforce the 3-tier fallback rule:
```liquid
{%- if block.settings.image != blank -%}
  <!-- 1. Custom Theme Editor Uploaded Image -->
  {{ block.settings.image | image_url: width: 1200 | image_tag: loading: 'lazy', class: '...' }}
{%- elsif block.settings.collection.featured_image != blank -%}
  <!-- 2. Shopify Collection / Product Featured Image -->
  {{ block.settings.collection.featured_image | image_url: width: 1200 | image_tag: loading: 'lazy', class: '...' }}
{%- elsif fallback_asset_filename != blank -%}
  <!-- 3. Local Theme Asset Fallback -->
  <img src="{{ fallback_asset_filename | asset_url }}" alt="..." loading="lazy" class="...">
{%- endif -%}
```

### 5. Semantic HTML & Accessibility
- Use appropriate section wrappers (`<section>`, `<article>`, `<header>`, `<nav>`).
- Heading hierarchy must be strictly sequential (`<h2>` inside section, `<h3>` inside cards).
- SVG icons must include `aria-hidden="true"` or an inline `<title>` element.
