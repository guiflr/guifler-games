import { fireEvent, render, screen } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  const spy = jest.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    spy.mockClear()
  })

  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} $promotionalPrice="199" />)

    const original = screen.getByText('R$ 235,00')
    const promotional = screen.getByText('199')

    expect(original).toHaveStyle({ textDecoration: 'line-through' })
    expect(promotional).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toHaveBeenCalled()
  })

  it('should call ribbon with correct children', () => {
    renderWithTheme(
      <GameCard
        {...props}
        $ribbon="off %"
        $ribbonColor="primary"
        $ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/off %/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.primary })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
  })
})
