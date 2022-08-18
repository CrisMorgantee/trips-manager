import { DrivingDetailsProps } from 'components/DrivingDetails'
import * as S from './styles'

export type CityProps = {
  city: string
  departure_day: string
  arrival_day: string
  amount: string | React.ReactElement
  onClick?: () => void
}

export type MonthItemProps = {
  month: string
  days?: string | React.ReactElement
  amount?: string | React.ReactElement
  onClick?: () => void
  citys?: CityProps[]
  isVisible?: boolean
  drivings?: DrivingDetailsProps[]
}

const MonthItem = ({
  month,
  days,
  amount,
  onClick,
  citys,
  isVisible,
  drivings
}: MonthItemProps) => (
  <S.Wrapper onClick={onClick}>
    <S.InfoWrapper>
      <S.Title>{month}</S.Title>
      <S.Details>
        <S.Text>{days}</S.Text>
        <S.Text>
          <span>{amount}</span>
        </S.Text>
      </S.Details>
    </S.InfoWrapper>

    {isVisible &&
      citys!.map(({ city, departure_day, arrival_day, amount }) => (
        <S.ContentWrapper key={city}>
          <S.DetailTitle>{city}</S.DetailTitle>
          <S.Details>
            <S.DetailText>{departure_day}</S.DetailText>
            <S.DetailText>{arrival_day}</S.DetailText>
            <S.DetailText>
              <span>{amount}</span>
            </S.DetailText>
          </S.Details>
        </S.ContentWrapper>
      ))}

    {drivings &&
      drivings.map(({ date, hourStart, hourStop }, index) => (
        <S.ContentWrapper key={index}>
          <S.TextWrapper>
            <span>Day:</span> {date}
          </S.TextWrapper>
          <S.TextWrapper>
            <span>Start:</span>
            {hourStart}
          </S.TextWrapper>
          <S.TextWrapper>
            <span>Stop:</span>
            {hourStop}
          </S.TextWrapper>
        </S.ContentWrapper>
      ))}
  </S.Wrapper>
)

export default MonthItem
