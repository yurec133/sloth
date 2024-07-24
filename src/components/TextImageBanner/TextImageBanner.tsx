import Image from "next/image";
import styles from "./TextImageBanner.module.css";
import classNames from "classnames";

interface TextImageBannerProps {
  textLeft: string;
  textRight: string;
}

const TextImageBanner: React.FC<TextImageBannerProps> = ({
  textLeft,
  textRight,
}) => {
  return (
    <div className={classNames(styles.banner, styles.bannerLeft)}>
      <div className={classNames(styles.item, styles.itemLeft)}>{textLeft}</div>
      <Image
        className={styles.img}
        src="/images/logo-sloth.svg"
        alt="Sloth"
        width={81}
        height={81}
        priority
      />
      <div className={classNames(styles.item, styles.itemRight)}>
        {textRight}
      </div>
    </div>
  );
};

export default TextImageBanner;
