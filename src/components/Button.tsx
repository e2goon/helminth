import React, { ReactElement, SFC } from 'react'
import styled from '@emotion/styled'

interface Props {
  children: any
  as?: string
}

interface StyledButtonProps {
  as?: string
}

const StyledButton = styled('a')<StyledButtonProps>`
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`

function Button({ children, as }: Props): ReactElement {
  return <StyledButton as={as}>{children}</StyledButton>
}

export default Button
