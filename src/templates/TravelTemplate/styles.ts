import * as HeaderStyles from 'components/Header/styles'
import * as TextField from 'components/TextField/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${HeaderStyles.Wrapper} {
    ${({ theme }) => css`
      margin-bottom: calc(${theme.spacings.small});
    `}
  }

  ${TextField.Wrapper} {
    ${({ theme }) => css`
      margin-bottom: calc(${theme.spacings.medium});
    `}
  }
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.medium};
    right: ${theme.spacings.small};
    left: ${theme.spacings.small};

    & > button {
      margin-top: ${theme.spacings.regular};
    }
  `}
`
