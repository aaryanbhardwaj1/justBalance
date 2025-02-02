import React from "react";
import styles from "./Navbar.module.css";
import justBalanceLogo from '../assets/justBalanced2.png'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={justBalanceLogo} alt="justBalance Logo" />
      </div>

      {/* Page Links */}
      <div className={styles.navLinks}>
        {/* <a href="/justBalance/" className={styles.navLink}>Home</a> */}
        <CustomLink href="/">Home</CustomLink>
        {/* <a href="/justBalance/about/" className={styles.navLink}>About</a> */}
        <CustomLink href="/about">About</CustomLink>
        {/* <a href="/justBalance/contact/" className={styles.navLink}>Contact</a> */}
        <CustomLink href="/contact">Contact</CustomLink>
`        {/* <a href="/justBalance/login/" className={styles.navLink}>Log In</a> */}
`        <CustomLink href="/login">Log In</CustomLink>

      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

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

export default Navbar;
