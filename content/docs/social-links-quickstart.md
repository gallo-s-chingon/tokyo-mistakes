---
title: "Social Links Quick Start"
description: "Get started with social-link shortcode in 5 minutes"
date: 2025-10-25
hiddenFromHomePage: true
---

# Social Links Quick Start

Get your Linktree-style links page running in 5 minutes!

## Step 1: Choose Your Method

### Option A: Quick & Easy (No Configuration)

Just use custom URLs directly:

```markdown
{{</* social-link url="https://instagram.com/username" text="Follow on Instagram" */>}}
{{</* social-link url="https://github.com/username" text="GitHub Profile" */>}}
{{</* social-link url="mailto:hello@example.com" text="Email Me" */>}}
```

### Option B: Cleaner (With Configuration)

1. Add to `hugo.toml`:

```toml
[params.social.links]
  instagram = "https://instagram.com/username"
  github = "https://github.com/username"
  email = "mailto:hello@example.com"
```

2. Use in content:

```markdown
{{</* social-link "instagram" */>}}
{{</* social-link "github" */>}}
{{</* social-link "email" */>}}
```

## Step 2: Create Your Links Page

Create or edit `content/links.md`:

```markdown
---
title: "All My Links"
hiddenFromHomePage: true
---

# Find Me Online

{{</* social-link "instagram" "Follow me on Instagram" */>}}
{{</* social-link "tiktok" "Watch my TikToks" */>}}
{{</* social-link "youtube" "Subscribe on YouTube" */>}}
{{</* social-link url="https://buymeacoffee.com/user" text="Buy Me a Coffee" */>}}
```

## Step 3: Test It

1. Run Hugo:
   ```bash
   hugo server
   ```

2. Visit: `http://localhost:1313/links`

3. Check both light and dark themes!

## That's It!

You now have a beautiful Linktree-style links page.

## Want More?

### Add Custom Icons

```markdown
{{</* social-link url="https://calendly.com/user" text="Book a Meeting" icon="far fa-calendar" */>}}
{{</* social-link url="https://example.com" text="My Portfolio" icon="fas fa-briefcase" */>}}
```

Find icons at: https://fontawesome.com/search?o=r&m=free

### Customize Colors

Add to `assets/css/_custom.scss`:

```scss
.social-link-button {
  border-radius: 20px;  // More rounded
  padding: 1.5rem 2rem; // Bigger buttons
}
```

### Add to Homepage

Edit `content/_index.md`:

```markdown
# Welcome

{{</* social-link "instagram" */>}}
{{</* social-link "youtube" */>}}
```

## Common Platforms

Auto-icon detection works for:

- **Social**: instagram, twitter, x, facebook, tiktok, snapchat
- **Professional**: github, linkedin, stackoverflow
- **Content**: youtube, medium, dev
- **Streaming**: twitch, discord
- **Music**: spotify, soundcloud, podcast
- **Support**: patreon, buymeacoffee, kofi

## Need Help?

- **Full Guide**: `/docs/social-links-guide`
- **Quick Reference**: `/SOCIAL-LINKS-REFERENCE.md`
- **Examples**: `/content/links.md`

## Pro Tips

1. **Order matters** - Put your most important links first
2. **Keep text short** - Under 40 characters looks best
3. **Test on mobile** - Most users will view on phones
4. **Use both themes** - Test light and dark modes
5. **Hide from navigation** - Use `hiddenFromHomePage: true`

## Troubleshooting

**Icons not showing?**
- Check Font Awesome is loaded (it should be by default)
- Use correct icon format: `"fas fa-globe"` not `"fa-globe"`

**Link not working?**
- Check URL is correct in hugo.toml
- Platform name must be lowercase
- Verify shortcode syntax (no spaces around `=`)

**Need different styling?**
- Edit `/assets/css/_custom.scss`
- See full guide for CSS classes

Happy linking! 🎉
