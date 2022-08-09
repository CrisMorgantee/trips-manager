import Heading from 'components/Heading'
import * as S from './styles'

export type HeaderProps = {
  headingIcon?: JSX.Element
  icon?: JSX.Element
  onClick?: () => void
}

const Header = ({ headingIcon, icon, onClick }: HeaderProps) => (
  <S.Wrapper>
    <Heading icon={headingIcon}>Months</Heading>
    <S.IconWrapper onClick={onClick}>{icon}</S.IconWrapper>
  </S.Wrapper>
)

export default Header
