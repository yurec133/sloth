import React from "react";
import styles from "./FlashSection.module.css";
import classNames from "classnames";
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble";
import InfoCard from "@/components/InfoCard/InfoCard";
import ImageSloth from "@/components/ImageSloth/ImageSloth";
import Image from "next/image";
const FlashSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <SpeechBubble
          style={{ right: "27px", top: "1269px" }}
          text={
            <>
              <p>
                Embrace the slow fades, the diamond hand naps, and the glorious
                absurdity that is $Snooz
              </p>
              <p>
                And remember, with $Snooz, FOMO happens in slow-mo... so you've
                got plenty of time to make a gloriously bad decision.
              </p>
            </>
          }
        />

        <SpeechBubble
          left={true}
          label={"Meme coin"}
          style={{ left: "21px", top: "1843px" }}
          text={
            "That's where $Snooz is born. This ain't your everyday memecoin. It's slow, unpredictable, and probably a terrible investment.  But hey, isn't that the whole point?"
          }
        />
        <SpeechBubble
          visibleMd={true}
          style={{ right: "35px", top: "2056px" }}
          text={
            <>
              <p>
                One fateful day, Flash dares to cross the Bridge. The energy
                warps him, turning his coat a mystical blue.
              </p>
              <p>
                And with it comes a strange power – he feels the chaos of the
                degen world like never before.
              </p>
            </>
          }
        />
        <SpeechBubble
          title={"Flash isn't your average sloth."}
          left={true}
          style={{ left: "0", top: "2308px" }}
          text={
            <>
              <p>
                Sure, he loves naps and leaves, but something's different.
                Legends whisper of the Base chain, a realm of degen magic and
                untapped memecoin potential.
              </p>
              <p>
                One fateful day, Flash dares to cross the Bridge. The energy
                warps him, turning his coat a mystical blue.
              </p>
              <p>
                And with it comes a strange power – he feels the chaos of the
                degen world like never before.
              </p>
            </>
          }
        />

        <h2
          className={classNames(styles.h2, styles.mbTitle1, styles.textShadow)}
        >
          Let's dive into the Sloth Base.
        </h2>
        <div className={styles.titleBlock}>
          <h3 className={classNames(styles.h3, styles.widthTitle1)}>
            Forget everything you thought you knew about memecoins.
          </h3>
        </div>
        <h3 className={classNames(styles.h3, styles.widthTitle2)}>
          Forget the moon, we're aiming for the hammock!
        </h3>
        <h2 className={classNames(styles.h2, styles.mbTitle2)}>
          Join <br /> Flash on <br /> his wild <br /> ride
        </h2>
        <h2 className={classNames(styles.h2, styles.h2Md)}>
          the <br /> Misfit <br /> Sloth
        </h2>
        <h1 className={styles.h1}>Flash</h1>
      </div>
      <Image
        className={styles.imgLift}
        src="/images/img-lift.png"
        alt="Lift"
        width={416}
        height={215}
        priority
      />
      <ImageSloth />
      <InfoCard
        title={"Try a slow fade with $Snooz"}
        text={"Building a sloth empire, one lazy step at a time"}
      />
    </div>
  );
};

export default FlashSection;
