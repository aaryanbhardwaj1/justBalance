import styles from "./Navbar.module.css";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => {
    return (
      <a href={href} className={styles.navLink}>
        {children}
      </a>
    );
  };
  