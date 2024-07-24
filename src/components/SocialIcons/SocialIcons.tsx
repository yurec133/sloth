import React from "react";
import styles from "./SocialIcons.module.css";
import Image from "next/image";

interface SocialIconsProps {
  images: string[];
  links: string[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ images, links }) => {
  return (
    <div className={styles.socialIcons}>
      {images.map((image, index) => (
        <a
          key={index}
          href={links[index]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src={image}
            priority
            layout="intrinsic"
            width={30}
            height={30}
            alt={`Social icon ${index + 1}`}
            className={styles.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
