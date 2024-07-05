import React, { useEffect, useRef } from "react";
import { map } from "lodash";
import Slider from "react-slick";

import styles from "./HomeSlide5.module.scss";
import { RightArrow } from "@/icons";
import { HomeSlide5Card } from "../index";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";

const HomeSlide5 = ({ data }) => {
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
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className={styles.HomeSlide5}>
      <div className={styles.textContainer}>
        <p className={styles.text}>Spring 2023 Sofa Collection</p>
        <div className={styles.btn}>
          <p className={styles.btnText}>Explore</p>
          <RightArrow />
        </div>
      </div>
      <div className={styles.sliderWrapper} ref={wrapperRef}>
        <Slider {...settings} className={styles.slider}>
          {map(data.slide6SliderCollection, (item, index) => {
            const image = item.image.url;
            const title = item.heading1[0];
            const desc = item.heading1[1];
            const link = item.linkText.url;
            return (
              <div className={styles.cardContainer} key={index}>
                <HomeSlide5Card
                  image={image}
                  height={item.image.height}
                  width={item.image.width}
                  title={title}
                  desc={desc}
                  link={link}
                  ref={addToRefs}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlide5;
