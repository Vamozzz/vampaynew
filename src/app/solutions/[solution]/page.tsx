import Functionality from "@/components/functionality/functionality";
import HeroAllSection from "@/components/heroAll/heroAllSection";
import SlickerComponent from "@/components/slicker/slickComponent";
import StripFeature from "@/components/stripFeatures/stripFeatures";
import {
  FeatureSolution1,
  FeatureSolution2,
  FeatureSolution3,
  FeatureSolution4,
  FeatureSolution5,
  FeatureSolution6,
  heroSolutions,
  sliderDataCollection,
  stripFeaturesSolutions1,
} from "@/constants/features";
import staticSolutions from "@/services/staticSolutions";

interface PageProps {
  params: {
    solution: string;
  };
}

const Page: React.FC<PageProps> = (props) => {
  const pathName = props.params.solution;

  const getHeaderdata = (endPoint: string) => {
    switch (endPoint) {
      case "educational-institutions":
        return "Educational Institutions";

      case "travel-agencies":
        return "Travel Agencies";

      case "hospitality":
        return "Hospitality";

      case "lifestyle":
        return "Lifestyle";

      case "tech-services":
        return "Tech Services";

      case "healthcare":
        return "Healthcare";

      case "major-brands":
        return "Major Brands";

      case "small-businesses":
        return "Small Businesses";

      case "resellers-and-retailers":
        return "Resellers and Retailers";

      default:
    }
  };

  return (
    <div>
      <HeroAllSection heroContent={heroSolutions} />
      <StripFeature stripitems={stripFeaturesSolutions1} />
      <Functionality
        {...FeatureSolution1}
        spanDynamicData={getHeaderdata(pathName)}
      />
      <Functionality
        {...FeatureSolution2}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 80,
          paddingTop: 80,
        }}
      />
      <Functionality {...FeatureSolution3} />
      <Functionality
        {...FeatureSolution4}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 80,
          paddingTop: 80,
        }}
      />
      <Functionality {...FeatureSolution5} />
      <Functionality
        {...FeatureSolution6}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 80,
          paddingTop: 80,
        }}
      />
      <SlickerComponent featuresData={sliderDataCollection} />
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  return staticSolutions.map((solution) => ({
    solution: solution.text,
  }));
}
