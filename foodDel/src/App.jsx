// import React from 'react'
import './App.css'
import NavBar from './Components/Navbar/navbar'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import AddProduct from './pages/addProduct/addProduct'
import { Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import LoginPoper from './Components/LoginPoper/LoginPoper'
function App() {
  const [loginPage,setLoginPage]=useState(false)
  return (
    <div className='app'>
      {loginPage?<LoginPoper setLoginPage={setLoginPage} />:null}
      <NavBar setLoginPage={setLoginPage}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
