# Tokyo-Nord Quick Reference

## Front Matter Reference

### Base/Default Keys (Available on All Content Types)

These keys are available on every content type and are processed by Hugo's core system:

```yaml
---
# ============================================================================
# HUGO CORE FIELDS (Hugo Built-in)
# ============================================================================
title: "Page Title"                   # local only - REQUIRED, page title
subtitle: ""                          # local only - optional subtitle
date: 2024-01-20T10:00:00-07:00      # local only - Hugo publish date (RFC3339)
lastmod: 2024-01-20T10:00:00-07:00   # local only - last modified date (RFC3339)
publishDate: 2024-01-20T10:00:00-07:00 # local only - scheduled publish date
expiryDate: 2099-12-31T00:00:00-07:00  # local only - content expiry date
draft: false                          # local only - draft status (true/false)
weight: 0                             # local only - content ordering weight
type: ""                              # local only - content type override
layout: ""                            # local only - layout override
slug: ""                              # local only - URL slug override
url: ""                               # local only - full URL path override
aliases: []                           # local only - URL redirects (array)
outputs: ["HTML"]                     # local only - output formats
cascade: {}                           # local only - inherit settings to descendants
menu: {}                              # local only - menu placement config
isCJKLanguage: false                  # local only - CJK language processing
markup: "goldmark"                    # local only - markup renderer override

# ============================================================================
# THEME-SPECIFIC FIELDS (Tokyo-Nord)
# ============================================================================

# === Author Information ===
author: ""                            # local + global: params.author.name
authorLink: ""                        # local + global: params.author.link

# === Custom Timestamps (Theme-specific) ===
created: "2024-09-24_14:30:00-0600"  # local only - custom ISO timestamp format
updated: "2024-10-01_09:15:00-0600"  # local only - custom update timestamp

# === SEO & Metadata ===
description: ""                       # local only - meta description for SEO
keywords: []                          # local only - meta keywords (array)
summary: ""                           # local only - short summary for cards/previews
categories: []                        # local only - content categories (array)
tags: []                              # local only - content tags/topics (array)

# === Featured Images ===
featuredImage: ""                     # local only - path to featured image
featuredImagePreview: ""              # local only - optional preview image

# === Image Transparency ===
transparency: true                    # local + global: params.images.transparency
transparencyAmount: 0.7               # local + global: params.images.opacity

# === Color Overlay Filter (Jekyll MM style) ===
overlay_filter: 0.5                   # local only - black overlay (0.1-1.0)
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # local only - custom RGBA overlay
# overlay_filter: "linear-gradient(...)"   # local only - CSS gradient overlay

# === Metadata Overlay (Single Page) ===
overlayMetadata: false                # local + global: params.podcast.overlay.enable OR params.blog.overlay.enable
overlayPosition: "lower-left"         # local + global: params.podcast.overlay.position OR params.blog.overlay.position
# overlayOpacity is global only: params.podcast.overlay.opacity OR params.blog.overlay.opacity (default: 0.85)

# === Visibility ===
hiddenFromHomePage: false             # local + global: params.page.hiddenFromHomePage
hiddenFromSearch: false               # local + global: params.page.hiddenFromSearch

# === Display Features ===
topicsOn: true                        # local + global: params.topicsDiscussed
twemoji: false                        # local + global: params.page.twemoji
lightgallery: true                    # local + global: params.page.lightgallery
ruby: true                            # local + global: params.page.ruby
fraction: true                        # local + global: params.page.fraction
fontawesome: true                     # local + global: params.page.fontawesome
linkToMarkdown: true                  # local + global: params.page.linkToMarkdown
rssFullText: false                    # local + global: params.page.rssFullText

# === Table of Contents ===
toc:
  enable: true                        # local + global: params.page.toc.enable
  auto: true                          # local + global: params.page.toc.auto
  keepStatic: false                   # local + global: params.page.toc.keepStatic
# OR simple boolean:
# toc: true                           # uses global params.page.toc defaults
# toc: false                          # disables TOC entirely

# === Code Blocks ===
code:
  copy: true                          # local + global: params.page.code.copy
  maxShownLines: 50                   # local + global: params.page.code.maxShownLines

# === Code Rendering (Hugo built-in diagrams) ===
# Uses global: params.page.code.render.goat and params.page.code.render.mermaid

# === Social Share Buttons ===
share:
  enable: true                        # local + global: params.page.share.enable
  # Individual platform toggles inherit from global params.page.share.*
  # Available platforms: X, Threads, Facebook, Linkedin, Whatsapp, Viber, Pinterest,
  # Tumblr, HackerNews, Reddit, VK, Buffer, Xing, Line, Instapaper, Pocket, Flipboard,
  # Weibo, Blogger, Baidu, Odnoklassniki, Evernote, Skype, Trello, Diaspora, Mix, Telegram

# === Comments ===
comment:
  enable: true                        # local + global: params.page.comment.enable
  # Comment systems configured globally: utterances, giscus, waline

# === SEO Configuration ===
seo:
  images: []                          # local + global: params.page.seo.images
  # Publisher info is global only: params.page.seo.publisher.name, params.page.seo.publisher.logoUrl

# === Custom Libraries ===
library:
  css:
    # someCSS = "some.css"            # local + global: params.page.library.css
  js:
    # someJS = "some.js"              # local + global: params.page.library.js

# === Content-Type Specific Fields ===
# These vary by content type - see sections below for Episodes, Featured, Blog

---
```

### Featured Appearances (`content/featured/`)

For appearances on other people's shows/content:

