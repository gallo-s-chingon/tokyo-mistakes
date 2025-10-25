# Tokyo-Nord

A podcast-focused Hugo theme with Tokyo Night and Nord-inspired color schemes. Built for podcasters who want a fast, beautiful, and feature-rich website.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/gallo-s-chingon/Tokyo-Nord?style=flat-square)](https://github.com/gallo-s-chingon/Tokyo-Nord/releases)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.128.0-ff4088?style=flat-square&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/gallo-s-chingon/Tokyo-Nord?style=flat-square)](https://github.com/gallo-s-chingon/Tokyo-Nord/blob/master/LICENSE)

![Tokyo-Nord Theme](screenshot.png)

## Features

### 🎨 Four Beautiful Theme Variants

- **Tokyo Night** (Dark, High Contrast) - Vibrant, punchy colors
- **Nordic** (Dark, Low Contrast) - Soft, muted tones
- **OneNord Light** (Light, High Contrast) - Sharp, clear text
- **OneNord Day** (Light, Low Contrast) - Gentle, easy reading

Users can toggle dark/light mode. You control the contrast level site-wide.

### 🎙️ Podcast-First Features

- **10 Platform Players:** Spotify, Apple Podcasts, YouTube, Blubrry, Libsyn, Spreaker, Podbean, Transistor, Simplecast, Buzzsprout
- **Player Stack:** Up to 3 players per episode with 50px spacing
- **RSS Feeds:** Podcast-compliant feeds for Apple Podcasts, Spotify, Google Play
- **Subscribe Buttons:** Platform-specific subscribe links + newsletter integration
- **Guest Booking:** Built-in booking page template (Calendly/Acuity/Cal.com)
- **Featured Appearances:** Track your appearances on other podcasts

### 🎯 Content Management

- **Hero Cards:** Photo-forward layouts inspired by mademistakes.com
- **Three Content Types:** Episodes, Featured Appearances, Blog Posts
- **Smart Archetypes:** Pre-configured front matter templates
- **Social Sharing:** Content-type aware (video/audio/blog)
- **Newsletter Integration:** Buttondown, Mailchimp, ConvertKit, Custom HTML

### ⚡ Performance & SEO

- **Fast:** Minimal JavaScript, optimized CSS
- **SEO Ready:** JSON-LD structured data, Open Graph, Twitter Cards
- **Accessible:** WCAG 2.1 AA compliant, skip links, ARIA labels
- **Responsive:** Mobile-first design, 320px to 4K
- **PWA Ready:** Configurable app icons and theme colors

### 📚 Developer Friendly

- **Comprehensive Docs:** Getting started, features, customization guides
- **Clean Code:** Well-commented, modular SCSS
- **Extensible:** Easy to customize with partials and shortcodes
- **No Deprecated Code:** Built fresh in 2025, no legacy bloat

## Quick Start

### Prerequisites

- Hugo Extended **v0.128.0** or later
- Git (for installation)

### Installation

#### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/gallo-s-chingon/Tokyo-Nord.git themes/tokyo-nord
git submodule update --init --recursive
```

#### Method 2: Clone

```bash
cd your-hugo-site
git clone https://github.com/gallo-s-chingon/Tokyo-Nord.git themes/tokyo-nord
```

#### Method 3: Download

Download the [latest release](https://github.com/gallo-s-chingon/Tokyo-Nord/releases) and extract to `themes/tokyo-nord`.

### Basic Configuration

Update your `hugo.toml`:

```toml
theme = "tokyo-nord"
baseURL = "https://yoursite.com/"
languageCode = "en-us"
title = "Your Podcast Name"

[params]
  defaultTheme = "auto"
  highContrast = true  # Tokyo Night/OneNord Light vs Nordic/OneNord Day

  [params.author]
    name = "Your Name"
    email = "your@email.com"

  [params.podcast]
    enable = true
    name = "Your Podcast Name"
    hostName = "Your Name"
    artwork = "/images/podcast-cover.jpg"
    spotifyUrl = "https://open.spotify.com/show/..."
    appleUrl = "https://podcasts.apple.com/..."
```

### Create Your First Episode

```bash
hugo new episodes/my-first-episode.md
```

Edit the file:

```yaml
---
title: "My First Episode"
date: 2025-01-15
episodeNumber: 1
audioUrl: "https://yourcdn.com/episode-001.mp3"
audioFileSize: 43200000
embedPlayers:
  - type: "spotify"
    id: "your-spotify-episode-id"
---

Episode description and show notes...
```

### Run Locally

```bash
hugo server -D
# Open http://localhost:1313
```

## Documentation

- **[Getting Started](content/docs/getting-started.md)** - Installation and basic setup
- **[Podcast Features](content/docs/podcast-features.md)** - Players, RSS, social sharing
- **[Customization](content/docs/customization.md)** - Themes, fonts, layouts

## Key Features in Detail

### Podcast Players

Supports 10 major podcast hosting platforms with automatic embedding:

```yaml
embedPlayers:
  - type: "spotify"
    id: "episode-id"
  - type: "apple"
    podcastId: "123456"
    episodeId: "789012"
  - type: "youtube"
    id: "video-id"
```

Maximum 3 players displayed per episode with 50px vertical spacing.

### RSS Feed

Podcast-compliant RSS feed automatically generated at `/episodes/index.xml` with:

- Apple Podcasts/iTunes tags
- Spotify metadata
- Google Play Podcasts tags
- Episode enclosures with proper MIME types

Submit to directories using your feed URL.

### Social Sharing

Content-type aware sharing buttons:

- **Video Podcasts:** YouTube, Twitter/X, LinkedIn, Facebook, Reddit
- **Audio Podcasts:** Twitter/X, LinkedIn, Facebook, Email, Reddit
- **Blog Posts:** Twitter/X, LinkedIn, Facebook, Pinterest, Email

Includes copy-to-clipboard functionality with visual confirmation.

### Newsletter Integration

Four provider options:

- **Buttondown** - Simple API integration
- **Mailchimp** - Custom form support
- **ConvertKit** - Form ID integration
- **Custom HTML** - Full flexibility

Configure in `hugo.toml`:

```toml
[params.podcast]
  newsletter = "buttondown"
  newsletterUsername = "your-username"
```

### Hero Cards

Photo-forward card layouts on all list pages:

- 70% opacity image overlays
- Metadata chips (episode #, date, guests)
- Responsive grid: 3 columns → 2 → 1
- Hover effects (transform, scale, shadow)
- Lazy loading for performance

## Navigation

Desktop: `Featured | Episodes | Blog | About | Book`
Mobile: `Feat | Epi | Blog | About | Book`

Configure in `hugo.toml`:

```toml
[[menu.main]]
  identifier = "episodes"
  name = "Episodes"
  url = "/episodes/"
  weight = 2
```

## Legal Pages

Pre-written legal pages with Gen-X personality:

- **Terms of Use** - "Don't be a jerk" policy
- **Privacy Policy** - "We barely want your data"
- **Cookie Policy** - "The edible kind would be better"

All pages include:
- Collapsible sections (click h2 headers)
- Last updated dates
- Contact email support
- Mobile-responsive design
- Print-friendly layouts

## Customization

### Theme Colors

```toml
[params]
  highContrast = true   # Tokyo Night (dark) / OneNord Light (light)
  # highContrast = false  # Nordic (dark) / OneNord Day (light)
```

### Custom CSS

Create `assets/css/_custom.scss`:

```scss
// Your custom styles
.hero-card:hover {
  transform: translateY(-8px);
}
```

### Custom Fonts

Add to `layouts/partials/head-custom.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

See [Customization Guide](content/docs/customization.md) for more options.

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Page Weight:** < 500 KB (without images)
- **JavaScript:** Minimal, vanilla JS only
- **CSS:** Modular SCSS, tree-shakeable

## Accessibility

- WCAG 2.1 AA compliant
- Skip links for keyboard navigation
- ARIA labels throughout
- Focus indicators on all interactive elements
- Screen reader tested
- High contrast mode support

## SEO Features

- JSON-LD structured data (Article, PodcastEpisode, WebSite)
- Open Graph meta tags
- Twitter Card support
- Canonical URLs
- Semantic HTML5
- Podcast RSS feed
- Sitemap generation

## Multilingual Support

Tokyo-Nord supports 13 languages:

- Arabic (ar)
- German (de)
- English (en)
- Spanish (es)
- French (fr)
- Italian (it)
- Korean (ko)
- Dutch (nl)
- Polish (pl)
- Portuguese (Brazil) (pt-BR)
- Swedish (sv)
- Turkish (tr)
- Vietnamese (vi)

[Contribute a new language](https://github.com/gallo-s-chingon/Tokyo-Nord/pulls)

## Credits

**Tokyo-Nord** is a refactor of the [LoveIt theme](https://github.com/dillonzq/LoveIt) by [Dillon](https://dillonzq.com/).

**Color Schemes Inspired By:**
- [Tokyo Night](https://github.com/folke/tokyonight.nvim) by folke
- [Nordic](https://github.com/AlexvZyl/nordic.nvim) by AlexvZyl
- [OneNord](https://github.com/rmehri01/onenord.nvim) by rmehri01

**Layout Inspiration:**
- [Made Mistakes](https://mademistakes.com/) by Michael Rose

**Active Libraries:**
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [Font Awesome](https://fontawesome.com/)
- [Simple Icons](https://github.com/simple-icons/simple-icons)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Lunr.js](https://lunrjs.com/)
- [lazysizes](https://github.com/aFarkas/lazysizes)
- [Twemoji](https://github.com/twitter/twemoji)
- [lightGallery](https://github.com/sachinchoolur/lightgallery)
- [clipboard.js](https://github.com/zenorocha/clipboard.js)

## Author

**Gallo Chingo** with assistance from Claude Sonnet 4.5

- Website: [schingon.com](https://schingon.com)
- GitHub: [@gallo-s-chingon](https://github.com/gallo-s-chingon)
- Theme URL: [tokyo-nord.schingon.com](https://tokyo-nord.schingon.com)

## License

Tokyo-Nord is licensed under the **MIT License**.

See [LICENSE](LICENSE) file for details.

## Support

- **Documentation:** [Getting Started](content/docs/getting-started.md)
- **Issues:** [GitHub Issues](https://github.com/gallo-s-chingon/Tokyo-Nord/issues)
- **Discussions:** [GitHub Discussions](https://github.com/gallo-s-chingon/Tokyo-Nord/discussions)

## Roadmap

See [roadmap.md](roadmap.md) for development progress and future plans.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

**Built with ❤️ for podcasters who care about design and performance.**
