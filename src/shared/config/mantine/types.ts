import type { Link } from '@/shared/config/nextIntl/navigation'

declare module '@mantine/core' {
  export interface AnchorProps {
    href: Parameters<typeof Link>[0]['href']
  }
}
