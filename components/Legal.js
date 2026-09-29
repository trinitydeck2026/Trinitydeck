import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export const LAST_UPDATED = "29 September 2026";

const PAGES = [
  ["/privacy/", "Privacy Policy"],
  ["/cookies/", "Cookie Policy"],
  ["/terms/", "Terms of Service"],
];

/* Shared shell for the Privacy, Cookie and Terms pages: same nav, hero and footer as the rest of the site. */
export function LegalPage({ path, title, intro, children }) {
  return (
    <>
      <Nav page="legal" currentPath={path} />
      <main id="main">
        <header className="frame hero legal-hero" id="home">
          <div className="art-bg" aria-hidden="true"><div className="art-bg__mark"></div><div className="art-bg__grain"></div></div>
          <div className="hero__inner">
            <span className="badge badge--icon hero__badge load-in" style={{ "--ad": ".1s" }}><img src="/assets/img/mark.webp" alt="" width="18" height="18" />Legal</span>
            <h1 className="h1 hero__title"><span className="rise"><span className="grad" style={{ "--ad": ".15s" }}>{title}</span></span></h1>
            <p className="hero__sub load-in" style={{ "--ad": ".35s" }}>{intro}</p>
            <p className="hero__micro load-in" style={{ "--ad": ".45s" }}>Last updated: <time dateTime="2026-09-29">{LAST_UPDATED}</time></p>
          </div>
        </header>
        <article className="container legal">
          <nav className="legal__toc" aria-label="Legal pages">
            {PAGES.map(([href, label]) => (
              <Link href={href} key={href} aria-current={href === path ? "page" : undefined}>{label}</Link>
            ))}
          </nav>
          {children}
        </article>
      </main>
      <Footer page="legal" />
      <SiteEffects />
    </>
  );
}

/* Scrollable table used throughout the legal pages. rows: array of arrays of cells. */
export function Table({ head, rows }) {
  return (
    <div className="legal__table">
      <table>
        <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export const ENTITY = "Trinity Deck is the trading name of a sole proprietorship carried on by Sandeep Halemani, with its principal place of business at Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India";
