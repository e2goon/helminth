import React, { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: ReactNode
  isOpen: boolean
}

interface IContainer {
  isOpen?: boolean
}

function Container({ isOpen, children }: Props): ReactElement {
  return <StyledContainer isOpen={isOpen}>{children}</StyledContainer>
}

export default Container

const StyledContainer = styled.div<IContainer>`
  position: fixed;
  top: 20px;
  right: 20px;
  bottom: 20px;
  width: 300px;
  background-color: #f5f5f5;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  border-radius: 4px;
  opacity: 0;
  transform: translate(0, 10px) scale(0.99);
  transition: all 0.4s;
  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translate(0, 0) scale(1);
    `}
`
