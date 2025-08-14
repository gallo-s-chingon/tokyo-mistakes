// saved as search-index.js in tokyo-mistakes/assets/js
{{ $pages := where .Site.RegularPages "Type" "in" (slice "blog" "podcast" "featured") }}
{{ $searchIndex := slice }}
{{ range $pages }}
  {{ $searchItem := dict 
    "title" .Title 
    "permalink" .Permalink 
    "summary" (.Summary | plainify | truncate 200) 
    "content" (.Content | plainify | truncate 500) 
    "date" (.Date.Format "Jan 2, 2006") 
    "tags" .Params.tags
    "section" .Section 
  }}
  {{ $searchIndex = $searchIndex | append $searchItem }}
{{ end }}

// Search index data
window.searchIndex = {{ $searchIndex | jsonify }};
