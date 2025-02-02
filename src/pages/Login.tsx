import React from 'react'
import '../Login.css'
import justBalanceLogo from '../assets/justBalanced2.png'
import { Link } from "react-router-dom";

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
            Don't have an account? <CustomLink to = '/signup'> Sign Up</CustomLink>
          </p>
        </form>
      </div>
    </div>
    </>

    
)
}

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname

  return (
    <li className={path===to? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link >
    </li>
  )
  
}

export default Login
