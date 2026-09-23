import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { expect } from 'storybook/test'
import Hero from './Hero'

const meta = {
  component: Hero,
  title: 'pages/landing',
} satisfies Meta<typeof Hero>

export default meta

type Story = StoryObj<typeof meta>

export const Theme: Story = {
  parameters: {
    disableForceColorScheme: true,
  },
  play: async ({ canvas, step, userEvent }) => {
    await step(
      'dark theme',
      async () => {
        const lightControl = canvas.getByLabelText('dark')

        if (!lightControl.nextElementSibling) {
          throw new Error('dark control is null')
        }

        await userEvent.click(lightControl.nextElementSibling)
        const rootHtml = document.querySelector('[data-mantine-color-scheme]')
        await expect(rootHtml?.getAttribute('data-mantine-color-scheme')).toEqual('dark')
      },
    )
    await step(
      'light theme',
      async () => {
        const lightControl = canvas.getByLabelText('light')

        if (!lightControl.nextElementSibling) {
          throw new Error('light control is null')
        }

        await userEvent.click(lightControl.nextElementSibling)
        const rootHtml = document.querySelector('[data-mantine-color-scheme]')
        await expect(rootHtml?.getAttribute('data-mantine-color-scheme')).toEqual('light')
      },
    )
  },
}
