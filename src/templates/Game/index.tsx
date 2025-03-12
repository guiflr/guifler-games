'use client'

import Base from '../Base'
import * as S from './styles'
import TextContent from '@/components/TextContent'
import GameInfo, { GameInfoProps } from '@/components/GameInfo'
import Gallery, { GalleryImageProps } from '@/components/Gallery'
import GameDetails, { GameDetailsProps } from '@/components/GameDetails'
import Showcase from '@/components/Showcase'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlights'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcommingGames,
  upcommingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
