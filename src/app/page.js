import React  from 'react'

import Image from 'next/image'
import Navbar from '../../components/LandingPage/Navbar'
import HeroSection from '../../components/LandingPage/HeroSection'
import Benefits from '../../components/LandingPage/Benefits'
import Upgrades from '../../components/LandingPage/Upgrades'
import Working from '../../components/LandingPage/Working'
import FAQ from '../../components/LandingPage/FAQ'
import Aboutus from '../../components/LandingPage/aboutus'

export default function Home() {
  return (
    <div>
      
      <HeroSection/>
      <Benefits/>
      <Upgrades/>
      <Working />
      <FAQ/>
      <Aboutus/>
      
      
    </div>
  )
}
