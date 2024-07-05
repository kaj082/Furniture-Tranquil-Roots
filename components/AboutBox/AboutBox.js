import React from "react";
import cx from "classnames";
import styles from "./AboutBox.module.scss";
import { map } from "lodash";

const AboutBox = ({ currentIndex, data }) => {
  return (
    <div className={styles.AboutBox}>
      {map(data, (item, index) => {
        return (
          <div
            key={index}
            className={cx(styles.box1, {
              [styles.active]: currentIndex === index,
            })}
          >
            <p className={styles.title}>{item.heading}</p>
            <p className={styles.description}>{item.desb}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutBox;
