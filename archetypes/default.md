---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true

# Author
author: ""
authorLink: ""

# Content
description: ""
keywords: []
tags: []
categories: []
summary: ""  # Short description for cards and previews
license: ""

# Featured media
featuredImage: ""
featuredImagePreview: ""

# === Image Settings ===
# Image transparency (when overlayMetadata is disabled)
transparency: false  # Make image transparent
transparencyAmount: 0.8  # Opacity: 0.2 (very transparent) to 1.0 (opaque)

# Color overlay filter (works on both single & list pages)
overlay_filter: 0.5  # Black overlay: 0.1-1.0
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # Custom RGBA color
# overlay_filter: "linear-gradient(...)"  # CSS gradient

# Metadata overlay (single page only)
overlayMetadata: false  # Show metadata on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right

# === Display Options ===
topicsOn: true  # Show "Topics Discussed" section
twemoji: false  # Enable Twitter emoji
ruby: true  # Enable ruby annotations
fraction: true  # Enable fraction syntax
fontawesome: true  # Enable FontAwesome icons
lightgallery: true  # Enable lightbox gallery
linkToMarkdown: true  # Show raw markdown link
rssFullText: false  # Include full text in RSS

# === Visibility ===
hiddenFromHomePage: false  # Hide from home page
hiddenFromSearch: false  # Hide from search results

# === Table of Contents ===
toc:
  enable: true  # Enable TOC
  auto: true  # Auto-collapse TOC
  keepStatic: false  # Keep TOC static (no collapse)

# === Code Blocks ===
code:
  copy: true  # Show code copy button
  maxShownLines: 50  # Max code lines before collapse

# === Math & Maps ===
math:
  enable: false
  # ...
mapbox:
  # ...

# === Social & Comments ===
share:
  enable: true  # Enable share buttons
  # ...
comment:
  enable: true  # Enable comments
  # ...

# === SEO ===
seo:
  images: []  # SEO images array
  # ...

# === Custom Libraries ===
library:
  css:
    # someCSS = "some.css"
    # located in "assets/" or CDN URL
  js:
    # someJS = "some.js"
    # located in "assets/" or CDN URL
---

<!--more-->
