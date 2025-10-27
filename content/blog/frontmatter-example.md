---
title: "Blog Post Frontmatter Reference Guide"
subtitle: "Complete documentation for all blog frontmatter fields"
date: 2025-01-15T10:00:00-07:00
draft: false

# Author
author: "Author Name"
authorLink: "https://example.com"

# Content
description: "Learn all available frontmatter fields for blog posts in Tokyo-Nord theme"
keywords: ["reference", "documentation", "frontmatter", "hugo"]
categories: ["Documentation"]
tags: ["reference", "hugo", "blog", "documentation"]

# Featured images
featuredImage: "/images/blog-cover.jpg"
featuredImagePreview: "/images/blog-thumb.jpg"

# Image styling
transparency: false
transparencyAmount: 0.8
overlay_filter: 0.5

# Display options
overlayMetadata: false
overlayPosition: "lower-left"
toc:
  enable: true
  auto: true
  keepStatic: false
lightgallery: true
linkToMarkdown: true
topicsOn: true

# Social & comments
share:
  enable: true
comment:
  enable: true
---

## Blog Post Frontmatter Complete Reference

This post contains examples and documentation for all available frontmatter fields when creating blog posts in the Tokyo-Nord Hugo theme.

For the complete reference documentation, see: [QUICK-REFERENCE.md](/QUICK-REFERENCE.md)

---

## Complete Blog Post Frontmatter Template

Below is a complete example showing ALL available frontmatter fields for blog posts with inline comments explaining each field:

