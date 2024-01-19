import RootLayout from "@/app/layout";
import Article from "@/components/articles/articleComponent";
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
       <Article />
    </div>
  );
}

export default Page;
