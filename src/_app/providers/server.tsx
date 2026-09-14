import type { Direction } from '@mantine/core'

import type { ReactNode } from 'react'
import { ColorSchemeScript, DirectionProvider, MantineProvider } from '@mantine/core'
import { NextIntlClientProvider } from 'next-intl'
import { themeFactory } from '@/shared/config/mantine/theme'
import '@mantine/core/styles.css'
import './../../../app/[locale]/globals.css'

interface Props {
  children: ReactNode
  direction: Direction
}
function ServerProviders({ children, ...props }: Props) {
  const theme = themeFactory()
  return (
    <NextIntlClientProvider>
      <DirectionProvider detectDirection={false} initialDirection={props.direction}>
        <MantineProvider
          classNamesPrefix="shaadkit"
          theme={theme}
          deduplicateInlineStyles
        >
          <ColorSchemeScript />
          {children}
        </MantineProvider>
      </DirectionProvider>
    </NextIntlClientProvider>
  )
}

export default ServerProviders
