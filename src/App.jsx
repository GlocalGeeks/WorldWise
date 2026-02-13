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
          <Route path='/' element={<Homepage />} />
          <Route path='/product' element={<Product />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/app' element={<AppLayout />}>
            <Route index element={<p>LIST OF CITIES</p>} />
            <Route path='cities' element={<p>List of Cities</p>} />
            <Route path='countries' element={<p>Countries</p>} />
            <Route path='form' element={<p>Form</p>} />
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App