'use client'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ClientProviders({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default ClientProviders
