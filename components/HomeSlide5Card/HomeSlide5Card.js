import React, { forwardRef } from "react";
import Image from "next/image";

import styles from "./HomeSlide5Card.module.scss";
import CircleWithArrow from "@/icons/CircleWithArrow";
import Link from "next/link";

const HomeSlide5Card = ({ image, title, desc, link, width, height }, ref) => {
  return (
    <div className={styles.HomeSlide5Card}>
      <Link
        href={{
          pathname: link,
        }}
        className={styles.icon}
      >
        <div className={styles.imageContainer} ref={ref}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>

            <CircleWithArrow />
          </div>
          <Image src={image} alt="" width={width} height={height} />
        </div>
      </Link>

      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default forwardRef(HomeSlide5Card);
