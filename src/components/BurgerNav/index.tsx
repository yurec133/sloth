import React from "react";
import styles from "./BurgerNav.module.css";
import Image from "next/image";

const BurgerNav = () => {
  return (
    <Image
      className={styles.burgerNav}
      src="/images/icon-hamburger.svg"
      alt="Burger Nav"
      width={39}
      height={19}
      priority
    />
  );
};

export default BurgerNav;
