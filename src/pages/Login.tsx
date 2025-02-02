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
            Don't have an account? <CustomLink href = '/signup'> Sign Up</CustomLink>
          </p>
        </form>
      </div>
    </div>
    </>

    
)
}

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname

  return (
    <li className={path===href? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
  
}

export default Login
