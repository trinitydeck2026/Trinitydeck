import Link from "next/link";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SiteEffects from "@/components/SiteEffects";
import schema from "@/data/schema-home.json";

export const metadata = {
  title: "Shopify Growth Agency — Build, Scale, Succeed | Trinity Deck",
  description: "We build your store, bring the traffic and keep the customers. Shopify development, SEO, AEO, GEO, paid media, CRO and retention — one team.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Trinity Deck",
    title: "We build your store, scale it, and keep the customers it wins",
    description: "Most agencies sell you one stage and leave you to survive the other two. Trinity Deck holds all three.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "We build your store, scale it, and keep the customers it wins",
    description: "Most agencies sell you one stage and leave you to survive the other two. Trinity Deck holds all three.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav page="home" currentPath="/" />
      <main id="main">
      {/* ============================ HERO ============================ */}
      <header className="frame hero" id="home">
        <div className="art-bg" aria-hidden="true"><div className="art-bg__mark"></div><div className="art-bg__grain"></div></div>
        <div className="hero__inner">
          <span className="badge badge--icon hero__badge load-in" style={{ '--ad': '.1s' }}><img src="/assets/img/mark.webp" alt="" width="18" height="18" />Ecommerce growth studio</span>
          <h1 className="h1 hero__title">
            <span className="rise"><span className="grad" style={{ '--ad': '.15s' }}>We build your store, scale it,</span></span>
            <span className="rise"><span className="grad" style={{ '--ad': '.27s' }}>and keep the customers</span></span>
            <span className="rise"><span style={{ '--ad': '.39s' }}><span className="grad">it wins.</span>
              <span className="pill3d" aria-hidden="true">
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-shopping-bag"/></svg></span>
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-search"/></svg></span>
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg></span>
              </span></span></span>
          </h1>
          <p className="hero__sub load-in" style={{ '--ad': '.55s' }}>
            <span>Trinity Deck is a Shopify growth agency that holds all three stages — development, search and paid media, conversion and retention.</span>
            <span>Most agencies sell you one and leave you to survive the other two.</span>
          </p>
          <div className="hero__ctas load-in" style={{ '--ad': '.68s' }}>
            <a className="btn btn--dark" href="https://cal.com/trinitydeckoffical/30min" target="_blank" rel="noopener"><span className="btn__roll"><span>Get a free teardown</span><span aria-hidden="true">Get a free teardown</span></span></a>
            <a className="btn btn--light" href="#process"><span className="btn__roll"><span>See how we work</span><span aria-hidden="true">See how we work</span></span></a>
          </div>
          <p className="hero__micro load-in" style={{ '--ad': '.8s' }}>10 minutes. Three specific things costing you orders. One you can fix yourself without us.</p>
        </div>
        <a className="hero__notch load-in" style={{ '--ad': '1s' }} href="#about">Scroll for more <span className="mouse" aria-hidden="true"></span></a>
      </header>

      {/* ============================ ABOUT ============================ */}
      <section className="section" id="about" aria-labelledby="about-h">
        <div className="container">
          <span className="badge" data-anim>Why growth stalls</span>
          <div className="about__top">
            <h2 className="h2" id="about-h" data-anim style={{ '--ay': '60px' }}><span className="grad">Nothing is broken.</span><br /><span className="grad-v">That's the problem.</span></h2>
            <div className="about__body" data-scrub>
              <p>Most growing stores end up with three suppliers. A developer built the site. An agency runs the ads. Someone else — later, usually too late — does the email.</p>
              <p>Each one is competent. Each one can point at the other two.</p>
              <p>When revenue goes flat, the developer says the build is fine. The agency says the traffic is fine. The email person says they're working with what they've got. All three are telling the truth, and you're left holding a problem nobody owns.</p>
            </div>
          </div>

          <div className="about__grid">
            {/* Returning-visitor shortcut: people who already know Trinity Deck go straight to booking */}
            <article className="cov-card" data-anim style={{ '--ay': '60px' }}>
              <span className="cov-card__chip"><span className="live-dot" aria-hidden="true"></span>Already know Trinity Deck?</span>
              <h3 className="cov-card__title">Skip the tour. <span className="accent">Book the call.</span></h3>
              <p className="cov-card__text">If you've seen our work or talked to us before, you don't need the rest of this page. Pick a 30-minute slot and bring your store URL — we'll come prepared.</p>
              <ul className="cov-card__points">
                <li><svg className="ic"><use href="/assets/icons.svg#i-clock"/></svg>30 minutes</li>
                <li><svg className="ic"><use href="/assets/icons.svg#i-eye"/></svg>Your store, on screen</li>
                <li><svg className="ic"><use href="/assets/icons.svg#i-rocket"/></svg>A clear first step</li>
              </ul>
              <a className="btn btn--light" href="#contact"><span className="btn__roll"><span>Book a 30-minute call</span><span aria-hidden="true">Book a 30-minute call</span></span><svg className="ic ic--arrow"><use href="/assets/icons.svg#i-arrow-right"/></svg></a>
              <div className="globe" aria-hidden="true"><canvas id="globe"></canvas></div>
            </article>

            <div className="about__col">
              {/* Card 1 — Capability (takes the reference's review-card slot) */}
              <article className="info-card" data-anim style={{ '--ay': '60px', '--ad': '.1s' }}>
                <h3 className="info-card__title">Engineering and growth, one roof</h3>
                <p className="info-card__text">The people who build your store are the people who run your ads. Nothing gets lost in a handover, because there isn't one.</p>
                <div className="info-card__foot">
                  <div>
                    <div className="info-card__label"><img src="/assets/img/mark.webp" alt="" width="26" height="26" />One team, one contract</div>
                    <div className="stack-ic" aria-hidden="true">
                      <span><svg className="ic"><use href="/assets/icons.svg#i-code"/></svg></span>
                      <span><svg className="ic"><use href="/assets/icons.svg#i-search"/></svg></span>
                      <span><svg className="ic"><use href="/assets/icons.svg#i-target"/></svg></span>
                      <span><svg className="ic"><use href="/assets/icons.svg#i-trending-up"/></svg></span>
                      <span><svg className="ic"><use href="/assets/icons.svg#i-mail"/></svg></span>
                    </div>
                  </div>
                  <div className="big-count" aria-label="Three suppliers become one team"><span className="ghost" data-flip="3,1">3</span></div>
                </div>
              </article>
              {/* The reference's testimonial card. Card 3 (client quote) stays out until it is real,
                   so this slot carries the closing lines of the About copy instead. */}
              <article className="info-card quote-card" data-anim style={{ '--ay': '60px', '--ad': '.2s' }}>
                <div className="quote-card__visual"><img src="/assets/img/mark.webp" alt="" width="100" height="100" loading="lazy" /></div>
                <div>
                  <p className="quote-card__text">The work is rarely the problem. <em>The seams between the work are where the money goes.</em></p>
                  <p className="quote-card__text" style={{ marginTop: '12px' }}>We removed the seams. One team, one contract, one number to move.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ PLATFORM STRIP ============================ */}
      <section className="strip" aria-label="Platforms">
        <div className="container">
          <div className="strip__rule"></div>
          <div className="strip__row">
            <p className="strip__label" data-anim>Built on the platforms you already run</p>
            <div className="marquee" data-anim="fade">
              <div className="marquee__track">
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-meta"/></svg>Meta Ads</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googleads"/></svg>Google Ads</span>
                <span className="logo-item logo-item--text">Microsoft Clarity</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googleanalytics"/></svg>Google Analytics 4</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googlesearchconsole"/></svg>Google Search Console</span>
                <span className="logo-item logo-item--text">Google Merchant Center</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-shopify"/></svg>Shopify</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googletagmanager"/></svg>Google Tag Manager</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-whatsapp"/></svg>WhatsApp</span>
                <span className="logo-item logo-item--text">AiSensy</span>
                <span className="logo-item logo-item--text">Wati</span>
                <span className="logo-item logo-item--text">WhatChimp</span>
                <span className="logo-item logo-item--text">Klaviyo</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-brevo"/></svg>Brevo</span>
                <span className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-mailchimp"/></svg>Mailchimp</span>
                <span className="logo-item logo-item--text">Omnisend</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-meta"/></svg>Meta Ads</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googleads"/></svg>Google Ads</span>
                <span aria-hidden="true" className="logo-item logo-item--text">Microsoft Clarity</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googleanalytics"/></svg>Google Analytics 4</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googlesearchconsole"/></svg>Google Search Console</span>
                <span aria-hidden="true" className="logo-item logo-item--text">Google Merchant Center</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-shopify"/></svg>Shopify</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-googletagmanager"/></svg>Google Tag Manager</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-whatsapp"/></svg>WhatsApp</span>
                <span aria-hidden="true" className="logo-item logo-item--text">AiSensy</span>
                <span aria-hidden="true" className="logo-item logo-item--text">Wati</span>
                <span aria-hidden="true" className="logo-item logo-item--text">WhatChimp</span>
                <span aria-hidden="true" className="logo-item logo-item--text">Klaviyo</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-brevo"/></svg>Brevo</span>
                <span aria-hidden="true" className="logo-item"><svg aria-hidden="true"><use href="/assets/icons.svg#l-mailchimp"/></svg>Mailchimp</span>
                <span aria-hidden="true" className="logo-item logo-item--text">Omnisend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHITE PANEL ============================ */}
      <div className="panel-white">

        {/* ============ SERVICES ============ */}
        <section className="section" id="services" aria-labelledby="services-h">
          <div className="container services">
            <div className="services__aside">
              <span className="badge" data-anim>What we do</span>
              <h2 className="h2" id="services-h" data-anim style={{ '--ay': '60px' }}><span className="grad">Build. Scale.</span><br /><span className="grad-v">Succeed.</span></h2>
              <p className="services__intro" data-anim>Three stages, eight services, one team. Take one or take all of them — but in this order, because each one makes the next one work.</p>
              <div className="pillars" data-anim style={{ '--ay': '40px' }}>
                <button className="pillar is-active" type="button" data-pillar="build">
                  <span className="pillar__ic"><svg className="ic"><use href="/assets/icons.svg#i-layers"/></svg></span>
                  <span><span className="pillar__name">BUILD</span><span className="pillar__head" style={{ display: 'block' }}>Make it exist, properly</span><span className="pillar__desc" style={{ display: 'block' }}>A fast, sellable store, instrumented from day one so you can see what it's doing.</span></span>
                </button>
                <button className="pillar" type="button" data-pillar="scale">
                  <span className="pillar__ic"><svg className="ic"><use href="/assets/icons.svg#i-rocket"/></svg></span>
                  <span><span className="pillar__name">SCALE</span><span className="pillar__head" style={{ display: 'block' }}>Make the right people find it</span><span className="pillar__desc" style={{ display: 'block' }}>Search, AI answers and paid media — aimed at the smallest audience most likely to buy.</span></span>
                </button>
                <button className="pillar" type="button" data-pillar="succeed">
                  <span className="pillar__ic"><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg></span>
                  <span><span className="pillar__name">SUCCEED</span><span className="pillar__head" style={{ display: 'block' }}>Turn visits into revenue that returns</span><span className="pillar__desc" style={{ display: 'block' }}>More of your visitors buy, and more of your buyers come back.</span></span>
                </button>
              </div>
            </div>

            <div className="acc" data-acc="single">
              <article className="acc-item is-open" id="svc-website-development" data-pillar="build" data-anim style={{ '--ay': '10px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="true" aria-controls="svc-p1">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-app-window"/></svg>BUILD</span>
                    <h3 className="acc-item__title">Website Development</h3>
                  </span>
                  <span className="acc-item__num">(01)</span>
                </button>
                <div className="acc-item__panel" id="svc-p1"><div><div className="acc-item__content">
                  <p className="acc-item__desc">A site built to sell, not to win design awards. Every page written for the person who has to decide, every page fast on a phone, and the whole thing instrumented before launch so you can see exactly what it's doing.</p>
                  <ul className="pills"><li className="pill">Custom design</li><li className="pill">Mobile-first build</li><li className="pill">SEO-ready structure</li><li className="pill">Conversion tracking</li><li className="pill">7–15 day delivery</li><li className="pill">Full handover</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-custom-shopify-development" data-pillar="build" data-anim style={{ '--ay': '20px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p2">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-shopping-bag"/></svg>BUILD</span>
                    <h3 className="acc-item__title">Custom Shopify Development</h3>
                  </span>
                  <span className="acc-item__num">(02)</span>
                </button>
                <div className="acc-item__panel" id="svc-p2"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Theme customisation, custom functionality, app integration and migrations — done inside a theme that stays fast. We don't replace what already works, because your page speed usually depends on it.</p>
                  <ul className="pills"><li className="pill">Theme customisation</li><li className="pill">Custom functionality</li><li className="pill">App integration</li><li className="pill">Platform migration</li><li className="pill">Speed optimisation</li><li className="pill">Metafield architecture</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a><Link className="text-link" href="/services/custom-shopify-development/">Custom Shopify Development <svg className="ic"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></Link></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-seo" data-pillar="scale" data-anim style={{ '--ay': '30px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p3">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-search"/></svg>SCALE</span>
                    <h3 className="acc-item__title">SEO</h3>
                  </span>
                  <span className="acc-item__num">(03)</span>
                </button>
                <div className="acc-item__panel" id="svc-p3"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Being found by people already looking to buy what you sell. Technical health first, then structure, then content that answers the question a buyer actually typed — rather than the one a keyword tool suggested.</p>
                  <ul className="pills"><li className="pill">Technical audit</li><li className="pill">On-page optimisation</li><li className="pill">Schema markup</li><li className="pill">Content strategy</li><li className="pill">Internal linking</li><li className="pill">Migration &amp; rank recovery</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-aeo" data-pillar="scale" data-anim style={{ '--ay': '40px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p4">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-message-circle"/></svg>SCALE</span>
                    <h3 className="acc-item__title">AEO — Answer Engine Optimisation</h3>
                  </span>
                  <span className="acc-item__num">(04)</span>
                </button>
                <div className="acc-item__panel" id="svc-p4"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Google now answers many questions itself, at the top of the page, and most people never scroll past it. We set your site up so that answer can come from you instead of from a competitor.</p>
                  <ul className="pills"><li className="pill">Answer-first content</li><li className="pill">FAQ schema</li><li className="pill">Snippet targeting</li><li className="pill">Entity clarity</li><li className="pill">Structured data</li><li className="pill">Question mapping</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-geo" data-pillar="scale" data-anim style={{ '--ay': '40px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p5">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-sparkles"/></svg>SCALE</span>
                    <h3 className="acc-item__title">GEO — Generative Engine Optimisation</h3>
                  </span>
                  <span className="acc-item__num">(05)</span>
                </button>
                <div className="acc-item__panel" id="svc-p5"><div><div className="acc-item__content">
                  <p className="acc-item__desc">More buyers now ask ChatGPT, Perplexity or Gemini for a recommendation and never see a results page at all. We make your brand something those tools can find, understand and name. Almost nobody is competing here yet.</p>
                  <ul className="pills"><li className="pill">AI crawler policy</li><li className="pill">llms.txt</li><li className="pill">Citation building</li><li className="pill">Entity consistency</li><li className="pill">Prompt tracking</li><li className="pill">Third-party presence</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-performance-marketing" data-pillar="scale" data-anim style={{ '--ay': '40px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p6">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-target"/></svg>SCALE</span>
                    <h3 className="acc-item__title">Performance Marketing</h3>
                  </span>
                  <span className="acc-item__num">(06)</span>
                </button>
                <div className="acc-item__panel" id="svc-p6"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Google Ads and Meta Ads, run on tracking we installed and verified ourselves. We tell you what the money did every month — including the months it did nothing.</p>
                  <ul className="pills"><li className="pill">Google Search &amp; Shopping</li><li className="pill">Performance Max</li><li className="pill">Meta &amp; Instagram</li><li className="pill">Feed management</li><li className="pill">Creative testing</li><li className="pill">Budget modelling</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-cro" data-pillar="succeed" data-anim style={{ '--ay': '40px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p7">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-trending-up"/></svg>SUCCEED</span>
                    <h3 className="acc-item__title">Conversion Rate Optimisation</h3>
                  </span>
                  <span className="acc-item__num">(07)</span>
                </button>
                <div className="acc-item__panel" id="svc-p7"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Out of every hundred people who visit your store, about two buy. We find the exact reasons the other ninety-eight leave, fix them one at a time, and measure whether it actually worked.</p>
                  <ul className="pills"><li className="pill">Session recordings</li><li className="pill">Funnel analysis</li><li className="pill">A/B testing</li><li className="pill">Product page rebuilds</li><li className="pill">Checkout optimisation</li><li className="pill">Before-and-after reporting</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>

              <article className="acc-item" id="svc-retention" data-pillar="succeed" data-anim style={{ '--ay': '40px' }}>
                <button className="acc-item__btn" type="button" aria-expanded="false" aria-controls="svc-p8">
                  <span>
                    <span className="acc-item__kicker"><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg>SUCCEED</span>
                    <h3 className="acc-item__title">Retention Marketing</h3>
                  </span>
                  <span className="acc-item__num">(08)</span>
                </button>
                <div className="acc-item__panel" id="svc-p8"><div><div className="acc-item__content">
                  <p className="acc-item__desc">Winning a customer costs money every single time. Selling again to someone who already bought costs almost nothing. We build the flows that make the second purchase happen without anyone touching them.</p>
                  <ul className="pills"><li className="pill">Klaviyo setup</li><li className="pill">Six core flows</li><li className="pill">Email, SMS &amp; WhatsApp</li><li className="pill">Segmentation</li><li className="pill">Replenishment timing</li><li className="pill">Lifecycle reporting</li></ul>
                  <div className="acc-item__links"><a className="text-link" href="#contact">Talk to us about this <svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></a></div>
                </div></div></div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ WORK ============ */}
        <section className="section" id="work" aria-labelledby="work-h" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="work__head">
              <span className="badge" data-anim>Selected work</span>
              <h2 className="h2" id="work-h" data-anim style={{ '--ay': '60px', maxWidth: '900px' }}><span className="grad">Stores we've taken apart</span> <span className="grad-v">and put back together</span></h2>
            </div>

            <div className="work__stack">
              {/* Case 1 */}
              <article className="case" data-case>
                <div className="case__media" data-slides>
                  <div className="case__slides">
                    <div className="case__slide is-on">
                      <div className="mock mock--blue">
                        <div className="win">
                          <div className="win__bar"><i></i><i></i><i></i><span className="win__url">Collection · 58 products · 128 variants</span></div>
                          <div className="win__body">
                            <div className="pgrid">
                              <div className="pcard"><span className="tag tag--bad">Out of stock</span><div className="pcard__img"></div><b></b><em></em></div>
                              <div className="pcard"><span className="tag tag--bad">Out of stock</span><div className="pcard__img"></div><b></b><em></em></div>
                              <div className="pcard"><span className="tag tag--bad">Out of stock</span><div className="pcard__img"></div><b></b><em></em></div>
                              <div className="pcard"><span className="tag tag--bad">Out of stock</span><div className="pcard__img"></div><b></b><em></em></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case__slide">
                      <div className="mock mock--grey">
                        <div className="win" style={{ maxWidth: '560px' }}>
                          <div className="win__bar"><i></i><i></i><i></i><span className="win__url">Merchant Center · product feed</span></div>
                          <div className="win__body">
                            <div className="feed-row head"><span>Item</span><span>Availability</span><span>Shopping</span></div>
                            <div className="feed-row"><span className="bar"></span><span className="state state--out">out_of_stock</span><span className="state state--out">Not showing</span></div>
                            <div className="feed-row"><span className="bar" style={{ width: '80%' }}></span><span className="state state--out">out_of_stock</span><span className="state state--out">Not showing</span></div>
                            <div className="feed-row"><span className="bar" style={{ width: '65%' }}></span><span className="state state--out">out_of_stock</span><span className="state state--out">Not showing</span></div>
                            <div className="feed-row"><span className="bar" style={{ width: '90%' }}></span><span className="state state--out">out_of_stock</span><span className="state state--out">Not showing</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case__slide">
                      <div className="mock mock--blue">
                        <div className="win" style={{ maxWidth: '520px' }}>
                          <div className="win__bar"><i></i><i></i><i></i><span className="win__url">Tracking stack</span></div>
                          <div className="win__body checklist">
                            <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Supplier mapping &amp; inventory sync<span>What we did</span></div>
                            <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Catalogue restructure · 58 products<span>What we did</span></div>
                            <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Structured data &amp; corrected feed<span>What we did</span></div>
                            <div className="check-row"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-clock"/></svg></span>Before-and-after numbers<span>Phase 1</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case__shine" aria-hidden="true"></div>
                  <span className="cursor-chip" aria-hidden="true"><span className="live-dot"></span>Phase 1 in progress</span>
                </div>
                <div className="case__dots" role="tablist" aria-label="Case 1 views"><button className="is-on" aria-label="View 1"></button><button aria-label="View 2"></button><button aria-label="View 3"></button></div>
                <div className="case__meta">
                  <div>
                    <h3 className="case__title">A store that couldn't take a single order</h3>
                    <p className="case__client">Beauty brand · Belgium</p>
                  </div>
                  <div><p className="meta-label">Problem</p><p className="meta-text">128 product variants. Not one of them could be added to a basket. Google was told every item was out of stock, so nothing appeared in Shopping. The basket page still showed the theme's demo content in US dollars.</p></div>
                  <div><p className="meta-label">What we did</p><p className="meta-text">Supplier mapping and inventory sync, catalogue restructure across 58 products, theme fixes, the full tracking stack, structured data, and a corrected Merchant Center feed.</p></div>
                  <div className="case__result">
                    <p className="meta-label">Result</p>
                    <span className="status"><span className="live-dot"></span>Publishing after Phase 1</span>
                    <div className="before-row">
                      <span className="before-chip"><b>0</b><small>Purchasable variants, before</small></span>
                      <span className="before-chip"><b>2 of 7</b><small>Tracking platforms, before</small></span>
                    </div>
                  </div>
                  <div className="case__services"><p className="meta-label" style={{ margin: '0 8px 0 0' }}>Services</p><span className="pill">Shopify Development</span><span className="pill">SEO</span><span className="pill">CRO</span><span className="pill">Performance Marketing</span></div>
                </div>
              </article>

              {/* Case 2 */}
              <article className="case" data-case>
                <div className="case__media" data-slides>
                  <div className="case__slides">
                    <div className="case__slide is-on">
                      <div className="mock mock--dark">
                        <div className="win win--dark" style={{ maxWidth: '560px' }}>
                          <div className="win__bar"><i></i><i></i><i></i><span className="win__url">Cost-per-plate calculator</span></div>
                          <div className="win__body calc">
                            <div className="calc__field"><small>Pack weight</small><b>Published</b></div>
                            <div className="calc__field"><small>Shelf life</small><b>Published</b></div>
                            <div className="calc__field"><small>Plates per pack</small><b>Calculated</b></div>
                            <div className="calc__field"><small>Catalogue</small><b>Full range</b></div>
                            <div className="calc__out"><small>Cost per plate</small><b>Before the first call</b></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case__slide">
                      <div className="mock mock--dark">
                        <div className="chat">
                          <div className="chat__head"><span><svg className="ic"><use href="/assets/icons.svg#l-whatsapp"/></svg></span>Ordering agent</div>
                          <div className="chat__msgs">
                            <div className="msg msg--in">Same as last week?</div>
                            <div className="msg msg--out">Yes — reorder, please.</div>
                            <div className="msg msg--in">Reorder placed. Confirmation on its way.</div>
                            <div className="msg msg--in msg--typing"><i></i><i></i><i></i></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case__slide">
                      <div className="mock mock--grey">
                        <div className="listings">
                          <div className="listing"><span><svg className="ic"><use href="/assets/icons.svg#i-store"/></svg></span><div>IndiaMART<small>Listed</small></div></div>
                          <div className="listing"><span><svg className="ic"><use href="/assets/icons.svg#l-google"/></svg></span><div>Google Business Profile<small>Listed</small></div></div>
                          <div className="listing"><span><svg className="ic"><use href="/assets/icons.svg#i-globe"/></svg></span><div>TradeIndia<small>Listed</small></div></div>
                          <div className="listing"><span><svg className="ic"><use href="/assets/icons.svg#i-map-pin"/></svg></span><div>JustDial<small>Listed</small></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case__shine" aria-hidden="true"></div>
                  <span className="cursor-chip" aria-hidden="true"><span className="live-dot"></span>Going live</span>
                </div>
                <div className="case__dots" role="tablist" aria-label="Case 2 views"><button className="is-on" aria-label="View 1"></button><button aria-label="View 2"></button><button aria-label="View 3"></button></div>
                <div className="case__meta">
                  <div>
                    <h3 className="case__title">A supplier nobody could find</h3>
                    <p className="case__client">B2B food manufacturer · India</p>
                  </div>
                  <div><p className="meta-label">Problem</p><p className="meta-text">Frozen masala pastes supplied to named restaurants across three cities, with no catalogue, no pack weights, no shelf life published anywhere, and no Google listing at all. Every enquiry needed a phone call before a buyer could learn anything.</p></div>
                  <div><p className="meta-label">What we did</p><p className="meta-text">A B2B supplier site with a full product catalogue and a cost-per-plate calculator, a WhatsApp ordering agent with reorder automation, and listings across IndiaMART, Google Business Profile, TradeIndia and JustDial.</p></div>
                  <div className="case__result">
                    <p className="meta-label">Result</p>
                    <span className="status"><span className="live-dot"></span>Publishing once live</span>
                    <div className="before-row">
                      <span className="before-chip"><b>0</b><small>Google listings, before</small></span>
                      <span className="before-chip"><b>4</b><small>Directory listings built</small></span>
                    </div>
                  </div>
                  <div className="case__services"><p className="meta-label" style={{ margin: '0 8px 0 0' }}>Services</p><span className="pill">Website Development</span><span className="pill">SEO</span><span className="pill">AEO</span><span className="pill">Performance Marketing</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="section" id="process" aria-labelledby="process-h">
          <div className="container">
            <div className="process">
              <div>
                <span className="badge" data-anim>How we work</span>
                <h2 className="h2" id="process-h" data-anim style={{ '--ay': '50px', marginTop: '24px' }}><span className="grad">Fix what converts</span> <span className="grad-v">before you pay for traffic</span></h2>
                <p className="process__intro" data-anim>Every engagement runs in the same order. It's deliberately boring, and it's the reason the work compounds instead of cancelling itself out.</p>
                <div className="process__arrows" data-anim style={{ '--ay': '50px' }}>
                  <button className="arrow-btn" type="button" data-prev aria-label="Previous step" disabled><svg className="ic"><use href="/assets/icons.svg#i-arrow-left"/></svg></button>
                  <button className="arrow-btn" type="button" data-next aria-label="Next step"><svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></button>
                </div>
              </div>
              <div className="process__viewport">
                <ol className="process__track" data-slider>
                  <li className="step" data-anim="left">
                    <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-layers"/></svg></span>
                    <h3 className="step__title">Foundation</h3>
                    <p className="step__body">We make the store sellable and measurable. Catalogue, product data, theme fixes, search foundations, and the full tracking stack — verified with a test purchase before anything else starts. Every decision after this depends on it.</p>
                    <div className="step__foot"><span className="chip-outline">2–3 weeks</span><span className="step__num">01<span>/03</span></span></div>
                  </li>
                  <li className="step" data-anim="left" style={{ '--ad': '.1s' }}>
                    <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-zap"/></svg></span>
                    <h3 className="step__title">Scale</h3>
                    <p className="step__body">Now traffic is worth paying for. Google and Meta on tracking we installed ourselves, search and AI-answer work running underneath, and a monthly report that tells you what the money actually did.</p>
                    <div className="step__foot"><span className="chip-outline">Month 2 onward</span><span className="step__num">02<span>/03</span></span></div>
                  </li>
                  <li className="step" data-anim="left" style={{ '--ad': '.2s' }}>
                    <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg></span>
                    <h3 className="step__title">Succeed</h3>
                    <p className="step__body">More of your visitors buy, and more of your buyers come back. Conversion testing on real session data, and the lifecycle flows that make the second purchase happen by itself.</p>
                    <div className="step__foot"><span className="chip-outline">Once there's traffic and customers</span><span className="step__num">03<span>/03</span></span></div>
                  </li>
                </ol>
              </div>
            </div>
            <p className="process__line" data-anim><svg className="ic"><use href="/assets/icons.svg#i-shield-check"/></svg>You pay for one stage at a time. There's no point in this plan where you're funding a phase you haven't seen the results of.</p>
          </div>
        </section>

        {/* ============ WHY CHOOSE US ============ */}
        <section className="section" aria-labelledby="why-h" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="section-head section-head--center">
              <span className="badge" data-anim>Why Trinity Deck</span>
              <h2 className="h2" id="why-h" data-anim style={{ '--ay': '50px', maxWidth: '820px' }}><span className="grad">Four things we do</span> <span className="grad-v">that most agencies won't</span></h2>
            </div>
            <div className="bento">
              <article className="bento__card" data-anim style={{ '--ay': '30px' }}>
                <div className="bento__art">
                  <div className="chips-stack" style={{ justifySelf: 'start' }}>
                    <div className="chip-row"><span className="ghost-pill"></span><span className="pill pill--light"><svg className="ic"><use href="/assets/icons.svg#i-clipboard-check"/></svg>Fixed scope</span></div>
                    <div className="chip-row"><span className="ghost-pill"></span><span className="pill pill--light"><svg className="ic"><use href="/assets/icons.svg#i-key-round"/></svg>Full handover</span></div>
                    <div className="chip-row"><span className="ghost-pill"></span><span className="pill pill--light"><svg className="ic"><use href="/assets/icons.svg#i-calendar"/></svg>Fixed date</span></div>
                  </div>
                  <div className="week-bar" aria-hidden="true">
                    <div className="week-bar__row"><span>Us</span><span className="week-bar__track"><span className="week-bar__fill" style={{ '--w': '.22', display: 'block' }}></span></span></div>
                    <div className="week-bar__row week-bar__row--slow"><span>A quarter</span><span className="week-bar__track"><span className="week-bar__fill" style={{ '--w': '1', display: 'block' }}></span></span></div>
                  </div>
                </div>
                <h3 className="bento__title">We ship in weeks, not quarters</h3>
                <p className="bento__text">Fixed scope, fixed date, full handover. Most builds land in seven to fifteen working days. Quarters are where ideas go to die — and where retainers quietly become subscriptions.</p>
              </article>
              <article className="bento__card" data-anim style={{ '--ay': '30px', '--ad': '.1s' }}>
                <div className="bento__art">
                  <div className="tiles">
                    <span className="tile"><svg className="c-gtm"><use href="/assets/icons.svg#l-googletagmanager"/></svg><span className="tile__ok"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span></span>
                    <span className="tile tile--big"><svg className="c-ga"><use href="/assets/icons.svg#l-googleanalytics"/></svg><span className="tile__ok"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span></span>
                    <span className="tile"><svg className="c-meta"><use href="/assets/icons.svg#l-meta"/></svg><span className="tile__ok"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span></span>
                  </div>
                </div>
                <h3 className="bento__title">Nothing launches with broken tracking</h3>
                <p className="bento__text">If we can't measure it, we didn't build it. Every engagement starts with measurement, because every decision after it is downstream of that. In most audits we run, the tracking is already wrong and nobody knows.</p>
              </article>
              <article className="bento__card" data-anim style={{ '--ay': '30px' }}>
                <div className="bento__art">
                  <div className="owner">
                    <div className="owner-row"><span><svg className="ic"><use href="/assets/icons.svg#l-shopify"/></svg></span><b>Store</b><small>Your name</small></div>
                    <div className="owner-row"><span><svg className="ic"><use href="/assets/icons.svg#l-googleads"/></svg></span><b>Ad accounts</b><small>Your name</small></div>
                    <div className="owner-row"><span><svg className="ic"><use href="/assets/icons.svg#i-file-text"/></svg></span><b>Documentation</b><small>Yours</small></div>
                  </div>
                </div>
                <h3 className="bento__title">You own everything</h3>
                <p className="bento__text">Every account in your name. Full documentation. A recorded walkthrough at handover. You could take all of it elsewhere tomorrow, and that's deliberate — lock-in is what agencies build instead of quality.</p>
              </article>
              <article className="bento__card" data-anim style={{ '--ay': '30px', '--ad': '.1s' }}>
                <div className="bento__art">
                  <div className="convo" aria-hidden="true">
                    <div className="bubble bubble--them">Can we double the ad budget?</div>
                    <div className="bubble bubble--us">Not yet. <b>Fix the checkout first.</b></div>
                    <div className="bubble bubble--them">Fair.</div>
                  </div>
                </div>
                <h3 className="bento__title">We say the uncomfortable thing first</h3>
                <p className="bento__text">If we think you should spend less, pause a channel, or that the project you asked for is the wrong project, you'll hear it from us. Even when it costs us the work.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ ALL IN ONE ============ */}
        <section className="section" aria-labelledby="all-h" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="section-head section-head--center">
              <span className="badge" data-anim>Everything in one place</span>
              <h2 className="h2" id="all-h" data-anim style={{ '--ay': '50px', maxWidth: '860px' }}><span className="grad">Every lever of growth,</span> <span className="grad-v">run by one team</span></h2>
              <p className="section-head__intro" data-anim>Most stores stall because each lever is pulled by a different supplier. We run them in the right order, on the same data, towards one number.</p>
            </div>
            <div className="hub" data-hub>
              <svg className="hub__lines" aria-hidden="true"></svg>
              <div className="hub__col">
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '20px' }}><span className="hub__ic" data-anim="pop"><svg className="ic"><use href="/assets/icons.svg#i-bar-chart-3"/></svg></span><h3 className="hub__title">We start from your numbers</h3><p className="hub__text">Before we change anything, we read your analytics, search data and session recordings. Every recommendation arrives with the evidence behind it.</p></article>
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '30px' }}><span className="hub__ic" data-anim="pop" style={{ '--ad': '.1s' }}><svg className="ic"><use href="/assets/icons.svg#i-gauge"/></svg></span><h3 className="hub__title">Tracking you can trust</h3><p className="hub__text">Seven tracking platforms installed and verified with a real test purchase before any ad spend. Every decision after that is made on accurate data.</p></article>
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '40px' }}><span className="hub__ic" data-anim="pop" style={{ '--ad': '.2s' }}><svg className="ic"><use href="/assets/icons.svg#i-search"/></svg></span><h3 className="hub__title">Found everywhere buyers look</h3><p className="hub__text">SEO, AEO and GEO run together, so your store shows up whether a buyer searches Google, reads the answer box or asks ChatGPT.</p></article>
              </div>
              <div className="hub__center">
                <div className="hub__node" data-hub-node data-anim="pop"><img src="/assets/img/mark.webp" alt="" width="74" height="74" loading="lazy" />Trinity Deck</div>
              </div>
              <div className="hub__col hub__col--right">
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '20px' }}><span className="hub__ic" data-anim="pop"><svg className="ic"><use href="/assets/icons.svg#i-target"/></svg></span><h3 className="hub__title">Ads on a store that converts</h3><p className="hub__text">We fix the pages that lose sales first, then scale Google and Meta on a store ready for the traffic. Spend goes further when fewer visitors leave.</p></article>
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '30px' }}><span className="hub__ic" data-anim="pop" style={{ '--ad': '.1s' }}><svg className="ic"><use href="/assets/icons.svg#i-trending-up"/></svg></span><h3 className="hub__title">Every change is measured</h3><p className="hub__text">Conversion changes ship one at a time with before-and-after numbers, so you know exactly which change moved revenue and which didn't.</p></article>
                <article className="hub__card" data-hub-card data-anim style={{ '--ay': '40px' }}><span className="hub__ic" data-anim="pop" style={{ '--ad': '.2s' }}><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg></span><h3 className="hub__title">Customers who come back</h3><p className="hub__text">Klaviyo flows across email, SMS and WhatsApp turn first orders into repeat orders, without anyone on your team pressing send.</p></article>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================ TOOLS ============================ */}
      <section className="tools" aria-labelledby="tools-h" data-tools>

        <div className="container">
          <div className="tools__stage">
            <div className="float-tile" style={{ left: '2%', top: '4%', '--rot': '-18deg', '--bd': '-1s' }} data-depth="30"><div><svg className="c-shopify"><use href="/assets/icons.svg#l-shopify"/></svg></div></div>
            <div className="float-tile float-tile--sm" style={{ left: '-3%', top: '44%', '--rot': '12deg', '--bd': '-3s' }} data-depth="18"><div><svg><use href="/assets/icons.svg#l-googletagmanager"/></svg></div></div>
            <div className="float-tile" style={{ left: '9%', top: '74%', '--rot': '-10deg', '--bd': '-5s' }} data-depth="24"><div><svg className="c-ga"><use href="/assets/icons.svg#l-googleanalytics"/></svg></div></div>
            <div className="float-tile float-tile--sm" style={{ right: '4%', top: '10%', '--rot': '14deg', '--bd': '-2s' }} data-depth="22"><div><svg className="c-meta"><use href="/assets/icons.svg#l-meta"/></svg></div></div>
            <div className="float-tile float-tile--sm" style={{ right: '-2%', top: '48%', '--rot': '-12deg', '--bd': '-4s' }} data-depth="16"><div><svg className="c-gads"><use href="/assets/icons.svg#l-googleads"/></svg></div></div>
            <div className="float-tile" style={{ right: '8%', top: '76%', '--rot': '20deg', '--bd': '-6s' }} data-depth="28"><div><svg className="c-wa"><use href="/assets/icons.svg#l-whatsapp"/></svg></div></div>
          <div className="tools__head">
            <span className="badge" data-anim>The stack</span>
            <h2 className="h2" id="tools-h" data-anim style={{ '--ay': '50px' }}><span className="grad">The tools we work in</span> <span className="grad-v">every day</span></h2>
            <p className="tools__sub" data-anim>No proprietary dashboard you'd lose access to. Everything runs in platforms you already own, or ones you can take with you.</p>
            <a className="btn btn--dark" data-anim href="https://cal.com/trinitydeckoffical/30min" target="_blank" rel="noopener"><span className="btn__roll"><span>See how we'd use these on your store</span><span aria-hidden="true">See how we'd use these on your store</span></span><svg className="ic ic--arrow"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></a>
          </div>
          </div>
          <ul className="tool-grid">
            <li className="tool" data-anim style={{ '--ay': '30px' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-meta"/></svg></span><div><b>Meta Ads</b><small>Facebook and Instagram</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.05s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-googleads"/></svg></span><div><b>Google Ads</b><small>Search, Shopping and Performance Max</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.1s' }}><span className="tool__ic"><svg className="ic"><use href="/assets/icons.svg#i-mouse-pointer-click"/></svg></span><div><b>Microsoft Clarity</b><small>Session recordings and heatmaps</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.15s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-googleanalytics"/></svg></span><div><b>Google Analytics 4</b><small>Ecommerce events and reporting</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.2s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-googlesearchconsole"/></svg></span><div><b>Google Search Console</b><small>Indexing and search performance</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px' }}><span className="tool__ic"><svg className="ic"><use href="/assets/icons.svg#i-store"/></svg></span><div><b>Google Merchant Center</b><small>Product feeds and free listings</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.05s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-shopify"/></svg></span><div><b>Shopify</b><small>Store builds, themes, migrations</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.1s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-googletagmanager"/></svg></span><div><b>Google Tag Manager</b><small>Tag management and server-side</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.15s' }}><span className="tool__ic"><svg><use href="/assets/icons.svg#l-whatsapp"/></svg></span><div><b>WhatsApp</b><small>AiSensy, Wati, WhatChimp and more</small></div></li>
            <li className="tool" data-anim style={{ '--ay': '30px', '--ad': '.2s' }}><span className="tool__ic"><svg className="ic"><use href="/assets/icons.svg#i-mail"/></svg></span><div><b>Email marketing</b><small>Klaviyo, Brevo, Mailchimp, Omnisend</small></div></li>
          </ul>
        </div>
      </section>

      {/* ============================ BLACK PANEL ============================ */}
      <div className="panel-black">
        <div className="spot" aria-hidden="true"></div>

        {/* ============ TEAM ============ */}
        <section className="team" id="next-steps" aria-labelledby="team-h">
          <div className="container">
            <div className="team__head">
              <span className="badge badge--dark" data-anim>What happens next</span>
              <h2 className="h2" id="team-h" data-anim style={{ '--ay': '50px', maxWidth: '820px' }}><span className="grad-light">From one call to a store that sells</span></h2>
              <p className="team__sub" data-anim>No long onboarding and no sales deck. This is exactly what happens after you book.</p>
            </div>
            <div className="team__grid">
              <article className="member member--lead step-card" data-anim style={{ '--ay': '40px' }}>
                <div className="step-card__visual" aria-hidden="true">
                  <span className="step-card__num">01</span>
                  <div className="step-card__rec"><span className="live-dot"></span>Recording · 10 min</div>
                  <ul className="step-card__list">
                    <li><span>1</span>Problem costing you orders</li>
                    <li><span>2</span>Problem costing you orders</li>
                    <li><span>3</span>Problem costing you orders</li>
                    <li className="is-free"><span><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>One fix you can make yourself</li>
                  </ul>
                </div>
                <h3 className="member__name">A free teardown of your store</h3>
                <p className="member__role">Yours to keep, whether we work together or not</p>
                <p className="member__bio">We record a ten-minute review of your store: three specific things costing you orders, and one you can fix yourself without us.</p>
                <a className="btn btn--light step-card__cta" href="#contact"><span className="btn__roll"><span>Get my free teardown</span><span aria-hidden="true">Get my free teardown</span></span><svg className="ic ic--arrow"><use href="/assets/icons.svg#i-arrow-right"/></svg></a>
              </article>
              <div className="team__right">
                <article className="member member--row step-card" data-anim style={{ '--ay': '40px', '--ad': '.1s' }}>
                  <div className="step-card__ic" aria-hidden="true"><svg className="ic"><use href="/assets/icons.svg#i-clipboard-check"/></svg><span>02</span></div>
                  <div>
                    <h3 className="member__name">A written plan before any work</h3>
                    <p className="member__role">Scope, order and dates agreed up front</p>
                    <p className="member__bio">You see exactly what we'll do, in what order and by when. Nothing starts until you've approved it in writing, and nothing changes without your say.</p>
                  </div>
                </article>
                <article className="member member--row step-card" data-anim style={{ '--ay': '40px', '--ad': '.2s' }}>
                  <div className="step-card__ic" aria-hidden="true"><svg className="ic"><use href="/assets/icons.svg#i-rocket"/></svg><span>03</span></div>
                  <div>
                    <h3 className="member__name">Your foundation live in 2–3 weeks</h3>
                    <p className="member__role">Then we scale what's working</p>
                    <p className="member__bio">Catalogue, speed and tracking fixed first and verified with a test purchase. Every rupee, pound or dollar you spend after that is measured.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ============ RESULTS ============ */}
        <section className="results" aria-labelledby="results-h">
          <div className="container">
            <div className="results__rule"></div>
            <div className="results__head">
              <div>
                <span className="badge badge--dark" data-anim>What changed</span>
                <h2 className="h2" id="results-h" data-anim style={{ '--ay': '50px' }}><span className="grad-light">Numbers we can show you the working for</span></h2>
              </div>
              <p className="results__honest" data-anim><svg className="ic"><use href="/assets/icons.svg#i-shield-check"/></svg>Only figures we can evidence on request. Client results go up once a full month of data is in.</p>
            </div>
            <div className="kpis">
              <article className="kpi" data-anim style={{ '--ay': '40px' }}>
                <span className="kpi__i">01</span>
                <p className="kpi__value"><small>within</small><span className="kpi__num"><span data-count="14">14</span></span><em>days</em></p>
                <h3 className="kpi__title">Shopify store build</h3>
                <p className="kpi__text">From content in hand to a live store that can take orders.</p>
              </article>
              <article className="kpi" data-anim style={{ '--ay': '40px', '--ad': '.06s' }}>
                <span className="kpi__i">02</span>
                <p className="kpi__value"><span className="kpi__num"><span data-count="7">7</span> of 7</span></p>
                <h3 className="kpi__title">Tracking platforms verified</h3>
                <p className="kpi__text">Installed and checked with a real test purchase before any ad spend.</p>
              </article>
              <article className="kpi" data-anim style={{ '--ay': '40px', '--ad': '.12s' }}>
                <span className="kpi__i">03</span>
                <p className="kpi__value"><span className="kpi__num"><span data-count="3">3</span></span><em>surfaces</em></p>
                <h3 className="kpi__title">Search coverage</h3>
                <p className="kpi__text">Google results, the answer box and AI assistants, optimised together.</p>
              </article>
              <article className="kpi" data-anim style={{ '--ay': '40px', '--ad': '.18s' }}>
                <span className="kpi__i">04</span>
                <p className="kpi__value"><span className="kpi__num">2–3</span><em>weeks</em></p>
                <h3 className="kpi__title">Foundation live</h3>
                <p className="kpi__text">Catalogue, speed and tracking fixed before we scale your traffic.</p>
              </article>
              <article className="kpi" data-anim style={{ '--ay': '40px', '--ad': '.24s' }}>
                <span className="kpi__i">05</span>
                <p className="kpi__value"><span className="kpi__num"><span data-count="100">100</span>%</span></p>
                <h3 className="kpi__title">Yours to keep</h3>
                <p className="kpi__text">Every account, dataset and document in your name. Stop on 30 days' notice.</p>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* ============================ ENGAGEMENT ============================ */}
      <section className="section" id="engagement" aria-labelledby="engagement-h">
        <div className="container">
          <div className="pricing__head">
            <span className="badge" data-anim>How engagements work</span>
            <h2 className="h2" id="engagement-h" data-anim style={{ '--ay': '50px' }}><span className="grad">One engagement,</span> <span className="grad-v">built around your store</span></h2>
            <p className="pricing__intro" data-anim>We don't sell packages or plans. Every engagement is scoped to what your store actually needs, so you never pay for work you don't need and never miss work you do.</p>
          </div>
          <div className="engage">
            <div className="engage__grid">
              <div className="engage__col" data-anim style={{ '--ay': '40px', '--ad': '0s' }}>
                <p className="engage__pillar"><span><svg className="ic"><use href="/assets/icons.svg#i-layers"/></svg></span>Build</p>
                <h3 className="engage__head">A store that sells and measures</h3>
                <ul className="plan__list"><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Website and Shopify builds</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Custom Shopify development</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Store catalogue and product data</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Platform migration</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Speed and mobile optimisation</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Conversion tracking setup</li></ul>
              </div>
              <div className="engage__col" data-anim style={{ '--ay': '40px', '--ad': '.08s' }}>
                <p className="engage__pillar"><span><svg className="ic"><use href="/assets/icons.svg#i-rocket"/></svg></span>Scale</p>
                <h3 className="engage__head">The right people finding it</h3>
                <ul className="plan__list"><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>SEO: technical and content</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>AEO: the answer box</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>GEO: AI assistants</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Google Search, Shopping and PMax</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Meta and Instagram ads</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Product feed management</li></ul>
              </div>
              <div className="engage__col" data-anim style={{ '--ay': '40px', '--ad': '.16s' }}>
                <p className="engage__pillar"><span><svg className="ic"><use href="/assets/icons.svg#i-repeat"/></svg></span>Succeed</p>
                <h3 className="engage__head">Visitors who buy and come back</h3>
                <ul className="plan__list"><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Conversion rate optimisation</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>A/B tests and page rebuilds</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Klaviyo email and SMS flows</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>WhatsApp campaigns</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Segmentation and lifecycle reporting</li><li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Monthly report and strategy call</li></ul>
              </div>
            </div>
            <div className="engage__foot" data-anim style={{ '--ay': '40px' }}>
              <div className="engage__ask">
                <p className="engage__ask-title">Need something that isn't listed?</p>
                <p className="engage__ask-text">Ask. Catalogue setup, one-off fixes, integrations and anything else your store needs are scoped the same way. Start with one service or all of them.</p>
                <ul className="engage__promises">
                  <li><svg className="ic"><use href="/assets/icons.svg#i-clipboard-check"/></svg>Scope agreed in writing before work starts</li>
                  <li><svg className="ic"><use href="/assets/icons.svg#i-key-round"/></svg>Every account in your name</li>
                  <li><svg className="ic"><use href="/assets/icons.svg#i-calendar"/></svg>Ongoing work stops on 30 days' notice</li>
                </ul>
              </div>
              <div className="engage__cta">
                <a className="btn btn--dark" href="#contact"><span className="btn__roll"><span>Get your free teardown</span><span aria-hidden="true">Get your free teardown</span></span><svg className="ic ic--arrow"><use href="/assets/icons.svg#i-arrow-right"/></svg></a>
                <p className="engage__small">Free, no obligation. <Link href="/terms/">Terms apply</Link>.</p>
              </div>
            </div>
          </div>
          <p className="pricing__line" data-anim>Not sure what you need? That's what the <a href="#contact">free teardown</a> is for. We'll look at your store and tell you what would actually help — including if the answer is nothing.</p>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="section" id="faq" aria-labelledby="faq-h" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge" data-anim>Questions</span>
            <h2 className="h2" id="faq-h" data-anim style={{ '--ay': '50px', maxWidth: '760px' }}><span className="grad">Things people ask</span> <span className="grad-v">before they call</span></h2>
          </div>
          <div className="faq" data-acc="single">
          <div className="faq-item is-open" data-anim style={{ '--ay': '60px' }}><button className="faq-item__btn" type="button" aria-expanded="true"><h3>What does an ecommerce growth agency do?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>An ecommerce growth agency improves the three things that drive online revenue: the store itself, the traffic that reaches it, and how many visitors buy and come back. Trinity Deck does all three with one team — Shopify development, SEO, AEO, GEO, Google and Meta ads, conversion rate optimisation and retention marketing.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '65px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How much does it cost to work with a Shopify growth agency?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>It depends on what your store needs, so we don't publish packages. After a free teardown we send a written scope listing the work, the order we'd do it in and the dates. Nothing starts until you approve it, and nothing in it changes without your written agreement.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '70px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How long does a Shopify store build take?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Most Shopify builds ship in seven to fifteen working days from the day we have all your content and access. The clock starts then, not at signature. How quickly approvals come back is the biggest factor in which end of that range you land on.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Can you work with my existing Shopify theme, or do you rebuild?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>We work inside your existing theme wherever it's sound. Replacing a working theme is usually the expensive answer to a cheap problem, and a clean theme is often what your page speed depends on. If a rebuild is genuinely the right call, we'll tell you why.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How long does ecommerce SEO take to show results?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Technical fixes usually register within two to six weeks. Meaningful ranking and traffic growth takes three to six months, longer in competitive categories, because search engines have to recrawl, reassess and trust a site before they move it. Anyone promising faster is describing something that doesn't happen.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>What are AEO and GEO, and does my store need them?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>AEO (answer engine optimisation) gets your store quoted in Google's answer box. GEO (generative engine optimisation) gets your brand cited when someone asks ChatGPT, Perplexity or Gemini for a recommendation. Buyers now use all three surfaces alongside normal search, and most stores are only set up for the first.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Why do Google and Meta ads take 60 to 90 days to judge?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Both platforms need conversion data before their systems can work out who is likely to buy. On a new account the algorithm is effectively guessing, so the first 30 to 60 days are volatile by design. Cost per sale usually stabilises after that, which is when results can be judged fairly.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Do you guarantee a return on ad spend?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>No, and be wary of anyone who does. Return on ad spend depends on your product, pricing, margins, stock, shipping times, competitors and platform policy — things we influence but don't control. What we commit to is showing you exactly what we did, what the numbers did, and what we're changing next.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Who owns the website, ad accounts and data you set up?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>You do, entirely. Every account is created in your name, nothing is locked to our email, and handover includes full documentation and a recorded walkthrough. You could move everything to another team tomorrow without asking us for anything.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>What is a free store teardown?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>A recorded ten-minute review of your store. We point out three specific things costing you orders and one you can fix yourself without us. It's free, it doesn't commit you to anything, and we only look at what's publicly visible on your site.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Do you work with ecommerce brands outside India?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Yes. Most of our work is with brands in the United States, United Kingdom, Belgium, the Netherlands and Australia. We're based in Bengaluru, which puts our working day across the US morning and the whole UK afternoon.</p></div></div></div>
          <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Can I stop working with you at any time?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Yes. Ongoing work can be stopped with 30 days' notice, for any reason and without a penalty. We'll ask why, but you don't have to tell us. Project work is paid half up front and half on completion, so you're never far ahead of what you've received.</p></div></div></div>
          </div>
        </div>
      </section>

        <Contact />
      </main>
      <Footer page="home" />
      <SiteEffects />
    </>
  );
}
