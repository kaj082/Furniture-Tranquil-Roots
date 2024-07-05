import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { map } from "lodash";

import styles from "./AboutSlide1.module.scss";
import { Circle } from "@/icons";
import { AboutBox } from "../index";

//
import { gsap } from "gsap";
const number = ["01", "02", "03"];

const AboutSlide1 = ({ data }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemRef = useRef(data.slide1Collection.map(() => null));

  const animation = useRef(null);

  useEffect(() => {
    animation.current = gsap.to(itemRef.current[0], {
      duration: 1.2,
      opacity: 1,
      delay: 1.6,
      y: "0%",
      ease: "power2.inOut",
    });

    return () => {
      animation.current?.kill();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current) => {
      setCurrentSlide(current);
      const last =
        (current - 1 + itemRef.current.length) % itemRef.current.length;
      gsap.to(itemRef.current[current], {
        duration: 1,
        opacity: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      gsap.to(itemRef.current[last], {
        duration: 0,
        opacity: 0,
        y: "30%",
        ease: "power2.inOut",
      });
    },
  };
  return (
    <div className={styles.AboutSlide1}>
      <AboutBox currentIndex={currentSlide} data={data.aboutBoxCollection} />
      <div className={styles.imageConatiner}>
        <Slider ref={sliderRef} {...settings} className={styles.slider}>
          {map(data.slide1Collection, (item, index) => {
            const image = item.image.url;
            const width = item.image?.width;
            const height = item.image?.height;

            return (
              <div key={index} className={styles.wrapperBig}>
                <div className={styles.wrapper}>
                  <Image
                    className={styles.image}
                    src={image}
                    width={width}
                    height={height}
                    alt=""
                  />
                </div>
                <div className={styles.gradient} />
                <div className={styles.heading}>
                  <h1
                    className={styles.text2}
                    ref={(item) => {
                      itemRef.current[index] = item;
                    }}
                  >
                    {item.heading1}
                  </h1>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className={styles.textContainer}>
          <div className={styles.dash}></div>
          <div className={styles.text1}>0{currentSlide + 1}</div>
        </div>

        <div className={styles.pageNumbers}>
          {map(number, (item, index) => {
            return (
              <div
                key={index}
                onClick={() => sliderRef.current.slickGoTo(index)}
              >
                <Circle
                  stroke={currentSlide === index ? "#d9d9d9" : "white"}
                  fill={currentSlide === index ? "#d9d9d9" : "none"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSlide1;
