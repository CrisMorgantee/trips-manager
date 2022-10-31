import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
    font-weight: 700;
    cursor: pointer;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;
    appearance: none;
    outline: none;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0.1rem;
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-left: 0;
      border-top: 0;
      opacity: 0;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
    }

    &:checked {
      border-color: ${theme.colors.secondary};
      background: ${theme.colors.secondary};

      &:before {
        opacity: 1;
      }
    }
  `}
`
