import type { Locale } from 'next-intl'
import enMessages from '@/shared/config/nextIntl/messages/en'

const messages = {
  en: enMessages,
} as const satisfies Record<Locale, any>

export default messages
