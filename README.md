# trinitydeck.com

Next.js (App Router) site: the homepage and the Custom Shopify Development service page. Both pages are prerendered as static HTML at build time.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Deploys to Vercel as-is (framework preset: Next.js).

## Structure

| Path | What it is |
|---|---|
| `app/page.js` | Homepage — every section of the website content document |
| `app/services/custom-shopify-development/page.js` | Service page |
| `app/layout.js` | Root layout: Urbanist font (next/font), smooth scrolling |
| `app/globals.css` | Design system and every section's styles |
| `components/` | Nav, Contact (Cal.com booking), Footer, FounderLinks, SmoothScroll, SiteEffects |
| `lib/site.js` | All page interactions: reveals, accordions, sliders, case cards, hub lines, globe, clocks, counters, Cal.com. Re-initialised on every page, cleaned up on leave |
| `lib/config.js` | **Placeholders — fill these before launch** |
| `data/schema-*.json` | JSON-LD for each page (Organization, Services, FAQPage, HowTo, Person, BreadcrumbList) |
| `public/` | `robots.txt`, `llms.txt`, `sitemap.xml`, `og-image.jpg`, `logo.png`, icons and images |

Smooth scrolling uses Lenis and is switched off for visitors who prefer reduced motion.

## Before launch

Set in `lib/config.js`. Anything left empty is not rendered, so there are no dead links:

- Phone number and WhatsApp number (contact details block)
- Social profile URLs (footer)
- Founder LinkedIn / X / GitHub / portfolio links (team cards)

Edit directly:

- `[FOUNDER 2 NAME]` and `[FOUNDER 3 NAME]` — team cards in `app/page.js` and the Person entries in `data/schema-home.json`
- Founder photographs — replace the initials in `.avatar` with an image
- Case study results — the two cards in the Work section show "before" figures only, until after-figures are measured
- Client quote — left out on purpose, per the content document; add it when a real one exists
- "Last updated" date in `components/Footer.js` — keep it current
- `/privacy-policy`, `/cookie-policy`, `/terms` — the footer links to these pages; add them
