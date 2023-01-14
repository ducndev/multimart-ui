import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home, Shop, Cart, Checkout, Login, ProductDetails, Signup} from '../pages/';
const Routers = () => {
  return <Routes>
    <Route exact  path='/' element={<Home />}/>
    <Route  path='home' element={<Home />}/>
    <Route  path='shop' element={<Shop />}/>
    <Route  path='shop/:id' element={<ProductDetails />}/>
    <Route  path='cart' element={<Cart />}/>
    <Route  path='checkout' element={<Checkout />}/>
    <Route  path='login' element={<Login />}/>
    <Route  path='signup' element={<Signup />}/>
  </Routes>
}

export default Routers