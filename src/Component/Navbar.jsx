import React from 'react'
import './Navbar.css' 




function Navbar ()  {
  return (
    <>
    
      <div>

     
      <h2 className='name'>NetworkCheck</h2>
      <ul>
      <li><a href='/' className='Homee'> Home</a></li> 
      <li><a href='/About'>About</a></li>
      <li><a href='/Contact' >Contact</a></li>
      </ul>
      <ul className='premier'>
      <li ><a href='/signup' className='log'>sign up</a></li>
      <li ><a href='/login' className='log'>login</a></li>
      </ul>
      
    </div> 
    </>
  )
}

export default Navbar



