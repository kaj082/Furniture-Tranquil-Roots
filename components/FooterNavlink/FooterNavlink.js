import React, { useEffect, useRef } from "react";
import styles from "./FooterNavlink.module.scss";

import cx from "classnames";

const FooterNavLink = ({ item = {}, className, link }) => {
  const liRef = useRef();

  useEffect(() => {
    if (liRef.current) {
      liRef.current.addEventListener("mouseleave", () => {
        liRef.current.classList.add(`${styles.animateOut}`);
        setTimeout(() => {
          liRef.current.classList.remove(`${styles.animateOut}`);
        }, 400);
      });
    }
  }, []);
  return (
    <li className={cx(styles.listItem, className)} ref={liRef}>
      <a href={link}>{item.label}</a>
    </li>
  );
};

export default FooterNavLink;
