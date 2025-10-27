# Sample Content Quick Start Guide

This guide helps you quickly understand and use the sample documentation content created for the Tokyo-Nord theme.

## What Was Created

✅ **5 Episode Documentation Posts** - Comprehensive guides for podcast episodes
✅ **5 Featured Appearance Posts** - Examples of different appearance types
✅ **10 License-Free Images** - CC0 images from Pexels/Unsplash
✅ **Complete Documentation** - READMEs and reference guides

**Total:** ~25,000 words of documentation examples

---

## Quick Navigation

### Episodes (`/content/episodes/`)

1. **[overlay-features-demo.md](/content/episodes/overlay-features-demo.md)**
   - 📋 Overlay system complete guide
   - 🎨 Metadata overlays, color filters, transparency
   - ⏱️ 45 min read

2. **[player-embeds-demo.md](/content/episodes/player-embeds-demo.md)**
   - 🎵 Embedding players from all major platforms
   - 🔗 Spotify, YouTube, Apple Podcasts, and more
   - ⏱️ 52 min read

3. **[metadata-customization-demo.md](/content/episodes/metadata-customization-demo.md)**
   - ⚙️ Complete metadata field reference
   - 📝 Required vs optional fields
   - ⏱️ 1 hr 15 min read

4. **[episode-types-demo.md](/content/episodes/episode-types-demo.md)**
   - 🎭 Full, bonus, trailer, interview, solo types
   - 📊 When to use each type
   - ⏱️ 28 min read (bonus episode!)

5. **[frontmatter-options-demo.md](/content/episodes/frontmatter-options-demo.md)**
   - 📚 Every frontmatter option documented
   - 💡 Complete template example
   - ⏱️ 42 min read

### Featured Appearances (`/content/featured/`)

1. **[podcast-appearance-demo.md](/content/featured/podcast-appearance-demo.md)**
   - 🎙️ **Type:** Podcast
   - Example guest appearance on Tech Talk Weekly

2. **[interview-dev-magazine-demo.md](/content/featured/interview-dev-magazine-demo.md)**
   - ✍️ **Type:** Interview
   - Written Q&A with Dev Magazine

3. **[conference-devcon-demo.md](/content/featured/conference-devcon-demo.md)**
   - 🎤 **Type:** Conference
   - Technical presentation at DevCon 2025

4. **[video-collab-demo.md](/content/featured/video-collab-demo.md)**
   - 📹 **Type:** Video
   - YouTube live coding collaboration

5. **[panel-discussion-demo.md](/content/featured/panel-discussion-demo.md)**
   - 👥 **Type:** Panel
   - Web Summit 2025 panel discussion

---

## Preview the Content

### Option 1: Hugo Server (Recommended)

```bash
cd /Users/schingon/repos/tokyo-dev
hugo server -D

# Visit in browser:
# http://localhost:1313/episodes/
# http://localhost:1313/featured/
```

### Option 2: Build and Deploy

```bash
hugo
# Files generated in /public/
```

### Option 3: Read Markdown Directly

All files are readable as plain markdown with detailed explanations.

---

## Using These Examples

### As Templates

**Copy and customize for your own content:**

```bash
# Copy an episode template
cp content/episodes/overlay-features-demo.md content/episodes/my-episode-1.md

# Edit the frontmatter and content
# Update: title, episodeNumber, featuredImage, etc.
```

### As Reference

**Look up specific features:**

- **Need overlay examples?** → See `overlay-features-demo.md`
- **Embedding players?** → See `player-embeds-demo.md`
- **Frontmatter syntax?** → See `frontmatter-options-demo.md`
- **Episode types?** → See `episode-types-demo.md`
- **Appearance types?** → See any featured post

### As Learning Material

**Study how features work:**

1. Read the documentation post
2. View the source markdown
3. See how frontmatter is configured
4. Preview the rendered result
5. Experiment with changes

---

## Key Features Demonstrated

### Overlay System
```yaml
# Featured in: overlay-features-demo.md
overlayMetadata: true
overlayPosition: "lower-left"
overlay_filter: 0.5
transparency: true
transparencyAmount: 0.85
```

### Player Embeds
```yaml
# Featured in: player-embeds-demo.md
embedPlayers:
  - type: "spotify"
    id: "episode-id"
  - type: "youtube"
    id: "video-id"
```

### Episode Types
```yaml
# Featured in: episode-types-demo.md
episodeType: "full"      # or bonus, trailer, interview, solo
```

### Appearance Types
```yaml
# Featured in: all featured/* posts
type: "podcast"          # or interview, video, conference, panel
podcastName: "Show Name"
hosts: ["Host Name"]
externalUrl: "https://..."
```

---

## Image Usage

All sample images are in `/static/images/samples/`:

```yaml
# Use in frontmatter:
featuredImage: "/images/samples/sample-podcast-microphone.jpg"

# Attribution (optional but recommended):
imageCredit: "Photo by Photographer from Pexels (CC0)"
```

**Available Images:**
- `sample-podcast-microphone.jpg` - Microphone close-up
- `sample-podcast-studio.jpg` - Recording studio
- `sample-interview-setup.jpg` - Interview setup
- `sample-conference-stage.jpg` - Conference stage
- `sample-conference-audience.jpg` - Audience view
- `sample-tech-workspace.jpg` - Developer workspace
- `sample-video-production.jpg` - Video production
- `sample-music-podcast.jpg` - Music equipment
- `sample-tech-speaker.jpg` - Speaker presenting
- `sample-discussion-panel.jpg` - Panel discussion

