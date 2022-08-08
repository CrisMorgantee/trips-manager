import { LabelHTMLAttributes } from 'react'
import * as S from './styles'

export type lineColorProps = 'secondary' | 'orange'

export type HeadingProps = {
  children: React.ReactNode
  lineLeft?: boolean
  lineBottom?: boolean
  icon?: JSX.Element
  lineColor?: lineColorProps
  size?: 'small' | 'medium' | 'huge'
  as?: React.ElementType
} & LabelHTMLAttributes<HTMLLabelElement>

const Heading = ({
  children,
  lineLeft = false,
  lineBottom = false,
  icon,
  size = 'medium',
  lineColor = 'secondary'
}: HeadingProps) => (
  <S.Wrapper
    hasIcon={!!icon}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {!!icon && icon}
    {children}
  </S.Wrapper>
)

export default Heading
