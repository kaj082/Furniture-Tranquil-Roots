import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { map } from "lodash";
import Image from "next/image";
import cx from "classnames";

import styles from "./Homepage.module.scss";
import { CircleArrow } from "@/icons";
import { HomeSideBox, HomeSideBoxMobile } from "../index";

//
import { gsap } from "gsap";

const Homepage = ({ slide1Data }) => {
  const { slide1Collection, slide1ExplorerCollection } = slide1Data;
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // array of reference
  const itemRef = useRef(slide1Collection.map(() => null));
  const subtitleRef = useRef(slide1Collection.map(() => null));

  const number = ["01", "02", "03"];

  const contentref = useRef(null);
  const contentref2 = useRef(null);

  const animation = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);

  useEffect(() => {
    animation.current = gsap.to(contentref.current, {
      duration: 1.2,
      opacity: 1,
      y: "0%",
      delay: 1.6,
      ease: "power2.inOut",
    });

    animation2.current = gsap.to(itemRef.current[0], {
      duration: 1.2,
      opacity: 1,
      delay: 1.6,
      y: "0%",
      ease: "power2.inOut",
    });

    animation4.current = gsap.to(subtitleRef.current[0], {
      duration: 1.2,
      opacity: 1,
      delay: 1.6,
      y: "0%",
      ease: "power2.inOut",
    });

    animation3.current = gsap.to(contentref2.current, {
      duration: 3,
      opacity: 1,
      delay: 0.2,
      y: "0%",
      ease: "power2.inOut",
    });

    return () => {
      animation.current?.kill();
      animation2.current?.kill();
      animation3.current?.kill();
      animation4.current?.kill();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    afterChange: (current) => {
      setCurrentSlide(current);
      const last =
        (current - 1 + itemRef.current.length) % itemRef.current.length;
      gsap.to(itemRef.current[current], {
        duration: 1,
        opacity: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      gsap.to(itemRef.current[last], {
        duration: 0,
        opacity: 0,
        y: "100%",
        ease: "power2.inOut",
      });

      gsap.to(subtitleRef.current[current], {
        duration: 1,
        opacity: 1,
        y: "0%",
        ease: "power2.inOut",
      });
      gsap.to(subtitleRef.current[last], {
        duration: 0,
        opacity: 0,
        y: "100%",
        ease: "power2.inOut",
      });
    },
  };
  return (
    <div className={styles.Homepage}>
      <div className={styles.HomeLCM}>
        <Slider ref={sliderRef} {...settings} className={styles.slider}>
          {slide1Collection.map((item, index) => {
            const imgage = item?.image.url;
            const width = item?.image.width;
            const height = item?.image.height;
            const title = item.heading1;
            const linkText = item?.linkText || "";

            return (
              <div className={styles.wrapperBig} key={index}>
                <div className={styles.wrapper}>
                  <Image
                    className={styles.image}
                    src={imgage}
                    alt={title}
                    width={width}
                    height={height}
                  />
                </div>
                <div className={styles.gradient} />
                <div className={styles.contentContainer}>
                  <div className={styles.mainText}>
                    <div className={styles.heading}>
                      <h1
                        className={styles.title}
                        ref={(item) => {
                          itemRef.current[index] = item;
                        }}
                      >
                        {title[0]}
                      </h1>
                    </div>
                    <div className={styles.heading}>
                      <p
                        className={styles.subtitle}
                        ref={(item) => {
                          subtitleRef.current[index] = item;
                        }}
                      >
                        {title[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className={styles.bottomTextContainer}>
          <div className={styles.box}>
            <div className={styles.heading}>
              <p className={styles.text} ref={contentref}>
                Latest Design
              </p>
            </div>

            <div className={styles.icon}>
              <div className={styles.circle}>
                <div className={styles.circle2}></div>
                <div className={styles.lineWrap}>
                  <div className={styles.line} />
                </div>
                <div className={styles.arrow}>
                  <CircleArrow />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pageNumbers}>
            {map(number, (item, index) => {
              return (
                <div
                  key={index}
                  className={cx(styles.number, {
                    [styles.active]: currentSlide === index,
                  })}
                  onClick={() => sliderRef.current.slickGoTo(index)}
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
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.sideBox}>
        <HomeSideBox data={slide1ExplorerCollection} />
      </div>
      <div className={styles.sideBoxMobile}>
        <HomeSideBoxMobile data={slide1ExplorerCollection} />
      </div>
    </div>
  );
};

export default Homepage;
