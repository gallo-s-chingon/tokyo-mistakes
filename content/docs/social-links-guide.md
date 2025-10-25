---
title: "Social Links Guide"
description: "Complete guide to using the social-link shortcode for Linktree-style link pages"
date: 2025-10-25
hiddenFromHomePage: true
---

# Social Links Shortcode Guide

The `social-link` shortcode allows you to create beautiful Linktree-style social media buttons with automatic icon detection, custom styling, and theme support.

## Quick Start

### Method 1: Using Preconfigured Links

1. **Configure your links in `hugo.toml`:**

```toml
[params.social.links]
  instagram = "https://instagram.com/username"
  github = "https://github.com/username"
  youtube = "https://youtube.com/c/channel"
```

2. **Use in your content:**

```markdown
{{</* social-link "instagram" */>}}
{{</* social-link "github" "Check out my code" */>}}
{{</* social-link "youtube" */>}}
```

### Method 2: Custom URLs (No Configuration Required)

Use any URL directly:

```markdown
{{</* social-link url="https://example.com" text="My Website" */>}}
{{</* social-link url="https://buymeacoffee.com/user" text="Buy Me a Coffee" */>}}
```

### Method 3: Custom URLs with Custom Icons

Specify Font Awesome icons:

```markdown
{{</* social-link url="https://yourportfolio.com" text="View Portfolio" icon="fas fa-briefcase" */>}}
{{</* social-link url="mailto:you@email.com" text="Email Me" icon="fas fa-envelope" */>}}
{{</* social-link url="https://calendly.com/username" text="Book a Meeting" icon="far fa-calendar" */>}}
```

## Features

- **Auto-detected Icons**: Automatically uses Font Awesome brand icons for 50+ popular platforms
- **Custom Icons**: Support for any Font Awesome icon (solid, regular, brands)
- **Favicon Fallback**: Uses site favicon when no icon is specified
- **Responsive Design**: Looks great on all screen sizes
- **Theme Support**: Automatically adapts to light/dark theme
- **Platform-Specific Colors**: Hover effects with authentic brand colors
- **Full-Width Design**: Linktree-style full-width buttons with rounded edges
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Supported Platforms

Icons are auto-detected for these platforms (and many more):

### Social Media
- Instagram, Twitter/X, Facebook, TikTok, Snapchat
- Pinterest, Reddit, Tumblr, Mastodon

### Professional
- LinkedIn, GitHub, GitLab, Bitbucket, Stack Overflow

### Content
- YouTube, Medium, DEV, Blogger, WordPress

### Creative
- Dribbble, Behance, CodePen, DeviantArt

### Streaming & Gaming
- Twitch, Discord, Steam, PlayStation, Xbox

### Music & Audio
- Spotify, SoundCloud, Bandcamp, Apple Music

### Support
- Patreon, Ko-fi, Buy Me a Coffee, PayPal

### Other
- Email (mailto:), Website, Blog, Podcast, Calendly

