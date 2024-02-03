import RootLayout from "@/app/layout";
import ContactForm from "@/components/contactform/contact";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import PricingComponent from "@/components/pricing/pricingComponent";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import SlickerComponent from "@/components/slicker/slickComponent";
import {
  Feature1,
  Feature7,
  FeaturesWithLinkContactUs1,
  heroAboutUs,
  heroContactUs,
  heroPricing,
  sliderDataCollection,
} from "@/constants/features";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroAllSection heroContent={heroContactUs} />
      <FeaturesComponent feature={FeaturesWithLinkContactUs1} />
      <ContactForm externalStyle={{backgroundColor:"#F7F8FD"}} />
      <SlickerComponent featuresData={sliderDataCollection} />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
