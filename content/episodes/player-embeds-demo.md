---
title: "Embedding Podcast Players: Complete Guide"
created: 2025-10-27
draft: false

# Episode details
episodeNumber: 102
season: 1
episodeType: "full"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-podcast-studio.jpg"
duration: "52:30"

# Podcast players - Demonstrating multiple embed types
embedPlayers:
  - type: "spotify"
    id: "667dex4sU7Z54upPO4Up4n"
  - type: "youtube"
    id: "cIla9axQRyM"

# Content
tags: ["documentation", "players", "embeds", "spotify", "youtube"]
summary: "Complete guide to embedding podcast players from Spotify, YouTube, Apple Podcasts, and other major platforms in your episode pages."
description: "Learn how to embed players from all major podcast platforms including Spotify, Apple Podcasts, YouTube, and more using the Tokyo-Nord theme's built-in shortcodes."

# Display options
overlayMetadata: true
overlayPosition: "lower-center"
overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
toc: true
lightgallery: false

# Image credit
imageCredit: "Photo by Matthias Groeneveld from Pexels (CC0)"
---

## About This Episode

This documentation episode demonstrates how to embed podcast players from various platforms using the Tokyo-Nord theme's built-in shortcodes. The embedded players below are live examples you can interact with.

## Supported Platforms

The Tokyo-Nord theme includes shortcodes for these major podcast platforms:

- Spotify
- Apple Podcasts
- YouTube
- Blubrry
- Libsyn
- Podbean
- Simplecast
- Spreaker
- Transistor
- Buzzsprout

## Method 1: Frontmatter Configuration

The recommended approach is to define players in your frontmatter:

```yaml
embedPlayers:
  - type: "spotify"
    id: "episode-id-here"
  - type: "youtube"
    id: "video-id-here"
  - type: "apple"
    id: "podcast-id/episode-id"
```

**Benefits:**
- Centralized configuration
- Consistent ordering across episodes
- Easy to manage multiple players
- Theme handles rendering automatically

**This page uses frontmatter configuration** with Spotify and YouTube players (see examples below).

## Method 2: Inline Shortcodes

You can also embed players directly in your content using shortcodes:

### Spotify

```markdown
{{< podcast-spotify "667dex4sU7Z54upPO4Up4n" >}}
```

**Finding the Episode ID:**
From URL: `https://open.spotify.com/episode/667dex4sU7Z54upPO4Up4n`
The ID is: `667dex4sU7Z54upPO4Up4n`

**Example embed (from frontmatter):**

{{< podcast-spotify "667dex4sU7Z54upPO4Up4n" >}}

---

### YouTube

```markdown
{{< podcast-youtube "cIla9axQRyM" >}}
```

**Finding the Video ID:**
From URL: `https://www.youtube.com/watch?v=cIla9axQRyM`
The ID is: `cIla9axQRyM`

**Example embed (from frontmatter):**

{{< podcast-youtube "cIla9axQRyM" >}}

---

### Apple Podcasts

```markdown
{{< podcast-apple "podcast-id" "episode-id" >}}
```

**Finding the IDs:**
From URL: `https://podcasts.apple.com/us/podcast/podcast-name/id1234567890?i=1000123456789`
- Podcast ID: `1234567890`
- Episode ID: `1000123456789`

**Syntax:**
```markdown
{{< podcast-apple "1234567890" "1000123456789" >}}
```

---

### Blubrry

```markdown
{{< podcast-blubrry "podcast-id" "episode-id" >}}
```

Example:
```markdown
{{< podcast-blubrry "example-podcast" "12345" >}}
```

---

### Libsyn

```markdown
{{< podcast-libsyn "podcast-slug" "episode-id" >}}
```

Example:
```markdown
{{< podcast-libsyn "my-podcast" "episode-123" >}}
```

---

### Podbean

```markdown
{{< podcast-podbean "embed-key" >}}
```

**Finding the Embed Key:**
From Podbean embed code: Look for the player ID in the URL.

---

### Simplecast

```markdown
{{< podcast-simplecast "episode-id" >}}
```

Example:
```markdown
{{< podcast-simplecast "abc123def456" >}}
```

---

### Spreaker

```markdown
{{< podcast-spreaker "episode-id" >}}
```

Example:
```markdown
{{< podcast-spreaker "12345678" >}}
```

---

### Transistor

