import Home, { HomeTemplateProps } from '@/templates/Home'
import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GamerCardSlider/mock'
import highlightMock from '@/components/Highlights/mock'
import { unstable_cache } from 'next/cache'

async function getHomeData(): Promise<HomeTemplateProps> {
  return {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighligth: highlightMock
  }
}

const getCachedUser = unstable_cache(async () => getHomeData(), ['home-data'])

export default async function Page() {
  const data = await getCachedUser()
  return <Home {...data} />
}
