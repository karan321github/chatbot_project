import { useState } from "react";
import Header from "../components/Header";
import SideWrapper from "../components/SideWrapper";
import ChatBody from "../components/ChatBody";
import styles from "./Chat.module.css";
import { selectIsLoggedIn } from "../store/reducers/userSlice";

const Chat = () => {
  const [isSideWrapperOpen, setIsSideWrapperOpen] = useState(false);
  const isLoggedIn = selectIsLoggedIn;

  const toggleSideWrapper = () => {
    setIsSideWrapperOpen(!isSideWrapperOpen);
  };

  return (
    <div className={styles.main}>
      <Header isSideWrapperOpen={isSideWrapperOpen} />
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
