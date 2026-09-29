/*
 * Trinity Deck — site settings.
 *
 * Every value here is a placeholder from Section 18 of the copy document.
 * Leave a value empty ("") and the element that uses it is not rendered, so
 * nothing links to a dead profile. Fill it in and it appears.
 */
const config = {
  // Official number, full international format, e.g. "+91 80 1234 5678"
  phone: "",
  // WhatsApp number in full international format, e.g. "+91 98765 43210"
  whatsapp: "",

  social: {
    linkedin: "",
    x: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },

  founders: {
    sandeep: { linkedin: "", x: "", portfolio: "" },
    founder2: { linkedin: "", github: "", portfolio: "" },
    founder3: { linkedin: "", github: "", portfolio: "" },
  },

  /*
   * Where the contact form posts. Any service that accepts a JSON POST works
   * (Formspree, Basin, Getform, a Next.js route handler). Left empty, the form
   * opens the visitor's email app addressed to contact@trinitydeck.com.
   */
  formEndpoint: "",
  contactEmail: "contact@trinitydeck.com",

  calLink: "trinitydeckoffical/30min",
};

export default config;
