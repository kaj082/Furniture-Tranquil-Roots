import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HomeSideBox.module.scss";
import sofa1 from "@/public/assets/homepage/sofa1.png";
import sofa2 from "@/public/assets/homepage/sofa2.png";
import sofa3 from "@/public/assets/homepage/sofa3.png";
import { CollectionArrow, HomeBoxArrow, PreviewArrow } from "@/icons";
import { map } from "lodash";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";

const HomeSideBox = ({ data }) => {
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
    <div className={styles.HomeSideBox}>
      <div className={styles.textContainer}>
        <p className={styles.text}>EXPLORE LATEST</p>
        <div className={styles.btn} ref={addToRefs}>
          <p className={styles.btnText}>VIEW ALL</p>
          <div className={styles.btnArrow}>
            <HomeBoxArrow />
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        {map(data, (item, index) => {
          const imgage = item?.url.url;
          const width = item?.width;
          const height = item?.height;

          return (
            <div className={styles.imageDiv} key={index}>
              <Image src={imgage} width={width} height={height} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSideBox;
