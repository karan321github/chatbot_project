import { useState } from "react";
import Header from "../components/Header";
import SideWrapper from "../components/SideWrapper";
import ChatBody from "../components/ChatBody";
import styles from "./Chat.module.css";
import { selectIsLoggedIn } from "../store/reducers/userSlice";

const Chat = () => {
<<<<<<< HEAD
  const [isSideWrapperOpen, setIsSideWrapperOpen] = useState(true);
=======
  const [isSideWrapperOpen, setIsSideWrapperOpen] = useState(false);
>>>>>>> ee009d67b238556c803c3526b4e90c8920d8308f
  const isLoggedIn = selectIsLoggedIn;

  const toggleSideWrapper = () => {
    setIsSideWrapperOpen(!isSideWrapperOpen);
  };

  return (
    <div className={styles.main}>
<<<<<<< HEAD
      <Header
        isSideWrapperOpen={isSideWrapperOpen}
        toggleSideWrapper={toggleSideWrapper}
      />
=======
      <Header isSideWrapperOpen={isSideWrapperOpen} />
>>>>>>> ee009d67b238556c803c3526b4e90c8920d8308f
      <div className={styles.content}>
        {isLoggedIn && (
          <SideWrapper
            isOpen={isSideWrapperOpen}
            toggleSideWrapper={toggleSideWrapper}
          />
        )}
        <ChatBody />
      </div>
    </div>
  );
};

export default Chat;
