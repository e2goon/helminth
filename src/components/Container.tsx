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
  width: 400px;
  background-color: #efefef;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
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
