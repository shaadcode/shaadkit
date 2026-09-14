import type enMessages from './messages/en'
import type request from '@/shared/config/nextIntl/request'
import type { routing } from '@/shared/config/nextIntl/routing'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing['locales'])[number]
    Messages: typeof enMessages
    Formats: Awaited<ReturnType<typeof request>>['formats']
  }
}
