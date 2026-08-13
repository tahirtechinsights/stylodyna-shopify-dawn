# Responsive Design Standard

## Overview
StyloDyna storefront components must deliver fluid, responsive layouts across all device form factors.

## Breakpoint Matrix

| Device Tier | Breakpoint Range | Grid Columns | Container Margin / Padding |
| :--- | :--- | :--- | :--- |
| **Desktop** | `>= 1200px` | 4 Columns (Featured Collections / Why Choose), 2 Columns (Brand Story Split) | `max-width: 1520px`, `padding-inline: 32px` |
| **Tablet** | `750px` – `1199px` | 2 Columns | `padding-inline: 24px` |
| **Mobile** | `< 750px` | 1 Column Stack | `padding-inline: 16px` – `20px` |

## Mandatory Responsive Guidelines

### 1. Touch Target & Mobile Controls
- All interactive controls (buttons, navigation links, quantity selectors, swatches, form inputs) must maintain a minimum touch target size of **44px x 44px** on mobile viewports.
- CTA buttons on mobile viewports default to full-width or comfortable 52px height for single-tap usability.

### 2. Zero Horizontal Overflow
- Elements must never cause horizontal scrolling (`overflow-x: hidden` safety on layout wrappers, fluid image `max-width: 100%`).

### 3. Equal Height Card Alignment
- Collection cards, feature cards, and product grid cards must use CSS Grid or Flexbox alignment (`display: flex; flex-direction: column; height: 100%;`) to ensure cards within the same row maintain uniform height.
