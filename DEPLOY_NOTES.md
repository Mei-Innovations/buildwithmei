# Deploy Notes — buildwithmei.com (Session 5: Color audit, dead code removal, flags fix, OG image)

**Fourth addition (same session):** repositioned the badge+tagline block on the About
page — it was sitting *above* the page label ("About MEI"), which every other page on
the site does not do. Every other page (Services, Markets, Careers, Who We Serve, Work)
follows an identical structure: label → H1 → subheading, starting immediately at the top
of the content area. About was the only page with an extra ~76px block inserted before
that label, which pushed its H1 noticeably lower than every other page's H1 — a real,
confirmed vertical-rhythm inconsistency across the site. See item -2 below.

**Third addition (same session):** replaced the small logo badge at the top of the About
page — it was rendering the exact same flat `Logo` SVG component used in the navbar
directly above it, so the two looked duplicated stacked together. Swapped in the new
glossy circular badge image you provided. See item -1 below.

**Second follow-up correction (same session):** you flagged two things after checking the
live Netlify deploy —

1. The Services page still showed the fully original heading text on both the H1 and the
   component heading below it. I confirmed the delivered source code (both this zip and
   the prior one) has the correct updated text in both places — the screenshot showed
   content that predates even the *first* fix, which points to a stale/uncached Netlify
   deployment rather than a code issue. Worth confirming the latest zip is what actually
   got uploaded and triggering a fresh deploy (clear cache if Netlify offers that option).

2. The 5-step "Discover → Design → Build → Automate → Scale" cards on `/work` had zero
   color variation — this was a **real, confirmed gap** I missed in the original full
   scan. Root cause of the miss: `WorkMethod.tsx` exports three separate components
   (`WorkMethod`, `WorkCapabilities`, `WorkVentures`), and my original scan checked color
   usage per *file*, not per *component*. Since `WorkCapabilities` and `WorkVentures` in
   that same file already use the full color system, the file as a whole looked
   "already colored" and I didn't open it to check that `WorkMethod` itself — the first
   export, the one you screenshotted — was 100% hardcoded to emerald. Fixed below, and
   I re-scanned every other multi-export file in the codebase the same way to make sure
   this isn't a repeated pattern elsewhere (it wasn't — `WhyMei.tsx` and
   `OperatingModel.tsx` were re-checked and are already correctly implemented).

Verified: `npm install && npm run build` → clean, 14/14 pages exported, zero TypeScript
errors, zero ESLint errors (9 pre-existing/expected `<img>`-vs-`next/image` warnings only,
unrelated to functionality — expected on a static export with `images.unoptimized: true`).

Every change below was confirmed directly against the compiled `out/` HTML/CSS output,
not just the source — see verification notes per item.

---

## -2. About page badge+tagline — repositioned for cross-page consistency

`app/about/page.tsx`

Moved the small logo badge + "Innovate · Integrate · Elevate" tagline from *above* the
page label to *after* the subheading paragraph, at the bottom of the hero content block.

Before: `[badge+tagline] → label → H1 → subheading` (About page only)
After: `label → H1 → subheading → [badge+tagline]` (now matches every other page's
opening structure exactly, with the badge as a closing signature rather than a leading
element)

Also reduced the badge from `w-11 h-11` to `w-9 h-9` — appropriate as a small closing
flourish rather than a primary header element competing with the H1 for attention.