```yaml
---
# === Base Fields (see Base/Default Keys above) ===
title: "Episode Title or Appearance Name"  # local only
created: 2024-09-24_14:30:00-0600          # local only - custom ISO timestamp
updated: 2024-10-01_09:15:00-0600          # local only - optional update timestamp
draft: false                                # local only

# === Appearance Details ===
type: "podcast"                       # local only - podcast, interview, video, conference, talk, panel
podcastName: "Their Podcast Name"     # local only - name of the show/platform
hosts: ["Host Name"]                  # local only - array of show host(s)
guests: ["Other Guest"]               # local only - other guests besides you (array)
externalUrl: "https://spotify..."     # local only - link to listen/watch/read

# === Media ===
featuredImage: /images/cover.jpg      # local only - path to image

# === Content ===
tags: ["topic1", "topic2"]            # local only - topics discussed (array)
summary: "Brief one-liner"            # local only - short description for cards
description: "Longer description"     # local only - full description for SEO

# === Metadata Overlay (Single Page) ===
overlayMetadata: false                # local + global: params.podcast.overlay.enable
overlayPosition: "lower-left"         # local + global: params.podcast.overlay.position
# overlayPosition options: top-left, top-center, top-right, mid-left, mid-center,
#                          mid-right, lower-left, lower-center, lower-right
# Note: overlayOpacity uses global only: params.podcast.overlay.opacity (default: 0.85)

# === Image Transparency (when overlayMetadata is disabled) ===
transparency: true                    # local + global: params.images.transparency
transparencyAmount: 0.7               # local + global: params.images.opacity

# === Color Overlay Filter (works on both single & list pages) ===
overlay_filter: 0.5                   # local only - black overlay: 0.1-1.0
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # local only - custom RGBA color
# overlay_filter: "linear-gradient(...)"   # local only - CSS gradient

# === Display Options ===
topicsOn: true                        # local + global: params.topicsDiscussed
toc: false                            # local + global: params.page.toc
lightgallery: true                    # local + global: params.page.lightgallery
---
```

### Episodes (`content/episodes/`)

For your own podcast episodes:

```yaml
---
# === Base Fields (see Base/Default Keys above) ===
title: "Episode Title"                # local only
created: 2024-09-24_14:30:00-0600     # local only - custom ISO timestamp
updated: 2024-10-01_09:15:00-0600     # local only - optional update timestamp
draft: false                           # local only

# === Episode Details ===
episodeNumber: 42                     # local only - episode number
season: 2                             # local only - optional season number
episodeType: "full"                   # local only - full, trailer, bonus

# === Podcast Info (overrides global site config) ===
podcast: "Your Podcast Name"          # local + global: params.podcast.name
host: "Your Name"                     # local + global: params.podcast.hostName
guests: ["Guest Name", "Guest 2"]     # local only - array of episode guests

# === Media ===
featuredImage: /images/episode-42.jpg # local only - path to episode artwork
audioUrl: ""                          # local only - direct audio file URL
duration: "45:30"                     # local only - episode duration (HH:MM:SS or MM:SS)

# === Embedded Players ===
embedPlayers:                         # local only - array of player configs
  - type: "spotify"                   # supported: spotify, youtube, apple, etc.
    id: "episode-id"
  - type: "youtube"
    id: "video-id"
  # - type: "apple"
  #   podcastId: "podcast-id"
  #   episodeId: "episode-id"

# === Content ===
tags: ["topic1", "topic2"]            # local only - topics/tags (array)
summary: "Brief episode description"  # local only - short description for cards
description: "Detailed episode notes" # local only - full description for SEO

# === Metadata Overlay (Single Page) ===
overlayMetadata: false                # local + global: params.podcast.overlay.enable
overlayPosition: "lower-center"       # local + global: params.podcast.overlay.position
# overlayPosition options: top-left, top-center, top-right, mid-left, mid-center,
#                          mid-right, lower-left, lower-center, lower-right
# Note: overlayOpacity uses global only: params.podcast.overlay.opacity (default: 0.85)

# === Image Transparency (when overlayMetadata is disabled) ===
transparency: true                    # local + global: params.images.transparency
transparencyAmount: 0.7               # local + global: params.images.opacity

# === Color Overlay Filter (works on both single & list pages) ===
overlay_filter: 0.5                   # local only - black overlay: 0.1-1.0
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # local only - custom RGBA color
# overlay_filter: "linear-gradient(...)"   # local only - CSS gradient

# === Display Options ===
topicsOn: true                        # local + global: params.topicsDiscussed
toc: true                             # local + global: params.page.toc
lightgallery: false                   # local + global: params.page.lightgallery
---
```

### Blog Posts (`content/blog/`)

For blog articles and written content:

```yaml
---
# === Base Fields (see Base/Default Keys above) ===
title: "Post Title"                   # local only
subtitle: "Optional Subtitle"         # local only - optional post subtitle
created: 2024-09-24_14:30:00-0600     # local only - custom ISO timestamp
updated: 2024-10-01_09:15:00-0600     # local only - optional update timestamp
date: 2024-01-20T10:00:00-07:00       # local only - Hugo's publish date
lastmod: 2024-01-20T10:00:00-07:00    # local only - last modified date
draft: false                           # local only

# === Author ===
author: "Author Name"                 # local + global: params.author.name
authorLink: "https://example.com"     # local + global: params.author.link

# === Content ===
description: "Post description for SEO"  # local only - meta description
keywords: ["keyword1", "keyword2"]    # local only - meta keywords (array)
categories: ["category1"]             # local only - post categories (array)
tags: ["tag1", "tag2"]                # local only - post tags (array)

# === Featured Images ===
featuredImage: /images/post.jpg       # local only - path to featured image
featuredImagePreview: /images/thumb.jpg  # local only - optional preview image

# === Image Transparency ===
transparency: false                   # local + global: params.images.transparency
transparencyAmount: 0.8               # local + global: params.images.opacity

# === Metadata Overlay (Single Page) ===
overlayMetadata: false                # local + global: params.blog.overlay.enable
overlayPosition: "lower-left"         # local + global: params.blog.overlay.position
# overlayPosition options: top-left, top-center, top-right, mid-left, mid-center,
#                          mid-right, lower-left, lower-center, lower-right
# Note: overlayOpacity uses global only: params.blog.overlay.opacity (default: 0.85)

# === Color Overlay Filter (works on both single & list pages) ===
overlay_filter: 0.5                   # local only - black overlay: 0.1-1.0
# overlay_filter: "rgba(255, 0, 0, 0.5)"  # local only - custom RGBA color
# overlay_filter: "linear-gradient(...)"   # local only - CSS gradient

# === Table of Contents ===
toc:
  enable: true                        # local + global: params.page.toc.enable
  auto: true                          # local + global: params.page.toc.auto
  keepStatic: false                   # local + global: params.page.toc.keepStatic

# === Code Blocks ===
code:
  copy: true                          # local + global: params.page.code.copy
  maxShownLines: 50                   # local + global: params.page.code.maxShownLines

# === Features ===
lightgallery: true                    # local + global: params.page.lightgallery
linkToMarkdown: true                  # local + global: params.page.linkToMarkdown
rssFullText: false                    # local + global: params.page.rssFullText

# === Visibility ===
hiddenFromHomePage: false             # local + global: params.page.hiddenFromHomePage
hiddenFromSearch: false               # local + global: params.page.hiddenFromSearch

# === Social & Comments ===
share:
  enable: true                        # local + global: params.page.share.enable
comment:
  enable: true                        # local + global: params.page.comment.enable

# === SEO ===
seo:
  images: []                          # local + global: params.page.seo.images
---
```

