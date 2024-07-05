import React, { useCallback, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { map } from "lodash";

import styles from "./DesignSlide2.module.scss";
import image1 from "@/public/assets/designpage/bigimage2.png";
import imageBig1 from "@/public/assets/designpage/sliderBigImage1.png";
import { ListItems, SecondaryButton } from "../index";
import { DoubleArrow } from "@/icons";
//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const DesignSlide2 = ({ data }) => {
  const animation = useRef(null);
  const mainDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const containerRef = useRef(null);

  const handleResize = useCallback((e) => {
    const bounding = mainDivRef.current.getBoundingClientRect();
    if (!bounding) return;
    if (e.clientX < bounding.left || e.clientX > bounding.left + bounding.width)
      return;

    const width = (e.clientX - bounding.left) / bounding.width;
    rightDivRef.current.style.width = `${100 - width * 100}%`;
  }, []);

  const handleResizeForMobile = useCallback((e) => {
    const bounding = mainDivRef.current.getBoundingClientRect();
    if (!bounding || !e?.touches?.length) return;
    if (
      e.touches[0].clientX < bounding.left ||
      e.touches[0].clientX > bounding.left + bounding.width
    )
      return;

    const width = (e.touches[0].clientX - bounding.left) / bounding.width;
    rightDivRef.current.style.width = `${100 - width * 100}%`;
  }, []);

  useLayoutEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(containerRef.current, {
        duration: 0.5,
        delay: 0.5,
        ease: "power2.inOut",
        paddingBottom: "70px",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center+=20% center",
          scrub: 1,
        },
      });
    }
    animation.current = gsap.to(containerRef.current, {
      duration: 0.5,
      delay: 0.5,
      ease: "power2.inOut",
      paddingTop: "30px",
      paddingBottom: "12px",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center+=20% center",
        scrub: 1,
      },
    });

    return () => {
      animation.current?.kill();
    };
  }, []);

  return (
    <div className={styles.DesignSlide2} ref={containerRef}>
      <div className={styles.upperContainer}>
        <p className={styles.title}> {data.slide2TitleDesc.heading}</p>
        <div className={styles.descContainer}>
          <div className={styles.line} />
          <p className={styles.description}>{data.slide2TitleDesc.desb}</p>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.mainContainer} ref={mainDivRef}>
          <div className={styles.container}>
            <Image className={styles.bigImage} src={imageBig1} alt="" />
          </div>

          <div className={styles.right} ref={rightDivRef}>
            <div
              className={styles.resize}
              onDrag={handleResize}
              onDragEndCapture={handleResize}
              onTouchMove={handleResizeForMobile}
              onTouchEndCapture={handleResizeForMobile}
              draggable={true}
            >
              <div className={styles.circle}>
                <DoubleArrow />
              </div>
            </div>
            <div className={styles.imageMainDiv}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          {map(data.slide2SmallImagesCollection.items, (item, index) => {
            return (
              <div className={styles.sliderImage} key={index}>
                <Image
                  alt=""
                  src={item.url}
                  width={item.width}
                  height={item.height}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <p className={styles.content}>{data.slide2BottomDesc}</p>
          <div className={styles.mobileItemList}>
            <ListItems textStyle={styles.text} slide1Text={data.slide2Text} />
          </div>
          {/* <SecondaryButton
            textStyle={styles.btnText}
            link={data.slide2Button.url}
          /> */}
        </div>
        <div className={styles.itemList}>
          <ListItems textStyle={styles.text} slide1Text={data.slide2Text} />
        </div>
      </div>
    </div>
  );
};

export default DesignSlide2;
