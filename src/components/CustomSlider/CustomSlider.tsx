import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemPosition from "@/components/ItemPosition/ItemPosition";
import styles from "./CustomSlider.module.css";
import classNames from "classnames";

const SampleNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className={classNames(styles.chevronBtn, styles.chevronBtnNext)}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className={classNames(styles.chevronBtn, styles.chevronBtnPrev)}
      onClick={onClick}
    />
  );
};

const CustomSlider: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  const slideItems = [
    {
      imageSrc: "/images/img-avatar.png",
      name: "Dwayne Rosenbaum",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Sean Schimmel",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Hector Keeling",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Dwayne Rosenbaum",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Sean Schimmel",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Hector Keeling",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Dwayne Rosenbaum",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Sean Schimmel",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
    {
      imageSrc: "/images/img-avatar.png",
      name: "Hector Keeling",
      position: "Collaborator",
      widthImg: 110,
      heightImg: 110,
    },
  ];

  return (
    <div className={styles.slider}>
      <h2 className={styles.h2}>The Sleepy Devs</h2>
      <div className={styles.desc}>
        Fueled by caffeine and questionable ideas. The <br /> memecoin magic
        happens here... eventually. 
      </div>
      <div className={styles.grid}>
        <div>
          <ItemPosition
            large={true}
            imageSrc={"/images/img-avatar-large.png"}
            name={"Ronald Nader"}
            position={"Co-Founder"}
            widthImg={140}
            heightImg={140}
          />
        </div>
        <div>
          <ItemPosition
            large={true}
            imageSrc={"/images/img-avatar-large.png"}
            name={"Larry Metz"}
            position={"Co-Founder"}
            widthImg={140}
            heightImg={140}
          />
        </div>
      </div>
      <Slider {...settings}>
        {slideItems.map((item, index) => (
          <div key={index} className={styles.sliderFrame}>
            <ItemPosition
              imageSrc={item.imageSrc}
              name={item.name}
              position={item.position}
              widthImg={item.widthImg}
              heightImg={item.heightImg}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
