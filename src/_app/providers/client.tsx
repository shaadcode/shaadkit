'use client'
import type { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { rootQueryClient } from '@/shared/config/tanstackQuery'

interface Props {
  children: ReactNode
}

const queryClient = rootQueryClient()

function ClientProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ClientProviders
