# MEI Innovations — Website

**buildwithmei.com** | Modern Ecosystem Intelligence | Est. 2014

## Tech Stack
- Next.js 15 (Static Export)
- React 19
- Tailwind CSS v4
- Motion (Framer Motion)
- TypeScript

## Deployment — GitHub Pages

This site deploys automatically to GitHub Pages via GitHub Actions.

### Setup (one time)
1. Push this repo to GitHub (branch: `main`)
2. Go to repo **Settings → Pages**
3. Source: **GitHub Actions**
4. Every push to `main` automatically builds and deploys

### Custom Domain
1. GitHub repo → **Settings → Pages → Custom domain**
2. Type `buildwithmei.com` → Save
3. In GoDaddy DNS, add:
   - `A` record: `@` → `185.199.108.153`
   - `A` record: `@` → `185.199.109.153`
   - `A` record: `@` → `185.199.110.153`
   - `A` record: `@` → `185.199.111.153`
   - `CNAME` record: `www` → `your-github-username.github.io`
4. Tick **Enforce HTTPS** in GitHub Pages settings after DNS propagates

### Local Development
```bash
npm install
npm run dev
```

### Manual Build
```bash
npm run build
# Output in ./out/ folder
```

## Contact
info@buildwithmei.com
