import {
  Add,
  CalendarToday as Calendar,
  DirectionsCar,
  Visibility,
  VisibilityOff
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { Container } from 'components/Container'
import Header from 'components/Header'
import MonthItem, { MonthItemProps } from 'components/MonthItem'
import Image from 'next/image'
import { useState } from 'react'
import * as S from './styles'

export type DashboardProps = {
  isVisible?: boolean
}

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [months, setMonths] = useState<MonthItemProps[]>([])

  setMonths([
    { month: 'July', days: '10', amount: 'R$ 500,00' },
    { month: 'September', days: '5', amount: 'R$ 250,00' }
  ])

  const handleVisibilityChange = () => setIsVisible(!isVisible)

  return (
    <S.Wrapper>
      <Image
        width={414}
        height={94}
        src="/img/logo.svg"
        alt="travels manager Auth Page"
        layout="responsive"
        // objectFit="fill"
      />
      <Container>
        <Header
          headingIcon={<Calendar />}
          icon={isVisible ? <Visibility /> : <VisibilityOff />}
          onClick={handleVisibilityChange}
        />

        <S.MonthsList>
          {months.map(({ month, days, amount }) => (
            <MonthItem key={month} month={month} days={days} amount={amount} />
          ))}
        </S.MonthsList>
      </Container>
      <S.ButtonWrapper>
        <Button as="a" href="/travel" fullWidth icon={<Add />}>
          Travel Add
        </Button>
        <Button fullWidth icon={<DirectionsCar />}>
          Start Driving
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
