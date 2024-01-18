import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import { Feature1, Feature8, blockDevApi1, heroDeveloperApi, stripFeaturesDev1, stripFeaturesPayout1 } from "@/constants/features";
import React from "react";
import RootLayout from "../layout";
import BlockInfo from "@/components/block/block";
import StripFeature from "@/components/stripFeatures/stripFeatures";

function Page() {
  return (
    <div>
      <HeroAllSection heroContent={heroDeveloperApi} />
      <StripFeature stripitems={stripFeaturesDev1} />
      <BlockInfo {...blockDevApi1} />
      <Functionality {...Feature8} />
    </div>
  );
}

export default Page;
