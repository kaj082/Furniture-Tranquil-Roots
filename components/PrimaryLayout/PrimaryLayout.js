import React, { useEffect, useRef } from "react";

import styles from "./PrimaryLayout.module.scss";
import { Navbar, Footer, MobileFooter, Cursor1 } from "../index";

//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimationLogo } from "@/icons";
import { checkMobile } from "@/general.helpers";
gsap.registerPlugin(ScrollTrigger);

const PrimaryLayout = (props) => {
  const { children, variant } = props;
  const animation = useRef(null);
  const animation2 = useRef(null);
  const slideRef = useRef(null);
  const logoRef = useRef(null);
  const logo1Ref = useRef(null);

  useEffect(() => {
    animation.current = gsap.to(slideRef.current, {
      duration: 1.3,
      opacity: 1,
      delay: 1,
      height: "100vh",
      y: "-100%",
      ease: "expo.out",
      onComplete: () => {
        // gsap.to(slideRef.current, {
        //   height: "0vh",
        //   ease: "power4.inOut",
        // });
      },
    });
    animation2.current = gsap.to(logoRef.current, {
      duration: 0.5,
      y: "-120%",
      delay: 0,
      ease: "expo.inOut",
      onComplete: () => {
        gsap.to(logo1Ref.current, {
          duration: 0.6,
          y: "-100%",
          ease: "expo.inOut",
        });
      },
    });

    if (checkMobile()) {
      animation2.current = gsap.to(logoRef.current, {
        duration: 0.5,
        y: "-100%",
        delay: 0,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.to(logo1Ref.current, {
            duration: 0.6,
            y: "-100%",
            ease: "expo.inOut",
          });
        },
      });
    }
    return () => {
      animation.current?.kill();
      animation2.current?.kill();
    };
  }, []);

  return (
    <div className={styles.PrimaryLayout}>
      <div className={styles.background} ref={slideRef}>
        <div className={styles.logo}>
          <AnimationLogo />
          <div className={styles.back} ref={logoRef} />
          <div className={styles.back1} ref={logo1Ref} />
        </div>
      </div>
      <Navbar variant={variant} />
      {children}
      <Footer />
      <MobileFooter />
      <Cursor1 />
    </div>
  );
};

export default PrimaryLayout;
