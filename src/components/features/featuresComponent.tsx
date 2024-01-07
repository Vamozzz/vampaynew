import { feature1 } from "@/constants/features";
import React from "react";
import FeaturesCard from "./featuresCard";

interface CardItem {
  cardTitle: string;
  cardImage: string;
  cardContent: string;
  linkText: string;
  linkValue: string;
}

interface FeaturesCardProps {
  cards: CardItem[];
}

const FeaturesComponent : React.FC<FeaturesCardProps> = ({ cards }) => {
  return (
    <div>
      <div>
        <p>{feature1?.title}</p>
      </div>
      <FeaturesCard cards={cards} />
    </div>
  );
};

export default FeaturesComponent;
