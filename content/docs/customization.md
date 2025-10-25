---
title: "Customization Guide"
date: 2025-01-15
draft: false
description: "Customize Tokyo-Nord colors, fonts, and layouts"
weight: 3
---

# Customization Guide

Tokyo-Nord is highly customizable. This guide shows you how to make it your own.

## Theme Color Modes

### Understanding the 4 Variants

Tokyo-Nord includes 4 distinct color schemes:

| Mode | Contrast | Light Theme | Dark Theme |
|------|----------|-------------|------------|
| High | Sharp, punchy | OneNord Light | Tokyo Night |
| Low | Soft, easy | OneNord Day | Nordic |

### Switching Contrast Modes

In `hugo.toml`:

```toml
[params]
  # High contrast (tokyo-night/onenord-light)
  highContrast = true

  # Low contrast (nordic/onenord-day)
  # highContrast = false
```

Users can toggle light/dark, but contrast level is site-wide.

### Theme Colors Reference

#### Tokyo Night (Dark, High Contrast)

```scss
Background: #1a1b26
Foreground: #c0caf5
Links: #7aa2f7
Accent: #bb9af7
Code: #9ece6a
```

#### Nordic (Dark, Low Contrast)

```scss
Background: #242933
Foreground: #d8dee9
Links: #88c0d0
Accent: #81a1c1
Code: #a3be8c
```

#### OneNord Light (Light, High Contrast)

```scss
Background: #ffffff
Foreground: #2e3440
Links: #5e81ac
Accent: #88c0d0
Code: #a3be8c
```

#### OneNord Day (Light, Low Contrast)

```scss
Background: #fafafa
Foreground: #4c566a
Links: #5e81ac
Accent: #81a1c1
Code: #a3be8c
```

## Custom CSS

### Method 1: Custom SCSS File (Recommended)

Create `assets/css/_custom.scss`:

```scss
// Custom styles for your site

// Override theme variables
:root {
  --custom-accent: #ff6b6b;
}

// Custom classes
.my-custom-class {
  color: var(--custom-accent);
}

// Modify existing elements
.hero-card-title {
  font-family: 'Your Custom Font', sans-serif;
}
```

The theme automatically loads `_custom.scss` if it exists.

### Method 2: Override Existing Styles

Create `assets/css/_override.scss`:

```scss
// Override specific theme styles

// Change hero card hover effect
.hero-card:hover {
  transform: translateY(-8px); // More dramatic
}

// Adjust player spacing
.podcast-player-wrapper {
  margin-bottom: 60px; // Instead of 50px
}

// Customize share button colors
.share-button-twitter:hover {
  background: #your-custom-blue;
}
```

### Method 3: Inline Styles (Quick Fixes)

In your content files:

```markdown
---
title: "My Page"
---

<style>
.page.single {
  max-width: 900px; /* Wider content */
}
</style>

Your content here...
```

## Custom Fonts

### Adding Google Fonts

1. Create `layouts/partials/head-custom.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

2. Add to `assets/css/_custom.scss`:

```scss
:root {
  --global-font-family: 'Inter', -apple-system, system-ui, sans-serif;
  --code-font-family: 'JetBrains Mono', 'Monaco', monospace;
}
```

### Using Local Fonts

1. Place fonts in `static/fonts/`:

```
static/
  fonts/
    YourFont-Regular.woff2
    YourFont-Bold.woff2
```

2. Define in `assets/css/_custom.scss`:

```scss
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

:root {
  --global-font-family: 'YourFont', sans-serif;
}
```

## Page Titles and Navigation

### Configurable Page Headings

Page headings (the H1 titles shown on list pages) can be customized in `hugo.toml` to match your content strategy:

```toml
[params.page.featured]
  title = "Featured Appearances"  # Customize as needed

[params.page.episodes]
  title = "Episodes"  # Can change to "Podcast Episodes" etc.

[params.page.blog]
  title = "Blog"  # Can change to "Latest News" etc.

