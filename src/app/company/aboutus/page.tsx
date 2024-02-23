import RootLayout from "@/app/layout";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import OurStory from "@/components/ourStory/ourStory";
import PricingComponent from "@/components/pricing/pricingComponent";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import SlickerComponent from "@/components/slicker/slickComponent";
import Stats from "@/components/stats/stats";
import IndustrySwiper from "@/components/swiper/swiper";
import UserBrands from "@/components/userBrands/userBrands";
import {
  Feature1,
  Feature7,
  FeaturesWithLinkAboutUs1,
  brands,
  heroAboutUs,
  heroPricing,
  sliderDataPayout1,
  storyData1,
  storyData2,
} from "@/constants/features";
import React from "react";

export const metadata = {
  title: "About Us | Vampay",
  description:
    "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
};

const Page = () => {
  return (
    <div>
      <HeroAllSection heroContent={heroAboutUs} />
      <FeaturesComponent feature={FeaturesWithLinkAboutUs1} />
      <OurStory
        {...storyData1}
        externalStyle={{ backgroundColor: "#F7F8FD" }}
      />
      <OurStory
        {...storyData2}
        externalStyle={{ backgroundColor: "#F7F8FD", marginBottom: 60 }}
      />
      <UserBrands brandNames={brands} />
      <IndustrySwiper />
      <Stats />
      <SlickerComponent featuresData={sliderDataPayout1} />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
