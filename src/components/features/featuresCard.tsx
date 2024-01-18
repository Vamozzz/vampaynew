"use client";
import Image from "next/image";
import React from "react";
import TextButton from "../customButton/textButton";
import { gotoProducts } from "@/utils/customFunctions";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CardItem {
  cardTitle: string;
  cardImage: string;
  cardContent: string;
  linkText: string;
  linkValue: string;
  gotoWhere?: () => void;
}

interface FeaturesCardProps {
  cards: CardItem[];
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ cards = [] }) => {
  const route = useRouter();
  return (
    <div className="w-full  flex flex-wrap gap-2 lg:flex-nowrap  justify-around items-center">
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
          {cardItem?.linkText && (
            <TextButton endIcon={true} onClick={cardItem.gotoWhere}>
              {cardItem?.linkText}
            </TextButton>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;
