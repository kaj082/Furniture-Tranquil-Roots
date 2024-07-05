import React, { useEffect, useRef } from "react";
import cx from "classnames";

import styles from "./SecondaryButton.module.scss";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";

const SecondaryButton = ({ className, textStyle, link }) => {
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
      className={cx(styles.button, className)}
      onClick={() => router.push(link)}
      ref={addToRefs}
    >
      <p className={cx(styles.read, textStyle)}>Read More</p>
    </div>
  );
};

export default SecondaryButton;
