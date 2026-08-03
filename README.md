# CricBeatGame — 5-Page Website

A React + Vite rebuild of cricbeatgame.com: Home, About Us, How to Play, Product, Contact.

## Design direction
"Stadium under lights meets collector's card box." Palette: stadium-night charcoal-green,
turf green, leather-ball red, bail gold, chalk white. Display type is a bold condensed
stadium-signage face (Anton); a scoreboard monospace (Space Mono) drives the ticker, stats
and eyebrows; body copy is Manrope.

The signature element is the **ScoreTicker** — a live-broadcast-style scoreline running under
the nav on every page — and the reusable **statline** scorecard block, used for card stats,
product specs and rules. Both are literal cricket-scorecard language, not decoration.

## Run locally
```
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Adding your real assets
Images currently point at the *live* site's existing asset URLs
(`https://cricbeatgame.com/public/assets/...`) so the site works out of the box. Once you
upload new/updated art:
1. Drop files into `public/assets/...` in this project.
2. Swap the `ASSETS` constant paths in `src/pages/Home.jsx` and `src/pages/Product.jsx`,
   and any `<img>` src in `About.jsx` if you add team/board photography.
3. Replace `public/favicon.png` with a real favicon.
4. Swap the `YOUR_YOUTUBE_VIDEO_ID` in `src/pages/HowToPlay.jsx` for the real video ID.

## SEO — what's already in place
- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter tags via
  `react-helmet-async` (see `src/components/SEO.jsx`, used on every page).
- `Product` JSON-LD structured data on the Product page (price, availability, brand).
- `Organization` JSON-LD on the Contact page.
- Semantic heading structure (one `<h1>` per page, ordered `<h2>`/`<h3>`), descriptive `alt`
  text on every image, and a real `robots.txt` + `sitemap.xml` in `/public`.
- Fast base bundle (~65 KB gzipped JS) and lazy-loaded images below the fold.

## Important SEO caveat — please read
This is a **client-rendered React single-page app**. That's fine for users, but some
search engine crawlers render JavaScript slowly or incompletely, which can delay indexing
compared to a plain HTML site. Two ways to close that gap before/soon after launch:
1. **Prerendering (recommended, low effort):** use a static-site generator pass
   (e.g. `vite-react-ssg`, or a prerender step in your CI/host) so each of the 5 routes ships
   as real HTML with the content already in the markup, while still being this same React app.
2. **Submit to Search Console:** once live, submit `sitemap.xml` in Google Search Console and
   Bing Webmaster Tools, and request indexing for each of the 5 URLs directly — this alone
   gets most small sites indexed within days even without prerendering.

Happy to set up prerendering as a follow-up if you want it baked in before launch.

## Deploying
`npm run build` produces a static `/dist` folder — deploy it to any static host (Vercel,
Netlify, Cloudflare Pages, or your current Hostinger setup). Make sure the host rewrites
all routes to `index.html` (SPA fallback) so `/about`, `/product`, etc. work on direct load
and refresh.
