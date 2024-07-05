import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import cx from "classnames";

import styles from "./ContactUs.module.scss";
import { NunitoSans } from "@/pages/_app";
import { contactUsDetails } from "@/generalConstant";
import { PrimaryButton } from "../index";
import image from "@/public/assets/contactusImage.png";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import cursorStore from "@/zustand/cursor.store";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
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
  const animation = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);

  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  const imgRef = useRef(null);
  const mobileimgRef = useRef(null);

  useLayoutEffect(() => {
    animation.current = gsap.to(title1Ref.current, {
      duration: 0.8,
      opacity: 1,
      delay: 1.8,
      y: "0",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: title1Ref.current,
        start: "top-=115% center+=30%",
      },
    });
    animation2.current = gsap.to(title2Ref.current, {
      duration: 0.8,
      opacity: 1,
      delay: 1.8,
      y: "0",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: title2Ref.current,
        start: "top-=115% center+=30%",
      },
    });
    animation3.current = gsap.to(imgRef.current, {
      y: "20%",
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        scrub: 1.2,

        // toggleActions: "restart none none none",
      },
    });
    animation4.current = gsap.to(mobileimgRef.current, {
      y: "20%",
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: mobileimgRef.current,
        start: "top center",
        scrub: 1.2,

        // toggleActions: "restart none none none",
      },
    });

    return () => {
      animation.current?.kill();
      animation2.current?.kill();
      animation3.current?.kill();
      animation4.current?.kill();
    };
  }, []);

  return (
    <div className={styles.ContactUs}>
      <div className={styles.mainTitleContainer} ref={addToRefs}>
        <p className={styles.title} ref={title1Ref}>
          {" "}
          Get In Touch{" "}
        </p>
        <div className={styles.title2Box} ref={title2Ref}>
          <p className={styles.title2}> We'd love to hear from you.</p>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.middleContainer} ref={addToRefs}>
        <div className={styles.leftContainer}>
          {contactUsDetails.map((item, index) => (
            <div className={styles.contentBox} key={index}>
              <p className={styles.text1}>{item.title}</p>
              <p className={styles.text2}>{item.line1}</p>
              <p className={styles.text2}>{item.line2}</p>
              <p className={styles.text2}>{item.line3}</p>
              <p className={styles.text2}>{item.line4}</p>
            </div>
          ))}
        </div>
        <div className={styles.mobileImageSlide} ref={mobileimgRef}>
          <Image alt="" src={image} />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Speak to Our Design Team</p>
          </div>
          <p className={styles.requiredText}>
            Fields marked with an <span className={styles.required}>*</span> are
            required.
          </p>
          <input placeholder="Name *" className={styles.input} />
          <input placeholder="Email *" className={styles.input} />
          <textarea
            placeholder="Message *"
            className={cx(styles.textarea, NunitoSans.className)}
          />
          <div className={styles.button}>
            <PrimaryButton
              title="Submit"
              className={styles.btn}
              textStyle={styles.text}
            />
          </div>
        </div>
      </div>
      <div className={styles.imageSlide} ref={imgRef}>
        <div className={styles.imageContainer} ref={addToRefs}>
          <Image alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
