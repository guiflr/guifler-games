import { screen } from '@testing-library/react'

import GameInfo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<GameInfo />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <GameInfo description="description" price="122,90" title="Title" />
    )

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    expect(screen.getByText('122,90')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(
      <GameInfo description="description" price="122,90" title="Title" />
    )

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
