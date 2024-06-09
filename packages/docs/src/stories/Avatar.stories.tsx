import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-gbds/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/gabrielbeli.png',
    alt: 'Gabriel Beli',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
