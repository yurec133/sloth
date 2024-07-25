import React from "react";
import styles from "./SocialIcons.module.css";
import Image from "next/image";
import classNames from "classnames";

export interface SocialIconProps {
  imageSrc: string;
  width: number;
  height: number;
  link: string;
}
interface SocialIconsProps {
  items: SocialIconProps[];
  vertical?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ vertical, items }) => {
  return (
    <div
      className={classNames(styles.socialIcons, {
        [styles.socialIconsVertical]: vertical,
      })}
    >
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src={item.imageSrc}
            priority
            width={item.width}
            height={item.height}
            alt={`Social icon ${index + 1}`}
            className={styles.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
