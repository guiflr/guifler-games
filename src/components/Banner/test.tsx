import { render, screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Banner />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  const props = {
    $img: 'src/public/globe.svg',
    $title: 'Games',
    $subtitle: 'Fps Games Is Much Better',
    $buttonLabel: 'Go',
    $buttonLink: '/games'
  }

  it('should render banner', () => {
    renderWithTheme(
      <Banner
        $img="src/public/globe.svg"
        $title="Games"
        $subtitle="Fps Games Is Much Better"
        $buttonLabel="Go"
        $buttonLink="/games"
      />
    )

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'src/public/globe.svg'
    )

    expect(screen.getByRole('heading', { name: /^Games$/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Fps Games Is Much Better$/ })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Go/i })).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        $ribbon="My Ribbon"
        $ribbonSize="small"
        $ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
