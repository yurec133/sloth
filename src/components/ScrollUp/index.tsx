import styles from "./ScrollUp.module.css";
import Image from "next/image";

const ScrollUp = () => {
  return (
    <div className={styles.scrollUp}>
      <Image
        className={styles.img}
        src="/images/img-scroll-up.svg"
        alt="ScrollUp"
        width={93}
        height={64}
        priority
      />
    </div>
  );
};

export default ScrollUp;
