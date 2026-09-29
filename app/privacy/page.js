import Link from "next/link";
import { LegalPage, Table, ENTITY } from "@/components/Legal";

export const metadata = {
  title: "Privacy Policy | Trinity Deck",
  description: "How Trinity Deck collects, uses, shares and protects personal data from our website, bookings, enquiries and marketing, and the rights you have over it.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage path="/privacy/" title="Privacy Policy" intro="What we collect when you use our website, contact us or book a call, why we collect it, who else sees it, and the rights you have over it.">
      <h2 id="who-we-are">1. Who we are</h2>
      <p>{ENTITY} (“Trinity Deck”, “we”, “us”, “our”).</p>
      <p>We are the data controller for personal data collected through www.trinitydeck.com and through our own sales and marketing activity. Where we handle personal data on behalf of a client under a services agreement, that client is the controller and we act as a processor on their written instructions.</p>
      <p>For any question about this policy or about your personal data, contact <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a>. This address also reaches our Grievance Officer for the purposes of India's Digital Personal Data Protection Act, 2023.</p>

      <h2 id="scope">2. What this policy covers</h2>
      <p>This policy explains what we do with personal data we collect through our website, when you contact us or book a call, when we send you marketing, and when we approach a business about our services. It does not cover data we process inside a client's own systems under a signed services agreement — that is governed by the data processing terms in that agreement.</p>

      <h2 id="what-we-collect">3. What we collect</h2>
      <Table head={["Category", "What it includes", "How we get it"]} rows={[
        ["Enquiry details", "Your name, email address, your website or store URL, what you need help with, and anything you write in a message to us.", "You give it to us when you contact us."],
        ["Booking details", "Your name, email address, the time you select, your time zone, and anything you add when booking.", "You give it to us through our booking page, hosted by Cal.com."],
        ["Correspondence", "Emails, WhatsApp messages, call notes and anything else exchanged while we are talking about working together.", "You send it, or we record it during the conversation."],
        ["Website usage", "IP address (truncated where the tool allows), approximate location, browser and device, pages viewed, time on page, referring source, and how you move around a page.", "Collected automatically by the tools in Section 5, and only to the extent you have consented."],
        ["Business contact details", "Name, role, business email, company name and publicly available information about a business we think we can help.", "Public sources such as a company website, LinkedIn, or a public business directory."],
      ]} />
      <p>We do not ask for and do not want special category data — anything about health, ethnicity, religion, politics, trade union membership, sex life or biometrics. Please do not send it to us.</p>

      <h2 id="lawful-basis">4. Why we use it, and our lawful basis</h2>
      <p>Where the UK GDPR or EU GDPR applies to you, these are the lawful bases we rely on.</p>
      <Table head={["What we do", "Data used", "Lawful basis"]} rows={[
        ["Reply to your enquiry and prepare a proposal", "Enquiry details, correspondence", "Steps taken at your request before entering a contract (Art 6(1)(b))"],
        ["Run a free teardown of the website you sent us", "The URL you gave us, publicly available data about that site", "Steps taken at your request before entering a contract (Art 6(1)(b))"],
        ["Deliver and manage a signed engagement", "Contact and business details, correspondence", "Performance of a contract (Art 6(1)(b))"],
        ["Send you our newsletter or marketing updates", "Email address, name", "Your consent, which you can withdraw at any time (Art 6(1)(a))"],
        ["Approach a business about our services", "Business contact details", "Our legitimate interest in promoting our services to businesses likely to benefit (Art 6(1)(f)). You can object at any time and we will stop."],
        ["Understand how the website is used", "Website usage data", "Your consent, given through the cookie banner (Art 6(1)(a))"],
        ["Keep tax, accounting and contract records", "Transaction and contract records", "Compliance with a legal obligation (Art 6(1)(c))"],
        ["Establish, exercise or defend a legal claim", "Whatever is relevant to the claim", "Our legitimate interest in protecting our position (Art 6(1)(f))"],
        ["Keep the website secure and working", "IP address, server logs", "Our legitimate interest in keeping the site available and secure (Art 6(1)(f))"],
      ]} />

      <h2 id="tools">5. The tools we use, and who else sees your data</h2>
      <p>We do not sell personal data and we never will. We share it only with the providers below, each of which processes it on our behalf under contract, and with our accountants and professional advisers where required.</p>
      <Table head={["Provider", "What it does", "Where it processes data"]} rows={[
        ["Google (Analytics 4, Tag Manager, Search Console, Google Ads)", "Measures how the website is used and how our advertising performs.", "United States and other countries"],
        ["Meta Platforms (Meta Pixel)", "Measures whether our advertising on Facebook and Instagram leads to enquiries.", "United States and other countries"],
        ["Microsoft (Clarity)", "Records anonymised session replays and heatmaps so we can see where a page is confusing.", "United States and other countries"],
        ["Cal.com", "Runs the booking page and calendar.", "United States and the EU"],
        ["Vercel", "Hosts the website and keeps server logs.", "United States and other countries"],
      ]} />
      <p>Microsoft Clarity masks text input by default, so what you type into a form is not captured in a session recording. We do not disable that masking.</p>

      <h2 id="transfers">6. Sending data outside your country</h2>
      <p>We are based in India. If you are in the United Kingdom or the European Economic Area, your personal data will be transferred to and stored in India, and our providers may process it in the United States and elsewhere.</p>
      <p>India is not currently the subject of a UK or EU adequacy decision. Where we transfer personal data out of the UK or EEA we rely on the UK International Data Transfer Agreement or Addendum, or the European Commission's Standard Contractual Clauses, together with any additional safeguards those require. You can ask us for a copy of the mechanism we rely on by emailing <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a>.</p>

      <h2 id="retention">7. How long we keep it</h2>
      <Table head={["What", "How long"]} rows={[
        ["Enquiries that do not become clients", "24 months from our last contact, then deleted"],
        ["Client records, contracts and deliverables", "8 years after the engagement ends, to meet Indian tax and limitation requirements"],
        ["Financial and tax records", "As required by Indian law, currently 8 years"],
        ["Newsletter subscribers", "Until you unsubscribe, then we keep a suppression record so we do not email you again"],
        ["Website analytics", "14 months in Google Analytics 4; 30 days for Microsoft Clarity session recordings"],
        ["Server and security logs", "12 months"],
      ]} />

      <h2 id="rights">8. Your rights</h2>
      <p>Depending on where you live, you have some or all of the following rights over your personal data. We will not charge you for exercising them and we will respond within 30 days.</p>
      <ul>
        <li>Ask for a copy of the personal data we hold about you.</li>
        <li>Ask us to correct anything that is wrong or incomplete.</li>
        <li>Ask us to delete it, where we have no continuing reason to keep it.</li>
        <li>Ask us to restrict how we use it while a dispute is resolved.</li>
        <li>Object to us using it for our legitimate interests, including for marketing. If you object to marketing, we will stop.</li>
        <li>Ask us to send it to you or to another provider in a machine-readable format.</li>
        <li>Withdraw consent at any time, where we relied on consent. This does not affect anything we did before you withdrew it.</li>
        <li>Nominate someone to exercise these rights on your behalf in the event of your death or incapacity, if India's Digital Personal Data Protection Act, 2023 applies to you.</li>
      </ul>
      <p>To exercise any of these, email <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a>. We may ask you to confirm your identity first.</p>

      <h2 id="complaints">9. Complaints</h2>
      <p>If you are unhappy with how we have handled your data, please tell us first at <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a> so we can try to put it right. You also have the right to complain to a regulator:</p>
      <ul>
        <li>United Kingdom — the Information Commissioner's Office, <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a></li>
        <li>European Economic Area — the supervisory authority in the country where you live or work</li>
        <li>India — the Data Protection Board of India, once constituted under the Digital Personal Data Protection Act, 2023</li>
      </ul>

      <h2 id="security">10. Keeping your data safe</h2>
      <p>We use encrypted connections, access controls, multi-factor authentication on the accounts that hold client data, and we give each person access only to what their work requires. No system is perfectly secure, but if a breach affects your personal data and is likely to put you at risk, we will tell you and the relevant regulator without undue delay.</p>

      <h2 id="children">11. Children</h2>
      <p>Our website and services are for businesses. We do not knowingly collect personal data from anyone under 18. If you believe a child has given us personal data, email <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a> and we will delete it.</p>

      <h2 id="automated-decisions">12. Automated decisions</h2>
      <p>We do not make decisions about you by purely automated means that produce legal or similarly significant effects.</p>

      <h2 id="changes">13. Changes to this policy</h2>
      <p>We update this policy when what we do changes. The date at the top always shows the current version. If a change materially affects you, we will say so prominently on the website.</p>

      <h2 id="contact">14. Contact</h2>
      <p>Trinity Deck · Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India · <a href="mailto:contact@trinitydeck.com">contact@trinitydeck.com</a> · www.trinitydeck.com. Grievance Officer for the purposes of the Digital Personal Data Protection Act, 2023: Sandeep Halemani, reachable at the same address.</p>
      <p>See also our <Link href="/cookies/">Cookie Policy</Link> and <Link href="/terms/">Terms of Service</Link>.</p>
    </LegalPage>
  );
}
