---
title: "Episode Types: Full, Bonus, Trailer, Interview & Solo"
created: 2025-10-27
draft: false

# Episode details - Demonstrating different episode types
episodeNumber: 104
season: 1
episodeType: "bonus"

# Podcast info
podcast: "Tokyo Dev Podcast"
host: "Documentation Team"
guests: []

# Media
featuredImage: "/images/samples/sample-music-podcast.jpg"
duration: "28:15"

# Content
tags: ["documentation", "episode-types", "configuration", "content-structure"]
categories: ["Documentation"]
summary: "Learn about all available episode types: full, bonus, trailer, interview, and solo episodes with examples and use cases for each."
description: "Complete guide to episode types in the Tokyo-Nord theme, including when to use each type and how they appear differently in your podcast."

# Display options
overlayMetadata: true
overlayPosition: "top-right"
overlay_filter: 0.5
toc: true
lightgallery: false
topicsOn: true

# Image credit
imageCredit: "Photo by Pixabay from Pexels (CC0)"
---

## About This Episode

This is a bonus episode (notice the badge!) demonstrating the different episode types available in the Tokyo-Nord theme. Each episode type can be styled differently and serves different content purposes.

## Available Episode Types

The Tokyo-Nord theme supports five distinct episode types:

```yaml
episodeType: "full"      # Regular full-length episode (default)
episodeType: "bonus"     # Bonus content
episodeType: "trailer"   # Show or season trailer
episodeType: "interview" # Interview episode
episodeType: "solo"      # Solo host episode
```

## Episode Type Details

### Full Episodes (`episodeType: "full"`)

**Purpose:** Regular, full-length episodes in your main series

**Typical duration:** 30-90 minutes

**Use for:**
- Main content episodes
- Regular scheduled releases
- Series continuations

**Example frontmatter:**
```yaml
---
title: "Episode Title"
episodeNumber: 42
season: 1
episodeType: "full"
duration: "45:30"
podcast: "Your Podcast"
host: "Host Name"
---
```

**Display:** Standard episode badge, full metadata

---

### Bonus Episodes (`episodeType: "bonus"`)

**Purpose:** Supplemental content outside the main series

**Typical duration:** 15-45 minutes

**Use for:**
- Behind-the-scenes content
- Q&A sessions
- Extended interviews
- Patron-exclusive content
- Holiday specials
- Off-topic discussions

**Example frontmatter:**
```yaml
---
title: "Behind the Scenes: How We Make the Show"
episodeNumber: 42.5
season: 1
episodeType: "bonus"
duration: "28:15"
podcast: "Your Podcast"
host: "Host Name"
---
```

**Display:** "Bonus" badge, special styling

**This episode is a bonus episode!**

---

### Trailer Episodes (`episodeType: "trailer"`)

**Purpose:** Promotional content to introduce your show or season

**Typical duration:** 2-5 minutes

**Use for:**
- Show launch announcements
- Season previews
- Relaunch trailers
- Format changes

**Example frontmatter:**
```yaml
---
title: "Season 2 Trailer"
episodeNumber: 0
season: 2
episodeType: "trailer"
duration: "3:45"
podcast: "Your Podcast"
host: "Host Name"
---
```

**Display:** "Trailer" badge, emphasized styling

**Best practices:**
- Keep under 5 minutes
- Use episodeNumber: 0 for season trailers
- Highlight what makes your show unique
- Include call-to-action to subscribe

---

### Interview Episodes (`episodeType: "interview"`)

**Purpose:** Episodes centered around guest interviews

**Typical duration:** 45-90 minutes

**Use for:**
- Expert interviews
- Industry leader conversations
- Storytelling interviews
- Multi-guest panels

**Example frontmatter:**
```yaml
---
title: "Interview with Jane Developer"
episodeNumber: 43
season: 1
episodeType: "interview"
duration: "1:05:20"
podcast: "Your Podcast"
host: "Host Name"
guests: ["Jane Developer"]
---
```

**Display:** "Interview" badge, guest names prominent

**Guest highlighting:**
- Guest names shown prominently
- Can include multiple guests
- Guest bio sections supported

---

### Solo Episodes (`episodeType: "solo"`)

**Purpose:** Single-host episodes without guests

**Typical duration:** 20-60 minutes

**Use for:**
- Deep dives on specific topics
- Personal commentary
- Tutorials and how-tos
- Updates and announcements
- Storytelling

**Example frontmatter:**
```yaml
---
title: "My Journey Learning Web Development"
episodeNumber: 44
season: 1
episodeType: "solo"
duration: "35:45"
podcast: "Your Podcast"
host: "Host Name"
guests: []
---
```

**Display:** "Solo" badge, host-focused metadata

---

## Comparison Table

| Type | Badge | Typical Duration | Guest Support | Use Case |
|------|-------|------------------|---------------|----------|
| `full` | Episode | 30-90 min | Optional | Main series content |
| `bonus` | Bonus | 15-45 min | Optional | Extra content |
| `trailer` | Trailer | 2-5 min | No | Show promotion |
| `interview` | Interview | 45-90 min | Required | Guest-focused |
| `solo` | Solo | 20-60 min | No | Host-only content |

## Styling Differences

Each episode type can have unique styling:

### Badges

Episode type badges appear on:
- Episode cards (list pages)
- Single episode pages
- RSS feeds (optional)

