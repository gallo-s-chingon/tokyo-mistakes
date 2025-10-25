---
title: "{{ replace .Name "-" " " | title }}"
created: "{{ .Date.Format "2006-01-02_15:04:05-0700" }}"
updated: ""
draft: false

# Appearance details
type: "podcast"  # podcast, interview, video, conference, talk, panel, etc. (see docs/appearance-types.md)
podcastName: ""  # Show/platform/publication name (e.g., "Joe Rogan Experience")
hosts: []  # Show host(s) - ["Joe Rogan"]
guests: []  # Other guests besides you - ["Guest Name"]

# Links
externalUrl: ""  # Link to listen/watch/read this appearance

# Media
featuredImage: ""  # /images/filename.jpg

# Content
tags: []  # Topics discussed - ["AI", "technology", "future"]
summary: ""  # Short description for cards and previews
description: ""  # Full description for SEO

# Display options
overlayMetadata: false  # Set to true to show metadata overlay on featured image
overlayPosition: "lower-left"  # top-left, top-center, top-right, mid-left, mid-center, mid-right, lower-left, lower-center, lower-right
toc: false
lightgallery: true
---

## About This Appearance

Brief description of the appearance and what was discussed...

## Topics Discussed

- Topic 1
- Topic 2
- Topic 3

## Key Takeaways

- Takeaway 1
- Takeaway 2

## Links & Resources

- [Listen/Watch]({{ .Params.externalUrl }})
