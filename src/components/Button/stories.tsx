import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: { table: { disable: true } }
  }
} as Meta

export const Default: StoryObj = (args: any) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: StoryObj = (args: any) => <Button {...args} />
withIcon.args = {
  size: 'small',
  children: 'Buy now',
  $icon: <AddShoppingCart />
}

export const asLink: StoryObj = (args: any) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
