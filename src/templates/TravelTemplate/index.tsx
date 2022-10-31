import { DocumentText } from '@styled-icons/heroicons-outline'
import {
  CalendarToday as Calendar,
  CalendarToday,
  Person,
  Save
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { ButtonWrapper } from 'components/ButtonWrapper'
import Checkbox from 'components/Checkbox'
import { Container } from 'components/Container'
import { FormWrapper } from 'components/Form'
import Header from 'components/Header'
import TextField from 'components/TextField'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'

const Travel = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({ check: false })

  // const [values, setValues] = useState({ email: '', password: '' })

  const router = useRouter()
  // const { push } = routes
  const goTo = () => {
    router.push('/dashboard', undefined, { shallow: true })
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    console.log('travels', values)

    // sign in
    // const result = await signIn()

    // if (result?.url) {
    //   return push(result?.url)
    // }

    setLoading(false)
  }

  const handleCheckbox = (name: string, value: string) => {
    setValues((s) => ({ ...s, check: name.includes(value) }))
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
          <form onSubmit={handleSubmit} method="POST">
            <TextField
              label="Employee"
              headingSize="small"
              lineColor="secondary"
              icon={<Person />}
              placeholder="Name"
              onInputChange={(v) => handleInput('employee', v)}
            />

            <TextField
              icon={<CalendarToday />}
              type="date"
              label="Departure Day"
              onInputChange={(v) => handleInput('departure_day', v)}
              headingSize="small"
              lineColor="secondary"
              initialValue={Date.now().toString()}
            />

            <TextField
              icon={<CalendarToday />}
              type="date"
              label="Arrival Day"
              onInputChange={(v) => handleInput('arrival_day', v)}
              headingSize="small"
              lineColor="secondary"
              // disabled
            />

            <Checkbox
              name="driving"
              label="Driving"
              labelFor="driving"
              isChecked={values.check}
              onCheck={() => handleCheckbox('driving', 'driving')}
            />

            <ButtonWrapper>
              <Button type="submit" fullWidth icon={<Save />}>
                {loading ? '...' : <span>Save</span>}
              </Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Travel
