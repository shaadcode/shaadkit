import type { Decorator } from '@storybook/nextjs-vite'

import { DirectionProvider, MantineProvider } from '@mantine/core'
import { NextIntlClientProvider } from 'next-intl'
import { themeFactory } from '@/shared/config/mantine/theme'
import messages from '@/shared/config/nextIntl/messages'
import { routing } from '@/shared/config/nextIntl/routing'
import { getDir } from '@/shared/lib/nextIntlExtended'

import '@mantine/core/styles.css'
import './../app/[locale]/globals.css'

const theme = themeFactory()
const getStorybookLocale = (ctx: any) => ctx.globals.locale as (typeof routing.defaultLocale) || routing.defaultLocale

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
  locale: {
    toolbar: {
      icon: 'globe',
      items: [
        {
          value: 'en',
          title: 'English',
        },
      ],
    },
  },
}

export const decorators = [
  (Story, context) => {
    const locale = getStorybookLocale(context)
    const direction = getDir(locale)
    const localeMessages = messages[locale]
    const scheme = (context.globals['theme'] || 'light') as 'light' | 'dark'
    const isDisableForceColorScheme = context.parameters['disableForceColorScheme'] as boolean
    return (
      <NextIntlClientProvider locale={locale} messages={localeMessages}>
        <DirectionProvider detectDirection={false} initialDirection={direction}>
          <MantineProvider
            deduplicateInlineStyles
            classNamesPrefix="shaadkit"
            theme={theme}
            forceColorScheme={isDisableForceColorScheme ? undefined : scheme}
          >
            <Story />
          </MantineProvider>
        </DirectionProvider>
      </NextIntlClientProvider>
    )
  },
] as Array<Decorator>
