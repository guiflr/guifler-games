import { Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    $img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    $title: 'Defy death 1',
    $subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    $buttonLabel: 'Buy now',
    $buttonLink: '/games/defy-death',
    $ribbon: 'Bestselling'
  },
  {
    $img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    $title: 'Defy death 2',
    $subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    $buttonLabel: 'Buy now',
    $buttonLink: '/games/defy-death'
  },
  {
    $img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    $title: 'Defy death 3',
    $subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    $buttonLabel: 'Buy now',
    $buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: any = (args: BannerSliderProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
