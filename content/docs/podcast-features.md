---
title: "Podcast Features"
date: 2025-01-15
draft: false
description: "Complete guide to Tokyo-Nord's podcast features"
weight: 2
---

# Podcast Features

Tokyo-Nord is built specifically for podcasters. This guide covers all podcast-related features.

## Podcast Players

### Supported Platforms (10 Total)

1. **Spotify**
2. **Apple Podcasts**
3. **YouTube** (video podcasts)
4. **Blubrry**
5. **Libsyn**
6. **Spreaker**
7. **Podbean**
8. **Transistor**
9. **Simplecast**
10. **Buzzsprout**

### Adding Players to Episodes

In your episode front matter:

```yaml
embedPlayers:
  - type: "spotify"
    id: "4rOoJ6Egrf8K2IrywzwOMk"
  - type: "apple"
    podcastId: "1234567890"
    episodeId: "1000123456789"
  - type: "youtube"
    id: "dQw4w9WgXcQ"
```

**Important:** Only the first 3 players are displayed (with 50px vertical spacing).

### Platform-Specific Configuration

#### Spotify

```yaml
- type: "spotify"
  id: "episode-id-here"
  height: 232  # Optional, default: 232
```

To get episode ID:
1. Right-click episode in Spotify
2. Share → Copy Episode Link
3. Extract ID from URL: `https://open.spotify.com/episode/[ID]`

#### Apple Podcasts

```yaml
- type: "apple"
  podcastId: "1234567890"
  episodeId: "1000123456789"
  height: 175  # Optional, default: 175
```

Find IDs in your Apple Podcasts URL.

#### YouTube

```yaml
- type: "youtube"
  id: "video-id"
  height: 315  # Optional, default: 315
```

Automatically maintains 16:9 aspect ratio.

#### Blubrry

```yaml
- type: "blubrry"
  program: "my-podcast"
  id: "12345678"
  height: 138  # Optional
```

#### Libsyn

```yaml
- type: "libsyn"
  id: "embed-id"
  height: 90      # Optional
  theme: "standard"  # or "custom"
```

#### Spreaker

```yaml
- type: "spreaker"
  id: "episode-id"
  height: 200  # Optional
  theme: "light"  # or "dark"
```

#### Podbean

```yaml
- type: "podbean"
  embedUrl: "https://www.podbean.com/player-v2/?i=abc123"
  height: 150  # Optional
```

#### Transistor

```yaml
- type: "transistor"
  shareUrl: "https://share.transistor.fm/s/abc123"
  height: 180  # Optional
```

#### Simplecast

```yaml
- type: "simplecast"
  id: "abc123-def456-ghi789"
  height: 200  # Optional
  theme: "light"  # or "dark"
```

#### Buzzsprout

```yaml
- type: "buzzsprout"
  podcastId: "123456"
  episodeId: "7891011"
  height: 200  # Optional
```

### Player Stack Behavior

- **Maximum 3 players** per episode
- **50px vertical spacing** between players (40px on mobile)
- **Lazy loading** for performance
- **Responsive sizing** (100% width)
- **Platform-specific styling** (rounded corners, shadows)

## RSS Feed for Podcast Distribution

### Accessing Your Feed

Your podcast RSS feed is automatically generated at:

```
https://yoursite.com/episodes/index.xml
```

### RSS Feed Configuration

Already configured in `hugo.toml` from getting started:

```toml
[params.podcast]
  name = "Your Podcast Name"
  hostName = "Your Name"
  description = "Podcast description"
  artwork = "/images/podcast-cover.jpg"  # Required: 1400x1400 to 3000x3000
  categories = ["Technology", "Society & Culture"]
  explicit = false  # or true
  rssUrl = "/episodes/index.xml"
```

### Episode-Specific RSS Fields

In episode front matter:

```yaml
---
# Required for podcast RSS
audioUrl: "https://yourcdn.com/episode-001.mp3"
audioFileSize: 43200000  # In bytes (required)
audioType: "audio/mpeg"  # Default: audio/mpeg

# Optional RSS fields
episodeType: "full"  # full, trailer, or bonus
explicit: false      # Override podcast-level setting
---
```

### RSS Feed Compliance

The feed includes tags for:

- ✅ **Apple Podcasts/iTunes** (itunes:* tags)
- ✅ **Spotify** (spotify:countryOfOrigin)
- ✅ **Google Play Podcasts** (googleplay:* tags)
- ✅ **RSS 2.0** standard
- ✅ **Atom** feed links

### Submitting to Directories

Use your RSS feed URL (`https://yoursite.com/episodes/index.xml`) to submit to:

