import React from "react";
import styles from "./SocialBlock.module.css";
import SocialIcons, {
  SocialIconProps,
} from "@/components/SocialIcons/SocialIcons";

const socialItems: SocialIconProps[] = [
  {
    imageSrc: "/images/icon-eagle-black.svg",
    width: 36,
    height: 42,
    link: "https://example.com",
  },
  {
    imageSrc: "/images/icon-frog-black.svg",
    width: 43,
    height: 42,
    link: "https://example.com",
  },
];

const SocialBlock = () => {
  return (
    <div className={styles.socialBlock}>
      <button className={styles.close} />
      <SocialIcons vertical={true} items={socialItems} />
    </div>
  );
};

export default SocialBlock;
