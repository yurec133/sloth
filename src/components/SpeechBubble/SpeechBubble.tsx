import classNames from "classnames";
import styles from "./SpeechBubble.module.css";
import React from "react";

interface SpeechBubbleProps {
  text: React.ReactNode | string;
  label?: string;
  title?: string;
  style?: React.CSSProperties;
  left?: boolean;
}

const SpeechBubble = ({
  text,
  label,
  title,
  style,
  left,
}: SpeechBubbleProps) => {
  return (
    <div
      style={style}
      className={classNames(styles.speechBubble, {
        [styles.speechBubbleLarge]: label,
        [styles.speechBubbleLeft]: left,
      })}
    >
      {label && <div className={styles.label}>{label}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SpeechBubble;
