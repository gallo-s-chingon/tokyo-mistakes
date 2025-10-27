---
title: "Featured Appearance Front Matter Reference"
date: 2025-01-15T10:00:00-07:00
draft: false

# Appearance details
type: "podcast"
podcastName: "Example Podcast Show"
hosts: ["Host Name"]
guests: ["Other Guest"]
externalUrl: "https://example.com/listen"

# Media
featuredImage: "/images/appearance-cover.jpg"

# Content
tags: ["reference", "documentation", "frontmatter"]
summary: "Complete frontmatter reference for featured appearances in Tokyo-Nord theme"
description: "Learn all available frontmatter fields for documenting your appearances on other shows"

# Display options
overlayMetadata: true
overlayPosition: "lower-left"
toc: true
lightgallery: true
topicsOn: true
---

## Featured Appearance Front Matter Complete Reference

This page demonstrates all available frontmatter fields when documenting your appearances on other people's podcasts, shows, videos, or content in the Tokyo-Nord Hugo theme.

For complete documentation across all content types, see: [QUICK-REFERENCE.md](/QUICK-REFERENCE.md)

---

## Complete Featured Appearance Frontmatter Template

Below is a complete example showing ALL available frontmatter fields for featured appearances with inline comments:

```yaml
---
# ============================================================================
# REQUIRED FIELDS
# ============================================================================
title: "Episode Title or Appearance Name"    # REQUIRED - Appearance title (H1 heading)
date: 2024-09-24T14:30:00-06:00               # REQUIRED - Hugo publish date (RFC3339 format)

# ============================================================================
# APPEARANCE DETAILS
# ============================================================================
type: "podcast"                               # local only - Appearance type
                                              # Options: podcast, interview, video, conference,
                                              #          talk, panel, article, guest-post
podcastName: "Their Podcast Name"             # local only - Name of the show/platform/event
                                              # Examples: "SmartLess", "TED", "Forbes"
hosts: ["Host Name", "Co-Host"]               # local only - Show host(s) or interviewer(s) (array)
                                              # Can be single host or multiple
guests: ["Other Guest 1", "Other Guest 2"]    # local only - Other guests besides you (array)
                                              # Leave empty [] if you're the only guest
externalUrl: "https://spotify.com/..."        # local only - Link to listen/watch/read
                                              # Direct link where audience can access content

# ============================================================================
# MEDIA
# ============================================================================
featuredImage: /images/appearance-cover.jpg   # local only - Path to show artwork or appearance image
                                              # Often the show's podcast artwork or event photo

# ============================================================================
# CONTENT & SEO
# ============================================================================
tags: ["topic1", "topic2", "topic3"]          # local only - Topics discussed (array)
                                              # Used for categorization and discovery
summary: "Brief one-liner about appearance"   # local only - Short description for cards/previews
                                              # Example: "Discussing productivity on SmartLess"
description: "Longer description"             # local only - Full description for SEO
                                              # More detailed explanation of what was discussed
keywords: ["keyword1", "keyword2"]            # local only - SEO meta keywords (array)
                                              # Optional: for search optimization
categories: []                                # local only - Content categories (array)
                                              # Optional: for additional organization

# ============================================================================
# IMAGE DISPLAY OPTIONS
# ============================================================================

## Image Transparency (Makes image itself transparent)
transparency: true                            # local + global: params.images.transparency
                                              # true = make featured image transparent
                                              # false = image fully opaque (default)
transparencyAmount: 0.7                       # local + global: params.images.opacity
                                              # Range: 0.0 (fully transparent) to 1.0 (opaque)
                                              # Only applies when transparency: true

## Metadata Overlay (Shows appearance metadata ON the image)
overlayMetadata: false                        # local + global: params.podcast.overlay.enable
                                              # true = metadata appears on featured image
                                              # false = metadata appears above image (default)
overlayPosition: "lower-left"                 # local + global: params.podcast.overlay.position
                                              # Options: top-left, top-center, top-right,
                                              #          mid-left, mid-center, mid-right,
                                              #          lower-left, lower-center, lower-right
                                              # Only visible on single pages when overlayMetadata: true
# Note: overlayOpacity is global only in hugo.toml (no local override)
#       Set in params.podcast.overlay.opacity (default: 0.85)

## Color Overlay Filter (Colored layer on top of image)
overlay_filter: 0.5                           # local only - works on BOTH single & list pages
                                              # Formats:
                                              # - Numeric: 0.5 = 50% black overlay
                                              # - RGBA: "rgba(255, 0, 0, 0.5)" = red overlay
                                              # - Gradient: "linear-gradient(...)" = gradient effect
# Examples:
# overlay_filter: 0.3                         # 30% black overlay
# overlay_filter: "rgba(100, 0, 100, 0.5)"    # Purple overlay at 50%
# overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"  # Gradient

# ============================================================================
# TABLE OF CONTENTS
# ============================================================================
toc:
  enable: true                                # local + global: params.page.toc.enable
                                              # Enable table of contents
  auto: true                                  # local + global: params.page.toc.auto
                                              # Auto-collapse TOC
  keepStatic: false                           # local + global: params.page.toc.keepStatic
                                              # Keep TOC static (no auto-collapse)
# OR simple boolean format:
# toc: true                                   # Uses global params.page.toc defaults
# toc: false                                  # Disables TOC entirely

# ============================================================================
# CODE BLOCKS
# ============================================================================
code:
  copy: true                                  # local + global: params.page.code.copy
                                              # Show copy button on code blocks
  maxShownLines: 50                           # local + global: params.page.code.maxShownLines
                                              # Max lines before collapse (expands on click)

# Note: Code rendering (GoAT, Mermaid) is global only in hugo.toml
#       params.page.code.render.goat and params.page.code.render.mermaid

# ============================================================================
# PAGE FEATURES
# ============================================================================
lightgallery: true                            # local + global: params.page.lightgallery
                                              # Enable lightbox gallery for images
                                              # Recommended: true for video/photo appearances
linkToMarkdown: true                          # local + global: params.page.linkToMarkdown
                                              # Show link to raw markdown file
rssFullText: false                            # local + global: params.page.rssFullText
                                              # Include full text in RSS feed (vs summary)
topicsOn: true                                # local + global: params.topicsDiscussed
                                              # Show "Topics Discussed" section with tags
twemoji: false                                # local + global: params.page.twemoji
                                              # Enable Twitter emoji rendering
ruby: true                                    # local + global: params.page.ruby
                                              # Enable ruby annotations (East Asian)
fraction: true                                # local + global: params.page.fraction
                                              # Enable fraction syntax rendering
fontawesome: true                             # local + global: params.page.fontawesome
                                              # Enable FontAwesome icons

# ============================================================================
# VISIBILITY OPTIONS
# ============================================================================
draft: false                                  # local only - Draft status (true = not published)
hiddenFromHomePage: false                     # local + global: params.page.hiddenFromHomePage
                                              # Hide from home page listings
hiddenFromSearch: false                       # local + global: params.page.hiddenFromSearch
                                              # Hide from search results

# ============================================================================
# SOCIAL SHARE BUTTONS
# ============================================================================
share:
  enable: true                                # local + global: params.page.share.enable
                                              # Enable social share buttons
  # Individual platform toggles inherit from global params.page.share.*
  # Available platforms: X, Threads, Facebook, LinkedIn, WhatsApp, Viber,
  # Pinterest, Tumblr, HackerNews, Reddit, VK, Buffer, Xing, Line,
  # Instapaper, Pocket, Flipboard, Weibo, Blogger, Baidu, Odnoklassniki,
  # Evernote, Skype, Trello, Diaspora, Mix, Telegram

# ============================================================================
# COMMENTS
# ============================================================================
comment:
  enable: true                                # local + global: params.page.comment.enable
                                              # Enable comments section
  # Comment systems configured globally in hugo.toml:
  # - utterances (GitHub-based)
  # - giscus (GitHub Discussions)
  # - waline (Self-hosted)

# ============================================================================
# SEO CONFIGURATION
# ============================================================================
seo:
  images: []                                  # local + global: params.page.seo.images
                                              # Array of images for SEO/social sharing
                                              # Example: ["/images/appearance.jpg", "/images/banner.jpg"]
  # Publisher info is global only:
  # - params.page.seo.publisher.name
  # - params.page.seo.publisher.logoUrl

# ============================================================================
# CUSTOM LIBRARIES (Advanced)
# ============================================================================
library:
  css:
    # customCSS = "custom.css"                # local + global: params.page.library.css
                                              # Load custom CSS libraries
  js:
    # customJS = "custom.js"                  # local + global: params.page.library.js
                                              # Load custom JS libraries

# ============================================================================
# ADVANCED HUGO FIELDS (Optional)
# ============================================================================
subtitle: ""                                  # local only - Optional subtitle
lastmod: 2024-09-24T14:30:00-06:00            # local only - Last modified date (RFC3339)
                                              # Used for SEO and sitemap
publishDate: 2024-09-24T14:30:00-06:00        # local only - Scheduled publish date (future posts)
expiryDate: 2099-12-31T00:00:00-07:00         # local only - Content expiry date (auto-unpublish)
weight: 0                                     # local only - Content ordering weight (lower = first)
                                              # Used for manual sorting in lists
layout: ""                                    # local only - Layout template override (advanced)
slug: "custom-url-slug"                       # local only - URL slug override
                                              # Default: auto-generated from title
url: ""                                       # local only - Full URL path override (advanced)
aliases: ["/old-url/", "/another-old/"]       # local only - URL redirects (array)
                                              # Creates redirects from old URLs
outputs: ["HTML"]                             # local only - Output formats (array)
                                              # Default: HTML, can add JSON, RSS, etc.
cascade: {}                                   # local only - Inherit settings to descendants (advanced)
menu: {}                                      # local only - Menu placement config (advanced)
isCJKLanguage: false                          # local only - CJK language processing (Chinese/Japanese/Korean)
markup: "goldmark"                            # local only - Markup renderer override (advanced)
---
```

