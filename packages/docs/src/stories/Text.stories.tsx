import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-gbds/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic quas nesciunt itaque illo cumque facilis animi quis qui deserunt cum soluta nemo, ex, maiores, ullam commodi repudiandae quam eligendi!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
