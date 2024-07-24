import React from "react";
import styles from "./StickyNavbar.module.css";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import TextImageBanner from "@/components/TextImageBanner/TextImageBanner";

const StickyNavbar = () => {
  return (
    <div className={styles.stickyNavbar}>
      <div className={styles.frame}>
        <div>
          <SocialIcons
            images={[
              "/images/icon-eagle.svg",
              "/images/icon-frog.svg",
              "/images/icon-m.svg",
            ]}
            links={[
              "https://example.com",
              "https://example.com",
              "https://example.com",
            ]}
          />
        </div>
        <div>
          <TextImageBanner
            textLeft={"Adopt a $Snooz"}
            textRight={"Discover Sloth Base"}
          />
        </div>
        <div>
          <SocialIcons
            images={[
              "/images/icon-telegram.svg",
              "/images/icon-x.svg",
              "/images/icon-discord.svg",
            ]}
            links={[
              "https://web.telegram.org/k/",
              "https://x.com",
              "https://discord.com/",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
