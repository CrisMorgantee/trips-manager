import * as S from './styles'

const Main = ({
  title = 'Travel Managment',
  description = 'A simple platform to manage your travels'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de uma rodovia com tipografia da aplicação."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/auth-logo.svg" alt="Imagem de uma rodovia." />
  </S.Wrapper>
)

export default Main
