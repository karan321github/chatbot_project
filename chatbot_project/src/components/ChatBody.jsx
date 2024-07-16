import styles from "./ChatBody.module.css";
import { LuSend } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const ChatBody = () => {
  const [valueForTextarea, setValueForTextArea] = useState("");
  const [messages, setMessages] = useState([]);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const chatBodyRef = useRef(null);

  const handleChange = (e) => {
    setValueForTextArea(e.target.value);
  };

  const handlePressEnter = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (valueForTextarea.trim()) {
        // Add user message
        setMessages([...messages, { type: "user", text: valueForTextarea }]);
        setValueForTextArea("");

        // Simulate API response
        const responseMessage = await simulateApiResponse(valueForTextarea);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "api", text: responseMessage },
        ]);
      }
    }
  };

  // Simulate an API response (Replace with actual API call)
  const simulateApiResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`API response to: "${userMessage}"`);
      }, 1000);
    });
  };

  // Handle scroll events to hide/show the scroll bar
  const handleScroll = () => {
    if (chatBodyRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatBodyRef.current;
      setIsScrollingUp(scrollTop + clientHeight < scrollHeight);
    }
  };

  useEffect(() => {
    const chatBodyElement = chatBodyRef.current;
    chatBodyElement.addEventListener("scroll", handleScroll);

    return () => {
      chatBodyElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.chatBodyWrapper}>
      <div
        className={`${styles.chatBody} ${isScrollingUp ? styles.sticky : ""}`}
        ref={chatBodyRef}
      >
        <h1>Thanks for trying Tx GPT</h1>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.type === "user" ? styles.userMessage : styles.apiMessage
              }
            >
              {message.text}
            </div>
          ))}
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
          {/* <button className={styles.sendButton}>
            <IoIosAttach color="white" size="22px" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