See the [full list in the shortcode](../layouts/shortcodes/social-link.html) or browse [Font Awesome icons](https://fontawesome.com/search?o=r&m=free).

## Parameters

### Positional Parameters
- `[0]` - Platform name (e.g., "instagram", "github")
- `[1]` - Custom display text (optional)

### Named Parameters
- `platform` - Platform name from hugo.toml configuration
- `url` - Custom URL (alternative to platform)
- `text` - Display text for the button
- `icon` - Custom Font Awesome icon class (e.g., "fas fa-globe")

## Examples

### Basic Usage with Default Text

```markdown
{{</* social-link "instagram" */>}}
```
Output: "Follow me on Instagram" (default text)

### Custom Text

```markdown
{{</* social-link "github" "View my open source projects" */>}}
```

### Named Parameters

```markdown
{{</* social-link platform="youtube" text="Subscribe to my channel" */>}}
```

### Custom URL with Auto-detected Favicon

```markdown
{{</* social-link url="https://example.com" text="Visit Example" */>}}
```
The shortcode will automatically fetch the favicon from example.com

### Custom URL with Custom Icon

```markdown
{{</* social-link url="https://yoursite.com" text="My Portfolio" icon="fas fa-briefcase" */>}}
{{</* social-link url="tel:+1234567890" text="Call Me" icon="fas fa-phone" */>}}
{{</* social-link url="sms:+1234567890" text="Text Me" icon="fas fa-sms" */>}}
```

### Email Link

```markdown
{{</* social-link url="mailto:hello@example.com" text="Get in Touch" icon="fas fa-envelope" */>}}
```

### Multiple Links Page

Create a dedicated links page (`content/links.md`):

```markdown
---
title: "All My Links"
hiddenFromHomePage: true
---

# Find Me Online

{{</* social-link "instagram" "Follow on Instagram" */>}}
{{</* social-link "tiktok" "Watch my TikToks" */>}}
{{</* social-link "youtube" "Subscribe on YouTube" */>}}
{{</* social-link "podcast" "Listen to my podcast" */>}}
{{</* social-link url="https://buymeacoffee.com/user" text="Buy Me a Coffee" */>}}
{{</* social-link url="mailto:hello@example.com" text="Email Me" */>}}
```

## Configuration Reference

Add to your `hugo.toml`:

```toml
[params.social.links]
  # Social Media
  instagram = "https://instagram.com/username"
  twitter = "https://twitter.com/username"
  x = "https://x.com/username"
  tiktok = "https://tiktok.com/@username"
  facebook = "https://facebook.com/username"

  # Professional
  github = "https://github.com/username"
  linkedin = "https://linkedin.com/in/username"

  # Content
  youtube = "https://youtube.com/c/channel"
  medium = "https://medium.com/@username"
  dev = "https://dev.to/username"

  # Streaming
  twitch = "https://twitch.tv/username"
  discord = "https://discord.gg/invite"

  # Music
  spotify = "https://open.spotify.com/user/username"

  # Support
  patreon = "https://patreon.com/username"
  buymeacoffee = "https://buymeacoffee.com/username"
  kofi = "https://ko-fi.com/username"

  # Contact
  email = "mailto:your@email.com"
  website = "https://yourwebsite.com"
```

## Styling & Customization

The shortcode uses these CSS classes that you can customize:

- `.social-link-container` - Outer wrapper
- `.social-link-button` - Main button element
- `.social-link-content` - Content wrapper (icon + text)
- `.social-link-icon` - Icon element
- `.social-link-favicon` - Favicon image
- `.social-link-text` - Text element
- `.social-link-arrow` - External link arrow

To customize, add styles to your `assets/css/_custom.scss`:

```scss
.social-link-button {
  // Your custom styles
  border-radius: 20px; // More rounded
  padding: 1.5rem 2rem; // Larger buttons
}
```

## Platform-Specific Hover Colors

The shortcode includes authentic brand colors on hover for popular platforms:

- Instagram: Gradient
- Twitter/X: Blue
- GitHub: Black/White (theme-aware)
- YouTube: Red
- LinkedIn: Blue
- TikTok: Pink
- Discord: Blurple
- Twitch: Purple
- Spotify: Green
- And many more...

## Accessibility

All links include:
- Proper semantic HTML
- `target="_blank"` for external links
- `rel="noopener noreferrer"` for security
- Alt text for images
- High contrast support

## Print Styles

When printing pages with social links, the shortcode:
- Displays the full URL after the link text
- Removes shadows and decorative elements
- Ensures proper page breaks

## Tips & Best Practices

1. **Order Matters**: Place your most important links first
2. **Text Length**: Keep text concise (under 40 characters) for best appearance
3. **Icons**: Let the shortcode auto-detect icons when possible
4. **Consistency**: Use either all preconfigured or all custom URLs for a cleaner config
5. **Testing**: Test in both light and dark themes
6. **Mobile**: Check on mobile devices - the design is responsive but test your specific use case

## Troubleshooting

### Link not working
- Verify the URL is correct in hugo.toml
- Check that you're using the correct platform name (lowercase)
- Ensure the shortcode syntax is correct (no spaces around `=` in named params)

### Icon not showing
- Verify Font Awesome is loaded on your site
- Check the icon class is correct (e.g., "fab fa-github" not "fa-github")
- Ensure the icon exists in Font Awesome Free

### Styling looks wrong
- Clear your browser cache
- Rebuild your Hugo site
- Check for CSS conflicts in browser dev tools

## Examples in the Wild

See real examples:
- `/links` - Comprehensive links page (hidden from navigation)
- `/_index.md` - Homepage integration examples

## Font Awesome Icons

Find icons at: https://fontawesome.com/search?o=r&m=free

Common icon prefixes:
- `fab` - Brands (Instagram, GitHub, etc.)
- `fas` - Solid icons
- `far` - Regular icons

Example:
```markdown
{{</* social-link url="..." text="..." icon="fas fa-globe" */>}}
{{</* social-link url="..." text="..." icon="fab fa-discord" */>}}
```

## Related Documentation

- Hugo Shortcodes: https://gohugo.io/content-management/shortcodes/
- Font Awesome: https://fontawesome.com/
- Tokyo-Nord Theme: See theme documentation
