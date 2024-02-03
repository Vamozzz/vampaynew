import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import PricingComponent from "@/components/pricing/pricingComponent";
import { Feature1, Feature7, heroPricing } from "@/constants/features";
import React from "react";
import RootLayout from "../layout";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";

function Pricing() {
  return (
    <div>
      <HeroAllSection heroContent={heroPricing} />
      <PricingComponent />
      <Functionality
        {...Feature7}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default Pricing;
