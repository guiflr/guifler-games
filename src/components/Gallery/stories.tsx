import { Meta } from '@storybook/react'
import Gallery, { GalleryProps } from '.'

const mockItems = [
  {
    src: '/img/games/cyberpunk-1.jpg',
    label: 'Gallery Image 1'
  },
  {
    src: '/img/games/cyberpunk-2.jpg',
    label: 'Gallery Image 2'
  }
]

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: [
      {
        src: '/img/games/cyberpunk-1.jpg',
        label: 'Gallery Image 1'
      },
      {
        src: '/img/games/cyberpunk-2.jpg',
        label: 'Gallery Image 2'
      }
    ]
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: any = (args: GalleryProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