---

## Field Categories

### Required vs Optional Fields

**REQUIRED FIELDS:**
- `title` - Appearance title (must be present)
- `date` - Publish date in RFC3339 format (e.g., `2024-09-24T14:30:00-06:00`)

**HIGHLY RECOMMENDED FOR APPEARANCES:**
- `type` - Type of appearance (podcast, interview, video, etc.)
- `podcastName` - Name of the show/platform/event
- `hosts` - Who interviewed/hosted you
- `externalUrl` - Link where people can listen/watch/read
- `featuredImage` - Show artwork or event photo
- `tags` - Topics discussed
- `summary` - Brief description of the appearance

**OPTIONAL:**
- `guests` - Other guests (if multiple guests)
- `categories` - For additional organization
- All other fields have sensible defaults

---

## Common Appearance Configurations

### Minimal Podcast Appearance
```yaml
---
title: "Discussing Productivity on SmartLess"
date: 2024-09-24T14:30:00-06:00
type: "podcast"
podcastName: "SmartLess"
hosts: ["Jason Bateman", "Sean Hayes", "Will Arnett"]
externalUrl: "https://open.spotify.com/episode/..."
featuredImage: /images/smartless-cover.jpg
tags: ["productivity", "comedy", "entertainment"]
summary: "Guest appearance on SmartLess discussing time management and productivity"
---
```

