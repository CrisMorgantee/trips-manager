import styled, { css } from 'styled-components'

export const Points = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #7c7a80;
    border-radius: ${theme.border.radius};
    position: relative;
    margin: 0 ${theme.spacings.xsmall};

    &:after {
      content: '';
      border: 3px solid #7c7a80;
      border-radius: ${theme.border.radius};
      position: absolute;
      left: 4px;
      margin-left: ${theme.spacings.xxxsmall};
    }

    &:before {
      content: '';
      border: 3px solid #7c7a80;
      border-radius: ${theme.border.radius};
      position: absolute;
      right: 4px;
      margin-right: ${theme.spacings.xxxsmall};
    }
  `}
`
