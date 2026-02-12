import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Product from './pages/Product'
import Pricing  from "./pages/Pricing"
import AppLayout from './pages/AppLayout'
import Login from "./pages/Login"
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/app' element={<AppLayout />}></Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App