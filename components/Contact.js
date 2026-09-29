import config from "@/lib/config";
import Icon from "@/components/Icon";

const NEEDS = [
  "A new store or website",
  "Fixing an existing store",
  "Getting more traffic",
  "Turning visits into sales",
  "Keeping customers coming back",
  "Not sure yet",
];

/* Contact and booking (Section 16). defaultNeed preselects the dropdown. */
export default function Contact({ defaultNeed = "" }) {
  const phone = config.phone.trim();
  const whatsapp = config.whatsapp.trim();

  return (
    <section className="frame contact" id="contact" aria-labelledby="contact-h">
      <div className="art-bg" aria-hidden="true"><div className="art-bg__mark art-bg__mark--left"></div><div className="art-bg__grain"></div></div>
      <div className="container contact__inner">
        <div className="contact__head">
          <div className="section-head">
            <span className="badge" data-anim>Get started</span>
            <h2 className="h2" id="contact-h" data-anim style={{ "--ay": "50px" }}><span className="grad">Let's find out</span><br /><span className="grad-v">what's actually wrong</span></h2>
          </div>
          <p className="contact__sub" data-anim>Send us your URL and we'll record a ten-minute teardown: three specific things costing you orders, and one you can fix yourself without us.<span>No pitch, no obligation, no fifty-slide deck.</span></p>
        </div>

        <div className="contact__grid">
          <div className="c-card" data-anim style={{ "--ay": "60px" }}>
            <h3 className="c-card__title">Book a 30-minute call</h3>
            <p className="c-card__text">Pick a time that works. We'll look at your store together on the call and tell you what we'd do first.</p>
            <div className="cal-shell" data-cal data-lenis-prevent>
              <div id="my-cal-inline-30min"></div>
              <div className="cal-skeleton" aria-hidden="true"><div className="cal-skeleton__grid">{Array.from({ length: 21 }, (_, i) => <i key={i}></i>)}</div>Loading the calendar…</div>
            </div>
            <p className="cal-fallback">Can't see the calendar? <a className="text-link" href={`https://cal.com/${config.calLink}`} target="_blank" rel="noopener">Book here <Icon name="i-arrow-right" /></a></p>
          </div>

          <div className="c-card" data-anim style={{ "--ay": "70px", "--ad": ".1s" }} data-form-wrap>
            <h3 className="c-card__title">Send a message</h3>
            <form className="form" noValidate data-form>
              <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /><span className="field__err"></span></div>
              <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" placeholder="you@yourstore.com" autoComplete="email" required /><span className="field__err"></span></div>
              <div className="field"><label htmlFor="f-url">Your store URL</label><input id="f-url" name="store_url" type="text" inputMode="url" placeholder="yourstore.com" autoComplete="url" required /><span className="field__err"></span></div>
              <div className="field"><label htmlFor="f-need">What do you need help with?</label>
                <select id="f-need" name="need" required defaultValue={defaultNeed}>
                  <option value="" disabled>Select…</option>
                  {NEEDS.map((n) => <option key={n}>{n}</option>)}
                </select><span className="field__err"></span></div>
              <div className="field"><label htmlFor="f-msg">Anything else we should know? <span>(optional)</span></label><textarea id="f-msg" name="message" placeholder="The more specific, the more useful the teardown"></textarea></div>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
              <div className="form__foot">
                <button className="btn btn--dark" type="submit"><span className="btn__roll"><span>Send message</span><span aria-hidden="true">Send message</span></span><Icon name="i-send" className="ic ic--arrow" /></button>
                <p className="form__note">We reply within one working day. Always a person, never an autoresponder.</p>
              </div>
            </form>
            <div className="form-success" role="status" aria-live="polite">
              <span className="tick"><Icon name="i-check" /></span>
              <p>Got it. We'll be in touch within one working day — usually sooner.</p>
            </div>
          </div>
        </div>

        <div className="details">
          <div className="detail" data-anim style={{ "--ay": "60px" }}><span className="detail__ic"><Icon name="i-mail" /></span><div><b>Email</b><a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a></div></div>
          {phone && (
            <div className="detail" data-anim style={{ "--ay": "65px" }}><span className="detail__ic"><Icon name="i-phone" /></span><div><b>Phone</b><a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a></div></div>
          )}
          {whatsapp && (
            <div className="detail" data-anim style={{ "--ay": "65px" }}><span className="detail__ic"><Icon name="b-whatsapp" className="ic c-wa" /></span><div><b>WhatsApp</b><a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener">{whatsapp}</a></div></div>
          )}
          <div className="detail" data-anim style={{ "--ay": "70px" }}><span className="detail__ic"><Icon name="i-map-pin" /></span><div><b>Address</b><span>Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India</span></div></div>
          <div className="detail" data-anim style={{ "--ay": "75px" }}><span className="detail__ic"><Icon name="i-clock" /></span><div><b>Hours</b><span>Monday to Friday, 9:00 to 18:00 IST</span></div></div>
        </div>
      </div>
    </section>
  );
}
