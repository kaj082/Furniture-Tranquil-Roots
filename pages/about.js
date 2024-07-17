import React, { useLayoutEffect, useRef, useState } from "react";

import {
  AboutSlide1,
  AboutSlide2,
  AboutSlide3,
  AboutSlide4,
  Cursor1,
  PrimaryLayout,
} from "@/components";
import { getAboutPageData } from "@/queries";
import client from "@/client";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const about = ({
  data,
  aboutPage,
  slide1Data,
  slide2Data,
  slide3Data,
  slide4Data,
}) => {
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
        <AboutSlide1 data={slide1Data} />
        <AboutSlide2 data={slide2Data} ref={slide2ref} />
        <AboutSlide3 data={slide3Data} />
        <AboutSlide4 data={slide4Data} />
      </PrimaryLayout>
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const data = await client.query(getAboutPageData());
  const aboutpage = data.data.aboutPage;
  //

  const slide1Data = {
    slide1Collection: aboutpage.slide1CollectionCollection.items,
    aboutBoxCollection: aboutpage.aboutBoxCollectionCollection.items,
  };

  const slide2Data = {
    slide2Button: aboutpage.slide2Button,
    slide2Details: aboutpage.slide2Details,
    slide2Image: aboutpage.slide2Image,
    slide3Button: aboutpage.slide3Button,
    slide3Details: aboutpage.slide3Details,
    slide3Image: aboutpage.slide3Image,
  };

  const slide3Data = {
    slide4Title1: aboutpage.slide4Title1,
    slide4ViewsCollection: aboutpage.slide4ViewsCollectionCollection.items,
  };

  const slide4Data = {
    slide5Button: aboutpage.slide5Button,
    slide5Details: aboutpage.slide5Details,
    slide5Image: aboutpage.slide5Image,
    slide6DropdownCollection:
      aboutpage.slide6DropdownCollectionCollection.items,
    slide6Image1Collection: aboutpage.slide6Image1CollectionCollection.items,
    slide6Title: aboutpage.slide6Title,
  };

  return {
    props: {
      data,
      aboutpage,
      slide1Data,
      slide2Data,
      slide3Data,
      slide4Data,
    },
  };
}
