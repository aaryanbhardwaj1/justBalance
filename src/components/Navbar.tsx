import React, { useState } from "react";
import styles from "./Navbar.module.css";
import justBalanceLogo from '../assets/justBalanced2.png'
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={justBalanceLogo} alt="justBalance Logo" />
      </div>

      {/* Page Links */}
      <div className={styles.navLinks}>
        {/* <Link to="/justBalance/" className={styles.navLink}>Home</a> */}
        <CustomLink to="/" >Home</CustomLink>
        {/* <Link to="/justBalance/about/" className={styles.navLink}>About</a> */}
        <CustomLink to="/pricing">Pricing</CustomLink>
        {/* <Link to="/justBalance/contact/" className={styles.navLink}>Contact</a> */}
        {/* <Link to="/justBalance/login/" className={styles.navLink}>Log In</a> */}
       <CustomLink to="/login">Log In</CustomLink>

      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname;
  const [count, setCount] = useState(0);

  const forceRerender = () => {
    setCount(prevCount => prevCount + 1); 
  };

  

  return (
    <li className={path===to? "" : ""} onClick={forceRerender}>
      <Link to={to} {...props}>

        {children}
      
      </Link>
    </li>
  )
  
}

export default Navbar;
