---
title: "Docker Desktop Won - And I'm Not Mad About It"
date: 2024-02-20T14:15:00-06:00
draft: false
author: "Gallo Chingon"
tags: ["docker", "macos", "development", "homelab"]
description: "Sometimes the paid solution is just better. Here's why I switched back to Docker Desktop from Colima."
featured_image: "docker/desktop-victory.png"
---

I spent months trying to make Colima work. I really did. I'm all about that open-source life, avoiding subscription fees, and having control over my tools. But sometimes, you just have to admit defeat.

Docker Desktop won, and honestly? I'm okay with it.

## The Colima Struggle Was Real

For those who don't know, [Colima](https://github.com/abiosoft/colima) is a container runtime for macOS that's supposed to replace Docker Desktop. It's free, lightweight, and doesn't require a subscription for commercial use.

On paper, it's perfect. In reality? It was death by a thousand paper cuts.

### The Issues I Faced

**Networking Nightmares**
```bash
# This should work, right?
docker run -p 8080:80 nginx

# Narrator: It did not work
curl localhost:8080
# curl: (7) Failed to connect to localhost port 8080: Connection refused
Volume Mounting Mysteries
	•	Files that existed but weren't visible in containers 	•	Permission issues that made no sense 	•	Symlinks that broke everything
Service Discovery Problems
	•	Containers couldn't talk to each other consistently 	•	⁠host.docker.internal was more like ⁠host.docker.sometimes
The Breaking Point
The final straw came when I was setting up my homelab. I had a simple docker-compose with:
	•	Traefik (reverse proxy) 	•	Homer (dashboard) 	•	Jellyseerr (media requests) 	•	Transmission (torrents)
With Colima, it was a nightmare:
	•	Services randomly couldn't reach each other 	•	Port bindings were inconsistent 	•	Load average shot to 6.17 because something was constantly crashing and restarting
The Docker Desktop Migration
I bit the bullet and paid for Docker Desktop. The migration process:
	1.	Stop Colima: ⁠colima stop 	2.	Install Docker Desktop: Download from Docker's site 	3.	Import existing containers: They just worked™️ 	4.	Update docker-compose: No changes needed 	5.	Restart everything: It. Just. Worked.
Load average dropped to 2.5. All services could talk to each other. Port bindings were reliable.
What Docker Desktop Gets Right
Network Reliability
	•	Consistent bridge networking 	•	⁠host.docker.internal actually works 	•	Port forwarding just works
Volume Performance
	•	No weird permission issues 	•	File watching works properly for development 	•	Symlinks behave correctly
Integration
	•	Works seamlessly with macOS 	•	VPN compatibility 	•	Resource management that makes sense
Developer Experience
	•	Clear error messages 	•	Useful logs 	•	GUI for troubleshooting
The Cost Reality Check
Docker Desktop Personal: Free for personal use
Docker Desktop Pro: $5/month for commercial use
Let's put this in perspective:
	•	My daily coffee: $4.50 	•	Netflix: $15.99/month 	•	Spotify: $9.99/month 	•	One less coffee per month: Docker Desktop covered
For something I use 8+ hours a day for work? It's a bargain.
Lessons Learned
1. Free Isn't Always Cheaper
The time I spent fighting Colima cost me way more than $5/month in frustration and lost productivity.
2. Maturity Matters
Docker Desktop has years of development and millions of users. Colima is promising but still rough around the edges.
3. Pick Your Battles
I could spend time contributing to Colima to fix these issues, or I could spend that time building cool stuff. I chose building.
To the Colima True Believers
I'm not saying Colima is bad. For many use cases, it works great. If you:
	•	Have simple container needs 	•	Don't need complex networking 	•	Want to avoid Docker's licensing 	•	Enjoy tinkering
Then Colima might be perfect for you.
But if you just want containers to work reliably so you can focus on your actual projects? Docker Desktop is worth every penny.
My Current Setup
	•	Docker Desktop: 4GB RAM, 4 CPUs allocated 	•	Running Services: 7 containers across 3 networks 	•	Load Average: Consistently under 3.0 	•	Networking Issues: Zero 	•	Monthly Cost: $5 (less than a single craft beer)
The Verdict
Sometimes the commercial solution wins because it's just better engineered. Docker Desktop isn't perfect, but it's reliable, well-supported, and lets me focus on building instead of troubleshooting.
And honestly? That's worth $5 a month.
Now back to building my homelab without networking headaches.
Have you made similar switches from open-source to commercial tools? What was your breaking point?