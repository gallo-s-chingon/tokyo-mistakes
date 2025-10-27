---
title: "Featured Appearance Frontmatter Reference Guide"
date: 2025-01-15T10:00:00-07:00
draft: false

# Appearance details
type: "podcast"
podcastName: "Example Podcast"
hosts: ["Host Name"]
guests: []
externalUrl: "https://example.com/episode"

# Media
featuredImage: "/images/appearance-cover.jpg"

# Content
tags: ["reference", "documentation"]
summary: "Complete reference guide for featured appearance frontmatter fields with examples and explanations"
description: "Learn all available frontmatter fields for featured appearances in Tokyo-Nord theme"

# Display options
overlayMetadata: true
overlayPosition: "lower-left"
transparency: false
overlay_filter: 0.5
toc: true
lightgallery: false
topicsOn: true
---

## Featured Appearance Frontmatter Complete Reference

This post contains examples and documentation for all available frontmatter fields when creating featured appearances (guest appearances on other shows) in the Tokyo-Nord Hugo theme.

For the complete reference documentation, see: [QUICK-REFERENCE.md](/QUICK-REFERENCE.md)

---

## Complete Featured Appearance Frontmatter Template

Below is a complete example showing ALL available frontmatter fields for featured appearances with inline comments explaining each field:

```yaml
---
# ============================================================================
# REQUIRED FIELDS
# ============================================================================
title: "Episode Title or Appearance Name"  # REQUIRED - Title of the episode/appearance
date: 2024-09-24T14:30:00-06:00           # REQUIRED - Hugo publish date (RFC3339 format)

# ============================================================================
# APPEARANCE DETAILS
# ============================================================================
type: "podcast"                           # REQUIRED - Appearance type (see types below)
podcastName: "Their Podcast Name"         # Name of the show/platform you appeared on
hosts: ["Host Name", "Co-Host Name"]      # Array of show host names
guests: ["Other Guest"]                   # Other guests besides you (optional, array)
externalUrl: "https://spotify.com/..."    # Link to listen/watch/read the appearance

# ============================================================================
# MEDIA
# ============================================================================
featuredImage: /images/cover.jpg          # Path to episode artwork or show logo

# ============================================================================
# CONTENT & SEO
# ============================================================================
summary: "Brief one-liner description"    # Short description for cards/previews (1-2 sentences)
description: "Longer full description"    # Full description for SEO and meta tags
tags: ["topic1", "topic2", "topic3"]      # Array of topics discussed in the appearance
keywords: ["keyword1", "keyword2"]        # Optional SEO keywords array
categories: ["category"]                  # Optional content categories

# ============================================================================
# IMAGE DISPLAY OPTIONS
# ============================================================================

## Metadata Overlay (Shows metadata ON the image)
overlayMetadata: false                    # local + global: params.podcast.overlay.enable
                                          # true = metadata appears on image
                                          # false = metadata appears above image
overlayPosition: "lower-left"             # local + global: params.podcast.overlay.position
                                          # Options: top-left, top-center, top-right,
                                          #          mid-left, mid-center, mid-right,
                                          #          lower-left, lower-center, lower-right
                                          # Only visible on single pages when overlayMetadata: true
# Note: overlayOpacity is global only in hugo.toml (no local override)
#       Set in params.podcast.overlay.opacity (default: 0.85)

## Image Transparency (Makes image itself transparent)
transparency: true                        # local + global: params.images.transparency
                                          # Makes the IMAGE transparent (not the overlay)
transparencyAmount: 0.7                   # local + global: params.images.opacity
                                          # Range: 0.0 (fully transparent) to 1.0 (opaque)
                                          # Works when overlayMetadata is disabled

## Color Overlay Filter (Colored layer on top of image)
overlay_filter: 0.5                       # local only - works on BOTH single & list pages
                                          # Formats:
                                          # - Numeric: 0.5 = 50% black overlay
                                          # - RGBA: "rgba(255, 0, 0, 0.5)" = red overlay
                                          # - Gradient: "linear-gradient(...)" = gradient effect
# Examples:
# overlay_filter: 0.3                     # 30% black overlay
# overlay_filter: "rgba(100, 0, 100, 0.5)"  # Purple overlay at 50%
# overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"  # Gradient

# ============================================================================
# PAGE DISPLAY FEATURES
# ============================================================================
topicsOn: true                            # local + global: params.topicsDiscussed
                                          # Shows "Topics Discussed" section with tags
toc: false                                # local + global: params.page.toc.enable
                                          # Table of contents (usually false for appearances)
lightgallery: true                        # local + global: params.page.lightgallery
                                          # Enable lightbox gallery for images
linkToMarkdown: true                      # local + global: params.page.linkToMarkdown
                                          # Show link to raw markdown file

# ============================================================================
# CODE BLOCKS (if post contains code examples)
# ============================================================================
code:
  copy: true                              # local + global: params.page.code.copy
  maxShownLines: 50                       # local + global: params.page.code.maxShownLines

# ============================================================================
# SOCIAL & INTERACTION
# ============================================================================
share:
  enable: true                            # local + global: params.page.share.enable
                                          # Enable social share buttons

comment:
  enable: true                            # local + global: params.page.comment.enable
                                          # Enable comments (system configured in hugo.toml)

# ============================================================================
# VISIBILITY & SEO
# ============================================================================
draft: false                              # local only - Draft status (true = not published)
hiddenFromHomePage: false                 # local + global: params.page.hiddenFromHomePage
hiddenFromSearch: false                   # local + global: params.page.hiddenFromSearch
rssFullText: false                        # local + global: params.page.rssFullText

seo:
  images: []                              # local + global: params.page.seo.images
                                          # Array of images for SEO/social sharing

# ============================================================================
# ADVANCED HUGO FIELDS (Optional)
# ============================================================================
lastmod: 2024-01-20T10:00:00-07:00        # Last modified date (RFC3339)
publishDate: 2024-01-20T10:00:00-07:00    # Scheduled publish date
expiryDate: 2099-12-31T00:00:00-07:00     # Content expiry date
weight: 0                                 # Content ordering weight (lower = first)
slug: "custom-url-slug"                   # URL slug override
aliases: ["/old-url/", "/another-old-url/"]  # URL redirects (array)
---
```

