import Image from "next/image";
import styles from "./Button.module.css";

interface ButtonProps {
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  text: string;
  bgImage: string;
  width: string;
  height: string;
  onClick?: () => void;
  textShadowColor?: string;
}

const Button = ({
  iconSrc,
  text,
  bgImage,
  width,
  height,
  textShadowColor,
  iconWidth = 24,
  iconHeight = 24,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width,
        height,
      }}
    >
      <span className={styles.frame}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="icon"
            width={iconWidth}
            height={iconHeight}
            className={styles.icon}
          />
        )}
        <span
          className={styles.text}
          style={{
            margin: iconSrc ? "0 0 13px 0" : "0",
            textShadow: `0 3px 0 ${textShadowColor ? textShadowColor : "transparent"}`,
          }}
        >
          {text}
        </span>
      </span>
    </button>
  );
};

export default Button;
