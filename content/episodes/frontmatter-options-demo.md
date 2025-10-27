---
title: "Complete Frontmatter Options Reference"
created: 2025-10-27
draft: false

# Episode details
episodeNumber: 105
season: 1
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-video-production.jpg"
duration: "42:00"

# Content
tags: ["documentation", "frontmatter", "yaml", "configuration", "reference"]
categories: ["Documentation", "Technology"]
summary: "Complete reference guide to all available frontmatter options for podcast episodes, with examples, descriptions, and best practices."
description: "Master episode frontmatter configuration with this comprehensive guide covering all available fields, their purposes, and how to use them effectively in the Tokyo-Nord theme."
keywords: ["frontmatter", "yaml", "hugo", "configuration", "metadata"]

# Display options - Showcasing multiple features
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

## About This Documentation

This episode serves as a complete reference guide for all frontmatter options available in the Tokyo-Nord theme. Each field is documented with:

- **Purpose** - What the field does
- **Type** - Data type (string, boolean, array, etc.)
- **Required** - Whether it's mandatory
- **Default** - Default value if not specified
- **Examples** - Real-world usage examples

## Frontmatter Structure

Frontmatter is YAML configuration at the top of your markdown file:

```yaml
---
title: "Episode Title"
created: 2025-10-27
episodeNumber: 1
# ... more fields ...
---
```

**Rules:**
- Must start and end with `---`
- Uses YAML syntax
- Indent with 2 spaces (not tabs)
- Strings with special characters need quotes
- Arrays use bracket `[]` or dash `-` syntax

## Essential Fields

### title
- **Type:** String
- **Required:** Yes
- **Purpose:** Episode title displayed everywhere
- **Best practice:** Keep under 60 characters for SEO

```yaml
title: "How to Build a Successful Podcast"
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

### draft
- **Type:** Boolean
- **Required:** No
- **Default:** `false`
- **Purpose:** Hide unpublished content

```yaml
draft: false  # Published
draft: true   # Hidden
```

## Related Documentation

For additional frontmatter options including podcast information, episode organization, media configuration, and more advanced features, see:

- `/episodes/frontmatter-podcast-info/` - Podcast info, episode organization, and media options
- `/episodes/metadata-customization-demo/` - Metadata deep dive
- `/episodes/overlay-features-demo/` - Overlay features
- `/episodes/player-embeds-demo/` - Player embedding
- `/episodes/episode-types-demo/` - Episode types
- `/docs/content-guide/` - Content creation guide

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
