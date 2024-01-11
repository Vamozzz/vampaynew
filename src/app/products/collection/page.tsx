import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import { Feature1, FeatureCollection1, FeatureCollection2, FeaturesWithLink1, FeaturesWithLinkCollection1, heroCollection } from "@/constants/features";
import React from "react";



function Page() {
    return (
      <section>
        <HeroAllSection heroContent={heroCollection} />
         <FeaturesComponent feature={FeaturesWithLinkCollection1} />
         <Functionality {...FeatureCollection1}  />
         <Functionality {...FeatureCollection2}  />
      </section>
    );
  }
  
  export default Page;
  