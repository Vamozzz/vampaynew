import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import {
  Feature1,
  Feature8,
  blockDevApi1,
  heroDeveloperApi,
  stripFeaturesDev1,
  stripFeaturesPayout1,
} from "@/constants/features";
import React from "react";
import RootLayout from "../layout";
import BlockInfo from "@/components/block/block";
import StripFeature from "@/components/stripFeatures/stripFeatures";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import IndustrySwiper from "@/components/swiper/swiper";

export const metadata = {
  title: "Developer API | Vampay",
  description:
    "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
};

function Page() {
  return (
    <div>
      <HeroAllSection heroContent={heroDeveloperApi} />
      <StripFeature stripitems={stripFeaturesDev1} />
      <BlockInfo {...blockDevApi1} />
      <Functionality
        {...Feature8}
        externalStyle={{
          backgroundColor: "#F9F8FC",
          paddingBottom: 80,
          paddingTop: 80,
        }}
      />
      <IndustrySwiper />
      <ScrollToTopButton />
    </div>
  );
}

export default Page;
