import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Footer from './components/base/Footer'

const Home = lazy(() => import('./Pages/Home'))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App