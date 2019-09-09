import React, { useState, ReactElement } from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import Button from '@/components/Button'

function App(): ReactElement {
  const [isContainer, toggleContainer] = useState(false)
  const handleClick = () => {
    toggleContainer(!isContainer)
  }
  return (
    <>
      <Fixed right bottom>
        <Button as="button" onClick={handleClick}>
          Toggle
        </Button>
      </Fixed>
      <Container isOpen={isContainer}>hi</Container>
    </>
  )
}

export default App

interface IFixed {
  right: any
  bottom: any
}

const Fixed = styled('div')<IFixed>(
  {
    position: 'fixed'
  },
  props => ({
    right: props.right && '20px',
    bottom: props.bottom && '20px'
  })
)
