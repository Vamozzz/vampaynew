import React, { CSSProperties } from "react";
import FeaturesCard from "./featuresCard";

interface Card {
  cardImage: string;
  cardTitle: string;
  cardContent: string;
  linkText: string;
  linkValue: string;
}

interface Feature {
  title1: string;
  title2: string;
  cards: Card[];
  // featureStyles?: object;
}

interface FeaturesComponentProps {
  feature: Feature;
  externalStyle?: CSSProperties;
}

const FeaturesComponent: React.FC<FeaturesComponentProps> = ({
  feature,
  externalStyle,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center py-10 lg:py-10  gap-10"
      style={{ ...externalStyle }}
    >
      <div className="">
        <p className="features_title">{feature?.title1}</p>
        <p className="features_title">{feature?.title2}</p>
      </div>
      <div className="lg:px-32">
        <FeaturesCard cards={feature?.cards} />
      </div>
    </div>
  );
};

export default FeaturesComponent;