```yaml
---
# ============================================================================
# REQUIRED FIELDS
# ============================================================================
title: "Post Title"                       # REQUIRED - Post title (H1 heading)
date: 2024-01-20T10:00:00-07:00           # REQUIRED - Hugo publish date (RFC3339 format)

# ============================================================================
# OPTIONAL TITLE FIELDS
# ============================================================================
subtitle: "Optional Subtitle"             # Optional post subtitle (appears under title)

# ============================================================================
# AUTHOR INFORMATION
# ============================================================================
author: "Author Name"                     # local + global: params.author.name
                                          # Author name (overrides site config)
authorLink: "https://example.com"         # local + global: params.author.link
                                          # Author website/profile link

# ============================================================================
# CONTENT & SEO
# ============================================================================
description: "Post description for SEO"   # Meta description for SEO (150-160 chars recommended)
keywords: ["keyword1", "keyword2"]        # Meta keywords for SEO (array)
summary: "Brief post summary"             # Short summary for cards/previews (optional)
categories: ["category1", "category2"]    # Post categories (array)
tags: ["tag1", "tag2", "tag3"]            # Post tags/topics (array)

# ============================================================================
# FEATURED IMAGES
# ============================================================================
featuredImage: /images/post.jpg           # Path to featured image (main image)
featuredImagePreview: /images/thumb.jpg   # Optional preview/thumbnail image
                                          # If not set, uses featuredImage

# ============================================================================
# IMAGE DISPLAY OPTIONS
# ============================================================================

## Image Transparency (Makes image itself transparent)
transparency: false                       # local + global: params.images.transparency
                                          # true = make image transparent
                                          # false = image fully opaque (default)
transparencyAmount: 0.8                   # local + global: params.images.opacity
                                          # Range: 0.0 (fully transparent) to 1.0 (opaque)
                                          # Only applies when transparency: true

## Metadata Overlay (Shows metadata ON the image)
overlayMetadata: false                    # local + global: params.blog.overlay.enable
                                          # true = metadata appears on image
                                          # false = metadata appears above image (default)
overlayPosition: "lower-left"             # local + global: params.blog.overlay.position
                                          # Options: top-left, top-center, top-right,
                                          #          mid-left, mid-center, mid-right,
                                          #          lower-left, lower-center, lower-right
                                          # Only visible on single pages when overlayMetadata: true
# Note: overlayOpacity is global only in hugo.toml (no local override)
#       Set in params.blog.overlay.opacity (default: 0.85)

## Color Overlay Filter (Colored layer on top of image)
overlay_filter: 0.5                       # local only - works on BOTH single & list pages
                                          # Formats:
                                          # - Numeric: 0.5 = 50% black overlay
                                          # - RGBA: "rgba(255, 0, 0, 0.5)" = red overlay
                                          # - Gradient: "linear-gradient(...)" = gradient effect
# Examples:
# overlay_filter: 0.3                     # 30% black overlay
# overlay_filter: "rgba(100, 0, 100, 0.5)"  # Purple overlay at 50%
# overlay_filter: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"  # Gradient

# ============================================================================
# TABLE OF CONTENTS
# ============================================================================
toc:
  enable: true                            # local + global: params.page.toc.enable
                                          # Enable table of contents
  auto: true                              # local + global: params.page.toc.auto
                                          # Auto-collapse TOC
  keepStatic: false                       # local + global: params.page.toc.keepStatic
                                          # Keep TOC static (no auto-collapse)
# OR simple boolean format:
# toc: true                               # Uses global params.page.toc defaults
# toc: false                              # Disables TOC entirely

# ============================================================================
# CODE BLOCKS
# ============================================================================
code:
  copy: true                              # local + global: params.page.code.copy
                                          # Show copy button on code blocks
  maxShownLines: 50                       # local + global: params.page.code.maxShownLines
                                          # Max lines before collapse (expands on click)

# Note: Code rendering (GoAT, Mermaid) is global only in hugo.toml
#       params.page.code.render.goat and params.page.code.render.mermaid

# ============================================================================
# PAGE FEATURES
# ============================================================================
lightgallery: true                        # local + global: params.page.lightgallery
                                          # Enable lightbox gallery for images
linkToMarkdown: true                      # local + global: params.page.linkToMarkdown
                                          # Show link to raw markdown file
rssFullText: false                        # local + global: params.page.rssFullText
                                          # Include full text in RSS feed (vs summary)
topicsOn: true                            # local + global: params.topicsDiscussed
                                          # Show "Topics Discussed" section with tags
twemoji: false                            # local + global: params.page.twemoji
                                          # Enable Twitter emoji rendering
ruby: true                                # local + global: params.page.ruby
                                          # Enable ruby annotations (East Asian)
fraction: true                            # local + global: params.page.fraction
                                          # Enable fraction syntax rendering
fontawesome: true                         # local + global: params.page.fontawesome
                                          # Enable FontAwesome icons

# ============================================================================
# VISIBILITY OPTIONS
# ============================================================================
draft: false                              # local only - Draft status (true = not published)
hiddenFromHomePage: false                 # local + global: params.page.hiddenFromHomePage
                                          # Hide from home page listings
hiddenFromSearch: false                   # local + global: params.page.hiddenFromSearch
                                          # Hide from search results

# ============================================================================
# SOCIAL SHARE BUTTONS
# ============================================================================
share:
  enable: true                            # local + global: params.page.share.enable
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
  enable: true                            # local + global: params.page.comment.enable
                                          # Enable comments section
  # Comment systems configured globally in hugo.toml:
  # - utterances (GitHub-based)
  # - giscus (GitHub Discussions)
  # - waline (Self-hosted)

# ============================================================================
# SEO CONFIGURATION
# ============================================================================
seo:
  images: []                              # local + global: params.page.seo.images
                                          # Array of images for SEO/social sharing
                                          # Example: ["/images/post.jpg", "/images/banner.jpg"]
  # Publisher info is global only:
  # - params.page.seo.publisher.name
  # - params.page.seo.publisher.logoUrl

# ============================================================================
# CUSTOM LIBRARIES (Advanced)
# ============================================================================
library:
  css:
    # customCSS = "custom.css"            # local + global: params.page.library.css
                                          # Load custom CSS libraries
  js:
    # customJS = "custom.js"              # local + global: params.page.library.js
                                          # Load custom JS libraries

# ============================================================================
# ADVANCED HUGO FIELDS (Optional)
# ============================================================================
lastmod: 2024-01-20T10:00:00-07:00        # Last modified date (RFC3339)
                                          # Used for SEO and sitemap
publishDate: 2024-01-20T10:00:00-07:00    # Scheduled publish date (future posts)
expiryDate: 2099-12-31T00:00:00-07:00     # Content expiry date (auto-unpublish)
weight: 0                                 # Content ordering weight (lower = first)
                                          # Used for manual sorting in lists
type: ""                                  # Content type override (advanced)
layout: ""                                # Layout template override (advanced)
slug: "custom-url-slug"                   # URL slug override
                                          # Default: auto-generated from title
url: ""                                   # Full URL path override (advanced)
aliases: ["/old-url/", "/another-old/"]   # URL redirects (array)
                                          # Creates redirects from old URLs
outputs: ["HTML"]                         # Output formats (array)
                                          # Default: HTML, can add JSON, RSS, etc.
cascade: {}                               # Inherit settings to descendants (advanced)
menu: {}                                  # Menu placement config (advanced)
isCJKLanguage: false                      # CJK language processing (Chinese/Japanese/Korean)
markup: "goldmark"                        # Markup renderer override (advanced)
---
```

