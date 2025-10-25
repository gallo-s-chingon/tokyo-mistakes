# Dependency Libraries Version

Tokyo-Nord theme uses the following third-party libraries:

| Dependency Library                                                                      | Directory         | Version | Purpose |
|:----------------------------------------------------------------------------------------|:------------------|--------:|:--------|
| [Animate.css](https://github.com/daneden/animate.css)                                   | animate           |   4.1.1 | CSS animations |
| [Autocomplete](https://github.com/algolia/autocomplete)                                 | autocomplete      |  0.38.1 | Search autocomplete UI |
| [clipboard.js](https://github.com/zenorocha/clipboard.js)                               | clipboard         |  2.0.11 | Code block copy functionality |
| [Cookie Consent](https://github.com/osano/cookieconsent)                                | cookieconsent     |   3.1.1 | Cookie consent banner |
| [Font Awesome Free](https://github.com/FortAwesome/Font-Awesome)                        | fontawesome-free  |   6.7.2 | Icon library |
| [lazysizes](https://github.com/aFarkas/lazysizes)                                       | lazysizes         |   5.3.2 | Lazy loading images |
| [lightGallery](https://github.com/sachinchoolur/lightgallery)                           | lightgallery      |   2.5.0 | Image gallery/lightbox |
| [Lunr.js](https://github.com/olivernn/lunr.js)                                          | lunr              |   2.3.9 | Client-side search engine |
| [Mermaid](https://github.com/mermaid-js/mermaid)                                        | mermaid           |  11.5.0 | Diagram rendering (Hugo built-in used) |
| [modern-normalize](https://github.com/sindresorhus/modern-normalize)                    | modern-normalize  |   3.0.1 | CSS normalization |
| [object-fit-images](https://github.com/fregante/object-fit-images)                      | object-fit-images |   3.2.4 | object-fit polyfill |
| [Simple Icons](https://github.com/simple-icons/simple-icons)                            | simple-icons      | 15.14.0 | Brand icons |
| [Twemoji](https://github.com/twitter/twemoji)                                           | twemoji           |  14.0.2 | Emoji rendering |
| [Waline](https://github.com/walinejs/waline)                                            | waline            |   2.6.1 | Comment system |

## Removed Libraries (Breaking Changes)

The following libraries have been removed from Tokyo-Nord to focus on podcast functionality:

- **Algolia Search** - Removed in favor of Lunr.js only
- **APlayer / MetingJS** - Music players conflict with podcast players
- **ECharts** - Data visualization not needed for podcast sites
- **Gitalk** - Outdated comment system
- **KaTeX** - Use Hugo's built-in math rendering instead
- **Mapbox GL** - Maps not relevant for podcast content
- **sharer.js** - Replaced with custom content-type aware sharing
- **TypeIt** - Animation conflicts with hero card design
- **Valine** - Chinese comment system removed

## Migration Notes

If you were using any of the removed libraries:

1. **Math rendering**: Switch to Hugo's built-in passthrough extension
2. **Comments**: Migrate to Giscus, Utterances, or Waline
3. **Social sharing**: Use the new podcast-aware sharing system
4. **Search**: Algolia config removed, use Lunr.js only
