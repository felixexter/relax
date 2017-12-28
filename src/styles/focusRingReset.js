import { css } from 'styled-components'
import mozFocusInnerPatch from './mozFocusInnerPatch'

export default css`
  &:focus {
    outline: none;

    ${mozFocusInnerPatch}
  }
`
