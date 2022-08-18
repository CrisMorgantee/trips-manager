import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    line-height: 2.4rem;
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxsmall};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.darkGray};
  `}
`

export const ContentWrapper = styled(InfoWrapper)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} 0;
    width: 98%;
    align-self: end;
  `}
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};

    span {
      color: ${theme.colors.green};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const DetailText = styled(Text)`
  ${({ theme }) => css`
    margin-left: 0;
    margin-right: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    display: inline-flex;
    align-items: center;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      &:after {
        content: '';
        position: absolute;
        right: -12px;
        display: inline-flex;
        align-items: center;
        border: .05rem solid ${theme.colors.white};
        width: ${theme.spacings.xxsmall};

    }
  `}
`
export const DetailTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`
