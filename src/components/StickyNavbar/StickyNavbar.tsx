import React from "react";
import styles from "./StickyNavbar.module.css";
import SocialIcons, {
  SocialIconProps,
} from "@/components/SocialIcons/SocialIcons";
import TextImageBanner from "@/components/TextImageBanner";

const socialItemsL: SocialIconProps[] = [
  {
    imageSrc: "/images/icon-eagle.svg",
    width: 36,
    height: 42,
    link: "https://example.com",
  },
  {
    imageSrc: "/images/icon-frog.svg",
    width: 43,
    height: 42,
    link: "https://example.com",
  },
  {
    imageSrc: "/images/icon-m.svg",
    width: 43,
    height: 42,
    link: "https://example.com",
  },
];
const socialItemsR: SocialIconProps[] = [
  {
    imageSrc: "/images/icon-telegram.svg",
    width: 36,
    height: 42,
    link: "https://example.com",
  },
  {
    imageSrc: "/images/icon-x.svg",
    width: 43,
    height: 42,
    link: "https://example.com",
  },
  {
    imageSrc: "/images/icon-discord.svg",
    width: 43,
    height: 42,
    link: "https://example.com",
  },
];

const StickyNavbar = () => {
  return (
    <div className={styles.stickyNavbar}>
      <div className={styles.frame}>
        <div>
          <SocialIcons items={socialItemsL} />
        </div>
        <div>
          <TextImageBanner
            textLeft={"Adopt a $Snooz"}
            textRight={"Discover Sloth Base"}
          />
        </div>
        <div>
          <SocialIcons items={socialItemsR} />
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
