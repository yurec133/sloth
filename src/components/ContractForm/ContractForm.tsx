import React, { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import Button from "@/components/Button/Button";

export default function ContractForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.contractForm}>
      <div className={styles.grid}>
        <div>
          <div className={styles.info}>Where to buy:</div>
          <Button
            iconSrc="/images/icon-horse.png"
            text="Uniswap"
            bgImage="/images/bg-button-yellow.png"
            width="152px"
            height="75px"
            iconWidth={37}
            iconHeight={36}
            onClick={() => alert("Button Clicked")}
            textShadowColor={"#A97A00FF"}
          />
        </div>
        <div>
          <div className={styles.info}>Contract address</div>
          <input
            className={styles.text}
            placeholder={"xxxxxxxxxxxxxxx"}
            type="text"
            name="name"
          />
        </div>
        <div>
          <div className={styles.info}>Chart:</div>
          <Button
            iconSrc="/images/icon-owl.png"
            text="desxscreener"
            bgImage="/images/bg-button-yellow.png"
            width="152px"
            height="75px"
            iconWidth={25}
            iconHeight={28}
            onClick={() => alert("Button Clicked")}
            textShadowColor={"#A97A00FF"}
          />
        </div>
      </div>
    </form>
  );
}
