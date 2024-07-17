import React, { useEffect, useRef } from "react";
import { map } from "lodash";
import cx from "classnames";
import Image from "next/image";

import styles from "./CollectionBox.module.scss";
import { CollectionArrow } from "@/icons";
import cursorStore from "@/zustand/cursor.store";
import { useRouter } from "next/router";
import Link from "next/link";

const CollectionBox = ({ Asindividual, data }) => {
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
  useEffect(() => {
    addElementRef({
      route: router.pathname,
      refs: [allHomeWraps.current],
    });
  }, []);

  const num = ["1", "2", "3"];
  return (
    <div className={cx(styles.CollectionBox, { [styles.box]: Asindividual })}>
      {map(data?.items, (item, index) => {
        return (
          <div className={styles.box1} key={index} ref={addToRefs}>
            <div className={styles.imageContainer}>
              <Link
                href={{
                  pathname: item.linkText.url,
                }}
              >
                <Image
                  className={styles.image}
                  src={item.image.url}
                  width={item.image.width}
                  height={item.image.height}
                  alt=""
                />
              </Link>
            </div>
            <div className={styles.details}>
              <div className={styles.title}>{item.linkText?.text}</div>
              <CollectionArrow />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CollectionBox;