---

## Field Categories

### Required vs Optional Fields

**REQUIRED FIELDS:**
- `title` - Episode/appearance title (must be present)
- `date` - Publish date in RFC3339 format (e.g., `2024-09-24T14:30:00-06:00`)
- `type` - Appearance type (see types below)

**COMMONLY USED:**
- `podcastName` - Name of the show/platform
- `hosts` - Host name(s)
- `externalUrl` - Link to the episode
- `featuredImage` - Episode artwork or show logo
- `summary` - Brief description for cards
- `tags` - Topics discussed

**OPTIONAL:**
- `guests` - Other guests besides you
- All display and styling options

---

## Appearance Types

The `type` field categorizes your appearance. Available types:

| Type | Description | Example Use |
|------|-------------|-------------|
| `podcast` | Podcast guest appearance | Interview on another podcast |
| `interview` | Written or video interview | Magazine interview, blog Q&A |
| `video` | Video content | YouTube collaboration, documentary |
| `conference` | Conference talk or panel | Tech conference, keynote speech |
| `talk` | Speaking engagement | Meetup talk, workshop |
| `panel` | Panel discussion | Conference panel, roundtable |

**Most common:** `podcast` and `interview`

---

## Configuration Scopes

Understanding when fields use local vs global configuration:

### Local Only
These fields can ONLY be set in frontmatter:
- `title`, `date`, `draft`
- `type`, `podcastName`, `hosts`, `guests`
- `externalUrl`
- `summary`, `description`, `tags`, `categories`
- `overlay_filter`

### Local + Global
These fields can be set in frontmatter OR hugo.toml (local overrides global):
- `overlayMetadata` → global: `params.podcast.overlay.enable`
- `overlayPosition` → global: `params.podcast.overlay.position`
- `transparency` → global: `params.images.transparency`
- `transparencyAmount` → global: `params.images.opacity`
- `toc` → global: `params.page.toc.enable`
- `lightgallery` → global: `params.page.lightgallery`
- `share.enable` → global: `params.page.share.enable`
- `comment.enable` → global: `params.page.comment.enable`

### Global Only
These fields can ONLY be set in hugo.toml (no frontmatter override):
- Overlay opacity → `params.podcast.overlay.opacity`
- SEO publisher → `params.page.seo.publisher.name`, `params.page.seo.publisher.logoUrl`

---

## Common Configurations

### Minimal Appearance (Required Fields Only)
```yaml
---
title: "Interview on Example Podcast"
date: 2024-09-24T14:30:00-06:00
type: podcast
podcastName: "Example Podcast"
hosts: ["Host Name"]
externalUrl: "https://spotify.com/episode/123"
featuredImage: /images/appearance.jpg
summary: "Discussing topic on Example Podcast"
tags: ["topic1", "topic2"]
---
```

