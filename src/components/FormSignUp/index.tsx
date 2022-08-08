import { Email, Lock, Person } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import * as S from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'

const FormSignUp = () => {
  return (
    <S.FormWrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="name"
          icon={<Person />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
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
