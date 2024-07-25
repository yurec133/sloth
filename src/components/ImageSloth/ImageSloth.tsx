import React from "react";
import Image from "next/image";
import styles from "./ImageSloth.module.css";

const ImageSloth = () => {
  return (
    <div className={styles.slothBox}>
      <Image
        className={styles.imgBubbleTired}
        src="/images/img-bubble-tired.svg"
        alt="Sloth"
        width={274}
        height={206}
        priority
      />
      <Image
        className={styles.img}
        src="/images/img-sloth-main.png"
        alt="Sloth"
        width={223}
        height={255}
        priority
      />
    </div>
  );
};

export default ImageSloth;
