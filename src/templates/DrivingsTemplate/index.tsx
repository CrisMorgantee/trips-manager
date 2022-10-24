import { Add, DirectionsCar, Home } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { ButtonWrapper } from 'components/ButtonWrapper'
import { Container } from 'components/Container'
import { DrivingDetailsProps } from 'components/DrivingDetails'
import Header from 'components/Header'
import MonthItem, { CityProps, MonthItemProps } from 'components/MonthItem'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type DashboardProps = {
  isVisible?: boolean
}

const Dashboard = () => {
  const [months, setMonths] = useState<MonthItemProps[]>([])
  const [citys, setCitys] = useState<CityProps[]>([])
  const [drivings, setDrivings] = useState<DrivingDetailsProps[]>([])

  const router = useRouter()

  useEffect(() => {
    setMonths([
      { month: 'September', days: '10', amount: 'R$ 500,00' },
      { month: 'August', days: '10', amount: 'R$ 500,00' }
    ])

    setDrivings([
      {
        date: '10/09',
        hourStart: '08:00h',
        hourStop: '12:00h'
      },
      {
        date: '14/09',
        hourStart: '08:00h',
        hourStop: '18:10h'
      }
    ])

    setCitys([
      {
        city: 'Nova Lima',
        departure_day: '10/09',
        arrival_day: '14/09',
        amount: 'R$ 250,00'
      },
      {
        city: 'Lucas do Rio Verde',
        departure_day: '20/08',
        arrival_day: '25/08',
        amount: 'R$ 250,00'
      }
    ])
  }, [])

  const goTo = () => {
    router.push('/dashboard', undefined, { shallow: true })
  }

  const handleMoreInfo = ({ month, days, amount }: MonthItemProps) => {
    console.log('amount: ', amount)
    console.log('days: ', days)
    console.log('month: ', month)
  }

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
          headingIcon={<DirectionsCar />}
          title="Drivings"
          icon={<Home />}
          onClick={goTo}
        />

        <S.MonthsList>
          {months.map(({ month, days, amount }) => (
            <MonthItem
              key={month}
              month={month}
              citys={citys}
              onClick={() => handleMoreInfo({ month, days, amount })}
              drivings={drivings}
            />
          ))}
        </S.MonthsList>
      </Container>
      <ButtonWrapper>
        <Button as="a" href="/travel" fullWidth icon={<Add />}>
          Travel Add
        </Button>
        <Button fullWidth icon={<DirectionsCar />}>
          Start Driving
        </Button>
      </ButtonWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
