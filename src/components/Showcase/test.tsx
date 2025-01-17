import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Showcase from '.'

describe('<Showcase />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render full showcase', () => {
    const props = {
      title: 'Most Popular',
      highlight: {
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        $backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      },
      games: [
        {
          title: 'Population Zero',
          developer: 'Rockstar Games',
          img: 'https://source.unsplash.com/user/willianjusten/300x140',
          price: 'R$ 235,00',
          $promotionalPrice: 'R$ 215,00'
        }
      ]
    }
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', {
        name: props.highlight.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    const props = {
      title: 'Most Popular',
      highlight: {
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        $backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      },
      games: [
        {
          title: 'Population Zero',
          developer: 'Rockstar Games',
          img: 'https://source.unsplash.com/user/willianjusten/300x140',
          price: 'R$ 235,00',
          $promotionalPrice: 'R$ 215,00'
        }
      ]
    }

    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: props.highlight.title })
    screen.getByRole('heading', { name: props.games[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    const props = {
      title: 'Most Popular',
      highlight: {
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        $backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      },
      games: [
        {
          title: 'Population Zero',
          developer: 'Rockstar Games',
          img: 'https://source.unsplash.com/user/willianjusten/300x140',
          price: 'R$ 235,00',
          $promotionalPrice: 'R$ 215,00'
        }
      ]
    }

    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: props.games[0].title })

    expect(
      screen.queryByRole('heading', { name: props.highlight.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    const props = {
      title: 'Most Popular',
      highlight: {
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        $backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      },
      games: [
        {
          title: 'Population Zero',
          developer: 'Rockstar Games',
          img: 'https://source.unsplash.com/user/willianjusten/300x140',
          price: 'R$ 235,00',
          $promotionalPrice: 'R$ 215,00'
        }
      ]
    }

    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: props.highlight.title })

    expect(
      screen.queryByRole('heading', { name: props.games[0].title })
    ).not.toBeInTheDocument()
  })
})