### Field Notes

**Understanding Local vs Global Config:**
- **Local only**: Settings that can ONLY be specified in front matter
- **Local + global**: Settings that can be specified in front matter (local) OR hugo.toml (global)
  - Local values override global defaults
  - If local is not set, global default is used
- **Global only**: Settings that can ONLY be specified in hugo.toml

### Complete Field Reference Table

This table lists ALL available front matter keys with their configuration scope and global config paths.

| Front Matter Key | Scope | Global Config Path | Description |
|-----------------|-------|-------------------|-------------|
| **HUGO CORE FIELDS** |
| `title` | local only | - | Page title (REQUIRED) |
| `subtitle` | local only | - | Page subtitle |
| `date` | local only | - | Hugo publish date (RFC3339) |
| `lastmod` | local only | - | Last modified date (RFC3339) |
| `publishDate` | local only | - | Scheduled publish date |
| `expiryDate` | local only | - | Content expiry date |
| `draft` | local only | - | Draft status (true/false) |
| `weight` | local only | - | Content ordering weight |
| `type` | local only | - | Content type override |
| `layout` | local only | - | Layout template override |
| `slug` | local only | - | URL slug override |
| `url` | local only | - | Full URL path override |
| `aliases` | local only | - | URL redirects (array) |
| `outputs` | local only | - | Output formats (array) |
| `cascade` | local only | - | Inherit settings to descendants |
| `menu` | local only | - | Menu placement config |
| `isCJKLanguage` | local only | - | CJK language processing |
| `markup` | local only | - | Markup renderer override |
| **THEME-SPECIFIC FIELDS** |
| `author` | local + global | `params.author.name` | Author name |
| `authorLink` | local + global | `params.author.link` | Author website/profile link |
| `created` | local only | - | Custom ISO timestamp (theme format) |
| `updated` | local only | - | Custom update timestamp (theme format) |
| `description` | local only | - | Meta description for SEO |
| `keywords` | local only | - | Meta keywords (array) |
| `summary` | local only | - | Short summary for cards/previews |
| `categories` | local only | - | Content categories (array) |
| `tags` | local only | - | Content tags/topics (array) |
| `featuredImage` | local only | - | Path to featured image |
| `featuredImagePreview` | local only | - | Optional preview image |
| `transparency` | local + global | `params.images.transparency` | Make image transparent (true/false) |
| `transparencyAmount` | local + global | `params.images.opacity` | Image opacity (0.0-1.0) |
| `overlay_filter` | local only | - | Color overlay filter on images |
| `overlayMetadata` | local + global | `params.podcast.overlay.enable` OR `params.blog.overlay.enable` | Show metadata on image |
| `overlayPosition` | local + global | `params.podcast.overlay.position` OR `params.blog.overlay.position` | Metadata overlay position |
| `overlayOpacity` | global only | `params.podcast.overlay.opacity` OR `params.blog.overlay.opacity` | Metadata overlay opacity |
| `hiddenFromHomePage` | local + global | `params.page.hiddenFromHomePage` | Hide from home page |
| `hiddenFromSearch` | local + global | `params.page.hiddenFromSearch` | Hide from search results |
| `topicsOn` | local + global | `params.topicsDiscussed` | Show "Topics Discussed" section |
| `twemoji` | local + global | `params.page.twemoji` | Enable Twitter emoji |
| `lightgallery` | local + global | `params.page.lightgallery` | Enable lightbox gallery |
| `ruby` | local + global | `params.page.ruby` | Enable ruby annotations |
| `fraction` | local + global | `params.page.fraction` | Enable fraction syntax |
| `fontawesome` | local + global | `params.page.fontawesome` | Enable FontAwesome icons |
| `linkToMarkdown` | local + global | `params.page.linkToMarkdown` | Show raw markdown link |
| `rssFullText` | local + global | `params.page.rssFullText` | Include full text in RSS |
| `toc` | local + global | `params.page.toc.enable` | Table of contents (boolean or object) |
| `toc.enable` | local + global | `params.page.toc.enable` | Enable TOC |
| `toc.auto` | local + global | `params.page.toc.auto` | Auto-collapse TOC |
| `toc.keepStatic` | local + global | `params.page.toc.keepStatic` | Keep TOC static (no collapse) |
| `code.copy` | local + global | `params.page.code.copy` | Show code copy button |
| `code.maxShownLines` | local + global | `params.page.code.maxShownLines` | Max code lines before collapse |
| `code.render.goat` | global only | `params.page.code.render.goat` | Enable GoAT diagrams |
| `code.render.mermaid` | global only | `params.page.code.render.mermaid` | Enable Mermaid diagrams |
| `share.enable` | local + global | `params.page.share.enable` | Enable share buttons |
| `comment.enable` | local + global | `params.page.comment.enable` | Enable comments |
| `seo.images` | local + global | `params.page.seo.images` | SEO images (array) |
| `seo.publisher.name` | global only | `params.page.seo.publisher.name` | Publisher name for SEO |
| `seo.publisher.logoUrl` | global only | `params.page.seo.publisher.logoUrl` | Publisher logo for SEO |
| `library.css` | local + global | `params.page.library.css` | Custom CSS libraries |
| `library.js` | local + global | `params.page.library.js` | Custom JS libraries |
| **PODCAST/EPISODES FIELDS** |
| `episodeNumber` | local only | - | Episode number |
| `season` | local only | - | Season number |
| `episodeType` | local only | - | Episode type (full/trailer/bonus) |
| `podcast` | local + global | `params.podcast.name` | Podcast name |
| `host` | local + global | `params.podcast.hostName` | Host name |
| `guests` | local only | - | Episode guests (array) |
| `audioUrl` | local only | - | Direct audio file URL |
| `duration` | local only | - | Episode duration (HH:MM:SS) |
| `embedPlayers` | local only | - | Embedded players config (array) |
| **FEATURED APPEARANCES FIELDS** |
| `type` | local only | - | Appearance type (podcast/interview/video/etc.) |
| `podcastName` | local only | - | Show/platform name |
| `hosts` | local only | - | Show hosts (array) |
| `externalUrl` | local only | - | Link to external content |

