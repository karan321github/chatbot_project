import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiTalk } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import txLogo from "../assets/tx_logo.jpeg";

const Header = () => {
  return (
    <header className={styles.txHeader}>
      <div className={styles.txLogo}>
        <GiHamburgerMenu size="25px" />
        <img src={txLogo} alt="" />
        <h1>Testing Xperts</h1>
      </div>
      <nav className={styles.txNav}>
        <ul className={styles.txNavList}>
          <li>
            <Link to="/">
              <GiTalk color="green" size="30px" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <GiTalk radius={"50px"} color="blue" size="30px" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaCircleUser size="30px" color="gray" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
