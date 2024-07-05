import React, { useLayoutEffect, useRef, useState } from "react";
import {
  CollectionSlider,
  IndividualCoSlide1,
  IndividualCoSlide2,
  IndividualLastSlide,
  PrimaryLayout,
} from "@/components";
import {
  getCollectionContentBox,
  getIndividualProductPageData,
} from "@/queries";
import client from "@/client";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IndividualProduct = ({ data, slide1Data, lastSlideData }) => {
  const slide1ref = useRef(null);
  const [navVariant, setNavVariant] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (slide1ref.current)
        ScrollTrigger.create({
          trigger: slide1ref.current,
          start: "bottom top",
          end: "bottom top",
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
    <PrimaryLayout variant={navVariant}>
      <IndividualCoSlide1 data={slide1Data} ref={slide1ref} />
      <IndividualCoSlide2 data={data[0]} />

      <IndividualLastSlide Asindividual={true} data={lastSlideData} />
    </PrimaryLayout>
  );
};

export default IndividualProduct;

export async function getStaticPaths() {
  const collectionContent = await client.query(getCollectionContentBox());
  const content = collectionContent.data.collectionContentBoxCollection;

  let paths = [];
  for (let i = 0; i < content.items.length; i++) {
    const tags = content.items[i]?.tag || [];
    for (let j = 0; j < tags.length; j++) {
      if (paths.indexOf(tags[j]) === -1) {
        paths.push(tags[j]);
      }
    }
  }
  paths = paths.map((path) => ({
    params: { slug: path.toLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const individual = await client.query(
    getIndividualProductPageData(params.slug)
  );

  const individualData =
    individual.data.individualCollectionCollection.items[0];

  const slide1Data = {
    slide1BottomTextCollection: individualData.slide1BottomTextCollection.items,
    slide1Button: individualData.slide1Button,
    slide1SmallTitle: individualData.slide1SmallTitle,
    slide1Title: individualData.slide1Title,
  };

  const lastSlideData = {
    lastSlideBoxesCollection: individualData.lastSlideBoxesCollection,
    lastSlideImage: individualData.lastSlideImage,
  };

  const sliderData = {
    sliderImageCollection: individualData.sliderImageCollection.items,
  };

  const collectionContent = await client.query(getCollectionContentBox());
  const content = collectionContent.data.collectionContentBoxCollection;
  const data = content.items.filter((item) => {
    const tags = item?.tag || [];
    return tags.indexOf(params.slug.toLowerCase()) !== -1;
  });
  return {
    props: {
      slide1Data,
      lastSlideData,
      sliderData,
      data,
    },
  };
}
