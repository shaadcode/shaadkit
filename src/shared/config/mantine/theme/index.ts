import { createTheme } from '@mantine/core'
import { components } from './components'

export function themeFactory() {
  return createTheme({
    components,
    primaryColor: 'orange',
  })
}