---

## Field Categories

### Required vs Optional Fields

**REQUIRED FIELDS:**
- `title` - Post title (must be present)
- `date` - Publish date in RFC3339 format (e.g., `2024-01-20T10:00:00-07:00`)

**HIGHLY RECOMMENDED:**
- `description` - SEO meta description (150-160 characters)
- `tags` - Content topics/tags (3-7 recommended)
- `categories` - Content categories (1-3 recommended)
- `featuredImage` - Featured image for cards and social sharing

**COMMONLY USED:**
- `subtitle` - Post subtitle
- `author` - Author name (if different from site default)
- `summary` - Brief summary for cards (optional, auto-generated if omitted)
- `toc` - Table of contents
- `lightgallery` - Lightbox for images

**OPTIONAL:**
All other fields have sensible defaults and can be omitted.

---

## Configuration Scopes

Understanding when fields use local vs global configuration:

### Local Only
These fields can ONLY be set in frontmatter:
- `title`, `subtitle`, `date`, `draft`
- `description`, `keywords`, `summary`
- `categories`, `tags`
- `featuredImage`, `featuredImagePreview`
- `overlay_filter`
- `lastmod`, `publishDate`, `expiryDate`, `weight`
- `slug`, `url`, `aliases`

### Local + Global
These fields can be set in frontmatter OR hugo.toml (local overrides global):
- `author` → global: `params.author.name`
- `authorLink` → global: `params.author.link`
- `transparency` → global: `params.images.transparency`
- `transparencyAmount` → global: `params.images.opacity`
- `overlayMetadata` → global: `params.blog.overlay.enable`
- `overlayPosition` → global: `params.blog.overlay.position`
- `toc.*` → global: `params.page.toc.*`
- `code.*` → global: `params.page.code.*`
- `lightgallery` → global: `params.page.lightgallery`
- `linkToMarkdown` → global: `params.page.linkToMarkdown`
- `rssFullText` → global: `params.page.rssFullText`
- `topicsOn` → global: `params.topicsDiscussed`
- `share.enable` → global: `params.page.share.enable`
- `comment.enable` → global: `params.page.comment.enable`
- `seo.images` → global: `params.page.seo.images`
- `library.*` → global: `params.page.library.*`
- All feature toggles (`twemoji`, `ruby`, `fraction`, `fontawesome`)

