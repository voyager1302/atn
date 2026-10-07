// Mirror of `site` in astro.config.mjs — keep both expressions identical.
export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL ?? "https://atn-convert.com";

// Plausible site identifier: bare domain exactly as registered at
// plausible.io. Empty string disables analytics.
export const ANALYTICS_DOMAIN = "atn-convert.com";
