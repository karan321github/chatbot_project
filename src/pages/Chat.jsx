import React from "react";
import Header from "../components/Header";
import SideWrapper from "../components/SideWrapper";
import ChatBody from "../components/ChatBody";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideWrapper />
        <ChatBody />
      </div>
    </div>
  );
};

export default Chat;
