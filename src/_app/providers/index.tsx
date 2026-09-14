import type { Direction } from '@mantine/core'
import type { ReactNode } from 'react'
import ClientProviders from './client'
import ServerProviders from './server'

interface Props {
  children: ReactNode
  direction: Direction
}

function AppProviders({ children, ...props }: Props) {
  return (
    <ServerProviders direction={props.direction}>
      <ClientProviders>
        {children}
      </ClientProviders>
    </ServerProviders>
  )
}

export default AppProviders
