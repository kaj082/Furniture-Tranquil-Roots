import React, { useEffect, useRef } from "react";
import cx from "classnames";

import styles from "./NavLink.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ item = {}, className, id, link, variant }) => {
  const router = useRouter();
  const { pathname, asPath } = router;

  const liRef = useRef();

  useEffect(() => {
    if (liRef.current) {
      liRef.current.addEventListener("mouseleave", () => {
        liRef.current?.classList.add(`${styles.animateOut}`);
        setTimeout(() => {
          liRef.current?.classList.remove(`${styles.animateOut}`);
        }, 400);
      });
    }
  }, []);

  return (
    <li
      className={cx(
        styles.listItem,
        className,
        {
          [styles.active]: id
            ? pathname === link && asPath.includes(id)
            : pathname === link,
        },
        {
          [styles.variant]: variant && pathname === link,
        }
      )}
      ref={liRef}
    >
      <Link
        href={{
          pathname: link,
          hash: id,
        }}
        scroll={true}
      >
        <span className={styles.inner}>
          <span className={styles.normal}>{item.label}</span>
          <span className={styles.hover}>{item.label}</span>
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
// item.path || id