[params.page.about]
  title = "About"  # Can change to "About the Host" etc.
```

**Example customization for a podcast host:**

```toml
[params.page.featured]
  title = "Host's Guest Appearances"

[params.page.episodes]
  title = "The Podcast Name Episode List"

[params.page.blog]
  title = "Latest News and Updates"

[params.page.about]
  title = "About the Host"
```

**Where titles appear:**
- Featured list page: `/featured/`
- Episodes list page: `/episodes/`
- Blog list page: `/blog/`
- About page: `/about/`

**Important notes:**
- Titles use the animated bouncing effect (`animate__pulse`)
- Changing page titles does NOT change URLs
- Page titles are separate from navigation menu labels
- If no custom title is set, the default from the content file is used

### Navigation Menu Customization

Navigation labels are configured separately in the `[[menu.main]]` section:

```toml
[[menu.main]]
  identifier = "featured"
  name = "Featured"     # Desktop navigation label
  url = "/featured/"
  weight = 1

[[menu.main]]
  identifier = "episodes"
  name = "Episodes"     # Desktop navigation label
  url = "/episodes/"
  weight = 2
```

**Mobile labels:**
- "Featured" automatically becomes "Feat"
- "Episodes" automatically becomes "Epi"
- Other labels remain the same

**WARNING:** The `url` parameter MUST match your content folder structure. If you change the URL, you must also rename the corresponding folder:

```toml
# Example: Changing "episodes" to "shows"
# 1. Rename content/episodes/ to content/shows/
# 2. Update menu config:
[[menu.main]]
  identifier = "episodes"
  name = "Shows"
  url = "/shows/"  # Must match new folder name
  weight = 2
