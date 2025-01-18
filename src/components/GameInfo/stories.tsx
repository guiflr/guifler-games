import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Title game',
    price: '122,90',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: any = (props: GameInfoProps) => <GameInfo {...props} />
