import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./TexttileSlide2.module.scss";
import image2 from "@/public/assets/textiles/textile4rectangle.png";
import image3 from "@/public/assets/textiles/textile5rectangle.png";
import mobile5grp from "@/public/assets/textiles/textileMobile5.png";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TexttileSlide2 = (data) => {
  const animation = useRef(null);
  const bottomImageRef = useRef(null);
  const fiveImageRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(fiveImageRef.current, {
      duration: 1,
      top: "-98px",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: fiveImageRef.current,
        start: "bottom bottom",
        scrub: 1,
      },
    });
    animation.current = gsap.to(bottomImageRef.current, {
      duration: 1,
      bottom: "-18px",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: bottomImageRef.current,
        start: "top-=30% bottom",
        scrub: 1,
      },
    });

    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div className={styles.TexttileSlide2}>
      <div className={styles.details}>
        <div className={styles.dash}></div>
        <div className={styles.title}>{data.data.slide2Title}</div>
        <div className={styles.mobileImage}>
          <Image src={mobile5grp} alt="" />
        </div>
        <Link
          href={{
            pathname: data.data.slide2Button.url,
          }}
          className={styles.ReadMore}
        >
          <p className={styles.read}>{data.data.slide2Button.text}</p>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={image3}
          alt=""
          className={styles.fiveImage}
          ref={fiveImageRef}
        />
        <Image
          className={styles.bigImage}
          src={data.data.slide2Image.url.url}
          width={data.data.slide2Image.width}
          height={data.data.slide2Image.height}
          alt=""
          id="upperImage"
        />

        <Image
          className={styles.image}
          src={image2}
          alt=""
          ref={bottomImageRef}
        />
      </div>
    </div>
  );
};

export default TexttileSlide2;
