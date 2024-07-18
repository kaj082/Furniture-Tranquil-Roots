import React from "react";
import styles from "./Footer.module.scss";
import { Facebook, Instagram, Linkdin, Logo, Twitter } from "@/icons";
import Link from "next/link";
import FooterNavLink from "../FooterNavlink/FooterNavlink";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.itemList1}>
        <FooterNavLink
          item={{ label: "Home" }}
          className={styles.item}
          link={"/"}
        />
        <FooterNavLink
          item={{ label: "About" }}
          className={styles.item}
          link={"/about"}
        />
        <FooterNavLink
          item={{ label: "Collections" }}
          className={styles.item}
          link={"/collections"}
        />
        <FooterNavLink
          item={{ label: "Textiles" }}
          className={styles.item}
          link={"/textiles"}
        />
        <FooterNavLink
          item={{ label: "Design & Innovation" }}
          className={styles.item}
          link={"/design-innovation"}
        />
        <FooterNavLink
          item={{ label: "Contact" }}
          className={styles.item}
          link={"/contact-us"}
        />
      </div>
      <div className={styles.itemList2}>
        <FooterNavLink
          item={{ label: "Factory Page" }}
          className={styles.item}
          link={"/factory"}
        />
        <FooterNavLink
          item={{ label: "Stationary" }}
          className={styles.item}
          link={"/collections/stationary"}
        />
        <FooterNavLink
          item={{ label: "Motion" }}
          className={styles.item}
          link={"/collections/motion"}
        />
        <FooterNavLink
          item={{ label: "Accent" }}
          className={styles.item}
          link={"/collections/accent"}
        />
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

      <div className={styles.container1}>
        <div className={styles.address1}>
          <div className={styles.line1}>
            Tranquil Store, 45 West, New York, China
          </div>
          <div className={styles.line2}>+91 647543757</div>
        </div>

        <div className={styles.address2}>
          <div className={styles.line1}>
            Tranquil Roots Store, 45 West, New York, USA
          </div>
          <div className={styles.line2}>+91 647543757</div>
        </div>
      </div>
      <div className={styles.termsCondition}>
        <div className={styles.terms}>©2024 Tranquil Roots</div>
        <div className={styles.terms}>
          <a href="/privacy">Privacy</a> |
          <a href="/Term-and-conditions">T & C</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
