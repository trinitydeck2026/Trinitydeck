import config from "@/lib/config";
import SmartLink from "@/components/SmartLink";
import Icon from "@/components/Icon";

// Order and labels of the social buttons. Logos are the brands' own full-colour marks.
const SOCIALS = [
  ["facebook", "Facebook", "l-facebook"],
  ["instagram", "Instagram", "l-instagram"],
  ["linkedin", "LinkedIn", "l-linkedin"],
  ["x", "X", "l-x"],
  ["whatsapp", "WhatsApp", "l-whatsapp"],
];

export default function Footer({ page = "home" }) {
  const sec = (id) => (page === "home" ? `#${id}` : `/#${id}`);
  const nav = [["About", sec("about")], ["Services", sec("services")], ["Work", sec("work")], ["Process", sec("process")], ["Engagement", sec("engagement")], ["FAQ", sec("faq")], ["Contact", page === "legal" ? "/#contact" : "#contact"]];

  return (
    <footer className="footer" data-footer>
      <div className="footer__word" aria-hidden="true">Trinity Deck</div>
      <div className="container">
        <div className="footer__center">
          <span className="footer__logo" data-anim="pop"><img src="/assets/img/mark.webp" alt="Trinity Deck" width="58" height="58" loading="lazy" /></span>
          <p className="footer__tag" data-anim>Build. Scale. Succeed.</p>
          <p className="footer__connect" data-anim>Find us in the usual places</p>
          <div className="socials" data-anim>
            {SOCIALS.map(([key, label, icon]) => {
              const url = config.social[key];
              return (
                <a className="soc-btn" href={url || "#"} target={url ? "_blank" : undefined} rel={url ? "noopener" : undefined} aria-label={`Trinity Deck on ${label}`} key={key}>
                  {label}
                  <span className="soc-btn__logo"><svg aria-hidden="true"><use href={`/assets/icons.svg#${icon}`} /></svg></span>
                </a>
              );
            })}
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
            <div className="footer__legal">
              <SmartLink href="/privacy/">Privacy Policy</SmartLink>
              <SmartLink href="/cookies/">Cookie Policy</SmartLink>
              <SmartLink href="/terms/">Terms of Service</SmartLink>
              <button type="button" className="footer__cookie-btn" data-consent-open>Cookie settings</button>
            </div>
            <a className="to-top" href="#home">Back To Top <Icon name="i-arrow-up" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
