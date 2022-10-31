import { Email, Lock, Person } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import * as S from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import { useState } from 'react'

export type FieldErrors = {
  [key: string]: string
}

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  console.log('setFormError: ', setFormError)
  console.log('formError: ', formError)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  console.log('setFieldError: ', setFieldError)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()

    console.log('values', values)
    console.log(event.target)
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <S.FormWrapper>
      <form onSubmit={handleSignUp}>
        <TextField
          name="username"
          placeholder="Name"
          onInputChange={(v) => handleInput('username', v)}
          error={fieldError?.username}
          type="text"
          icon={<Person />}
        />
        <TextField
          name="email"
          onInputChange={(v) => handleInput('email', v)}
          error={fieldError?.email}
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          onInputChange={(v) => handleInput('password', v)}
          error={fieldError?.password}
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          onInputChange={(v) => handleInput('confirm_password', v)}
          error={fieldError?.confirm_password}
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />

        <Button size="large" fullWidth>
          Sign up now
        </Button>

        <S.FormLink>
          Already have an account?
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.FormWrapper>
  )
}

export default FormSignUp
