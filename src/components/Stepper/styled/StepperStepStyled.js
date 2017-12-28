import styled, { css } from 'styled-components'
import pt from 'prop-types'
import { defaultTheme, themePropType } from '../../../styles'

// istanbul ignore next
const setTheme = ({ theme, isActive }) => css`
  &:not(:first-child)::before {
    background-color: ${isActive ? theme.colorViolet : theme.colorGrey};
  }

  ${!isActive ? css`
    &:not(:last-child)::after {
      background-color: ${theme.colorGrey};
    }
  ` : ''}
`

const StepperStepStyled = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:not(:first-child)::before,
  &:not(:last-child)::after {
    position: absolute;
    top: 45px;
    display: block;
    box-sizing: border-box;
    width: calc(100% - 20px);
    height: 6px;
    content: '';
    transition-duration: 0.25s;
    transition-property: background-color;
  }

  &::before {
    right: calc(50% + 10px);
  }

  &::after {
    left: calc(50% + 10px);
  }

  ${setTheme}
`

StepperStepStyled.propTypes = {
  theme: themePropType,
  isActive: pt.bool,
}

StepperStepStyled.defaultProps = {
  theme: defaultTheme,
  isActive: false,
}

export default StepperStepStyled
