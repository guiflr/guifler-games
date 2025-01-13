import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryObj<MenuProps> = (args: MenuProps) => (
  <Menu {...args} />
)

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