**Legend:**
- **local only** = Can only be set in front matter
- **local + global** = Can be set in front matter OR hugo.toml (local overrides global)
- **global only** = Can only be set in hugo.toml (no front matter override)

**Site Config Overrides (Episodes & Featured):**
- `podcast`: Overrides `params.podcast.name` from hugo.toml
- `host`: Overrides `params.podcast.hostName` from hugo.toml
- `overlayMetadata`: Overrides `params.podcast.overlay.enable` from hugo.toml
- `overlayPosition`: Overrides `params.podcast.overlay.position` from hugo.toml

**Site Config Overrides (Blog):**
- `author`: Overrides `params.author.name` from hugo.toml
- `authorLink`: Overrides `params.author.link` from hugo.toml
- `overlayMetadata`: Overrides `params.blog.overlay.enable` from hugo.toml
- `overlayPosition`: Overrides `params.blog.overlay.position` from hugo.toml

**Site Config Overrides (All Content Types):**
- `transparency`: Overrides `params.images.transparency` from hugo.toml
- `transparencyAmount`: Overrides `params.images.opacity` from hugo.toml
- `topicsOn`: Overrides `params.topicsDiscussed` from hugo.toml
- `toc`: Overrides `params.page.toc` from hugo.toml
- `lightgallery`: Overrides `params.page.lightgallery` from hugo.toml
- `hiddenFromHomePage`: Overrides `params.page.hiddenFromHomePage` from hugo.toml
- `hiddenFromSearch`: Overrides `params.page.hiddenFromSearch` from hugo.toml

**Timestamps:**
- Use ISO format: `YYYY-MM-DD_HH:MM:SS-TIMEZONE`
- Example: `2024-09-24_14:30:00-0600`
- `created` is custom field for consistent date display
- `date` and `lastmod` are Hugo core fields

**Overlay Settings:**
- `overlayMetadata`: Shows metadata ON the featured image (vs above it)
- Visible on single pages when enabled (`/episodes/post-name/`)
- `overlayPosition`: Controls where metadata appears on the image
- Global opacity controlled in hugo.toml, not front matter

**Image Transparency:**
- `transparency`: Makes the IMAGE itself transparent (independent from overlay)
- `transparencyAmount`: 0.2 (very transparent) to 1.0 (opaque)
- Works when overlayMetadata is disabled

**Global Configuration Paths (hugo.toml):**

```toml
# === Author Settings ===
[params.author]
  name = "Author Name"                    # Front matter: author
  email = "email@example.com"
  link = "https://example.com"            # Front matter: authorLink

# === Image Settings ===
[params.images]
  transparency = true                     # Front matter: transparency
  opacity = 0.8                           # Front matter: transparencyAmount

# === Podcast Settings ===
[params.podcast]
  enable = true
  name = "Podcast Name"                   # Front matter (episodes): podcast
  hostName = "Host Name"                  # Front matter (episodes): host
  description = "Podcast description"
  artwork = ""
  categories = ["Technology"]
  explicit = false
  spotifyUrl = ""
  appleUrl = ""
  youtubeUrl = ""
  rssUrl = ""
  newsletter = ""
  playerWidth = 0.8

  # Metadata overlay for episodes and featured (single pages)
  [params.podcast.overlay]
    enable = false                        # Front matter: overlayMetadata
    position = "lower-left"               # Front matter: overlayPosition
    opacity = 0.85                        # Global only (no front matter override)

# === Blog Settings ===
[params.blog]
  # Metadata overlay for blog posts (single pages)
  [params.blog.overlay]
    enable = false                        # Front matter: overlayMetadata
    position = "lower-left"               # Front matter: overlayPosition
    opacity = 0.85                        # Global only (no front matter override)

# === Site-wide Display Settings ===
[params]
  topicsDiscussed = true                  # Front matter: topicsOn
  dateFormat = "2006-01-02"

# === Page Settings ===
[params.page]
  hiddenFromHomePage = false              # Front matter: hiddenFromHomePage
  hiddenFromSearch = false                # Front matter: hiddenFromSearch
  twemoji = false                         # Front matter: twemoji
  lightgallery = false                    # Front matter: lightgallery
  ruby = true                             # Front matter: ruby
  fraction = true                         # Front matter: fraction
  fontawesome = true                      # Front matter: fontawesome
  linkToMarkdown = true                   # Front matter: linkToMarkdown
  rssFullText = false                     # Front matter: rssFullText

  # Page titles for list pages
  [params.page.featured]
    title = "Featured Appearances"
  [params.page.episodes]
    title = "Episodes"
  [params.page.blog]
    title = "Blog"
  [params.page.about]
    title = "About"

  # Table of contents
  [params.page.toc]
    enable = true                         # Front matter: toc.enable or toc: true/false
    keepStatic = false                    # Front matter: toc.keepStatic
    auto = true                           # Front matter: toc.auto

  # Code blocks
  [params.page.code]
    copy = true                           # Front matter: code.copy
    maxShownLines = 50                    # Front matter: code.maxShownLines

  # Social share buttons
  [params.page.share]
    enable = true                         # Front matter: share.enable
    X = true
    Facebook = true
    Telegram = true
    HackerNews = true
    Reddit = true
    LinkedIn = true
    # ... (see Social Share Buttons section for all platforms)

  # Comments
  [params.page.comment]
    enable = false                        # Front matter: comment.enable

    [params.page.comment.utterances]
      enable = false
      repo = ""
      issueTerm = "pathname"
      label = ""
      lightTheme = "github-light"
      darkTheme = "github-dark"

    [params.page.comment.giscus]
      enable = false
      repo = ""
      repoId = ""
      category = "Announcements"
      categoryId = ""
      lang = ""
      mapping = "pathname"

    [params.page.comment.waline]
      enable = false
      serverURL = ""

  # SEO
  [params.page.seo]
    images = []                           # Front matter: seo.images
    [params.page.seo.publisher]
      name = ""
      logoUrl = ""

  # Custom libraries
  [params.page.library]
    [params.page.library.css]
      # someCSS = "some.css"                # Front matter: library.css
    [params.page.library.js]
      # someJS = "some.js"                  # Front matter: library.js

# === List Page Settings ===
[params.list]
  paginate = 12
  dateFormat = "01-02"
  rss = 10
  overlayFilter = ""                      # Global default for hero card overlays

# === Section Page Settings ===
[params.section]
  paginate = 12
  dateFormat = "01-02"
  rss = 10
```

