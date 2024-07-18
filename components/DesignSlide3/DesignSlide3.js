import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import styles from "./DesignSlide3.module.scss";
import { ContentWithList } from "../index";
import { HomeVideoPlay } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const DesignSlide3 = ({ data }) => {
  const animation = useRef(null);
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(contentRef.current, {
        duration: 1.1,
        delay: 0.7,
        y: "-15%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top-=15% top+=30%",
          scrub: 1,
        },
      });
      animation1.current = gsap.to(imageRef.current, {
        duration: 1.1,
        y: "-10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top-=15% top+=20%",
          scrub: 1,
        },
      });

      animation2.current = gsap.to(contentRef.current, {
        duration: 1.1,
        delay: 0.7,
        y: "10%",
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top-=15% top+=30%",
          scrub: 1,
        },
      });
      animation3.current = gsap.to(imageRef.current, {
        duration: 1.1,
        y: "-10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top-=15% top+=20%",
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
    description: data.slide3TitleDesc,
    list: data.slide3Text,
    image: data.slide3Image.url.url,
    imageWidth: data.slide3Image.width,
    imageHeight: data.slide3Image.height,
    link: data.slide3Button.url,
  };

  return (
    <>
      <div className={styles.DesignSlide3}>
        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            className={styles.image}
            alt=""
            src={data.slide3Image.url.url}
            width={data.slide3Image.width}
            height={data.slide3Image.height}
          />
          {/* <div className={styles.playIcon}>
            <HomeVideoPlay fill="white" />
          </div> */}
        </div>
        <div className={styles.rightContainer} ref={contentRef}>
          <ContentWithList data={content} />
        </div>
      </div>
      <div className={styles.rotateBackground} />
    </>
  );
};

export default DesignSlide3;
