import React, { useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./PrimaryButton.module.scss";
import { RightArrow } from "@/icons";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";

const PrimaryButton = ({
  title,
  style,
  icon,
  hover,
  className,
  textStyle,
  link,
}) => {
  const navigate = useRouter();

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
      className={cx(styles.PrimaryButton, className, { [styles.back]: hover })}
      style={style}
      onClick={() => {
        navigate.push(link || "");
      }}
      ref={addToRefs}
    >
      <p className={cx(styles.text, textStyle)}>{title}</p>
      <div className={styles.icon}>{icon ? icon : <RightArrow />}</div>
    </div>
  );
};

export default PrimaryButton;
