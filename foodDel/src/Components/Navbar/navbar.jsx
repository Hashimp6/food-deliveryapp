// import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'
import { Link } from 'react-router-dom'
function NavBar({setLoginPage}) {
    const [menu,setMenu]=useState("Home")
  return (
    <>
    <div className='nav-bar'>
    <img src={assets.logo} alt="" className='logo'/> 
    <ul className='navbar-menu'>
         <Link to={'/'} onClick={()=>setMenu("Home")} className={menu==='Home'?'active':''}>Home</Link>
         <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==='Menu'?'active':''}>Menu</a>
         <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==='Mobile-App'?'active':''}>Mobile App</a>
         <a href='#footer ' onClick={()=>setMenu("Contact-Us")} className={menu==='Contact-Us'?'active':''}>Contact Us</a>
    </ul>
    <div className="nav-right">
      <img src={assets.search_icon} alt="" />
        <div className="cart-button">
        <Link to={'/cart'}>
        <img src={assets.basket_icon} alt="" /></Link> 
            <div className="dot"></div>
        </div>
        <div className="signin"><button onClick={()=>setLoginPage(true)}>Sign in</button></div>
    </div>
    </div>
    </>
  )
}

export default NavBar
