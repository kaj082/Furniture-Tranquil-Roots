import React from "react";
import Image from "next/image";

import styles from "./ContentWithList.module.scss";
import { ListItems, SecondaryButton } from "../index";
import { HomeVideoPlay } from "@/icons";

const ContentWithList = (prop) => {
  return (
    <div className={styles.ContentWithList}>
      <p className={styles.title}>{prop.data?.description.heading}</p>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src={prop.data.image}
          className={styles.image}
          width={prop.data.imageWidth}
          height={prop.data.imageHeight}
        />
        {/* <div className={styles.playIcon}>
          <HomeVideoPlay fill="#B89774" />
        </div> */}
      </div>
      <p className={styles.description}>{prop.data?.description.desb}</p>
      <ListItems slide1Text={prop.data?.list} />
      {/* <div className={styles.button}>
        <SecondaryButton textStyle={styles.text} link={prop.data?.link} />
      </div> */}
    </div>
  );
};

export default ContentWithList;
