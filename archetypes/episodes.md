---
title: "{{ replace .Name "-" " " | title }}"
created: "{{ .Date.Format "2006-01-02_15:04:05-0700" }}"
updated: ""
draft: false

# Episode details
episodeNumber:
season:
episodeType: "full"  # full, trailer, bonus

# Podcast info (overrides site config if specified)
podcast: ""  # Leave empty to use site.Params.podcast.name
host: ""  # Leave empty to use site.Params.podcast.hostName
guests: []  # Episode guests - ["Guest Name"]

# Media
featuredImage: ""  # /images/filename.jpg
audioUrl: ""
duration: ""  # e.g., "1:23:45"

# Podcast players
embedPlayers:
  # - type: "spotify"
  #   id: "episode-id-here"
  # - type: "youtube"
  #   id: "video-id-here"
  # - type: "apple"
  #   podcastId: "podcast-id"
  #   episodeId: "episode-id"

# Content
tags: []  # Topics - ["technology", "interviews", "startups"]
summary: ""  # Short description for cards and previews
description: ""  # Full description for SEO

# Display options
overlayMetadata: false  # Set to true to show metadata overlay on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
toc: true
lightgallery: false
---

## Show Notes

Add your show notes here...

## Timestamps

- 00:00 - Intro
- 05:30 - Main topic
- 45:00 - Q&A

## Guest Links

- [Guest Name](https://example.com)

## Resources Mentioned

- [Resource 1](https://example.com)

## Transcript

Add transcript here if available...
