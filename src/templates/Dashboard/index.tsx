import {
  Add,
  CalendarToday as Calendar,
  DirectionsCar,
  Visibility,
  VisibilityOff
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { ButtonWrapper } from 'components/ButtonWrapper'
import { Container } from 'components/Container'
import Header from 'components/Header'
import MonthItem, { CityProps, MonthItemProps } from 'components/MonthItem'
import { Points } from 'components/Points'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type DashboardProps = {
  isVisible?: boolean
}

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [months, setMonths] = useState<MonthItemProps[]>([])
  const [citys, setCitys] = useState<CityProps[]>([])

  const router = useRouter()

  useEffect(() => {
    setMonths([
      { month: 'September', days: '10', amount: 'R$ 500,00' },
      { month: 'August', days: '10', amount: 'R$ 500,00' }
    ])
  }, [])

  useEffect(() => {
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

  const handleVisibilityChange = () => setIsVisible(!isVisible)

  const handleAction = () => {
    router.push('/drivings', undefined, { shallow: true })
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
          headingIcon={<Calendar />}
          title="Months"
          icon={isVisible ? <Visibility /> : <VisibilityOff />}
          actionIcon={<DirectionsCar />}
          onClick={handleVisibilityChange}
          handleAction={handleAction}
        />

        <S.MonthsList>
          {months.map(({ month, days, amount }) => (
            <MonthItem
              key={month}
              month={month}
              days={isVisible ? `${days} dias` : <Points />}
              amount={isVisible ? amount : <Points />}
              onClick={() => handleMoreInfo({ month, days, amount })}
              isVisible={isVisible}
              citys={citys}
            />
          ))}
        </S.MonthsList>
      </Container>
      <ButtonWrapper>
        <Link href="/travel" passHref>
          <Button as="a" fullWidth icon={<Add />}>
            Travel Add
          </Button>
        </Link>
        <Button fullWidth icon={<DirectionsCar />}>
          Start Driving
        </Button>
      </ButtonWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
