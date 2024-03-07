import React  from 'react'

import Image from 'next/image'
import Navbar from '../../components/LandingPage/Navbar'
import HeroSection from '../../components/LandingPage/HeroSection'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      
    </div>
  )
}
