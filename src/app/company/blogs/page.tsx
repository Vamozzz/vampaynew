import RootLayout from "@/app/layout";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import PricingComponent from "@/components/pricing/pricingComponent";
import { Feature1, Feature7, heroAboutUs, heroBlogsPage, heroPricing } from "@/constants/features";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroAllSection heroContent={heroBlogsPage} />
      {/* <PricingComponent />
      <Functionality {...Feature7} /> */}
    </div>
  );
}

export default Page;
