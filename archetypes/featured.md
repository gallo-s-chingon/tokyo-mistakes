---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false

# Appearance details
type: "podcast"  # podcast, interview, video, conference, talk, panel, etc. (see docs/appearance-types.md)
podcastName: ""  # Show/platform/publication name (e.g., "Joe Rogan Experience")
hosts: []  # Show host(s) - ["Joe Rogan"]
guests: []  # Other guests besides you - ["Guest Name"]

# Links
externalUrl: ""  # Link to listen/watch/read this appearance

# Media
featuredImage: ""  # /images/filename.jpg

# Content
tags: []  # Topics discussed - ["AI", "technology", "future"]
summary: ""  # Short description for cards and previews
description: ""  # Full description for SEO

# === Image Settings ===
# Image transparency (when overlayMetadata is disabled)
transparency: true  # Make image transparent
transparencyAmount: 0.7  # Opacity: 0.2 (very transparent) to 1.0 (opaque)

# Color overlay filter (works on both single & list pages)
overlay_filter: 0.5  # Black overlay: 0.1-1.0
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # Custom RGBA color
# overlay_filter: "linear-gradient(...)"  # CSS gradient

# Metadata overlay (single page only)
overlayMetadata: false  # Show metadata on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right

# === Display Options ===
topicsOn: true  # Show "Topics Discussed" section
toc: false  # Table of contents
lightgallery: true  # Enable lightbox gallery
twemoji: false  # Enable Twitter emoji
ruby: true  # Enable ruby annotations
fraction: true  # Enable fraction syntax
fontawesome: true  # Enable FontAwesome icons
linkToMarkdown: true  # Show raw markdown link
rssFullText: false  # Include full text in RSS

# === Code Blocks ===
code:
  copy: true  # Show code copy button
  maxShownLines: 50  # Max code lines before collapse

# === Visibility ===
hiddenFromHomePage: false  # Hide from home page
hiddenFromSearch: false  # Hide from search results

# === Social & Comments ===
share:
  enable: true  # Enable share buttons
comment:
  enable: true  # Enable comments

# === SEO ===
seo:
  images: []  # SEO images array

# === Custom Libraries ===
library:
  css:
    # someCSS = "some.css"
  js:
    # someJS = "some.js"
---

## About This Appearance

Brief description of the appearance and what was discussed...

## Topics Discussed

- Topic 1
- Topic 2
- Topic 3

## Key Takeaways

- Takeaway 1
- Takeaway 2

## Links & Resources

- [Listen/Watch]({{ .Params.externalUrl }})