### Interview Appearance
```yaml
---
title: "Forbes Interview: The Future of AI"
date: 2024-09-24T14:30:00-06:00
type: "interview"
podcastName: "Forbes Tech"
hosts: ["Tech Editor Name"]
externalUrl: "https://forbes.com/interview/..."
featuredImage: /images/forbes-interview.jpg
tags: ["AI", "technology", "innovation", "business"]
summary: "Discussing artificial intelligence trends and the future of tech with Forbes"
description: "In-depth interview about AI applications in business and the future of machine learning technology"
overlayMetadata: true
overlayPosition: "lower-left"
---
```

### Conference Talk
```yaml
---
title: "TED Talk: Rethinking Productivity"
date: 2024-09-24T14:30:00-06:00
type: "conference"
podcastName: "TEDx Boulder"
hosts: ["TEDx Organizers"]
externalUrl: "https://ted.com/talks/..."
featuredImage: /images/tedx-talk.jpg
tags: ["productivity", "speaking", "innovation", "TED"]
summary: "TEDx talk on rethinking productivity in the modern age"
description: "My TEDx Boulder talk exploring new approaches to productivity and work-life balance"
lightgallery: true
toc: false
---
```

### Video Appearance
```yaml
---
title: "YouTube Collab: Tech Tips with MKBHD"
date: 2024-09-24T14:30:00-06:00
type: "video"
podcastName: "Marques Brownlee"
hosts: ["Marques Brownlee"]
guests: ["Other Tech Reviewer"]
externalUrl: "https://youtube.com/watch?v=..."
featuredImage: /images/mkbhd-collab.jpg
tags: ["tech", "youtube", "reviews", "gadgets"]
summary: "Collaborating with MKBHD on reviewing the latest tech gadgets"
lightgallery: true
overlay_filter: 0.3
---
```

### Panel Discussion
```yaml
---
title: "SXSW Panel: The Creator Economy"
date: 2024-09-24T14:30:00-06:00
type: "panel"
podcastName: "SXSW 2024"
hosts: ["Panel Moderator"]
guests: ["Panelist 1", "Panelist 2", "Panelist 3"]
externalUrl: "https://sxsw.com/session/..."
featuredImage: /images/sxsw-panel.jpg
tags: ["creator economy", "content", "monetization", "SXSW"]
summary: "SXSW panel discussing the future of the creator economy"
description: "Participating in a panel at SXSW 2024 about creator monetization, platforms, and the future of content creation"
toc: true
topicsOn: true
---
```