### Podcast Appearance with Player
```yaml
---
title: "Guest on Tech Talk Show"
date: 2024-09-24T14:30:00-06:00
type: podcast
podcastName: "Tech Talk"
hosts: ["Host Name"]
externalUrl: "https://open.spotify.com/episode/abc123"
featuredImage: /images/tech-talk-cover.jpg
summary: "Discussing AI and machine learning on Tech Talk podcast"
tags: ["AI", "technology", "interview"]
---

{{< podcast-spotify "abc123" >}}

Episode description and show notes go here...
```

### Conference Talk
```yaml
---
title: "Keynote at DevCon 2024"
date: 2024-09-24T14:30:00-06:00
type: conference
podcastName: "DevCon 2024"
hosts: []
externalUrl: "https://devcon.com/talks/keynote"
featuredImage: /images/devcon-2024.jpg
summary: "Keynote presentation on modern web development"
tags: ["conference", "web development", "speaking"]
categories: ["Technology"]
---
```

### Video Collaboration
```yaml
---
title: "YouTube Collab with Creator Name"
date: 2024-09-24T14:30:00-06:00
type: video
podcastName: "Creator Name's Channel"
hosts: ["Creator Name"]
externalUrl: "https://youtube.com/watch?v=abc123"
featuredImage: /images/youtube-collab.jpg
summary: "Collaborative video discussing creative process"
tags: ["YouTube", "collaboration", "content creation"]
---

{{< podcast-youtube "abc123" >}}

Video description...
```

### Panel Discussion
```yaml
---
title: "Panel: Future of Technology"
date: 2024-09-24T14:30:00-06:00
type: panel
podcastName: "Tech Summit 2024"
hosts: ["Moderator Name"]
guests: ["Panelist 1", "Panelist 2", "Panelist 3"]
externalUrl: "https://techsummit.com/panel"
featuredImage: /images/tech-summit-panel.jpg
summary: "Panel discussion on the future of AI and emerging technologies"
tags: ["panel", "AI", "future tech"]
---
```

### Appearance with Styled Overlay
```yaml
---
title: "Interview with Custom Styling"
date: 2024-09-24T14:30:00-06:00
type: interview
podcastName: "Style Magazine"
hosts: ["Editor Name"]
externalUrl: "https://magazine.com/interview"
featuredImage: /images/styled-interview.jpg
overlayMetadata: true
overlayPosition: "lower-right"
overlay_filter: "rgba(0, 100, 200, 0.4)"
summary: "Styled interview feature with custom overlay effects"
tags: ["interview", "design"]
---
```

---

## Understanding Image Display Options

Tokyo-Nord offers three independent ways to style your featured images:

### 1. Metadata Overlay (`overlayMetadata`)
Shows appearance metadata (title, type, hosts) directly ON the featured image instead of above it.
- **Scope:** Single pages only (`/featured/post-name/`)
- **Control:** `overlayMetadata: true/false` + `overlayPosition`
- **Opacity:** Global setting only (`params.podcast.overlay.opacity`)

### 2. Image Transparency (`transparency`)
Makes the IMAGE itself semi-transparent.
- **Scope:** Single pages
- **Control:** `transparency: true/false` + `transparencyAmount: 0.0-1.0`
- **Use case:** Soften images, blend with background

### 3. Color Overlay Filter (`overlay_filter`)
Adds a colored layer ON TOP of the image.
- **Scope:** Both single pages AND list pages (hero cards)
- **Formats:**
  - Numeric: `0.5` = 50% black overlay
  - RGBA: `"rgba(255, 0, 0, 0.5)"` = red overlay
  - Gradient: `"linear-gradient(...)"`
- **Use case:** Improve text readability, creative effects

**These can be combined!** For example:
```yaml
transparency: true
transparencyAmount: 0.8
overlay_filter: "rgba(100, 0, 100, 0.3)"
```

---

## Adding Embedded Players

To embed a player from the platform where your appearance was published, use shortcodes in the post content:

### Spotify
```markdown
{{< podcast-spotify "episode-id" >}}
```

**Finding the Episode ID:**
From URL: `https://open.spotify.com/episode/667dex4sU7Z54upPO4Up4n`
The ID is: `667dex4sU7Z54upPO4Up4n`

