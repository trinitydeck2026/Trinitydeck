import SmartLink from "@/components/SmartLink";
import Icon from "@/components/Icon";

const SERVICES = [
  ["svc-website-development", "i-app-window", "Website Development", "Build"],
  ["page:/services/custom-shopify-development/", "i-shopping-bag", "Custom Shopify Development", "Build"],
  ["svc-seo", "i-search", "SEO", "Scale"],
  ["svc-aeo", "i-message-circle", "AEO", "Scale"],
  ["svc-geo", "i-sparkles", "GEO", "Scale"],
  ["svc-performance-marketing", "i-target", "Performance Marketing", "Scale"],
  ["svc-cro", "i-trending-up", "Conversion Rate Optimisation", "Succeed"],
  ["svc-retention", "i-repeat", "Retention Marketing", "Succeed"],
];

/* page: "home" uses same-page anchors; any other page links back to "/#section". */
export default function Nav({ page = "home", currentPath }) {
  const home = page === "home";
  const sec = (id) => (home ? `#${id}` : `/#${id}`);
  const links = [
    ["Home", home ? "#home" : "/"],
    ["About", sec("about")],
    ["Services", sec("services")],
    ["Work", sec("work")],
    ["Process", sec("process")],
    ["Pricing", sec("pricing")],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="nav-wrap">
        <nav className="nav" aria-label="Primary">
          <SmartLink className="brand" href={home ? "#home" : "/"} aria-label="Trinity Deck home">
            <img src="/assets/img/mark-dark.webp" alt="" width="30" height="30" />
            <span>Trinity <b>Deck</b></span>
          </SmartLink>
          <div className="nav__links">
            {links.map(([label, href]) =>
              label === "Services" ? (
                <div className="nav__drop" key={label}>
                  <SmartLink className={"nav__link" + (!home ? " is-active" : "")} href={href}>Services</SmartLink>
                  <div className="nav__drop-panel" role="menu">
                    {SERVICES.map(([target, icon, name, pillar]) => {
                      const url = target.startsWith("page:") ? target.slice(5) : sec(target);
                      return (
                        <SmartLink className="drop-item" href={url} key={name} aria-current={url === currentPath ? "page" : undefined}>
                          <span className="drop-item__ic"><Icon name={icon} /></span>
                          <span><strong>{name}</strong><small>{pillar}</small></span>
                        </SmartLink>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <SmartLink className="nav__link" href={href} key={label}>{label}</SmartLink>
              )
            )}
          </div>
          <a className="btn btn--dark nav__cta" href="#contact"><span className="btn__roll"><span>Free teardown</span><span aria-hidden="true">Free teardown</span></span></a>
          <button className="nav__toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><Icon name="i-menu" /></button>
        </nav>
      </div>

      <div className="mnav" id="mnav" aria-hidden="true">
        {links.map(([label, href], i) => (
          <SmartLink className="mnav__link" style={{ "--i": i }} href={href} key={label}>{label}</SmartLink>
        ))}
        <a className="btn btn--dark" href="#contact">Free teardown</a>
      </div>
    </>
  );
}
