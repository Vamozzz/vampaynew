import RootLayout from "@/app/layout";
import BlockInfo from "@/components/block/block";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import CustomizedMenus from "@/components/menu/menu";
import StripFeature from "@/components/stripFeatures/stripFeatures";
import { Feature1, FeaturePayout1, FeaturePayout2, FeaturePayout3, FeaturePayout4, blockPayout1, heroAboutUs, heroBlogsPage, heroCollection, heroContactUs, heroDeveloperApi, heroFaq, heroPayout, heroPricing, stripFeaturesPayout1 } from "@/constants/features";
import React from "react";

function Payouts() {
  // 3 components
  return (
    <div>
      <HeroAllSection heroContent={heroPayout} />
      <StripFeature stripitems={stripFeaturesPayout1} />
      <BlockInfo {...blockPayout1}/>
      <Functionality {...FeaturePayout1} />
      <Functionality {...FeaturePayout2} />
      <Functionality {...FeaturePayout3} />
      <Functionality {...FeaturePayout4} />

      {/* <CustomizedMenus /> */}
      {/* <HeroAllSection heroContent={heroPricing} /> */}
      {/* <HeroAllSection heroContent={heroCollection} /> */}
      
      {/* <HeroAllSection heroContent={heroAboutUs} /> */}
      {/* <HeroAllSection heroContent={heroContactUs} /> */}
      {/* <HeroAllSection heroContent={heroBlogsPage} /> */}
      {/* <HeroAllSection heroContent={heroFaq} /> */}
      {/* <Functionality {...Feature1} /> */}
      {/* <Functionality {...Feature2} />
  <Functionality {...Feature3} />
  <Functionality {...Feature4} />
  <Functionality {...Feature5} />
  <Functionality {...Feature6} /> */}
    </div>
  );
}

export default Payouts;
