import FeaturesCard from '@/components/features/featuresCard'
import Hero from '@/components/hero/hero'
import Image from 'next/image';
import { feature1 } from '@/constants/features';
import FeaturesComponent from '@/components/features/featuresComponent';

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <FeaturesComponent cards={feature1} />
    </main>
  )
}