### Global Only
These fields can ONLY be set in hugo.toml (no frontmatter override):
- Overlay opacity → `params.blog.overlay.opacity`
- Code rendering → `params.page.code.render.goat`, `params.page.code.render.mermaid`
- SEO publisher → `params.page.seo.publisher.name`, `params.page.seo.publisher.logoUrl`
- Comment system configs → `params.page.comment.utterances.*`, `params.page.comment.giscus.*`, etc.

---

## Common Configurations

### Minimal Blog Post (Required Fields Only)
```yaml
---
title: "My First Post"
date: 2024-01-20T10:00:00-07:00
description: "A brief description of my first blog post"
tags: ["getting started", "blog"]
categories: ["Personal"]
---
```

### Standard Blog Post
```yaml
---
title: "How to Build a Hugo Site"
subtitle: "A step-by-step guide"
date: 2024-01-20T10:00:00-07:00
author: "John Doe"
description: "Learn how to build a static website using Hugo, the fast and flexible static site generator"
keywords: ["hugo", "static site", "web development"]
categories: ["Technology"]
tags: ["hugo", "web development", "tutorial"]
featuredImage: /images/hugo-tutorial.jpg
toc: true
lightgallery: true
---
```

### Technical Blog Post with Code
```yaml
---
title: "Advanced JavaScript Techniques"
subtitle: "ES6+ Features and Best Practices"
date: 2024-01-20T10:00:00-07:00
description: "Explore modern JavaScript features including destructuring, async/await, and more"
categories: ["Technology"]
tags: ["javascript", "es6", "programming"]
featuredImage: /images/javascript-cover.jpg
toc:
  enable: true
  auto: true
code:
  copy: true
  maxShownLines: 30
lightgallery: false
---
```

### Photo Blog Post
```yaml
---
title: "Travel Photography: Iceland 2024"
subtitle: "Capturing the Northern Lights"
date: 2024-01-20T10:00:00-07:00
description: "A visual journey through Iceland's stunning landscapes and the aurora borealis"
categories: ["Photography", "Travel"]
tags: ["photography", "iceland", "travel", "northern lights"]
featuredImage: /images/iceland-aurora.jpg
featuredImagePreview: /images/iceland-thumb.jpg
lightgallery: true
toc: false
overlay_filter: 0.3
---
```

### Styled Post with Image Effects
```yaml
---
title: "Creative Design Showcase"
date: 2024-01-20T10:00:00-07:00
description: "Exploring creative design with custom image overlays and effects"
categories: ["Design"]
tags: ["design", "visual effects", "css"]
featuredImage: /images/design-showcase.jpg
overlayMetadata: true
overlayPosition: "lower-center"
overlay_filter: "rgba(100, 0, 200, 0.4)"
transparency: false
toc: false
lightgallery: true
---
```

### Draft Post (Not Published)
```yaml
---
title: "Work in Progress Post"
date: 2024-01-20T10:00:00-07:00
draft: true
description: "This post is still being written and won't be published yet"
categories: ["Personal"]
tags: ["draft", "wip"]
---
```

### Scheduled Future Post
```yaml
---
title: "Upcoming Product Launch"
date: 2024-01-15T10:00:00-07:00
publishDate: 2024-02-01T09:00:00-07:00
description: "This post will automatically publish on February 1st"
categories: ["Product"]
tags: ["announcement", "launch"]
featuredImage: /images/product-launch.jpg
---
```

---

## Understanding Image Display Options

Tokyo-Nord offers three independent ways to style your featured images:

### 1. Metadata Overlay (`overlayMetadata`)
Shows post metadata (title, date, author, categories) directly ON the featured image instead of above it.
- **Scope:** Single pages only (`/blog/post-name/`)
- **Control:** `overlayMetadata: true/false` + `overlayPosition`
- **Opacity:** Global setting only (`params.blog.overlay.opacity`)
- **Best for:** Posts with high-quality featured images

