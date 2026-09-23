'use client'
import type { createTheme } from '@mantine/core'
import { Anchor, Image as MantineImage, NavLink } from '@mantine/core'
import Image from 'next/image'
import { ClientLink } from '@/shared/lib/nextExtended'

export const components = {
  Anchor: Anchor.extend({ defaultProps: { component: ClientLink } }),
  NavLink: NavLink.extend({ defaultProps: { component: ClientLink } }),
  Image: MantineImage.extend({
    defaultProps: {
      component: Image,
      // These values are mandatory in the Next.js Image component. Use `w` and `h`.
      // @ts-expect-error
      width: 100,
      height: 100,
    },
  }),
} as const satisfies Parameters<typeof createTheme>[0]['components']
