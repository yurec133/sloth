import styles from "./SlothSpeechBubble.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

interface SlothSpeechBubbleProps {
  text: string;
  title: string;
}
const SlothSpeechBubble = ({ title, text }: SlothSpeechBubbleProps) => {
  return (
    <div className={styles.speechBubbleBlock}>
      <Image
        className={styles.img}
        src={"/images/img-sloth-small.png"}
        alt="Sloth"
        width={179}
        height={205}
        priority
      />
      <div className={styles.speechBubble}>
        <div className={styles.grid}>
          <div className={styles.expand}>
            <h3 className={styles.h3}>{title}</h3>
            <div className={styles.text}>{text}</div>
          </div>
          <div>
            <Button
              text="Adopt a $Snooz"
              bgImage="/images/bg-button-blue-m.png"
              width="153px"
              height="76px"
              textShadowColor={"#3E4BC0"}
              link={true}
              href={"example.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlothSpeechBubble;
