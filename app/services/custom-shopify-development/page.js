import Link from "next/link";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SiteEffects from "@/components/SiteEffects";
import schema from "@/data/schema-shopify.json";

const TITLE = "Custom Shopify Development — done inside a theme that stays fast";
const DESC = "Theme customisation, custom functionality, app integration and migrations. We don't replace what already works, because your page speed usually depends on it.";

export const metadata = {
  title: "Custom Shopify Development — Themes, Apps, Migrations | Trinity Deck",
  description: "Theme customisation, custom functionality, app integration and migrations — done inside a theme that stays fast. Fixed price, fixed date, full handover.",
  alternates: { canonical: "/services/custom-shopify-development/" },
  openGraph: { type: "website", url: "/services/custom-shopify-development/", siteName: "Trinity Deck", title: TITLE, description: DESC, images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og-image.jpg"] },
};

export default function CustomShopifyDevelopmentPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav page="service" currentPath="/services/custom-shopify-development/" />
      <main id="main">
      {/* ============================ HERO ============================ */}
      <header className="frame hero svc-hero" id="home">
        <div className="art-bg" aria-hidden="true"><div className="art-bg__mark"></div><div className="art-bg__grain"></div></div>
        <div className="hero__inner">
          <nav className="crumbs load-in" aria-label="Breadcrumb" style={{ '--ad': '.05s' }}>
            <Link href="/">Home</Link><svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg>
            <Link href="/#services">Services</Link><svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg>
            <span aria-current="page">Custom Shopify Development</span>
          </nav>
          <span className="badge badge--icon hero__badge load-in" style={{ '--ad': '.1s' }}><img src="/assets/img/mark-dark.webp" alt="" width="18" height="18" />Build · Service 02</span>
          <h1 className="h1 hero__title">
            <span className="rise"><span className="grad" style={{ '--ad': '.15s' }}>Custom Shopify</span></span>
            <span className="rise"><span style={{ '--ad': '.27s' }}><span className="grad">Development</span>
              <span className="pill3d" aria-hidden="true">
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-shopping-bag"/></svg></span>
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-code"/></svg></span>
                <span className="pill3d__tile"><svg className="ic"><use href="/assets/icons.svg#i-gauge"/></svg></span>
              </span></span></span>
          </h1>
          <p className="hero__sub load-in" style={{ '--ad': '.45s' }}>Theme customisation, custom functionality, app integration and migrations — done inside a theme that stays fast. We don't replace what already works, because your page speed usually depends on it.</p>
          <div className="hero__ctas load-in" style={{ '--ad': '.58s' }}>
            <a className="btn btn--dark" href="https://cal.com/trinitydeckoffical/30min" target="_blank" rel="noopener"><span className="btn__roll"><span>Get a free teardown</span><span aria-hidden="true">Get a free teardown</span></span></a>
            <a className="btn btn--light" href="#contact"><span className="btn__roll"><span>Talk to us about this</span><span aria-hidden="true">Talk to us about this</span></span></a>
          </div>
          <p className="hero__micro load-in" style={{ '--ad': '.7s' }}>10 minutes. Three specific things costing you orders. One you can fix yourself without us.</p>
        </div>
      </header>

      {/* Oversized media card that breaks out of the hero, as in the reference detail page */}
      <div className="svc-shot load-in" style={{ '--ad': '.8s' }} aria-hidden="true">
        <div className="svc-shot__inner">
          <div className="mock mock--blue">
            <div className="win" style={{ maxWidth: '820px' }}>
              <div className="win__bar"><i></i><i></i><i></i><span className="win__url">Online Store · Themes · Customise</span></div>
              <div className="win__body svc-shot__grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '16px' }}>
                <div className="checklist">
                  <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Theme sections</div>
                  <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Metafields</div>
                  <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>App blocks</div>
                  <div className="check-row ok"><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Tracking stack</div>
                </div>
                <div className="pgrid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="pcard"><span className="tag tag--good">In stock</span><div className="pcard__img"></div><b></b><em></em></div>
                  <div className="pcard"><span className="tag tag--good">In stock</span><div className="pcard__img"></div><b></b><em></em></div>
                  <div className="pcard"><span className="tag tag--good">In stock</span><div className="pcard__img"></div><b></b><em></em></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ DETAILS ============================ */}
      <section className="section" aria-labelledby="details-h">
        <div className="container">
          <div className="svc-intro">
            <div>
              <span className="badge" data-anim>What this covers</span>
              <h2 className="h2" id="details-h" data-anim style={{ '--ay': '50px', marginTop: '24px' }}><span className="grad">Inside your theme,</span> <span className="grad-v">not instead of it</span></h2>
            </div>
            <div data-anim>
              <p>Custom Shopify development is the Build stage for stores that already exist. Theme customisation, custom functionality, app integration, platform migration, speed optimisation and metafield architecture, for Shopify and Shopify Plus stores.</p>
              <p>We work inside your existing theme wherever it's sound. Replacing a working theme is usually the expensive answer to a cheap problem, and a clean theme is often what your page speed depends on. We'll tell you honestly if a rebuild is genuinely the right call.</p>
              <p>Nothing launches with broken tracking. If we can't measure it, we didn't build it.</p>
            </div>
          </div>
          <div className="svc-meta" data-anim>
            <div><p className="meta-label">Deliverables</p>
              <ul className="pills"><li className="pill">Theme customisation</li><li className="pill">Custom functionality</li><li className="pill">App integration</li><li className="pill">Platform migration</li><li className="pill">Speed optimisation</li><li className="pill">Metafield architecture</li></ul></div>
            <div><p className="meta-label">Pillar</p><ul className="pills"><li className="pill">Build</li></ul></div>
            <div><p className="meta-label">Timescale</p><ul className="pills"><li className="pill">7–15 working days</li></ul></div>
          </div>

          <ul className="incl-grid">
            <li className="incl" data-anim style={{ '--ay': '30px' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-sliders-horizontal"/></svg></span><span className="incl__num">(01)</span></div>
              <h3 className="incl__title">Theme customisation</h3>
              <p className="incl__text">Changes made inside the theme you already run, so what works keeps working and the pages stay fast.</p>
            </li>
            <li className="incl" data-anim style={{ '--ay': '30px', '--ad': '.08s' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-code"/></svg></span><span className="incl__num">(02)</span></div>
              <h3 className="incl__title">Custom functionality</h3>
              <p className="incl__text">The features your store needs, built into the theme rather than bolted on, and documented at handover.</p>
            </li>
            <li className="incl" data-anim style={{ '--ay': '30px', '--ad': '.16s' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-puzzle"/></svg></span><span className="incl__num">(03)</span></div>
              <h3 className="incl__title">App integration</h3>
              <p className="incl__text">The apps you rely on, wired in properly — and checked against page speed before they go live.</p>
            </li>
            <li className="incl" data-anim style={{ '--ay': '30px' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-arrow-left-right"/></svg></span><span className="incl__num">(04)</span></div>
              <h3 className="incl__title">Platform migration</h3>
              <p className="incl__text">Moving to Shopify with product data, redirects and rankings protected. Migration and rank recovery sit with our SEO work.</p>
            </li>
            <li className="incl" data-anim style={{ '--ay': '30px', '--ad': '.08s' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-gauge"/></svg></span><span className="incl__num">(05)</span></div>
              <h3 className="incl__title">Speed optimisation</h3>
              <p className="incl__text">Your page speed usually depends on a clean theme. We keep it that way, and fix whatever is slowing it down.</p>
            </li>
            <li className="incl" data-anim style={{ '--ay': '30px', '--ad': '.16s' }}>
              <div className="incl__top"><span className="incl__ic"><svg className="ic"><use href="/assets/icons.svg#i-database"/></svg></span><span className="incl__num">(06)</span></div>
              <h3 className="incl__title">Metafield architecture</h3>
              <p className="incl__text">Structured product data that powers filters, structured data and your Google Merchant Center feed.</p>
            </li>
          </ul>

          <div className="split">
            <article className="split__card split__card--dark" data-anim style={{ '--ay': '40px' }}>
              <h3>What every engagement includes</h3>
              <p>The same standard, whatever the size of the job.</p>
              <ul>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>A fixed price and a fixed date before any work starts</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Conversion tracking live and verified with a test purchase before launch</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Speed and mobile QA</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Every account in your name</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>Documented handover and recorded walkthrough</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-check"/></svg></span>14 days post-launch support</li>
              </ul>
            </article>
            <article className="split__card split__card--light" data-anim style={{ '--ay': '40px', '--ad': '.1s' }}>
              <h3>What we won't do</h3>
              <p>Saying it now saves both of us a difficult conversation later.</p>
              <ul>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-x"/></svg></span>Replace a working theme when the problem is cheap to fix</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-x"/></svg></span>Guarantee rankings, revenue or return on ad spend</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-x"/></svg></span>Lock anything to our email or our accounts</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-x"/></svg></span>Produce original video, photography or brand identity design</li>
                <li><span className="tick"><svg className="ic"><use href="/assets/icons.svg#i-x"/></svg></span>Change the price or the date without your written approval</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="section" aria-labelledby="svc-process-h" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="process">
            <div>
              <span className="badge" data-anim>How it runs</span>
              <h2 className="h2" id="svc-process-h" data-anim style={{ '--ay': '50px', marginTop: '24px' }}><span className="grad">Scoped, built,</span> <span className="grad-v">handed over</span></h2>
              <p className="process__intro" data-anim>Most builds ship in seven to fifteen working days from the day we have all your content and access. The clock starts then, not at signature.</p>
              <div className="process__arrows" data-anim style={{ '--ay': '50px' }}>
                <button className="arrow-btn" type="button" data-prev aria-label="Previous step" disabled><svg className="ic"><use href="/assets/icons.svg#i-arrow-left"/></svg></button>
                <button className="arrow-btn" type="button" data-next aria-label="Next step"><svg className="ic"><use href="/assets/icons.svg#i-arrow-right"/></svg></button>
              </div>
            </div>
            <div className="process__viewport">
              <ol className="process__track" data-slider>
                <li className="step" data-anim="left">
                  <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-search"/></svg></span>
                  <h3 className="step__title">Teardown and quote</h3>
                  <p className="step__body">We look at your store and tell you what we'd do first. Then a fixed scope, a fixed price and a fixed date — before any work starts.</p>
                  <div className="step__foot"><span className="chip-outline">Before we start</span><span className="step__num">01<span>/03</span></span></div>
                </li>
                <li className="step" data-anim="left" style={{ '--ad': '.1s' }}>
                  <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-code"/></svg></span>
                  <h3 className="step__title">Build inside your theme</h3>
                  <p className="step__body">Theme work, functionality, apps and metafields, with tracking installed and verified with a test purchase. How fast approvals come back decides which end of the range you land on.</p>
                  <div className="step__foot"><span className="chip-outline">7–15 working days</span><span className="step__num">02<span>/03</span></span></div>
                </li>
                <li className="step" data-anim="left" style={{ '--ad': '.2s' }}>
                  <span className="step__ic"><svg className="ic"><use href="/assets/icons.svg#i-key-round"/></svg></span>
                  <h3 className="step__title">Hand over</h3>
                  <p className="step__body">Full documentation and a recorded walkthrough, everything in your name, and 14 days of post-launch support. You could take all of it elsewhere tomorrow.</p>
                  <div className="step__foot"><span className="chip-outline">14 days support</span><span className="step__num">03<span>/03</span></span></div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ DARK PANEL: RELATED WORK + NEXT ============================ */}
      <div className="panel-black">
        <div className="spot" aria-hidden="true"></div>
        <section className="team" aria-labelledby="related-h">
          <div className="container">
            <div className="team__head">
              <span className="badge badge--dark" data-anim>Where this has been used</span>
              <h2 className="h2" id="related-h" data-anim style={{ '--ay': '50px', maxWidth: '820px' }}><span className="grad-light">A store that couldn't take a single order</span></h2>
              <p className="team__sub" data-anim>Victoria's Bliss · Beauty · Belgium</p>
            </div>
            <div className="split" style={{ marginTop: '56px' }}>
              <article className="member" data-anim style={{ '--ay': '40px' }}>
                <p className="stat__label">Problem</p>
                <p className="member__bio" style={{ fontSize: '17px', lineHeight: '26px', color: '#d4d4d8', maxWidth: 'none' }}>128 product variants. Not one of them could be added to a basket. Google was told every item was out of stock, so nothing appeared in Shopping. The basket page still showed the theme's demo content in US dollars.</p>
              </article>
              <article className="member" data-anim style={{ '--ay': '40px', '--ad': '.1s' }}>
                <p className="stat__label">What we did</p>
                <p className="member__bio" style={{ fontSize: '17px', lineHeight: '26px', color: '#d4d4d8', maxWidth: 'none' }}>Supplier mapping and inventory sync, catalogue restructure across 58 products, theme fixes, the full tracking stack, structured data, and a corrected Merchant Center feed.</p>
                <div className="member__links"><span className="status" style={{ background: 'rgba(110,168,255,.12)', color: '#6ea8ff' }}><span className="live-dot"></span>Results publishing after Phase 1</span></div>
              </article>
            </div>
            <div style={{ textAlign: 'center', marginTop: '36px' }} data-anim><Link className="btn btn--light" href="/#work"><span className="btn__roll"><span>See all work</span><span aria-hidden="true">See all work</span></span></Link></div>
          </div>
        </section>

        <section className="results" aria-labelledby="next-h">
          <div className="container">
            <div className="results__rule"></div>
            <div style={{ paddingTop: '56px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
              <span className="badge badge--dark" data-anim>Next in the order</span>
              <h2 className="h2" id="next-h" data-anim style={{ '--ay': '50px' }}><span className="grad-light">Build. Scale. Succeed.</span></h2>
              <p className="team__sub" data-anim>Three stages, eight services, one team. Take one or take all of them — but in this order, because each one makes the next one work.</p>
            </div>
            <div className="next-svc">
              <Link href="/#svc-website-development" data-anim style={{ '--ay': '30px', background: '#18181b', color: '#fff', boxShadow: 'var(--sh-card-dark)' }}><small>BUILD</small><b>Website Development</b><svg className="ic"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></Link>
              <Link href="/#svc-seo" data-anim style={{ '--ay': '30px', '--ad': '.06s', background: '#18181b', color: '#fff', boxShadow: 'var(--sh-card-dark)' }}><small>SCALE</small><b>SEO</b><svg className="ic"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></Link>
              <Link href="/#svc-performance-marketing" data-anim style={{ '--ay': '30px', '--ad': '.12s', background: '#18181b', color: '#fff', boxShadow: 'var(--sh-card-dark)' }}><small>SCALE</small><b>Performance Marketing</b><svg className="ic"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></Link>
              <Link href="/#svc-cro" data-anim style={{ '--ay': '30px', '--ad': '.18s', background: '#18181b', color: '#fff', boxShadow: 'var(--sh-card-dark)' }}><small>SUCCEED</small><b>Conversion Rate Optimisation</b><svg className="ic"><use href="/assets/icons.svg#i-arrow-up-right"/></svg></Link>
            </div>
          </div>
        </section>
      </div>

      {/* ============================ FAQ ============================ */}
      <section className="section" id="faq" aria-labelledby="faq-h">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge" data-anim>Questions</span>
            <h2 className="h2" id="faq-h" data-anim style={{ '--ay': '50px', maxWidth: '760px' }}><span className="grad">Things people ask</span> <span className="grad-v">before they call</span></h2>
          </div>
          <div className="faq" data-acc="single">
            <div className="faq-item is-open" data-anim style={{ '--ay': '60px' }}><button className="faq-item__btn" type="button" aria-expanded="true"><h3>Can you work with our existing theme, or do you rebuild?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>We work inside your existing theme wherever it's sound. Replacing a working theme is usually the expensive answer to a cheap problem, and a clean theme is often what your page speed depends on. We'll tell you honestly if a rebuild is genuinely the right call.</p></div></div></div>
            <div className="faq-item" data-anim style={{ '--ay': '65px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How much does a Shopify store build cost?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Builds start from around £1,500 for a focused store and rise with page count, product count and integrations. The number moves on scope, not on hours. We quote a fixed price and a fixed date before any work starts, and we don't change either without your written approval.</p></div></div></div>
            <div className="faq-item" data-anim style={{ '--ay': '70px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How long does a Shopify build take?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Most builds ship in seven to fifteen working days from the day we have all your content and access. The clock starts then, not at signature. How fast approvals come back is the single biggest factor in which end of that range you land on.</p></div></div></div>
            <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>Who owns the website and accounts you build?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>You do, entirely. Every account is created in your name, nothing is locked to our email, and handover includes full documentation and a recorded walkthrough. You could take all of it elsewhere tomorrow without asking us for anything.</p></div></div></div>
            <div className="faq-item" data-anim style={{ '--ay': '75px' }}><button className="faq-item__btn" type="button" aria-expanded="false"><h3>How do I cancel if it isn't working?</h3><span className="faq-item__icon" aria-hidden="true"></span></button><div className="faq-item__panel"><div><p>Any monthly service can be cancelled on 30 days' notice, for any reason, without penalty. We'll ask why, but you don't have to tell us. One-time work is paid half up front and half on completion, so you're never more than half exposed on work not yet delivered.</p></div></div></div>
          </div>
        </div>
      </section>

        <Contact defaultNeed="Fixing an existing store" />
      </main>
      <Footer page="service" />
      <SiteEffects />
    </>
  );
}
