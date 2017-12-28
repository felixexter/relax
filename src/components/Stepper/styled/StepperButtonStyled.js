import styled, { css } from 'styled-components'
import pt from 'prop-types'
import { defaultTheme, themePropType, focusRing } from '../../../styles'

// istanbul ignore next
const setTheme = ({ theme, isActive, isCurrent }) => css`
  color: ${isActive ? theme.colorViolet : theme.colorGrey};

  ${!isActive ? css`
    &:not(:disabled):hover {
      color: ${theme.colorViolet};
    }
  ` : ''}

  ${!isCurrent ? css`
    &:not(:disabled):hover::before {
      opacity: 1;
    }
  ` : ''}

  &::before {
    background-color: ${theme.colorViolet};
  }

  &::after {
    border-color: ${isActive ? theme.colorViolet : theme.colorGrey};
  }

  ${focusRing(css`
    &:not(:disabled) {
      color: ${theme.colorViolet};

      ${!isCurrent ? css`
        &::before {
          opacity: 1;
        }
      ` : ''}
    }
  `)}
`

const StepperButtonStyled = styled.button`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: block;
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  user-select: none;
  cursor: default;
  background: none;
  border: none;
  border-radius: 0;
  transition-duration: 0.25s;
  transition-property: color;

  &::before {
    position: absolute;
    top: 44px;
    left: 28px;
    width: 8px;
    height: 8px;
    content: '';
    border-radius: 100%;
    opacity: 0;
    transition-duration: 0.25s;
    transition-property: opacity;
  }

  &::after {
    position: relative;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    content: '';
    border-width: 6px;
    border-style: solid;
    border-radius: 100%;
    transition-duration: 0.25s;
    transition-property: border-color;
  }

  ${setTheme}
`

StepperButtonStyled.propTypes = {
  theme: themePropType,
  isActive: pt.bool,
  isCurrent: pt.bool,
}

StepperButtonStyled.defaultProps = {
  theme: defaultTheme,
  isActive: false,
  isCurrent: false,
}

export default StepperButtonStyled
