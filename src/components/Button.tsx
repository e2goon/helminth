import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  as?: any
  onClick?: () => void
}

function Button({ children, as, onClick }: Props): ReactElement {
  return (
    <StyledButton as={as} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

interface IButton {
  as?: any
}

const StyledButton = styled('a')<IButton>({
  padding: 0,
  border: 0,
  background: 'transparent',
  cursor: 'pointer'
})
