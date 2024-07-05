import React, { useEffect, useRef } from "react";
import styles from "./FactorySlide3.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Image from "next/image";
import { HomeVideoPlay } from "@/icons";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const FactorySlide3 = ({ data }) => {
  const animation2 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!checkMobile()) {
      animation2.current = gsap.to(imageRef.current, {
        y: "-40%",
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1.2,
          start: "top-=100% center+=20%",

          // toggleActions: "restart none none none",
        },
      });

      return () => {
        animation2.current?.kill();
      };
    }
  }, []);
  return (
    <div className={styles.FactorySlide3}>
      <div className={styles.details}>
        <h1 className={styles.title}>{data.slide3Heading.heading}</h1>
        <p className={styles.description}>{data.slide3Heading.desb}</p>
      </div>
      <div className={styles.imageContent}>
        <p className={styles.title}>{data.slide3BoxTitle}</p>

        <div className={styles.container}>
          <div className={styles.box}>
            <p className={styles.boxTitle}>
              {data.slide3BoxDescription.heading}
            </p>
            <p className={styles.boxDesc}>{data.slide3BoxDescription.desb}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={data.slide3BoxImage.url.url}
              width={data.slide3BoxImage.width}
              height={data.slide3BoxImage.height}
              alt=""
            />
            {/* <div className={styles.video} ref={imageRef}>
              <HomeVideoPlay />
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.BtnWithContent}>
        <p className={styles.title1}>{data.slide3Subtitle.heading}</p>
        <div className={styles.contentBtn}>
          <h1 className={styles.title2}>{data.slide3Subtitle.desb}</h1>
          <div className={styles.btn}>
            <PrimaryButton
              title={data.slide3Button.text}
              style={{ width: "100%" }}
              link={data.slide3Button.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorySlide3;
