import { useState } from 'react'
import './LoginPoper.css'
import { assets } from '../../assets/assets'

function LoginPoper({setLoginPage}) {
    const[currentState,setCurrentState]=useState("Sign Up")
  return (
    <div className='loginPage'>
        <form className='login-form'>
            <div className="login-title">
              <h2>{currentState}</h2>
              <img onClick={()=>{setLoginPage(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-details">
                {currentState==="Log In"?<></>:<input type="text" placeholder='Your Name' required/>}
                <input type="text" placeholder='Email' required />
                <input type="password"  placeholder='password' required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Log In"}</button>
           <div className="condition">
           <input type="checkbox" required  />
            <p>For countinuing please accept the terms and conditions</p>
           </div>
           <div className="option">
           {currentState==="Sign Up"?
            <p>I have already account <span onClick={()=>setCurrentState("Log In")}> Login </span></p>:
            <p>Create a New Account?  <span onClick={()=>setCurrentState("Sign Up")}>Sign Up</span></p>}
           </div>
            </form>
     
    </div>
  )
}

export default LoginPoper
