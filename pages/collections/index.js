import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import client from "@/client";
import {
  CollectionSlide1,
  CollectionSlide4,
  CollectionSlider,
  Cursor1,
  PrimaryLayout,
} from "@/components";
import { getCollectionContentBox, getCollectionPageData } from "@/queries";
//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cursorStore from "@/zustand/cursor.store";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);

const collections = ({ slide1Data, slide4Data, content }) => {
  const slide1ref = useRef(null);
  const [navVariant, setNavVariant] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const router = useRouter();
  //
  const { addElementRef } = cursorStore();

  const allCollectionWraps = useRef(
    content.map((v) => ({ wrapper: [], elements: [] }))
  );

  useEffect(() => {
    addElementRef({
      route: router.pathname,
      refs: [...allCollectionWraps.current],
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (slide1ref.current)
        ScrollTrigger.create({
          trigger: slide1ref.current,
          start: "bottom top",
          end: "bottom top",
          onEnter: () => {
            setNavVariant(true);
            // setAutoplay(true);
          },
          onLeaveBack: () => {
            setNavVariant(false);
            // setAutoplay({
            //   slide1: false,
            // });
          },
        });
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <PrimaryLayout variant={navVariant}>
      <CollectionSlide1 data={slide1Data} ref={slide1ref} />
      {content.map((item, index) => {
        return (
          <CollectionSlider
            key={item.sys.id}
            data={item}
            autoplay={autoplay}
            ref={allCollectionWraps}
            index={index}
          />
        );
      })}
      <CollectionSlide4 data={slide4Data} />
    </PrimaryLayout>
  );
};

export default collections;

export async function getStaticProps() {
  const data = await client.query(getCollectionPageData());
  const collection = data.data.collectionPage;

  const collectionContent = await client.query(getCollectionContentBox());
  const content = collectionContent.data.collectionContentBoxCollection;
  const filteredContent = content.items.filter(
    (item) => item.showInCollectionPage
  );

  const slide1Data = {
    slide1BoxesCollection: collection?.slide1BoxesCollectionCollection,
    slide1Image: collection?.slide1Image,
    slide1Title: collection?.slide1Title,
  };
  const slide4Data = {
    slide6DropdownCollection: collection?.slide6DropdownCollectionCollection,
    slide6ImageCollection: collection?.slide6ImageCollectionCollection.items,
    slide6Title: collection?.slide6Title,
  };

  return {
    props: {
      content: filteredContent,
      slide1Data,
      slide4Data,
    },
  };
}
