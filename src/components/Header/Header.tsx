import React, { useCallback } from 'react'
import { RootState } from '@store/store'
import { decrement, increment } from '@store/counter/counterSlice'
import { useAppSelector, useAppDispatch } from '@hooks/store'
import './Header.scss'

function Header(): JSX.Element {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  const handleDecrement = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])

  return (
    <div>
      <div>
        <button type='button' aria-label='Increment value' onClick={handleIncrement}>
          Increment
        </button>
        <span>{count}</span>
        <button type='button' aria-label='Decrement value' onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Header
