import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.txHeader}>
      <Link className={styles.txLogo}>
        <img src="logo.png" alt="Logo" />
      </Link>
      <nav className={styles.txNav}>
        <Link href="/">
          <img src="home-icon.png" alt="Home" />
        </Link>
        <Link href="/about">
          <img src="about-icon.png" alt="About" />
        </Link>
        <Link href="/contact">
          <img src="contact-icon.png" alt="Contact" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
