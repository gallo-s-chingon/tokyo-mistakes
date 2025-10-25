---
title: "All My Links"
description: "Find me on all platforms"
hiddenFromHomePage: true
hiddenFromSearch: true
---

## My Social Links

<!-- Using configured platforms from hugo.toml -->
{{< social-link "youtube" "Subscribe to my YouTube channel" >}}

{{< social-link "twitch" "Watch me stream on Twitch" >}}

{{< social-link "reddit" >}}

<!-- Custom URL with custom icon -->
{{< social-link url="https://calendly.com/example" text="Book a Meeting" icon="far fa-calendar" >}}

<!-- Custom URL with auto-detected favicon -->
{{< social-link url="https://example.com" text="Visit My Portfolio" >}}

<!--
═══════════════════════════════════════════════════════════
SHORTCODE SYNTAX REFERENCE
═══════════════════════════════════════════════════════════

CORRECT: Use angle brackets with <
  Method 1 (Platform): social-link "youtube"
  Method 1 (Custom):   social-link "youtube" "Custom Text"
  Method 2 (URL):      social-link url="URL" text="TEXT"
  Method 2 (Icon):     social-link url="URL" text="TEXT" icon="ICON"

WRONG: These will NOT render as buttons
  - Comment syntax with /* */
  - Percent syntax with % %

Configure platforms in hugo.toml at [params.social.links]
Currently configured: reddit, twitch, youtube
-->
