import RootLayout from "@/app/layout";
import Banner from "@/components/banner/banner";
import BlockInfo from "@/components/block/block";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import SlickerComponent from "@/components/slicker/slickComponent";
import StripFeature from "@/components/stripFeatures/stripFeatures";
import ScrollableTabsButtonForce from "@/components/stripFeatures/stripFeatures";
import {
  Feature1,
  FeatureCollection1,
  FeatureCollection2,
  FeatureCollection3,
  FeaturesWithLink1,
  FeaturesWithLink3,
  FeaturesWithLinkCollection1,
  blockCollection1,
  heroCollection,
  stripFeaturesCollection1,
  stripFeaturesCollection2,
  stripFeaturesCollection3,
} from "@/constants/features";
import React from "react";

function Collection() {
  
  return (
    <div>
      <HeroAllSection heroContent={heroCollection} />
      <StripFeature stripitems={stripFeaturesCollection1} />
      <BlockInfo {...blockCollection1} />
      <FeaturesComponent feature={FeaturesWithLinkCollection1} />
      <StripFeature stripitems={stripFeaturesCollection2} />
      <Functionality {...FeatureCollection1} />
      <Functionality {...FeatureCollection2} />
      <Functionality {...FeatureCollection3} />
     
      <Banner />
      <StripFeature stripitems={stripFeaturesCollection3} />
      {/* <FeaturesComponent feature={FeaturesWithLink3} /> */}

      {/* <SlickerComponent cards={cards} /> */}
    </div>
  );
}

export default Collection;
