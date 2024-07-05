import React from "react";
import styles from "./HomeSideBoxMobile.module.scss";
import Image from "next/image";
import sofa1 from "@/public/assets/homepage/sofa1.png";
import sofa2 from "@/public/assets/homepage/sofa2.png";
import sofa3 from "@/public/assets/homepage/sofa3.png";
import { map } from "lodash";

const HomeSideBoxMobile = ({ data }) => {
  return (
    <div className={styles.HomeSideBoxMobile}>
      <p className={styles.text}>EXPLORE LATEST</p>
      <div className={styles.imageContainer}>
        {map(data, (item, index) => {
          const imgage = item?.url;
          const width = item?.width;
          const height = item?.height;

          return (
            <div className={styles.imageDiv} key={index}>
              <Image src={imgage} width={width} height={height} alt="" />
            </div>
          );
        })}
      </div>
      <p className={styles.text}>VIEW ALL</p>
    </div>
  );
};

export default HomeSideBoxMobile;
