import React from 'react'
import './Navbar.css' 




function Navbar ()  {
  return (
    <>
    
      <div>

     
      <h2>NetworkCheck</h2>
      <ul>
      <li><a href='/Home' className='Homee'> Home</a></li> 
      <li><a href='/About'>About</a></li>
      <li><a href='/Contact' >Contact</a></li>
      </ul>
      <ul className='premier'>
      <li ><a href='/sign in' className='log'>sign in</a></li>
      <li ><a href='/login' className='log'>login</a></li>
      </ul>
      
    </div> 
    </>
  )
}

export default Navbar



