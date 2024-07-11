import React from "react";
import styles from "./ChatBody.module.css";

const ChatBody = () => {
  return (
    <div className={styles.chatBodyWrapper}>
      <div className={styles.chatBody}>
        <h1>Thanks for trying Tx GPT</h1>
        <div className={styles.chatSuggestion}>{/* Chat suggestions */}</div>
      </div>
      <div className={styles.inputSection}>
        <textarea
          className={styles.textarea}
          placeholder="Type your message..."
        ></textarea>
        <div className={styles.buttonSection}>
          <button className={styles.attachButton}>
            <img src="attach-icon.png" alt="Attach" />
          </button>
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
