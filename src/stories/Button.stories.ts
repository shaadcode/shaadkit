import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import MantineButton from '@/stories/Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: MantineButton,
} satisfies Meta<typeof MantineButton>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    children: 'label',
  },
  play: ({ canvas }) => {
    const button = canvas.getByRole('button')

    expect(button.textContent).toEqual('label')
  },
}
