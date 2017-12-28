import styled, { css } from 'styled-components'
import { defaultTheme, themePropType } from '../../../styles'

// istanbul ignore next
const setTheme = ({ theme }) => css`
  font-family: ${theme.fontFamilyRoboto};
`

const StepperTitleStyled = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.075em;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;

  ${setTheme}
`

StepperTitleStyled.propTypes = {
  theme: themePropType,
}

StepperTitleStyled.defaultProps = {
  theme: defaultTheme,
}

export default StepperTitleStyled
