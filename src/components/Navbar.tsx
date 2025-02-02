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
        <a href="/justBalance/" className={styles.navLink}>Home</a>
        <a href="/justBalance/about/" className={styles.navLink}>About</a>
        <a href="/justBalance/contact/" className={styles.navLink}>Contact</a>
        <a href="/justBalance/login/" className={styles.navLink}>Log In</a>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
