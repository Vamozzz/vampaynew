import Image from "next/image";
import React from "react";
import TextButton from "../customButton/textButton";

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

const FeaturesCard: React.FC<FeaturesCardProps> = ({ cards }) => {
  return (
    <div className="w-full flex flex-wrap gap-2 lg:flex-nowrap  justify-around items-center">
      {cards.map((cardItem, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 items-center lg:items-start mx-2 mb-4 px-4 lg:p-4 ${
            index < cards.length - 1 ? "lg:border-r" : ""
          }`}
        >
          <div className=" ">
            <Image
              src={cardItem.cardImage}
              alt={"image"}
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
          <h3 className="features_card_header">{cardItem.cardTitle}</h3>
          <p className=" features_card_content text-center lg:text-left">
            {cardItem.cardContent}
          </p>
          <TextButton endIcon={true}>Read More</TextButton>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;
