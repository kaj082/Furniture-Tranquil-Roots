import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import styles from "./TextileSlide1.module.scss";
import { PrimaryButton } from "../index";
import { DownArrow } from "@/icons";
import back from "@/public/assets/textiles/textileSlide1Back.png";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const TextileSlide1 = ({ data }) => {
  const animation = useRef(null);
  const smallTitleRef = useRef(null);
  const mainTitleRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(smallTitleRef.current, {
      duration: 1.6,
      delay: 1.6,
      opacity: 1,
      y: "0",
      ease: "power4.inOut",
    });
    animation.current = gsap.to(mainTitleRef.current, {
      duration: 1.5,
      delay: 1.6,
      opacity: 1,
      y: "0",
      ease: "power4.inOut",
    });
    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div className={styles.TextileSlide1}>
      <Image src={back} alt="" className={styles.background} />
      <div className={styles.details}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title} ref={smallTitleRef}>
            {data.slide1Title}
          </h3>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title1} ref={mainTitleRef}>
            {data.slide1Heading.heading}
          </h1>
        </div>
        <p className={styles.description}>{data.slide1Heading.desb}</p>
        <div className={styles.btnInfo}>
          <div className={styles.Views1}>
            <div className={styles.number}>{data.slide1Views.heading}</div>
            <div className={styles.info}>{data.slide1Views.desb}</div>
          </div>

          <div
            className={styles.btn}
            onClick={() => {
              gsap.to(window, {
                ease: "power2.inOut",
                scrollTo: {
                  y: "#upperImage",
                  offsetY: 200,
                },
              });
            }}
          >
            <PrimaryButton
              title={data.slide1Button.text}
              icon={<DownArrow />}
              style={{ width: "100%" }}
              // link={data.slide1Button.url}
            />
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={data.slide1Image.url}
          width={data.slide1Image.width}
          height={data.slide1Image.height}
          alt=""
        />
        {/* <div className={styles.dash}></div> */}
      </div>
    </div>
  );
};

export default TextileSlide1;
