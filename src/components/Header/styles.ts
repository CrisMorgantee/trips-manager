import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.regular};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Icon = styled.i`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    padding-right: 0;
    margin-right: ${theme.spacings.regular};

    &:last-child {
      margin-right: 0;
    }

    > svg {
      width: 2.4rem;
      color: ${theme.colors.white};
    }
  `}
`
