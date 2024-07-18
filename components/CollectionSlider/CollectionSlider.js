import React, { forwardRef, useRef, useState } from "react";
import Slider from "react-slick";
import { map } from "lodash";
import Image from "next/image";
//
import styles from "./CollectionSlider.module.scss";
import { Circle, PreviewArrow } from "@/icons";
import image2 from "@/public/assets/CollectionMobileSlide2.png";
import { useRouter } from "next/router";

const number = ["01", "02", "03"];

const CollectionSlider = ({ data, index }, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const sliderImageCollection =
    data?.sliderImageCollectionCollection?.items || [];
  const sliderMobileimgCollection =
    data?.sliderMobileimgCollectionCollection?.items || [];
  const content = data?.content || {};
  const button = data?.button || {};

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    // vertical: true,
    // fade: true,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    adaptiveHeight: true,
  };
  const addToRefs = (el) => {
    if (el && ref && !ref.current[index].elements.includes(el)) {
      ref.current[index] = {
        ...ref.current[index],
        elements: [...ref.current[index].elements, el],
      };
    }
  };

  const addParentToRefs = (el) => {
    if (el && ref && !ref.current[index].wrapper.includes(el)) {
      ref.current[index] = {
        ...ref.current[index],
        wrapper: [...ref.current[index].wrapper, el],
      };
    }
  };

  return (
    <div className={styles.CollectionSlider}>
      <div className={styles.imageContent} ref={addParentToRefs}>
        <div
          className={styles.sliderWrap}
          style={{
            width: "100%",
            // height: "fitContent",
          }}
        >
          <Slider {...settings} className={styles.slider}>
            {map(sliderImageCollection, (item) => (
              <div className={styles.wrapperBig} key={item.sys.id}>
                <div
                  className={styles.wrapper}
                  onClick={() => router.push(button.url)}
                >
                  <Image
                    className={styles.image}
                    src={item?.url.url}
                    width={item?.width}
                    height={item?.height}
                    alt=""
                    ref={addToRefs}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Slider {...settings} className={styles.slider}>
          {map(sliderMobileimgCollection, (item) => (
            <div className={styles.wrapperBig} key={item.sys.id}>
              <div
                className={styles.wrapper}
                onClick={() => router.push(button.url)}
              >
                <Image
                  className={styles.Mobileimage}
                  src={item?.url.url}
                  width={item?.width}
                  height={item?.height}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.details}>
          <div className={styles.title1}>
            <div className={styles.title}>{content.heading || ""} </div>
            <div className={styles.btn} onClick={() => router.push(button.url)}>
              <div className={styles.btnText}>{button.text || ""}</div>
              <div className={styles.arrow}>
                <PreviewArrow />
              </div>
            </div>
          </div>
          <div className={styles.description}>{content.desb || ""}</div>
        </div>
        <div className={styles.pageNumbers}>
          {map(number, (item, index) => (
            <div key={index}>
              <Circle
                stroke={currentSlide === index ? "#B89774" : "#B89774"}
                fill={currentSlide === index ? "#B89774" : "none"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(CollectionSlider);
