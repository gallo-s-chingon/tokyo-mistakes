---
title: "Appearance Types Reference"
date: 2025-01-20
draft: false
toc: true
---

This document lists all supported appearance types for the `type` field in featured appearances.

## Supported Appearance Types

Use these values in the `type` field of your featured appearance front matter:

### Media Appearances

| Type | Description | Example Use Case |
|------|-------------|------------------|
| `podcast` | Guest appearance on a podcast episode | "Guest on Joe Rogan Experience" |
| `radio` | Guest on a radio show | "Interview on NPR Morning Edition" |
| `television` | TV appearance or interview | "Guest on The Tonight Show" |
| `video` | Video interview or feature | "YouTube interview with Casey Neistat" |
| `livestream` | Live streaming appearance | "Twitch stream with Pokimane" |

### Written & Published

| Type | Description | Example Use Case |
|------|-------------|------------------|
| `interview` | Published written interview | "Q&A in Rolling Stone magazine" |
| `article` | Guest post or byline article | "Guest column in TechCrunch" |
| `feature` | Profile or feature article about you | "Feature in Wired magazine" |

### Speaking Engagements

| Type | Description | Example Use Case |
|------|-------------|------------------|
| `conference` | Conference speaking engagement | "Keynote at SXSW 2024" |
| `talk` | Standalone talk or presentation | "TED Talk on innovation" |
| `panel` | Panel discussion participant | "Panel at Web Summit" |
| `webinar` | Webinar speaker or guest | "Webinar for O'Reilly Media" |
| `workshop` | Workshop leader or participant | "React workshop at ReactConf" |

### Creative & Collaborative

| Type | Description | Example Use Case |
|------|-------------|------------------|
| `collaboration` | Collaborative content or project | "Collab video with MrBeast" |
| `documentary` | Documentary feature or interview | "Featured in Netflix documentary" |
| `film` | Film appearance | "Cameo in indie film" |
| `book` | Book contribution, interview, or feature | "Chapter in 'Voices of Tech'" |

## Usage Examples

### Podcast Appearance

```yaml
---
title: "The Future of AI"
type: podcast
podcastName: "Lex Fridman Podcast"
hosts: ["Lex Fridman"]
tags: ["AI", "machine-learning", "future-tech"]
---
```

### Conference Talk

```yaml
---
title: "Building Scalable Systems"
type: conference
podcastName: "NodeConf 2024"  # Event name
hosts: ["Conference Organizers"]
tags: ["nodejs", "scalability", "architecture"]
---
```

### Written Interview

```yaml
---
title: "On the Future of Remote Work"
type: interview
podcastName: "Harvard Business Review"  # Publication name
tags: ["remote-work", "productivity", "future-of-work"]
---
```

### Documentary Feature

```yaml
---
title: "The Social Dilemma"
type: documentary
podcastName: "Netflix Original"
tags: ["social-media", "technology", "society"]
---
```

## Display Behavior

Each appearance type displays differently:

- **podcast, radio, video, livestream** - Shows with podcast/media player icons
- **conference, talk, panel, webinar, workshop** - Shows with presentation icons
- **interview, article, feature, book** - Shows with document/writing icons
- **collaboration, documentary, film** - Shows with creative/production icons

The `type` field affects:
1. Icon displayed in metadata
2. Wording of external link button
3. Filtering and categorization
4. RSS feed categorization

## Adding New Types

If you need a type not listed here, you can use any custom value. The theme will display it generically. Common custom types:

- `masterclass` - Teaching or masterclass session
- `ama` - Ask Me Anything session
- `demo` - Product or technical demo
- `review` - Product or content review
- `award` - Award ceremony or recognition

---

**See Also:**
- [Content Guide]({{< ref "content-guide.md" >}})
- [Podcast Features]({{< ref "podcast-features.md" >}})
