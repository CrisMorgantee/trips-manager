import Heading from 'components/Heading'
import * as S from './styles'

export type HeaderProps = {
  headingIcon?: JSX.Element
  icon?: JSX.Element
  actionIcon?: JSX.Element
  title: string
  onClick?: () => void
  handleAction?: () => void
}

const Header = ({
  title,
  headingIcon,
  icon,
  actionIcon,
  onClick,
  handleAction
}: HeaderProps) => (
  <S.Wrapper>
    <Heading icon={headingIcon}>{title}</Heading>
    <S.IconWrapper>
      <S.Icon onClick={handleAction}>{actionIcon}</S.Icon>
      <S.Icon onClick={onClick}>{icon}</S.Icon>
    </S.IconWrapper>
  </S.Wrapper>
)

export default Header
