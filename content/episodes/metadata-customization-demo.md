---
title: "Customizing Episode Metadata: Complete Reference"
created: 2025-10-27
draft: false

# Episode details - All customizable fields
episodeNumber: 103
season: 2
episodeType: "full"

# Podcast info - Can override site defaults
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: ["Jane Developer", "Alex Designer"]

# Media
featuredImage: "/images/samples/sample-tech-workspace.jpg"
duration: "1:15:45"

# Content metadata
tags: ["documentation", "metadata", "customization", "configuration"]
categories: ["Technology", "Documentation"]
summary: "Learn how to customize all episode metadata fields including episode numbers, seasons, hosts, guests, duration, and more."
description: "Complete reference guide for customizing episode metadata in the Tokyo-Nord theme, covering all available frontmatter fields and configuration options."
keywords: ["hugo", "podcast", "metadata", "frontmatter", "episode"]

# Display options
overlayMetadata: true
overlayPosition: "mid-left"
overlay_filter: "rgba(0, 50, 100, 0.4)"
transparency: false
toc: true
lightgallery: true
topicsOn: true

# Advanced options
hiddenFromHomePage: false
hiddenFromSearch: false
linkToMarkdown: true

# Code block settings
code:
  copy: true
  maxShownLines: 50

# Social and interaction
share:
  enable: true

comment:
  enable: true

# Image credit
imageCredit: "Photo by Lex Photography from Pexels (CC0)"
---

## About This Episode

This documentation episode provides a complete reference for all customizable metadata fields available in episode frontmatter. Use this guide to understand what each field does and how to configure it.

## Required Fields

Every episode must include these fields:

```yaml
title: "Episode Title"
created: 2025-10-27
episodeNumber: 1
```

### Field Details

**`title`** - Episode title (string)
- Displayed in episode cards and single pages
- Used in SEO and social sharing
- Keep under 60 characters for best SEO

**`created`** - Episode publication date
- Format: `YYYY-MM-DD` or RFC3339 timestamp
- Used for sorting and display
- Can include time: `2025-10-27T14:30:00-07:00`

**`episodeNumber`** - Episode number (integer)
- Displayed as "Episode #103"
- Used for ordering and identification
- Can be any positive integer

## Episode Details

### Season Information

```yaml
season: 2
```

Optional field to organize episodes into seasons.

### Episode Type

```yaml
episodeType: "full"
```

**Available types:**
- `full` - Full-length episode (default)
- `bonus` - Bonus content
- `trailer` - Show trailer
- `interview` - Interview episode
- `solo` - Solo episode

### Duration

```yaml
duration: "1:15:45"
```

Format: `H:MM:SS` or `MM:SS`

Examples:
- `"45:30"` - 45 minutes, 30 seconds
- `"1:15:45"` - 1 hour, 15 minutes, 45 seconds
- `"5:00"` - 5 minutes

## Podcast Information

Override site-wide podcast settings per episode:

```yaml
podcast: "Special Series Name"
host: "Guest Host Name"
guests: ["Guest 1", "Guest 2", "Guest 3"]
```

### Multiple Hosts

```yaml
host: ["Primary Host", "Co-Host"]
```

Or as a comma-separated string:
```yaml
host: "Host One, Host Two"
```

### Guest Configuration

```yaml
guests: []  # No guests
guests: ["Single Guest"]  # One guest
guests: ["Guest 1", "Guest 2"]  # Multiple guests
```

## Content Metadata

### Tags

```yaml
tags: ["technology", "web development", "hugo", "documentation"]
```

**Best practices:**
- Use 3-7 tags per episode
- Keep tags consistent across episodes
- Use lowercase for consistency
- Enable `topicsOn: true` to display tags as "Topics Discussed"

### Categories

```yaml
categories: ["Technology", "Documentation"]
```

Broader grouping than tags. Use 1-2 categories per episode.

### Summary

```yaml
summary: "Brief one-sentence description of the episode for cards and previews."
```

**Guidelines:**
- Keep under 160 characters
- One to two sentences maximum
- Used in episode cards and RSS feeds
- Clear and compelling

### Description

```yaml
description: "Longer, more detailed description for SEO and social sharing. This can be several sentences explaining what listeners will learn and why they should tune in."
```

**Guidelines:**
- 2-3 sentences
- Include relevant keywords naturally
- Used for SEO meta description
- Can be longer than summary

### Keywords

```yaml
keywords: ["podcast", "hugo", "web development", "static site"]
```

Optional SEO keywords array.

## Media Configuration

### Featured Image

```yaml
featuredImage: "/images/episode-cover.jpg"
```

**Paths:**
- Absolute: `/images/file.jpg` (from static folder)
- Relative: `images/file.jpg` (in episode bundle)
- URL: `https://example.com/image.jpg`

**Recommendations:**
- Use 1200x1200px or larger
- Keep file size under 500KB
- Use JPG for photos, PNG for graphics
- Maintain consistent aspect ratio

### Image Attribution

```yaml
imageCredit: "Photo by Photographer Name from Pexels (CC0)"
```

Give credit to image creators, even when using CC0/free images.

## Display Options

### Overlay Metadata

```yaml
overlayMetadata: true
overlayPosition: "lower-left"
```

Display metadata on the image instead of above it.

**Positions:** `top-left`, `top-center`, `top-right`, `mid-left`, `mid-center`, `mid-right`, `lower-left`, `lower-center`, `lower-right`

