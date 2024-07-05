import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import styles from "./TextileSlide3.module.scss";
import ImageDetailContainer from "../ImageDetailContainer/ImageDetailContainer";
import MobileImageDetailContainer from "../MobileImageDetailContainer/MobileImageDetailContainer";
import { CommaIconTextile } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const TextileSlide3 = ({ data }) => {
  const animation = useRef(null);
  const slide2Ref = useRef(null);

  useLayoutEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(slide2Ref.current, {
        duration: 0.5,
        ease: "power1.inOut",
        y: "-100%",
        height: "200px",
        scrollTrigger: {
          trigger: slide2Ref.current,
          start: "top center+=30%",
          scrub: 1,
        },
      });
    }
    animation.current = gsap.to(slide2Ref.current, {
      duration: 0.2,
      ease: "power4.inOut",
      y: "-90%",
      height: "30px",
      scrollTrigger: {
        trigger: slide2Ref.current,
        start: "top center+=20%",
        scrub: 1,
      },
    });

    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div className={styles.TextileSlide3}>
      <div className={styles.Slide1}>
        <ImageDetailContainer
          description1={data.slide3Heading.desb}
          image={data.slide3Image.url}
          width={data.slide3Image.width}
          height={data.slide3Image.height}
          title={data.slide3Heading.heading}
          link={data.slide3Button.url}
          text="Request Information"
          readmore={false}
        />
        <MobileImageDetailContainer
          link={data.slide3Button.url}
          description1={data.slide3Heading.desb}
          image={data.slide3Image.url}
          width={data.slide3Image.width}
          height={data.slide3Image.height}
          title={data.slide3Heading.heading}
          text="Request Information"
          readmore={false}
        />
      </div>

      <div className={styles.Slide2}>
        <Image
          // ref={slide2Ref}
          className={styles.imageContainer}
          src={data.slide4Image.url}
          width={data.slide4Image.width}
          height={data.slide4Image.height}
          alt=""
        />
        <div className={styles.animation} ref={slide2Ref} />
        <div className={styles.gradient} />
        <div className={styles.titleContainer}>
          <CommaIconTextile />
          <div className={styles.title}>{data.slide4Description}</div>
        </div>
      </div>

      <div className={styles.Slide3}>
        <ImageDetailContainer
          description1={data.slide5Heading.desb}
          image={data.slide5Image.url}
          width={data.slide5Image.width}
          height={data.slide5Image.height}
          title={data.slide5Heading.heading}
          link={data.slide5Button.url}
          row={true}
          text="Request Information"
          readmore={false}
        />
        <MobileImageDetailContainer
          description1={data.slide5Heading.desb}
          image={data.slide5Image.url}
          width={data.slide5Image.width}
          height={data.slide5Image.height}
          title={data.slide5Heading.heading}
          link={data.slide5Button.url}
          text="Request Information"
          readmore={false}
        />
      </div>
    </div>
  );
};

export default TextileSlide3;
