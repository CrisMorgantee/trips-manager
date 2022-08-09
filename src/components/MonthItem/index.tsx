import * as S from './styles'

export type MonthItemProps = {
  month: string
  days: string
  amount: string
}

const MonthItem = ({ month, days, amount }: MonthItemProps) => (
  <S.Wrapper>
    <S.Title>{month}</S.Title>

    <S.InfoWrapper>
      <S.Text>{days} dias</S.Text>
      <S.Text>{amount}</S.Text>
    </S.InfoWrapper>
  </S.Wrapper>
)

export default MonthItem
