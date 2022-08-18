import { DocumentText } from '@styled-icons/heroicons-outline'
import {
  CalendarToday as Calendar,
  Save
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { ButtonWrapper } from 'components/ButtonWrapper'
import { Container } from 'components/Container'
import { FormWrapper } from 'components/Form'
import Header from 'components/Header'
import TextField from 'components/TextField'
import Image from 'next/image'
import * as S from './styles'

const Travel = () => {
  const goTo = () => {
    location.href = '/dashboard'
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
          title="Add Travel Day"
          icon={<DocumentText />}
          onClick={goTo}
        />

        <FormWrapper>
          <form action="">
            <TextField
              label="Employee"
              headingSize="small"
              lineColor="secondary"
            />

            <TextField
              label="Departure Day"
              headingSize="small"
              lineColor="secondary"
            />

            <TextField
              label="Arrival Day"
              headingSize="small"
              lineColor="secondary"
            />

            <ButtonWrapper>
              <Button type="submit" fullWidth icon={<Save />}>
                Save
              </Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Travel