### 2. Image Transparency (`transparency`)
Makes the IMAGE itself semi-transparent.
- **Scope:** Single pages
- **Control:** `transparency: true/false` + `transparencyAmount: 0.0-1.0`
- **Use case:** Soften images, blend with background color
- **Best for:** Subtle visual effects

### 3. Color Overlay Filter (`overlay_filter`)
Adds a colored layer ON TOP of the image.
- **Scope:** Both single pages AND list pages (hero cards)
- **Formats:**
  - Numeric: `0.5` = 50% black overlay
  - RGBA: `"rgba(255, 0, 0, 0.5)"` = red overlay
  - Gradient: `"linear-gradient(...)"`
- **Use case:** Improve text readability, creative effects, brand colors
- **Best for:** Enhancing text contrast, visual branding

**These can be combined!** For example:
```yaml
transparency: true
transparencyAmount: 0.8
overlay_filter: "rgba(0, 50, 100, 0.3)"
overlayMetadata: true
overlayPosition: "lower-left"
```

---

## Table of Contents Options

### Simple Boolean
```yaml
toc: true   # Enable with default settings
# or
toc: false  # Disable completely
```

### Detailed Configuration
```yaml
toc:
  enable: true       # Enable TOC
  auto: true         # Auto-collapse on scroll
  keepStatic: false  # Don't auto-collapse (stay expanded)
```

**When to use TOC:**
- ✅ Long articles with multiple sections
- ✅ Tutorial posts with steps
- ✅ Technical documentation
- ❌ Short posts (< 500 words)
- ❌ Photo blogs with minimal text

---

## Categories vs Tags

### Categories
- Broad content groupings
- 1-3 per post recommended
- Examples: "Technology", "Personal", "Photography", "Design"
- Used for main navigation and organization

### Tags
- Specific topics/keywords
- 3-7 per post recommended
- Examples: "javascript", "tutorial", "hugo", "travel", "iceland"
- Used for detailed content discovery and search

**Best Practice:**
```yaml
categories: ["Technology"]
tags: ["hugo", "static site", "web development", "tutorial"]
```

---

## SEO Best Practices

### Meta Description
```yaml
description: "Clear, concise description of the post content in 150-160 characters"
```
- Keep under 160 characters
- Include target keywords naturally
- Make it compelling (used in search results)
- Don't duplicate the title

### Keywords
```yaml
keywords: ["primary keyword", "secondary keyword", "long-tail keyword"]
```
- 3-7 keywords recommended
- Include synonyms and variations
- Consider search intent

### Featured Image
```yaml
featuredImage: /images/post-cover.jpg
```
- Recommended size: 1200x630px (optimal for social sharing)
- Use descriptive filenames
- Optimize file size (< 200KB)

### SEO Images for Social
```yaml
seo:
  images: ["/images/social-card.jpg", "/images/og-image.jpg"]
```
- Used for Open Graph and Twitter Cards
- Falls back to featuredImage if not specified

---

## Date Format

Hugo uses RFC3339 timestamp format:
```
YYYY-MM-DDTHH:MM:SS±TIMEZONE
```

### Common Examples
```yaml
# Pacific Time (PST/PDT)
date: 2024-01-20T10:00:00-07:00

# Mountain Time (MST/MDT)
date: 2024-01-20T11:00:00-06:00

# Eastern Time (EST/EDT)
date: 2024-01-20T13:00:00-05:00

# UTC
date: 2024-01-20T17:00:00Z

# With seconds
date: 2024-01-20T10:30:45-07:00
```

### Date Fields
- `date` - Publish date (REQUIRED)
- `lastmod` - Last modified date (optional, good for SEO)
- `publishDate` - Scheduled future publish (optional)
- `expiryDate` - Auto-unpublish date (optional)

---

## Author Configuration

### Override Site Author
```yaml
author: "Guest Author Name"
authorLink: "https://guestauthor.com"
```

### Use Site Default Author
```yaml
# Omit author fields to use site default from hugo.toml
```

