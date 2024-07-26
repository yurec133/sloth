import React from "react";
import Image from "next/image";
import styles from "./ImageSloth.module.css";
import classNames from "classnames";

interface ImageSlothProps {
  className?: string;
}

const ImageSloth = ({ className }: ImageSlothProps) => {
  return (
    <div className={classNames(styles.slothBox, className)}>
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
