---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false

# Episode details
episodeNumber:
season:
episodeType: "full"  # full, trailer, bonus

# Podcast info (overrides site config if specified)
podcast: ""  # Leave empty to use site.Params.podcast.name
host: ""  # Leave empty to use site.Params.podcast.hostName
guests: []  # Episode guests - ["Guest Name"]

# Media
featuredImage: ""  # /images/filename.jpg
audioUrl: ""
duration: ""  # e.g., "1:23:45"

# Podcast players
embedPlayers:
  # - type: "spotify"
  #   id: "episode-id-here"
  # - type: "youtube"
  #   id: "video-id-here"
  # - type: "apple"
  #   podcastId: "podcast-id"
  #   episodeId: "episode-id"

# Content
tags: []  # Topics - ["technology", "interviews", "startups"]
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
toc: true  # Table of contents
lightgallery: false  # Enable lightbox gallery
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

## Show Notes

Add your show notes here...

## Timestamps

- 00:00 - Intro
- 05:30 - Main topic
- 45:00 - Q&A

## Guest Links

- [Guest Name](https://example.com)

## Resources Mentioned

- [Resource 1](https://example.com)

## Transcript

Add transcript here if available...
