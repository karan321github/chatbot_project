import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        {/* <button className={styles.closeButton} onClick={onClose}>
          X
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
