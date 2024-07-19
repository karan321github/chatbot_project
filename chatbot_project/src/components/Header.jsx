import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiTalk } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import txLogo from "../assets/tx_logo.jpeg";
import { FaChevronDown } from "react-icons/fa6";

const Header = ({ isSideWrapperOpen, toggleSideWrapper, openModal }) => {
  console.log(openModal);
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
        <div className={styles.toggleModal}>
          <img src={txLogo} alt="" />
          <h1>Tx GPT</h1>
          <button onClick={openModal} className={styles.modalButton}>
            <FaChevronDown fontSize="10px" />
          </button>
        </div>
      </div>
      <nav className={styles.txNav}>
        <ul className={styles.txNavList}>
          <Link to="/contact">
            <FaCircleUser size="30px" color="gray" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
