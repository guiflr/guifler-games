import { Meta } from '@storybook/react/'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from '@/components/Highlights/mock'
import gamesMock from '@/components/GamerCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: any = (args: ShowcaseProps) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: any = (args: ShowcaseProps) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: any = (args: ShowcaseProps) => <Showcase {...args} />

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
