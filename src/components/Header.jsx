import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.txHeader}>
      <div className={styles.txLogo}>
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.txNav}>
        <ul className={styles.txNavList}>
          <li>
            <Link to="/">
              <img src="home-icon.png" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src="about-icon.png" alt="About" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src="contact-icon.png" alt="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
