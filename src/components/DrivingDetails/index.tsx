import * as S from './styles'

export type DrivingDetailsProps = {
  date: string
  hourStart: string
  hourStop: string
}

const DrivingDetails = ({ date, hourStart, hourStop }: DrivingDetailsProps) => (
  <S.Wrapper>
    <S.Title>
      Day <span>{date}</span>
    </S.Title>
    <S.Title>
      Day <span>{hourStart}</span>
    </S.Title>
    <S.Title>
      Day <span>{hourStop}</span>
    </S.Title>
  </S.Wrapper>
)

export default DrivingDetails
