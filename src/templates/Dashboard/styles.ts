import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const MonthsList = styled.ul`
  width: 100%;
  list-style: none;
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