### Multiple Authors
For multiple authors, use a string with comma separation:
```yaml
author: "Author One, Author Two"
```

Or configure in content:
```markdown
**Authors:** Author One and Author Two
```

---

## Cross-References

**Complete Field Documentation:**
- [QUICK-REFERENCE.md](/QUICK-REFERENCE.md) - Full frontmatter reference

**Related Guides:**
- `/episodes/frontmatter-example/` - Episode frontmatter reference
- `/featured/frontmatter-example/` - Featured appearance frontmatter reference

**Theme Documentation:**
- `/docs/content-guide/` - Content creation guide
- `/docs/customization/` - Theme customization guide
- `/docs/getting-started/` - Getting started with Tokyo-Nord

---

## Tips & Best Practices

### Content
1. **Write compelling titles:** Clear, descriptive, SEO-friendly
2. **Use descriptive slugs:** Short, lowercase, hyphen-separated
3. **Optimize descriptions:** 150-160 characters, include keywords
4. **Tag consistently:** Use existing tags when possible
5. **Categorize appropriately:** 1-3 broad categories per post

### Images
1. **Always include featuredImage:** Required for social sharing
2. **Optimize image sizes:** Balance quality and file size
3. **Use descriptive filenames:** `hugo-tutorial.jpg` not `image-1.jpg`
4. **Test overlay effects:** Preview both list and single pages
5. **Consider mobile:** Ensure text is readable on small screens

### SEO
1. **Unique descriptions:** Never duplicate across posts
2. **Strategic keywords:** Natural placement in description and tags
3. **Update lastmod:** When making significant changes
4. **Use aliases:** When changing URLs to preserve SEO
5. **Enable social sharing:** Make it easy for readers to share

### Features
1. **Enable TOC for long posts:** Improves navigation and UX
2. **Use code copy buttons:** Essential for technical posts
3. **Enable lightgallery for photos:** Better image viewing experience
4. **Test draft posts locally:** Use `hugo server -D` to preview
5. **Configure comments per post:** Enable for discussion-worthy posts

---

## Testing Your Frontmatter

After creating a blog post:

1. Run Hugo development server:
   ```bash
   hugo server -D
   ```

2. Check these pages:
   - List page: `http://localhost:1313/blog/`
   - Single page: `http://localhost:1313/blog/your-post-name/`
   - Categories: `http://localhost:1313/categories/your-category/`
   - Tags: `http://localhost:1313/tags/your-tag/`

3. Verify:
   - Title and subtitle display correctly
   - Featured image loads and overlays work
   - TOC appears and navigates properly
   - Code blocks have copy buttons
   - Share buttons appear
   - Categories and tags link correctly
   - Author attribution shows correctly

4. Test social sharing:
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Verify Open Graph images and descriptions

---

## Common Issues & Solutions

### Post Not Showing Up
- Check `draft: false` (or use `hugo server -D` to show drafts)
- Verify `date` is not in the future (or set `publishDate`)
- Ensure `date` format is valid RFC3339

### Image Not Loading
- Check path: `/images/file.jpg` (leading slash required)
- Verify file exists in `/static/images/`
- Check filename case sensitivity
- Ensure file extension is correct

### TOC Not Appearing
- Verify post has heading structure (H2, H3, etc.)
- Check `toc: true` or `toc.enable: true`
- Ensure headings use proper markdown (`##`, `###`)

### Categories/Tags Not Working
- Use arrays format: `tags: ["tag1", "tag2"]`
- Check for typos in tag/category names
- Verify hugo.toml doesn't disable taxonomies

### Overlay Not Visible
- Verify `overlayMetadata: true`
- Check you're viewing single page (not list page)
- Ensure `overlayPosition` is set
- Verify `featuredImage` is specified

---

**Last Updated:** 2025-01-15
**Theme Version:** Tokyo-Nord v1.0
**Hugo Version:** 0.122+
