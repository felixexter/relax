import { css } from 'styled-components'
import mozFocusInnerPatch from './mozFocusInnerPatch'

// istanbul ignore next
const focusRing = styles => css`
  &:focus:not(.focus-ring) {
    outline: none;

    ${mozFocusInnerPatch}
  }

  ${styles ? css`
    &.focus-ring {
      ${styles}
    }
  ` : ''}
`

export default focusRing
