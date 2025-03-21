import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined'

import Slider, { SliderSettings } from '@/components/Slider'
import GameCard, { GameCardProps } from '@/components/GameCard'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <ArrowLeft
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  />
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <ArrowRight
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  />
)

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <SlickArrowRight aria-label="next games" />,
  prevArrow: <SlickArrowLeft aria-label="previous games" />
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
export default GameCardSlider
