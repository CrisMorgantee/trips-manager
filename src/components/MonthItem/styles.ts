import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2.4rem;
    padding-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};

    border-bottom: 1px solid ${theme.colors.darkGray};
  `}
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    & + p {
      margin-left: ${theme.spacings.xsmall};
      color: ${theme.colors.green};
      font-weight: ${theme.font.bold};
    }
  `}
`
