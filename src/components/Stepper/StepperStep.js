import React, { PureComponent } from 'react'
import pt from 'prop-types'
import emptyFunction from 'fbjs/lib/emptyFunction'
import StepperStepStyled from './styled/StepperStepStyled'
import StepperButtonStyled from './styled/StepperButtonStyled'
import StepperTitleStyled from './styled/StepperTitleStyled'

export default class StepperStep extends PureComponent {
  static propTypes = {
    isActive: pt.bool,
    isCurrent: pt.bool,
    isDisabled: pt.bool,
    step: pt.number,
    onClick: pt.func,
  }

  static defaultProps = {
    isActive: false,
    isCurrent: false,
    isDisabled: false,
    step: 1,
    onClick: emptyFunction,
  }

  handleClick = () => {
    this.props.onClick(this.props.step)
  }

  render() {
    const {
      isActive,
      isCurrent,
      isDisabled,
      children,
    } = this.props

    return (
      <StepperStepStyled
        isActive={isActive}
      >
        <StepperButtonStyled
          type='button'
          isActive={isActive}
          isCurrent={isCurrent}
          disabled={isDisabled}
          onClick={this.handleClick}
        >
          <StepperTitleStyled
            isActive={isActive}
          >
            {children}
          </StepperTitleStyled>
        </StepperButtonStyled>
      </StepperStepStyled>
    )
  }
}
