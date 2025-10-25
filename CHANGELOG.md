# Changelog

All notable changes to Tokyo-Nord will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

#### Image Features
- **Overlay Filter** - Jekyll Minimal Mistakes inspired color overlay system
  - Supports numeric transparency (0.1-1.0 for black overlays)
  - Supports RGBA color overlays (e.g., `rgba(255, 0, 0, 0.5)`)
  - Supports CSS gradients for advanced effects
  - Works on both single pages and list/archive hero cards
  - Per-page `overlay_filter` parameter or site-wide `params.list.overlayFilter`
  - Independent from existing `transparency` feature (can be combined)
  - Shared parsing logic via `/layouts/partials/function/overlay-filter.html`

## [1.0.0] - 2025-01-20

### Added

#### Theme System
- **Four theme variants** with high/low contrast modes
  - Tokyo Night (dark, high contrast)
  - Nordic (dark, low contrast)
  - OneNord Light (light, high contrast)
  - OneNord Day (light, low contrast)
- **Contrast-aware theme toggle** (dark ↔ light within contrast level)
- **Auto theme detection** based on system preferences

#### Podcast Features
- **10 platform podcast players:** Spotify, Apple Podcasts, YouTube, Blubrry, Libsyn, Spreaker, Podbean, Transistor, Simplecast, Buzzsprout
- **Player stack system** (max 3 players per episode, 50px spacing)
- **Podcast-compliant RSS feed** with Apple Podcasts, Spotify, and Google Play tags
- **Episode archetypes** with comprehensive front matter
- **Subscribe buttons** with platform-specific links
- **Newsletter integration** (Buttondown, Mailchimp, ConvertKit, Custom HTML)
- **Guest booking page** template (Calendly/Acuity/Cal.com support)
- **Featured appearances** content type for external podcast tracking

#### Content Management
- **Hero cards** with 70% opacity image overlays and metadata
- **Three content types:** Episodes, Featured Appearances, Blog Posts
- **Smart archetypes** for each content type
- **Responsive grid layouts** (3 columns → 2 → 1)
- **Hover effects** on hero cards (transform, scale, shadow)

#### Social & Sharing
- **Content-type aware social sharing**
  - Video podcasts: YouTube, Twitter/X, LinkedIn, Facebook, Reddit
  - Audio podcasts: Twitter/X, LinkedIn, Facebook, Email, Reddit
  - Blog posts: Twitter/X, LinkedIn, Facebook, Pinterest, Email
- **Copy-to-clipboard** functionality with visual confirmation
- **Platform-specific hover colors**

#### Navigation
- **Responsive navigation** with desktop/mobile label variants
  - Desktop: Featured | Episodes | Blog | About | Book
  - Mobile: Feat | Epi | Blog | About | Book
- **Optional sections** (Blog, Book) with config toggles

#### Legal Pages
- **Terms of Use** with Gen-X sardonic tone
- **Privacy Policy** ("We barely want your data")
- **Cookie Policy** ("The edible kind would be better")
- **Collapsible sections** (click h2 headers to toggle)
- **Print-friendly** layouts

#### Documentation
- **Getting Started** guide (installation, configuration, first episode)
- **Podcast Features** guide (all 10 players, RSS, sharing)
- **Customization** guide (themes, fonts, layouts, CSS)

#### Performance & SEO
- **JSON-LD structured data** (Article, PodcastEpisode, WebSite)
- **Open Graph** and **Twitter Card** meta tags
- **Skip links** for accessibility
- **ARIA labels** throughout
- **Lazy loading** for images and iframes
- **Canonical URLs**
- **Semantic HTML5**

#### Developer Experience
- **Comprehensive documentation** (~450 lines)
- **Well-commented code**
- **Modular SCSS** architecture
- **Custom CSS** support via `_custom.scss`
- **Custom partials** override system
- **Example site** configuration

### Changed

#### From LoveIt Theme
- **Refactored** all podcast-specific features
- **Removed** 10 deprecated JavaScript libraries (~15 MB)
- **Removed** 4 deprecated shortcodes
- **Removed** 6 deprecated comment systems
- **Simplified** hugo.toml (640 → 424 lines, 33.75% reduction)
- **Reduced** i18n languages (25 → 13, 48% reduction)
- **Updated** theme toggle logic for contrast-aware switching
- **Replaced** blog-centric navigation with podcast navigation

### Removed

#### Deprecated Features
- **Algolia** search (kept Lunr.js)
- **APlayer** and **MetingJS** (music players)
- **ECharts** (data visualization)
- **Gitalk** (comments)
- **KaTeX** (math formulas)
- **Mapbox GL** (maps)
- **Sharer.js** (replaced with custom sharing)
- **TypeIt** (typing animations)
- **Valine** (comments)
- **Disqus**, **Facebook**, **Telegram**, **Commento** comments

#### Removed Languages
- Chinese (zh-CN, zh-TW)
- Bengali, Catalan, Hindi, Indonesian, Romanian, Russian, Serbian, Telugu, Thai, Ukrainian

### Fixed
- **Theme toggle** now respects contrast mode setting
- **Mobile navigation** properly shortens labels
- **RSS feed** validates against podcast directory requirements
- **Hero cards** properly handle missing images with fallback gradients
- **Player stack** enforces 3-player maximum
- **Collapsible sections** support keyboard navigation

### Security
- **No tracking cookies** by default
- **Privacy-friendly analytics** (Plausible/GoatCounter)
- **HTTPS** enforced in examples
- **Sanitized** user-generated content in RSS feeds
- **Secure** iframe embeds with proper sandbox attributes

## [Unreleased]

### Added
- **Customizable 404 page** with podcast and social links
  - Optional custom heading and message
  - Automatic podcast platform links (Spotify, Apple Podcasts, YouTube)
  - Social media links (Instagram, Reddit, X, Facebook)
  - Custom link support with FontAwesome icons
  - i18n translation support
  - Configuration via `hugo.toml` under `[params.notFoundPage]`
  - Full documentation in QUICK-REFERENCE.md

### Planned Features
- Search functionality for documentation
- Code block copy-to-clipboard for docs
- Example podcast site with sample content
- Screenshot gallery
- Video tutorials
- Community showcase

---

## Version History

**1.0.0** - Initial release of Tokyo-Nord podcast theme (2025-01-20)

---

For detailed development progress, see [roadmap.md](roadmap.md).
