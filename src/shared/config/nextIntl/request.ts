import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locale as localeRootParam } from 'next/root-params'
import messages from '@/shared/config/nextIntl/messages'
import { routing } from '@/shared/config/nextIntl/routing'

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await localeRootParam()
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue
    }
    else {
      notFound()
    }
  }
  return {
    locale,
    messages: messages[locale],
  }
})