**How to Use Global Configs:**

Global configuration allows you to set site-wide defaults that apply to all content, with the ability to override them on a per-page basis in front matter.

**Priority Order:**
1. **Front matter (local)** - Highest priority, overrides everything
2. **Global config (hugo.toml)** - Second priority, used when no local override
3. **Theme defaults** - Lowest priority, built-in fallbacks

**Configuration Types:**

1. **Local Only** - Can ONLY be set in front matter, no global config available
   - Examples: `title`, `date`, `draft`, `description`, `keywords`, `tags`, `categories`
   - These are content-specific and must be defined per-page

2. **Local + Global** - Can be set in BOTH front matter AND hugo.toml
   - Examples: `author`, `toc`, `lightgallery`, `share.enable`, `comment.enable`
   - Global config provides the default, front matter overrides when specified
   - If front matter is omitted, global default is used

3. **Global Only** - Can ONLY be set in hugo.toml, no front matter override
   - Examples: `params.podcast.overlay.opacity`, `params.blog.overlay.opacity`
   - These are site-wide settings with no per-page override capability

**Example Workflow:**

```toml
# hugo.toml - Set global defaults
[params.page]
  lightgallery = false  # Disable lightgallery by default

[params.page.toc]
  enable = true         # Enable TOC by default
  auto = true          # Auto-collapse by default
```

```yaml
# content/blog/post1.md - Use global defaults (no override)
---
title: "Post 1"
# lightgallery and toc will use global defaults above
---
```

```yaml
# content/blog/post2.md - Override specific settings
---
title: "Post 2"
lightgallery: true     # Override: Enable for this post only
toc: false            # Override: Disable TOC for this post
---
```

**Result:**
- Post 1: lightgallery OFF, TOC ON (uses global defaults)
- Post 2: lightgallery ON, TOC OFF (uses local overrides)

**Color Overlay Filter:**
- Works on BOTH single pages and list pages (hero cards)
- Adds a colored layer ON TOP of the image (independent from transparency)
- Formats:
  - Numeric: `0.5` = 50% black overlay
  - RGBA: `"rgba(255, 0, 0, 0.5)"` = red overlay at 50%
  - Gradient: `"linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"` = gradient effect
- Can be combined with `transparency` for creative effects
- See `docs/OVERLAY-FILTER.md` for detailed documentation

---

## Adding Spotify Player to Featured Appearance

### 1. Update Front Matter

```yaml
---
title: "Episode Title"
created: 2024-09-24_14:30:00-0600
draft: false

# KEY FIELDS FOR FEATURED APPEARANCES
type: podcast
podcastName: "Podcast Name"         # ← Name of the show
hosts: ["Host Name"]                # ← Host(s) of the show
externalUrl: "https://spotify..."   # ← Link to episode

# Image & metadata
featuredImage: /images/cover.jpg
summary: "Short description"
---
```

### 2. Add Spotify Player in Content

Replace HTML iframe with shortcode:

**❌ Don't use:**
```html
<iframe src="https://open.spotify.com/embed/episode/667dex4sU7Z54upPO4Up4n" ...></iframe>
```

**✅ Use shortcode:**
```markdown
{{< podcast-spotify "667dex4sU7Z54upPO4Up4n" >}}
```

### 3. Get Spotify Episode ID

From URL: `https://open.spotify.com/episode/667dex4sU7Z54upPO4Up4n`

The ID is: `667dex4sU7Z54upPO4Up4n`

---

## Episode vs Featured Front Matter

### For YOUR Episodes (`content/episodes/`)

```yaml
episodeNumber: 42
podcast: "Your Podcast Name"  # Your show (overrides site config)
host: "Your Name"             # You (overrides site config)
guests: ["Guest Name"]        # Your guests
embedPlayers:                 # Your players
  - type: "spotify"
    id: "episode-id"
```

### For Appearances on OTHER Shows (`content/featured/`)

```yaml
type: podcast
podcastName: "Their Podcast Name"  # Their show
hosts: ["Their Host"]              # Their host(s)
externalUrl: "https://..."         # Link to their episode
```

Then add player in content:
```markdown
{{< podcast-spotify "episode-id" >}}
```

---

## Metadata Overlay Location

**🎨 With Image Overlay (70% opacity):**
- List pages: `/episodes/`, `/featured/`, `/blog/`
- Shows hero cards with metadata on image

**📄 Without Overlay:**
- Single pages: `/episodes/post-name/`
- Shows metadata above image

**To see overlays:** Visit the list page (`/featured/`)

---

## Podcast Player Shortcodes

```markdown
# Spotify
{{< podcast-spotify "episode-id" >}}

# YouTube
{{< podcast-youtube "video-id" >}}

# Apple Podcasts
{{< podcast-apple "podcast-id" "episode-id" >}}

# Blubrry
{{< podcast-blubrry "program-name" "episode-id" >}}

# Libsyn
{{< podcast-libsyn "embed-id" >}}

# Podbean
{{< podcast-podbean "embed-url" >}}

# Simplecast
{{< podcast-simplecast "episode-id" >}}

# Spreaker
{{< podcast-spreaker "episode-id" >}}

# Transistor
{{< podcast-transistor "share-url" >}}

# Buzzsprout
{{< podcast-buzzsprout "podcast-id" "episode-id" >}}
```

---

## File Locations

```
Content:  content/episodes/my-episode.md
          content/featured/my-appearance.md
          content/blog/my-post.md

Images:   static/images/cover.jpg

Reference in front matter:
          featuredImage: /images/cover.jpg
```

