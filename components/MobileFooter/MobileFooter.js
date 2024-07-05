import React from "react";
import styles from "./MobileFooter.module.scss";
import {
  Facebook,
  Instagram,
  Linkdin,
  Logo,
  MobileLogo,
  Twitter,
} from "@/icons";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <div className={styles.MobileFooter}>
      <div className={styles.mobileLogo}>
        <MobileLogo />
      </div>
      <div className={styles.itemList1}>
        <Link
          href={{
            pathname: "/",
          }}
          scroll={true}
          className={styles.item}
        >
          Home
        </Link>
        <Link
          href={{
            pathname: "/about",
          }}
          scroll={true}
          className={styles.item}
        >
          About
        </Link>
        <Link
          href={{
            pathname: "/collections",
          }}
          scroll={true}
          className={styles.item}
        >
          Collections
        </Link>
        <Link
          href={{
            pathname: "/textiles",
          }}
          scroll={true}
          className={styles.item}
        >
          Textiles
        </Link>
        <Link
          href={{
            pathname: "/design-innovation",
          }}
          scroll={true}
          className={styles.item}
        >
          Design & Innovation
        </Link>
        <Link
          href={{
            pathname: "/contact-us",
          }}
          scroll={true}
          className={styles.item}
        >
          Contact
        </Link>
        <Link
          href={{
            pathname: "/factory",
          }}
          scroll={true}
          className={styles.item}
        >
          Factory Page
        </Link>

        <Link
          href={{
            pathname: "/collections/stationary",
          }}
          scroll={true}
          className={styles.item}
        >
          Stationary
        </Link>
        <Link
          href={{
            pathname: "/collections/motion",
          }}
          scroll={true}
          className={styles.item}
        >
          Motion
        </Link>
        <Link
          href={{
            pathname: "/collections/accent",
          }}
          scroll={true}
          className={styles.item}
        >
          Accent
        </Link>
      </div>
      <div className={styles.colorLine}></div>
      <div className={styles.followUs}>Follow Us</div>
      <div className={styles.socialLinks}>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.socialLink}>
            <Facebook />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.socialLink}>
            <Instagram />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.socialLink}>
            <Twitter />
          </div>
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <div className={styles.socialLink}>
            <Linkdin />
          </div>
        </a>
      </div>
      <div className={styles.MobilecolorLine}></div>
      <div className={styles.container1}>
        <div className={styles.address1}>
          <div className={styles.address}>Address 1</div>
          <div className={styles.line1}>
            Nice Link Store, 45 West, New York, USA
          </div>
          <div className={styles.line2}>+01 647543757</div>
        </div>

        <div className={styles.address2}>
          <div className={styles.address}>Address 2</div>
          <div className={styles.line1}>
            Nice Link Store, 45 West, New York, USA
          </div>
          <div className={styles.line2}>+01 647543757</div>
        </div>
      </div>
      <div className={styles.termsCondition}>
        <div className={styles.terms}>©2019 Nice Link Home Furnishings</div>
        <div className={styles.terms}>
          <a href="/privacy">Privacy</a> |{" "}
          <a href="/Term-and-conditions">T & C</a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
