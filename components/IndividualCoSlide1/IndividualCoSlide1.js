import React, { forwardRef } from "react";
import styles from "./IndividualCoSlide1.module.scss";
import Image from "next/image";

import image1 from "@/public/assets/individualCollection/icSlide1.png";
import { DownArrow, VideoPlay } from "@/icons";
import { PrimaryButton } from "../index";

const IndividualCoSlide1 = ({ data }, ref) => {
  return (
    <div className={styles.IndividualCoSlide1} ref={ref}>
      <div className={styles.details}>
        <h3 className={styles.title}>{data.slide1SmallTitle} </h3>
        <h1 className={styles.title1}>{data.slide1Title.heading} </h1>
        <div className={styles.description}>{data.slide1Title.desb}</div>
        <div className={styles.btn}>
          <div className={styles.downloadBtn}>
            <PrimaryButton
              title={data.slide1Button.text}
              style={{ width: "100%" }}
              icon={<DownArrow />}
            />
          </div>
          {/* <button className={styles.playBtn}>
            <div className={styles.playBtn1}>
              <VideoPlay />
            </div>
            <p className={styles.playBtn2}>Play Video</p>
          </button> */}
        </div>
        <div className={styles.Views}>
          <div className={styles.Views1}>
            <div className={styles.number}>
              {data.slide1BottomTextCollection[0].heading}
            </div>
            <div className={styles.info}>
              {data.slide1BottomTextCollection[0].desb}
            </div>
          </div>
          <div className={styles.Views2}>
            <div className={styles.number}>
              {data.slide1BottomTextCollection[1].heading}
            </div>
            <div className={styles.info}>
              {data.slide1BottomTextCollection[1].desb}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image1} alt="" />
      </div>
    </div>
  );
};

export default forwardRef(IndividualCoSlide1);
