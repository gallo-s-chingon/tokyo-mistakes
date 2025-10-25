# Overlay Filter Feature

The overlay filter feature, inspired by Jekyll Minimal Mistakes, allows you to add colored overlay layers on top of featured images to improve text readability and create visual effects.

## Overview

This implementation supports both:
- **Single page overlays**: Colored overlay on featured images in single post/episode/appearance pages
- **List page overlays (hero cards)**: Colored overlay on card thumbnails in list/archive views

## How It Works

The `overlay_filter` parameter adds a **COLORED OVERLAY** on top of the image to improve text readability and create visual effects.

## Configuration

### Per-Page Configuration (Front Matter)

Add the `overlay_filter` parameter to your page's front matter:

```yaml
---
title: "My Post"
featuredImage: "/images/hero.jpg"
overlay_filter: 0.5  # or any format below
---
```

### Site-Wide Configuration (hugo.toml)

For list/archive pages (hero cards), configure a default in your site config:

```toml
[params.list]
  overlayFilter = "0.5"  # Applied to all hero cards by default
```

Page-level `overlay_filter` will override the site-wide setting.

## Supported Formats

### 1. Numeric Transparency (Black Overlay)

Apply a black overlay with specified transparency (0.1 to 1.0):

```yaml
overlay_filter: 0.5    # 50% black overlay
overlay_filter: 0.3    # 30% black overlay
overlay_filter: 1.0    # 100% black overlay (fully opaque)
```

### 2. RGBA Color

Apply a custom colored overlay with transparency:

```yaml
overlay_filter: "rgba(255, 0, 0, 0.5)"      # Red overlay at 50% opacity
overlay_filter: "rgba(0, 100, 200, 0.3)"    # Blue overlay at 30% opacity
overlay_filter: "rgba(255, 255, 255, 0.2)"  # White overlay at 20% opacity
```

### 3. CSS Gradients

Apply gradient overlays for advanced effects:

```yaml
overlay_filter: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
overlay_filter: "linear-gradient(135deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5))"
```

## Examples

### Example 1: Dark Semi-Transparent Overlay

```yaml
---
title: "Travel Photography"
featuredImage: "/images/landscape.jpg"
overlay_filter: 0.4
overlayMetadata: true
overlayPosition: "lower-left"
---
```

This creates a 40% black overlay that helps white text stand out on bright images.

### Example 2: Colored Brand Overlay

```yaml
---
title: "Product Launch"
featuredImage: "/images/product.jpg"
overlay_filter: "rgba(66, 135, 245, 0.3)"  # Brand blue at 30%
overlayMetadata: true
---
```

### Example 3: Gradient Overlay

```yaml
---
title: "Sunset Views"
featuredImage: "/images/sunset.jpg"
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"
overlayMetadata: true
overlayPosition: "lower-center"
---
```

This creates a gradient that's dark at the bottom (good for text) and transparent at the top.

## Where It Applies

### Single Pages

The overlay filter applies to featured images on:
- Blog posts (`/layouts/blog/single.html`)
- Episodes (`/layouts/episodes/single.html`)
- Featured appearances (`/layouts/featured/single.html`)

Works with both:
- Standard layout (metadata above image)
- Overlay layout (metadata overlaid on image)

### List Pages (Hero Cards)

The overlay filter applies to thumbnail images on:
- Blog archive (`/layouts/blog/list.html`)
- Episodes archive (`/layouts/episodes/list.html`)
- Featured appearances archive (`/layouts/featured/list.html`)

Uses the hero card component (`/layouts/partials/podcast/hero-card.html`)

## Implementation Details

### Template Logic

The overlay filter is parsed by the `/layouts/partials/function/overlay-filter.html` partial:

1. Detects the format (numeric, rgba, gradient)
2. Converts to CSS `linear-gradient()` format (for consistency with Jekyll MM)
3. Returns the CSS background value

### CSS Classes

- `.featured-image-color-overlay`: The overlay element positioned over the image
- Styled in `/assets/css/_featured-overlay.scss` and `/assets/css/_hero-cards.scss`

### Rendering

The overlay is rendered as a `<div>` with inline styles:

```html
<div class="featured-image">
  <img src="..." />
  <div class="featured-image-color-overlay" style="background: linear-gradient(...)"></div>
</div>
```

## Browser Compatibility

The overlay filter uses standard CSS positioning and gradients, supported in all modern browsers:
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support

## Accessibility

The overlay filter is purely decorative and uses `pointer-events: none` to ensure it doesn't interfere with:
- Image clicks
- Link navigation
- Screen readers

## Migration from Jekyll Minimal Mistakes

If you're migrating from Jekyll Minimal Mistakes, your existing `overlay_filter` parameters will work as-is:

```yaml
# Jekyll MM format - works in Hugo Tokyo-Dev
header:
  overlay_image: /assets/images/hero.jpg
  overlay_filter: 0.5
```

Becomes:

```yaml
# Hugo Tokyo-Dev format
featuredImage: "/images/hero.jpg"
overlay_filter: 0.5
```

The filter parsing logic is identical to Jekyll MM, ensuring consistent visual results.
