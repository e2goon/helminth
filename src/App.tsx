import React, { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import Button from '@/components/Button'
import { db } from '@/services/firebase'

function App(): ReactElement {
  const [isContainer, toggleContainer] = useState(false)
  const [games, setGames] = useState([])
  const handleClick = () => {
    toggleContainer(!isContainer)
  }
  useEffect(() => {
    (async () => {
      const snapshot = await db().collection('games').get()
      console.log(snapshot.docs)
    })()
  }, [])
  return (
    <>
      <Fixed right bottom>
        <Button as="button" onClick={handleClick}>
          Toggle
        </Button>
      </Fixed>
      <Container isOpen={isContainer}>
        {isContainer &&
          games.map((game, i) => <div key={i}>{game.fields.title}</div>)}
      </Container>
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
