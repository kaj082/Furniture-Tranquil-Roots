import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import styles from "./FactorySlide1.module.scss";
import image2 from "@/public/assets/factory/slide11.png";
import { PrimaryButton } from "../index";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FactorySlide1 = ({ data }) => {
  const animation = useRef(null);
  const mainTitleRef = useRef(null);
  const mobileTitleRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(mainTitleRef.current, {
      duration: 1.4,
      opacity: 1,
      delay: 1.6,
      y: "0",
      ease: "power4.inOut",
    });
    animation.current = gsap.to(mobileTitleRef.current, {
      duration: 1.4,
      opacity: 1,
      delay: 1.6,
      y: "0",
      ease: "power3.inOut",
    });
    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div className={styles.FactorySlide1}>
      <div className={styles.imageConatiner}>
        <div className={styles.background}>
          <Image src={image2} alt="" />
        </div>
        <div className={styles.gradient} />
        <div className={styles.wrapperBig}>
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src={data.slide1Image.url.url}
              width={data.slide1Image.width}
              height={data.slide1Image.height}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.text2} ref={mainTitleRef}>
            {data.slide1Title}
          </h1>
        </div>
        <div className={styles.dash}>
          <div className={styles.Views1}>
            <div className={styles.number}>{data.slide1Desc.heading}</div>
            <div className={styles.info}>{data.slide1Desc.desb}</div>
          </div>
          <div className={styles.mobileTitleContainer}>
            <div className={styles.text2Mobile} ref={mobileTitleRef}>
              {data.slide1Title}
            </div>
          </div>
          <div className={styles.btn}>
            <PrimaryButton
              title={data.slide1Button.text}
              style={{ width: "100%" }}
              link={data.slide1Button.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorySlide1;
