import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '@pages/Home/Home'
import Letters from '@pages/Letters/Letters'
import NotFound from '@pages/NotFound/NotFound'

const baseUrl = import.meta.env.BASE_URL

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={baseUrl} element={<Home />} />
        <Route path={`${baseUrl}letters`} element={<Letters />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
