import styles from "./WhiteSection.module.css";
import InfoBlock from "@/components/InfoBlock";
import SlothSpeechBubble from "@/components/SlothSpeechBubble";
import SocialBlock from "@/components/SocialBlock";

const WhiteSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <SocialBlock />
        <InfoBlock
          text={
            <>
              <p>
                Ditch the noisy crypto crowds and find your people! Welcome to
                the Sloth Treehouse, our exclusive chill zone for $Snooz
                holders.{" "}
              </p>
              <p>
                Hang out with your fellow sloths, share the best memes, maybe
                even plot some strategic naps... It's the perfect place to
                embrace the slow life, build community, and watch your $Snooz
                grow (or not, we're all about the journey here).
              </p>
            </>
          }
          title={"The Tree of Sloth"}
          imgSrc={"/images/img-tree.jpg"}
        >
          <SlothSpeechBubble
            title={"Ready to join the cozy chaos?"}
            text={"Get your $Sloth and come on up!"}
          />
        </InfoBlock>
      </div>
    </div>
  );
};

export default WhiteSection;
