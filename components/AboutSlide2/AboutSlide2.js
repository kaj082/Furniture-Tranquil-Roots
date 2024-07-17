import React, { forwardRef } from "react";
import styles from "./AboutSlide2.module.scss";
import { ImageDetailContainer, MobileImageDetailContainer } from "../index";

const AboutSlide2 = ({ data }, ref) => {
  return (
    <div className={styles.AboutSlide2} ref={ref}>
      <div className={styles.slide1}>
        <ImageDetailContainer
          image={data.slide2Image.url.url}
          width={data.slide2Image.width}
          height={data.slide2Image.height}
          row={true}
          description2={data.slide2Details.desb}
          readmore={true}
          title={data.slide2Details.heading}
          link={data.slide2Button.url}
          lady={true}
        />
        <MobileImageDetailContainer
          image={data.slide2Image.url.url}
          width={data.slide2Image.width}
          height={data.slide2Image.height}
          row={true}
          description2={data.slide2Details.desb}
          readmore={true}
          title={data.slide2Details.heading}
          link={data.slide2Button.url}
          lady={true}
        />
      </div>
      <div className={styles.background}></div>

      <div className={styles.slide2}>
        <ImageDetailContainer
          image={data.slide3Image.url.url}
          width={data.slide3Image.width}
          height={data.slide3Image.height}
          description1={data.slide3Details.desb}
          readmore={false}
          title={data.slide3Details.heading}
          link={data.slide3Button.url}
        />

        <MobileImageDetailContainer
          image={data.slide3Image.url.url}
          width={data.slide3Image.width}
          height={data.slide3Image.height}
          description1={data.slide3Details.desb}
          readmore={false}
          title={data.slide3Details.heading}
          link={data.slide3Button.url}
        />
      </div>
    </div>
  );
};

export default forwardRef(AboutSlide2);
