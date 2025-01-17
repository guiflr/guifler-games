import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  JSX
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  $icon?: JSX.Element
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    $fullWidth = false,
    minimal = false,
    $icon,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    $fullWidth={$fullWidth}
    $withIcon={!!$icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {!!$icon && $icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
export default forwardRef(Button)
