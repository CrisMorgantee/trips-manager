import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.xxsmall};
    right: ${theme.spacings.small};
    left: ${theme.spacings.small};

    & > button {
      margin-top: ${theme.spacings.regular};
    }
  `}
`
