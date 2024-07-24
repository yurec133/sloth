import React from "react";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div className={styles.infoCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{text}</p>
    </div>
  );
};

export default InfoCard;
