import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GamerCardSlider/mock'
import highlightMock from '@/components/Highlights/mock'

import Home from '.'

const props = {
  banners: [
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
  ],
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })

  // it('should render section elements', () => {
  //   const { container, debug } = renderWithTheme(<Home {...props} />)
  //   debug(container)
  //   // banner
  //   expect(
  //     screen.getByRole('heading', { name: /Defy death 1/i })
  //   ).toBeInTheDocument()
  //   // card game ( 5 sections com 4 cards cada = 5x4 = 20)
  //   expect(screen.getAllByText(/population zero/i)).toHaveLength(20)
  //   // highlight
  //   expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  // })
})