1. **Apple Podcasts:** [Podcasts Connect](https://podcastsconnect.apple.com/)
2. **Spotify:** [Spotify for Podcasters](https://podcasters.spotify.com/)
3. **Google Podcasts:** Via [Google Search Console](https://search.google.com/search-console)
4. **Other directories:** Most accept standard RSS feeds

### RSS Validation

Before submitting, validate your feed:

- [Cast Feed Validator](https://castfeedvalidator.com/)
- [Podbase](https://podba.se/validate/)

## Social Sharing

### Content-Type Aware Sharing

Tokyo-Nord automatically shows appropriate sharing options based on content type:

#### Video Podcasts (with YouTube player)
- Twitter/X
- LinkedIn
- Facebook
- Reddit

#### Audio Podcasts
- Twitter/X
- LinkedIn
- Facebook
- Email
- Reddit

#### Blog Posts
- Twitter/X
- LinkedIn
- Facebook
- Pinterest
- Email

All pages include a **Copy Link** button with clipboard API support.

### Customizing Share Buttons

Sharing is automatic. To disable:

```yaml
# In episode/post front matter
share:
  enable: false
```

## Subscribe Buttons

### Platform Subscribe Links

Configure in `hugo.toml`:

```toml
[params.podcast]
  spotifyUrl = "https://open.spotify.com/show/YOUR-SHOW-ID"
  appleUrl = "https://podcasts.apple.com/us/podcast/YOUR-PODCAST/idNUMBERS"
  youtubeUrl = "https://youtube.com/@yourchannel"  # Optional
  rssUrl = "/episodes/index.xml"
```

Subscribe buttons automatically appear on episode pages.

### Newsletter Integration

Add newsletter signup to episode pages:

```toml
[params.podcast]
  newsletter = "buttondown"  # Options: buttondown, mailchimp, convertkit, custom
  newsletterUsername = "your-username"  # For Buttondown
```

#### Buttondown

```toml
newsletter = "buttondown"
newsletterUsername = "your-buttondown-username"
```

#### Mailchimp

```toml
newsletter = "mailchimp"
newsletterFormUrl = "https://YOUR-MAILCHIMP-FORM-URL"
```

#### ConvertKit

```toml
newsletter = "convertkit"
newsletterFormId = "your-form-id"
```

#### Custom HTML

```toml
newsletter = "custom"
newsletterCustomHTML = '''
<form action="..." method="post">
  <!-- Your custom form HTML -->
</form>
'''
```

## Guest Booking Page

Create a booking page for potential guests:

```bash
hugo new book/index.md
```

Use the book archetype:

```yaml
---
title: "Book a Guest Spot"
layout: book
bookingFormHTML: |
  <!-- Calendly inline widget -->
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/your-link"
       style="min-width:320px;height:630px;">
  </div>
  <script type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async>
  </script>
contactEmail: "booking@yourpodcast.com"
---

Interested in being a guest? Book a time that works for you!

## What to Expect

- Pre-interview chat: 15 minutes
- Recording session: 45-60 minutes
...
```

Supports:
- Calendly
- Acuity Scheduling
- Cal.com
- Google Calendar
- Microsoft Bookings
- Any custom HTML embed

## Featured Appearances

Track your appearances on other podcasts:

```bash
hugo new featured/my-appearance.md
```

```yaml
---
title: "My Interview on Cool Podcast"
appearanceType: "podcast"  # podcast, interview, article, video, conference
platform: "Cool Podcast"
platformUrl: "https://coolpodcast.com"
externalUrl: "https://coolpodcast.com/episodes/my-interview"
embedUrl: ""  # Optional player embed
hosts: ["Host Name"]
coGuests: []
topics: ["Topic 1", "Topic 2"]
featuredImage: "/images/appearance-001.jpg"
---

I was interviewed on Cool Podcast about...
```

## Hero Cards

All list pages (episodes, featured, blog) use photo-forward hero cards:

- **70% opacity** image overlays
- **Metadata chips** (episode number, date, guests)
- **Responsive grid:** 3 columns → 2 → 1
- **Hover effects:** Transform, scale, shadow
- **Lazy loading** for images

### Hero Card Customization

Hero cards automatically pull from:
- `featuredImage` or `featuredImagePreview`
- Episode/post metadata
- Summary text (truncated to 120 chars)

## Episode Metadata

Complete list of available episode front matter:

```yaml
---
# Basic Info
title: "Episode Title"
date: 2025-01-15
draft: false

# Episode Details
episodeNumber: 1
season: 1
episodeType: "full"  # full, trailer, bonus

# People
host: "Your Name"  # Overrides site default
guests: ["Guest 1", "Guest 2"]

# Media
audioUrl: "https://cdn.com/episode.mp3"
audioFileSize: 43200000  # Bytes, for RSS
audioType: "audio/mpeg"
videoUrl: ""  # Optional
duration: "45:30"  # HH:MM:SS or MM:SS

# Images
featuredImage: "/images/ep-001.jpg"
featuredImagePreview: "/images/ep-001-preview.jpg"

# Players (max 3 shown)
embedPlayers:
  - type: "spotify"
    id: "episode-id"

# Content
description: "Episode description for SEO and RSS"
tags: ["tag1", "tag2"]
categories: ["category"]

# Features
toc:
  enable: true
share:
  enable: true
comment:
  enable: true
---
```

## Performance Tips

1. **Optimize images:**
   - Episode artwork: 1400x1400 px, < 500 KB
   - Featured images: 1200x630 px, < 300 KB
   - Use WebP format when possible

2. **Audio hosting:**
   - Use a CDN (not Hugo static files)
   - Compress audio: 128kbps for speech, 192kbps for music

3. **Player limits:**
   - Stick to 2-3 players max
   - More players = slower page load

4. **RSS feed:**
   - Limit to 20-50 most recent episodes
   - Include file sizes for better client support

## Troubleshooting

### Players Not Showing

```yaml
# Check front matter syntax
embedPlayers:  # Must be exactly this
  - type: "spotify"  # Must match exactly
    id: "correct-id"  # Check for typos
```

### RSS Feed Errors

```bash
# Validate audioUrl is accessible
curl -I https://yourcdn.com/episode.mp3

# Check file size is accurate
ls -lh static/audio/episode.mp3
```

### Subscribe Buttons Missing

```toml
# Ensure URLs are set in hugo.toml
[params.podcast]
  spotifyUrl = "..."  # Must be set
  appleUrl = "..."    # Must be set
```

---

**Next:** Learn about [theme customization]({{< ref "customization.md" >}}) to make Tokyo-Nord truly yours.
