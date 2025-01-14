'use client'

import { BannerProps } from '@/components/Banner'
import BannerSlider from '@/components/BannerSlider'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import { GameCardProps } from '@/components/GameCard'
import GameCardSlider from '@/components/GamerCardSlider'
import Heading from '@/components/Heading'
import Highlight, { HighlightProps } from '@/components/Highlights'
import Menu from '@/components/Menu'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading $lineLeft $lineColor="secondary" color="black">
        News
      </Heading>
      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading $lineLeft $lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading $lineLeft $lineColor="secondary">
        Upcomming
      </Heading>
      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighligth} />
      <GameCardSlider items={upcommingMoreGames} />
    </Container>

    <Container>
      <Heading $lineLeft $lineColor="secondary">
        Free Games
      </Heading>
      <Highlight {...freeHighligth} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