---

## Quick Commands

```bash
# Create episode
hugo new episodes/episode-name.md

# Create featured appearance
hugo new featured/appearance-name.md

# Run development server
hugo server -D

# Build site
hugo
```

---

## Common Issues

### Iframe not showing?
Replace `<iframe>` with `{{< podcast-spotify "id" >}}`

### Metadata not on image?
Overlays only show on list pages (`/featured/`), not single pages

### Image not loading?
Check path: `featuredImage: /images/filename.jpg`
File must be in: `static/images/filename.jpg`

---

## Configurable Page Headings

### Overview

Page headings (the H1 titles on list pages) can be customized through `hugo.toml` to match your content needs. This allows you to personalize the title shown on each section's list page without changing the URL structure.

### Configuration Location

Configure page titles in `hugo.toml` under `[params.page]`:

```toml
[params.page.featured]
  title = "Featured Appearances"  # Default

[params.page.episodes]
  title = "Episodes"  # Default

[params.page.blog]
  title = "Blog"  # Default

[params.page.about]
  title = "About"  # Default
```

### How to Customize

Edit the `title` value in `hugo.toml` for the section you want to change:

```toml
# Example: Customizing for a podcast host
[params.page.featured]
  title = "Host's Guest Appearances"

[params.page.episodes]
  title = "The Podcast Name Episode List"

[params.page.blog]
  title = "Latest News and Updates"

[params.page.about]
  title = "About the Host"
```

### Where Titles Appear

These configured titles appear as the main H1 heading on:
- Featured list page: `/featured/`
- Episodes list page: `/episodes/`
- Blog list page: `/blog/`
- About page: `/about/`

The titles use the bouncing animation class (`animate__animated animate__pulse animate__faster`) for visual impact.

### Notes

- **URL Structure:** Changing the page title does NOT change the URL. `/episodes/` remains `/episodes/` even if the title is "Podcast Episodes"
- **Navigation Labels:** Page titles are separate from navigation menu labels (see Navigation Configuration below)
- **Fallback:** If no custom title is configured, the page uses its default title from the content file

---

## Navigation Menu Configuration

### Overview

The navigation menu labels can be customized through the main menu configuration in `hugo.toml`. Desktop and mobile navigation can have different labels.

### Configuration Location

Navigation is configured in the `[[menu.main]]` section at the top of `hugo.toml`:

```toml
[[menu.main]]
  identifier = "featured"
  name = "Featured"        # Desktop label
  url = "/featured/"
  weight = 1

[[menu.main]]
  identifier = "episodes"
  name = "Episodes"        # Desktop label
  url = "/episodes/"
  weight = 2

[[menu.main]]
  identifier = "blog"
  name = "Blog"            # Desktop label
  url = "/blog/"
  weight = 3

[[menu.main]]
  identifier = "about"
  name = "About"           # Desktop label
  url = "/about/"
  weight = 4
```

### Mobile Navigation Labels

Mobile navigation automatically shortens some labels for space:
- "Featured" becomes "Feat"
- "Episodes" becomes "Epi"
- Other labels remain the same

This is handled in `layouts/partials/header.html` (lines 141-146).

### How to Customize Navigation Labels

Edit the `name` value in the `[[menu.main]]` section:

```toml
# Example: Customizing for a specific show
[[menu.main]]
  identifier = "featured"
  name = "Guest Appearances"
  url = "/featured/"
  weight = 1

[[menu.main]]
  identifier = "episodes"
  name = "Show Episodes"
  url = "/episodes/"
  weight = 2
```

### Important Warning

**WARNING:** Changing navigation labels requires careful attention to folder structure.

The `url` parameter MUST match your content folder structure:
- `url = "/featured/"` requires `content/featured/` directory
- `url = "/episodes/"` requires `content/episodes/` directory
- `url = "/blog/"` requires `content/blog/` directory

**Example - Changing "episodes" to "shows":**
1. Rename folder: `content/episodes/` → `content/shows/`
2. Update menu config:
   ```toml
   [[menu.main]]
     identifier = "episodes"  # Can stay the same
     name = "Shows"           # New label
     url = "/shows/"          # MUST match new folder name
     weight = 2
   ```
3. Update page title config:
   ```toml
   [params.page.episodes]
     title = "All Shows"
   ```

### Desktop vs Mobile Labels

To customize both desktop and mobile labels, you can modify the header template or use CSS to hide/show different text.

The current implementation in `layouts/partials/header.html`:
- Desktop: Uses `name` from menu config (line 30)
- Mobile: Hardcoded shortened labels for "featured" and "episodes" (lines 141-146)

### Navigation Order

The `weight` parameter controls the order of menu items:
- Lower numbers appear first
- Default order: Featured (1), Episodes (2), Blog (3), About (4)

Change the weight to reorder:
```toml
[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 1  # Now appears first
```

### Enabling/Disabling Navigation Items

To hide a navigation item, comment it out or delete it from `hugo.toml`:

```toml
# [[menu.main]]
#   identifier = "blog"
#   name = "Blog"
#   url = "/blog/"
#   weight = 3
```

For conditional navigation (Contact, Book), use the `[params.navigation]` toggles:

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

### Notes

- **Page Titles vs Navigation:** Page titles (H1 on list pages) are separate from navigation labels
- **URL Structure:** The URL must match your content directory structure
- **Mobile Shortening:** Some labels are automatically shortened on mobile for better UX
- **Weight Order:** Lower weight numbers appear first in the menu

---

**Full Documentation:** See `content/docs/content-guide.md`

---

## Social Share Buttons Configuration

### Overview

Social share buttons appear at the bottom of blog posts, episodes, and featured content. Each button can be individually enabled or disabled through the `hugo.toml` configuration file.

### Configuration Location

Configure share buttons in `hugo.toml` under `[params.page.share]`:

```toml
[params.page.share]
  enable = true    # Master toggle - must be true for any buttons to show
  X = true         # Individual button toggles
  Facebook = true
  Telegram = true
  # ... etc
```

### Available Share Buttons

All buttons are controlled through `[params.page.share]` in `hugo.toml`. Here are all 27 available platforms:

