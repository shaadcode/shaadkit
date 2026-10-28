import type { Locale } from "next-intl";

// If the `locale` value is one of the following (e.g., `fa`), `getDir` returns `rtl`.
const rtlLangs = {
  // "fa": "fa"
} as {
  [L in Locale]?: L;
};

const getDir = (locale: Locale): "rtl" | "ltr" =>
  rtlLangs?.[locale] ? "rtl" : "ltr";

export default getDir;
