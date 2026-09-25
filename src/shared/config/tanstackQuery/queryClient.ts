import { QueryClient } from '@tanstack/react-query'

export function rootQueryClient() {
  const queryClient = new QueryClient()

  return queryClient
}
