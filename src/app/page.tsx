"use client";
import Hero from "@/components/hero/hero";
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  FeaturesWithLink1,
  FeaturesWithLink2,
  brands,
} from "@/constants/features";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import Stats from "@/components/stats/stats";
import IndustrySwiper from "@/components/swiper/swiper";
import Article from "@/components/articles/articleComponent";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import SlickerComponent from "@/components/slicker/slickComponent";
import UserBrands from "@/components/userBrands/userBrands";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturesComponent feature={FeaturesWithLink1} />
      <UserBrands brandNames={brands} />
      <Functionality
        {...Feature1}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <Functionality {...Feature2} />
      <FeaturesComponent
        feature={FeaturesWithLink2}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <Functionality {...Feature3} />
      <Functionality
        {...Feature4}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 60,
          paddingTop: 60,
        }}
      />
      <IndustrySwiper />
      <Stats />
      <Functionality
        {...Feature6}
        externalStyle={{
          backgroundColor: "#F7F8FD",
          paddingBottom: 60,
          paddingTop: 60,
          marginTop:100,
        }}
      />
      <Functionality {...Feature5} />
      <Article />
      <ScrollToTopButton />
    </main>
  );
}
