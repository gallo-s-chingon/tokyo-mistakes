---
title: "Social Links Test Page"
description: "Testing the social-link shortcode implementation"
date: 2025-10-25
hiddenFromHomePage: true
hiddenFromSearch: true
draft: true
---

# Social Links Shortcode Test

This page tests all functionality of the social-link shortcode.

## Test 1: Custom URLs (No Configuration)

These should work without any hugo.toml configuration:

{{< social-link url="https://github.com/username" text="GitHub Profile" >}}

{{< social-link url="https://instagram.com/username" text="Follow on Instagram" >}}

{{< social-link url="https://twitter.com/username" text="Follow on Twitter" >}}

## Test 2: Custom Icons

{{< social-link url="https://example.com" text="My Website" icon="fas fa-globe" >}}

{{< social-link url="https://portfolio.example.com" text="View Portfolio" icon="fas fa-briefcase" >}}

{{< social-link url="mailto:hello@example.com" text="Email Me" icon="fas fa-envelope" >}}

{{< social-link url="tel:+1234567890" text="Call Me" icon="fas fa-phone" >}}

## Test 3: Favicon Fallback

These should use favicons from the respective sites:

{{< social-link url="https://example.com" text="Example Site" >}}

{{< social-link url="https://google.com" text="Google" >}}

## Test 4: Platform-Specific Hover Colors

Hover over these to see brand colors:

{{< social-link url="https://instagram.com/user" text="Instagram" icon="fab fa-instagram" >}}

{{< social-link url="https://youtube.com/channel" text="YouTube" icon="fab fa-youtube" >}}

{{< social-link url="https://linkedin.com/in/user" text="LinkedIn" icon="fab fa-linkedin" >}}

{{< social-link url="https://tiktok.com/@user" text="TikTok" icon="fab fa-tiktok" >}}

{{< social-link url="https://discord.gg/invite" text="Discord" icon="fab fa-discord" >}}

{{< social-link url="https://twitch.tv/user" text="Twitch" icon="fab fa-twitch" >}}

{{< social-link url="https://spotify.com/user" text="Spotify" icon="fab fa-spotify" >}}

{{< social-link url="https://reddit.com/u/user" text="Reddit" icon="fab fa-reddit" >}}

## Test 5: Various Icon Types

{{< social-link url="https://calendly.com/user" text="Book a Meeting" icon="far fa-calendar" >}}

{{< social-link url="https://buymeacoffee.com/user" text="Buy Me a Coffee" icon="fas fa-mug-hot" >}}

{{< social-link url="https://patreon.com/user" text="Support on Patreon" icon="fab fa-patreon" >}}

{{< social-link url="https://ko-fi.com/user" text="Ko-fi" icon="fas fa-mug-hot" >}}

## Test 6: Long Text

{{< social-link url="https://example.com" text="This is a very long link text that should be truncated properly on mobile devices" icon="fas fa-link" >}}

## Test 7: Multiple Links in Sequence

{{< social-link url="https://link1.com" text="Link 1" icon="fas fa-link" >}}
{{< social-link url="https://link2.com" text="Link 2" icon="fas fa-link" >}}
{{< social-link url="https://link3.com" text="Link 3" icon="fas fa-link" >}}
{{< social-link url="https://link4.com" text="Link 4" icon="fas fa-link" >}}
{{< social-link url="https://link5.com" text="Link 5" icon="fas fa-link" >}}

---

## Notes

- All links should open in a new tab
- Hover effects should show brand colors where applicable
- Icons should be visible and properly sized
- Layout should be responsive on mobile
- Should work in both light and dark themes
