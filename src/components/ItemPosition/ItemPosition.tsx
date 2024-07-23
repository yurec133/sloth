import React from "react";
import Image from "next/image";
import styles from "./ItemPosition.module.css";
import classNames from "classnames";

interface ItemPositionProps {
  imageSrc: string;
  name: string;
  position: string;
  widthImg: number;
  heightImg: number;
  large?: boolean;
}
const ItemPosition = ({
  position,
  name,
  imageSrc,
  widthImg,
  heightImg,
  large,
}: ItemPositionProps) => {
  return (
    <div className={styles.itemPosition}>
      <Image
        className={styles.img}
        src={imageSrc}
        alt="Avatar"
        width={widthImg}
        height={heightImg}
        priority
      />
      <h3 className={classNames(styles.name, { [styles.nameLarge]: large })}>
        {name}
      </h3>
      <div
        className={classNames(styles.position, {
          [styles.positionYellow]: large,
        })}
      >
        {position}
      </div>
    </div>
  );
};

export default ItemPosition;
