import React from 'react'
import { ILetter, mockLetters } from '@data/letters'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

function Letters(): JSX.Element {
  return (
    <Container>
      {mockLetters.map((letter: ILetter) => {
        const { native } = letter

        return <div key={native}>{native}</div>
      })}
    </Container>
  )
}

export default Letters
