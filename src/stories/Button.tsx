import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'

function MantineButton({ children, ...props }: ButtonProps) {
  return (
    <Button

      {...props}
    >
      {children}
    </Button>
  )
}

export default MantineButton
