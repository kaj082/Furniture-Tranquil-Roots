import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import styles from "./DesignSlide4.module.scss";
import { ContentWithList } from "../index";
import { HomeVideoPlay } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const DesignSlide4 = ({ data }) => {
  const animation = useRef(null);
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(imageRef.current, {
        duration: 1.1,
        delay: 0.3,
        y: "-8%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top+=20%",
          scrub: 1,
        },
      });
      animation1.current = gsap.to(contentRef.current, {
        duration: 1.1,
        delay: 0.1,
        y: "-10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top+=30%",
          scrub: 1,
        },
      });

      animation2.current = gsap.to(imageRef.current, {
        duration: 1.1,
        delay: 0.3,
        y: "-10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top+=20%",
          scrub: 1,
        },
      });
      animation3.current = gsap.to(contentRef.current, {
        duration: 1.1,
        delay: 0.1,
        y: "+12%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top+=30%",
          scrub: 1,
        },
      });

      return () => {
        animation.current?.kill();
        animation1.current?.kill();
        animation2.current?.kill();
        animation3.current?.kill();
      };
    }
  }, []);
  const content = {
    list: data.slide4Text,
    description: data.slide4TitleDesc,
    image: data.slide4Image.url,
    imageWidth: data.slide4Image.width,
    imageHeight: data.slide4Image.height,
    link: data.slide4Button.url,
  };

  return (
    <div className={styles.DesignSlide4}>
      <div className={styles.contentDiv} ref={contentRef}>
        <ContentWithList data={content} />
      </div>
      <div className={styles.imageContainer} ref={imageRef}>
        <Image
          className={styles.image}
          alt=""
          src={data.slide4Image.url}
          width={data.slide4Image.width}
          height={data.slide4Image.height}
        />
        {/* <div className={styles.playIcon}>
          <HomeVideoPlay fill="white" />
        </div> */}
      </div>
    </div>
  );
};

export default DesignSlide4;
