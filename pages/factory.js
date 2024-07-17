import React, { useLayoutEffect, useRef, useState } from "react";
import client from "@/client";
import {
  Cursor1,
  FactorySlide1,
  FactorySlide2,
  FactorySlide3,
  FactorySlide4,
  PrimaryLayout,
} from "@/components";
import { getFatoryPageData } from "@/queries";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const factory = ({ slide1Data, slide2Data, slide3Data, slide4Data }) => {
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
    <div>
      <PrimaryLayout variant={navVariant}>
        <FactorySlide1 data={slide1Data} />
        <FactorySlide2 data={slide2Data} ref={slide2ref} />
        <FactorySlide3 data={slide3Data} />
        <FactorySlide4 data={slide4Data} />
      </PrimaryLayout>
    </div>
  );
};

export default factory;

export const getStaticProps = async () => {
  const data = await client.query(getFatoryPageData());

  const factoryPage = data.data.factoryPage;
  const slide1Data = {
    slide1Button: factoryPage.slide1Button,
    slide1Desc: factoryPage.slide1Desc,
    slide1Image: factoryPage.slide1Image,
    slide1Title: factoryPage.slide1Title,
  };
  const slide2Data = {
    slide2Button: factoryPage.slide2Button,
    slide2Heading: factoryPage.slide2Heading,
    slide2Image: factoryPage.slide2Image,
    slide2Info: factoryPage.slide2Info,
  };
  const slide3Data = {
    slide3BoxDescription: factoryPage.slide3BoxDescription,
    slide3BoxImage: factoryPage.slide3BoxImage,
    slide3BoxTitle: factoryPage.slide3BoxTitle,
    slide3Button: factoryPage.slide3Button,
    slide3Heading: factoryPage.slide3Heading,
    slide3Subtitle: factoryPage.slide3Subtitle,
  };
  const slide4Data = {
    slide4Image: factoryPage.slide4Image,
    slide4ServicesCollection: factoryPage.slide4ServicesCollectionCollection,
  };

  return {
    props: {
      factoryPage,
      slide1Data,
      slide2Data,
      slide3Data,
      slide4Data,
    },
  };
};
