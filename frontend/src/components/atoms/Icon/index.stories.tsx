import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import ChevronLeftIcon from '../../../../public/assets/png/chevron_left.png'
import Icon from '.'

export default {
  title: 'atoms/Icon',
  component: Icon
} as Meta

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />

export const ChevronLeft = Template.bind({})
ChevronLeft.args = {
  height: '24px',
  width: '24px',
  src: ChevronLeftIcon,
}

