import React from "react";
import styles from "./SideWrapper.module.css";

const SideWrapper = () => {
  return (
    <div className={styles.chatSectionWrapper}>
      <div className={styles.sidePanelWrapper}>
        <div className={styles.sidePanel}>
          <div className={styles.newConversation}>
            <button>New Conversation</button>
          </div>
          <div className={styles.existingConversation}>
            <div className={styles.existingConversationList}>
              <div className={styles.existingConversationBody}>
                {/* Existing conversation items */}
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.filesSection}>
              <p>Files</p>
              <svg type="text">{/* SVG icon */}</svg>
            </div>
            <ul className={styles.filesList}>
              <li className={styles.fileItem}>File 1</li>
              <li className={styles.fileItem}>File 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideWrapper;
