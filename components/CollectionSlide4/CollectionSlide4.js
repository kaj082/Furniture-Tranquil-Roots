import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { map } from "lodash";
import Image from "next/image";

import styles from "./CollectionSlide4.module.scss";
import { DropDown } from "../index";
import { ArrowSvgs, Next, Preview, PreviewArrow } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";
import Slider from "react-slick";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const CollectionSlide4 = ({ data }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
  useEffect(() => {
    addElementRef({
      route: router.pathname,
      refs: [allHomeWraps.current],
    });
  }, []);
  const animation = useRef(null);
  const animation2 = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(contentRef.current, {
        duration: 1.2,
        y: "13%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top-=35% center",
          scrub: 1,
        },
      });
      animation2.current = gsap.to(imageRef.current, {
        duration: 1,
        y: "-10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top-=20% top+=35%",
          scrub: 1,
        },
      });

      return () => {
        animation.current?.kill();
        animation2.current?.kill();
      };
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  const handleClick = (index) => {
    setVisible(true);
    setSelected(index);
  };

  return (
    <div className={styles.CollectionSlide4}>
      <div className={styles.mobileTitle}>{data.slide6Title}</div>
      <div className={styles.imageContainer} ref={imageRef}>
        <div className={styles.arrows}>
          <div
            className={styles.prevArr}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <Preview />
          </div>
          <div className={styles.line}></div>
          <div
            className={styles.nextArr}
            onClick={() => sliderRef.current.slickNext()}
          >
            <Next />
          </div>
        </div>

        <Slider {...settings} className={styles.slider} ref={sliderRef}>
          {map(data.slide6ImageCollection, (item, index) => {
            const imgage = item?.image.url;
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
                ref={addToRefs}
              />
            );
          })}
        </Slider>
      </div>
      <div className={styles.detailsContainer} ref={contentRef}>
        <div className={styles.title}>{data.slide6Title}</div>
        <div className={styles.dropDown}>
          {map(data.slide6DropdownCollection.items, (item, index) => {
            return (
              <DropDown
                key={index}
                visible={visible}
                selected={selected === index ? true : false}
                title={item.heading}
                description={item.desb}
                handleChange={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionSlide4;