### YouTube
```markdown
{{< podcast-youtube "video-id" >}}
```

### Apple Podcasts
```markdown
{{< podcast-apple "podcast-id" "episode-id" >}}
```

### Other Platforms
See QUICK-REFERENCE.md for complete list of supported players:
- Blubrry, Libsyn, Podbean, Simplecast, Spreaker, Transistor, Buzzsprout

---

## Episode vs Featured: Key Differences

### For YOUR Episodes (`content/episodes/`)
```yaml
episodeNumber: 42
podcast: "Your Podcast Name"    # Your show
host: "Your Name"               # You
guests: ["Guest Name"]          # Your guests
embedPlayers:                   # Your players
  - type: "spotify"
    id: "episode-id"
```

### For Appearances on OTHER Shows (`content/featured/`)
```yaml
type: podcast
podcastName: "Their Podcast Name"  # Their show
hosts: ["Their Host"]              # Their host(s)
guests: ["Other Guest"]            # Other guests (you're implied)
externalUrl: "https://..."         # Link to their episode
```

Then add player in content:
```markdown
{{< podcast-spotify "episode-id" >}}
```

---

## Date Format

Hugo uses RFC3339 timestamp format:
```
YYYY-MM-DDTHH:MM:SS±TIMEZONE
```

Examples:
- `2024-09-24T14:30:00-06:00` (Mountain Time, 2:30 PM)
- `2024-01-15T10:00:00-07:00` (Pacific Time, 10:00 AM)
- `2024-12-25T00:00:00Z` (UTC, midnight)

---

## Cross-References

**Complete Field Documentation:**
- [QUICK-REFERENCE.md](/QUICK-REFERENCE.md) - Full frontmatter reference

**Related Guides:**
- `/episodes/frontmatter-example/` - Episode frontmatter reference
- `/blog/frontmatter-example/` - Blog post frontmatter reference

**Theme Documentation:**
- `/docs/content-guide/` - Content creation guide
- `/docs/appearance-types/` - Detailed appearance types guide
- `/docs/podcast-features/` - Podcast-specific features

---

## Tips & Best Practices

1. **Always include:** `title`, `date`, `type`, `podcastName`, `hosts`, `externalUrl`, `featuredImage`, `summary`, `tags`
2. **Type selection:** Choose the most specific type (e.g., `podcast` over generic `interview` for podcast appearances)
3. **External URLs:** Link to the most authoritative source (Spotify, Apple, YouTube, etc.)
4. **Images:** Use the show's official artwork when available
5. **Tags:** Use consistent tags across episodes for better organization
6. **Summary:** Keep under 160 characters for SEO
7. **Hosts:** Include all hosts, even if there are multiple
8. **Guests:** Only list OTHER guests (you're implied as a guest)

---

## Appearance Type Examples

### Podcast Guest Appearance
```yaml
type: podcast
podcastName: "The Tech Show"
hosts: ["Host Name"]
externalUrl: "https://spotify.com/..."
```

### Written Interview
```yaml
type: interview
podcastName: "Tech Magazine"
hosts: ["Interviewer Name"]
externalUrl: "https://magazine.com/interview"
```

### Conference Keynote
```yaml
type: conference
podcastName: "TechCon 2024"
externalUrl: "https://techcon.com/keynote"
```

### YouTube Video
```yaml
type: video
podcastName: "YouTuber's Channel"
hosts: ["YouTuber Name"]
externalUrl: "https://youtube.com/watch?v=..."
```

### Speaking Engagement
```yaml
type: talk
podcastName: "Monthly Meetup"
externalUrl: "https://meetup.com/event"
```

### Panel Discussion
```yaml
type: panel
podcastName: "Industry Summit"
hosts: ["Moderator"]
guests: ["Panelist 1", "Panelist 2"]
externalUrl: "https://summit.com/panel"
```

---

## Testing Your Frontmatter

After creating a featured appearance:

1. Run Hugo development server:
   ```bash
   hugo server -D
   ```

2. Check these pages:
   - List page: `http://localhost:1313/featured/`
   - Single page: `http://localhost:1313/featured/your-appearance-name/`

3. Verify:
   - Metadata displays correctly (type, podcast name, hosts)
   - Images load and overlays work
   - External link works
   - Players embed properly (if added)
   - Tags and topics appear

---

**Last Updated:** 2025-01-15
**Theme Version:** Tokyo-Nord v1.0
**Hugo Version:** 0.122+
