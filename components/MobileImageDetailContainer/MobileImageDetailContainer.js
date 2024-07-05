import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import styles from "./MobileImageDetailContainer.module.scss";
import { ColorLine } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MobileImageDetailContainer = ({
  image,
  title,
  description1,
  description2,
  readmore,
  width,
  height,
  link,
  lady,
}) => {
  const animation = useRef(null);
  const titleRef = useRef(null);
  // const contentRef = useRef(null);
  // const imageRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(titleRef.current, {
      duration: 1.2,
      opacity: 1,
      y: "0",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top-=130% center+=30%",
      },
    });
    // animation.current = gsap.to(imageRef.current, {
    //   duration: 1.2,
    //   opacity: 1,
    //   y: "0",
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "top-=130% center+=30%",
    //   },
    // });
    // animation.current = gsap.to(contentRef.current, {
    //   duration: 1.2,
    //   opacity: 1,
    //   y: "0",
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: contentRef.current,
    //     start: "top-=130% center+=30%",
    //   },
    // });
    // useLayoutEffect(() => {
    //   animation.current = gsap.to(titleRef.current, {
    //     duration: 1.2,
    //     opacity: 1,
    //     y: "0",
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: titleRef.current,
    //       start: "top-=130% center+=30%",
    //     },
    //   });
    //   animation.current = gsap.to(imageRef.current, {
    //     duration: 1.2,
    //     opacity: 1,
    //     y: "0",
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: imageRef.current,
    //       start: "top-=130% center+=30%",
    //     },
    //   });
    //   animation.current = gsap.to(contentRef.current, {
    //     duration: 1.2,
    //     opacity: 1,
    //     y: "0",
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: contentRef.current,
    //       start: "top-=130% center+=30%",
    //     },
    //   });

    return () => {
      animation.current?.kill();
    };
  }, []);
  return (
    <div className={styles.MobileImageDetailContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.dash}>
          <ColorLine />
        </div>
        <div className={styles.title}>{title} </div>
      </div>

      <div className={cx(styles.imageContainer, { [styles.container]: lady })}>
        <Image src={image} alt="" width={width} height={height} />
      </div>
      <div className={styles.details}>
        <div className={styles.description}>{description1}</div>
        <div className={styles.description2}>{description2}</div>
        {readmore && (
          <Link
            href={{
              pathname: link,
            }}
          >
            <button className={styles.ReadMore}>
              <p className={styles.read}>Read More</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileImageDetailContainer;
