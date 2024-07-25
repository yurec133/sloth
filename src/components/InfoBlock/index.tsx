import React from "react";
import styles from "./InfoBlock.module.css";
import Image from "next/image";

interface InfoBlockProps {
  text: React.ReactNode | string;
  title: string;
  imgSrc: string;
  children?: React.ReactNode;
}

const InfoBlock = ({ title, text, imgSrc, children }: InfoBlockProps) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.frame}>
        <button className={styles.close} />
        <div className={styles.grid}>
          <div>
            <Image
              className={styles.img}
              src={imgSrc}
              alt="Tree"
              width={283}
              height={247}
              priority
            />
          </div>
          <div className={styles.expand}>
            <h3 className={styles.h3}>{title}</h3>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default InfoBlock;
