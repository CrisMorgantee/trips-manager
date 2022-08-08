import * as HeadingStyles from 'components/Heading/styles'
import styled, { css, DefaultTheme } from 'styled-components'
import { inputSizesProps, TextFieldProps } from '.'

type WrapperProps = {
  inputSize?: inputSizesProps
  error?: boolean
} & Pick<TextFieldProps, 'disabled'>

const wrapperModifiers = {
  small: () => css`
    width: 6rem;
  `,

  medium: () => css`
    width: 16rem;
  `,

  large: () => css`
    width: 26.6rem;
  `,

  adaptative: () => css`
    flex: 1;
  `,

  disabled: (theme: DefaultTheme) => css`
    ${HeadingStyles.Wrapper},
    ${InputWrapper},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.white};
      opacity: 0.7;

      > svg,
      &::placeholder {
        color: currentColor;
      }

      &::after {
        border-color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
      > svg {
        color: ${theme.colors.red};
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, inputSize, disabled, error }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: calc(${theme.spacings.xxxsmall} * 3);
    }

    ${!!inputSize && wrapperModifiers[inputSize]}
    ${!!disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.mainBg};
    border-radius: 0.4rem;
    padding: ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.darkGray};

    & > svg {
      width: 2.6rem;
      height: 100%;
      color: ${theme.colors.lightGray};
      margin: 0 ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall};
    }

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};

      svg {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxxsmall};
  `}
`
