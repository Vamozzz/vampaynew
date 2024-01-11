import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import { Feature1, Feature8, heroDeveloperApi } from "@/constants/features";
import React from "react";

function Page() {
  return (
    <div>
      <HeroAllSection heroContent={heroDeveloperApi} />
      <Functionality {...Feature8} />
    </div>
  );
}

export default Page;
