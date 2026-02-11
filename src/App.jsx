import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Pricing  from "./pages/Pricing"
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='pricing' element={<Pricing />}></Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App