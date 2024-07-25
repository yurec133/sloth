import Image from "next/image";
import styles from "./Button.module.css";
import Link from "next/link";

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
  href?: string;
  link?: boolean;
}

const Button = ({
  iconSrc,
  text,
  bgImage,
  width,
  height,
  href,
  textShadowColor,
  iconWidth = 24,
  iconHeight = 24,
  onClick,
  link,
}: ButtonProps) => {
  const buttonContent = (
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
  );

  if (link && href) {
    return (
      <Link
        replace
        href={href}
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
        {buttonContent}
      </Link>
    );
  }

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
      {buttonContent}
    </button>
  );
};

export default Button;
