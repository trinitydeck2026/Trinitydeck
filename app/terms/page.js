import Link from "next/link";
import { LegalPage } from "@/components/Legal";

export const metadata = {
  title: "Terms of Service | Trinity Deck",
  description: "The terms that govern use of trinitydeck.com, the booking page and the free store teardown offer.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage path="/terms/" title="Terms of Service" intro="The terms for using this website, booking a call and the free store teardown. Paid work is covered by a separate signed agreement.">
      <h2 id="who-we-are">1. Who we are and what these terms cover</h2>
      <p>This website is operated by Trinity Deck, the trading name of a sole proprietorship carried on by Sandeep Halemani, of Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India.</p>
      <p>These terms govern your use of www.trinitydeck.com, the booking page and the free teardown offer. They do not govern paid work. If you engage us, that engagement is governed by a separate written services agreement and statement of work, and where those conflict with these terms, they take precedence.</p>

      <h2 id="accepting">2. Accepting these terms</h2>
      <p>By using this website you accept these terms. If you do not accept them, please do not use the site.</p>

      <h2 id="purpose">3. What the website is for</h2>
      <p>The website describes our services and lets you get in touch. Everything on it is provided for general information. It is not professional, legal, financial or tax advice, and you should not act on it without advice that takes account of your own circumstances.</p>
      <p>Any figure, benchmark or timescale we publish is an informed estimate based on our own work, not a promise about what you will achieve. We do not guarantee search rankings, advertising returns, revenue or any other outcome, and nothing on this site should be read as guaranteeing one.</p>

      <h2 id="teardown">4. The free teardown</h2>
      <p>We offer to record a short review of a website you send us. So that expectations are the same on both sides:</p>
      <ul>
        <li>It is free, and it does not create a contract or any ongoing obligation on either side.</li>
        <li>By sending us a URL you confirm you are authorised to ask us to review that site.</li>
        <li>We review only what is publicly visible. We do not attempt to access anything that requires a login, and we do not test, probe or scan your systems.</li>
        <li>Our findings are our opinion, given quickly and without full information about your business. Check anything before acting on it.</li>
        <li>We may decline to carry one out, and we may stop offering it at any time.</li>
        <li>We will not publish your teardown, name you or show your site publicly without your written permission.</li>
      </ul>

      <h2 id="booking">5. Booking a call</h2>
      <p>Our booking page is provided by Cal.com. When you book, your details go to Cal.com as well as to us, subject to our <Link href="/privacy/">Privacy Policy</Link> and Cal.com's own terms. Booking a call is not an agreement to buy anything and neither of us is committed to anything by it.</p>

      <h2 id="acceptable-use">6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for anything unlawful, or in a way that breaches anyone's rights.</li>
        <li>Submit false information, impersonate anyone, or send content that is defamatory, obscene, infringing or malicious.</li>
        <li>Introduce viruses or any other harmful code.</li>
        <li>Attempt to gain unauthorised access to the site, its servers, or any connected system.</li>
        <li>Scrape, harvest or systematically extract data from the site, or use it to train a machine learning model, without our written permission.</li>
        <li>Interfere with the site's operation, including by placing it under unreasonable load.</li>
      </ul>

      <h2 id="ip">7. Intellectual property</h2>
      <p>All content on this site — text, layout, graphics, the Trinity Deck name and logo, and the frameworks and methods we describe — belongs to us or is used under licence, and is protected by copyright and trade mark law.</p>
      <p>You may read, download and print pages for your own business use, including to compare us against another supplier. You may not republish, sell or redistribute our content, or use our name or logo, without our written permission. Quoting us with a clear credit and a link is fine.</p>
      <p>Where we deliver work under a signed engagement, ownership of that work transfers to you on final payment, as set out in that agreement. Nothing in these website terms changes that.</p>

      <h2 id="links">8. Links to other sites</h2>
      <p>We link to third-party websites and tools where they are useful. We do not control them and are not responsible for their content, their security or their privacy practices. A link is not an endorsement.</p>

      <h2 id="availability">9. Availability</h2>
      <p>We try to keep the site available but we do not promise it will be uninterrupted or error-free. We may change, suspend or withdraw any part of it at any time without notice.</p>

      <h2 id="liability">10. Our liability</h2>
      <p>Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be limited.</p>
      <p>Subject to that, we are not liable for any loss of profit, loss of business, loss of goodwill, loss of data, or any indirect or consequential loss arising from your use of this website or from anything you do or do not do because of information on it. Our total liability in connection with this website and the free teardown is limited to INR 10,000.</p>
      <p>Liability for paid work is dealt with separately in the services agreement for that engagement, and this clause does not limit or replace it.</p>

      <h2 id="indemnity">11. Indemnity</h2>
      <p>If you breach Section 6, you agree to reimburse us for any reasonable loss or cost we incur as a direct result.</p>

      <h2 id="privacy">12. Privacy</h2>
      <p>How we handle personal data is set out in our <Link href="/privacy/">Privacy Policy</Link> and <Link href="/cookies/">Cookie Policy</Link>, which form part of these terms.</p>

      <h2 id="changes">13. Changes to these terms</h2>
      <p>We may update these terms. The version in force is the one published here, with the date at the top. Continuing to use the site after a change means you accept the updated version.</p>

      <h2 id="governing-law">14. Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts at Bengaluru, Karnataka have exclusive jurisdiction over any dispute about them.</p>
      <p>If you are a consumer resident in the United Kingdom or the European Economic Area, this does not deprive you of the protection of the mandatory consumer law of the country where you live, or of your right to bring proceedings there.</p>

      <h2 id="general">15. General</h2>
      <p>If any part of these terms is found unenforceable, the rest continues to apply. A delay in enforcing a term is not a waiver of it. These terms are between you and us, and nobody else can enforce them.</p>

      <h2 id="contact">16. Contact</h2>
      <p>Trinity Deck · Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India · <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a></p>
    </LegalPage>
  );
}
