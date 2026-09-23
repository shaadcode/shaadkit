import type { Locale } from 'next-intl'

// If the `locale` value is one of the following (e.g., `fa`), `getDir` returns `rtl`.
const rtlLangs = {
  // "fa": "fa"
} as {
  [L in Locale]?: L
}

function getDir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLangs?.[locale] ? 'rtl' : 'ltr'
}

export default getDir
