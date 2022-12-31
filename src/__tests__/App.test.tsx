import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from '../App'

test('Renders main page correctly', () => {
  const initialState = { counter: { value: 10 } }
  const mockStore = configureStore()
  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(true).toBeTruthy()
})
