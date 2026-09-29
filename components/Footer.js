import config from "@/lib/config";
import SmartLink from "@/components/SmartLink";
import Icon from "@/components/Icon";

const SOCIALS = [
  ["linkedin", "LinkedIn", "b-linkedin"],
  ["x", "X", "b-x"],
  ["instagram", "Instagram", "b-instagram"],
  ["facebook", "Facebook", "b-facebook"],
  ["youtube", "YouTube", "b-youtube"],
];

export default function Footer({ page = "home" }) {
  const sec = (id) => (page === "home" ? `#${id}` : `/#${id}`);
  const nav = [["About", sec("about")], ["Services", sec("services")], ["Work", sec("work")], ["Process", sec("process")], ["Pricing", sec("pricing")], ["FAQ", sec("faq")], ["Contact", "#contact"]];

  return (
    <footer className="footer" data-footer>
      <div className="footer__word" aria-hidden="true">Trinity Deck</div>
      <div className="container">
        <div className="footer__center">
          <span className="footer__logo" data-anim="pop"><img src="/assets/img/mark-dark.webp" alt="Trinity Deck" width="58" height="58" loading="lazy" /></span>
          <p className="footer__tag" data-anim>Build. Scale. Succeed.</p>
          <p className="footer__connect" data-anim>Find us in the usual places</p>
          <div className="socials" data-anim>
            {SOCIALS.filter(([key]) => config.social[key]).map(([key, label, icon]) => (
              <a className="soc-btn" href={config.social[key]} target="_blank" rel="noopener" key={key}>{label} <span><svg aria-hidden="true"><use href={`/assets/icons.svg#${icon}`} /></svg></span></a>
            ))}
            <a className="soc-btn" href={`mailto:${config.contactEmail}`}>Email <span><Icon name="i-mail" /></span></a>
          </div>
          <p className="footer__entity">Trinity Deck · Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India · <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a></p>
        </div>
        <div className="footer__bar">
          <nav className="footer__nav" aria-label="Footer">
            {nav.map(([label, href]) => <SmartLink href={href} key={label}>{label}</SmartLink>)}
          </nav>
          <p className="footer__copy">© 2026 Trinity Deck. All rights reserved.<br />Last updated: <time dateTime="2026-09">September 2026</time></p>
          <div className="footer__right">
            <div className="footer__legal"><a href="/privacy-policy">Privacy Policy</a><a href="/cookie-policy">Cookie Policy</a><a href="/terms">Terms of Service</a></div>
            <a className="to-top" href="#home">Back To Top <Icon name="i-arrow-up" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
