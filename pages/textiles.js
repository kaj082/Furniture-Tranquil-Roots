import client from "@/client";
import {
  Cursor1,
  PrimaryLayout,
  TextileSlide1,
  TextileSlide3,
  TexttileSlide2,
} from "@/components";
import { getTextilePageData } from "@/queries";
import React from "react";

const textiles = ({ slide1Data, slide2Data, slide3Data }) => {
  return (
    <div>
      <PrimaryLayout variant={true}>
        <TextileSlide1 data={slide1Data} />
        <TexttileSlide2 data={slide2Data} />
        <TextileSlide3 data={slide3Data} />
      </PrimaryLayout>
    </div>
  );
};

export default textiles;

export const getStaticProps = async () => {
  const data = await client.query(getTextilePageData());
  const textilePage = data.data.textilePage;

  const slide1Data = {
    slide1Image: textilePage.slide1Image,
    slide1Title: textilePage.slide1Title,
    slide1Heading: textilePage.slide1Heading,
    slide1Views: textilePage.slide1Views,
    slide1Button: textilePage.slide1Button,
  };

  const slide2Data = {
    slide2Image: textilePage.slide2Image,
    slide2Title: textilePage.slide2Title,
    slide2Button: textilePage.slide2Button,
  };

  const slide3Data = {
    slide3Button: textilePage.slide3Button,
    slide3Heading: textilePage.slide3Heading,
    slide3Image: textilePage.slide3Image,
    slide4Description: textilePage.slide4Description,
    slide4Image: textilePage.slide4Image,
    slide5Button: textilePage.slide5Button,
    slide5Heading: textilePage.slide5Heading,
    slide5Image: textilePage.slide5Image,
  };

  return {
    props: {
      textilePage,
      slide1Data,
      slide2Data,
      slide3Data,
    },
  };
};
