import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, lineColorProps } from '.'

export type WrapperProps = { hasIcon: boolean } & HeadingProps

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;

    svg {
      width: 2.2rem;
      height: 100%;
      margin-right: ${theme.spacings.xxsmall};
    }
  `,

  lineLeft: (theme: DefaultTheme, lineColor: lineColorProps) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: lineColorProps) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.6rem;
      width: 2.6rem;
      border-bottom: 0.3rem solid ${theme.colors[lineColor]};
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, lineLeft, lineBottom, hasIcon, lineColor, size }) => css`
    color: ${theme.colors.white};
    font-weight: 700;

    ${!!size && wrapperModifiers[size](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${!!lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
  `}
`
