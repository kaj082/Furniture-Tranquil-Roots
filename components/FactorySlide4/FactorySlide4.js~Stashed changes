import React, { useEffect, useRef } from "react";
import styles from "./FactorySlide4.module.scss";
import Image from "next/image";
import { map } from "lodash";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const FactorySlide4 = ({ data }) => {
  const animation = useRef(null);
  const animation2 = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!checkMobile()) {
      animation.current = gsap.to(imageRef.current, {
        y: "10%",
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          scrub: 1.2,

          // toggleActions: "restart none none none",
        },
      });
      animation2.current = gsap.to(detailsRef.current, {
        y: "-10%",
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top-=50% center+=20%",
          scrub: 1.2,

          // toggleActions: "restart none none none",
        },
      });

      return () => {
        animation.current?.kill();
        animation2.current?.kill();
      };
    }
  }, []);
  return (
    <div className={styles.FactorySlide4}>
      <div className={styles.imageContainer} ref={imageRef}>
        <Image
          src={data.slide4Image.url.url}
          width={data.slide4Image.width}
          height={data.slide4Image.height}
          alt=""
        />
      </div>
      <div className={styles.detail} ref={detailsRef}>
        {map(data.slide4ServicesCollection.items, (item, index) => {
          return (
            <div className={styles.list1} key={index}>
              <p className={styles.number}>{item.heading}</p>
              <p className={styles.desc}>{item.desb}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FactorySlide4;