```

**Navigation order:**
Control the order with the `weight` parameter (lower numbers appear first):

```toml
[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 1  # Now appears first instead of fourth
```

**Conditional navigation items:**
Some navigation items can be toggled on/off:

```toml
[params.navigation.contact]
  enable = true
  url = "/contact/"
  desktopLabel = "Contact"
  mobileLabel = "Contact"

[params.navigation.book]
  enable = true
  url = "/book/"
  desktopLabel = "Book a Guest"
  mobileLabel = "Book"
```

## Layout Customization

### Hero Card Modifications

#### Image Overlay Filter

Control the darkness/brightness of hero card images on list pages using the `overlayFilter` setting:

```toml
[params.list]
  # No overlay (default) - full brightness images
  overlayFilter = ""

  # Black overlay examples
  overlayFilter = "0.3"  # 30% black
  overlayFilter = "0.7"  # 70% black

  # Named color overlays (50% opacity)
  overlayFilter = "blue"
  overlayFilter = "red"
  overlayFilter = "gray"

  # RGBA for full control
  overlayFilter = "rgba(255, 0, 0, 0.5)"  # 50% red
  overlayFilter = "rgba(0, 0, 255, 0.3)"  # 30% blue
```

**Supported named colors:** black, red, blue, green, yellow, purple, white, orange, gray

The overlay is applied to featured images on list pages (episodes, featured, blog archives) but does NOT affect:
- Single page featured images
- The parallax zoom hover effect
- The metadata overlay at the bottom of cards

#### Grid Layout

Adjust grid layout in `assets/css/_custom.scss`:

```scss
// 4 columns on large screens
@media (min-width: 1400px) {
  .episodes-archive,
  .featured-archive,
  .blog-archive {
    grid-template-columns: repeat(4, 1fr);
  }
}

// Larger gaps
.episodes-archive {
  gap: 4rem;
}

// Taller cards
.hero-card-image {
  height: 450px;
}
```

### Navigation Modifications

Change navigation behavior in `assets/css/_custom.scss`:

```scss
// Always show full labels on mobile
.menu-item .share-label,
.menu-item .subscribe-label {
  display: inline; // Override mobile hiding
}

// Sticky navigation
#header-desktop {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

### Sidebar Layout

Add a sidebar to single pages. Create `layouts/_default/single.html`:

```html
{{- define "content" -}}
<div class="page-with-sidebar">
  <aside class="sidebar">
    {{- partial "sidebar/toc.html" . -}}
    {{- partial "sidebar/subscribe.html" . -}}
  </aside>

  <main class="main-content">
    {{- /* Your content */ -}}
  </main>
</div>
{{- end -}}
```

Style in `assets/css/_custom.scss`:

```scss
.page-with-sidebar {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
```

## Custom Shortcodes

### Creating Custom Shortcodes

Example: Callout box

Create `layouts/shortcodes/callout.html`:

```html
{{- $type := .Get "type" | default "info" -}}
{{- $title := .Get "title" -}}

<div class="callout callout-{{ $type }}">
  {{- if $title -}}
    <div class="callout-title">
      <i class="fas fa-{{ if eq $type "warning" }}exclamation-triangle{{ else if eq $type "tip" }}lightbulb{{ else }}info-circle{{ end }}"></i>
      {{ $title }}
    </div>
  {{- end -}}
  <div class="callout-content">
    {{ .Inner | markdownify }}
  </div>
</div>
```

Style in `assets/css/_custom.scss`:

```scss
.callout {
  padding: 1.5rem;
  border-left: 4px solid;
  margin: 2rem 0;
  border-radius: 4px;

  &.callout-info {
    background: rgba(var(--global-link-color-rgb), 0.1);
    border-color: var(--global-link-color);
  }

  &.callout-warning {
    background: rgba(255, 193, 7, 0.1);
    border-color: #ffc107;
  }

  &.callout-tip {
    background: rgba(76, 175, 80, 0.1);
    border-color: #4caf50;
  }
}
```

Usage in content:

```markdown
<!-- Example of a custom shortcode -->
You can create your own shortcodes for custom functionality.
```

## Custom Partials

### Override Theme Partials

To customize any theme partial, copy it to your site's `layouts/` directory with the same structure:

```
# Theme partial
themes/tokyo-nord/layouts/partials/footer.html

# Your override
layouts/partials/footer.html
```

Hugo will use your version instead.

### Common Partial Overrides

**Custom Footer:**

Create `layouts/partials/footer.html`:

```html
<footer id="footer">
  <div class="footer-container">
    <div class="footer-line">
      © {{ now.Year }} {{ .Site.Title }}
    </div>

    <div class="footer-social">
      {{- /* Your custom social links */ -}}
      <a href="https://twitter.com/yourhandle">Twitter</a>
      <a href="https://github.com/yourname">GitHub</a>
    </div>

    <div class="footer-line">
      <a href="/legal/privacy/">Privacy</a> |
      <a href="/legal/terms/">Terms</a> |
      <a href="/legal/cookies/">Cookies</a>
    </div>
  </div>
</footer>
```

**Custom Header Logo:**

Create `layouts/partials/header-logo.html`:

```html
<a href="{{ .Site.Home.RelPermalink }}" class="header-logo">
  <img src="/images/logo.svg" alt="{{ .Site.Title }}" width="150" height="50">
</a>
```

Update `hugo.toml`:

```toml
[params.header.title]
  logo = "/images/logo.svg"
  name = ""  # Empty to only show logo
```

## Color Scheme Customization

### Creating a Custom Theme Variant

Create `assets/css/_custom-theme.scss`:

```scss
[data-theme="my-custom-theme"] {
  // Background colors
  --global-background-color: #your-bg;
  --global-background-color-secondary: #your-bg-secondary;

  // Text colors
  --global-font-color: #your-text;
  --global-font-secondary-color: #your-text-muted;

  // Link colors
  --global-link-color: #your-link;
  --global-link-hover-color: #your-link-hover;

  // Accent colors
  --global-border-color: #your-border;
  --code-background-color: #your-code-bg;

  // All other CSS variables...
}
```

Import in `assets/css/_custom.scss`:

```scss
@import "custom-theme";
```

### Adjusting Existing Themes

Tweak colors in `assets/css/_custom.scss`:

```scss
// Make Tokyo Night links brighter
[data-theme="tokyo-night"] {
  --global-link-color: #89b4fa; // Lighter blue
}

// Adjust Nordic contrast
[data-theme="nordic"] {
  --global-font-color: #e5e9f0; // Brighter text
}
```

## Advanced Customization

### Custom Home Page

Create `layouts/index.html`:

```html
{{- define "main" -}}
<div class="home-hero">
  <h1>{{ .Site.Title }}</h1>
  <p>{{ .Site.Params.description }}</p>

  {{- /* Latest episode */ -}}
  {{- $latest := where .Site.RegularPages "Type" "episodes" | first 1 -}}
  {{- range $latest -}}
    <div class="latest-episode">
      {{- partial "podcast/hero-card.html" (dict "page" . "type" "episode") -}}
    </div>
  {{- end -}}

  <div class="home-cta">
    <a href="/episodes/" class="button">All Episodes</a>
    <a href="/about/" class="button button-secondary">About</a>
  </div>
</div>
{{- end -}}
```

### Custom List Page Layout

Create `layouts/episodes/list-custom.html`:

```html
{{- define "content" -}}
<div class="episodes-custom-layout">
  {{- /* Featured episode at top */ -}}
  {{- $featured := where .Pages ".Params.featured" true | first 1 -}}
  {{- range $featured -}}
    <div class="featured-episode">
      {{- /* Large hero card */ -}}
    </div>
  {{- end -}}

  {{- /* Regular grid */ -}}
  {{- $regular := where .Pages ".Params.featured" "!=" true -}}
  <div class="episodes-grid">
    {{- range $regular -}}
      {{- partial "podcast/hero-card.html" (dict "page" . "type" "episode") -}}
    {{- end -}}
  </div>
</div>
{{- end -}}
```

### Adding Custom Metadata

Add custom fields to episode front matter:

```yaml
---
# Custom fields
sponsoredBy: "Company Name"
transcriptUrl: "https://example.com/transcript.pdf"
relatedEpisodes: [1, 2, 3]
---
```

Display in `layouts/episodes/single.html` override:

```html
{{- with .Params.sponsoredBy -}}
  <div class="episode-sponsor">
    Sponsored by: {{ . }}
  </div>
{{- end -}}

{{- with .Params.transcriptUrl -}}
  <a href="{{ . }}" class="transcript-link">
    Download Transcript
  </a>
{{- end -}}
```

## Testing Customizations

### Local Testing

```bash
# Test with draft content
hugo server -D

# Test production build
hugo server --minify

# Test specific theme
hugo server --theme tokyo-nord
```

### Browser Testing

Test your customizations in:
- Chrome/Chromium
- Firefox
- Safari (iOS)
- Mobile viewports (320px, 375px, 768px)

### Validation

```bash
# Validate HTML
hugo && npx html-validator --file public/index.html

# Check CSS
npx stylelint "assets/css/**/*.scss"
```

## Troubleshooting

### Custom CSS Not Loading

```bash
# Clear Hugo cache
hugo --cleanDestinationDir

# Check file location
ls assets/css/_custom.scss

# Verify import in style.scss
grep "_custom" assets/css/style.scss
```

### Font Not Displaying

```html
<!-- Check browser console for 404s -->
<!-- Verify path in DevTools Network tab -->

<!-- Ensure proper MIME types in server config -->
```

### Layout Breaking

```scss
// Add to _custom.scss for debugging
* {
  outline: 1px solid red; // Visualize all elements
}

// Remove when done
```

---

**Need more help?** Check the [GitHub Discussions](https://github.com/gallo-s-chingon/Tokyo-Nord/discussions) or [open an issue](https://github.com/gallo-s-chingon/Tokyo-Nord/issues).
