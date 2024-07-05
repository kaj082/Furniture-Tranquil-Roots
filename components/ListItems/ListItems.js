import React from "react";
import cx from "classnames";

import styles from "./ListItems.module.scss";
import Shield from "@/icons/Shield";

const ListItems = ({ textStyle, slide1Text }) => {
  return (
    <div className={styles.ListItems}>
      {slide1Text?.map((item, index) => (
        <div key={index} className={styles.textContainer}>
          <Shield className={styles.svg} />
          <p className={cx(styles.text, textStyle)}>{item}</p>
        </div>
      ))}
      {/*       
      <div className={styles.textContainer}>
        <Shield className={styles.svg} />
        <p className={cx(styles.text, textStyle)}>Factory Warranty</p>
      </div>
      <div className={styles.textContainer}>
        <Shield className={styles.svg} />
        <p className={cx(styles.text, textStyle)}>Quality Assured</p>
      </div>
      <div className={styles.textContainer}>
        <Shield className={styles.svg} />
        <p className={cx(styles.text, textStyle)}>Materials & Textiles</p>
      </div> */}
    </div>
  );
};

export default ListItems;
