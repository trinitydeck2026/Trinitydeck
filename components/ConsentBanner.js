"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import config from "@/lib/config";

/*
 * Cookie consent (Cookie Policy §2–3, Legal pack §5.1).
 * - Nothing non-essential loads until the visitor opts in; every category defaults to off.
 * - "Reject all" has the same size and weight as "Accept all", on the first layer.
 * - The choice and its timestamp are stored so it can be shown if asked.
 * - Any element with [data-consent-open] reopens the banner; [data-consent-grant="<category>"] opts in to one category.
 * - Other scripts read window.__tdConsent and listen for the "td-consent" event.
 */
const KEY = "td-consent";
const VERSION = 1;
const CATEGORIES = [
  ["analytics", "Analytics", "Google Analytics 4 — which pages are read and where people leave."],
  ["behaviour", "Behaviour", "Microsoft Clarity — anonymised session replays and heatmaps. Form text is masked."],
  ["marketing", "Marketing", "Meta Pixel and Google Ads — whether our advertising led to an enquiry."],
  ["functional", "Functional", "Cal.com — runs the booking calendar and remembers your time zone."],
];
const NONE = { analytics: false, behaviour: false, marketing: false, functional: false };
const ALL = { analytics: true, behaviour: true, marketing: true, functional: true };

function read() {
  try {
    const v = JSON.parse(window.localStorage.getItem(KEY) || "null");
    return v && v.version === VERSION ? v : null;
  } catch {
    return null;
  }
}

function publish(choice) {
  window.__tdConsent = choice;
  window.dispatchEvent(new CustomEvent("td-consent", { detail: choice }));
}

function addScript(id, src, inline) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  if (src) { s.async = true; s.src = src; }
  if (inline) s.text = inline;
  document.head.appendChild(s);
}

/* Loads only the tags whose category was accepted and whose ID is configured. */
function loadTags(c) {
  const t = config.tracking || {};
  const gtagIds = [c.analytics && t.ga4Id, c.marketing && t.googleAdsId].filter(Boolean);
  if (gtagIds.length) {
    addScript("td-gtag", `https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}`);
    addScript("td-gtag-init", null,
      "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
      `gtag('consent','default',{ad_storage:'${c.marketing ? "granted" : "denied"}',ad_user_data:'${c.marketing ? "granted" : "denied"}',ad_personalization:'${c.marketing ? "granted" : "denied"}',analytics_storage:'${c.analytics ? "granted" : "denied"}'});` +
      "gtag('js',new Date());" + gtagIds.map((id) => `gtag('config','${id}');`).join(""));
  }
  if (c.behaviour && t.clarityId) {
    addScript("td-clarity", null,
      `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${t.clarityId}");`);
  }
  if (c.marketing && t.metaPixelId) {
    addScript("td-meta", null,
      "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');" +
      `fbq('init','${t.metaPixelId}');fbq('track','PageView');`);
  }
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [draft, setDraft] = useState(NONE);

  const save = useCallback((choice) => {
    const record = { ...NONE, ...choice, version: VERSION, updatedAt: new Date().toISOString() };
    try { window.localStorage.setItem(KEY, JSON.stringify(record)); } catch { /* storage blocked: choice lasts for this visit */ }
    publish(record);
    loadTags(record);
    setOpen(false);
    setCustom(false);
  }, []);

  useEffect(() => {
    const stored = read();
    if (stored) { publish(stored); loadTags(stored); } else { publish({ ...NONE }); setOpen(true); }

    const onClick = (e) => {
      const opener = e.target.closest("[data-consent-open]");
      if (opener) {
        e.preventDefault();
        setDraft({ ...NONE, ...(read() || {}) });
        setCustom(true);
        setOpen(true);
        return;
      }
      const grant = e.target.closest("[data-consent-grant]");
      if (grant) {
        e.preventDefault();
        const cat = grant.getAttribute("data-consent-grant");
        save({ ...NONE, ...(read() || {}), [cat]: true });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [save]);

  if (!open) return null;

  return (
    <div className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title" data-lenis-prevent>
      <div className="consent__box">
        <p className="consent__title" id="consent-title">Cookies on trinitydeck.com</p>
        <p className="consent__text">
          We use cookies to see how the site is used, to measure our advertising and to run the booking calendar. Only strictly necessary cookies are set until you choose. You can change this any time from “Cookie settings” in the footer. <Link href="/cookies/">Cookie Policy</Link>
        </p>

        <div className="consent__cats" hidden={!custom}>
          <div className="consent__cat">
            <div><b>Strictly necessary</b><small>Remembers this choice and keeps the site secure. Always on.</small></div>
            <label className="switch"><input type="checkbox" checked disabled aria-label="Strictly necessary cookies, always on" /><span></span></label>
          </div>
          {CATEGORIES.map(([key, label, text]) => (
            <div className="consent__cat" key={key}>
              <div><b>{label}</b><small>{text}</small></div>
              <label className="switch">
                <input type="checkbox" checked={draft[key]} onChange={(e) => setDraft({ ...draft, [key]: e.target.checked })} aria-label={`${label} cookies`} />
                <span></span>
              </label>
            </div>
          ))}
        </div>

        <div className="consent__actions">
          <button type="button" className="btn btn--light btn--sm" onClick={() => save(NONE)}>Reject all</button>
          {custom ? (
            <button type="button" className="btn btn--light btn--sm" onClick={() => save(draft)}>Save choices</button>
          ) : (
            <button type="button" className="btn btn--light btn--sm" onClick={() => { setDraft({ ...NONE, ...(read() || {}) }); setCustom(true); }}>Choose</button>
          )}
          <button type="button" className="btn btn--light btn--sm" onClick={() => save(ALL)}>Accept all</button>
        </div>
      </div>
    </div>
  );
}
