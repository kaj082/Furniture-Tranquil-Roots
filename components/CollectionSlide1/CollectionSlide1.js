import React, { forwardRef, useEffect, useRef } from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./CollectionSlide1.module.scss";
import { CollectionBox } from "../index";

//
import { gsap } from "gsap";
import { useRouter } from "next/router";

const CollectionSlide1 = ({ data, Asindividual }, ref) => {
  const router = useRouter();
  //

  const contentref = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = gsap.to(contentref.current, {
      duration: 1.8,
      opacity: 1,
      y: "-50%",
      delay: 1.4,
      ease: "power4.inOut",
    });

    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div
      ref={ref}
      className={cx(styles.CollectionSlide1, {
        [styles.individual]: Asindividual,
      })}
    >
      <div className={styles.imageConatiner}>
        <Image
          className={styles.image}
          src={data?.slide1Image.url}
          width={data?.slide1Image.width}
          height={data?.slide1Image.height}
          alt=""
        />
        <div className={styles.gradient} />
      </div>
      <CollectionBox
        data={data?.slide1BoxesCollection}
        Asindividual={Asindividual}
      />

      <div className={styles.heading}>
        <h1 className={styles.title} ref={contentref}>
          {data?.slide1Title}
        </h1>
      </div>
    </div>
  );
};

export default forwardRef(CollectionSlide1);
