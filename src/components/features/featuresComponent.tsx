import React from "react";
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
}

interface FeaturesComponentProps {
  feature: Feature; 
}

const FeaturesComponent: React.FC<FeaturesComponentProps> = ({ feature }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 lg:py-20 gap-10">
      <div className="">
        <p className="features_title">{feature?.title1}</p>
        <p className="features_title">{feature?.title2}</p>
      </div>
      <div className="lg:px-20">
        <FeaturesCard cards={feature?.cards} />
      </div>
    </div>
  );
};

export default FeaturesComponent;
