import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'




export default function Login() {
const navigate = useNavigate()
function handleClick() {navigate('../Form')} 


  return (
    <div className="Login">

    <form >
      <div className="header">Login</div>
      
      <div className="inputs">
        <div className="input">
          <label for="email">Email</label>
          <br/>
          <input type="email"  placeholder="       xyz@gmail.com" id="email" name="email"></input>
        </div>

        <div className="input">
          <label for="password">Password</label>
          <br/>
          <input type="password" placeholder="   ********" id="password" name="password"></input>
        </div>

      </div>

      <div className="submits">
        <div className="submit"> <button type="submit" onClick={handleClick}>Login</button></div>
        <div className="submit"> <button >SignUp </button>  </div>
      </div>

    </form>
 
      
    </div>
  )
}


  