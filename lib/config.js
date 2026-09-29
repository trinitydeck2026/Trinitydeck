/*
 * Trinity Deck — site settings.
 *
 * Fill these in before launch. An empty value is never rendered as a link.
 */
const config = {
  // Official number, full international format, e.g. "+91 80 1234 5678". Empty = not shown.
  phone: "",

  // Footer social buttons, in this order. Paste the full profile URL for each.
  // WhatsApp takes a wa.me link, e.g. "https://wa.me/918012345678".
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    x: "",
    whatsapp: "",
  },

  contactEmail: "contact@trinitydeck.com",

  calLink: "trinitydeckoffical/30min",

  /*
   * Analytics and ad tags named in the Privacy and Cookie policies. Each one loads
   * only after the visitor accepts its category in the cookie banner. Empty = never loads.
   */
  tracking: {
    ga4Id: "", // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX" (analytics)
    googleAdsId: "", // Google Ads conversion ID, e.g. "AW-XXXXXXXXX" (marketing)
    clarityId: "", // Microsoft Clarity project ID (behaviour)
    metaPixelId: "", // Meta Pixel ID (marketing)
  },
};

export default config;
