# GitHub Pages Deploy — buildwithmei.com

This package is verified-building source for the `Mei-Innovations/buildwithmei` repo.

## Push steps
1. Replace repo contents with this folder (keep `.git` if working in a clone; don't overwrite it).
2. Commit and push to `main`.
3. `.github/workflows/deploy.yml` runs automatically: installs deps, `npm run build`, publishes `/out` to GitHub Pages.
4. DNS/CNAME (GoDaddy apex A-records + `public/CNAME` = buildwithmei.com) is already correct — no DNS changes needed for this batch.

## What changed since the last approved build
- Hero: real business-image visual (was a boxed data-flow diagram), visible on mobile now too
- New `/how-it-works` section: the original diagram, reframed as Discover → Connect → Automate → Improve
- Homepage reorder: Intelligence Engine moved up, right after Business Outcomes
- Lighter image overlays across Business Outcomes / Industries / Markets / Work cards
- Consolidated 3 near-duplicate grey text shades into one brighter, consistent body color
- Fixed uneven 5-card grid on /work (Capabilities section)
- About page journey copy rewritten per approved wording; fixed a literal escape-character bug
- Contact page: added "Build the future with MEI" careers teaser (Careers still not in main nav)
- Services page: added one representative image per pricing tier (Launch/Automate/Transform)

## Known limitation
Images are still Unsplash hotlinks — this sandbox can't download binaries to serve locally from `/public/images`. Drop licensed photography in and I'll rewire paths in one pass.