### Colors

Customize badge colors in `hugo.toml`:

```toml
[params.podcast.episodeTypes]
  [params.podcast.episodeTypes.full]
    color = "#4a90e2"
    label = "Episode"

  [params.podcast.episodeTypes.bonus]
    color = "#f39c12"
    label = "Bonus"

  [params.podcast.episodeTypes.trailer]
    color = "#e74c3c"
    label = "Trailer"

  [params.podcast.episodeTypes.interview]
    color = "#9b59b6"
    label = "Interview"

  [params.podcast.episodeTypes.solo]
    color = "#1abc9c"
    label = "Solo"
```

### Icons

Each type can have a custom icon (Font Awesome):

```toml
[params.podcast.episodeTypes.bonus]
  icon = "fa-star"

[params.podcast.episodeTypes.interview]
  icon = "fa-microphone"
```

## Episode Numbering Strategies

### Strategy 1: Continuous Numbering
```
Episode 1 (full)
Episode 2 (full)
Episode 3 (bonus)
Episode 4 (full)
```

### Strategy 2: Decimal for Bonus Content
```
Episode 1 (full)
Episode 2 (full)
Episode 2.5 (bonus)
Episode 3 (full)
```

### Strategy 3: Separate Numbering
```
Episode 1 (full)
Episode 2 (full)
Bonus 1 (bonus)
Episode 3 (full)
```

### Strategy 4: Season Trailers at Zero
```
Episode 0 (trailer) - Season 2 Trailer
Episode 1 (full) - First episode of season
Episode 2 (full)
```

**Recommendation:** Use decimal numbering (Strategy 2) for clarity and sorting.

## Filtering by Episode Type

Users can filter episodes by type in list views:

```markdown
/episodes/?type=bonus
/episodes/?type=interview
/episodes/?type=full
```

Enable filter UI in `hugo.toml`:

```toml
[params.podcast]
  enableTypeFilter = true
```

## RSS Feed Considerations

Different episode types in RSS:

```toml
[params.rss]
  includeTrailers = true    # Include trailers in RSS
  includeBonusEpisodes = true  # Include bonus episodes
  episodeLimit = 50         # Total episodes in feed
```

## Content Strategy by Type

### Full Episodes
- Main story arc
- Consistent format
- Regular schedule
- Core value proposition

### Bonus Episodes
- Experimentation
- Behind-the-scenes
- Community engagement
- Patreon rewards

### Trailers
- Marketing
- Season announcements
- Show relaunches
- Format changes

### Interview Episodes
- Expert insights
- Networking
- Audience growth
- Cross-promotion

### Solo Episodes
- Personal brand building
- Deep expertise
- Intimate connection
- Lower production costs

## Best Practices

### 1. Be Consistent
Maintain consistent episode types across seasons.

### 2. Set Expectations
Let listeners know what to expect from each type.

### 3. Use Strategic Numbering
Choose a numbering strategy and stick with it.

### 4. Balance Content Mix
Example mix:
- 70% full episodes
- 20% interview episodes
- 10% bonus/solo episodes

### 5. Promote Trailers
Use trailers at season starts and show launches.

### 6. Leverage Bonus Content
Offer bonus episodes for:
- Email subscribers
- Patreon supporters
- Special occasions

## Migration from Other Platforms

### From Libsyn/Blubrry
```yaml
<itunes:episodeType>full</itunes:episodeType>
```
Maps to:
```yaml
episodeType: "full"
```

### From Anchor/Spotify
Episode types directly supported.

### From Apple Podcasts
Three types (full, trailer, bonus) map directly:
- full → full
- trailer → trailer
- bonus → bonus

Custom types (interview, solo) are theme-specific.

## Advanced Configuration

### Custom Episode Types

Add custom types in `hugo.toml`:

```toml
[params.podcast.episodeTypes.special]
  color = "#ff6b6b"
  label = "Special"
  icon = "fa-gift"
```

Use in frontmatter:
```yaml
episodeType: "special"
```

### Type-Specific Layouts

Create custom layouts:
```
layouts/episodes/single-interview.html
layouts/episodes/single-bonus.html
```

### Conditional Content

Show content based on type:

```html
{{ if eq .Params.episodeType "interview" }}
  <!-- Interview-specific content -->
{{ end }}
```

## Examples from Real Podcasts

### Smartless (Comedy)
- 90% full episodes
- 10% bonus episodes
- Trailers for tours

### Huberman Lab (Science)
- 80% solo episodes
- 20% interview episodes
- Q&A as bonus content

### Reply All (Storytelling)
- Full episodes (investigations)
- Bonus episodes (updates)
- Solo episodes (yes/yes/no)

## Related Documentation

- `/episodes/metadata-customization-demo/` - Metadata guide
- `/episodes/overlay-features-demo/` - Overlay features
- `/episodes/player-embeds-demo/` - Player embedding
- `/docs/podcast-features/` - Complete features guide

## Image Attribution

Featured image: Photo by Pixabay from Pexels (CC0 License)
- Source: https://www.pexels.com/photo/music-musician-song-sound-33597/
- License: Creative Commons Zero (CC0)
- Free to use with no attribution required

---

**Documentation Version:** 1.0
**Last Updated:** 2025-10-27
**Theme:** Tokyo-Nord
