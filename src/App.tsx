import React from 'react'
import Header from '@components/Header/Header'
import Router from '@router'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  )
}

export default App
