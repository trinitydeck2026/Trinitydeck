# trinitydeck.com

Static site: homepage and the Custom Shopify Development service page. No build step and no dependencies. Serve the folder as-is (Vercel, Netlify, Cloudflare Pages or any static host).

```
npx http-server -p 8080 .   # then open http://localhost:8080
```

## Files

| Path | What it is |
|---|---|
| `index.html` | Homepage — all copy from the website content document, section by section |
| `services/custom-shopify-development/index.html` | Service page |
| `assets/css/style.css` | Design system and every section's styles |
| `assets/js/main.js` | Interactions: reveals, accordions, sliders, case cards, hub lines, globe, Cal.com, form |
| `assets/js/config.js` | **Placeholders — fill these before launch** |
| `assets/icons.svg` | Icon sprite (Lucide + Simple Icons) |
| `assets/fonts/` | Urbanist, self-hosted |
| `robots.txt`, `llms.txt` | Supplied technical files, unchanged |
| `sitemap.xml`, `og-image.jpg`, `logo.png` | Referenced by the schema |

The schema from `schema-markup.json` is inline in the homepage `<head>`. The service page carries its own Service, BreadcrumbList and FAQPage schema.

## Before launch

Set in `assets/js/config.js`. Anything left empty is removed from the page, so there are no dead links:

- Phone number and WhatsApp number (contact details block)
- Social profile URLs (footer)
- Founder LinkedIn / X / GitHub / portfolio links (team cards)
- `formEndpoint` — where the contact form posts. Without it, the form opens the visitor's email app addressed to contact@trinitydeck.com.

Edit in the HTML:

- `[FOUNDER 2 NAME]` and `[FOUNDER 3 NAME]` — team cards in `index.html` and the Person entries in the inline schema
- Founder photographs — replace the initials in `.avatar` with `<img class="photo" src="…" alt="…">`
- Case study results — the two cards in `#work` show "before" figures only, until after-figures are measured
- Client quote — left out on purpose, per the content document; add it when a real one exists
- "Last updated" date in the footer — keep it current
- `/privacy-policy`, `/cookie-policy`, `/terms` — the footer links to these pages; add them
