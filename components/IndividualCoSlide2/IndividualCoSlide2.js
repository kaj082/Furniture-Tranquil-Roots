import React from "react";
import styles from "./IndividualCoSlide2.module.scss";
import Image from "next/image";
import { map } from "lodash";

const IndividualCoSlide2 = ({ data }) => {
  const sliderImageCollection = data?.sliderImageCollection?.items || [];
  const sliderMobileimgCollection =
    data?.sliderMobileimgCollection?.items || [];
  const content = data?.content || {};
  const button = data?.button || {};
  return (
    <div className={styles.IndividualCoSlide2}>
      {map(sliderImageCollection, (item, index) => {
        return (
          <>
            <div className={styles.imageContainer}>
              <Image
                src={item?.image?.url}
                width={item?.image?.width}
                height={item?.image?.height}
                alt=""
              />
            </div>
            <div className={styles.details}>
              <div className={styles.title}>{content.heading} </div>
              <div className={styles.description}>{content.desb}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default IndividualCoSlide2;
