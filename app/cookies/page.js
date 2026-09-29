import Link from "next/link";
import { LegalPage, Table } from "@/components/Legal";

export const metadata = {
  title: "Cookie Policy | Trinity Deck",
  description: "The cookies and similar technologies trinitydeck.com uses, what each one does, how long it lasts, and how to change your choice at any time.",
  alternates: { canonical: "/cookies/" },
};

const HEAD = ["Cookie", "Set by", "Purpose", "Expires"];

export default function CookiesPage() {
  return (
    <LegalPage path="/cookies/" title="Cookie Policy" intro="Which cookies this site uses, what each one does, how long it lasts, and how to change your choice whenever you like.">
      <h2 id="what-cookies-are">1. What cookies are</h2>
      <p>A cookie is a small text file a website stores on your device. Cookies let a site remember things between visits, and let us understand which pages are working. Some are set by us and some by the providers in the table below. We use the word “cookies” here to cover similar technologies too, such as pixels, local storage and session recording scripts.</p>

      <h2 id="your-choice">2. Your choice</h2>
      <p>When you first visit trinitydeck.com you will see a cookie banner. Only the strictly necessary cookies are set before you make a choice. Nothing in the analytics, behaviour or marketing categories loads unless you accept it, and you can change or withdraw your choice at any time using the <button type="button" className="footer__cookie-btn" data-consent-open>Cookie settings</button> link in the footer.</p>

      <h2 id="cookies-we-use">3. The cookies we use</h2>
      <p className="legal__label">Strictly necessary — always on</p>
      <p>These make the site work and cannot be switched off.</p>
      <Table head={HEAD} rows={[
        ["Consent record", "Trinity Deck", "Remembers your cookie choices so we do not ask again on every page.", "12 months"],
        ["Session and security", "Vercel", "Keeps the site available, balances load and blocks abusive traffic.", "Session"],
      ]} />

      <p className="legal__label">Analytics — only with your consent</p>
      <p>These tell us which pages are read and where people leave.</p>
      <Table head={HEAD} rows={[
        ["_ga, _ga_*", "Google Analytics 4", "Distinguishes visitors and sessions so we can count how many people use the site and which pages they read.", "Up to 13 months"],
        ["Google Tag Manager", "Google", "Loads and controls the tags above, according to your consent choices.", "No cookie of its own"],
      ]} />

      <p className="legal__label">Behaviour — only with your consent</p>
      <p>These show us where a page confuses people.</p>
      <Table head={HEAD} rows={[
        ["_clck, _clsk", "Microsoft Clarity", "Records an anonymised replay of how a page was used and builds heatmaps. Text you type into forms is masked and is not recorded.", "Up to 12 months"],
      ]} />

      <p className="legal__label">Marketing — only with your consent</p>
      <p>These tell us whether our advertising produced an enquiry.</p>
      <Table head={HEAD} rows={[
        ["_fbp, fr", "Meta Pixel", "Measures whether an advert on Facebook or Instagram led to an enquiry, and allows us to show adverts to people who have visited the site.", "Up to 3 months"],
        ["_gcl_*", "Google Ads", "Measures whether a Google advert led to an enquiry.", "Up to 90 days"],
      ]} />

      <p className="legal__label">Functional — only with your consent</p>
      <p>These make an embedded feature work.</p>
      <Table head={HEAD} rows={[
        ["Booking embed", "Cal.com", "Runs the booking calendar on our contact section and remembers your time zone while you book.", "Session to 12 months"],
      ]} />
      <p>Google Search Console is used on this site but sets no cookie on your device — it verifies ownership through a file or DNS record and reports only aggregate search data to us.</p>

      <h2 id="turning-off">4. Turning cookies off</h2>
      <p>Use the <button type="button" className="footer__cookie-btn" data-consent-open>Cookie settings</button> link in our footer to change your choices at any time. You can also block or delete cookies in your browser settings, though some parts of the site may then not work as intended. To opt out of Google Analytics across all websites, install Google's browser add-on at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">tools.google.com/dlpage/gaoptout</a>.</p>

      <h2 id="changes">5. Changes</h2>
      <p>If we add or remove a tool, we update this page and the date at the top. If the change involves a new non-essential cookie, we will ask for your consent again.</p>

      <h2 id="contact">6. Contact</h2>
      <p>Questions about cookies: <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a>.</p>
      <p>See also our <Link href="/privacy/">Privacy Policy</Link> and <Link href="/terms/">Terms of Service</Link>.</p>
    </LegalPage>
  );
}
