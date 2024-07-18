import React from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./MobileSideMenu.module.scss";
import {
  CrossIcon,
  Facebook,
  Instagram,
  Linkdin,
  MobileLogo2,
  Twitter,
} from "@/icons";

const MobileSideMenu = ({ handleClick, isOpen }) => {
  return (
    <div className={cx(styles.MobileSideMenu, { [styles.visible]: isOpen })}>
      <div className={styles.navbar}>
        <Link href={{ pathname: "/" }} scroll className={styles.logo}>
          <MobileLogo2 />
        </Link>
        <div className={styles.crossIcon} onClick={handleClick}>
          <CrossIcon />
        </div>
      </div>

      <div className={styles.navlist}>
        <Link
          href={{
            pathname: "/about",
          }}
          scroll
          className={styles.list}
        >
          About
        </Link>
        <Link
          href={{
            pathname: "/collections",
          }}
          scroll
          className={styles.list}
        >
          Collections
        </Link>
        <Link
          href={{
            pathname: "/textiles",
          }}
          scroll
          className={styles.list}
        >
          Textiles
        </Link>
        <Link
          href={{
            pathname: "/design-innovation",
          }}
          scroll
          className={styles.list}
        >
          Design & Innovation
        </Link>
        <Link
          href={{
            pathname: "/contact-us",
          }}
          scroll
          className={styles.list}
        >
          Contact US
        </Link>
      </div>
      <div className={styles.socialLink}>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Facebook />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Instagram />
          </div>
        </a>

        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Twitter />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.icon}>
            <Linkdin />
          </div>
        </a>
      </div>
      <div className={styles.terms}>
        <p className={styles.text}>©2024 Tranquil Roots</p>
        <p className={styles.text}>
          <a href="/privacy">Privacy</a> | <a href="/Terms&conditions">T & C</a>
        </p>
      </div>
    </div>
  );
};

export default MobileSideMenu;
