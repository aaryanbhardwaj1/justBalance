import React from 'react'
import '../Login.css'
import justBalanceLogo from '../assets/justBalanced2.png'


const Login = () => {
  return (
    <>
        <div className="centered overlay">
      <div className="centered mediumbox2">

        <span>
          <img src={justBalanceLogo} className="logo" alt="JustBalance Logo" />
        </span>


        <form className="login-form absolute-center">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
          <p className="signup-link">
            Don't have an account? <a href="/justBalance/signup/">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </>
    
)
}

export default Login
