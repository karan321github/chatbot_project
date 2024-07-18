import { useState } from "react";
import Header from "../components/Header";
import SideWrapper from "../components/SideWrapper";
import ChatBody from "../components/ChatBody";
import styles from "./Chat.module.css";
import { selectIsLoggedIn } from "../store/reducers/userSlice";
import Modal from "../components/Modal";
import { RiRadioButtonLine } from "react-icons/ri";

const Chat = () => {
  const [isSideWrapperOpen, setIsSideWrapperOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoggedIn = selectIsLoggedIn;

  const toggleSideWrapper = () => {
    setIsSideWrapperOpen(!isSideWrapperOpen);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  console.log(isSideWrapperOpen);
  return (
    <div className={styles.main}>
      <Header
        isSideWrapperOpen={isSideWrapperOpen}
        toggleSideWrapper={toggleSideWrapper}
        openModal={openModal}
      />
      <div className={styles.content}>
        {isLoggedIn && (
          <SideWrapper
            isOpen={isSideWrapperOpen}
            toggleSideWrapper={toggleSideWrapper}
          />
        )}
        <ChatBody
          isOpen={isSideWrapperOpen}
          toggleSideWrapper={toggleSideWrapper}
        />
      </div>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <div className={styles.modalList}>
          <div className={styles.modalRadioButtons}>
            <RiRadioButtonLine color="green" />
            <h3>Talk online</h3>
          </div>
          <div className={styles.modalRadioButtons}>
            <RiRadioButtonLine color="red" />
            <h3>Talk offline</h3>
          </div>
          <div className={styles.line}></div>
          
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
