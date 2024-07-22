"use client";
import Button from "../Button/Button";
import styles from "./Sloth.module.css";
import Image from "next/image";

export default function SlothSection() {
  return (
    <div className={styles.section}>
      <Button
        iconSrc='/images/icon-horse.png'
        text='Uniswap'
        bgImage='/images/bg-button-yellow.png'
        width='152px'
        height='75px'
        iconWidth={37}
        iconHeight={36}
        onClick={() => alert("Button Clicked")}
      />
      <h2 className={styles.h2}>Sloth-o-nomics</h2>
      <h3 className={styles.h3}>Where Slow and Steady Wins the Reward Race!</h3>
      <Image
        className={styles.imgSloth}
        src='images/img-sloth.svg'
        alt='Sloth'
        width={785}
        height={770}
        priority
      />
    </div>
  );
}
