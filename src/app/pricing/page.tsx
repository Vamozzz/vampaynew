import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import PricingComponent from "@/components/pricing/pricingComponent";
import { Feature1, Feature7, heroPricing } from "@/constants/features";
import React from "react";
import RootLayout from "../layout";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";

export const metadata = {
  title: "Pricing | Vampay",
  description:
    "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
};

function Pricing() {
  return (
    <div>
      <HeroAllSection heroContent={heroPricing} />
      <PricingComponent />
      <Functionality
        {...Feature7}
        externalStyle={{
          backgroundColor: "#F9F8FC",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default Pricing;
