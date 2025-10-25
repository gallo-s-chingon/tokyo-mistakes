---
# This is a development test version. Production will ship with bare bones placeholder.

title: "Home"
description: "A podcast about life, dating and relationship advice with a kink twist"
---

<!--<iframe src="https://open.spotify.com/embed/show/3XjoipCU3QzeIaQAAQpBdW" width="80%" height="232" frameBorder="0" allowtransparency='true' allow="encrypted-media"></iframe>-->

<!--
  Example: Using the social-link shortcode instead of image buttons

  To use the new Linktree-style social links:
  1. Configure your URLs in hugo.toml under [params.social.links]
  2. Use the shortcode as shown below:
-->

<!-- Option 1: Traditional image buttons (current)
<br>
[![TikTok](/images/btn-tiktok.png)](@gallo.s.chingon)
<br>
<br>
[![Intagram](/images/btn-ig.png)](gallo.s.chingon/)
<br>
<br>
[![Reddit](/images/btn-reddit.png)](gallo-s-chingon)

Option 2: Linktree-style buttons (uncomment to use) -->

<!-- First configure in hugo.toml:
  [params.social.links]
    tiktok = "https://www.tiktok.com/@gallo.s.chingon"
    instagram = "https://www.instagram.com/gallo.s.chingon/"
    reddit = "https://www.reddit.com/user/gallo-s-chingon/comments/?sort=top"
-->

<!-- Then use: -->
<!-- {{</* social-link "tiktok" "Follow me on TikTok" */>}} -->
<!-- {{</* social-link "instagram" "Follow me on Instagram" */>}} -->
<!-- {{</* social-link "reddit" "Join discussions on Reddit" */>}} -->

<!-- Or use custom URLs directly without configuration: -->
{{< social-link url="https://www.tiktok.com/@gallo.s.chingon" text="Follow me on TikTok" icon="fab fa-tiktok" >}}
{{< social-link url="https://www.instagram.com/gallo.s.chingon/" text="Follow me on Instagram" icon="fab fa-instagram" >}}
{{< social-link url="https://www.reddit.com/user/gallo-s-chingon/comments/?sort=top" text="Join discussions on Reddit" icon="fab fa-reddit" >}}
