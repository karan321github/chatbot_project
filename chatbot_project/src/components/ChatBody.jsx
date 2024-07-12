import React from "react";
import styles from "./ChatBody.module.css";
import { LuSend } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";

const ChatBody = () => {
  return (
    <div className={styles.chatBodyWrapper}>
      <div className={styles.chatBody}>
        <h1>Thanks for trying Tx GPT</h1>

        <div className={styles.chatSuggestion}>{/* Chat suggestions */}
          <div></div>
        </div>

      </div>
      <div className={styles.inputSection}>
        <textarea
          className={styles.textarea}
          placeholder="Type your message..."
        ></textarea>
        <div className={styles.buttonSection}>
          <button className={styles.attachButton}>
            <IoIosAttach color="white" />
          </button>
          <button className={styles.sendButton}>
            <LuSend color="white" size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
