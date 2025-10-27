---
title: "Podcast Information Fields"
created: 2025-10-27
draft: false

# Episode details
episodeNumber: 105.2
season: 1
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-video-production.jpg"
duration: "18:00"

# Content
tags: ["documentation", "frontmatter", "podcast", "hosts", "guests"]
categories: ["Documentation", "Technology"]
summary: "Learn how to configure podcast-specific fields including podcast name, hosts, and guests in episode frontmatter."
description: "Complete guide to configuring podcast information in frontmatter: podcast name overrides, single and multiple hosts, and guest management."
keywords: ["frontmatter", "podcast", "hosts", "guests", "configuration"]

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

# Image credit
imageCredit: "Photo by Donald Tong from Pexels (CC0)"
---

## About This Guide

This guide covers podcast-specific frontmatter fields that control the podcast name, host information, and guest details for individual episodes.

## Podcast Name

### podcast
- **Type:** String
- **Required:** No
- **Default:** Site-wide setting
- **Purpose:** Override podcast name for special series

```yaml
podcast: "Tokyo Dev Podcast"
# OR for special series
podcast: "Tokyo Dev: Behind the Scenes"
```

**When to override:**
- Special miniseries within your main podcast
- Guest-hosted series
- Seasonal variations
- Spin-off content

**Examples:**
```yaml
# Main podcast
podcast: "The Tech Show"

# Holiday special
podcast: "The Tech Show: Holiday Special"

# Guest series
podcast: "The Tech Show: Guest Host Series"

# Miniseries
podcast: "The Tech Show: Deep Dive into AI"
```

**Site default:**
Set in `hugo.toml`:
```toml
[params.podcast]
  name = "Your Podcast Name"
```

Episodes without `podcast` field will use this default.

## Host Information

### host (Single Host)
- **Type:** String
- **Required:** No
- **Default:** Site-wide setting
- **Purpose:** Episode host name

```yaml
# Single host
host: "John Doe"
```

**Best practices:**
- Use consistent name formatting across episodes
- Include full name, not just first name
- Match name to other platforms (Apple Podcasts, Spotify)

### host (Multiple Hosts)
- **Type:** String or Array
- **Purpose:** Multiple episode hosts

```yaml
# Array format (recommended)
host: ["John Doe", "Jane Smith"]

# String format (alternative)
host: "John Doe, Jane Smith"
```

**Array format vs String format:**

**Array format** (recommended):
```yaml
host: ["John Doe", "Jane Smith", "Alex Johnson"]
```
- Cleaner
- Easier to parse programmatically
- Better for structured data
- Works with theme templates

**String format:**
```yaml
host: "John Doe, Jane Smith, Alex Johnson"
```
- Simpler for quick edits
- Works for display purposes
- Less structured

**Site default:**
Set in `hugo.toml`:
```toml
[params.podcast]
  host = "Default Host Name"
  # OR
  host = ["Host 1", "Host 2"]
```

**Display:**
- Shows as "Hosted by John Doe and Jane Smith"
- Appears in episode metadata
- Used in structured data (Schema.org)

## Guest Information

### guests
- **Type:** Array
- **Required:** No
- **Default:** `[]` (no guests)
- **Purpose:** Guest names for the episode

```yaml
guests: []  # No guests
guests: ["Guest Name"]  # Single guest
guests: ["Guest 1", "Guest 2", "Guest 3"]  # Multiple
```

**Examples:**

**No guests:**
```yaml
guests: []
```

**Single guest:**
```yaml
guests: ["Dr. Jane Smith"]
```

**Multiple guests:**
```yaml
guests: ["Dr. Jane Smith", "Prof. John Doe", "Alex Developer"]
```

**Best practices:**
- Include titles/credentials when relevant (Dr., Prof.)
- Use full names
- Order guests by prominence in episode
- Maintain consistent name formatting