| Button | Config Key | Default | Notes |
|--------|------------|---------|-------|
| X (Twitter) | `X` or `Twitter` | true | Supports @via and hashtags from tags |
| Threads | `Threads` | false | |
| Facebook | `Facebook` | true | |
| LinkedIn | `Linkedin` | false | |
| WhatsApp | `Whatsapp` | false | |
| Viber | `Viber` | false | Not in default config |
| Pinterest | `Pinterest` | false | Includes featured image |
| Tumblr | `Tumblr` | false | Supports tags |
| Hacker News | `Hackernews` | true | |
| Reddit | `Reddit` | false | |
| VK | `VK` | false | Russian social network |
| Buffer | `Buffer` | false | Uses Twitter handle |
| Xing | `Xing` | false | German LinkedIn alternative |
| Line | `Line` | false | Asian messaging app |
| Instapaper | `Instapaper` | false | Read-it-later service |
| Pocket | `Pocket` | false | Read-it-later service |
| Flipboard | `Flipboard` | false | Magazine-style aggregator |
| Weibo | `Weibo` | false | Chinese microblog |
| Blogger | `Blogger` | false | |
| Baidu | `Baidu` | false | Chinese search/social |
| Odnoklassniki | `Odnoklassniki` | false | Russian social network |
| Evernote | `Evernote` | false | Note-taking app |
| Skype | `Skype` | false | |
| Trello | `Trello` | false | Creates card with link |
| Diaspora | `Diaspora` | false | Decentralized social network |
| Mix | `Mix` | false | Content discovery |
| Telegram | `Telegram` | true | |

### How to Enable/Disable Buttons

#### Enable the Share Feature

First, ensure sharing is enabled globally:

```toml
[params.page.share]
  enable = true
```

#### Enable Specific Buttons

Set individual buttons to `true`:

```toml
[params.page.share]
  enable = true
  X = true
  Facebook = true
  LinkedIn = true
  Telegram = true
```

#### Disable Specific Buttons

Set individual buttons to `false`:

```toml
[params.page.share]
  enable = true
  X = true
  Facebook = false    # ← Disables Facebook
  LinkedIn = false    # ← Disables LinkedIn
```

#### Disable All Sharing

Set the master toggle to `false`:

```toml
[params.page.share]
  enable = false    # ← No share buttons will appear
```

### Template Logic

The share buttons are rendered by `/layouts/partials/plugin/share.html`. The logic works as follows:

1. **Master Toggle**: Checks if `params.page.share.enable` is true
2. **Individual Buttons**: Each button checks its specific config key
3. **URL Construction**: Builds platform-specific share URLs with page data
4. **Social Integration**: Some buttons use site social config (e.g., X uses `params.social.X` for @via)

### Special Button Features

#### X (Twitter)
- Supports both `X` and `Twitter` config keys
- Includes @via if `params.social.X` is set
- Automatically adds hashtags from post tags

```toml
[params.page.share]
  X = true

[params.social]
  X = "yourusername"    # Adds "via @yourusername" to tweets
```

#### Pinterest
- Includes the post's featured image in the pin
- Uses page description

#### Tumblr
- Includes tags from post front matter
- Uses page description as caption

#### VK
- Includes featured image
- Uses page description

#### Buffer
- Uses Twitter handle from social config
- Includes featured image

#### Weibo
- Includes featured image
- Uses Weibo UID from social config

### Example Configurations

#### Minimal (Popular platforms only)
```toml
[params.page.share]
  enable = true
  X = true
  Facebook = true
  Linkedin = true
  Reddit = true
```

#### Tech/Developer Focus
```toml
[params.page.share]
  enable = true
  X = true
  Hackernews = true
  Reddit = true
  Telegram = true
  LinkedIn = true
```

#### Asian Markets
```toml
[params.page.share]
  enable = true
  Weibo = true
  Line = true
  Baidu = true
```

#### Privacy-Focused
```toml
[params.page.share]
  enable = true
  Telegram = true
  Diaspora = true
  Mastodon = false    # Not available in theme
```

### Button Order

Buttons appear in this fixed order (as defined in the template):

1. X (Twitter)
2. Threads
3. Facebook
4. LinkedIn
5. WhatsApp
6. Viber
7. Pinterest
8. Tumblr
9. Hacker News
10. Reddit
11. VK
12. Buffer
13. Xing
14. Line
15. Instapaper
16. Pocket
17. Flipboard
18. Weibo
19. Blogger
20. Baidu
21. Odnoklassniki
22. Evernote
23. Skype
24. Trello
25. Diaspora
26. Mix
27. Telegram

### Troubleshooting

**Share buttons not appearing:**
- Check `params.page.share.enable = true` in `hugo.toml`
- Verify the specific button is set to `true`
- Ensure you're viewing a post page (not a list page)

**X/Twitter button not working:**
- Use either `X = true` or `Twitter = true` (both work)
- Template checks both keys for backwards compatibility

**Button shows but link doesn't work:**
- Check that `baseURL` is set correctly in `hugo.toml`
- Ensure the post has a proper permalink

**Want to change button order:**
- Currently requires editing `/layouts/partials/plugin/share.html`
- Buttons are hardcoded in template order

---

## 404 Page Customization

### Overview

The 404 (Page Not Found) page can be customized to show podcast links, social media links, custom messages, and more. The page is controlled through `hugo.toml` configuration and i18n translations.

### File Location

- **Template:** `/layouts/404.html`
- **Translations:** `/i18n/en.toml` (and other language files)
- **Configuration:** `hugo.toml` under `[params.notFoundPage]`

### Basic Configuration

Add this section to your `hugo.toml` to enable custom 404 content:

```toml
[params.notFoundPage]
  # Enable custom content on 404 page
  showCustomContent = true

  # Show podcast links (requires podcast.enable = true)
  showPodcastLinks = true

  # Show social media links
  showSocialLinks = true

  # Optional: Custom heading (overrides i18n default)
  heading = ":("

  # Optional: Custom message (supports markdown)
  message = "This is not the page you are looking for"
```

### Features

#### 1. Basic Error Message

Always shown by default:
- Random emoji from a predefined set
- "The page you're looking for doesn't exist. Sorry."
- Back button using browser history

#### 2. Custom Heading and Message

Override the default text with custom content:

