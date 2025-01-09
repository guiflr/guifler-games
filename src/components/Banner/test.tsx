import { render, screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Banner />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

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
})
