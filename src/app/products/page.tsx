import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import CustomizedMenus from "@/components/menu/menu";
import { Feature1, heroAboutUs, heroBlogsPage, heroCollection, heroContactUs, heroDeveloperApi, heroFaq, heroPayout, heroPricing } from "@/constants/features";
import React from "react";

function Page() {
  return (
    <div>
      <HeroAllSection heroContent={heroPayout} />
      <CustomizedMenus />
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

export default Page;
