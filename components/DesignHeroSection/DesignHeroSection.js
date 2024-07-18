import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./DesignHeroSection.module.scss";
import webRectangleImage from "@/public/assets/designpage/webRectangle.png";
import rectangleImage from "@/public/assets/designpage/rectangle.png";
import video from "@/public/assets/heroSection.mp4";
import { ListItems } from "../index";
import { HomeVideoPlay } from "@/icons";
//
import gsap from "gsap";

const DesignHeroSection = ({ slide1 }) => {
  const { slide1Title, slide1Text, slide1Image } = slide1;

  const animation = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    animation.current = gsap.to(titleRef.current, {
      duration: 1.1,
      delay: 1.6,
      opacity: 1,
      y: "0",
      ease: "power3.inOut",
    });
    animation.current = gsap.to(lineRef.current, {
      duration: 1.1,
      delay: 1.6,
      opacity: 1,
      y: "0",
      ease: "power3.inOut",
    });
    return () => {
      animation.current?.kill();
    };
  }, []);

  // const playPauseVideo = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     setPlay(false);
  //   } else {
  //     videoRef.current.pause();
  //     setPlay(true);
  //   }
  // };

  return (
    <div className={styles.DesignHeroSection}>
      <div className={styles.imageContainer}>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          controls={false}
          muted
          src={video}
          poster={slide1Image}
        >
          <source type="video/mp4" />
        </video>
        {/* <div className={styles.playVideoContainer} onClick={playPauseVideo}>
          <HomeVideoPlay fill="#B89774" />
          <p className={styles.text}> {play ? "Play Video" : "Pause Video"}</p>
        </div> */}
      </div>
      <div className={styles.rectangle}>
        <Image
          className={styles.webRectangleImage}
          src={webRectangleImage}
          alt=""
        />
        <Image className={styles.rectangleImage} src={rectangleImage} alt="" />
        <div className={styles.titleContainer}>
          <div className={styles.lineContainer}>
            <div className={styles.line} ref={lineRef} />
          </div>
          <p className={styles.title} ref={titleRef}>
            {slide1Title}
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ListItems slide1Text={slide1Text} />
      </div>
    </div>
  );
};

export default DesignHeroSection;
