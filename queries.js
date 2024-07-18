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
      aboutPage(id: "2sZpBrIUSpzRH6MbGW5Lfp") {
        slide1CollectionCollection(limit: 3) {
          items {
            image {
              width
              height
              title
              url {
                url
              }
            }
            heading1 {
              heading
              desb
            }
          }
        }

        aboutBoxCollectionCollection(limit: 3) {
          items {
            heading
            desb
          }
        }
        slide2Image {
          url {
            url
          }
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
          url {
            url
          }
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
        slide4ViewsCollectionCollection(limit: 3) {
          items {
            heading
            desb
          }
        }
        slide5Image {
          url {
            url
          }
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
        slide6Image1CollectionCollection(limit: 3) {
          items {
            url {
              url
            }
            width
            height
          }
        }
        slide6DropdownCollectionCollection(limit: 3) {
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
      textilePage(id: "1a1ECHnunGICi8P5HaWz0N") {
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
          url {
            url
          }
        }
        slide2Image {
          width
          height
          url {
            url
          }
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
          url {
            url
          }
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
          url {
            url
          }
        }
        slide4Description
        slide5Image {
          width
          height
          title
          url {
            url
          }
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
      designAndInnovationPage(id: "7rIr3HcOa7n6BCEskbCSlU") {
        slide1Image {
          url {
            url
          }
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
        slide2SmallImagesCollectionCollection(limit: 10) {
          items {
            sys {
              id
            }
            url {
              url
            }
            width
            height
          }
        }
        slide2LeftBigImageCollectionCollection(limit: 10) {
          items {
            sys {
              id
            }
            url {
              url
            }
            width
            height
          }
        }
        slide2RightBigImageCollectionCollection(limit: 10) {
          items {
            sys {
              id
            }
            url {
              url
            }
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
          url {
            url
          }
        }
        slide4Image {
          url {
            url
          }
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
      collectionPage(id: "2UKx7PgFcKHFxo3F1Hwl7") {
        slide1SliderCollectionCollectionCollection(limit: 10) {
          items {
            image {
              title
              width
              height
              url {
                url
              }
            }
            linkText {
              text

              url
            }
            heading1 {
              heading
              desb
            }
          }
        }
        slide1Title
        slide1Image {
          title
          width
          height
          url {
            url
          }
        }
        slide1BoxesCollectionCollection(limit: 10) {
          items {
            sys {
              id
            }
            image {
              width
              height
              title
              url {
                url
              }
            }
            heading1 {
              heading
              desb
            }
            linkText {
              text
              url
            }
          }
        }
        slide6Title
        slide6DropdownCollectionCollection(limit: 10) {
          items {
            heading
            desb
          }
        }
        slide6ImageCollectionCollection(limit: 10) {
          items {
            width
            height
            title
            url {
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
      homePage(id: "12xbkiEqakH4oP0grt3FVz") {
        slide1CollectionCollection(limit: 10) {
          items {
            image {
              width
              height
              url {
                url
              }
            }
            heading1 {
              heading
              desb
            }
            linkText {
              text
              url
            }
          }
        }
        slide1ExplorerCollectionCollection(limit: 3) {
          items {
            width
            height
            url {
              url
            }
          }
        }
        slide2Desb

        slide2Title
        slide2Button {
          text
          url
        }
        slide2SliderCollectionCollection(limit: 3) {
          items {
            width
            height
            url {
              url
            }
          }
        }
        slide3Asset {
          width
          height
          url {
            url
          }
        }
        slide3Heading {
          heading
          desb
        }
        slide3DropdownListsCollectionCollection(limit: 3) {
          items {
            heading
            desb
          }
        }
        slide3ButtonsCollectionCollection(limit: 3) {
          items {
            text
            url
          }
        }
        slide4Image {
          width
          height
          url {
            url
          }
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
          width
          height
          url {
            url
          }
        }
        slide5InfoCollectionCollection(limit: 3) {
          items {
            heading
            desb
          }
        }
        slide6SliderCollectionCollection(limit: 3) {
          items {
            image {
              width
              height
              url {
                url
              }
            }
            heading1 {
              heading
              desb
            }
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

          sliderMobileimgCollectionCollection(limit: 10) {
            items {
              sys {
                id
              }
              width
              height
              url {
                url
              }
              title
            }
          }
          sliderImageCollectionCollection(limit: 10) {
            items {
              sys {
                id
              }
              width
              height
              title
              url {
                url
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
          sliderImageCollectionCollection(limit: 10) {
            items {
              sys {
                id
              }
              url{url
                
              }
              width
              height
            }
          }
          slide1BottomTextCollectionCollection(limit: 10) {
            items {
              sys {
                id
              }
              heading
              desb
            }
          }
          lastSlideImage {
            url{
              url
            }
            width
            height
          }
          lastSlideBoxesCollectionCollection(limit: 10) {
            items {
              image {
                url{
                  url
                }
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
