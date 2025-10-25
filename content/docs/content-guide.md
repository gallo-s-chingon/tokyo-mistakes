---
title: "Content Guide: Episodes & Featured Appearances"
date: 2025-01-20
draft: false
toc: true
---

This guide explains how to add podcast episodes, featured appearances, and properly use podcast players in Tokyo-Nord.

## Understanding Content Types

Tokyo-Nord has three main content types:

1. **Episodes** (`content/episodes/`) - Your own podcast episodes
2. **Featured** (`content/featured/`) - Your appearances on other podcasts
3. **Blog** (`content/blog/`) - Blog posts and articles

## Understanding Image Terminology in Hugo

**Important:** Hugo and this theme use specific terminology for images that can be confusing because the SAME image appears differently in different contexts.

### The Front Matter Field: `featuredImage`

In your post's YAML front matter, you always use the parameter name **`featuredImage`**:

```yaml
featuredImage: /images/my-cover.jpg
```

This single field controls the image shown in BOTH list and single page contexts.

### How the Same Image Displays in Different Contexts

**On List Pages** (`/episodes/`, `/featured/`, `/blog/`):
- The `featuredImage` renders as a **"hero card image"** or **"card image"**
- ALWAYS has a 70% opacity overlay with metadata superimposed
- Shows in responsive grid layout (3 → 2 → 1 columns)

**On Single Pages** (individual post):
- The SAME `featuredImage` renders as a **"post image"** or **"featured image"**
- By default: full size, NO overlay (metadata appears above the image)
- Optional: can enable overlay with `overlayMetadata: true` (see "Metadata Overlays on Single Pages" section)

### Summary

- **Field name in front matter:** `featuredImage` (always the same)
- **List page display:** "hero card image" (always has overlay)
- **Single page display:** "post image" or "featured image" (overlay optional)
- **Same value, different styling** depending on context

### Hero Cards vs Single Pages

**Important distinction:**

- **List Pages** (`/episodes/`, `/featured/`, `/blog/`) - Show hero cards with:
  - Hero card image (from `featuredImage`) with 70% opacity overlay
  - Metadata superimposed on the image
  - Responsive grid layout (3 → 2 → 1 columns)

- **Single Pages** (individual post) - Default behavior:
  - Title and metadata at the top
  - Post image (from `featuredImage`) below - no overlay
  - Full content

**New:** You can now enable metadata overlays on single page post images with `overlayMetadata: true` in front matter or by enabling `params.podcast.overlay.enable` in hugo.toml. See "Metadata Overlays on Single Pages" section below for details.

---

## Adding Podcast Episodes

### Step 1: Create Episode File

```bash
hugo new episodes/my-episode.md
```

### Step 2: Configure Front Matter

```yaml
---
title: "Episode Title"
created: 2024-01-20  # Or parsed from filename like 2024-01-20-episode-name.md
draft: false

# Episode details
episodeNumber: 42
season: 1
episodeType: "full"  # full, trailer, bonus

# Podcast info (overrides site config if specified)
podcast: "Your Podcast Name"  # Leave empty to use site.Params.podcast.name
host: "Your Name"  # Leave empty to use site.Params.podcast.hostName
guests: ["Guest Name 1", "Guest Name 2"]

# Media
featuredImage: "/images/episode-042-cover.jpg"
duration: "1:23:45"

# Podcast players - ADD SPOTIFY PLAYER HERE
embedPlayers:
  - type: "spotify"
    id: "4rOoJ6Egrf8K2IrywzwOMk"  # Get from Spotify URL
  - type: "youtube"
    id: "dQw4w9WgXcQ"
  # - type: "apple"
  #   podcastId: "1234567890"
  #   episodeId: "1000123456789"

# Content
tags: ["AI", "machine-learning", "tech", "interviews"]  # Topics discussed
summary: "Short description for list pages and SEO"
description: "Longer description for search engines"

# Display options
overlayMetadata: false  # Set to true to show metadata overlay on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
toc: true
lightgallery: false
---
```

### Step 3: Add Episode Content

