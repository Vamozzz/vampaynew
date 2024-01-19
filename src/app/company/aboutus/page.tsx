import RootLayout from "@/app/layout";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import OurStory from "@/components/ourStory/ourStory";
import PricingComponent from "@/components/pricing/pricingComponent";
import Stats from "@/components/stats/stats";
import IndustrySwiper from "@/components/swiper/swiper";
import { Feature1, Feature7, FeaturesWithLinkAboutUs1, heroAboutUs, heroPricing, storyData1, storyData2 } from "@/constants/features";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroAllSection heroContent={heroAboutUs} />
      <FeaturesComponent feature={FeaturesWithLinkAboutUs1} />
      <OurStory {...storyData1} />
      <OurStory {...storyData2} />
      <Stats />
      <IndustrySwiper />
    </div>
  );
}

export default Page;
