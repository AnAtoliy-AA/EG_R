import React, { useState } from 'react'
import { ILetter } from '@data/mockLetters'
import styled from 'styled-components'

interface IContainerProps {
  isFrontShown: boolean
}

const Container = styled.div<IContainerProps>`
  display: flex;
  font-size: 10rem;
  width: 15rem;
  height: 15rem;
  margin-top: 2rem;
  justify-content: space-around;
  border: 2px solid gray;
  position: relative;
  border-radius: 5px;
  border: 5px solid white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  user-select: none;
  transform-style: preserve-3d;
  transform: rotateY(${(props: IContainerProps) => (props.isFrontShown ? '0deg' : '180deg')});
  transition: 300ms;
  cursor: pointer;
`

const SideCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  width: 15rem;
  height: 15rem;
`

const FrontSide = styled(SideCard)`
  transform: rotateY(0deg);
`

const BackSide = styled(SideCard)`
  transform: rotateY(180deg);
`

interface LetterCardProps {
  letter: ILetter
}

function LetterCard(props: LetterCardProps): JSX.Element {
  const { letter } = props
  const { native, pronunciationText } = letter

  const [isFrontShown, setIsFrontShown] = useState<boolean>(true)

  const handleRotate = () => {
    setIsFrontShown((prev) => !prev)
  }

  return (
    <Container isFrontShown={isFrontShown} onClick={handleRotate}>
      <FrontSide>{native}</FrontSide>
      <BackSide>{pronunciationText}</BackSide>
    </Container>
  )
}

export default LetterCard
