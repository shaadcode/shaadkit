import type { Metadata } from 'next'
import { mantineHtmlProps } from '@mantine/core'
import { hasLocale } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import AppProviders from '@/_app/providers'
import { routing } from '@/shared/config/nextIntl/routing'
import { getDir } from '@/shared/lib/nextIntlExtended'

export const metadata: Metadata = {
  title: 'Shaadkit',
  description: 'your Next.js starting point',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default async function RootLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = await getLocale()

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const direction = getDir(locale)

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <body>
        <AppProviders direction={direction}>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
