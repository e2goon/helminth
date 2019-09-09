import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  isOpen: boolean
}

function Container({ isOpen, children }: Props): ReactElement {
  return <StyledContainer isOpen={isOpen}>{children}</StyledContainer>
}

export default Container

interface IContainer {
  isOpen?: boolean
}

const StyledContainer = styled('div')<IContainer>(
  {
    position: 'fixed',
    top: '10px',
    left: '10px',
    bottom: '10px',
    width: '300px',
    border: '1px solid red',
    opacity: 0,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s',
    backgroundColor: '#fff'
  },
  props => ({
    borderColor: props.isOpen && 'blue',
    transform: props.isOpen && 'translateX(0)',
    opacity: props.isOpen && 1
  })
)
