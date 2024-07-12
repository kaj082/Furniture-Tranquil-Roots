import { useLayoutEffect, useRef, useState } from "react";
import client from "@/client";
import {
  Cursor1,
  Homepage,
  HomepageSlide2,
  HomeSlide3,
  HomeSlide4,
  HomeSlide5,
  PrimaryLayout,
} from "@/components";
import { getHomePageData } from "@/queries";
import styles from "@/styles/Home.module.scss";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home({
  slide1Data,
  slide2Data,
  slide3Data,
  slide4Data,
  slide5Data,
}) {
  const slide2ref = useRef(null);
  const [navVariant, setNavVariant] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (slide2ref.current)
        ScrollTrigger.create({
          trigger: slide2ref.current,
          start: "top top",
          end: "top top",
          onEnter: () => {
            setNavVariant(true);
          },
          onLeaveBack: () => {
            setNavVariant(false);
          },
        });
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Home}>
      <PrimaryLayout variant={navVariant}>
        <Homepage slide1Data={slide1Data} />
        <HomepageSlide2 data={slide2Data} ref={slide2ref} />
        <HomeSlide3 data={slide3Data} />
        <HomeSlide4 data={slide4Data} />
        <HomeSlide5 data={slide5Data} />
      </PrimaryLayout>
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.query(getHomePageData());
  const homePage = data.data.homePage;
  //

  const slide1Data = {
    slide1Collection: homePage.slide1CollectionCollection.items,
    slide1ExplorerCollection: homePage.slide1ExplorerCollectionCollection.items,
  };

  const slide2Data = {
    slide2Title: homePage.slide2Title,
    slide2Button: homePage.slide2Button,
    slide2Desb: homePage.slide2Desb,
    slide2SliderCollection: homePage.slide2SliderCollectionCollection.items,
  };

  const slide3Data = {
    slide3Asset: homePage.slide3Asset,
    slide3ButtonsCollection: homePage.slide3ButtonsCollectionCollection.items,
    slide3Heading: homePage.slide3Heading,
    slide3DropdownListsCollection:
      homePage.slide3DropdownListsCollectionCollection.items,
  };

  const slide4Data = {
    slide4Button: homePage.slide4Button,
    slide4Image: homePage.slide4Image,
    slide4Info: homePage.slide4Info,
    slide5Image: homePage.slide5Image,
    slide5InfoCollection: homePage.slide5InfoCollectionCollection.items,
  };

  const slide5Data = {
    slide6SliderCollection: homePage.slide6SliderCollectionCollection.items,
  };

  return {
    props: {
      homePage,
      slide1Data,
      slide2Data,
      slide3Data,
      slide4Data,
      slide5Data,
    },
  };
}
