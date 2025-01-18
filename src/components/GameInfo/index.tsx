import Button from '../Button'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  price: string
  description: string
}

const GameInfo = ({ price, title, description }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" $lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{price}</Ribbon>
    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large">Add to cart</Button>
      <Button size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