```markdown
## Show Notes

Discussion points...

## Timestamps

- 00:00 - Intro
- 05:30 - Main topic
- 45:00 - Q&A

## Guest Links

- [Guest Website](https://example.com)

## Resources Mentioned

- [Resource 1](https://example.com)
```

---

## Adding Featured Appearances

When you appear on someone else's podcast.

### Step 1: Create Featured File

```bash
hugo new featured/appearance-name.md
```

### Step 2: Configure Front Matter

```yaml
---
title: "Episode Title"
created: 2021-09-24  # Or parsed from filename like 2021-09-24-episode-name.md
draft: false

# Appearance details
type: podcast  # See docs/appearance-types.md for all options
podcastName: "Blood Rituals Podcast"  # Show/platform/publication name
hosts: ["Nicole"]  # Show host(s)
guests: []  # Other guests (besides you)

# Links
externalUrl: "https://open.spotify.com/episode/667dex4sU7Z54upPO4Up4n"

# Media
featuredImage: /images/brnf.jpg

# Content
tags: ["spirituality", "santa-muerte", "third-eye", "ancestors"]  # Topics discussed
summary: "Short description for cards"
description: "Full description for SEO"

# Display options
overlayMetadata: false  # Set to true to show metadata overlay on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
toc: false
lightgallery: true
---
```

### Step 3: Add Spotify Player (Featured)

Replace raw HTML iframes with shortcodes:

**❌ Don't use raw HTML:**
```html
<iframe src="https://open.spotify.com/embed/episode/667dex4sU7Z54upPO4Up4n" ...></iframe>
```

**✅ Use the shortcode:**
```markdown
{{< podcast-spotify "667dex4sU7Z54upPO4Up4n" >}}
```

### How to Get Spotify Episode ID

1. Open episode on Spotify
2. Click **Share** → **Copy Episode Link**
3. URL looks like: `https://open.spotify.com/episode/667dex4sU7Z54upPO4Up4n`
4. The ID is: `667dex4sU7Z54upPO4Up4n`

---

## Front Matter Field Reference

### Required Fields (All Content Types)

```yaml
title: "Post Title"
created: 2024-01-20  # Can be parsed from filename YYYY-MM-DD-title.md
draft: false  # Set to true to hide from production
```

### Episode-Specific Fields

| Field | Type | Purpose | Example |
|-------|------|---------|---------|
| `episodeNumber` | number | Episode number | `42` |
| `season` | number | Season number | `1` |
| `episodeType` | string | Episode type | `"full"`, `"trailer"`, `"bonus"` |
| `podcast` | string | Podcast name (overrides site config) | `"SmartLess"` |
| `host` | string | Host name (overrides site config) | `"Jason Bateman"` |
| `guests` | array | Guest names | `["Guest 1"]` |
| `duration` | string | Episode length | `"1:23:45"` |
| `embedPlayers` | array | Player configs | See below |

### Featured Appearance Fields

| Field | Type | Purpose | Example |
|-------|------|---------|---------|
| `type` | string | Appearance type | `"podcast"`, `"interview"`, `"video"` ([see all types]({{< ref "appearance-types.md" >}})) |
| `podcastName` | string | Show/platform/publication name | `"Blood Rituals Podcast"` |
| `externalUrl` | string | Link to listen/watch/read | Full URL |
| `hosts` | array | Show hosts | `["Nicole"]` |
| `guests` | array | Other guests (besides you) | `["Guest 2"]` |

### Universal Fields

| Field | Type | Purpose | Appears In |
|-------|------|---------|------------|
| `featuredImage` | string | Image path - renders as "hero card image" (with overlay) on list pages, "post image" (optional overlay) on single pages | List and single pages |
| `tags` | array | Topics/tags | Topics Discussed, Archives, SEO |
| `summary` | string | Short description | Cards, previews, SEO |
| `description` | string | Full description | SEO only |
| `overlayMetadata` | boolean | Enable metadata overlay on post image (single pages only - list pages always have overlays) | Single pages |
| `overlayPosition` | string | Overlay position | `"top-left"`, `"top-center"`, `"top-right"`, `"mid-left"`, `"mid-center"`, `"mid-right"`, `"lower-left"`, `"lower-center"`, `"lower-right"` |
| `toc` | boolean | Show table of contents | Single pages |
| `lightgallery` | boolean | Enable lightbox for images | Single pages |

