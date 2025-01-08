import { render, screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Footer />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render the headings', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact Us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })
})
