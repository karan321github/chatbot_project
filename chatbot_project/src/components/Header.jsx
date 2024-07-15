import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiTalk } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import txLogo from "../assets/tx_logo.jpeg";

const Header = ({ isSideWrapperOpen, toggleSideWrapper }) => {
  console.log(isSideWrapperOpen);
  return (
    <header
      className={`${styles.txHeader} ${
        isSideWrapperOpen ? styles.shiftedHeader : styles.shiftedHeaderClose
      }`}
    >
      <div className={styles.txLogo}>
        {!isSideWrapperOpen && (
          <button onClick={toggleSideWrapper}>
            <GiHamburgerMenu size="20px" />
          </button>
        )}
        <img src={txLogo} alt="" />
        <h1>Tx GPT</h1>
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
