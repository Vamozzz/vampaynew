"use client"
import FeaturesCard from '@/components/features/featuresCard'
import Hero from '@/components/hero/hero'
import Image from 'next/image';
import { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, FeaturesWithLink1, FeaturesWithLink2 } from '@/constants/features';
import FeaturesComponent from '@/components/features/featuresComponent';
import TemporaryDrawer from '@/components/drawer/drawer';
import UserBrands from '@/components/userBrands/userBrands';
import Functionality from '@/components/functionality/functionality';
import StatsComponent from '@/components/stats/statsComponent';
import Stats from '@/components/stats/stats';
import SimpleSlider from '@/slicker/slickComponent';
import BasicAccordion from '@/components/accordion/accordion';
import ExploreComponent from '@/components/explore/exploreComponent';
import Article from '@/components/articles/articleComponent';
import HeroAllSection from '@/components/heroAll/heroAllSection';
import Footer from '@/components/footer/footer';
// import SwiperComponent from '@/components/swiper/swiper';
import ScrollableTabsButtonForce from '@/components/stripFeatures/stripFeatures';
import PricingComponent from '@/components/pricing/pricingComponent';

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <FeaturesComponent feature={FeaturesWithLink1} />
      <Functionality {...Feature1}  />
      <Functionality {...Feature2} />
      <FeaturesComponent feature={FeaturesWithLink2} />
      <Functionality {...Feature3} />
      <Functionality {...Feature4} />
      <Stats />
      {/* <BasicAccordion /> */}
      <Functionality {...Feature5} />
      <Functionality {...Feature6} />


      
      {/* <Article /> */}
      {/* <HeroAllSection /> */}
      {/* <Footer /> */}
      {/* <SwiperComponent /> */}
      {/* <ScrollableTabsButtonForce /> */}
      
    </main>
  )
}
