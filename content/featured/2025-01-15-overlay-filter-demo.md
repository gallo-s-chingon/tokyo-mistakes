---
title: "Overlay Filter Feature Demo"
date: 2025-01-15
draft: true
categories:
  - Technology
tags:
  - Hugo
  - Web Design
subtitle: "Demonstrating the Jekyll Minimal Mistakes overlay_filter feature"
featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
overlay_filter: 0.5
overlayMetadata: true
overlayPosition: "lower-left"
---

This post demonstrates the new `overlay_filter` feature, which adds colored overlays to featured images.

## What is overlay_filter?

The `overlay_filter` parameter, inspired by Jekyll Minimal Mistakes, allows you to add a semi-transparent colored layer over featured images. This improves text readability and creates visual effects.

## Features

- **Black overlays**: Use numeric values (0.1-1.0) for black overlays
- **Colored overlays**: Use `rgba()` for custom colors
- **Gradients**: Use CSS gradients for advanced effects
- **Works with metadata overlays**: Combines with the existing overlay metadata feature
- **Per-page or site-wide**: Configure globally or per-page

## How It Works

Unlike the `transparency` feature which makes the image itself semi-transparent, `overlay_filter` adds a colored layer **on top** of the image. You can use both together for creative effects!

## Example Configurations

### Simple Black Overlay
```yaml
overlay_filter: 0.5
```

### Colored Overlay
```yaml
overlay_filter: "rgba(255, 0, 0, 0.3)"
```

### Gradient Overlay
```yaml
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"
```

This page itself uses a 50% black overlay to make the metadata text more readable!
