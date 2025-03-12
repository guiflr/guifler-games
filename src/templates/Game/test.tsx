import { screen } from '@testing-library/react'

import Game, { GameTemplateProps } from '.'
import { GameDetailsProps } from '@/components/GameDetails'
import { renderWithTheme } from '@/utils/tests/helpers'

const gameCardSlider = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    $promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    $promotionalPrice: 'R$ 215,00'
  }
]

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: {
    title: 'Cyberpunk 2077',
    price: '59.00',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
  },
  gallery: [
    {
      src: '/img/games/cyberpunk-1.jpg',
      label: 'Gallery Image 1'
    },
    {
      src: '/img/games/cyberpunk-2.jpg',
      label: 'Gallery Image 2'
    }
  ],
  description: `<h1>Custom HTML</h1>`,
  details: {
    developer: 'CD PROJEKT RED',
    releaseDate: '2020-12-10T23:00:00',
    platforms: ['windows'],
    publisher: 'CD PROJEKT RED',
    rating: 'BR18',
    genres: ['Action', 'Role-playing']
  } as GameDetailsProps,
  upcommingGames: gameCardSlider,
  upcommingHighlight: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    $backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
  recommendedGames: gameCardSlider
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Game />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width:  768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
      {
        media: '(min-width:  768px)'
      }
    )
  })
})
