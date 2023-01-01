import React from 'react'
import { ILetter } from '@data/mockLetters'
import LetterCard from '@components/LetterCard/LetterCard'
import styled from 'styled-components'

interface FlippableCardProps {
  letter: ILetter
}

const Container = styled.div`
  perspective: 30rem;
`

function FlippableCard(props: FlippableCardProps): JSX.Element {
  const { letter } = props

  return (
    <Container>
      <LetterCard letter={letter} />
    </Container>
  )
}

export default FlippableCard
