import React, { useCallback } from 'react'
import { RootState } from '@store/store'
import { decrement, increment } from '@store/counter/counterSlice'
import { useAppSelector, useAppDispatch } from '@hooks/store'
import Button from '@mui/material/Button'
import styled from 'styled-components'

function CountValue(): JSX.Element {
  const count = useAppSelector((state: RootState) => state.counter.value)
  return <span>{count}</span>
}

const Container = styled.div`
  text-align: center;
`

function Header(): JSX.Element {
  const dispatch = useAppDispatch()

  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  const handleDecrement = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])

  return (
    <Container>
      <Button type='button' aria-label='Increment value' onClick={handleIncrement}>
        Increment
      </Button>
      <CountValue />
      <Button type='button' aria-label='Decrement value' onClick={handleDecrement}>
        Decrement
      </Button>
    </Container>
  )
}

export default Header