---

## Adding Podcast Players

### Supported Platforms

Tokyo-Nord supports 10 podcast platforms:

1. **Spotify** - `podcast-spotify`
2. **Apple Podcasts** - `podcast-apple`
3. **YouTube** - `podcast-youtube`
4. **Blubrry** - `podcast-blubrry`
5. **Libsyn** - `podcast-libsyn`
6. **Spreaker** - `podcast-spreaker`
7. **Podbean** - `podcast-podbean`
8. **Transistor** - `podcast-transistor`
9. **Simplecast** - `podcast-simplecast`
10. **Buzzsprout** - `podcast-buzzsprout`

### Method 1: Embed Players in Front Matter

**Episodes only** - Add to `embedPlayers` array:

```yaml
embedPlayers:
  - type: "spotify"
    id: "4rOoJ6Egrf8K2IrywzwOMk"
  - type: "youtube"
    id: "dQw4w9WgXcQ"
  - type: "apple"
    podcastId: "1234567890"
    episodeId: "1000123456789"
```

**Maximum 3 players** will display (50px vertical spacing).

### Method 2: Shortcodes in Content

**Featured appearances** - Use shortcodes in content:

```markdown
{{< podcast-spotify "episode-id" >}}
```

### Platform-Specific Examples

#### Spotify
```markdown
{{< podcast-spotify "4rOoJ6Egrf8K2IrywzwOMk" >}}
```

Get ID from: `https://open.spotify.com/episode/[ID]`

#### YouTube
```markdown
{{< podcast-youtube "dQw4w9WgXcQ" >}}
```

Get ID from: `https://www.youtube.com/watch?v=[ID]`

#### Apple Podcasts
```markdown
{{< podcast-apple "1234567890" "1000123456789" >}}
```

Requires both podcast ID and episode ID.

#### Blubrry
```markdown
{{< podcast-blubrry "program-name" "episode-id" >}}
```

#### Libsyn
```markdown
{{< podcast-libsyn "embed-id" >}}
```

#### Podbean
```markdown
{{< podcast-podbean "https://www.podbean.com/player-v2/?i=abc123" >}}
```

#### Simplecast
```markdown
{{< podcast-simplecast "episode-id" >}}
```

#### Spreaker
```markdown
{{< podcast-spreaker "episode-id" >}}
```

#### Transistor
```markdown
{{< podcast-transistor "share-url" >}}
```

#### Buzzsprout
```markdown
{{< podcast-buzzsprout "podcast-id" "episode-id" >}}
```

---

## Understanding Metadata Display

### On List Pages (/episodes/, /featured/, /blog/)

The hero card shows:

**For Episodes:**
- Episode number (if set)
- Publication date
- Duration (if set)
- Guest names (if set)
- Summary (truncated to 120 chars)

**For Featured Appearances:**
- Appearance type ("Podcast", "Interview", etc.)
- Platform name ("Blood Rituals Podcast")
- Publication date
- Host names (if set)
- Summary

**For Blog Posts:**
- Publication date
- First category
- Reading time estimate
- Summary

### On Single Pages (Default Behavior)

By default, metadata appears at the top without overlay:
- Title
- Metadata line (date, type, platform)
- Host/guest information
- External link button (for featured)
- Post image (from `featuredImage` field - full size, no overlay)
- Content

### Metadata Overlays on Single Pages (New Feature)

You can now enable metadata overlays on single page post images (the image specified in the `featuredImage` field), similar to list page hero cards but with more positioning control.

#### Global Configuration (hugo.toml)

Enable overlays site-wide:

```toml
[params.podcast.overlay]
  enable = true  # Enable overlays on all episodes/featured pages
  position = "lower-left"  # Default position for all pages
  opacity = 0.85  # Background opacity (0.0 to 1.0)
```

