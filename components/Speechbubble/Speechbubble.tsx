import React from "react";
import styles from "./Speechbubble.module.scss";

interface SpeechBubbleProps {
  text: string;
  isAnswer?: boolean; // Determines whether it's a question or an answer
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, isAnswer = false }) => {
  return (
    <div className={`${styles.speechBubble} ${isAnswer ? styles.answer : styles.question}`}>
      <p>{text}</p>
    </div>
  );
};

export default SpeechBubble;