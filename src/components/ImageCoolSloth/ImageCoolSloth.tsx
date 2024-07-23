import React from "react";
import Image from "next/image";
import styles from "./ImageCoolSloth.module.css";

const ImageCoolSloth = () => {
  return (
    <div className={styles.image}>
      <div className={styles.frame}>
        <Image
          className={styles.comment}
          src="/images/img-comment-total.svg"
          alt="Comment"
          width={178}
          height={138}
          priority
        />
        <Image
          className={styles.imgSloth}
          src="/images/img-cool-sloth.png"
          alt="Sloth"
          width={221}
          height={253}
          priority
        />
      </div>
    </div>
  );
};

export default ImageCoolSloth;
