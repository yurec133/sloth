"use client";
import Button from "../Button/Button";
import styles from "./Sloth.module.css";
import Image from "next/image";
import ContractForm from "@/components/ContractForm/ContractForm";
import classNames from "classnames";
import ImageCoolSloth from "@/components/ImageCoolSloth/ImageCoolSloth";
import CustomSlider from "@/components/CustomSlider/CustomSlider";

export default function SlothSection() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.warning}>
          Disclaimer: Look, we love sloths, but we can't be held responsible for
          your terrible investment decisions.  $Sloth is a memecoin, not a
          retirement plan. Any losses are on you. Think of buying $Sloth as
          supporting the sloths, not your financial future.
        </div>
        <CustomSlider />
        <div>
          <h3 className={classNames(styles.h3, styles.textYellowColor)}>
            Here's the deal with
            <br /> our SLOTH tokens:
          </h3>
          <h2 className={classNames(styles.h2, styles.textYellowColor)}>
            they're built
            <br /> to burn
          </h2>
        </div>
        <ImageCoolSloth />
        <div className="pb-50">
          <ContractForm />
          <h2 className={styles.h2}>Sloth-o-nomics</h2>
          <h3 className={styles.h3}>
            Where Slow and Steady Wins the Reward Race!
          </h3>
          <Button
            text="More about Sloth-o-nomics"
            bgImage="/images/bg-button-blue.png"
            width="200px"
            height="75px"
            onClick={() => alert("Button Clicked")}
            textShadowColor={"#3E4BC0"}
          />
        </div>
        <Image
          className={styles.imgSloth}
          src="/images/img-sloth.png"
          alt="Sloth"
          width={785}
          height={770}
          priority
        />
      </div>
    </div>
  );
}
