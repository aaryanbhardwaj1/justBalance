import React from 'react'
import '../Login.css'
import justBalanceLogo from '../assets/justBalanced2.png'


const SignUp = () => {
  return (
    <>
        <div className="centered overlay">
      <div className="centered mediumbox2">

        <span>
          <img src={justBalanceLogo} className="logo" alt="JustBalance Logo" />
        </span>


        <form className="login-form absolute-center">
          <h2>Sign Up</h2>
          <input type="name" placeholder="First Name" required />
          <input type="name" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          
        </form>
      </div>
    </div>
    </>
    
)
}

export default SignUp