**Position Options:**
- `"top-left"` - Top left corner
- `"top-center"` - Top center, centered text
- `"top-right"` - Top right corner, right-aligned text
- `"mid-left"` - Middle left edge
- `"mid-center"` - Middle of the image, centered text
- `"mid-right"` - Middle right edge, right-aligned text
- `"lower-left"` - Bottom left corner (default)
- `"lower-center"` - Bottom center, centered text
- `"lower-right"` - Bottom right corner, right-aligned text

#### Per-Post Override

Override global settings in front matter:

```yaml
---
title: "My Episode"
# Enable overlay just for this post
overlayMetadata: true  # true = enable, false = disable
overlayPosition: "lower-center"  # Override default position

# Override podcast/host info (appears in overlay)
podcast: "SmartLess"  # Overrides site config
host: "Jason Bateman, Sean Hayes, Will Arnett"  # Overrides site config
---
```

**Override Capabilities:**

Episodes can override these site-level settings:
- `podcast` - Overrides `params.podcast.name` from hugo.toml
- `host` - Overrides `params.podcast.hostName` from hugo.toml
- `overlayMetadata` - Overrides `params.podcast.overlay.enable`
- `overlayPosition` - Overrides `params.podcast.overlay.position`

Featured appearances require per-post configuration:
- `type` - Appearance type (podcast, interview, video, etc.) - [See all types]({{< ref "appearance-types.md" >}})
- `podcastName` - The show/platform/publication name (always set per-post)
- `hosts` - The show's host(s) (always set per-post)
- `guests` - Other guests besides you (optional)
- `overlayMetadata` - Overrides `params.podcast.overlay.enable`
- `overlayPosition` - Overrides `params.podcast.overlay.position`

#### Examples

**Example 1: SmartLess Episode** (`/episodes/smartless-example/`)

```yaml
---
title: "SmartLess Example Episode"
episodeNumber: 1
podcast: "SmartLess"  # Override default podcast name
host: "Jason Bateman, Sean Hayes, Will Arnett"  # Override default host
featuredImage: "/images/smartless-cover.jpg"  # Image shown as hero card on /episodes/, as post image on single page
overlayMetadata: true
overlayPosition: "lower-left"
embedPlayers:
  - type: "spotify"
    id: "6F4kzTwzIqah5u75FMXc1u"
---
```

This displays metadata in the lower-left corner of the post image on the single page with custom podcast and host names. On `/episodes/`, this same image displays as a hero card with overlay (always).

**Example 2: Huberman Lab Episode** (`/episodes/huberman-labs-example/`)

```yaml
---
title: "Dr. Andrew Huberman: Optimize Your Health"
episodeNumber: 2
podcast: "Huberman Lab"  # Override default podcast name
host: "Dr. Andrew Huberman"  # Override default host
featuredImage: "/images/huberman-cover.jpg"  # Same field used for both list and single pages
overlayMetadata: true
overlayPosition: "lower-center"  # Center-aligned at bottom
embedPlayers:
  - type: "youtube"
    id: "cIla9axQRyM"
---
```

This displays metadata centered at the bottom of the post image on the single page. On `/episodes/`, this same image displays as a hero card with overlay.

#### Visual Positioning Guide

```
┌─────────────────────────────────────┐
│ "top-left"  "top-center"  "top-right" │
│                                     │
│ "mid-left"  "mid-center"  "mid-right" │
│                                     │
│ "lower-left" "lower-center" "lower-right" │
└─────────────────────────────────────┘
```

#### When to Use Each Position

**Top Row:**
- **top-left** - Logo placement style, minimal obstruction
- **top-center** - Title card style, centered branding
- **top-right** - Alternative layout, European reading flow

**Middle Row:**
- **mid-left** - Balanced left alignment
- **mid-center** - Dramatic presentation, minimal background detail
- **mid-right** - Balanced right alignment

