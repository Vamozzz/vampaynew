import RootLayout from "@/app/layout";
import BasicAccordion from "@/components/accordion/accordion";
import ContactForm from "@/components/contactform/contact";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import PricingComponent from "@/components/pricing/pricingComponent";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import ScrollableTabsButtonForce from "@/components/stripFeatures/stripFeatures";
import {
  Feature1,
  Feature7,
  accordionData,
  heroAboutUs,
  heroFaq,
  heroPricing,
} from "@/constants/features";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroAllSection heroContent={heroFaq} />
      <BasicAccordion accordionData={accordionData} />
      <ContactForm />
      {/* <ScrollableTabsButtonForce /> */}
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
