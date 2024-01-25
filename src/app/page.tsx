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
} from "@/constants/features";
import FeaturesComponent from "@/components/features/featuresComponent";
import Functionality from "@/components/functionality/functionality";
import Stats from "@/components/stats/stats";
import IndustrySwiper from "@/components/swiper/swiper";
import Article from "@/components/articles/articleComponent";
import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import SlickerComponent from "@/components/slicker/slickComponent";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SlickerComponent />
      <FeaturesComponent feature={FeaturesWithLink1} />
      <Functionality {...Feature1} />
      <Functionality {...Feature2} />
      <IndustrySwiper />
      <FeaturesComponent feature={FeaturesWithLink2} />
      <Functionality {...Feature3} />
      <Functionality {...Feature4} />
      <Stats />
      <Functionality {...Feature5} />
      <Functionality {...Feature6} />
      <Article />
      <ScrollToTopButton />
    </main>
  );
}
