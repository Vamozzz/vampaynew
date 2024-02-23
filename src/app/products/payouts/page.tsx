import RootLayout from "@/app/layout";
import BlockInfo from "@/components/block/block";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import CustomizedMenus from "@/components/menu/menu";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import SlickerComponent from "@/components/slicker/slickComponent";
import StripFeature from "@/components/stripFeatures/stripFeatures";
import {
  Feature1,
  FeaturePayout1,
  FeaturePayout2,
  FeaturePayout3,
  FeaturePayout4,
  blockPayout1,
  heroAboutUs,
  heroBlogsPage,
  heroCollection,
  heroContactUs,
  heroDeveloperApi,
  heroFaq,
  heroPayout,
  heroPricing,
  sliderDataPayout1,
  stripFeaturesPayout1,
} from "@/constants/features";
import React from "react";

export const metadata = {
  title: "Payouts | Vampay",
  description:
    "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
};

function Payouts() {
  return (
    <div>
      <HeroAllSection heroContent={heroPayout} />
      <StripFeature stripitems={stripFeaturesPayout1} />
      <BlockInfo {...blockPayout1} />
      <Functionality {...FeaturePayout1} />
      <Functionality
        {...FeaturePayout2}
        externalStyle={{
          backgroundColor: "#F9F8FC",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <Functionality {...FeaturePayout3} />
      <Functionality
        {...FeaturePayout4}
        externalStyle={{
          backgroundColor: "#F9F8FC",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <SlickerComponent featuresData={sliderDataPayout1} />
      <ScrollToTopButton />
    </div>
  );
}

export default Payouts;