**Verified in compiled output**: confirmed actual visible DOM order in
`out/about/index.html` — H1 renders, then the subheading paragraph, then the badge+tagline
block, then the Journey section. (Note: a `mei-about-badge.png` reference also appears
very early in the raw HTML — that's an automatic Next.js `<link rel="preload">` tag in
`<head>` for the eager-loaded image, a performance optimization, not the actual visible
placement. Confirmed by inspecting the real `<img>` tag's position in the body.)

---

## -1. About page badge — replaced duplicate logo with new glossy badge

`app/about/page.tsx`, `public/mei-about-badge.png` (new asset)

The small logo badge at the top of the About page (next to "Innovate · Integrate ·
Elevate") was rendering the identical flat `Logo` SVG component used in the navbar
immediately above it — same icon, twice, stacked close together, reading as a mistake
rather than a design choice.

Replaced with the new glossy circular badge image supplied — processed before adding to
the project:
- Cropped to a true circle with transparent background (source image had a dark square
  canvas that didn't exactly match the site's `#0B1020` background — would have shown a
  faint square edge; circular crop with alpha transparency blends cleanly regardless of
  background)
- Resized from the original 1254×1254 (1.45MB) down to 240×240 (~66KB) — sized to stay
  crisp at up to 3x pixel density for an ~40-48px display badge, without shipping a
  needlessly heavy file
- Saved as `public/mei-about-badge.png`, referenced via plain `<img>` (consistent with
  every other image on the site, all unoptimized static-export images)

Removed the now-unused `Logo` import from `app/about/page.tsx`.

**Verified in compiled output**: navbar logo still present exactly once (unaffected —
`components/Navbar.tsx` was not touched), and the new badge image confirmed physically
present in `out/mei-about-badge.png` and correctly referenced in `out/about/index.html`.

---

## 0. WorkMethod 5-step cards — color system added

`components/WorkMethod.tsx` (the `WorkMethod` export specifically, used on `/work`)

The Discover → Design → Build → Automate → Scale process cards were emerald-only with no
`accent` field at all. Added the 4-color system to match every other card grid on the
site:

- Discover = Teal (`#1FB5C9`)
- Design = Gold (`#D4A574`)
- Build = Emerald (`#4D8B72`)
- Automate = Teal (`#1FB5C9`) — reused, since there are 5 steps and only 4 brand colors;
  not adjacent to the other Teal card so it doesn't read as a mistake
- Scale = Coral (`#E8745B`)

Applied consistently with the pattern used elsewhere: icon color, icon background tint,
icon border, top border strip, step-number color. The connecting arrows between cards
were changed from a fixed emerald tint to a neutral white/20 — since each card now has
its own distinct color, a single-color arrow between them would look arbitrary; neutral
reads cleaner as a connector.

**Verified in compiled output** (`out/work/index.html`): all 4 accent hex values present.

---

## 1. Services page heading — repositioned (corrected)

`app/services/page.tsx`, `components/Services.tsx`

This page has **two headings** — the page's own H1 (top of page) and the `Services`
component's internal H2 (further down, above the tier cards). The approved line now
lives on the **H1**, since that's the actual first heading a visitor reads:

- Page H1 label: "Our Services" → **"Our Approach"**
- Page H1: "Everything you need. Nothing you don't." → **"The right technology. At the
  right stage."**
- Page intro paragraph tightened to match.
- Metadata description updated to lead with the same positioning.

The `Services` component's H2 (further down) was **also** changed in the first pass to
this same line, which — now that the H1 owns it — would have shown the identical
headline twice on one page. Gave it a distinct, complementary heading instead:
- Component label: "Three Starting Points"
- Component H2: **"Every project builds on the same foundation."**
- Component subheading reframed around Launch/Automate/Transform staying compatible as
  a business grows.

**Verified in compiled output** (`out/services/index.html`): H1 contains the new text,
zero occurrences of the old "Everything you need" phrase, and "The right technology"
appears in the H1 + meta tags only (not duplicated as a second visible heading).

---

## 2. Flag rendering fixed — emoji replaced with `flag-icons` SVGs

`components/Markets.tsx`, `app/globals.css`, `package.json`

**Root cause (confirmed, not guessed):** flags were Unicode emoji (`🇺🇸`, `🇬🇧`, etc.).
Windows' Segoe UI Emoji font does not reliably render flag emoji as flags — this is a
platform/OS font limitation, not a bug in the code. iOS/Android render them fine, which
is why you saw flags on mobile but not desktop.

**Fix:** installed `flag-icons` (self-hosted SVG flag library), imported its CSS in
`globals.css`, and swapped both render locations (`Markets` grid + homepage
`MarketsPreview` strip) from raw emoji text to `<span className="fi fi-{code}">`.

Verified in the actual build output:
- All 6 flags (`us`, `gb`, `eu`, `ae`, `ca`, `sa`) compile to real SVG assets in
  `out/_next/static/media/`, correctly hashed and self-hosted — zero dependency on the
  visitor's OS/browser emoji font from here on.
- Zero emoji characters remain anywhere in `Markets.tsx`.

---

## 3. Homepage case-study cards — color inconsistency fixed

`components/SelectedWork.tsx`

Found during the requested color audit: the homepage's QARM/H&A preview cards were
emerald-only, while the *same two projects* on `/work` (`CaseStudies.tsx`) use
**QARM = Teal (`#1FB5C9`), H&A = Coral (`#E8745B`)**. Homepage and `/work` were showing
different colors for identical projects.

Fixed `SelectedWork.tsx` to use the same per-project accent (top border strip, tag
background, position-line color) — now consistent with `/work` in both places.

---

## 4. Four dead components removed

Deleted: `BusinessOutcomes.tsx`, `TransformationStories.tsx`, `Infrastructure.tsx`,
`TrustBar.tsx`

Confirmed via full-codebase grep — **zero imports, zero references** anywhere in `app/`
or `components/`. These were leftover from earlier sessions and never rendered on any
live page. Two of them (`BusinessOutcomes`, `TransformationStories`) were also
emerald-only and would have shown up as false positives in any future color audit —
removing them keeps the codebase honest about what's actually live.

---

## 5. How It Works — 4-stage process grid, colors added

`app/how-it-works/page.tsx`

The Discover → Connect → Automate → Improve grid was emerald-only. Added the 4-color
system, consistent with how the same accent set is used everywhere else (icon color +
top border strip):

- Discover = Teal (`#1FB5C9`)
- Connect = Emerald (`#4D8B72`)
- Automate = Gold (`#D4A574`)
- Improve = Coral (`#E8745B`)

---

## 6. Positioning copy softened

`app/how-it-works/page.tsx` (OpenGraph description)

"A proven process refined since 2014" → **"shaped by a digital journey since 2014"** —
brings it in line with the approved "digital journey since 2014" framing used everywhere
else on the site, rather than implying an unbroken operational process running since 2014.

---

## 7. Insights cards — dead links removed, read-time removed

`components/InsightsPreview.tsx`

Found during your mobile screenshot: all three homepage Insights cards linked to
`/insights`, which **does not exist as a route** anywhere in the app — confirmed via
`find app -name insights` (nothing) and a full grep for `/insights` (only these three
dead links existed, nothing else in nav/footer points there). Every card was a guaranteed
404 on click.

Fixed:
- Removed `Link` wrapper and `href` — cards are now non-navigational `<div>`s.
- Removed the `read` field ("6 min read" etc.) per your request.
- **Kept** the colored hover-border and arrow-slide effect intentionally, per your
  direction — it's now a visual-interest hover only, not a click affordance, since the
  card itself no longer navigates anywhere.

Verified in build output: zero `href="/insights"` occurrences, zero "min read" text
remaining anywhere in the compiled homepage HTML.

---

## 8. OG image replaced — logo only

`public/og-image.png`

Old OG image (full marketing card with headline text, service icons, footer strip)
replaced with a clean, logo-only image: the real MEI cube mark (exact path geometry from
`Logo.tsx`, not redrawn) centered on the brand dark background (`#0B1020`) with a subtle
radial emerald glow, sized correctly at 1200×630 for OpenGraph/Twitter card standards.

---

## Explicitly NOT touched this session (by design)

- **3D Intelligence Engine cube** — extensively previewed and iterated on in chat
  (rotating solid, open-frame wireframe, parallax depth) but intentionally **not**
  implemented as real component code yet. We converged on "faithful logo geometry +
  restrained depth" as the likely direction but hadn't finalized speed/tilt — this is
  parked for a dedicated follow-up session so it gets proper attention rather than being
  rushed into this batch.
- **Mobile animation performance pass** (SMIL→CSS conversion, GPU acceleration hints,
  viewport meta tuning) — discussed and root-caused, but scoped as its own focused
  session rather than folded into this color/cleanup batch.
- **Whether the Insights section should exist at all** given the cards are now
  non-clickable — flagged as a content-strategy question, not decided here.

---

## Verification performed this session

- `npm install` — flag-icons added cleanly, 395 packages, no conflicts
- `npx tsc --noEmit` — zero errors
- `npm run build` — clean, 14/14 pages exported
- `npx eslint .` — zero errors (8 pre-existing `<img>` warnings, unrelated to this session)
- Directly inspected compiled `out/` HTML/CSS (not just source) to confirm:
  - Services heading text present
  - All 6 flag CSS classes present and their SVG assets physically bundled with correct
    hashed filenames in `_next/static/media/`
  - Zero emoji flag characters remain
  - SelectedWork accent colors (`#1FB5C9`, `#E8745B`) present in homepage HTML
  - Zero `/insights` links and zero "min read" text remain
  - New OG image in place at correct file size/path
- `node_modules`, `out/`, `.next/`, and `tsconfig.tsbuildinfo` removed before packaging —
  run `npm install` after unzipping.