**Bottom Row:**
- **lower-left** - Standard podcast layout, Western reading flow (default)
- **lower-center** - Symmetric design, centered branding
- **lower-right** - Alternative layout, distinct visual flow

#### Responsive Behavior

Overlays automatically adapt on mobile:
- Reduced padding and font sizes on screens < 768px
- Lower-left and lower-right become full-width on small screens
- Icons hidden on very small screens (< 480px) for clarity
- Maintains readability across all devices

---

## Common Issues & Solutions

### Issue: Iframe Not Rendering

**Problem:** Raw HTML iframes don't render in Hugo by default.

**Solution:** Use shortcodes instead:

```markdown
<!-- ❌ Don't do this -->
<iframe src="https://open.spotify.com/embed/episode/..."></iframe>

<!-- ✅ Do this -->
{{< podcast-spotify "episode-id" >}}
```

### Issue: Metadata Not Showing on Post Image (Single Pages)

**Problem:** Expecting overlay on single page but metadata appears above the post image.

**Solution:** Overlays on single page post images are disabled by default. Enable them:

**Option 1: Enable globally in hugo.toml**
```toml
[params.podcast.overlay]
  enable = true
  position = "lower-left"
```

**Option 2: Enable per-post in front matter**
```yaml
overlayMetadata: true
overlayPosition: "lower-left"
```

**Note:** List pages (`/featured/`, `/episodes/`) ALWAYS show overlays on hero card images regardless of this setting. The `overlayMetadata` setting only affects single page post images.

### Issue: Image Not Loading

**Problem:** Wrong image path.

**Solution:** Images must be in `static/images/`:

```yaml
# ✅ Correct
featuredImage: /images/my-cover.jpg

# ❌ Wrong
featuredImage: images/my-cover.jpg
featuredImage: /static/images/my-cover.jpg
```

File location: `/Users/schingon/repos/tokyo-dev/static/images/my-cover.jpg`

### Issue: Player Not Showing

**Problem:** Wrong ID or missing quotes.

**Solution:** Check ID format:

```markdown
# ✅ Correct
{{< podcast-spotify "4rOoJ6Egrf8K2IrywzwOMk" >}}

# ❌ Wrong (no quotes)
{{< podcast-spotify 4rOoJ6Egrf8K2IrywzwOMk >}}

# ❌ Wrong (wrong ID)
{{< podcast-spotify "https://open.spotify.com/episode/..." >}}
```

---

## Quick Reference

### Create New Content

```bash
# Episode
hugo new episodes/episode-title.md

# Featured appearance
hugo new featured/appearance-name.md

# Blog post
hugo new blog/post-title.md
```

### Front Matter Essentials

**Episode:**
```yaml
episodeNumber: 1
podcast: "SmartLess"  # Optional: override site config
host: "Jason Bateman, Sean Hayes, Will Arnett"  # Optional: override site config
guests: ["Guest"]
tags: ["comedy", "interviews"]
embedPlayers:
  - type: "spotify"
    id: "episode-id"
overlayMetadata: true  # Optional: enable overlay on featured image
overlayPosition: "lower-left"  # Optional: top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
```

**Featured:**
```yaml
type: podcast  # See docs/appearance-types.md
podcastName: "Blood Rituals Podcast"
hosts: ["Host Name"]
guests: []  # Other guests besides you
tags: ["spirituality", "third-eye"]
externalUrl: "https://..."
overlayMetadata: true  # Optional: enable overlay on featured image
overlayPosition: "lower-center"  # Optional: top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
```

Then in content:
```markdown
{{< podcast-spotify "episode-id" >}}
```

### File Paths

- Content: `content/{episodes,featured,blog}/filename.md`
- Images: `static/images/filename.jpg`
- Reference in front matter: `featuredImage: /images/filename.jpg`
  - Displays as "hero card image" (with overlay) on list pages
  - Displays as "post image" (optional overlay) on single pages

---

**Need more help?** See:
- [Getting Started]({{< ref "getting-started.md" >}})
- [Podcast Features]({{< ref "podcast-features.md" >}})
- [Customization]({{< ref "customization.md" >}})
