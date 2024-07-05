import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./FactorySlide2.module.scss";
import { HomeVideoPlay, Service } from "@/icons";
import sofa from "@/public/assets/factory/slide2.png";
import video from "../../public/assets/slide2video.mp4";
import { map } from "lodash";
import Link from "next/link";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const FactorySlide2 = ({ data }, ref) => {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const [play, setPlay] = useState(false);

  const animation = useRef(null);
  const animation2 = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(imageRef.current, {
        y: "20%",
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          scrub: 1.2,

          // toggleActions: "restart none none none",
        },
      });
      animation2.current = gsap.to(detailsRef.current, {
        y: "-10%",
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top-=50% center",
          scrub: 1.2,

          // toggleActions: "restart none none none",
        },
      });
      return () => {
        animation.current?.kill();
        animation2.current?.kill();
      };
    }
  }, []);

  const router = useRouter();
  const { addElementRef } = cursorStore();
  const allHomeWraps = useRef({ wrapper: [], elements: [] });
  const addToRefs = (el) => {
    if (el && !allHomeWraps.current.elements.includes(el)) {
      allHomeWraps.current = {
        ...allHomeWraps.current,
        elements: [...allHomeWraps.current.elements, el],
      };
    }
  };
  const wrapperRef = (el) => {
    if (el && !allHomeWraps.current.wrapper.includes(el)) {
      allHomeWraps.current = {
        ...allHomeWraps.current,
        wrapper: [...allHomeWraps.current.wrapper, el],
      };
    }
  };
  useEffect(() => {
    addElementRef({
      route: router.pathname,
      refs: [allHomeWraps.current],
    });
  }, []);

  const playPauseVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };
  const playPauseMobileVideo = () => {
    if (mobileVideoRef.current.paused) {
      mobileVideoRef.current.play();
      setPlay(false);
    } else {
      mobileVideoRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <div className={styles.FactorySlide2} ref={ref}>
      <div className={styles.imageContainer} ref={imageRef}>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          controls
          muted
          poster={sofa}
          // onClick={playPauseVideo}
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* 
        <div className={styles.video}>
          {play && <HomeVideoPlay onClick={playPauseVideo} />}
          {play && <span className={styles.text}>Play Video</span>}
        </div> */}
      </div>
      <div className={styles.details} ref={detailsRef}>
        <h1 className={styles.title}>{data.slide2Heading.heading}</h1>
        <p className={styles.description}>{data.slide2Heading.desb}</p>
        <div className={styles.mobileImage}>
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            playsInline
            controls
            muted
            poster={data.slide2Image.url.url}
            // onClick={playPauseMobileVideo}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className={styles.video}>
            {play && <HomeVideoPlay onClick={playPauseMobileVideo} />}
          </div>
        </div>
        <div className={styles.services}>
          {map(data.slide2Info, (item, index) => {
            return (
              <div className={styles.list1} key={index}>
                <Service />
                <div className={styles.serviceName}>
                  {data.slide2Info[index]}
                </div>
              </div>
            );
          })}

          <Link
            href={{
              pathname: data.slide2Button.url,
            }}
            className={styles.ReadMore}
            ref={addToRefs}
          >
            <p className={styles.read}>{data.slide2Button.text}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(FactorySlide2);