### Overlay Filter

```yaml
overlay_filter: 0.4
# OR
overlay_filter: "rgba(255, 0, 0, 0.3)"
# OR
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
```

Add colored overlay to images.

### Transparency

```yaml
transparency: true
transparencyAmount: 0.85
```

Make the image semi-transparent. Range: 0.0 (invisible) to 1.0 (opaque).

## Page Features

### Table of Contents

```yaml
toc: true
```

Enable/disable table of contents for the episode.

### Light Gallery

```yaml
lightgallery: true
```

Enable lightbox for images in the episode content.

### Topics Display

```yaml
topicsOn: true
```

Show "Topics Discussed" section with tags.

### Link to Markdown

```yaml
linkToMarkdown: true
```

Show link to view raw markdown source.

## Code Block Settings

```yaml
code:
  copy: true
  maxShownLines: 50
```

Configure code block behavior:
- `copy` - Enable copy button
- `maxShownLines` - Collapse code blocks longer than this

## Social Features

### Share Buttons

```yaml
share:
  enable: true
```

Enable social sharing buttons.

### Comments

```yaml
comment:
  enable: true
```

Enable comments (requires comment system configuration in hugo.toml).

## Visibility & SEO

### Draft Status

```yaml
draft: false
```

`true` = Not published, `false` = Published

### Hidden from Home Page

```yaml
hiddenFromHomePage: false
```

Exclude from home page listings.

### Hidden from Search

```yaml
hiddenFromSearch: false
```

Exclude from site search results.

### RSS Full Text

```yaml
rssFullText: false
```

Include full content in RSS feed instead of summary.

### SEO Images

```yaml
seo:
  images: ["/images/seo-image.jpg"]
```

Specific images for social sharing (Open Graph, Twitter Cards).

## Advanced Hugo Fields

### Last Modified Date

```yaml
lastmod: 2025-10-28T10:00:00-07:00
```

Track when content was last updated.

### Publish Date

```yaml
publishDate: 2025-11-01T00:00:00-07:00
```

Schedule future publication.

### Expiry Date

```yaml
expiryDate: 2026-12-31T23:59:59-07:00
```

Auto-hide content after this date.

### Weight

```yaml
weight: 10
```

Custom ordering (lower numbers appear first).

### Slug

```yaml
slug: "custom-url-slug"
```

Override auto-generated URL slug.

### Aliases

```yaml
aliases: ["/old-url/", "/another-old-url/"]
```

URL redirects for renamed content.

## Complete Example

Here's a fully configured episode frontmatter:

```yaml
---
title: "Complete Episode Configuration Example"
created: 2025-10-27T14:30:00-07:00
draft: false

# Episode details
episodeNumber: 103
season: 2
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: ["Jane Developer", "Alex Designer"]

# Media
featuredImage: "/images/samples/sample-tech-workspace.jpg"
duration: "1:15:45"

# Content
tags: ["documentation", "metadata", "customization"]
categories: ["Technology", "Documentation"]
summary: "Complete reference for episode metadata customization."
description: "Learn all metadata fields and configuration options."
keywords: ["hugo", "podcast", "metadata"]

# Display
overlayMetadata: true
overlayPosition: "mid-left"
overlay_filter: "rgba(0, 50, 100, 0.4)"
transparency: false
toc: true
lightgallery: true
topicsOn: true

# Advanced
hiddenFromHomePage: false
hiddenFromSearch: false
linkToMarkdown: true

code:
  copy: true
  maxShownLines: 50

share:
  enable: true

comment:
  enable: true

# Attribution
imageCredit: "Photo by Photographer (CC0)"
---
```

## Field Reference Table

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `title` | string | Yes | - | Episode title |
| `created` | date | Yes | - | Publication date |
| `episodeNumber` | int | Yes | - | Episode number |
| `season` | int | No | - | Season number |
| `episodeType` | string | No | "full" | Episode type |
| `podcast` | string | No | Site default | Podcast name |
| `host` | string/array | No | Site default | Host name(s) |
| `guests` | array | No | [] | Guest names |
| `duration` | string | No | - | Episode duration |
| `featuredImage` | string | No | - | Image path/URL |
| `tags` | array | No | [] | Topic tags |
| `categories` | array | No | [] | Content categories |
| `summary` | string | No | - | Brief description |
| `description` | string | No | - | Full description |
| `overlayMetadata` | bool | No | false | Metadata on image |
| `overlayPosition` | string | No | "lower-left" | Overlay position |
| `overlay_filter` | mixed | No | - | Color overlay |
| `transparency` | bool | No | false | Image transparency |
| `toc` | bool | No | Site default | Table of contents |
| `draft` | bool | No | false | Draft status |

## Related Documentation

- `/episodes/overlay-features-demo/` - Overlay features
- `/episodes/player-embeds-demo/` - Player embedding
- `/episodes/episode-types-demo/` - Episode type examples
- `/docs/content-guide/` - Complete content guide

## Image Attribution

Featured image: Photo by Lex Photography from Pexels (CC0 License)
- Source: https://www.pexels.com/photo/macbook-pro-near-white-open-book-1229861/
- License: Creative Commons Zero (CC0)
- Free to use with no attribution required

---

**Documentation Version:** 1.0
**Last Updated:** 2025-10-27
**Theme:** Tokyo-Nord
