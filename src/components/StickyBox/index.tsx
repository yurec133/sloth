import React from "react";
import styles from "./StickyBox.module.css";
import ScrollUp from "@/components/ScrollUp";
import BurgerNav from "@/components/BurgerNav";

const StickyBox = () => {
  return (
    <div className={styles.stickyBox}>
      <div className={styles.grid}>
        <div>
          <ScrollUp />
        </div>
        <div>
          <BurgerNav />
        </div>
      </div>
    </div>
  );
};

export default StickyBox;