All are **CC0 licensed** (free for any use, no attribution required).

---

## Customization Tips

### Replace Sample Content

**Keep for reference:**
```bash
# Rename instead of deleting
mv content/episodes/overlay-features-demo.md content/episodes/_overlay-features-demo.md.bak
```

**Or set to draft:**
```yaml
# In frontmatter
draft: true  # Won't appear in production build
```

### Create Your Own

**Use as templates:**
```bash
# Copy structure, replace content
cp content/episodes/frontmatter-options-demo.md content/episodes/my-actual-episode.md

# Update all fields:
# - title
# - created date
# - episodeNumber
# - content
```

### Mix and Match

**Combine features from different examples:**
```yaml
# From overlay-features-demo.md
overlayMetadata: true
overlay_filter: 0.4

# From player-embeds-demo.md
embedPlayers:
  - type: "spotify"
    id: "your-episode-id"

# From episode-types-demo.md
episodeType: "interview"
guests: ["Guest Name"]
```

---

## Common Tasks

### Creating a New Episode

1. Copy a template: `cp content/episodes/frontmatter-options-demo.md content/episodes/episode-42.md`
2. Update frontmatter (title, number, date, image)
3. Write your content
4. Preview: `hugo server -D`
5. Publish: Set `draft: false`

### Creating a Featured Appearance

1. Choose type: podcast, interview, video, conference, or panel
2. Copy relevant demo file as template
3. Update appearance details (podcastName, hosts, externalUrl)
4. Write your content
5. Add featured image
6. Publish

### Testing Overlay Configurations

1. Start with `overlay-features-demo.md`
2. Try different positions: `lower-left`, `mid-center`, etc.
3. Test overlay filters: `0.5`, `"rgba(255,0,0,0.3)"`, gradients
4. Preview in browser
5. Adjust until satisfied

### Adding New Images

1. Get CC0 images from Pexels or Unsplash
2. Optimize (compress to <500KB)
3. Save to `/static/images/samples/`
4. Update frontmatter: `featuredImage: "/images/samples/your-image.jpg"`
5. Add credit: `imageCredit: "Photo by Name from Source (CC0)"`

---

## Learning Path

**New to Hugo?**
1. Start with `frontmatter-options-demo.md` - Learn all available fields
2. Read `episode-types-demo.md` - Understand content organization
3. Try `overlay-features-demo.md` - Experiment with styling
4. Explore `player-embeds-demo.md` - Add media to your posts

**Building a Podcast Site?**
1. Read all episode demos to understand features
2. Copy templates for your actual episodes
3. Customize with your podcast details
4. Replace sample images with your artwork

**Creating a Personal Site?**
1. Review featured appearance examples
2. Document your guest appearances
3. Link to external content
4. Build your portfolio

---

## Troubleshooting

### Images Not Loading?
- Verify path starts with `/images/` (not `images/`)
- Check file exists in `/static/images/samples/`
- Clear browser cache

### Overlay Not Showing?
- Set `overlayMetadata: true`
- Verify `featuredImage` is set
- Check `overlayPosition` value is valid
- View single page (not list page)

### Player Not Embedding?
- Verify player ID is correct
- Check `embedPlayers` syntax in frontmatter
- Or use inline shortcode: `{{< podcast-spotify "id" >}}`

### Draft Content Visible?
- Check `draft: false` to publish
- Use `hugo server -D` to preview drafts locally
- Production builds ignore drafts by default

---

## Next Steps

1. **Read the samples** - Understand what's available
2. **Preview locally** - Run `hugo server -D` and browse
3. **Experiment** - Copy and modify examples
4. **Create your own** - Use templates for actual content
5. **Customize** - Replace images, adjust styling
6. **Publish** - Deploy your site

---

## Resources

### Documentation Files
- `SAMPLE-CONTENT-README.md` - Complete documentation of all samples
- `/static/images/samples/README.md` - Image inventory and licenses
- `/docs/content-guide/` - Theme content creation guide
- `QUICK-REFERENCE.md` - Frontmatter quick reference

### Sample Content
- `/content/episodes/*-demo.md` - Episode examples
- `/content/featured/*-demo.md` - Appearance examples
- `/static/images/samples/*.jpg` - Sample images

### External Resources
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Pexels](https://www.pexels.com) - Free CC0 images
- [Unsplash](https://unsplash.com) - Free CC0 images

---

## Questions?

- Check `SAMPLE-CONTENT-README.md` for detailed documentation
- Review individual demo files for specific features
- Open an issue in the theme repository
- Ask in Hugo Discourse forum

---

**Quick Stats:**
- 📄 10 documentation posts
- 🖼️ 10 CC0 images (1.2 MB)
- 📝 ~25,000 words
- ⏱️ ~2 hours reading time
- ✨ Every theme feature demonstrated

**Ready to explore? Start with `/content/episodes/frontmatter-options-demo.md`**

---

**Created:** 2025-10-27
**Theme:** Tokyo-Nord
**Hugo Version:** 0.122+
