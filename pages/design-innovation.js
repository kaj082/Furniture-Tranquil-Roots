import React from "react";
import {
  PrimaryLayout,
  DesignHeroSection,
  DesignSlide2,
  DesignSlide3,
  DesignSlide4,
  Cursor1,
} from "@/components";
import { getDesignandInnovationPageData } from "@/queries";
import client from "@/client";

const DesignInnovation = ({ slide1, slide2, slide3, slide4 }) => {
  return (
    <div>
      <PrimaryLayout variant={true}>
        <DesignHeroSection slide1={slide1} />
        <DesignSlide2 data={slide2} />
        <DesignSlide3 data={slide3} />
        <DesignSlide4 data={slide4} />
      </PrimaryLayout>
    </div>
  );
};

export default DesignInnovation;

export async function getStaticProps() {
  const data = await client.query(getDesignandInnovationPageData());

  const design = data.data.designAndInnovationPage;
  const slide1 = {
    slide1Title: design?.slide1Title,
    slide1Text: design?.slide1Text,
    slide1Image: design?.slide1Image,
  };

  const slide2 = {
    slide2BottomDesc: design?.slide2BottomDesc,
    slide2Button: design?.slide2Button,
    slide2LeftBigImageCollection:
      design?.slide2LeftBigImageCollectionCollection,
    slide2RightBigImageCollection:
      design?.slide2RightBigImageCollectionCollection,
    slide2SmallImagesCollection: design?.slide2SmallImagesCollectionCollection,
    slide2Text: design?.slide2Text,
    slide2TitleDesc: design?.slide2TitleDesc,
  };

  const slide3 = {
    slide3Button: design?.slide3Button,
    slide3Image: design?.slide3Image,
    slide3Text: design?.slide3Text,
    slide3TitleDesc: design?.slide3TitleDesc,
  };

  const slide4 = {
    slide4Button: design?.slide4Button,
    slide4Image: design?.slide4Image,
    slide4Text: design?.slide4Text,
    slide4TitleDesc: design?.slide4TitleDesc,
  };

  return {
    props: {
      design,
      slide1,
      slide2,
      slide3,
      slide4,
    },
  };
}
