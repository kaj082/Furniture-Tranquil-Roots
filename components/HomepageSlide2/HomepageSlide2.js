import React, { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { map } from "lodash";
import cx from "classnames";
import Link from "next/link";

import styles from "./HomepageSlide2.module.scss";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cursorStore from "@/zustand/cursor.store";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);

const HomepageSlide2 = ({ data }, ref) => {
  const singleSlideRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const number = ["01", "02", "03"];

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

  // useEffect(() => {
  //   animation.current = gsap.to(slide2Ref.current, {
  //     duration: 0.2,
  //     opacity: 1,
  //     y: "0",
  //     ease: "power4.inOut",

  //     scrollTrigger: {
  //       trigger: slide2Ref.current,
  //       start: "top-=100% center+=30%",
  //       // toggleActions: "restart none none none",
  //     },
  //   });
  //   animation2.current = gsap.to(sliderRef.current, {
  //     duration: 0.2,
  //     opacity: 1,
  //     y: "0",
  //     ease: "power4.inOut",

  //     scrollTrigger: {
  //       trigger: slide2Ref.current,
  //       start: "center-=40% center+=30%",
  //     },
  //   });
  //   return () => {
  //     animation.current?.kill();
  //     animation2.current?.kill();
  //   };
  // }, []);

  const settings = {
    dots: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    afterChange: (current) => setCurrentSlide(current),
  };
  return (
    <div className={styles.HomepageSlide2} ref={ref}>
      <div className={styles.contentSection}>
        <p className={styles.title}>{data.slide2Title}</p>
        <p className={styles.description}>{data.slide2Desb}</p>
        <Link
          href={{
            pathname: data.slide2Button.url,
          }}
          ref={addToRefs}
        >
          <div className={styles.button}>
            <p className={styles.text}>{data.slide2Button.text}</p>
          </div>
        </Link>
      </div>
      <div className={styles.imageSection}>
        {/* <Slider {...settings} className={styles.slider} ref={singleSlideRef}>
          {map(data.slide2SliderCollection, (item, index) => {
            const imgage = item?.image.url?.url;
            const width = item?.image.width;
            const height = item?.image.height;

            return (
              <Image
                key={index}
                className={styles.image}
                src={imgage}
                width={width}
                height={height}
                alt=""
              />
            );
          })}
        </Slider> */}
        {/* <Slider {...settings} className={styles.mobileSlider}>
          {map(data.slide2SliderCollection, (item, index) => {
            const imgage = item?.image.url;
            const width = item?.image.width;
            const height = item?.image.height;

            return (
              <div key={index} className={styles.mobileImageContainer}>
                <Image
                  className={styles.mobileImage}
                  src={imgage}
                  width={width}
                  height={height}
                  alt=""
                />
              </div>
            );
          })}
        </Slider> */}
        <div className={styles.pageNumbers}>
          {map(number, (item, index) => (
            <div
              key={index}
              className={cx(styles.number, {
                [styles.active]: currentSlide === index,
              })}
              onClick={() => singleSlideRef.current.slickGoTo(index)}
            >
              {!!index && (
                <div
                  className={cx(styles.line, {
                    [styles.activeLine]: currentSlide === index,
                  })}
                />
              )}
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(HomepageSlide2);
