import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

import styles from "./ImageDetailContainer.module.scss";
import { ColorLine } from "@/icons";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";
gsap.registerPlugin(ScrollTrigger);

const ImageDetailContainer = ({
  row,
  image,
  description2,
  readmore,
  title,
  description1,
  width,
  height,
  link,
  lady,
}) => {
  const animation = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(contentRef.current, {
      duration: 0.8,
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top-=10% center+=20%",
        scrub: 1,
      },
    });
    animation.current = gsap.to(imageRef.current, {
      duration: 0.5,
      y: "-10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top-=15% top+=25%",
        scrub: 1,
      },
    });

    return () => {
      animation.current?.kill();
    };
  }, []);

  const router = useRouter();
  const { addElementRef } = cursorStore();
  const allHomeWraps = useRef({ wrapper: [], elements: [] });
  const addToRefs = (el) => {
    if (el && !allHomeWraps.current.elements.includes(el)) {
      allHomeWraps.current = {
        ...allHomeWraps.current,
        elements: [...allHomeWraps.current.elements, el],
      };
    }
  };
  const wrapperRef = (el) => {
    if (el && !allHomeWraps.current.wrapper.includes(el)) {
      allHomeWraps.current = {
        ...allHomeWraps.current,
        wrapper: [...allHomeWraps.current.wrapper, el],
      };
    }
  };
  useEffect(() => {
    addElementRef({
      route: router.pathname,
      refs: [allHomeWraps.current],
    });
  }, []);
  return (
    <div
      className={cx(styles.ImageDetailContainer, { [styles.detailImage]: row })}
    >
      <div className={styles.detailsContainer} ref={contentRef}>
        <div className={styles.dash}>
          <ColorLine />
        </div>
        <div className={styles.title}>{title} </div>
        <div className={styles.description}>{description1}</div>
        {description2 && <p className={styles.description2}>{description2}</p>}

        {readmore && (
          <Link
            href={{
              pathname: link,
            }}
            ref={addToRefs}
          >
            <button className={styles.ReadMore}>
              <p className={styles.read}>Read More</p>
            </button>
          </Link>
        )}
      </div>
      <div
        ref={imageRef}
        className={cx(styles.imageContainer, { [styles.container]: lady })}
      >
        <Image src={image} alt="" width={width} height={height} />
      </div>
    </div>
  );
};

export default ImageDetailContainer;
