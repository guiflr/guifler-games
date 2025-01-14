import { AnchorHTMLAttributes, ButtonHTMLAttributes, JSX } from 'react'
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
const Button = ({
  children,
  size = 'medium',
  $fullWidth = false,
  minimal = false,
  $icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    $fullWidth={$fullWidth}
    $withIcon={!!$icon}
    minimal={minimal}
    {...props}
  >
    {!!$icon && $icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
export default Button
