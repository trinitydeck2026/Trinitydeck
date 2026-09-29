import config from "@/lib/config";
import Icon from "@/components/Icon";

/* Contact and booking (Section 16). */
export default function Contact() {
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

        {/* Booking happens entirely in Cal.com: its form already asks for name, email, website, services and notes. */}
        <div className="c-card book" data-anim style={{ "--ay": "60px" }}>
          <div className="book__intro">
            <div>
              <h3 className="c-card__title">Book a 30-minute call</h3>
              <p className="c-card__text">Pick a time that works. We'll look at your store together on the call and tell you what we'd do first.</p>
            </div>
            <ul className="book__facts">
              <li className="book__fact"><span><Icon name="i-clock" /></span>30 minutes on Cal Video</li>
              <li className="book__fact"><span><Icon name="i-eye" /></span>We look at your store together</li>
              <li className="book__fact"><span><Icon name="i-rocket" /></span>You leave knowing what we'd do first</li>
            </ul>
            <p className="cal-fallback">Can't see the calendar? <a className="text-link" href={`https://cal.com/${config.calLink}`} target="_blank" rel="noopener">Book here <Icon name="i-arrow-right" /></a></p>
          </div>
          <div className="cal-shell" data-cal data-lenis-prevent>
            <div id="my-cal-inline-30min"></div>
            <div className="cal-skeleton" aria-hidden="true"><div className="cal-skeleton__grid">{Array.from({ length: 21 }, (_, i) => <i key={i}></i>)}</div>Loading the calendar…</div>
          </div>
        </div>

        <div className="details">
          <div className="detail" data-anim style={{ "--ay": "60px" }}><span className="detail__ic"><Icon name="i-mail" /></span><div className="detail__text"><b>Email</b><a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a></div></div>
          {phone && (
            <div className="detail" data-anim style={{ "--ay": "65px" }}><span className="detail__ic"><Icon name="i-phone" /></span><div className="detail__text"><b>Phone</b><a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a></div></div>
          )}
          {whatsapp && (
            <div className="detail" data-anim style={{ "--ay": "65px" }}><span className="detail__ic"><Icon name="b-whatsapp" className="ic c-wa" /></span><div className="detail__text"><b>WhatsApp</b><a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener">{whatsapp}</a></div></div>
          )}
          <div className="detail" data-anim style={{ "--ay": "70px" }}><span className="detail__ic"><Icon name="i-map-pin" /></span><div className="detail__text"><b>Address</b><span>Sector 6, HSR Layout, Bengaluru, Karnataka 560068, India</span></div></div>
          <div className="detail" data-anim style={{ "--ay": "75px" }}><span className="detail__ic"><Icon name="i-clock" /></span><div className="detail__text"><b>Hours</b><span>Monday to Friday, 9:00 to 18:00 IST</span></div></div>
        </div>
      </div>
    </section>
  );
}
