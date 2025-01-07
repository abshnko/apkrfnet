import React from "react";
import styles from "./Input.module.scss";

const InputComponent = ({
  placeholder = "Type your message...",
  onSend,
  value,
  onChange,
  buttonLabel = "Send",
}: any) => {
    
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && onSend) {
      onSend();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className={styles.sendButton}
        onClick={onSend}
        disabled={!value.trim()}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default InputComponent;
