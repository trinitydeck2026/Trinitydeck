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

Set in `lib/config.js` (an empty value is never shown as a link):

- `phone` — official phone / WhatsApp number (+91 70263 08026)
- `social` — official profile URLs (Facebook, Instagram, LinkedIn, X, YouTube, Reddit, WhatsApp) for the footer buttons
- `tracking` — GA4, Google Ads, Microsoft Clarity and Meta Pixel IDs. Each loads only after the visitor accepts that category in the cookie banner.

Also:

- Selected Work — replace the two anonymised cases with the portfolio case studies (development and marketing)
- Tools — confirm the final tool list; Klaviyo, Microsoft Clarity and Google Merchant Center still use simple marks until their logo files are supplied
- Legal pages (`app/privacy`, `app/cookies`, `app/terms`) — have them reviewed by a solicitor; update the entity wording once the LLP is registered; add your email platform to Privacy §5 when you start sending newsletters
- "Last updated" dates in `components/Footer.js` and `components/Legal.js` — keep them current
