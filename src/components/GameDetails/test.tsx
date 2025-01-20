import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

describe('<GameDetails />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render the blocks', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    const props: GameDetailsProps = {
      developer: 'Different Tales',
      platforms: ['windows', 'mac', 'linux'],
      releaseDate: '2020-11-21T23:00:00',
      rating: 'BR0',
      genres: ['Role-playing', 'Narrative']
    }
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
