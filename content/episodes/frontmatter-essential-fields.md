---
title: "Essential Frontmatter Fields"
created: 2025-10-27
draft: false

# Episode details
episodeNumber: 105.1
season: 1
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-video-production.jpg"
duration: "15:00"

# Content
tags: ["documentation", "frontmatter", "yaml", "required-fields"]
categories: ["Documentation", "Technology"]
summary: "Complete guide to the essential required frontmatter fields for every podcast episode."
description: "Learn about the four required frontmatter fields that every episode must have: title, created, episodeNumber, and draft."
keywords: ["frontmatter", "yaml", "hugo", "required", "essential"]

# Display options
overlayMetadata: true
overlayPosition: "lower-right"
overlay_filter: "linear-gradient(135deg, rgba(100, 0, 200, 0.4), rgba(0, 100, 200, 0.4))"
transparency: false
toc: true
lightgallery: true
topicsOn: true
linkToMarkdown: true

# Code block settings
code:
  copy: true
  maxShownLines: 60

# Social features
share:
  enable: true

comment:
  enable: true

# Advanced options
hiddenFromHomePage: false
hiddenFromSearch: false
rssFullText: false

# SEO
seo:
  images: ["/images/samples/sample-video-production.jpg"]

# Image credit
imageCredit: "Photo by Donald Tong from Pexels (CC0)"
---

## About This Guide

This guide covers the four essential frontmatter fields that every episode must include. These fields are required for proper episode rendering and functionality in the Tokyo-Nord theme.

## Frontmatter Structure

Frontmatter is YAML configuration at the top of your markdown file:

```yaml
---
title: "Episode Title"
created: 2025-10-27
episodeNumber: 1
draft: false
---
```

**Rules:**
- Must start and end with `---`
- Uses YAML syntax
- Indent with 2 spaces (not tabs)
- Strings with special characters need quotes
- Arrays use bracket `[]` or dash `-` syntax

## Required Fields

### title
- **Type:** String
- **Required:** Yes
- **Purpose:** Episode title displayed everywhere
- **Best practice:** Keep under 60 characters for SEO

```yaml
title: "How to Build a Successful Podcast"
```

**Guidelines:**
- Clear and descriptive
- Include keywords naturally
- Avoid clickbait
- Be specific about content

**Examples:**
```yaml
# Good
title: "Introduction to Hugo Static Site Generator"
title: "Episode 42: Advanced CSS Techniques"

# Too long
title: "This is an extremely long episode title that goes on forever and probably won't display well in most contexts"

# Too vague
title: "Episode 1"
title: "Stuff"
```

### created
- **Type:** Date
- **Required:** Yes
- **Purpose:** Publication date for sorting and display
- **Formats:**
  - Simple: `2025-10-27`
  - With time: `2025-10-27T14:30:00-07:00`

```yaml
created: 2025-10-27
# OR with timestamp
created: 2025-10-27T14:30:00-07:00
```

**Format details:**
- Simple format: `YYYY-MM-DD`
- ISO 8601 format: `YYYY-MM-DDTHH:MM:SS±HH:MM`
- Time zone aware: Include offset like `-07:00` for PST

**Usage:**
- Determines episode order in lists
- Shows in "Published on" date
- Used in RSS feeds
- Affects sitemap priority

**Examples:**
```yaml
# Simple date (most common)
created: 2025-10-27

# With time (for precise scheduling)
created: 2025-10-27T09:00:00-08:00

# UTC time
created: 2025-10-27T17:00:00Z
```

### episodeNumber
- **Type:** Integer
- **Required:** Yes
- **Purpose:** Episode identifier and ordering
- **Note:** Can use decimals for bonus content (42.5)

```yaml
episodeNumber: 105
# OR for bonus content
episodeNumber: 42.5
```

**Best practices:**
- Use sequential numbering starting from 1
- For bonus episodes, use decimal notation (2.5)
- For trailers, use 0 for season trailers
- Maintain consistent numbering scheme

**Examples:**
```yaml
# Standard episodes
episodeNumber: 1
episodeNumber: 42
episodeNumber: 100

# Bonus episodes
episodeNumber: 42.5
episodeNumber: 10.1

# Season trailer
episodeNumber: 0
```

**Display:**
- Shows as "Episode #105" on pages
- Used for sorting
- Appears in URLs (if configured)

### draft
- **Type:** Boolean
- **Required:** No
- **Default:** `false`
- **Purpose:** Hide unpublished content

```yaml
draft: false  # Published
draft: true   # Hidden
```

**Behavior:**
- `draft: true` - Episode is hidden from site (unless in dev mode)
- `draft: false` - Episode is published and visible
- Default is `false` if not specified

**Use cases:**
- Work in progress episodes
- Scheduled content (use with `publishDate` instead)
- Testing episode layouts
- Collaboration before publication

**Dev mode:**
```bash
# See draft content in development
hugo server -D

# Build including drafts
hugo -D
```

## Minimal Episode Template

The absolute minimum required frontmatter:

```yaml
---
title: "Your Episode Title"
created: 2025-10-27
episodeNumber: 1
---
```

This will work, but you'll want to add more fields for better functionality.

## Recommended Minimal Template

A better starting point includes these essential fields:

```yaml
---
title: "Your Episode Title"
created: 2025-10-27
episodeNumber: 1
draft: false

# Recommended additions
featuredImage: "/images/episode.jpg"
duration: "45:00"
summary: "Brief episode description"

tags: ["topic1", "topic2"]
categories: ["Category"]
---
```

## Validation

The theme will display warnings if required fields are missing:

**Missing title:**
```
Warning: Episode missing title field
```

**Missing created:**
```
Warning: Episode missing publication date
```

**Missing episodeNumber:**
```
Warning: Episode missing episode number
```

## Common Mistakes

### 1. Incorrect Date Format
```yaml
# Wrong
created: 10/27/2025
created: Oct 27, 2025

# Correct
created: 2025-10-27
```

### 2. Episode Number as String
```yaml
# Wrong
episodeNumber: "42"

# Correct
episodeNumber: 42
```

### 3. Missing Quotes on Special Titles
```yaml
# Wrong (will cause YAML error)
title: Episode 1: Getting Started

# Correct
title: "Episode 1: Getting Started"
```

### 4. Incorrect YAML Formatting
```yaml
# Wrong (missing space after colon)
title:"Episode Title"

# Correct
title: "Episode Title"
```

## Quick Reference

| Field | Type | Required | Default | Example |
|-------|------|----------|---------|---------|
| `title` | string | Yes | - | `"Episode Title"` |
| `created` | date | Yes | - | `2025-10-27` |
| `episodeNumber` | int | Yes | - | `42` |
| `draft` | bool | No | `false` | `false` |

## Related Documentation

- [Complete Frontmatter Reference](/episodes/frontmatter-options-demo/) - All available fields
- [Podcast Information Fields](/episodes/frontmatter-podcast-info/) - Podcast-specific metadata
- [Media Configuration](/episodes/frontmatter-media-config/) - Images and duration
- [Content Metadata](/episodes/frontmatter-content-metadata/) - Tags, categories, descriptions

## Image Attribution

Featured image: Photo by Donald Tong from Pexels (CC0 License)
- Source: https://www.pexels.com/photo/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-325229/
- License: Creative Commons Zero (CC0)
- Free to use with no attribution required

---

**Documentation Version:** 1.0
**Last Updated:** 2025-10-27
**Theme:** Tokyo-Nord
**Hugo Version:** 0.122+
