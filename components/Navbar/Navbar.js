import React, { useState } from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./Navbar.module.scss";
import { PrimaryButton, NavLink, MobileSideMenu } from "../index";
import { Hamburger, MainLogo } from "@/icons";

const Navbar = ({ variant }) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={cx(styles.Navbar, { [styles.NavbarVariant]: variant })}>
      <div className={styles.gradient} />
      <Link
        className={styles.logo}
        href={{
          pathname: "/",
        }}
        scroll={true}
      >
        <MainLogo />
      </Link>

      <div className={styles.navList}>
        <NavLink
          item={{ label: "About" }}
          className={styles.list}
          link={"/about"}
          variant={variant}
        />
        <NavLink
          item={{ label: "Collections" }}
          className={styles.list}
          link={"/collections"}
          variant={variant}
        />
        <NavLink
          item={{ label: "Textiles" }}
          className={styles.list}
          link={"/textiles"}
          variant={variant}
        />
        <NavLink
          item={{ label: "Design & Innovation" }}
          className={styles.list}
          link={"/design-innovation"}
          variant={variant}
        />
      </div>
      <div className={styles.rightContainer}>
        {/* <Link
          href={{
            pathname: "/contact-us",
          }}
        > */}
        <PrimaryButton link={"/contact-us"} title={"Contact"} />
        {/* </Link> */}
      </div>
      <div className={styles.sidebarIcon} onClick={handleVisible}>
        <MobileSideMenu handleClick={handleVisible} isOpen={visible} />

        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
