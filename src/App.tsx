import React, { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import Button from '@/components/Button'
import { CardList } from '@/components/Card'
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
      .limit(5)
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
        <CardList data={games} />
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