**Display:**
- Shows as "With guests: Jane Smith and John Doe"
- Appears below host information
- Used for interview episode types
- Can be styled differently in templates

## Common Configurations

### Solo Episode (Default Host)
```yaml
---
title: "Solo Episode"
created: 2025-10-27
episodeNumber: 42
# Uses site default host
guests: []
---
```

### Solo Episode (Override Host)
```yaml
---
title: "Guest Host Episode"
created: 2025-10-27
episodeNumber: 43
host: "Special Guest Host"
guests: []
---
```

### Co-Hosted Episode
```yaml
---
title: "Co-Hosted Discussion"
created: 2025-10-27
episodeNumber: 44
host: ["Primary Host", "Co-Host"]
guests: []
---
```

### Interview Episode (Single Guest)
```yaml
---
title: "Interview with Dr. Smith"
created: 2025-10-27
episodeNumber: 45
episodeType: "interview"
host: "Host Name"
guests: ["Dr. Jane Smith"]
---
```

### Interview Episode (Multiple Guests)
```yaml
---
title: "Panel Discussion"
created: 2025-10-27
episodeNumber: 46
episodeType: "interview"
host: "Host Name"
guests: ["Guest 1", "Guest 2", "Guest 3"]
---
```

### Multiple Hosts with Guests
```yaml
---
title: "Special Episode"
created: 2025-10-27
episodeNumber: 47
host: ["Host 1", "Host 2"]
guests: ["Special Guest"]
---
```

## Advanced Usage

### Rotating Hosts
For podcasts with rotating hosts, override per episode:

```yaml
# Episode 1
host: "Host A"

# Episode 2
host: "Host B"

# Episode 3
host: ["Host A", "Host C"]
```

### Guest Host Series
Special series with different hosts:

```yaml
podcast: "Main Podcast: Guest Host Series"
host: "Guest Host Name"
episodeType: "full"
```

### Miniseries
Override both podcast name and hosts:

```yaml
podcast: "Main Podcast: Special Miniseries"
host: "Miniseries Host"
season: 1
```

## Validation & Fallbacks

**If host field is missing:**
- Theme uses site-wide default from `hugo.toml`
- Warning may appear in development mode

**If guests field is missing:**
- Defaults to empty array `[]`
- No guest information displayed
- No errors or warnings

**If podcast field is missing:**
- Uses site-wide podcast name
- No errors or warnings

## Display Examples

**Single host, no guests:**
```
Hosted by John Doe
```

**Multiple hosts:**
```
Hosted by John Doe and Jane Smith
```

**With single guest:**
```
Hosted by John Doe
With guest: Dr. Jane Smith
```

**With multiple guests:**
```
Hosted by John Doe
With guests: Dr. Jane Smith, Prof. John Doe, and Alex Developer
```

## Structured Data

These fields populate Schema.org structured data:

```json
{
  "@type": "PodcastEpisode",
  "name": "Episode Title",
  "author": {
    "@type": "Person",
    "name": "Host Name"
  },
  "contributor": [
    {
      "@type": "Person",
      "name": "Guest Name"
    }
  ]
}
```

This improves:
- Search engine understanding
- Rich snippets in search results
- Voice assistant integration
- Podcast app metadata

## Quick Reference

| Field | Type | Required | Default | Example |
|-------|------|----------|---------|---------|
| `podcast` | string | No | Site default | `"Podcast Name"` |
| `host` | string/array | No | Site default | `"John Doe"` or `["John", "Jane"]` |
| `guests` | array | No | `[]` | `["Guest 1", "Guest 2"]` |

## Related Documentation

- [Essential Fields](/episodes/frontmatter-essential-fields/) - Required frontmatter
- [Episode Types](/episodes/episode-types-demo/) - Episode type configuration
- [Complete Reference](/episodes/frontmatter-options-demo/) - All frontmatter fields
- [Content Metadata](/episodes/frontmatter-content-metadata/) - Tags and descriptions

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
