---
title: "Getting Started with Tokyo-Nord"
date: 2025-01-15
draft: false
description: "Quick start guide for the Tokyo-Nord Hugo theme"
weight: 1
---

# Getting Started with Tokyo-Nord

Tokyo-Nord is a podcast-focused Hugo theme with Tokyo Night and Nord-inspired color schemes. This guide will get you up and running in minutes.

## Prerequisites

- **Hugo Extended** version 0.128.0 or later
- **Git** (for theme installation)
- Basic knowledge of Hugo (helpful but not required)

## Installation

### Method 1: Git Submodule (Recommended)

```bash
# Navigate to your Hugo site
cd your-hugo-site

# Add theme as submodule
git submodule add https://github.com/gallo-s-chingon/Tokyo-Nord.git themes/tokyo-nord

# Initialize and update submodules
git submodule update --init --recursive
```

### Method 2: Direct Clone

```bash
cd your-hugo-site
git clone https://github.com/gallo-s-chingon/Tokyo-Nord.git themes/tokyo-nord
```

### Method 3: Download ZIP

1. Download the [latest release](https://github.com/gallo-s-chingon/Tokyo-Nord/releases)
2. Extract to `themes/tokyo-nord`

## Basic Configuration

Update your `hugo.toml`:

```toml
theme = "tokyo-nord"
baseURL = "https://yoursite.com/"
languageCode = "en-us"
title = "Your Podcast Name"

[params]
  # Theme mode (auto detects system preference)
  defaultTheme = "auto"

  # High contrast mode
  # true = tokyo-night (dark) / onenord-light (light)
  # false = nordic (dark) / onenord-day (light)
  highContrast = true

  # Site info
  description = "Your podcast description"

  [params.author]
    name = "Your Name"
    email = "your@email.com"
    link = "https://yoursite.com"

  [params.podcast]
    enable = true
    name = "Your Podcast Name"
    hostName = "Your Name"
    description = "Podcast description for RSS feed"
    artwork = "/images/podcast-cover.jpg"  # 1400x1400 to 3000x3000
    categories = ["Technology", "Society & Culture"]
    explicit = false
    spotifyUrl = "https://open.spotify.com/show/..."
    appleUrl = "https://podcasts.apple.com/..."
    youtubeUrl = ""  # Optional, for video podcasts
    rssUrl = "/episodes/index.xml"
```

## Content Structure

Create your content directories:

```bash
mkdir -p content/episodes
mkdir -p content/featured
mkdir -p content/blog
mkdir -p content/pages
```

### Directory Purposes

- **`content/episodes/`** - Your podcast episodes
- **`content/featured/`** - External podcast appearances
- **`content/blog/`** - Blog posts (optional)
- **`content/pages/`** - Static pages (About, Book, etc.)

## Creating Your First Episode

```bash
hugo new episodes/my-first-episode.md
```

Edit the generated file:

```yaml
---
title: "My First Episode"
date: 2025-01-15
episodeNumber: 1
season: 1
host: "Your Name"
guests: ["Guest Name"]
duration: "45:30"
audioUrl: "https://yourcdn.com/episode-001.mp3"
audioFileSize: 43200000  # In bytes
featuredImage: "/images/episode-001.jpg"

# Podcast players (max 3 shown)
embedPlayers:
  - type: "spotify"
    id: "4rOoJ6Egrf8K2IrywzwOMk"
  - type: "apple"
    podcastId: "1234567890"
    episodeId: "1000123456789"
---

Episode description and show notes go here...

<!--more-->

## Show Notes

- Topic 1
- Topic 2
- Links mentioned
```

## Navigation Setup

The theme includes smart navigation. Enable/disable sections in `hugo.toml`:

```toml
# Main navigation is automatically created from menu config
[[menu.main]]
  identifier = "featured"
  name = "Featured"
  url = "/featured/"
  weight = 1

[[menu.main]]
  identifier = "episodes"
  name = "Episodes"
  url = "/episodes/"
  weight = 2

# Optional blog section
# [[menu.main]]
#   identifier = "blog"
#   name = "Blog"
#   url = "/blog/"
#   weight = 3

[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 4

# Optional booking page
# [[menu.main]]
#   identifier = "book"
#   name = "Book"
#   url = "/book/"
#   weight = 5
```

**Mobile navigation automatically shortens:**
- "Featured" → "Feat"
- "Episodes" → "Epi"

## Theme Modes

Tokyo-Nord includes **4 theme variants:**

### High Contrast (highContrast = true)
- **Dark:** Tokyo Night (vibrant, punchy colors)
- **Light:** OneNord Light (sharp, clear text)

### Low Contrast (highContrast = false)
- **Dark:** Nordic (softer, muted tones)
- **Light:** OneNord Day (gentle, easy reading)

Users can toggle dark/light mode. The theme automatically switches within the configured contrast level.

## Local Development

```bash
# Start Hugo server
hugo server -D

# Open browser to http://localhost:1313
```

## Building for Production

```bash
# Generate static files
hugo --minify

# Output will be in ./public/
```

## Next Steps

- **[Content Guide]({{< ref "content-guide.md" >}})** - Learn how to add episodes, featured appearances, and podcast players
- **[Podcast Features]({{< ref "podcast-features.md" >}})** - Configure players, RSS, and subscribe buttons
- **[Customization Guide]({{< ref "customization.md" >}})** - Customize colors, fonts, and layouts

## Troubleshooting

### Theme Not Showing

```bash
# Verify theme is in correct location
ls themes/tokyo-nord

# Check hugo.toml has correct theme name
grep "theme" hugo.toml
```

### CSS Not Loading

```bash
# Make sure you're using Hugo Extended
hugo version

# Should show "hugo v0.128.0+extended" or similar
```

### Build Errors

```bash
# Clear Hugo cache
hugo --cleanDestinationDir

# Rebuild
hugo server -D
```

## Getting Help

- **Documentation:** Browse this docs section
- **Issues:** [GitHub Issues](https://github.com/gallo-s-chingon/Tokyo-Nord/issues)
- **Discussions:** [GitHub Discussions](https://github.com/gallo-s-chingon/Tokyo-Nord/discussions)

---

**Ready to dive deeper?** Check out the [Podcast Features guide]({{< ref "podcast-features.md" >}}) to configure players and RSS feeds.
