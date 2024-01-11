import Functionality from '@/components/functionality/functionality'
import HeroAllSection from '@/components/heroAll/heroAllSection'
import { Feature1 } from '@/constants/features'
import React from 'react'

function Page() {
  return (
    <div>
        <HeroAllSection />
        <Functionality {...Feature1} />
      {/* <Functionality {...Feature2} />
      <Functionality {...Feature3} />
      <Functionality {...Feature4} />
      <Functionality {...Feature5} />
      <Functionality {...Feature6} /> */}
    </div>
  )
}

export default Page