```markdown
{{< podcast-transistor "share-key" >}}
```

**Finding the Share Key:**
From Transistor share URL or embed code.

---

### Buzzsprout

```markdown
{{< podcast-buzzsprout "podcast-id" "episode-id" >}}
```

Example:
```markdown
{{< podcast-buzzsprout "123456" "7890123" >}}
```

---

## Best Practices

### 1. Choose Primary Platform

Select your main distribution platform (usually Spotify or Apple Podcasts) as the first player.

### 2. Limit Number of Players

Include 1-3 players maximum to avoid overwhelming listeners and slowing page load.

### 3. Consistent Ordering

Use the same player order across all episodes:
```yaml
embedPlayers:
  - type: "spotify"      # Always first
  - type: "apple"        # Always second
  - type: "youtube"      # Always third (if applicable)
```

### 4. Test Embeds

Always preview your page to ensure players embed correctly.

### 5. Consider Mobile

Embedded players are responsive but test on mobile devices to ensure good UX.

## Frontmatter vs Inline

| Aspect | Frontmatter | Inline Shortcodes |
|--------|-------------|-------------------|
| **Organization** | Centralized | Distributed |
| **Consistency** | High | Variable |
| **Flexibility** | Medium | High |
| **Maintenance** | Easy | Moderate |
| **Use Case** | Standard episodes | Custom placement |

**Recommendation:** Use frontmatter for most episodes, inline shortcodes for special cases.

## Advanced Configuration

### Multiple Players Example

```yaml
embedPlayers:
  - type: "spotify"
    id: "spotify-id"
  - type: "apple"
    id: "podcast-id/episode-id"
  - type: "youtube"
    id: "video-id"
```

### Video Podcast Example

For video podcasts, prioritize YouTube:

```yaml
embedPlayers:
  - type: "youtube"
    id: "video-id"
  - type: "spotify"
    id: "audio-id"
```

### Audio-Only Example

For traditional podcasts:

```yaml
embedPlayers:
  - type: "spotify"
    id: "episode-id"
  - type: "apple"
    id: "podcast-id/episode-id"
```

## Troubleshooting

**Player not appearing?**
- Verify the episode ID is correct
- Check shortcode syntax (spacing, quotes)
- Ensure the platform URL is accessible
- Check browser console for errors

**Player too wide/narrow?**
- Players are responsive by default
- Check parent container width
- Verify CSS isn't overriding player styles

**Player shows error message?**
- Confirm episode is publicly available
- Check if episode ID has changed
- Verify platform hasn't changed embed format

## Platform-Specific Notes

### Spotify
- Most widely used
- Excellent embed reliability
- Auto-updates episode art
- Shows related episodes

### Apple Podcasts
- iOS-friendly
- Requires two IDs (podcast + episode)
- May not work in some browsers

### YouTube
- Best for video podcasts
- High engagement
- Autoplay options available
- Shows recommended videos

## Creating Custom Shortcodes

To add a new platform, create a shortcode in `layouts/shortcodes/`:

```html
<!-- layouts/shortcodes/podcast-newplatform.html -->
<div class="podcast-player">
  <iframe
    src="https://platform.com/embed/{{ .Get 0 }}"
    width="100%"
    height="232"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media">
  </iframe>
</div>
```

## Related Documentation

- `/episodes/overlay-features-demo/` - Overlay features guide
- `/episodes/metadata-customization-demo/` - Metadata customization
- `/docs/podcast-features/` - Complete podcast features

## Example Frontmatter

Complete episode with multiple players:

```yaml
---
title: "Episode Title"
created: 2025-10-27
episodeNumber: 42
podcast: "Podcast Name"
host: "Host Name"
featuredImage: "/images/episode.jpg"

embedPlayers:
  - type: "spotify"
    id: "spotify-episode-id"
  - type: "apple"
    id: "podcast-id/episode-id"
  - type: "youtube"
    id: "video-id"

tags: ["topic1", "topic2"]
summary: "Episode description"
---
```

## Image Attribution

Featured image: Photo by Matthias Groeneveld from Pexels (CC0 License)
- Source: https://www.pexels.com/photo/black-and-gray-audio-mixer-6069/
- License: Creative Commons Zero (CC0)
- Free to use with no attribution required

---

**Documentation Version:** 1.0
**Last Updated:** 2025-10-27
**Theme:** Tokyo-Nord
