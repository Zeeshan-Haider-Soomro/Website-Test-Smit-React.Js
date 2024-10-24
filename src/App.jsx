import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "../src/pages/Home"
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App