import React from 'react'
import './signup.css'

export default function signup() {
    return (
        <div className="SignIn-form">

            <form >
            <label for="first name">First Name</label>
            
            <input  type="first name" placeholder="Enter first name" id="first name" name="first name"/>
           
            <label for="last name">Last Name</label>
            
            <input  type="last name" placeholder="Enter last name" id="last name" name="last name"/>
            
            <label for="email">Email</label>
           
            <input  type="email" placeholder="xyz@gmail.com" id="email" name="email" />
            
            <label for="password">Password</label>
            
            <input  type="password" placeholder="********" id="password" name="password" />
            
            <button type="submit">Sign In</button>
            
            <b>If you already have an account</b>
            <button>Log In</button>
            


          </form>
        </div>

      );

    }