### Guest Article/Blog Post
```yaml
---
title: "Guest Post: Building Better Products"
date: 2024-09-24T14:30:00-06:00
type: "article"
podcastName: "Product Hunt Blog"
hosts: ["Product Hunt Editorial Team"]
externalUrl: "https://producthunt.com/stories/..."
featuredImage: /images/ph-guest-post.jpg
tags: ["product management", "startups", "writing"]
summary: "Guest article on Product Hunt about building successful products"
description: "My guest post for Product Hunt exploring product development best practices"
toc: true
lightgallery: false
---
```

### Multi-Guest Podcast Appearance
```yaml
---
title: "All-In Podcast: Tech Trends 2024"
date: 2024-09-24T14:30:00-06:00
type: "podcast"
podcastName: "All-In Podcast"
hosts: ["Chamath Palihapitiya", "Jason Calacanis", "David Sacks", "David Friedberg"]
guests: ["Other Guest Expert"]
externalUrl: "https://allinpodcast.co/..."
featuredImage: /images/allin-podcast.jpg
tags: ["tech", "venture capital", "business", "trends", "podcasting"]
summary: "Discussing 2024 tech trends on the All-In Podcast"
description: "Joining the All-In crew to discuss emerging technology trends, venture capital, and predictions for 2024"
overlayMetadata: true
overlayPosition: "lower-center"
toc: true
topicsOn: true
---
```

---

## Appearance Types

### Supported Types
```yaml
type: "podcast"       # Podcast guest appearance
type: "interview"     # Interview (written, audio, video)
type: "video"         # YouTube, video collaboration
type: "conference"    # Conference talk, keynote
type: "talk"          # Speaking engagement
type: "panel"         # Panel discussion
type: "article"       # Guest blog post, article
type: "guest-post"    # Guest writing contribution
```

### Choosing the Right Type
- **podcast** - Guest on someone's podcast
- **interview** - Formal interview (any medium)
- **video** - YouTube collab, video appearance
- **conference** - Conference presentation, keynote
- **talk** - General speaking engagement
- **panel** - Panel discussion with multiple participants
- **article/guest-post** - Written content contribution

The `type` field helps with:
- Visual styling and icons
- Filtering and organization
- Display templates
- SEO categorization

---

## External URL Best Practices

### Where to Link
```yaml
externalUrl: "https://open.spotify.com/episode/abc123"  # Podcast episode
externalUrl: "https://youtube.com/watch?v=abc123"       # YouTube video
externalUrl: "https://ted.com/talks/your-talk"          # TED talk
externalUrl: "https://forbes.com/article/..."           # Article
externalUrl: "https://conference.com/sessions/..."      # Conference
```

### Guidelines
- Link directly to the content (not homepage)
- Use canonical/official URLs
- Prefer platform-specific links (Spotify over generic)
- Use HTTPS
- Test links before publishing
- Update if links change

### Multiple Platforms
If available on multiple platforms, choose the primary one for `externalUrl` and mention others in content:

```markdown
Listen on [Spotify](https://...) | [Apple Podcasts](https://...) | [YouTube](https://...)
```

---

## Hosts vs Guests

### Understanding the Fields

**hosts:**
- The show host(s) or interviewer(s)
- The people who invited you
- The regular cast of the show

**guests:**
- Other guests on the episode (besides you)
- People who were also interviewed
- Other panelists

### Examples

**Solo Guest:**
```yaml
hosts: ["Joe Rogan"]
guests: []  # You're the only guest
```

**Multiple Hosts:**
```yaml
hosts: ["Jason Bateman", "Sean Hayes", "Will Arnett"]
guests: []
```

**Multiple Guests:**
```yaml
hosts: ["Panel Moderator"]
guests: ["Guest 1", "Guest 2", "Guest 3"]
```

**Both:**
```yaml
hosts: ["Host 1", "Host 2"]
guests: ["Other Guest"]
```

---

## Featured Image Guidelines

### Show Artwork
- Use the official show artwork/logo
- Recommended size: 1400x1400px minimum (3000x3000px for podcasts)
- Aspect ratio: 1:1 (square) for podcasts
- Aspect ratio: 16:9 for video content

### Event Photos
- Use official event photography
- Include event branding if applicable
- Ensure good quality and resolution
- Get permission if needed

