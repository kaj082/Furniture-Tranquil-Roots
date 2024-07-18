import React, { forwardRef } from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./IndividualLastSlide.module.scss";
import { CollectionBox } from "../index";

const IndividualLastSlide = ({ data, Asindividual }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(styles.IndividualLastSlide, {
        [styles.individual]: Asindividual,
      })}
    >
      <div className={styles.imageConatiner}>
        <Image
          className={styles.image}
          src={data?.lastSlideImage.url.url}
          width={data?.lastSlideImage.width}
          height={data?.lastSlideImage.height}
          alt=""
        />
        <div className={styles.gradient} />
      </div>
      <CollectionBox
        data={data?.lastSlideBoxesCollection}
        Asindividual={Asindividual}
      />
      <h1 className={styles.title}>Furnish your Dream Home</h1>
    </div>
  );
};

export default forwardRef(IndividualLastSlide);
