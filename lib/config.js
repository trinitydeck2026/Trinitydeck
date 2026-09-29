/*
 * Trinity Deck — site settings.
 *
 * Fill these in before launch. An empty value is never rendered as a link.
 */
const config = {
  // Official phone / WhatsApp number, full international format. Shown in the contact block and footer.
  phone: "+91 70263 08026",

  // Official profiles, shown as footer buttons in this order.
  social: {
    facebook: "https://www.facebook.com/trinitydeckofficial/",
    instagram: "https://www.instagram.com/trinitydeckofficial/",
    linkedin: "https://www.linkedin.com/company/trinitydeckofficial",
    x: "https://x.com/trinitydeckofcl",
    youtube: "https://www.youtube.com/@TrinityDeckOfficial",
    reddit: "https://www.reddit.com/user/trinitydeckofficial/",
    whatsapp: "https://wa.me/917026308026",
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
