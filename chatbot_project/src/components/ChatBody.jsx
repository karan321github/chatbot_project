import styles from "./ChatBody.module.css";
import { LuSend } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";

const ChatBody = ({ isOpen, toggleSideWrapper }) => {
  const [valueForTextarea, setValueForTextArea] = useState("");
  const [messages, setMessages] = useState([]);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const chatBodyRef = useRef(null);
  const textareaRef = useRef(null);
  const inputSectionRef = useRef(null);

  const handleChange = (e) => {
    setValueForTextArea(e.target.value);
    autoResizeTextarea();
  };

  const autoResizeTextarea = () => {
    if (textareaRef.current && inputSectionRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(textareaRef.current).lineHeight
      );
      const minHeight = lineHeight; // Set to the height of one line
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.max(
        minHeight,
        textareaRef.current.scrollHeight
      )}px`;

      inputSectionRef.current.style.height = "auto";
      inputSectionRef.current.style.height = `${Math.max(
        minHeight,
        textareaRef.current.scrollHeight
      )}px`;
    }
  };

  const scrollToTop = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = 0;
    }
  };

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (!showTypingIndicator) {
      scrollToBottom();
    }
  }, [messages]);

  const handlePressEnter = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (valueForTextarea.trim()) {
        setMessages([...messages, { type: "user", text: valueForTextarea }]);
        setValueForTextArea("");
        setTimeout(async () => {
          setShowTypingIndicator(true);
          const responseMessage = await simulateApiResponse(valueForTextarea);
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "api", text: responseMessage },
          ]);
          setShowTypingIndicator(false);
          scrollToTop();
        }, 500);
      }
    } else if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setValueForTextArea(valueForTextarea + "\n");
    }
  };

  const handleClickOnSendButton = async () => {
    if (valueForTextarea.trim()) {
      setMessages([...messages, { type: "user", text: valueForTextarea }]);
      setValueForTextArea("");
      setTimeout(async () => {
        setShowTypingIndicator(true);
        scrollToTop();

        const responseMessage = await simulateApiResponse(valueForTextarea);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "api", text: responseMessage },
        ]);
        setShowTypingIndicator(false);
        scrollToTop();
      }, 500); // Delay for effect
    }
  };

  const simulateApiResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`API response to: "${userMessage}"`);
      }, 1000);
    });
  };

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
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", autoResizeTextarea);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("input", autoResizeTextarea);
      }
    };
  }, []);

  return (
    <div
      className={`${
        isOpen ? styles.chatBodyWrapper : styles.chatBodyWrapperToggle
      }`}
    >
      <div
        className={`${styles.chatBody} ${isScrollingUp ? styles.sticky : ""}`}
        ref={chatBodyRef}
      >
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
          {showTypingIndicator && (
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.inputSection} ref={inputSectionRef}>
        <textarea
          className={styles.textarea}
          placeholder="Type your message..."
          onChange={handleChange}
          value={valueForTextarea}
          onKeyDown={handlePressEnter}
          ref={textareaRef}
        ></textarea>
        <div className={styles.buttonSection}>
          <button
            className={`${
              valueForTextarea !== ""
                ? styles.attachButtonHighlight
                : styles.attachButton
            } `}
            onClick={handleClickOnSendButton}
          >
            <LuSend color="white" size="21px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