```toml
[params.notFoundPage]
  showCustomContent = true
  heading = "Oops! Lost in cyberspace?"
  message = "Don't worry, we've got you covered. Check out these links:"
```

Or use the i18n system (edit `/i18n/en.toml`):

```toml
[notFoundHeading]
other = ":("

[notFoundMessage]
other = "This is not the page you are looking for"
```

#### 3. Podcast Links

Automatically displays links to your podcast platforms if configured:

```toml
[params.notFoundPage]
  showPodcastLinks = true

[params.podcast]
  enable = true
  spotifyUrl = "https://open.spotify.com/show/your-show-id"
  appleUrl = "https://podcasts.apple.com/us/podcast/your-podcast/id123456"
  youtubeUrl = "https://youtube.com/@yourchannel"
```

This will display:
- **Spotify:** Link with Spotify icon
- **Apple Podcasts:** Link with podcast icon
- **YouTube:** Link with YouTube icon

#### 4. Social Media Links

Displays your active social accounts:

```toml
[params.notFoundPage]
  showSocialLinks = true

[params.social]
  Instagram = "your.username"        # Displays: @your.username on Instagram
  Reddit = "YourUsername"            # Displays: u/YourUsername on Reddit
  X = "yourhandle"                   # Displays: @yourhandle on X
  Facebook = "yourpage"              # Displays link to Facebook page
```

Supported platforms:
- Instagram
- Reddit
- X (Twitter)
- Facebook

#### 5. Custom Links

Add completely custom links with icons:

```toml
[params.notFoundPage]
  showCustomContent = true

[[params.notFoundPage.customLinks]]
  text = "Google Podcasts"
  url = "https://podcasts.google.com/feed/your-feed-url"
  icon = "fab fa-google-play"
  external = true

[[params.notFoundPage.customLinks]]
  text = "Back to Home"
  url = "/"
  icon = "fas fa-home"
  external = false
```

### Complete Configuration Example

Here's a full example combining all features:

```toml
[params.notFoundPage]
  # Enable custom content
  showCustomContent = true

  # Show podcast and social links
  showPodcastLinks = true
  showSocialLinks = true

  # Custom heading and message
  heading = ":("
  message = "This is not the page you are looking for"

# Custom links
[[params.notFoundPage.customLinks]]
  text = "Visit our Blog"
  url = "/blog/"
  icon = "fas fa-blog"
  external = false

[[params.notFoundPage.customLinks]]
  text = "Contact Us"
  url = "/contact/"
  icon = "fas fa-envelope"
  external = false

# Podcast settings (used by 404 page)
[params.podcast]
  enable = true
  spotifyUrl = "https://open.spotify.com/show/3XjoipCU3QzeIaQAAQpBdW"
  appleUrl = "https://podcasts.apple.com/us/podcast/sucias/id1548173787"
  youtubeUrl = "https://youtube.com/@yourchannel"

# Social settings (used by 404 page)
[params.social]
  Instagram = "sucias.pod"
  Reddit = "SuciasAreMyFavorite"
  X = "suciaspod"
  Facebook = "suciaspodcast"
```

### Customizing Text (i18n)

All text on the 404 page can be translated or customized via `/i18n/en.toml`:

```toml
# === 404.html ===
[pageNotFound]
other = "Page not found"

[pageNotFoundText]
other = "The page you're looking for doesn't exist. Sorry."

# Custom 404 content
[notFoundHeading]
other = ":("

[notFoundMessage]
other = "This is not the page you are looking for"

[notFoundListenOn]
other = "Listen on:"

[notFoundSpotify]
other = "Spotify"

[notFoundApplePodcasts]
other = "Apple Podcasts"

[notFoundYouTube]
other = "YouTube"

[notFoundActiveSocials]
other = "Active Socials:"

[notFoundOnInstagram]
other = "on Instagram"

[notFoundOnReddit]
other = "on Reddit"

[notFoundOnX]
other = "on X"

[notFoundOnFacebook]
other = "on Facebook"
```

### Configuration Parameters Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `showCustomContent` | boolean | false | Enable custom 404 content |
| `showPodcastLinks` | boolean | false | Show podcast platform links |
| `showSocialLinks` | boolean | false | Show social media links |
| `heading` | string | (from i18n) | Custom heading text |
| `message` | string | (from i18n) | Custom message (supports markdown) |
| `customLinks` | array | [] | Custom link objects |

#### Custom Link Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | yes | Link text to display |
| `url` | string | yes | Link URL |
| `icon` | string | no | FontAwesome icon class |
| `external` | boolean | no | Open in new tab (adds target="_blank") |

### Styling

The 404 page uses these CSS classes:
- `.not-found-custom-content` - Container for custom content
- `.not-found-links` - Container for link sections
- `.not-found-list` - Unordered list of links

To customize styling, add CSS to your site's custom stylesheet.

### Testing the 404 Page

1. Run your Hugo development server:
   ```bash
   hugo server -D
   ```

2. Visit a non-existent page:
   ```
   http://localhost:1313/this-page-does-not-exist
   ```

3. Verify that your custom content appears

### Minimal Setup (No Custom Content)

To use the default 404 page without custom content:

```toml
# Don't add [params.notFoundPage] section
# Or explicitly disable it:
[params.notFoundPage]
  showCustomContent = false
```

This shows only:
- Random emoji
- Default error message
- Back button

### Troubleshooting

**Custom content not showing:**
- Check `params.notFoundPage.showCustomContent = true` in `hugo.toml`
- Verify you're testing with `hugo server`, not viewing a cached page

**Podcast links not appearing:**
- Check `params.notFoundPage.showPodcastLinks = true`
- Verify `params.podcast.enable = true`
- Ensure at least one podcast URL is set (spotifyUrl, appleUrl, youtubeUrl)

**Social links not appearing:**
- Check `params.notFoundPage.showSocialLinks = true`
- Verify social usernames are set in `[params.social]`
- Only Instagram, Reddit, X, and Facebook are supported on 404 page

**Custom links not showing:**
- Verify `params.notFoundPage.showCustomContent = true`
- Check that customLinks are defined as an array with `[[params.notFoundPage.customLinks]]`
- Ensure each link has `text` and `url` fields

**Icons not displaying:**
- Make sure you're using valid FontAwesome icon classes
- Check that FontAwesome is loaded (enabled by default in theme)
