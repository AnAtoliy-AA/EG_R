import React from 'react'
import { ILetter, mockLetters } from '@data/mockLetters'
import FlippableCard from '@components/FlippableCard/FlippableCard'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

function Letters(): JSX.Element {
  return (
    <Container>
      {mockLetters.map((letter: ILetter) => (
        <FlippableCard key={letter?.native} letter={letter} />
      ))}
    </Container>
  )
}

export default Letters
