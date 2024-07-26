import styles from "./ScrollUp.module.css";
import Image from "next/image";

const ScrollUp = () => {
  return (
    <Image
      className={styles.scrollUp}
      src="/images/img-scroll-up.svg"
      alt="ScrollUp"
      width={93}
      height={64}
      priority
    />
  );
};

export default ScrollUp;