### Custom Graphics
- Create branded appearance graphics
- Include show logo + your branding
- Maintain consistent style across appearances
- Consider overlays for text readability

---

## SEO Best Practices for Appearances

### Title
```yaml
title: "Discussing AI Safety on Lex Fridman Podcast"
```
- Include show name
- Mention topic if space allows
- Keep under 60 characters for SEO
- Make it descriptive and searchable

### Description
```yaml
description: "My appearance on the Lex Fridman Podcast discussing AI safety, alignment, and the future of artificial intelligence. We explored current challenges and potential solutions."
```
- Include show name
- Mention key topics
- Add context about the discussion
- 150-160 characters for meta description

### Tags
```yaml
tags: ["AI safety", "Lex Fridman", "podcast", "artificial intelligence", "technology"]
```
- Include show/host name
- Add discussion topics
- Use appearance type (podcast, interview, etc.)
- 5-7 tags recommended

---

## Display Options for Appearances

### Metadata Overlay
```yaml
overlayMetadata: true
overlayPosition: "lower-left"
```
- Works well with podcast/show artwork
- Positions metadata on the image
- Creates clean, modern look
- Best for high-quality featured images

### Image Effects
```yaml
overlay_filter: "rgba(0, 0, 0, 0.4)"
transparency: true
transparencyAmount: 0.8
```
- Combine effects for visual impact
- Ensure text remains readable
- Test on both light and dark themes
- Preview on mobile devices

### Topics Section
```yaml
topicsOn: true
tags: ["topic1", "topic2", "topic3"]
```
- Displays visual tag cloud
- Helps with content discovery
- Links to related appearances
- Improves navigation

---

## Configuration Scopes

### Local Only
These fields can ONLY be set in appearance frontmatter:
- `title`, `subtitle`, `date`, `draft`
- `type`, `podcastName`, `hosts`, `guests`, `externalUrl`
- `description`, `keywords`, `summary`, `tags`, `categories`
- `featuredImage`
- `overlay_filter`

### Local + Global
These fields can be set in frontmatter OR hugo.toml (local overrides global):
- `transparency` → global: `params.images.transparency`
- `transparencyAmount` → global: `params.images.opacity`
- `overlayMetadata` → global: `params.podcast.overlay.enable`
- `overlayPosition` → global: `params.podcast.overlay.position`
- `toc.*` → global: `params.page.toc.*`
- `code.*` → global: `params.page.code.*`
- All feature toggles

### Global Only
These fields can ONLY be set in hugo.toml:
- Overlay opacity → `params.podcast.overlay.opacity`
- Code rendering → `params.page.code.render.*`
- Comment system configs → `params.page.comment.*`

---

## Organizing Your Appearances

### Chronological
```yaml
date: 2024-09-24T14:30:00-06:00  # Actual appearance date
```
- Use actual appearance/publish date
- Maintains chronological order
- Helps track career progression

### By Platform
Use tags and categories to organize by platform:
```yaml
tags: ["podcast", "SmartLess", "comedy"]
categories: ["Podcast Appearances"]
```

### By Topic
```yaml
tags: ["AI", "technology", "innovation"]
```
- Group by discussion topics
- Easy to filter related appearances
- Helps audience find relevant content

---

## Cross-References

**Complete Field Documentation:**
- [QUICK-REFERENCE.md](/QUICK-REFERENCE.md) - Full frontmatter reference

**Related Guides:**
- `/episodes/episode-frontmatter-example/` - Episode frontmatter reference
- `/blog/blog-frontmatter-example/` - Blog frontmatter reference

**Theme Documentation:**
- `/docs/content-guide/` - Content creation guide
- `/docs/appearance-types/` - Appearance types guide
- `/docs/getting-started/` - Getting started with Tokyo-Nord

---

## Testing Your Appearance Page

After creating an appearance:

1. Run Hugo development server:
   ```bash
   hugo server -D
   ```

2. Check these pages:
   - Featured list: `http://localhost:1313/featured/`
   - Single appearance: `http://localhost:1313/featured/your-appearance/`
   - Tags: `http://localhost:1313/tags/your-tag/`

3. Verify:
   - Title and metadata display correctly
   - Featured image loads and overlays work
   - External URL link works
   - Hosts and guests display properly
   - Topics section shows tags
   - Share buttons appear

4. Test external link:
   - Click external URL
   - Verify it goes to correct destination
   - Check link opens in new tab (if configured)

---

**Last Updated:** 2025-01-15
**Theme Version:** Tokyo-Nord v1.0
**Hugo Version:** 0.122+
