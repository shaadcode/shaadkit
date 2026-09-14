import type { Locale } from 'next-intl'

const rtlLangs = {

} as {
  [L in Locale]?: L
}

function getDir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLangs?.[locale] ? 'rtl' : 'ltr'
}

export default getDir
