import Image from 'next/image'
import Link from 'next/link'

import Heading from 'components/Heading'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-logo.svg"
        alt="travels manager Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a></a>
        </Link>

        <div>
          <Heading size="huge">Manager your travels!</Heading>
          <S.Subtitle>
            <strong>TRAVELS MANAGER</strong> is the best and easily travels
            organize platform.
          </S.Subtitle>
        </div>

        <S.Footer>
          Travels Manager {currentYear} © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a></a>
        </Link>
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
