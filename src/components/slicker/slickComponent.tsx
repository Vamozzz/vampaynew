"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import TextButton from "../customButton/textButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const FeaturesWithLink1 = {
  title1: "Explore our other Products",
  cards: [
    {
      cardImage: "/demoImage.svg",
      cardTitle: "Tailored solution",
      cardContent:
        "Customize your payment experience, finding answers effortlessly without extensive searches.",
      linkText: "read more",
      linkValue: "/products/collection",
    },
    {
      cardImage: "/Optimal_Efficiency.svg",
      cardTitle: "Optimal Efficiency",
      cardContent:
        "Vampay's payment solutions adapt to your service needs, ensuring maximum ease and efficiency.",
      linkText: "read more",
      linkValue: "/products/collection",
    },
    {
      cardImage: "/documents.svg",
      cardTitle: "Seamless Transactions",
      cardContent:
        "Payment solutions match your service requirements for seamless financial operations.",
      linkText: "read more",
      linkValue: "/products/collection",
    },
  ],
};

const SlickerComponent: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    if (url.startsWith("/")) {
      router.push(url);
    } else {
      window.location.href = url;
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoPlay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden lg:px-20 p-5">
      <div className="features_title p-10">
        <p>{FeaturesWithLink1.title1}</p>
      </div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {FeaturesWithLink1.cards.map((cardItem, index) => (
          <div
            key={index}
            className={`my-2  ${
              index < FeaturesWithLink1.cards.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <div className="flex flex-col justify-around gap-2 items-center p-2 ">
              {" "}
              <div className="flex justify-center items-center lg:justify-start lg:items-start ">
                <Image
                  src={cardItem.cardImage}
                  alt={"image"}
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <h3 className="features_card_header">{cardItem.cardTitle}</h3>
              <p className=" features_card_content text-center lg:text-left">
                {cardItem.cardContent}
              </p>
              <div className="flex justify-center">
                {cardItem?.linkText && (
                  <TextButton
                    endIcon={true}
                    onClick={() => handleButtonClick(cardItem.linkValue)}
                  >
                    {cardItem?.linkText}
                  </TextButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute hidden lg:inline-block top-2/3 left-8 transform -translate-y-1/2 bg-primaryPurple p-2 rounded-full text-white"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute  hidden lg:inline-block top-2/3 right-8 transform -translate-y-1/2 bg-primaryPurple p-2 rounded-full text-white"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default SlickerComponent;
