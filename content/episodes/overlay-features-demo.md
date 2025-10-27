---
title: "Complete Guide to Episode Overlay Features"
created: 2025-10-27
draft: false

# Episode details
episodeNumber: 101
season: 1
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-podcast-microphone.jpg"
duration: "45:00"

# Content
tags: ["documentation", "overlay", "features", "design"]
summary: "Learn how to use overlay features including metadata overlays, color filters, and transparency controls in your podcast episodes."
description: "Complete documentation demonstrating all overlay features available in the Tokyo-Nord theme, including overlayMetadata, overlay_filter, and transparency options."

# Display options - Demonstrating overlay metadata
overlayMetadata: true
overlayPosition: "lower-left"
overlay_filter: 0.4
toc: true
lightgallery: false

# Image credit
imageCredit: "Photo by Magda Ehlers from Pexels (CC0)"
---

## About This Episode

This documentation episode demonstrates all the overlay features available in the Tokyo-Nord Hugo theme. Use this as a reference when creating your own podcast episodes with custom styling.

## Overlay Features Overview

The Tokyo-Nord theme offers three independent overlay systems that can be used individually or combined:

### 1. Metadata Overlay (`overlayMetadata`)

This feature displays episode metadata (title, episode number, hosts) directly ON the featured image instead of above it.

**Configuration:**
```yaml
overlayMetadata: true
overlayPosition: "lower-left"
```

**Available Positions:**
- `top-left`, `top-center`, `top-right`
- `mid-left`, `mid-center`, `mid-right`
- `lower-left`, `lower-center`, `lower-right`

**Scope:** Single episode pages only

### 2. Color Overlay Filter (`overlay_filter`)

Adds a colored layer on top of the featured image to improve text readability or create visual effects.

**This page uses:** `overlay_filter: 0.4` (40% black overlay)

**Options:**
```yaml
# Black overlay (numeric value)
overlay_filter: 0.5  # 50% black

# Colored overlay (RGBA)
overlay_filter: "rgba(255, 0, 0, 0.3)"  # 30% red

# Gradient overlay
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"
```

**Scope:** Both single pages AND list pages (episode cards)

### 3. Image Transparency (`transparency`)

Makes the image itself semi-transparent, allowing the background to show through.

```yaml
transparency: true
transparencyAmount: 0.7  # Range: 0.0-1.0
```

**Scope:** Single pages only

## Combining Overlay Effects

You can combine these features for advanced styling:

```yaml
# Example: Subtle transparent image with gradient overlay
overlayMetadata: true
overlayPosition: "lower-center"
transparency: true
transparencyAmount: 0.85
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
```

## Implementation Examples

### Example 1: Minimal Overlay
```yaml
overlayMetadata: true
overlayPosition: "lower-left"
```
Clean and simple - metadata on image with default styling.

### Example 2: High Contrast
```yaml
overlayMetadata: true
overlayPosition: "mid-center"
overlay_filter: 0.6
```
Strong black overlay ensures text is always readable.

### Example 3: Colored Brand
```yaml
overlayMetadata: true
overlayPosition: "top-right"
overlay_filter: "rgba(100, 0, 200, 0.4)"
```
Purple brand overlay for themed episodes.

### Example 4: Gradient Effect
```yaml
overlayMetadata: true
overlayPosition: "lower-center"
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))"
```
Gradient from dark to transparent - perfect for bottom-aligned text.

### Example 5: Soft & Subtle
```yaml
overlayMetadata: true
overlayPosition: "lower-left"
transparency: true
transparencyAmount: 0.8
overlay_filter: 0.2
```
Combination of transparency and subtle overlay for artistic effect.

## Best Practices

1. **Text Readability:** Always ensure sufficient contrast between text and background
2. **Consistency:** Use similar overlay styles across your podcast series
3. **Image Choice:** Select images that work well with overlays (not too busy)
4. **Testing:** Preview on both light and dark themes
5. **Accessibility:** Maintain WCAG contrast ratios for readability

## Configuration Scopes

Understanding where each setting applies:

| Feature | Single Pages | List Pages | Config Location |
|---------|-------------|------------|-----------------|
| `overlayMetadata` | Yes | No | Frontmatter + hugo.toml |
| `overlayPosition` | Yes | No | Frontmatter + hugo.toml |
| `overlay_filter` | Yes | Yes | Frontmatter only |
| `transparency` | Yes | No | Frontmatter + hugo.toml |

## Global Defaults

Set site-wide defaults in `hugo.toml`:

```toml
[params.podcast.overlay]
  enable = true
  position = "lower-left"
  opacity = 0.85

[params.images]
  transparency = false
  opacity = 1.0
```

Frontmatter values override global settings on a per-episode basis.

## Troubleshooting

**Overlay not showing?**
- Check that `overlayMetadata: true` is set
- Verify `featuredImage` path is correct
- Ensure you're viewing single page (not list page)

**Text hard to read?**
- Increase `overlay_filter` value (try 0.5 or higher)
- Use gradient overlays with darker bottom
- Choose less busy background images

**Overlay appears on list pages when not wanted?**
- `overlayMetadata` only affects single pages
- `overlay_filter` affects both - set to false or remove from frontmatter

## Related Documentation

- `/episodes/player-embeds-demo/` - Player embedding guide
- `/episodes/metadata-customization-demo/` - Metadata customization
- `/docs/podcast-features/` - Complete podcast features guide

## Image Attribution

Featured image: Photo by Magda Ehlers from Pexels (CC0 License)
- Source: https://www.pexels.com/photo/audio-mixer-1936481/
- License: Creative Commons Zero (CC0)
- Free to use with no attribution required

---

**Documentation Version:** 1.0
**Last Updated:** 2025-10-27
**Theme:** Tokyo-Nord
