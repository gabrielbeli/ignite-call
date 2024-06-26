import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-gbds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testanto o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
