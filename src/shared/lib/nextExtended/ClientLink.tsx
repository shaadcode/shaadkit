'use client'

import type { ComponentProps } from 'react'
import { Anchor } from '@mantine/core'
import { Link } from '@/shared/config/nextIntl/navigation'

type Props = ComponentProps<typeof Anchor<'a'>>

function ClientLink({ children, ...props }: Props) {
  return (
    // @ts-expect-error
    <Anchor
      {...props}
      component={Link}
    >
      {children}
    </Anchor>
  )
}

export default ClientLink
