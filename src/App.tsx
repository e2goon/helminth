import React, { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import Button from '@/components/Button'
import { firestore } from '@/services/firebase'

function App(): ReactElement {
  const [isContainer, toggleContainer] = useState(false)
  const [games, setGames] = useState([])
  const handleClick = () => {
    toggleContainer(!isContainer)
  }
  useEffect(() => {
    firestore()
      .collection('games')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          games.push(doc.data())
          setGames(games)
        })
      })
  }, [])
  return (
    <>
      <Fixed right bottom>
        <Button as="button" onClick={handleClick}>
          Toggle
        </Button>
      </Fixed>
      <Container isOpen={isContainer}>
        <h2>Helminth</h2>
        <ul>
          {isContainer && games.map((game, i) => <li key={i}>{game.name}</li>)}
        </ul>
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
    position: 'fixed',
    zIndex: 1
  },
  props => ({
    right: props.right && '20px',
    bottom: props.bottom && '20px'
  })
)
