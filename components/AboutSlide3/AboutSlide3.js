import React, { useEffect, useRef } from "react";
import styles from "./AboutSlide3.module.scss";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const AboutSlide3 = ({ data }) => {
  const animation = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);
  const TitleRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(containerRef.current, {
        duration: 2,
        paddingTop: "80px",
        paddingBottom: "80px",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=40%",
          end: "bottom top+=20%",
          scrub: 1,
        },
      });
      animation.current = gsap.to(TitleRef.current, {
        duration: 0.6,
        opacity: 1,
        y: "0",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: TitleRef.current,
          start: "top-=100% center+=25%",
        },
      });
      animation2.current = gsap.to(box1Ref.current, {
        duration: 0.8,
        opacity: 1,
        y: "0",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: box1Ref.current,
          start: "top-=100% center+=25%",
        },
      });
      animation3.current = gsap.to(box2Ref.current, {
        duration: 0.6,
        opacity: 1,
        y: "0",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "top-=100% center+=30%",
        },
      });

      return () => {
        animation.current?.kill();
        animation2.current?.kill();
        animation3.current?.kill();
      };
    } else {
      animation4.current = gsap.to(containerRef.current, {
        duration: 1,
        paddingTop: "70px",
        paddingBottom: "30px",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center top+=40%",
          scrub: 1,
        },
      });

      animation.current = gsap.to(TitleRef.current, {
        duration: 0.6,
        opacity: 1,
        y: "0",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: TitleRef.current,
          start: "top-=100% center+=25%",
        },
      });
      animation2.current = gsap.to(box1Ref.current, {
        duration: 0.8,
        opacity: 1,
        y: "0",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: box1Ref.current,
          start: "top-=100% center+=25%",
        },
      });
      animation3.current = gsap.to(box2Ref.current, {
        duration: 0.6,
        opacity: 1,
        y: "0",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "top-=100% center+=30%",
        },
      });
      return () => {
        animation4.current?.kill();
      };
    }
  }, []);
  return (
    <div className={styles.AboutSlide3} ref={containerRef}>
      <div className={styles.leftContainer} ref={TitleRef}>
        <span className={styles.text1}>{data.slide4Title1.heading} </span>
        <span className={styles.text2}>{data.slide4Title1.desb}</span>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.box1} ref={box1Ref}>
          <div className={styles.colorLine}></div>
          <div className={styles.tag}>
            <p className={styles.tag1}>
              {data.slide4ViewsCollection[0].heading}
            </p>
            <p className={styles.tag2}>{data.slide4ViewsCollection[0].desb}</p>
          </div>
        </div>
        <div className={styles.Box} ref={box2Ref}>
          <div className={styles.box2}>
            <div className={styles.colorLine}></div>
            <div className={styles.tag}>
              <p className={styles.tag1}>
                {data.slide4ViewsCollection[1].heading}
              </p>
              <p className={styles.tag2}>
                {data.slide4ViewsCollection[1].desb}
              </p>
            </div>
          </div>
          <div className={styles.box3}>
            <div className={styles.colorLine}></div>
            <div className={styles.tag}>
              <p className={styles.tag1}>
                {data.slide4ViewsCollection[2].heading}
              </p>
              <p className={styles.tag2}>
                {data.slide4ViewsCollection[2].desb}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide3;
