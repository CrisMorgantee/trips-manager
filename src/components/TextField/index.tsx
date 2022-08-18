import Heading, { HeadingProps, lineColorProps } from 'components/Heading'
import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState
} from 'react'
import * as S from './styles'

type TextFieldTypes =
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>

export type inputSizesProps = 'small' | 'medium' | 'large' | 'adaptative'

export type TextFieldProps = {
  onInput?: (value: string) => void
  headingSize?: HeadingProps['size']
  inputSize?: inputSizesProps
  icon?: JSX.Element
  label?: string
  lineColor?: lineColorProps
  initialValue?: string
  disabled?: boolean
  error?: string
  as?: React.ElementType
} & TextFieldTypes

const TextField = ({
  onInput,
  headingSize = 'medium',
  inputSize = 'adaptative',
  icon,
  label,
  name,
  lineColor = 'orange',
  initialValue = '',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setvalue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setvalue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error} inputSize={inputSize}>
      {!!label && (
        <Heading
          as="label"
          htmlFor={name}
          size={headingSize}
          lineBottom
          lineColor={lineColor}
        >
          {label}
        </Heading>
      )}

      <S.InputWrapper>
        {!!icon && icon}
        <S.Input
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
