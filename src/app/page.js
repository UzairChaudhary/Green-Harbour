import React  from 'react'

import Image from 'next/image'
import Navbar from '../../components/LandingPage/Navbar'
import HeroSection from '../../components/LandingPage/HeroSection'
import Benefits from '../../components/LandingPage/Benefits'
import Upgrades from '../../components/LandingPage/Upgrades'
import Working from '../../components/LandingPage/Working'
import FAQ from '../../components/LandingPage/FAQ'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Benefits/>
      <Upgrades/>
      <Working/>
      <FAQ/>
    </div>
  )
}
