import React, { useEffect, useRef, useState } from "react";
import { map } from "lodash";
import Image from "next/image";

import styles from "./HomeSlide3.module.scss";
import { Dash, HomeVideoPlay } from "@/icons";
import CommaIcon from "@/icons/CommaIcon";
import { Accordion, PrimaryButton } from "../index";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const HomeSlide3 = ({ data }) => {
  const animation = useRef(null);
  const mainRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleClick = (index) => {
    setVisible(true);
    setSelected(index);
  };

  useEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(mainRef.current, {
        duration: 0.2,
        ease: "power4.inOut",
        paddingTop: "55px",
        paddingBottom: "250px",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "center center",
          scrub: 1,
        },
      });
    }
    animation.current = gsap.to(mainRef.current, {
      duration: 0.2,
      ease: "power4.inOut",
      paddingTop: "19px",
      paddingBottom: "19px",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "center 35%",
        scrub: 1,
      },
    });

    return () => {
      animation.current?.kill();
    };
  }, []);
  console.log(data, "--");

  return (
    <div className={styles.HomeSlide3} ref={mainRef}>
      <div className={styles.imageContainer}>
        {/* <div className={styles.video}>
          <HomeVideoPlay fill="#3C3C3C" />
        </div> */}
        <Image
          className={styles.image}
          src={data.slide3Asset.url.url}
          width={data.slide3Asset.width}
          height={data.slide3Asset.height}
          alt=""
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title1}>
            <div className={styles.iconContainer}>
              <div className={styles.dash1}>
                <Dash />
              </div>
              <div className={styles.dash2}></div>
            </div>
            <h1 className={styles.title}>{data.slide3Heading.heading} </h1>
          </div>
          <h1 className={styles.title2}>{data.slide3Heading.desb}</h1>
        </div>

        <div className={styles.commaSvg}>
          <CommaIcon />
        </div>
        <div className={styles.DropDown}>
          {map(data.slide3DropdownListsCollection, (item, index) => {
            return (
              <Accordion
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
        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <PrimaryButton
              style={{ width: "100%" }}
              title={data.slide3ButtonsCollection[0].text}
              link={data.slide3ButtonsCollection[0].url}
            />
          </div>

          <div className={styles.btn}>
            <PrimaryButton
              hover={true}
              style={{ width: "100%" }}
              title={data.slide3ButtonsCollection[1].text}
              link={data.slide3ButtonsCollection[1].url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide3;
