import React  from 'react'

import Image from 'next/image'
import Navbar from '../../components/LandingPage/Navbar'
import HeroSection from '../../components/LandingPage/HeroSection'
import Benefits from '../../components/LandingPage/Benefits'
import Upgrades from '../../components/LandingPage/Upgrades'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Benefits/>
      <Upgrades/>
    </div>
  )
}
