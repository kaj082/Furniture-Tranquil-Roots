import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { map } from "lodash";

import viewimg from "@/public/assets/ViewMobileImg.png";
import styles from "./HomeSlide4.module.scss";
import { PrimaryButton } from "../index";
import { Add } from "@/icons";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeSlide4 = ({ data }) => {
  // const animation = useRef(null);
  const animation2 = useRef(null);
  // const animation3 = useRef(null);

  // const slideRef = useRef(null);
  const imageRef = useRef(null);
  const viewRef = useRef(null);
  useEffect(() => {
    // animation.current = gsap.to(slideRef.current, {
    //   duration: 0.2,
    //   opacity: 1,
    //   y: "0",
    //   ease: "power4.inOut",

    //   scrollTrigger: {
    //     trigger: slideRef.current,
    //     start: "top-=100% center+=30%",
    //     // toggleActions: "restart none none none",
    //   },
    // });

    animation2.current = gsap.to(imageRef.current, {
      y: "-10%",
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        scrub: 1.2,

        // toggleActions: "restart none none none",
      },
    });
    // animation3.current = gsap.to(viewRef.current, {
    //   duration: 0.5,
    //   opacity: 1,
    //   y: "-50%",
    //   ease: "power4.inOut",

    //   scrollTrigger: {
    //     trigger: viewRef.current,

    //     start: "top-=50% bottom",
    //     // toggleActions: "restart none none none",
    //   },
    // });

    return () => {
      // animation.current?.kill();
      animation2.current?.kill();
      // animation3.current?.kill();
    };
  }, []);
  return (
    <div className={styles.HomeSlide4}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{data.slide4Info.heading}</h1>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionText}>{data.slide4Info.desb}</p>
          </div>
          <div className={styles.buttonContainer}>
            <PrimaryButton
              style={{ width: "100%" }}
              title={data.slide4Button.text}
              link={data.slide4Button.url}
            />
          </div>
        </div>

        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            src={data.slide4Image.url}
            width={data.slide4Image.width}
            height={data.slide4Image.height}
            alt=""
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={data.slide5Image.url}
          width={data.slide5Image.width}
          height={data.slide5Image.height}
          alt=""
          className={styles.webimg}
        />
        <Image className={styles.mobileImg} src={viewimg} alt="" />

        <div className={styles.box}>
          {map(data.slide5InfoCollection, (item, index) => {
            return (
              <div className={styles.Views1} key={index}>
                <div className={styles.number}>
                  {item.heading} <Add />
                </div>
                <div className={styles.info}>{item.desb}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSlide4;
