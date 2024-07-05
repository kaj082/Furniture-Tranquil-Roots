import { gql } from "@apollo/client";

export const getFatoryPageData = () => ({
  query: gql`
    query {
      factoryPage(id: "Ui0zHkqNL47dz7zdDAFCe") {
        slide1Title
        slide1Desc {
          heading
          desb
        }
        slide1Image {
          width
          height
          title
          url {
            url
          }
        }
        slide1Button {
          text
          url
        }
        slide2Image {
          width
          height
          title
          url {
            url # Assuming this directly returns the URL string
          }
        }
        slide2Heading {
          heading
          desb
        }
        slide2Info
        slide2Button {
          text
          url
        }
        slide3Heading {
          heading
          desb
        }
        slide3BoxTitle
        slide3BoxImage {
          width
          height
          title
          url {
            url
          }
        }
        slide3Subtitle {
          heading
          desb
        }
        slide3BoxDescription {
          heading
          desb
        }
        slide3Button {
          text
          url
        }
        slide4Image {
          width
          height
          title
          url {
            url
          }
        }
        slide4ServicesCollectionCollection(limit: 4) {
          # Corrected field name
          items {
            heading
            desb
          }
        }
      }
    }
  `,
});

export const getAboutPageData = () => ({
  query: gql`
    query {
      # add your queryquery {
      aboutPage(id: "60QQOaSrS3DOxYWSvmrJrf") {
        slide1Collection(limit: 10) {
          items {
            image {
              url
              width
              height
            }
            heading1
            linkText {
              url
            }
          }
        }
        aboutBoxCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide2Image {
          url
          title
          width
          height
        }
        slide2Details {
          heading
          desb
        }
        slide2Button {
          url
        }
        slide3Image {
          url
          title
          width
          height
        }
        slide3Details {
          heading
          desb
        }
        slide3Button {
          url
        }
        slide4Title
        slide4Title1 {
          heading
          desb
        }
        slide4ViewsCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide5Image {
          url
          title
          width
          height
        }
        slide5Details {
          heading
          desb
        }
        slide5Button {
          url
        }
        slide6Title
        slide6Image1Collection(limit: 10) {
          items {
            url
            width
            height
          }
        }
        slide6DropdownCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
      }
    }
  `,
});

export const getTextilePageData = () => ({
  query: gql`
    query {
      textilePage(id: "ZMdHsRaaOFno2btyIfutm") {
        slide1Title
        slide1Views {
          heading
          desb
        }
        slide1Heading {
          heading
          desb
        }
        slide1Button {
          text
          url
        }
        slide1Image {
          width
          height
          title
          url
        }
        slide2Image {
          width
          height
          url
          title
        }
        slide2Title
        slide2Button {
          text
          url
        }
        slide3Image {
          width
          height
          title
          url
        }
        slide3Heading {
          heading
          desb
        }
        slide3Button {
          text
          url
        }
        slide4Image {
          width
          height
          title
          url
        }
        slide4Description
        slide5Image {
          width
          height
          title
          url
        }
        slide5Heading {
          heading
          desb
        }
        slide5Button {
          url
          text
        }
      }
      # add your query
    }
  `,
});

export const getDesignandInnovationPageData = () => ({
  query: gql`
    query {
      designAndInnovation(id: "5YytIyOq5d6ex1aQ7hnBf8") {
        slide1Image {
          url
          width
          height
        }
        slide1Title
        slide1Text
        slide2TitleDesc {
          heading
          desb
        }
        slide2BottomDesc
        slide2Button {
          text
          url
        }
        slide2Text
        slide2SmallImagesCollection(limit: 10) {
          items {
            sys {
              id
            }
            url
            width
            height
          }
        }
        slide2LeftBigImageCollection(limit: 10) {
          items {
            sys {
              id
            }
            url
            width
            height
          }
        }
        slide2RightBigImageCollection(limit: 10) {
          items {
            sys {
              id
            }
            url
            width
            height
          }
        }
        slide3TitleDesc {
          heading
          desb
        }
        slide3Button {
          text
          url
        }
        slide3Text
        slide3Image {
          width
          height
          url
        }
        slide4Image {
          url
          width
          height
        }
        slide4TitleDesc {
          heading
          desb
        }
        slide4Text
        slide4Button {
          text
          url
        }
      }
    }
  `,
});

export const getCollectionPageData = () => ({
  query: gql`
    query {
      collection(id: "1hS5lChCv2R84ZhHKDj5S4") {
        slide1SliderCollectionCollection(limit: 10) {
          items {
            image {
              width
              url
              height
            }
            heading1
            linkText {
              text
              url
            }
          }
        }
        slide1Title
        slide1Image {
          width
          height
          url
        }
        slide1BoxesCollection(limit: 10) {
          items {
            sys {
              id
            }
            image {
              width
              height
              url
            }
            heading1
            linkText {
              text
              url
            }
          }
        }
        slide6Title
        slide6DropdownCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide6ImageCollection(limit: 10) {
          items {
            image {
              width
              height
              url
            }
          }
        }
      }
    }
  `,
});

export const getHomePageData = () => ({
  query: gql`
    query {
      homePage(id: "77iwIHC6eFTGEQdZaaEALi") {
        slide1Collection(limit: 10) {
          items {
            image {
              url
              width
              height
            }
            heading1
            linkText {
              text
              url
            }
          }
        }
        slide1ExplorerCollection(limit: 10) {
          items {
            url
            width
            height
          }
        }
        slide2Title
        slide2Desb
        slide2Button {
          text
          url
        }
        slide2SliderCollection(limit: 10) {
          items {
            image {
              url
              width
              height
            }
          }
        }
        slide3Asset {
          url
          width
          height
        }
        slide3Heading
        slide3DropdownListsCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide3ButtonsCollection(limit: 10) {
          items {
            text
            url
          }
        }
        slide4Image {
          url
          width
          height
        }
        slide4Info {
          heading
          desb
        }
        slide4Button {
          text
          url
        }
        slide5Image {
          url
          width
          height
        }
        slide5InfoCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide6SliderCollection(limit: 10) {
          items {
            image {
              url
              width
              height
            }
            heading1
            linkText {
              url
            }
          }
        }
      }
    }
  `,
});

export const getCollectionContentBox = () => ({
  query: gql`
    query {
      collectionContentBoxCollection(limit: 100) {
        items {
          sys {
            id
          }

          sliderMobileimgCollection(limit: 10) {
            items {
              sys {
                id
              }
              image {
                url
                width
                height
              }
            }
          }
          sliderImageCollection(limit: 10) {
            items {
              sys {
                id
              }
              image {
                url
                width
                height
              }
            }
          }
          content {
            heading
            desb
          }
          button {
            text
            url
          }
          tag
          showInCollectionPage
        }
      }
    }
  `,
});

export const getIndividualProductPageData = (slug) => ({
  query: gql`
    query {
      individualCollectionCollection(where: { slug: "${slug}"}) {
        items {
          slide1Title {
            heading
            desb
          }
          slug
          slide1SmallTitle
          slide1Button {
            text
            url
          }
          sliderImageCollection(limit: 10) {
            items {
              sys {
                id
              }
              url
              width
              height
            }
          }
          slide1BottomTextCollection(limit: 10) {
            items {
              sys {
                id
              }
              heading
              desb
            }
          }
          lastSlideImage {
            url
            width
            height
          }
          lastSlideBoxesCollection(limit: 10) {
            items {
              image {
                url
                width
                height
              }
              linkText {
                text
                url
              }
            }
          }
        }
      }
    }
  `,
});
