import styles from "./ChatBody.module.css";
import { LuSend } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";
import { useState } from "react";

const ChatBody = () => {
  const [valueForTextarea, setValueForTextArea] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setValueForTextArea(e.target.value);
    console.log(valueForTextarea);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMessage(valueForTextarea);
      setValueForTextArea("");
    }
  };
  return (
    <div className={styles.chatBodyWrapper}>
      <div className={styles.chatBody}>
        <h1>Thanks for trying Tx GPT</h1>

        {/* Chat suggestions */}
        <div className={styles.chatSuggestion}>
          <div className={styles.chatBox}>Suggestion-2</div>
          <div>Suggestion-3</div>
          <div>Suggestion-4</div>
        </div>
      </div>
      <div className={styles.inputSection}>
        <textarea
          className={styles.textarea}
          placeholder="Type your message..."
          onChange={handleChange}
          value={valueForTextarea}
          onKeyDown={handlePressEnter}
        ></textarea>
        <div className={styles.buttonSection}>
          <button className={styles.attachButton}>
            <LuSend color="white" size="21px" />
          </button>
          <button className={styles.sendButton}>
            <IoIosAttach color="white" size="22px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
