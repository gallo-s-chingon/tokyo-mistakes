---
title: "{{ replace .Name "-" " " | title }}"
subtitle: ""
created: "{{ .Date.Format "2006-01-02_15:04:05-0700" }}"
updated: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false

# Author
author: "{{ site.Params.author.name }}"
authorLink: "{{ site.Params.author.link }}"

# Content
description: ""
keywords: []
categories: []
tags: []

# Featured media
featuredImage: ""
featuredImagePreview: ""

# Display options
overlayMetadata: false  # Set to true to show metadata overlay on featured image
overlayPosition: "lower-left"  # Options: "top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "lower-left", "lower-center", "lower-right"

toc:
  enable: true
  auto: true
  keepStatic: false

code:
  copy: true
  maxShownLines: 50

# Features
lightgallery: true
linkToMarkdown: true
rssFullText: false

# Visibility
hiddenFromHomePage: false
hiddenFromSearch: false

# Social
share:
  enable: true

# Comments
comment:
  enable: true

# SEO
seo:
  images: []
---

Write your blog post here...

<!--more-->

## Section 1

Content...

## Section 2

Content...
